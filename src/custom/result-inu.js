class ResultInu extends HTMLElement {
    connectedCallback () {
        this.render();
    }

    render() {
        this.innerHTML = `
        <h1 class="badge rounded-pill output-inu"><span id="outputName"></span> Inu</h1>
        <p>今日の君の犬だよ</p>
        `;    
    }
}

customElements.define('result-inu', ResultInu);