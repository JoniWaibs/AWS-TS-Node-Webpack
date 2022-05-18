import { createServer, ServerResponse, IncomingMessage } from 'http';

import { Utils, Login, Users } from '.';
import { baseUrl } from '../enums/baseUrl';
import { Authorizer } from '../Authorization/Authorizer';

const { LOGIN, USERS } = baseUrl;

export class Server {
  private authorizer: Authorizer = new Authorizer();

  public init() {
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
      this.setCorsHeader(res);
      const baseUrl: string | null = Utils.getUrlBasePath(req.url);

      switch (baseUrl) {
        case LOGIN:
          await new Login(req, res, this.authorizer).handleRequest();
          break;
        case USERS:
          await new Users(req, res, this.authorizer).handleRequest();
          break;
        default:
          break;
      }
      res.end();
    }).listen(8000);
    console.log('Server started');
  }

  private setCorsHeader(res: ServerResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
  }
}
