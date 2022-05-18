import { IncomingMessage, ServerResponse } from 'http';

import { Utils } from '.';
import { BaseService } from './Base';
import { HttpMethods } from '../enums/httpMethods';
import { HttpCodes } from '../enums/httpCodes';
import { UsersDB } from '../User/User';
import { TokenValidator, User } from '../models';
import { AccessRights } from '../enums/accessRights';

const { GET, POST, DELETE: HTTP_DELETE, OPTIONS } = HttpMethods;
const { BAD_REQUEST, OK, UNAUTHORIZED } = HttpCodes;
const { READ, CREATE, DELETE } = AccessRights;

export class Users extends BaseService {
  private tokenValidator: TokenValidator;

  private usersDB: UsersDB;

  public constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenValidator: TokenValidator,
  ) {
    super(req, res);
    this.usersDB = new UsersDB();
    this.tokenValidator = tokenValidator;
  }

  /**
   * Handle HTTP methods
   */
  public async handleRequest() {
    switch (this.req.method) {
      case GET:
        await this.handleGet();
        break;
      case POST:
        await this.handlePost();
        break;
      case HTTP_DELETE:
        await this.handleDelete();
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
   * Retrieves a user when (GET) http request is executed in /users endpoint
   * @returns
   */
  private async handleGet() {
    let statusCode;
    const isOperationAuthorized = await this.handleOperationAuthorized(READ);
    if (!isOperationAuthorized) {
      return this.handleBadRequest(UNAUTHORIZED, 'Missing or invalid authentication');
    }

    const parsedUrl = Utils.getUrlParameters(this.req.url);
    const { id: queryId = null, name: queryName = null } = parsedUrl?.query || {};

    if (queryId || queryName) {
      try {
        const user = queryId
          ? await this.usersDB.getUserById(String(queryId))
          : await this.usersDB.getUserByName(String(queryName));
        if (!user) {
          statusCode = BAD_REQUEST;
          const message = `code ${statusCode}. User does not exist.`;
          return this.handleBadRequest(statusCode, message);
        }

        statusCode = OK;
        return this.handleObjectResponse(statusCode, user);
      } catch (error) {
        return this.handleNotFound();
      }
    }

    return this.handleBadRequest(BAD_REQUEST, 'Endpoint is wrong');
  }

  /**
   * Updates a user when (POST) http request is executed in /users endpoint
   * @returns
   */
  private async handlePost() {
    let statusCode;
    const isOperationAuthorized = await this.handleOperationAuthorized(CREATE);
    if (!isOperationAuthorized) {
      return this.handleBadRequest(UNAUTHORIZED, 'Missing or invalid authentication');
    }

    try {
      const user: User = await this.getRequestBody();
      await this.usersDB.createUser(user);

      statusCode = OK;
      return this.handleSuccessRequest(statusCode, `User ${user.name} was created successfully`);
    } catch (error) {
      return this.handleNotFound();
    }
  }

  /**
   * Delete a user when (DELETE) http request is executed in /users endpoint
   */
  private async handleDelete() {
    let statusCode;
    const isOperationAuthorized = await this.handleOperationAuthorized(DELETE);
    if (!isOperationAuthorized) {
      return this.handleBadRequest(UNAUTHORIZED, 'Missing or invalid authentication');
    }

    const parsedUrl = Utils.getUrlParameters(this.req.url);
    const { id: queryId = null } = parsedUrl?.query || {};

    if (queryId) {
      try {
        const wasUserDeleted = await this.usersDB.deleteUser(String(queryId));

        if (!wasUserDeleted) {
          statusCode = BAD_REQUEST;
          const message = `code ${statusCode}. User couldn't be deleted.`;
          return this.handleBadRequest(statusCode, message);
        }

        statusCode = OK;
        return this.handleSuccessRequest(statusCode, 'User was deleted successfully');
      } catch (error) {
        return this.handleNotFound();
      }
    }

    return this.handleBadRequest(BAD_REQUEST, 'Endpoint is wrong');
  }

  /**
   * Handle auth for some user actions
   * @param operation
   * @returns
   */
  private async handleOperationAuthorized(operation: AccessRights): Promise<boolean> {
    let isAuthorized: boolean = false;
    const tokenHeader = this.req.headers.authorization;

    if (tokenHeader) {
      try {
        const tokenRights = await this.tokenValidator.validateToken(tokenHeader);
        if (tokenRights?.accessRights.includes(operation)) isAuthorized = true;
      } catch (error) {
        this.handleBadRequest(BAD_REQUEST, 'Endpoint is wrong');
      }
    }
    return isAuthorized;
  }
}
