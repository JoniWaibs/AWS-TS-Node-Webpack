import { Account } from '.';
import { AccessRights } from '../enums/accessRights';

/**
 * Thats extends:
 * username
 * password
 * from Account Interface
 */
export interface UserCredentials extends Account {
  accessRights: AccessRights[],
}
