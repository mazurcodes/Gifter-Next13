import { GiftsDataType } from '@/types';
import { priorityColor, shortNotes, statusColor } from '@/utils/server';

type GiftProps = {
  data: GiftsDataType;
};

const Gift = ({ data }: GiftProps) => {
  const { status, name, priority, occasion, category, price, date, notes } =
    data;

  return (
    <div className="gift-wrapper grid gap-2 grid-cols-[2fr_10fr_repeat(5,_2fr)_3fr] items-center border-b p-4 hover:bg-gray-100">
      <div
        className={`gift-status text-xs font-semibold ${statusColor(status)}`}
      >
        {status}
      </div>
      <p className={`gift-name text-sm text-gray-70`}>{name}</p>
      <div
        className={`gift-status text-xs tex font-semibold  ${priorityColor(
          priority
        )}`}
      >
        {priority}
      </div>
      <div className={`gift-status text-xs font-semibold`}>{occasion}</div>
      <div className={`gift-status text-xs font-semibold`}>{category}</div>
      <div className={`gift-status text-xs font-semibold`}>{price}</div>
      <div className={`gift-status text-xs font-semibold`}>{date}</div>
      <div className={`gift-status text-xs font-semibold`}>
        {shortNotes(notes, 10)}
      </div>
    </div>
  );
};

export default Gift;
