class InuBar extends HTMLElement {
    connectedCallback () {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-fluid p-4 inu-bar text-center">
            <h1>Kyou-Inu</h1>
            <p>This is your dog for today</p>
        </div>
      `;
    }
}

customElements.define('inu-bar', InuBar);