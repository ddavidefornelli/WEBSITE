import './bodyComponent.css';
import html from './bodyComponent.html?raw';

export default class CustomBody extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('custom-body', CustomBody);
