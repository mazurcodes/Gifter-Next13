import { GiftDataType } from '@/types';
import { priorityColor, shortNotes, statusColor } from '@/utils/server';

const GiftLink = ({ link }: { link: string }) => {
  return (
    <div className="gift-link flex col-span-2  text-xs border rounded-md overflow-hidden">
      <p className="p-4 border-r font-semibold">Link:</p>
      <a className="p-4 break-words" target="_blank" href={`${link}`}>
        <p className="">{shortNotes(link, 50)}</p>
      </a>
    </div>
  );
};

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
    links,
  } = data;

  return (
    <div className="gift-wrapper flex flex-col gap-3">
      <p className="text-orange-500 col-span-2">{`${ownerEmail} want's this:`}</p>
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
        {links.map((link, index) => (
          <GiftLink key={`gift-link-${index}`} link={link} />
        ))}
      </div>
      <p
        className={`gift-status col-span-2 text-xs font-semibold border rounded-md p-4`}
      >
        {shortNotes(notes, 100)}
      </p>
    </div>
  );
};

export default GiftDetails;