'use client';
import { Category, Occasion, Priority, Status } from '@/constants';
import { auth } from '@/firebase/clientApp';
import { createGift, updateGift } from '@/firebase/crudUtils';
import { FormDataType, GiftDataType } from '@/types';
import { convertISOToGiftDate, prepareFormData } from '@/utils/server';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import GiftDelete from '@/components/GiftDelete';
import Unauthenticated from '@/components/Unautheticated';
import LinkIcon from '@/assets/LinkIcon.svg';
import Image from 'next/image';

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
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });

  const onSubmit = async (formData: FormDataType) => {
    const preparedData = prepareFormData(formData);

    if (id && user?.email === data?.ownerEmail) {
      await updateGift(id, preparedData);
      router.back();
    }

    if (newGift && user?.email) {
      const giftData = { ...preparedData, date, ownerEmail: user.email };
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
            autoFocus
            tabIndex={1}
            className={`gift-name text-sm text-gray-700 border rounded-md col-span-2 p-4 w-full mt-3 mb-1 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
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
              tabIndex={2}
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
              tabIndex={3}
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
              tabIndex={4}
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
              tabIndex={5}
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
              tabIndex={6}
              id="price"
              className={`gift-price text-xs font-semibold border rounded-md p-3 text-gray-700 w-full mt-3 mb-1 text-right focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed ${
                errors.price && 'bg-red-200'
              }`}
              {...register('price', { required: true })}
            />
            {errors.price && <InputError fieldName="Price" />}
          </label>

          <p className="gift-date text-sm text-gray-400">
            Created:{' '}
            <span className="block text-xs font-semibold border rounded-md p-3 w-full mt-3 mb-1 text-right text-gray-700  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed">
              {date}
            </span>
          </p>
        </div>
        <label htmlFor="linkOne" className="text-sm text-gray-400">
          Link 1:
          <div className="link-wrapper flex items-center">
            <input
              tabIndex={7}
              className="gift-link flex-1 text-xs border-y border-l rounded-l-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
              {...register('linkOne')}
              id="linkOne"
            />
            <Link
              href={watch('linkOne')}
              target="_blank"
              className="mt-3 p-3 border rounded-r-md"
            >
              <Image src={LinkIcon} alt="link icon" width={16} height={16} />
            </Link>
          </div>
        </label>
        <label htmlFor="linkTwo" className="text-sm text-gray-400">
          Link 2:
          <div className="link-wrapper flex items-center">
            <input
              tabIndex={8}
              className="gift-link flex-1 text-xs border-y border-l rounded-l-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
              {...register('linkTwo')}
              id="linkTwo"
            />
            <Link
              href={watch('linkTwo')}
              target="_blank"
              className="mt-3 p-3 border rounded-r-md"
            >
              <Image src={LinkIcon} alt="link icon" width={16} height={16} />
            </Link>
          </div>
        </label>
        <label htmlFor="linkThree" className="text-sm text-gray-400">
          Link 3:
          <div className="link-wrapper flex items-center">
            <input
              tabIndex={9}
              className="gift-link flex-1 text-xs border-y border-l rounded-l-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
              {...register('linkThree')}
              id="linkThree"
            />
            <Link
              href={watch('linkThree')}
              target="_blank"
              className="mt-3 p-3 border rounded-r-md"
            >
              <Image src={LinkIcon} alt="link icon" width={16} height={16} />
            </Link>
          </div>
        </label>
        <label htmlFor="notes" className="text-sm text-gray-400">
          Notes:
          <textarea
            tabIndex={10}
            className={`gift-notes border rounded-md p-3 text-black w-full mt-3 focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed`}
            {...register('notes')}
            id="notes"
            rows={3}
          />
        </label>
        <div className="btn-wrapper flex justify-between gap-10">
          <button
            onClick={() => router.back()}
            type="button"
            tabIndex={12}
            className=" p-2 px-5 text-center bg-orange-500 rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          >
            Cancel
          </button>
          <button
            tabIndex={11}
            type="submit"
            className="flex-1 p-2 text-center bg-green-600 rounded-md text-white text-base  focus-visible:shadow outline-orange-500  focus-visible:outline-offset-4 focus-visible:outline-4 focus-visible:outline-dashed"
          >
            {newGift ? 'Create' : 'Save'}
          </button>
        </div>
        {!newGift && id && <GiftDelete id={id} />}
      </form>
    );

  return <Unauthenticated />;
};

export default GiftEdit;
