import { AccessRights } from '../enums/accessRights';

export interface SessionToken {
  sessionTokenId: string | null;
  username: string;
  accessRights: AccessRights[];
  expirationTime: Date;
  valid: boolean;
}
