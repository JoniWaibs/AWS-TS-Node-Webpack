import { AccessRights } from '../enums/accessRights';
import { TokenState } from '../enums/tokenState';
import { User } from '.';

export interface Account {
  username: string,
  password: string,
}

export interface SessionToken {
  sessionTokenId: string | null,
  username: string,
  accessRights: AccessRights[],
  expirationTime: Date,
  valid: boolean,
}

export interface TokenRights {
  accessRights: AccessRights[],
  state: TokenState,
}

export interface ResponseBody {
  body: Account | User
}

export interface TokenGenerator {
  generateToken(account: Account): Promise<SessionToken | null>
}

export interface TokenValidator {
  validateToken(tokenId: string): Promise<TokenRights | null>
}
