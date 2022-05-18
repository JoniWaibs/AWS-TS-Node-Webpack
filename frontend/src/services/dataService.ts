import { BaseService } from './base';
import { HttpMethods } from '../enums/httpMethods'
import { User } from '../models/User';

const { GET } = HttpMethods;

export class FetchData extends BaseService {
  public async getUser(Authorization: any, query: string): Promise<User[]> {
    const url = `${this.baseUrl}/users?name=${query}`;

    const customHeaders = { Authorization }
    const context = this.buildContext(GET, {}, customHeaders);
    console.log('Context to Fetch:', context)

    return fetch(url, context).then(result => {
      if (!result.ok) {
        return this.handleErrorResponse(result);
      }
      return result.json();
    });
  }
}
