import './project.css';

export default class ProjectProjects extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['title', 'date', 'description', 'href', 'videoPath', 'technologies'];
  }

  async attributeChangeCallback(oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    this.innerHTML = `
  <div class="project-project-wrapper">
    <div class="title">
      <h1 class="silver">${this.getTitle()}</h1>
      <a href="${this.getHref()}"><h3>Link</h3></a>
    </div>
    <h3 class="project-date">${this.getDate()}</h3>
    <div class="project-details">
      <div class="project-row">
        <span class="project-label">Description:&nbsp;&nbsp;</span>
        <span class="project-value">${this.getDescription()}</span>
      </div>
      <div class="project-row">
        <span class="project-label">Achievements:&nbsp;</span>
        <span class="project-value">${this.getAchivements()}</span>
      </div>
      <div class="project-row">
        <span class="project-label">Tech Stack:&nbsp;&nbsp;&nbsp;</span>
        <span class="project-value">${this.getTechnologies()}</span>
      </div>
    </div>
  </div>
`;
  }

  getTitle() { return this.getAttribute('title'); }

  getDate() { return this.getAttribute('date'); }

  getDescription() { return this.getAttribute('description'); }

  getHref() { return this.getAttribute('href'); }

  getAchivements() { return this.getAttribute('achivements'); }

  getTechnologies() { return this.getAttribute('technologies'); }
}

customElements.define('project-project', ProjectProjects);
