import { ServiceContext } from '../models/ServiceContext';

export class BaseService {
  public baseUrl = 'http://localhost:8000';

  public buildContext(method: string, customBody: object, headers?: any): ServiceContext {
    return {
      method,
      headers: {
        ...(headers && { ...headers }),
      },
      body: Object.keys(customBody).length ? JSON.stringify({ ...customBody }): null,
    };
  }

  public async handleErrorResponse(result: Response): Promise<ErrorEvent> {
    return result.text().then(text => {
      throw new Error(text);
    });
  }
}
