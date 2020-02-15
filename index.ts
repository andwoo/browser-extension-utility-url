import { browser } from 'webextension-polyfill-ts';

export interface StorageResponse {
  success: boolean;
  data: string | Array<string>;
}

export const toAbsoluteUrl = (relativeUrl: string): string => {
  return browser.runtime.getURL(relativeUrl);
};
