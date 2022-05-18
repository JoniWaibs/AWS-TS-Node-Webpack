import {
  Account,
  SessionToken,
  TokenGenerator,
  UserCredentials,
  TokenValidator,
  TokenRights,
} from '../models';
import { TokenState } from '../enums/tokenState';
import { SessionTokenDBAccess } from './SessionTokenDBAccess';
import { UserCredentialsDBAccess } from './UserCredentialsDBAccess';

const { VALID, INVALID, EXPIRED } = TokenState;

export class Authorizer implements TokenGenerator, TokenValidator {
  private userCredentials: UserCredentialsDBAccess = new UserCredentialsDBAccess();

  private sessionToken: SessionTokenDBAccess = new SessionTokenDBAccess();

  /**
   * Create a new token using user DB credentials
   * @param {Object} Credentials username and password
   * @returns
   */
  public async generateToken({ username, password }: Account): Promise<SessionToken | null> {
    const data: UserCredentials | null = await this.userCredentials.getCredential({ username, password });

    if (data && Object.keys(data).length) {
      const { username, accessRights } = data;

      const authToken: SessionToken = {
        username,
        accessRights,
        expirationTime: this.generateExpirationTime(),
        valid: true,
        sessionTokenId: this.generateRandomTokenId(),
      };

      this.sessionToken.saveToken(authToken);
      return authToken;
    }

    return null;
  }

  /**
   * Retrieves a status token, if it is valid, invalid, or expired
   * @param tokenId
   * @returns {Object} state of token and accessRights
   */
  public async validateToken(tokenId: string): Promise<TokenRights> {
    const data: SessionToken | null = await this.sessionToken.getToken(tokenId);
    if (!data || !data?.valid) return { accessRights: [], state: INVALID };

    if (data && data.expirationTime < new Date()) return { accessRights: [], state: EXPIRED };

    return { accessRights: data.accessRights, state: VALID };
  }

  /**
   * Create an expiration date token
   * @returns date
   */
  private generateExpirationTime(): Date {
    return new Date(Date.now() + 60 * 60 * 1000);
  }

  /**
   * Create random tokenId
   * @returns TokenId
   */
  private generateRandomTokenId(): string {
    return Math.random().toString(36).slice(2);
  }
}
