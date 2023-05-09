import { GiftDataType } from '@/types';
import {
  priorityColor,
  shortEmailAddress,
  shortNotes,
  statusColor,
} from '@/utils/server';
import GiftLink from '../GiftDetailsLink';

type GiftDetailsProps = {
  data: GiftDataType;
};

const GiftDetails = ({ data }: GiftDetailsProps) => {
  const {
    status,
    name,
    priority,
    occasion,
    category,
    price,
    date,
    notes,
    ownerEmail,
    linkOne,
    linkTwo,
    linkThree,
  } = data;

  return (
    <div className="gift-wrapper flex flex-col gap-3">
      <p className="text-orange-500 col-span-2">{`${shortEmailAddress(
        ownerEmail,
        30
      )} want's this:`}</p>
      <p className="text-slate-400 text-sm pt-2">Gift name:</p>
      <p
        className={`gift-name text-sm text-gray-70 border rounded-md col-span-2 p-4`}
      >
        {name}
      </p>
      <div className="gift-attributes-wrapper grid grid-cols-2 gap-5">
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Status: <span className={`${statusColor(status)}`}>{status}</span>
        </p>
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Priority:{' '}
          <span className={`${priorityColor(priority)}`}>{priority}</span>
        </p>
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Occasion: <span>{occasion}</span>
        </p>
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Category: <span>{category}</span>
        </p>
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Price: <span>{price}</span>
        </p>
        <p className="gift-status text-xs font-semibold border rounded-md p-3">
          Date: <span>{date}</span>
        </p>
        {linkOne && <p className="text-slate-400 text-sm pt-2">Links: </p>}
        {linkOne && <GiftLink link={linkOne} />}
        {linkTwo && <GiftLink link={linkTwo} />}
        {linkThree && <GiftLink link={linkThree} />}
      </div>
      <p className="text-slate-400 text-sm pt-2">Notes: </p>
      <p
        className={`gift-status col-span-2 text-xs font-semibold border rounded-md p-4`}
      >
        {shortNotes(notes, 100)}
      </p>
    </div>
  );
};

export default GiftDetails;
