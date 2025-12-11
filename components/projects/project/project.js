import html from './project.html?raw';
import './project.css';

export default class ProjectProjects extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html
  }
}

customElements.define('project-project', ProjectProjects);
