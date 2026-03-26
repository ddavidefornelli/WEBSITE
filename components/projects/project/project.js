import "./project.css";

export default class ProjectProjects extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      "title",
      "date",
      "description",
      "href",
      "videoPath",
      "technologies",
    ];
  }

  async attributeChangeCallback(oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    this.innerHTML = `
  <div class="project-project-wrapper">
    <h2 class="arrow"> &gt; </h2>
<a id="project-github-link" href="${this.getHref()}">
    <div class="title">
      <h1 class="silver">${this.getTitle()}</h1>
    </div>
    <h3 class="project-date">${this.getDate()}</h3>
    <div class="project-details">
      <div class="project-row">
        <span class="project-label">DESCRIPTION:&nbsp;&nbsp;</span>
        <span class="project-value">${this.getDescription()}</span>
      </div>
      <div class="project-row">
        <span class="project-label">ACHIEVEMENTS:&nbsp;</span>
        <span class="project-value">${this.getAchivements()}</span>
      </div>
      <div class="project-row">
        <span class="project-label">TECH STACK:&nbsp;&nbsp;&nbsp;</span>
        <span class="project-value">${this.getTechnologies()}</span>
      </div>
    </div>
</a>
  </div>
`;
  }

  getTitle() {
    return this.getAttribute("title");
  }

  getDate() {
    return this.getAttribute("date");
  }

  getDescription() {
    return this.getAttribute("description");
  }

  getHref() {
    return this.getAttribute("href");
  }

  getAchivements() {
    return this.getAttribute("achivements");
  }

  getTechnologies() {
    return this.getAttribute("technologies");
  }
}

customElements.define("project-project", ProjectProjects);
