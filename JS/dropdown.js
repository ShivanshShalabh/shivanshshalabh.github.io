const achievemntDropdown = document.getElementById("drop-down-achievement");
const achievementContainer = document.getElementById("achievement-container");
const achievementButton = document.getElementById("drop-down-achievement-icon");
const achievementButtonTxt = document.getElementById(
  "drop-down-achievement-icon-txt"
);

let achievementToggle = false;
achievemntDropdown.addEventListener("click", () => {
  achievementToggle = !achievementToggle;
  if (!achievementToggle) achievementContainer.scrollIntoView({ behavior: "smooth" });
  achievementContainer.classList.toggle("inactive");
  achievementButton.classList.toggle("rotate");
  achievementButtonTxt.innerText = achievementToggle
    ? "View Less"
    : "View More";
});


const projectDropdown = document.getElementById("drop-down-project");
const projectContainer = document.getElementById("project-container");
const projectButton = document.getElementById("drop-down-project-icon");
const projectButtonTxt = document.getElementById(
  "drop-down-project-icon-txt"
);

let projectToggle = false;

projectDropdown.addEventListener("click", () => {
  projectToggle = !projectToggle;
  projectContainer.classList.toggle("inactive");
  projectButton.classList.toggle("rotate");
  projectButtonTxt.innerText = projectToggle ? "View Less" : "View More";
  if (!projectToggle) projectContainer.scrollIntoView({ behavior: "smooth" });


});
