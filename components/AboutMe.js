export class AboutMe extends HTMLElement {
    constructor() {
        super();




        this.root = this.attachShadow({ mode: "open" });

        const template = document.getElementById("aboutme");
        const content = template.content.cloneNode(true);
        const styles = document.createElement("style");
        loadCSS();
        this.root.appendChild(styles);
        this.root.appendChild(content);




        async function loadCSS() {
            const request = await fetch("/components/AboutMe.css");
            styles.textContent = await request.text();
        }

    }
}


customElements.define("about-me", AboutMe);