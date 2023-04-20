'use client';
import { Category, Occasion, Priority, Status } from '@/constants';
import { GiftDataType } from '@/types';
import { useForm } from 'react-hook-form';

type GiftDetailsProps = {
  data: GiftDataType;
};

const GiftEdit = ({ data }: GiftDetailsProps) => {
  const {
    status,
    name,
    priority,
    category,
    occasion,
    price,
    date,
    linkOne,
    linkTwo,
    linkThree,
    notes,
    ownerEmail,
  } = data;

  const formDefaultValues = {
    status,
    name,
    priority,
    category,
    occasion,
    price,
    linkOne: linkOne || '',
    linkTwo: linkTwo || '',
    linkThree: linkThree || '',
    notes,
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });

  const onSubmit = (data: typeof formDefaultValues) => {
    console.log(data);
  };

  return (
    <form
      className="gift-wrapper flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="text-orange-500 col-span-2">{`${ownerEmail} want's this:`}</p>
      <label htmlFor="name" className="text-sm text-gray-400">
        Gift name:
      </label>
      <input
        className={`gift-name text-sm text-gray-70 border rounded-md col-span-2 p-4`}
        {...register('name', { required: true })}
        id="name"
      />
      <div className="gift-attributes-wrapper grid grid-cols-2 gap-5 ">
        <label htmlFor="status" className="text-sm text-gray-400">
          Status:{' '}
          <select
            id="status"
            className={`gift-status text-xs font-semibold border rounded-md p-3 text-violet-400 w-full mt-3`}
            {...register('status', { required: true })}
          >
            <option value={Status.AVAILABLE}>{Status.AVAILABLE}</option>
            <option value={Status.RESERVED}>{Status.RESERVED}</option>
            <option value={Status.BOUGHT}>{Status.BOUGHT}</option>
          </select>
        </label>

        <label htmlFor="priority" className="text-sm text-gray-400">
          Priority:{' '}
          <select
            id="priority"
            className={`gift-priority text-xs font-semibold border rounded-md p-3 text-orange-500 w-full mt-3`}
            {...register('priority', { required: true })}
          >
            <option value={Priority.HIGH}>{Priority.HIGH}</option>
            <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
            <option value={Priority.LOW}>{Priority.LOW}</option>
          </select>
        </label>

        <label htmlFor="occasion" className="text-sm text-gray-400">
          Occasion:{' '}
          <select
            id="occasion"
            className={`gift-occasion text-xs font-semibold border rounded-md p-3 text-green-500 w-full mt-3`}
            {...register('occasion', { required: true })}
          >
            <option value={Occasion.NONE}>{Occasion.NONE}</option>
            <option value={Occasion.BITHDAY}>{Occasion.BITHDAY}</option>
            <option value={Occasion.HOLIDAYS}>{Occasion.HOLIDAYS}</option>
            <option value={Occasion.NAMEDAY}>{Occasion.NAMEDAY}</option>
            <option value={Occasion.THANKS}>{Occasion.THANKS}</option>
            <option value={Occasion.OTHER}>{Occasion.OTHER}</option>
          </select>
        </label>

        <label htmlFor="category" className="text-sm text-gray-400">
          Category:{' '}
          <select
            id="category"
            className={`gift-category text-xs font-semibold border rounded-md p-3 text-blue-500 w-full mt-3`}
            {...register('category', { required: true })}
          >
            <option value={Category.NONE}>{Category.NONE}</option>
            <option value={Category.BEAUTY}>{Category.BEAUTY}</option>
            <option value={Category.BOOKS}>{Category.BOOKS}</option>
            <option value={Category.CLOTHING}>{Category.CLOTHING}</option>
            <option value={Category.ELECTRONICS}>{Category.ELECTRONICS}</option>
            <option value={Category.FOOD}>{Category.FOOD}</option>
            <option value={Category.GADGETS}>{Category.GADGETS}</option>
            <option value={Category.HOME}>{Category.HOME}</option>
            <option value={Category.OTHER}>{Category.OTHER}</option>
          </select>
        </label>

        <label htmlFor="price" className="text-sm text-gray-400">
          Price:{' '}
          <input
            id="price"
            className={`gift-price text-xs font-semibold border rounded-md p-3 text-black w-full mt-3 text-right`}
            {...register('price', { required: true })}
          />
        </label>

        <p className="gift-date text-sm text-gray-400">
          Date:{' '}
          <span className="block text-xs font-semibold border rounded-md p-3 w-full mt-3 text-right text-black">
            {date}
          </span>
        </p>
      </div>
      <label htmlFor="linkOne" className="text-sm text-gray-400">
        Link 1:
        <input
          className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3"
          defaultValue={linkOne}
          {...register('linkOne')}
          id="linkOne"
        />
      </label>
      <label htmlFor="linkTwo" className="text-sm text-gray-400">
        Link 2:
        <input
          className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3"
          defaultValue={linkTwo}
          {...register('linkTwo')}
          id="linkTwo"
        />
      </label>
      <label htmlFor="linkThree" className="text-sm text-gray-400">
        Link 3:
        <input
          className="gift-link text-xs border rounded-md p-3 text-black w-full mt-3"
          defaultValue={linkThree}
          {...register('linkThree')}
          id="linkThree"
        />
      </label>
      <label htmlFor="notes" className="text-sm text-gray-400">
        Notes:
        <textarea
          className={`gift-notes border rounded-md p-3 text-black w-full mt-3`}
          {...register('notes')}
          id="notes"
          rows={3}
        />
      </label>
      <button
        type="submit"
        className="block p-2 text-center bg-orange-500 rounded-md text-white text-base"
      >
        Save
      </button>
    </form>
  );
};

export default GiftEdit;
