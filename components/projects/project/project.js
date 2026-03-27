import './project.css';

export default class ProjectProjects extends HTMLElement {
  static get observedAttributes() {
    return [
      'title',
      'date',
      'description',
      'href',
      'technologies',
      'achievements',
    ];
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
      ? `class="project-card__link" href="${href}" target="_blank" rel="noopener noreferrer"`
      : 'class="project-card__link project-card__link--static"';

    this.innerHTML = `
      <article class="project-card">
        <${shellTag} ${shellAttributes}>
          <div class="project-card__top">
            <h2>${this.getTitle()}</h2>
            <p class="project-card__date">${this.getDate()}</p>
          </div>

          <div class="project-card__rows">
            <p>
              <span>DESCRIPTION:</span>
              ${this.getDescription()}
            </p>
            <p>
              <span>ACHIEVEMENTS:</span>
              ${this.getAchievements()}
            </p>
            <p>
              <span>TECH STACK:</span>
              ${this.getTechnologies()}
            </p>
          </div>
        </${shellTag}>
      </article>
    `;
  }

  getTitle() {
    return this.getAttribute('title');
  }

  getDate() {
    return this.getAttribute('date');
  }

  getDescription() {
    return this.getAttribute('description');
  }

  getHref() {
    return this.getAttribute('href');
  }

  getAchievements() {
    return this.getAttribute('achievements');
  }

  getTechnologies() {
    return this.getAttribute('technologies');
  }
}

customElements.define('project-project', ProjectProjects);
