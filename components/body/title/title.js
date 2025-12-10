import './title.css';

export default class CustomTitle extends HTMLElement {
  connectedCallback() {
    this.loadHTML();
  }

  async loadHTML() {
    const res = await fetch('./components/body/title/title.html');
    const html = await res.text();
    this.innerHTML = html;
  }
}

customElements.define('custom-title', CustomTitle);
