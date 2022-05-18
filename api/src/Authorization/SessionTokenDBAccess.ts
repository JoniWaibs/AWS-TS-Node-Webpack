import Nedb from 'nedb';
import { SessionToken } from '../models';

export class SessionTokenDBAccess {
  private nedb: Nedb;

  constructor() {
    this.nedb = new Nedb('db/sessionToken.db');
    this.nedb.loadDatabase();
  }

  /**
   * Saves sessionToken for the user
   * @param {Object} sessionToken username, accessRights, expirationTime, valid, id
   */
  public async saveToken(sessionToken: SessionToken): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nedb.insert(sessionToken, ((err: Error | null, docs: any) => (err ? reject(err) : resolve(docs))));
    });
  }

  /**
  * Retrieves a session token
  * @param sessionTokenId token id
  * @returns token
  */
  public async getToken(sessionTokenId: string): Promise<SessionToken | null> {
    return new Promise((resolve, reject) => {
      this.nedb.find({ sessionTokenId }, (err: Error | null, docs: SessionToken[]) => (
        err ? reject(err) : docs.length <= 0 ? resolve(null) : resolve(docs[0])
      ));
    });
  }
}
