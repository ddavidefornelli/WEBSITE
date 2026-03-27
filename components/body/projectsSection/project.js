import './project.css';

export default class Project extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'date', 'description', 'href'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const href = this.getHref();
    const shellTag = href ? 'a' : 'div';
    const shellAttributes = href
      ? `class="home-project-card__link" href="${href}" target="_blank" rel="noopener noreferrer"`
      : 'class="home-project-card__link home-project-card__link--static"';

    this.innerHTML = `
      <article class="home-project-card">
        <${shellTag} ${shellAttributes}>
          <div class="home-project-card__top">
            <h3>${this.getTitle()}</h3>
            <p class="home-project-card__date">${this.getDate()}</p>
          </div>

          <p class="home-project-card__description">${this.getDescription()}</p>
        </${shellTag}>
      </article>
    `;
  }

  getTitle() { return this.getAttribute('title'); }

  getHref() { return this.getAttribute('href'); }

  getDate() { return this.getAttribute('date'); }

  getDescription() { return this.getAttribute('description'); }
}

customElements.define('homepage-project', Project);
