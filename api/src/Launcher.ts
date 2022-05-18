import { Server } from './Server';

class Launcher {
  name: string;

  server: Server;

  constructor() {
    this.name = 'Jonatan Waibsnaider';
    this.server = new Server();
  }

  launchApp() {
    console.log('Initialize App');
    this.server.init();
  }
}

new Launcher().launchApp();
