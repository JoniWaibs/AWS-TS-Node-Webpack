import Nedb from 'nedb';
import { User } from '../models';

export class UsersDB {
  private nedB: Nedb;

  public constructor() {
    this.nedB = new Nedb('db/users.db');
    this.nedB.loadDatabase();
  }

  /**
   * create user
   * @param {Object} user id, name, age, email, workingPosition
   * @returns
   */
  public async createUser(user: User): Promise<string> {
    return new Promise((resolve, reject) => {
      this.nedB.insert(user, (err: Error | null) => (err ? reject(err) : resolve('User Created')));
    });
  }

  /**
   * Retrieves all users
   * @returns {Array} Users
   */
  public async getUsers(): Promise<User[] | null> {
    return new Promise((resolve, reject) => {
      this.nedB.find({}, (err: Error, docs: User[]) => (err ? reject(err) : resolve(docs)));
    });
  }

  /**
   * Retrieves a user by id
   * @returns {Object} user
   */
  public async getUserById(id: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.nedB.find({ _id: id }, (err: Error, docs: User[]) => (
        err ? reject(err) : docs.length <= 0 ? resolve(null) : resolve(docs[0])
      ));
    });
  }

  /**
   * Retrieves a user by name
   * @returns {Object} user
   */
  public async getUserByName(name: string): Promise<User[]> {
    const regEx = new RegExp(name);
    return new Promise((resolve, reject) => {
      this.nedB.find({ name: regEx }, (err: Error, docs: User[]) => (err ? reject(err) : resolve(docs)));
    });
  }

  /**
   * Call delete user function and reload DB
   * @returns {Boolean} if user was deleted or not
   */
  public async deleteUser(id: string): Promise<boolean> {
    const wasUserDeleted = await this.deleteUserFromDB(id);
    this.nedB.loadDatabase();
    return wasUserDeleted;
  }

  /**
   * Delete a user by id
   * @returns {Boolean} if user was deleted or not
   */
  private async deleteUserFromDB(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.nedB.remove({ _id: id }, {}, (err: Error | null, numRemoved: number) => (
        err ? reject(err) : numRemoved === 0 ? resolve(false) : resolve(true)
      ));
    });
  }
}
