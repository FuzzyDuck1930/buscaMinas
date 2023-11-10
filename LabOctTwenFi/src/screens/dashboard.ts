class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
		<style>
            .theTitle {
            display: flex;
            align-items: center;
            justify-content: center;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    		color: #130B26;
            }
        </style>
		<h1 class="theTitle">Mine-Sweeper</h1>`;
		const whole = this.ownerDocument.createElement("the-grid")
		this.shadowRoot?.appendChild(whole)
	}
}

customElements.define('app-dashboard', Dashboard);