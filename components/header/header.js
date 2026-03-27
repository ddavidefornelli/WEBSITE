import './header.css';
import html from './header.html?raw';

const normalizePath = (path) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.replace(/\/+$/, '');
  }

  return path;
};

export default class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
    this.updateActiveState = this.updateActiveState.bind(this);
    window.addEventListener('popstate', this.updateActiveState);
    window.addEventListener('routechange', this.updateActiveState);
    this.updateActiveState();
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.updateActiveState);
    window.removeEventListener('routechange', this.updateActiveState);
  }

  updateActiveState() {
    const currentPath = normalizePath(window.location.pathname);

    this.querySelectorAll('[data-route]').forEach((link) => {
      const isActive = link.getAttribute('data-route') === currentPath;

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }
}

customElements.define('custom-header', CustomHeader);
