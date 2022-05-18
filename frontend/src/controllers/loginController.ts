import { FetchData } from '../services/loginService';
import { BaseController } from './baseController';

export class LoginController extends BaseController {
  private html = '';

  private fetchData = new FetchData();

  /**
   * Create a main route View
   * @returns HTMLDivElement with all page content
   */
  public createView() {
    const container = this.createElement('div');
    this.html = `
        <h2>This is a Login page</h2>
        <br>
        <span>
          Please login :)
        </span>
        <br>
        <div id="label-error" style="color:red; visibility:hidden"></div>
        <br>
        <label for="username">username</label>
        <br>
        <input type="text" name="username" id="username">
        <br>
        <label for="password">password</label>
        <br>
        <input type="password" name="password" id="password">
        <br>
    `;

    const mainContent = this.createElement('div', this.html);
    const appendContent = this.createElement('button', 'login', () => this.handleLogin());
    container.append(mainContent, appendContent);

    return container;
  }

  /**
   * Handle login and redirect to dashboard page
   * @returns void
   */
  async handleLogin() {
    const labelError = document.getElementById('label-error');
    const username = document.getElementsByTagName('input')[0].value.trim();
    const password = document.getElementsByTagName('input')[1].value.trim();

    const isValidationSuccess = this.inputValidator(username, password);
    if (!isValidationSuccess) {
      if (labelError) {
        labelError.style.visibility = 'visible';
        labelError.textContent = 'Oops! You must complete all fields';
      }
      return null;
    }

    try {
      if (labelError) labelError.style.visibility = 'hidden';
      const result = await this.fetchData.login(username, password);
      if (result) this.router.dashboardPage(result);
    } catch (error: any) {
      if (labelError) {
        labelError.style.visibility = 'visible';
        labelError.textContent = error;
      }
    }
  }

  /**
   * Validate inputs data
   * @returns true || false
   */
  private inputValidator(username: string, password: string): boolean {
    if (username !== '' && password !== '') return true;
    return false;
  }
}
