'use client';
import { Category, Occasion, Priority, Status } from '@/constants';
import { auth } from '@/firebase/clientApp';
import { createGift, updateGift } from '@/firebase/crudUtils';
import { GiftDataType } from '@/types';
import { convertISOToGiftDate } from '@/utils/server';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

type GiftEditProps = {
  newGift?: boolean;
  data?: GiftDataType;
  id?: string;
};

const InputError = ({ fieldName }: { fieldName: string }) => {
  return <p className="text-red-600">{fieldName} is required.</p>;
};

const GiftEdit = ({ newGift, data, id }: GiftEditProps) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const date = !data?.date
    ? convertISOToGiftDate(new Date().toISOString())
    : data.date;

  const formDefaultValues = {
    status: data?.status || Status.AVAILABLE,
    name: data?.name || '',
    priority: data?.priority || Priority.HIGH,
    category: data?.category || Category.NONE,
    occasion: data?.occasion || Occasion.NONE,
    price: data?.price || '',
    linkOne: data?.linkOne || '',
    linkTwo: data?.linkTwo || '',
    linkThree: data?.linkThree || '',
    notes: data?.notes || '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });

  const onSubmit = async (formData: typeof formDefaultValues) => {
    if (id && user?.email === data?.ownerEmail) {
      await updateGift(id, formData);
      router.back();
    }
    if (newGift && user?.email) {
      const giftData = { ...formData, date, ownerEmail: user.email };
      await createGift(giftData);
      router.back();
    }
  };

  if (loading) return <div>Checking user...</div>;

  if (error)
    return (
      <>
        <div>There was same error with your credentials...</div>
        <div>Try to login again...</div>)
      </>
    );

  //TODO: Go option on the left side of the link when in edit mode so the owner can visit items page

  if (user)
    return (
      <form
        role="form"
        className="gift-wrapper flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {data?.ownerEmail && data?.ownerEmail !== user.email && (
          <p className="text-orange-500 col-span-2">{`${data?.ownerEmail} want's this:`}</p>
        )}
        {data?.ownerEmail && data?.ownerEmail === user.email && (
          <p className="text-orange-500 col-span-2">
            {"It's your item, edit what you want:"}
          </p>
        )}
        {!data?.ownerEmail && (
          <p className="col-span-2">
            New item for <span className="text-orange-500">{user.email}</span>:
          </p>
        )}

        <label htmlFor="name" className="text-sm text-gray-400">
          Gift name:
          <input
            className={`gift-name text-sm text-gray-70 border rounded-md col-span-2 p-4 w-full mt-3 mb-1 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
              errors.name && 'bg-red-200'
            }`}
            {...register('name', { required: true })}
            id="name"
          />
          {errors.name && <InputError fieldName="Gift name" />}
        </label>

        <div className="gift-attributes-wrapper grid grid-cols-2 gap-5 ">
          <label htmlFor="status" className="text-sm text-gray-400">
            Status:{' '}
            <select
              id="status"
              className={`gift-status text-xs font-semibold border rounded-md p-3 text-violet-400 w-full mt-3 mb-1 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.status && 'bg-red-200'
              }`}
              {...register('status', { required: true })}
            >
              <option value={Status.AVAILABLE}>{Status.AVAILABLE}</option>
              <option value={Status.RESERVED}>{Status.RESERVED}</option>
              <option value={Status.BOUGHT}>{Status.BOUGHT}</option>
            </select>
            {errors.status && <InputError fieldName="Status" />}
          </label>

          <label htmlFor="priority" className="text-sm text-gray-400">
            Priority:{' '}
            <select
              id="priority"
              className={`gift-priority text-xs font-semibold border rounded-md p-3 text-orange-500 w-full mt-3 mb-1  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.priority && 'bg-red-200'
              }`}
              {...register('priority', { required: true })}
            >
              <option value={Priority.HIGH}>{Priority.HIGH}</option>
              <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
              <option value={Priority.LOW}>{Priority.LOW}</option>
            </select>
            {errors.priority && <InputError fieldName="Priority" />}
          </label>

          <label htmlFor="occasion" className="text-sm text-gray-400">
            Occasion:{' '}
            <select
              id="occasion"
              className={`gift-occasion text-xs font-semibold border rounded-md p-3 text-green-500 w-full mt-3 mb-1  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.occasion && 'bg-red-200'
              }`}
              {...register('occasion', { required: true })}
            >
              <option value={Occasion.NONE}>{Occasion.NONE}</option>
              <option value={Occasion.BITHDAY}>{Occasion.BITHDAY}</option>
              <option value={Occasion.HOLIDAYS}>{Occasion.HOLIDAYS}</option>
              <option value={Occasion.NAMEDAY}>{Occasion.NAMEDAY}</option>
              <option value={Occasion.THANKS}>{Occasion.THANKS}</option>
              <option value={Occasion.OTHER}>{Occasion.OTHER}</option>
            </select>
            {errors.occasion && <InputError fieldName="Occasion" />}
          </label>

          <label htmlFor="category" className="text-sm text-gray-400">
            Category:{' '}
            <select
              id="category"
              className={`gift-category text-xs font-semibold border rounded-md p-3 text-blue-500 w-full mt-3 mb-1  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.category && 'bg-red-200'
              }`}
              {...register('category', { required: true })}
            >
              <option value={Category.NONE}>{Category.NONE}</option>
              <option value={Category.BEAUTY}>{Category.BEAUTY}</option>
              <option value={Category.BOOKS}>{Category.BOOKS}</option>
              <option value={Category.CLOTHING}>{Category.CLOTHING}</option>
              <option value={Category.ELECTRONICS}>
                {Category.ELECTRONICS}
              </option>
              <option value={Category.FOOD}>{Category.FOOD}</option>
              <option value={Category.GADGETS}>{Category.GADGETS}</option>
              <option value={Category.HOME}>{Category.HOME}</option>
              <option value={Category.OTHER}>{Category.OTHER}</option>
            </select>
            {errors.category && <InputError fieldName="Category" />}
          </label>

          <label htmlFor="price" className="text-sm text-gray-400">
            Price:{' '}
            <input
              id="price"
              className={`gift-price text-xs font-semibold border rounded-md p-3 text-black w-full mt-3 mb-1 text-right focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.price && 'bg-red-200'
              }`}
              {...register('price', { required: true })}
            />
            {errors.price && <InputError fieldName="Price" />}
          </label>

          <p className="gift-date text-sm text-gray-400">
            Created:{' '}
            <span className="block text-xs font-semibold border rounded-md p-3 w-full mt-3 mb-1 text-right text-black  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed">
              {date}
            </span>
          </p>
        </div>
        <label htmlFor="linkOne" className="text-sm text-gray-400">
          Link 1:
          <input
            className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
            {...register('linkOne')}
            id="linkOne"
          />
        </label>
        <label htmlFor="linkTwo" className="text-sm text-gray-400">
          Link 2:
          <input
            className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
            {...register('linkTwo')}
            id="linkTwo"
          />
        </label>
        <label htmlFor="linkThree" className="text-sm text-gray-400">
          Link 3:
          <input
            className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
            {...register('linkThree')}
            id="linkThree"
          />
        </label>
        <label htmlFor="notes" className="text-sm text-gray-400">
          Notes:
          <textarea
            className={`gift-notes border rounded-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed`}
            {...register('notes')}
            id="notes"
            rows={3}
          />
        </label>
        <button
          type="submit"
          className="block p-2 text-center bg-orange-500 rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
        >
          {newGift ? 'Create' : 'Save'}
        </button>
      </form>
    );

  return (
    <>
      <h2>You are here by mistake...</h2>
      <p>
        Please <Link href={'/auth'}>Login or Signup</Link>
      </p>
    </>
  );
  // TODO: Wrong page component when user goes to the wrong page or cliks back in browser and is not logged in
};

export default GiftEdit;
