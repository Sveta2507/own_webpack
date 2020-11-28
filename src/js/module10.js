import menu from "../data/menu.json";
console.log(menu);
import menuItemTemplate from "../template/menu-item.hbs";
const body = document.querySelector("body");
// генерация меню
const item = menuItemTemplate(menu);
const menuList = document.querySelector(".js-menu");
menuList.insertAdjacentHTML("afterbegin", item);
// переключатель тем
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const switchBtn = document.querySelector(".js-switch-input");
console.log(switchBtn);
if (localStorage.getItem("colorTheme")) {
  body.classList.add(Theme.LIGHT);
  switchBtn.checked = false;
  localStorage.setItem("colorTheme", Theme.LIGHT);
}
switchBtn.addEventListener("change", () => {
  console.dir(switchBtn);
  if (switchBtn.checked) {
    localStorage.setItem("colorTheme", Theme.DARK);
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem("colorTheme", Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
});
