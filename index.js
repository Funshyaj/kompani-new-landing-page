const openMobileMenu = document.getElementById("openMobileMenu");
const closeMobileMenu = document.getElementById("closeMobileMenu");
const faq1 = document.getElementById("faq-btn-1");
const faq2 = document.getElementById("faq-btn-2");
const faq3 = document.getElementById("faq-btn-3");
const faq4 = document.getElementById("faq-btn-4");
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

// faq.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     if (index !== 3) {
//       let length = 4 - index
//       for (let index = 1; index < length; index++) {
//         const element = faq[index];
//         element.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.st

//       }
//      } else {
//       console.log(btn.parentElement.previousElementSibling);
//     }
//   });

//   faqLast.addEventListener("click", () => {});
// });

// make 4 buttons

faq1.addEventListener("click", () => {
  if (faq2.parentElement.parentElement.classList.contains("top-[-17rem]")) {
    faq2.parentElement.parentElement.classList.remove("top-[-17rem]");
    faq2.parentElement.parentElement.classList.add("top-[-8rem]");

    faq3.parentElement.parentElement.classList.remove("top-[-34rem]");
    faq3.parentElement.parentElement.classList.add("top-[-25rem]");

    faq4.parentElement.parentElement.classList.remove("top-[-51rem]");
    faq4.parentElement.parentElement.classList.add("top-[-42rem]");
  } else {
    faq2.parentElement.parentElement.classList.add("top-[-17rem]");
    faq2.parentElement.parentElement.classList.remove("top-[-8rem]");

    faq3.parentElement.parentElement.classList.add("top-[-34rem]");
    faq3.parentElement.parentElement.classList.remove("top-[-25rem]");

    faq4.parentElement.parentElement.classList.add("top-[-51rem]");
    faq4.parentElement.parentElement.classList.remove("top-[-42rem]");
  }
});

faq2.addEventListener("click", () => {
  if (faq3.parentElement.parentElement.classList.contains("top-[-34rem]")) {
    faq3.parentElement.parentElement.classList.remove("top-[-34rem]");
    faq3.parentElement.parentElement.classList.add("top-[-25rem]");

    faq4.parentElement.parentElement.classList.remove("top-[-51rem]");
    faq4.parentElement.parentElement.classList.add("top-[-42rem]");
  } else {
    faq2.parentElement.parentElement.classList.add("top-[-17rem]");
    faq2.parentElement.parentElement.classList.remove("top-[-8rem]");

    faq3.parentElement.parentElement.classList.add("top-[-34rem]");
    faq3.parentElement.parentElement.classList.remove("top-[-25rem]");

    faq4.parentElement.parentElement.classList.add("top-[-51rem]");
    faq4.parentElement.parentElement.classList.remove("top-[-42rem]");
  }
});

faq3.addEventListener("click", () => {
  if (faq4.parentElement.parentElement.classList.contains("top-[-51rem]")) {
    faq4.parentElement.parentElement.classList.remove("top-[-51rem]");
    faq4.parentElement.parentElement.classList.add("top-[-42rem]");
  } else {
    faq2.parentElement.parentElement.classList.add("top-[-17rem]");
    faq2.parentElement.parentElement.classList.remove("top-[-8rem]");

    faq3.parentElement.parentElement.classList.add("top-[-34rem]");
    faq3.parentElement.parentElement.classList.remove("top-[-25rem]");

    faq4.parentElement.parentElement.classList.add("top-[-51rem]");
    faq4.parentElement.parentElement.classList.remove("top-[-42rem]");
  }
});

faq4.addEventListener("click", () => {
  if (!faq4.parentElement.parentElement.classList.contains("top-[-51rem]")) {
    faq2.parentElement.parentElement.classList.add("top-[-17rem]");
    faq2.parentElement.parentElement.classList.remove("top-[-8rem]");

    faq3.parentElement.parentElement.classList.add("top-[-34rem]");
    faq3.parentElement.parentElement.classList.remove("top-[-25rem]");

    faq4.parentElement.parentElement.classList.add("top-[-51rem]");
    faq4.parentElement.parentElement.classList.remove("top-[-42rem]");
  }
});
