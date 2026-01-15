import './title.css';
import html from './title.html?raw';

export default class CustomTitle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
    this.animateName();
  }

  animateName() {
    const typewriter = this.querySelector('.typewriter');
    const cursor = this.querySelector('.cursor');
    const text = typewriter.dataset.text;
    let index = 0;

    const type = () => {
      if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
      } else {
        cursor.classList.add('blink');
      }
    };

    type();
  }
}

customElements.define('custom-title', CustomTitle);
