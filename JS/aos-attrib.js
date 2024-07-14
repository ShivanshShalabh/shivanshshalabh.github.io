const footerElem = document.querySelector("footer");
footerElem.setAttribute("data-aos", "fade-up");
footerElem.setAttribute("data-aos-offset", "10");

// Achievements
const achievementsElem = document.querySelectorAll(".achievement");
for (let i = 0; i < achievementsElem.length; i++) {
     achievementsElem[i].setAttribute("data-aos", "flip-up");
    achievementsElem[i].setAttribute("data-aos-offset", "50");
}