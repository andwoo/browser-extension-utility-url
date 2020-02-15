import { browser } from 'webextension-polyfill-ts';

export interface StorageResponse {
  success: boolean;
  data: string | Array<string>;
}

export const toAbsoluteUrl = (relativeUrl: string): string => {
  console.log(`GUCCI - relativeUrl[${relativeUrl}] getURL[${browser.runtime.getURL(relativeUrl)}]`);
  return browser.runtime.getURL(relativeUrl);
};
