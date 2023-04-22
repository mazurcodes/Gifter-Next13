import { GiftDataType } from '@/types';
import { Priority, Status, Color } from '@/constants';

export const statusColor = (status: Status) => {
  if (status === Status.AVAILABLE) return Color.GREEN;
  if (status === Status.RESERVED) return Color.ORANGE;
  return Color.RED;
};

export const priorityColor = (priority: Priority) => {
  if (priority === Priority.HIGH) return Color.RED;
  if (priority === Priority.MEDIUM) return Color.ORANGE;
  return Color.GREEN;
};

export const shortNotes = (note = '', maxChars = 20) => {
  let short: string = note;
  if (note.length > maxChars) {
    short = note.substring(0, maxChars - 3) + '...';
  }
  return short;
};

export const filterGiftsByStatus = (
  data: GiftDataType[],
  status: Status | '' = ''
) => {
  return status === '' ? data : data.filter((gift) => gift.status === status);
};

export const convertISOToGiftDate = (isoDate: string) => {
  return isoDate.split('T')[0].split('-').reverse().join('.');
};

export const getSearchByEmailHref = (email: string) => {
  return '/search?email=' + encodeURIComponent(email);
};
