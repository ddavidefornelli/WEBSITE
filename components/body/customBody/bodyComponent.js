import './bodyComponent.css';
import { homeProjects, skillGroups } from '../../../data/siteContent.js';

const renderSkillGroups = () => skillGroups.map((group) => `
  <p>
    <span>${group.title}:</span>
    ${group.items.join(', ')}
  </p>
`).join('');

export default class CustomBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="home-page">
        <custom-title></custom-title>

        <section class="home-section">
          <div class="section-heading">
            <span class="site-star" aria-hidden="true"></span>
            <h2>PROJECTS</h2>
          </div>

          <div class="home-project-list">
            ${homeProjects.map((project) => `
              <homepage-project
                title="${project.title}"
                date="${project.date}"
                description="${project.description}"
                href="${project.href}"
              ></homepage-project>
            `).join('')}
          </div>
        </section>

        <section class="home-section">
          <div class="section-heading">
            <span class="site-star" aria-hidden="true"></span>
            <h2>SKILLS</h2>
          </div>

          <div class="home-skills panel">
            ${renderSkillGroups()}
          </div>
        </section>
      </div>
    `;
  }
}

customElements.define('custom-body', CustomBody);
