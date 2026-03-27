import './title.css';
import html from './title.html?raw';

export default class CustomTitle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}

customElements.define('custom-title', CustomTitle);
