import { Priority, Status } from '@/types';

export const statusColor = (status: Status) => {
  if (status === Status.AVAILABLE) return 'text-green-600';
  if (status === Status.RESERVED) return 'text-orange-300';
  return 'text-red-500';
};

export const priorityColor = (priority: Priority) => {
  if (priority === Priority.HIGH) return 'text-red-500';
  if (priority === Priority.MEDIUM) return 'text-orange-300';
  return 'text-green-600';
};

export const shortNotes = (note: string, maxChars = 20) => {
  let short: string = note;
  if (note.length > maxChars) {
    short = note.substring(0, maxChars - 1) + '...';
  }
  return short;
};
