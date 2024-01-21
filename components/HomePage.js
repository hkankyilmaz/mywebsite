export class HomePage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });

        // Load CSS and append HTML content
        this.loadCSSAndAppendContent();
    }

    async loadCSSAndAppendContent() {
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        // Load CSS
        const request = await fetch("/components/HomePage.css");
        styles.textContent = await request.text();

        // Append HTML content after CSS is loaded
        this.appendHTMLContent();
    }

    appendHTMLContent() {
        const template = document.getElementById("homepage__content");
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}

customElements.define("home-page", HomePage);

