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
      <div class="title-date">
        <h1>${this.getTitle()}</h1>
      </div>
      <a href="${this.getHref()}"><h3>GITHUB</h3></a>
    </div>
  <h3 class="date">${this.getDate()}</h3>
    <p class="description">${this.getDescription()}</p>
    <div class="technologies">
      <h3>TECHNOLOGIES: ${this.getTechnologies()}</h3>
    </div>
    <video src="${this.getVideoPath()}" type='video/mp4' autoplay muted preload></video>
</div>
`;
  }

  getTitle() { return this.getAttribute('title'); }

  getDate() { return this.getAttribute('date'); }

  getDescription() { return this.getAttribute('description'); }

  getHref() { return this.getAttribute('href'); }

  getVideoPath() { return this.getAttribute('videoPath'); }

  getTechnologies() { return this.getAttribute('technologies'); }
}

customElements.define('project-project', ProjectProjects);
