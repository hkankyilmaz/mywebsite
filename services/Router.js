const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault();
                // const url1 = event.target.href;
                const url = event.target.getAttribute("href");
                Router.go(url);
            });
        })
        // Event Handler for URL changes
        window.addEventListener("popstate", event => {
            console.log("state", event.state)
            Router.go(event.state.route, false);
        });

        // Check the initial URL
        Router.go(location.pathname);
        console.log("location", location.pathname);
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        console.log("route", route)
        switch (route) {
            case "/":
                pageElement = document.createElement("home-page");
                break;
            case "/about-me":
                pageElement = document.createElement("about-me");
                break;

        }
        if (pageElement) {
            // document.querySelector("main").children[0].remove();
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;

        } else {
            // 404
            console.log("404")
            document.querySelector("main").classList.toggle = "not-found"
            document.querySelector("main").innerHTML = "Oups, 404!"

        }
    }
}
export default Router;
