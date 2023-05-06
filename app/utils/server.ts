import { FormDataType, GiftDataType } from '@/types';
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
  if (note.length > maxChars) {
    return note.substring(0, maxChars - 3) + '...';
  }
  return note;
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
  return '/search/' + encodeURIComponent(email);
};

/**
 * Sanitize a URL.
 *
 * Source @braintree/sanitize-url
 * <https://github.com/braintree/sanitize-url>
 *
 * @param {string} url
 * @return {string}
 */
export const sanitizeUrl = (url: string): string => {
  if (!url) {
    return '';
  }

  const invalidProtocolRegex = /^(%20|\s)*(javascript|data|vbscript)/im;
  const ctrlCharactersRegex = /[^\x20-\x7EÀ-ž]/gim;
  const urlSchemeRegex = /^([^:]+):/gm;
  const relativeFirstCharacters = ['.', '/'];

  function _isRelativeUrlWithoutProtocol(url: string) {
    return relativeFirstCharacters.indexOf(url[0]) > -1;
  }

  const sanitizedUrl = url.replace(ctrlCharactersRegex, '').trim();

  if (_isRelativeUrlWithoutProtocol(sanitizedUrl)) {
    return sanitizedUrl;
  }

  const urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) {
    return sanitizedUrl;
  }

  const urlScheme = urlSchemeParseResults[0];
  if (invalidProtocolRegex.test(urlScheme)) {
    return '';
  }

  return sanitizedUrl;
};

/**
 * Preparing form data: sanitization, etc.
 *
 * @param {FormDataType} formData
 */
export const prepareFormData = (formData: FormDataType): FormDataType => {
  const linkOne = sanitizeUrl(formData.linkOne);
  const linkTwo = sanitizeUrl(formData.linkTwo);
  const linkThree = sanitizeUrl(formData.linkThree);
  return { ...formData, linkOne, linkTwo, linkThree };
};

export const extractErrorMessage = (errorMessage: string) => {
  return errorMessage
    ? errorMessage
        .split('(')[1]
        .split('/')[1]
        .split(')')[0]
        .split('-')
        .join(' ')
    : '';
};
