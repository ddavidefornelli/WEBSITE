import './footer.css';
export default class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.loadHTML();
  }

  async loadHTML() {
    const res = await fetch('./footer.html');
    const data = await res.text();
    this.innerHTML = data;
  }
}

customElements.define('custom-footer', CustomFooter);
