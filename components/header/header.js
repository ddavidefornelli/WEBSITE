import './header.css';
import html from './header.html?raw';

export default class CustomHeader extends HTMLElement {
  async connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('custom-header', CustomHeader);
