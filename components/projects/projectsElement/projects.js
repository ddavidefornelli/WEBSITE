import { projectCollection } from '../../../data/siteContent.js';
import './projects.css';

export default class Projects extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="projects-page">
        <div class="section-heading">
          <span class="site-star" aria-hidden="true"></span>
          <h1>PROJECTS</h1>
        </div>

        <div class="projects-page__list">
          ${projectCollection.map((project) => `
            <project-project
              title="${project.title}"
              date="${project.date}"
              description="${project.description}"
              technologies="${project.technologies}"
              achievements="${project.achievements}"
              href="${project.href}"
            ></project-project>
          `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('projects-projects', Projects);
