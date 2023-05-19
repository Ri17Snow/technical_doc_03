const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  if (menu.classList.toggle("hidden")) {
    menu.classList.add("hidden");
  } else {
    menu.classList.remove("hidden");
  }
});
