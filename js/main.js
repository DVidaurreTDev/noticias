
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

    let pCards = document.querySelectorAll(".card");
    pCards.forEach(element => {
        element.classList.toggle("card-dark-mode")
    });

    let pCardsA = document.querySelectorAll(".card a");
    pCardsA.forEach(element => {
        element.classList.toggle("text-dark-mode")
    });

    let pCardsS = document.querySelectorAll(".card span");
    pCardsS.forEach(element => {
        element.classList.toggle("text-dark-mode")
    });

    let pPageLink = document.querySelectorAll(".page-link");
    pPageLink.forEach(element => {
        element.classList.toggle("page-link-dark-mode")
    });

    let pPageItemA = document.querySelectorAll(".page-item a");
    pPageItemA.forEach(element => {
        element.classList.toggle("text-dark-mode")
    });

    let button = document.querySelector(".noticias-section-darkmode--btn");
    if (button.innerHTML === "Dark Mode" ) {
        button.innerHTML = "Light Mode";
        button.style.backgroundColor = "white"
        button.style.color = "black"
    } else {
        button.innerHTML = "Dark Mode";
        button.style.backgroundColor = "black"
        button.style.color = "white"
    }
    }
