import './project.css';

export default class Project extends HTMLElement {
  async connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['title, date, description'];
  }

  async attributeChangeCallback(oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    this.innerHTML = `

<div class="project-wrapper">
  <a href="">
    <div class="top">
    <h3 class='title'>${this.getTitle()}</h3>
      <h3 class='arrow'>></h3>
    </div>
    <h5 class='date'>${this.getDate()}</h4>
      <p class='description'>${this.getDescription()}</p>
  </a>
</div>
`;
  }

  getTitle() { return this.getAttribute('title'); }

  getDate() { return this.getAttribute('date'); }

  getDescription() { return this.getAttribute('description'); }

  setTitle(value) { return this.setAttribute('title', value); }

  setDate(value) { return this.setAttribute('date', value); }

  setDescription(value) { return this.setAttribute('description', value); }
}

customElements.define('homepage-project', Project);
