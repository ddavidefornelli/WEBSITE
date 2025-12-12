import data from './projects.json';
import './projects.css';

export default class Projects extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    data.map(object => {
      const project = document.createElement('project-project');
      project.className = `project-${object.title}`;
      for(let key in object) {
        project.setAttribute(key, object[key])
      }
      this.appendChild(project);
    })
  }
}

customElements.define('projects-projects', Projects);
