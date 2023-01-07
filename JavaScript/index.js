const desktopLogo = document.querySelector("#navbar-mobile .navbar-image");
const mobileLogo = document.querySelector(".navbar-image");

const menuButton = document.querySelector(".navbar-menu-image");
const menu = document.querySelector(".navbar-links-menu");
let isOpen = false;

function NavbarLogo() {
  mobileLogo.addEventListener("click", () => {
    window.location.href = "https://christuniversity.in/";
  });

  desktopLogo.addEventListener("click", () => {
    window.location.href = "https://christuniversity.in/";
  });
}

function NavbarMenu() {
  menuButton.addEventListener("click", () => {
    if (!isOpen) {
      menuButton.style.rotate = "-90deg";
      menu.classList.remove("close-menu");
      menu.classList.add("open-menu");
      isOpen = true;
    } else {
      menuButton.style.rotate = "0deg";
      menu.classList.remove("open-menu");
      menu.classList.add("close-menu");
      isOpen = false;
    }
  });
}

NavbarLogo();
NavbarMenu();
