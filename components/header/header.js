import './header.css';

export default class CustomHeader extends HTMLElement {
  async connectedCallback() {
    await this.loadHTML();
  }

  async loadHTML() {
    const res = await fetch('./components/header/header.html');
    const html = await res.text();
    this.innerHTML = html;
  }
}

customElements.define('custom-header', CustomHeader);
