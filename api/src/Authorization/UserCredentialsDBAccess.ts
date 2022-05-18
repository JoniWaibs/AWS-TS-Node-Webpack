import Nedb from 'nedb';

import { Account, UserCredentials } from '../models';

export class UserCredentialsDBAccess {
  private nedb: Nedb;

  constructor() {
    this.nedb = new Nedb('db/userCredentials.db');
    this.nedb.loadDatabase();
  }

  /**
   * TODO: Encrypt password with bcrypt.js
   * Saves the credentials for the user
   * @param {Object} userCredentials username, password and accessRights[]
   */
  public async saveCredential(userCredentials: UserCredentials): Promise<any> {
    return new Promise((resolve, reject) => {
      this.nedb.insert(userCredentials, ((err: Error | null, docs: any) => (err ? reject(err) : resolve(docs))));
    });
  }

  /**
   * Get user credentials
   * @param {Object} userCredentials username and password
   * @returns DB Credentials
   */
  public async getCredential({ username, password }: Account): Promise<UserCredentials | null> {
    return new Promise((resolve, reject) => {
      this.nedb.find({ username, password }, ((err: Error | null, docs: UserCredentials[]) => (
        err ? reject(err) : docs.length <= 0 ? resolve(null) : resolve(docs[0]))
      ));
    });
  }
}
