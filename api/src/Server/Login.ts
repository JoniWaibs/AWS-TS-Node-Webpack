import { IncomingMessage, ServerResponse } from 'http';

import { Account, SessionToken, TokenGenerator } from '../models';
import { HttpMethods } from '../enums/httpMethods';
import { HttpCodes } from '../enums/httpCodes';
import { BaseService } from './Base';

const { POST, OPTIONS } = HttpMethods;
const { UNAUTHORIZED, OK } = HttpCodes;

export class Login extends BaseService {
  private tokenGenerator: TokenGenerator;

  public constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenGenerator: TokenGenerator,
  ) {
    super(req, res);
    this.tokenGenerator = tokenGenerator;
  }

  /**
   * Handle HTTP methods
   */
  public async handleRequest() {
    switch (this.req.method) {
      case POST:
        await this.handlePost();
        break;
      case OPTIONS:
        this.res.writeHead(OK)
        break;
      default:
        this.handleNotFound();
        break;
    }
  }

  /**
   * Handle user authentication to (POST) http request in /login endpoint,
   * @returns Http code
   */
  private async handlePost() {
    let statusCode;

    try {
      const body: Account = await this.getRequestBody();
      const token: SessionToken | null = await this.tokenGenerator.generateToken(body);

      if (!token) {
        statusCode = UNAUTHORIZED;
        const message = `code ${statusCode}. Sorry, invalid credentials.`;
        return this.handleBadRequest(statusCode, message);
      }
      statusCode = OK;
      return this.handleObjectResponse(statusCode, token);
    } catch (error) {
      return this.handleNotFound();
    }
  }
}
