import "typeface-quicksand";

const newsletterToggle: NodeListOf<HTMLElement> | null =
  document.querySelectorAll(".newsletter-toggle");
const newsletter: HTMLElement | null =
  document.getElementById("newsletter-show");

const closeNewsletter: HTMLElement | null =
  document.getElementById("close-newsletter");

const responsiveMenu: HTMLElement | null = document.getElementById(
  "responsive-menu-container"
);
const burger: HTMLElement | null = document.getElementById("burger");
const closeBurger: HTMLElement | null = document.getElementById("close-burger");
const categoriesBtn: NodeListOf<HTMLElement> | null = document.querySelectorAll(
  ".categories > ul > li > .btn"
);
const posts: NodeListOf<HTMLElement> | null = document.querySelectorAll(
  "#home-template > .container-narrow > article > .posts > li"
);

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
  newsletterToggle.forEach((element) => {
    element.addEventListener("click", () => {
      newsletter.classList.remove("hidden");
      if (responsiveMenu && responsiveMenu.classList.contains("open")) {
        responsiveMenu.classList.remove("open");
      }
    });
  });
}

if (closeNewsletter && newsletter) {
  closeNewsletter.addEventListener("click", () => {
    newsletter.classList.add("hidden");
  });
}

const handleShowPosts = (
  element: HTMLElement,
  posts: NodeListOf<HTMLElement>
) => {
  if (element.id === "all") {
    posts.forEach((post) => post.classList.remove("hidden"));
  } else {
    posts.forEach((post) => {
      post.classList.remove("hidden");
      !post.classList.contains(element.id) && post.classList.add("hidden");
    });
  }
};

if (categoriesBtn && posts) {
  categoriesBtn.forEach((element) => {
    element.addEventListener("click", () => {
      categoriesBtn.forEach((element) => element.classList.remove("current"));
      element.classList.add("current");
      handleShowPosts(element, posts);
    });
  });
}
