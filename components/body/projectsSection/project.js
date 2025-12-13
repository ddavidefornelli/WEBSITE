import './project.css';

export default class Project extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['title, date, description', 'href'];
  }

  async attributeChangeCallback(oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    this.innerHTML = `

<div class="project-wrapper">
  <a href='${this.getHref()}'>
    <div class="top">
    <h2 class='title'>${this.getTitle()}</h2>
    </div>
    <h5 class='date'>${this.getDate()}</h5>
      <h3 class='description'>${this.getDescription()}</h3>
  </a>
</div>
`;
  }

  getTitle() { return this.getAttribute('title'); }

  getHref() { return this.getAttribute('href'); }

  getDate() { return this.getAttribute('date'); }

  getDescription() { return this.getAttribute('description'); }
}

customElements.define('homepage-project', Project);
