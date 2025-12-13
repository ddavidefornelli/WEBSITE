import data from './projects.json';
import './projects.css';

export default class Projects extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((object) => {
      const project = document.createElement('project-project');
      project.className = `project-project-${object.title}`;
      for (const key in object) {
        project.setAttribute(key, object[key]);
      }
      this.appendChild(project);
    });
  }
}

customElements.define('projects-projects', Projects);
