import { AccessRights } from '../enums/accessRights';
import { SessionToken } from '../models/Authentication';
import { FetchData } from '../services/dataService';
import { BaseController } from './baseController';

export class DashboardController extends BaseController {
  private html = '';

  private sessionToken: SessionToken | null | undefined;

  private fetchData = new FetchData();

  /**
   * Sets sessionToken globally
   * @param sessionToken SessionToken
   */
  public setSessionToken(sessionToken: SessionToken): void {
    this.sessionToken = sessionToken;
  }

  /**
   * Create a main route View
   * @returns HTMLDivElement with all page content
   */
  public createView() {
    const container = this.createElement('div');
    this.html = `
        <h2>This is a Dashboard page</h2>
        <br>
        <h2>
          Welcome  ${this.sessionToken?.username}
        </h2>
        <br>
    `;

    const mainContent = this.createElement('div', this.html);
    const buttonsGroup = this.createAccessButtons();
    container.append(mainContent, buttonsGroup);

    return container;
  }

  /**
   * Create a buttons group component
   * @returns HTMLDivElement with all buttons
   */
  private createAccessButtons(): HTMLDivElement {
    const containerButtons = this.createElement('div');
    this.sessionToken?.accessRights.forEach((access: AccessRights) => {
      const button = this.createElement('button', access, async () => {
        if(this.sessionToken){}
        const result = await this.fetchData.getUser(this.sessionToken?.sessionTokenId, 'Emily')
        console.log(result)
      });
      containerButtons.append(button)
    })
    return containerButtons;
  }
}
