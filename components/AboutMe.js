export class AboutMe extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });
        const styles = document.createElement("style");
        this.root.appendChild(styles);

        // Use a Promise to ensure that CSS is loaded before proceeding
        const loadCSS = async () => {
            const request = await fetch("/components/AboutMe.css");
            styles.textContent = await request.text();
        };

        // Call the loadCSS function and wait for it to complete
        (async () => {
            await loadCSS();

            const template = document.getElementById("aboutme");
            const content = template.content.cloneNode(true);

            this.root.appendChild(content);
        })();
    }
}

customElements.define("about-me", AboutMe);
