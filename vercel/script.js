const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

// Close menu when clicking a link
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
  });
});
