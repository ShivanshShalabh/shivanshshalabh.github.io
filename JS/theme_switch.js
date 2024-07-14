let rootElemThemeSwitch = document.querySelector(":root");
const themeSwitchIElem = document.querySelector("#theme-switch i");

const darkThemeVars = {
  "--dark-theme-black": "#333333",
  "--dark-theme-white-primary": "#ffffff",
  "--dark-theme-white-secondary": "#eeeeee",
  "--dark-theme-white-tertiary": "#c0c0c0",
  "--dark-theme-black-secondary": "#4d4d4d",
  "--morhpism-background": "rgba(0, 0, 0, 0.16)",
};
const lightThemeVars = {
  "--dark-theme-black": "#ffffff",
  "--dark-theme-white-primary": "#000000",
  "--dark-theme-white-secondary": "#1f1f1f",
  "--dark-theme-white-tertiary": "#4d4d4d",
  "--dark-theme-black-secondary": "#949494",
  "--morhpism-background": "rgba(255, 255, 255, 0.46)",
};
const themeSwitch = document.querySelector("#theme-switch");

const setTheme = (theme) => {
  if (theme === "dark")
    for (let i in darkThemeVars) {
      rootElemThemeSwitch.style.setProperty(i, darkThemeVars[i]);
      themeSwitchIElem.classList.remove("fa-moon");
      themeSwitchIElem.classList.add("fa-sun");
    }
  else
    for (let i in lightThemeVars) {
      rootElemThemeSwitch.style.setProperty(i, lightThemeVars[i]);
      themeSwitchIElem.classList.remove("fa-sun");
      themeSwitchIElem.classList.add("fa-moon");
    }
  document.body.classList.add("theme-" + theme);
  document.body.classList.remove(
    "theme-" + (theme === "dark" ? "light" : "dark")
  );

  localStorage.setItem("theme", theme);
};
const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

let currentTheme = getTheme();
setTheme(currentTheme);

themeSwitch.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(currentTheme);
});
