import { BaseController } from './baseController';

export class MainController extends BaseController {
  private html = '';

  /**
   * Create a main route View
   * @returns HTMLDivElement with all page content
   */
  public createView() {
    const container = this.createElement('div');
    this.html = `
      <div>
        <h2>This is a Title</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident tempore laboriosam non amet expedita quo nostrum unde, at sapiente.
          Placeat reiciendis assumenda id neque illum rerum aut similique, ipsa voluptas.
        </span>
      </div>
    `;

    const mainContent = this.createElement('div', this.html);
    const appendContent = this.createElement('button', 'Go to Login', () => this.switchToLoginPage());
    container.append(mainContent, appendContent);

    return container;
  }

  /**
   * Navigate to login page
   */
  private switchToLoginPage() {
    this.router.loginPage();
  }
}
