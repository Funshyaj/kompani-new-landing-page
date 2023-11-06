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

// make 4 buttons
faq1.addEventListener("click", () => {
  // mobile
  if (window.outerWidth < 768) {
    if (faq2.parentElement.parentElement.classList.contains("top-[-46vh]")) {
      faq2.parentElement.parentElement.classList.remove("top-[-46vh]");
      faq2.parentElement.parentElement.classList.add("top-[-15vh]");

      faq3.parentElement.parentElement.classList.remove("top-[-92vh]");
      faq3.parentElement.parentElement.classList.add("top-[-61vh]");

      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-107vh]");
    } else {
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-15vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-61vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-107vh]");
    }
    // tablet
  } else {
    if (faq2.parentElement.parentElement.classList.contains("top-[-46vh]")) {
      faq2.parentElement.parentElement.classList.remove("top-[-46vh]");
      faq2.parentElement.parentElement.classList.add("top-[-26vh]");

      faq3.parentElement.parentElement.classList.remove("top-[-92vh]");
      faq3.parentElement.parentElement.classList.add("top-[-72vh]");

      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-118vh]");
    } else {
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-26vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-72vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-118vh]");
    }
  }
});

faq2.addEventListener("click", () => {
  // mobile
  if (window.outerWidth < 768) {
    if (faq3.parentElement.parentElement.classList.contains("top-[-92vh]")) {
      faq3.parentElement.parentElement.classList.remove("top-[-92vh]");
      faq3.parentElement.parentElement.classList.add("top-[-61vh]");

      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-107vh]");
    } else if (
      !faq2.parentElement.parentElement.classList.contains("top-[-46vh]")
    ) {
      // if closed
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-15vh]");
    } else {
      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-61vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-107vh]");
    }
    // tablet
  } else {
    if (faq3.parentElement.parentElement.classList.contains("top-[-92vh]")) {
      faq3.parentElement.parentElement.classList.remove("top-[-92vh]");
      faq3.parentElement.parentElement.classList.add("top-[-72vh]");

      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-118vh]");
    } else if (
      !faq2.parentElement.parentElement.classList.contains("top-[-46vh]")
    ) {
      // if closed
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-26vh]");
    } else {
      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-72vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-118vh]");
    }
  }
});

faq3.addEventListener("click", () => {
  // mobile
  if (window.outerWidth < 768) {
    if (faq4.parentElement.parentElement.classList.contains("top-[-138vh]")) {
      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-107vh]");
    } else if (
      !faq3.parentElement.parentElement.classList.contains("top-[-92vh]")
    ) {
      // if closed
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-15vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-61vh]");
    } else {
      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-107vh]");
    }
    // tablet
  } else {
    if (faq4.parentElement.parentElement.classList.contains("top-[-138vh]")) {
      faq4.parentElement.parentElement.classList.remove("top-[-138vh]");
      faq4.parentElement.parentElement.classList.add("top-[-118vh]");
    } else if (
      !faq3.parentElement.parentElement.classList.contains("top-[-92vh]")
    ) {
      // if closed
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-26vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-72vh]");
    } else {
      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-118vh]");
    }
  }
});

faq4.addEventListener("click", () => {
  // mobile
  if (window.outerWidth < 768) {
    if (!faq4.parentElement.parentElement.classList.contains("top-[-138rem]")) {
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-15vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-61vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-107vh]");
    }
  }
  // tablet
  else {
    if (!faq4.parentElement.parentElement.classList.contains("top-[-138rem]")) {
      faq2.parentElement.parentElement.classList.add("top-[-46vh]");
      faq2.parentElement.parentElement.classList.remove("top-[-26vh]");

      faq3.parentElement.parentElement.classList.add("top-[-92vh]");
      faq3.parentElement.parentElement.classList.remove("top-[-72vh]");

      faq4.parentElement.parentElement.classList.add("top-[-138vh]");
      faq4.parentElement.parentElement.classList.remove("top-[-118vh]");
    }
  }
});
