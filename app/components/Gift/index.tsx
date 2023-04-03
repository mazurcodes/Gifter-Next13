import { GiftsDataType, Priority, Status } from "@/types";

type GiftProps = {
    data: GiftsDataType
}

const Gift = ({data} : GiftProps) => {
    const {status, name, priority, occasion, category, price, date, notes} = data;
    
    const statusColor = (status : Status) => {
        if(status === Status.AVAILABLE) return 'text-green-600';
        if(status === Status.RESERVED) return 'text-orange-300';
        return 'text-red-500';
    }

    const priorityColor = (priority : Priority) => {
        if(priority === Priority.HIGH) return 'text-red-500';
        if(priority === Priority.MEDIUM) return 'text-orange-300';
        return 'text-green-600'
    }

    const shortNotes = (notes : string) => {
        let short : string = notes; 
        if(notes.length > 20) {
            short = notes.substring(0, 19) + '...';
        }
        return short;
    }
    return (
        <div className="gift-wrapper flex items-center border-b p-4">
            <div className={`gift-status text-xs font-semibold ${statusColor(status)} w-24`}>{status}</div>
            <div className={`gift-name text-sm text-gray-700 bg-slate-300 w-96`}>{name}</div>
            <div className={`gift-status text-xs tex font-semibold  ${priorityColor(priority)} w-16`}>{priority}</div>
            <div className={`gift-status text-xs font-semibold  w-16`}>{occasion}</div>
            <div className={`gift-status text-xs font-semibold  w-16`}>{category}</div>
            <div className={`gift-status text-xs font-semibold  w-14`}>{price}</div>
            <div className={`gift-status text-xs font-semibold  w-20`}>{date}</div>
            <div className={`gift-status text-xs font-semibold  w-36 `}>{shortNotes(notes)}</div>
        </div>
    );
}

export default Gift;