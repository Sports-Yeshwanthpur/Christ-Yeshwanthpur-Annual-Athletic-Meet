const menuButton = document.querySelector(".navbar-menu-image");
const menu = document.querySelector(".navbar-links-menu");

let isOpen = false;

function Menu() {
  menuButton.addEventListener("click", () => {
    if (!isOpen) {
      menu.classList.remove("close-menu");
      menu.classList.add("open-menu");
      isOpen = true;
    } else {
      menu.classList.remove("open-menu");
      menu.classList.add("close-menu");
      isOpen = false;
    }
  });
}

Menu();
