import { Router } from '../router';

type callBack = {
  (): void;
};

export abstract class BaseController {
  /**
   * Create a main route View
   */
  public abstract createView(): HTMLDivElement;

  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  /**
   *
   * @param tagName HTML tagName. Ex: div, p, span, main
   * @param HTMLContent HTML content
   * @returns All page builded content
   */
  protected createElement<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    HTMLContent?: string,
    action?: callBack,
  ): HTMLElementTagNameMap[K] {
    const container = document.createElement(tagName);
    HTMLContent ? (container.innerHTML = HTMLContent) : container;
    action ? (container.onclick = action) : container;

    return container;
  }
}
