
window.addEventListener("load",function(event){

    this.document.querySelector(".noticias-section-darkmode--btn").addEventListener("click", toggleDarkMode);

});

const toggleDarkMode = () => {
    let body = document.querySelector("body")
    body.classList.toggle("dark-mode")

    let pItems = document.querySelectorAll(".p-toggle");
    pItems.forEach(element => {
        element.classList.toggle("text-dark-mode")
    });
}