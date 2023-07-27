import "typeface-quicksand";

const newsletterToggle: HTMLElement | null =
  document.getElementById("newsletter-toggle");
const newsletter: HTMLElement | null =
  document.getElementById("newsletter-show");

const closeNewsletter: HTMLElement | null =
  document.getElementById("close-newsletter");

const responsiveMenu: HTMLElement | null = document.getElementById(
  "responsive-menu-container"
);
const burger: HTMLElement | null = document.getElementById("burger");
const closeBurger: HTMLElement | null = document.getElementById("close-burger");

if (responsiveMenu && burger) {
  burger.addEventListener("click", () => {
    responsiveMenu.classList.toggle("open");
  });
}

if (responsiveMenu && closeBurger) {
  closeBurger.addEventListener("click", () => {
    responsiveMenu.classList.remove("open");
  });
}

if (newsletterToggle && newsletter) {
  newsletterToggle.addEventListener("click", () => {
    newsletter.classList.toggle("hidden");
    if (responsiveMenu && responsiveMenu.classList.contains("open")) {
      responsiveMenu.classList.remove("open");
    }
  });
}

if (closeNewsletter && newsletter) {
  closeNewsletter.addEventListener("click", () => {
    newsletter.classList.add("hidden");
  });
}
