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
      <a href="${this.getHref()}"><h3>LINK</h3></a>
    </div>
    <h3 class="project-date">${this.getDate()}</h3>
    <p class="project-description"><span class="project-description-title">DESCRIPTION: </span> ${this.getDescription()}</p>
    <p class="project-description"><span class="project-achivements-title">ACHIVEMENTS: </span>${this.getAchivements()}</p>
    <p class="project-description"><span class="project-achivements-title">TECHNOLOGIES: </span>${this.getTechnologies()}</p>
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
