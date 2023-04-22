import { GiftDataType } from '@/types';
import {
  convertISOToGiftDate,
  priorityColor,
  shortNotes,
  statusColor,
} from '@/utils/server';
import { useRouter } from 'next/navigation';

type GiftProps = {
  data: GiftDataType;
};

const Gift = ({ data }: GiftProps) => {
  const {
    status,
    name,
    priority,
    occasion,
    category,
    price,
    date,
    notes,
    uid,
  } = data;

  const router = useRouter();

  const dateCreated = convertISOToGiftDate(date);

  const handleClick = () => {
    const href = uid && '/gift?id=' + encodeURIComponent(uid);
    href && router.push(href);
  };

  return (
    <div
      onClick={handleClick}
      className="gift-wrapper grid gap-2 grid-cols-[2fr_10fr_repeat(5,_2fr)_3fr] lg:grid-cols-[2fr_10fr_repeat(2,_2fr)] sm:grid-cols-[2fr_5fr] items-center border-b p-4 hover:bg-gray-100 hover:cursor-pointer"
    >
      <div
        className={`gift-status text-xs font-semibold ${statusColor(status)}`}
      >
        {status}
      </div>
      <p className={`gift-name text-sm text-gray-70`}>{name}</p>
      <div
        className={`gift-status text-xs tex font-semibold sm:hidden ${priorityColor(
          priority
        )}`}
      >
        {priority}
      </div>
      <div className={`gift-status text-xs font-semibold lg:hidden`}>
        {occasion}
      </div>
      <div className={`gift-status text-xs font-semibold lg:hidden`}>
        {category}
      </div>
      <div className={`gift-status text-xs font-semibold sm:hidden`}>
        {price}
      </div>
      <div className={`gift-status text-xs font-semibold lg:hidden`}>
        {dateCreated}
      </div>
      <div className={`gift-status text-xs font-semibold lg:hidden`}>
        {shortNotes(notes, 10)}
      </div>
    </div>
  );
};

export default Gift;
