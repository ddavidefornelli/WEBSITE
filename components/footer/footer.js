import './footer.css';
import html from './footer.html?raw';

export default class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('custom-footer', CustomFooter);
