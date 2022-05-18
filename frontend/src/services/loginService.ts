import { SessionToken } from '../models/Authentication';
import { BaseService } from './base';
import { HttpMethods } from '../enums/httpMethods'

const { POST } = HttpMethods;

export class FetchData extends BaseService {
  public async login(username: string, password: string): Promise<SessionToken> {
    const url = `${this.baseUrl}/login`;

    const customHeaders = { 'Content-Type': 'application/json' }
    const context = this.buildContext(POST, { username, password }, customHeaders);

    return fetch(url, context).then(result => {
      if (!result.ok) {
        return this.handleErrorResponse(result);
      }
      return result.json();
    });
  }
}
