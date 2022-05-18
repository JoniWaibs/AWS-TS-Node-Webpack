import { parse, UrlWithParsedQuery } from 'url';

export class Utils {
  /**
   * Retrieves a current url
   * @param  url
   * @returns parsed url
   */
  public static getUrlBasePath(url: string | undefined): string | null {
    return url ? parse(url).pathname!.split('/')[1] : null;
  }

  /**
   * Retrieves a complete query of url (url and params)
   * @param url
   * @returns parsed url
   */
  public static getUrlParameters(url: string | undefined): UrlWithParsedQuery | null {
    return url ? parse(url, true) : null;
  }
}
