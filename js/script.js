let logoDark = document.querySelector(".logo-dark");
let logoLight = document.querySelector(".logo-light");
let btnMode = document.querySelector(".dark-mode-toggle");
let body = document.body;
let btnMenu = document.querySelector(".mobile-menu-toggle");
let menu = document.querySelector(".menu");
let btnClose = document.querySelector(".menu-close");

// Toggle dark mode on button click
function darkMode() {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    logoDark.style.display = "block";
    logoLight.style.display = "none";
    btnMode.innerHTML = `<i title="Light Mode" class="fas fa-sun"></i>`;
  } else {
    logoDark.style.display = "none";
    logoLight.style.display = "block";
    btnMode.innerHTML = `<i title="Dark Mode" class="fas fa-moon"></i>`;
  }
  console.log(document.querySelector(".logo-dark"));
}


// Toggle menu on button click
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    btnMenu.innerHTML = `<i class="fas fa-times"></i>`;
  }
  else {
    btnMenu.innerHTML = `<i class="fas fa-bars"></i>`;
  }
}
);