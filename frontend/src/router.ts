import { LoginController, MainController, DashboardController } from './controllers/index';
import { baseUrl } from './enums/baseUrls';
import { SessionToken } from './models/Authentication';
import { Utils } from './utils';

const { LOGIN, DASHBOARD } = baseUrl;

export class Router {
  private rootElement = document.getElementById('root');

  private currentRoute = Utils.getRoute();

  /**
   * Handle all url routes
   */
  public handleRequest() {
    console.log('Handling requests for', this.currentRoute);

    switch (this.currentRoute) {
      case LOGIN:
        this.loginPage();
        break;
      case DASHBOARD:
        this.dashboardPage(null);
        break;
      default:
        this.homePage();
        break;
    }
  }

  /**
   * Handle the homePage view
   */
  public homePage() {
    if (this.rootElement) {
      (this.rootElement.innerHTML = ''), this.rootElement?.append(new MainController(this).createView());
    }
  }

  /**
   * Handle the loginPage view
   */
  public loginPage() {
    if (this.rootElement) {
      (this.rootElement.innerHTML = ''), this.rootElement.append(new LoginController(this).createView());
    }
  }

  /**
   * Handle the DashboardPage view
   * But previously, this sets a token if it has
   * @param sessionToken token
   */
  public dashboardPage(sessionToken: SessionToken | null) {
    if (this.rootElement) {
      this.rootElement.innerHTML = '';
      const dashboardController: DashboardController = new DashboardController(this);
      if (sessionToken) {
        dashboardController.setSessionToken(sessionToken);
      }
      this.rootElement.append(dashboardController.createView());
    }
  }
}
