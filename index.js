const openMobileMenu = document.getElementById("openMobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const body = document.querySelector("body");

openMobileMenu.addEventListener("click", () => {
  body.style.overflow = "hidden";
  closeMobileMenu.parentElement.classList.add("block");
  closeMobileMenu.parentElement.classList.remove("hidden");
});

closeMobileMenu.addEventListener("click", () => {
  body.style.overflow = "auto";
  closeMobileMenu.parentElement.classList.remove("block");
  closeMobileMenu.parentElement.classList.add("hidden");
});
