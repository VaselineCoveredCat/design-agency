const menu = document.querySelector(".js-menu")!;
const nav = document.querySelector(".js-nav")!;
const send = document.querySelector(".js-send")!;
const year = document.querySelector(".js-year")!;

const currentYear = new Date().getFullYear();

menu.addEventListener("click", () => {
  if (menu.getAttribute("aria-expanded") === "true") {
    menu.setAttribute("aria-expanded", "false");
  } else {
    menu.setAttribute("aria-expanded", "true");
  }
});

nav.addEventListener("keydown", (event) => {
  if ((event as KeyboardEvent).key === "Escape") {
    menu.setAttribute("aria-expanded", "false");
  }
});

send.addEventListener("click", (event) => {
  event.preventDefault();
});

year.textContent = String(currentYear);
