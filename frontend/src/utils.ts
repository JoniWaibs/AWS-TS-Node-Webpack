export class Utils {
  /**
   * Retrieves a current url
   * @returns parsed url
   */
  public static getRoute(): string {
    return window.location.pathname.split('/')[1];
  }
}
