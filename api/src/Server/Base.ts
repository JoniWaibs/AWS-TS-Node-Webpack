import { IncomingMessage, ServerResponse } from 'http';

import { HttpCodes } from '../enums/httpCodes';

const { NOT_FOUND } = HttpCodes;

export abstract class BaseService {
  protected req: IncomingMessage;

  protected res: ServerResponse;

  protected constructor(req: IncomingMessage, res: ServerResponse) {
    this.req = req;
    this.res = res;
  }

  abstract handleRequest(): Promise<void>;

  /**
   * Handle error when something is wrong
   * @returns
   */
  protected handleNotFound(): void {
    const statusCode = NOT_FOUND;
    this.res.statusCode = statusCode;
    this.res.write(`Not found, error code ${statusCode}. Sorry, something is wrong.`);
  }

  /**
   * Handle request when response does not have a valid response
   * @param statusCode
   * @param message
   */
  protected handleBadRequest(statusCode: number, message: string): void {
    this.res.statusCode = statusCode;
    this.res.write(message);
  }

  /**
 * Handle request when response have a success response
 * @param statusCode
 * @param message
 */
  protected handleSuccessRequest(statusCode: number, message: string): void {
    this.res.statusCode = statusCode;
    this.res.write(message);
  }

  /**
   * Handle response when everything is OK
   * @param statusCode
   * @param data
   */
  protected handleObjectResponse(statusCode: number, data: any): void {
    this.res.statusCode = statusCode;
    this.res.writeHead(statusCode, { 'Content-type': 'Application.json' });
    this.res.write(JSON.stringify(data));
  }

  /**
   * Handle body request
   * @returns {Object} Body {username, password}
   */
  protected async getRequestBody(): Promise<any> {
    return new Promise((resolve, reject) => {
      let body = '';
      this.req.on('data', (data: string) => { body += data; });
      this.req.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
      this.req.on('error', (error: any) => reject(error));
    });
  }
}
