class InuToast extends HTMLElement {
    connectedCallback () {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">Toast</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body text-white bg-success">
                Bisa nih! :3
                </div>
            </div>
        </div>
      `;
    }
}

customElements.define('inu-toast', InuToast);