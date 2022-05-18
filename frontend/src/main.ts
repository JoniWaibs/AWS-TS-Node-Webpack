import { Router } from './router';

export class Main {
  private router: Router = new Router();

  public launchApp() {
    this.router.handleRequest();
  }
}

new Main().launchApp();
