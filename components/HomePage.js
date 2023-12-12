
export class HomePage extends HTMLElement {

    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });

        const template = document.getElementById("homepage__content");
        const content = template.content.cloneNode(true);
        const styles = document.createElement("style");
        this.root.appendChild(content);
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/components/HomePage.css");
            styles.textContent = await request.text();
        }
        loadCSS();
    }



}

customElements.define("home-page", HomePage);
