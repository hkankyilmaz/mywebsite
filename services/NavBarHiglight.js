
const higlihgt = () => {
    document.querySelectorAll("[data-isactive]").forEach((el) => {

        el.addEventListener("click", (e) => {

            document.querySelectorAll("[data-isactive]").forEach((el) => {
                if (el.dataset.isactive === "true") {
                    el.dataset.isactive = "false";
                }
                e.target.dataset.isactive = "true";
            })

        })





    })
}

export default higlihgt;