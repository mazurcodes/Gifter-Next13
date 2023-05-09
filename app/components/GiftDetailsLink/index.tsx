import { createExternalLink, shortNotes } from '@/utils/server';

const GiftDetailsLink = ({ link }: { link: string }) => {
  return (
    <div className="gift-link flex col-span-2  text-xs border rounded-md overflow-hidden">
      <p className="p-4 border-r font-semibold">Link:</p>
      <a
        className="p-4 break-words"
        target="_blank"
        href={`${createExternalLink(link)}`}
      >
        <p className="">{shortNotes(link, 50)}</p>
      </a>
    </div>
  );
};

export default GiftDetailsLink;
