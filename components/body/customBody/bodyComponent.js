import './bodyComponent.css';
export default class CustomBody extends HTMLElement {
  async connectedCallback() {
    await this.loadHTML();
  }

  async loadHTML() {
    const res = await fetch('./bodyComponent.html');
    const html = await res.text();
    this.innerHTML = html;
  }
}

customElements.define('custom-body', CustomBody);
