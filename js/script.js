var logoDark = document.querySelector(".logo-dark");
var logoLight = document.querySelector(".logo-light");
var btnMode = document.querySelector(".dark-mode-toggle");
var body = document.body;

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
}
