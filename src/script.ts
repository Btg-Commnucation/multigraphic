import "typeface-quicksand";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swiper from "swiper/bundle";
import { SwiperOptions } from "swiper/types";
import "swiper/css/bundle";

const header = document.querySelector("header") as HTMLElement;

if (header) {
  // Si on scroll un peu dans la page, le header devient en position fixed
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

const windowWidth = window.innerWidth;
const productPage = document.getElementById("product") as HTMLElement;
const brands = document.querySelectorAll(
  ".marque-list"
) as NodeListOf<HTMLElement>;

if (productPage) {
  const swiperThumbs = new Swiper(".swiper-thumbs", {
    spaceBetween: 21,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesProgress: true,
  });

  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    loopedSlides: 4,
    effect: "fade",
    fadeEffect: { crossFade: true },
    thumbs: {
      swiper: swiperThumbs,
    },
  });
}

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

const mapCheck = document.getElementById("map");

if (mapCheck) {
  let map = L.map("map", {
    scrollWheelZoom: false,
  }).setView([48.91286, 2.21152], 16);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "OpenStreetMap",
  }).addTo(map);

  let icon = L.icon({
    iconUrl: "../wp-content/themes/multigraphic-theme/public/marker-icon.png",
    iconSize: [25, 41],
  });

  let marker = L.marker([48.912860750660975, 2.2125231830327623], {
    icon: icon,
  }).addTo(map);

  marker
    .bindPopup("<strong class='popupstrong'>Multigraphic</strong>")
    .openPopup();
}

const closeDevis = document.getElementById("close-devis") as HTMLElement;
const devisPopup = document.querySelector(".devis-container") as HTMLElement;
const devisToggle = document.getElementById("devis-toggle") as HTMLElement;
const formSecretFieldElement = document.getElementById("hidden");
const formSecretField: HTMLInputElement | null =
  formSecretFieldElement instanceof HTMLInputElement
    ? formSecretFieldElement
    : null;
const formPageTitle = document.querySelector(
  "#product > .hero-banner > .container-narrow > .content > h1"
) as HTMLElement;
const lastBreadcrumb = document.getElementById(
  "last-breadcrumb"
) as HTMLElement;

if (closeDevis && devisPopup) {
  closeDevis.addEventListener("click", () => {
    devisPopup.classList.add("hidden");
  });
}

if (devisToggle && devisPopup) {
  devisToggle.addEventListener("click", () => {
    devisPopup.classList.remove("hidden");
    setTimeout(() => {
      if (formPageTitle !== null && formSecretField !== null) {
        formSecretField.value = formPageTitle.textContent || "";
        console.log(formSecretField.value);
      }
    }, 500);
  });
}

const boutique = document.getElementById("boutique") as HTMLElement;

if (boutique) {
  const categoriesFilters = document.querySelectorAll(
    ".checkbox"
  ) as NodeListOf<HTMLInputElement>;
  const products = document.querySelectorAll(
    ".product-container"
  ) as NodeListOf<HTMLElement>;

  const showFilterBtn = document.getElementById("show-filters") as HTMLElement;
  const closeFilterBtn = document.getElementById(
    "close-filters"
  ) as HTMLElement;
  const filterContainer = document.querySelector(
    ".background-black"
  ) as HTMLElement;

  showFilterBtn.addEventListener("click", () => {
    filterContainer.classList.remove("hidden");
  });

  closeFilterBtn.addEventListener("click", () => {
    filterContainer.classList.add("hidden");
  });

  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  categoriesFilters.forEach((category) => {
    if (!searchParams.get("category")) {
      categoriesFilters[0].checked = true;
      lastBreadcrumb.textContent = categoriesFilters[0].name;
    }
    if (category.value === searchParams.get("category")) {
      categoriesFilters.forEach((element) => {
        if (element.value !== category.value) {
          element.checked = false;
        }
      });
      category.checked = true;
      lastBreadcrumb.textContent = category.name;
      products.forEach((product) => {
        if (
          category.value === "all" ||
          product.classList.contains(category.value)
        ) {
          product.classList.remove("hidden");
        } else if (!product.classList.contains(category.value)) {
          product.classList.add("hidden");
        }
      });
    }

    category.addEventListener("change", () => {
      if (category.checked) {
        lastBreadcrumb.textContent = category.name;
        if (category.value !== "all") {
          searchParams.set("category", category.value);
        } else {
          searchParams.delete("category");
        }
        url.search = searchParams.toString();
        window.history.replaceState({}, "", url.toString());
      } else {
        lastBreadcrumb.textContent = "Tous les produits";
      }
      categoriesFilters.forEach((element) => {
        if (element.value !== category.value) {
          element.checked = false;
        }
      });
      products.forEach((product) => {
        if (
          category.value === "all" ||
          product.classList.contains(category.value)
        ) {
          product.classList.remove("hidden");
        } else if (!product.classList.contains(category.value)) {
          product.classList.add("hidden");
        }
      });
    });
  });
}

if (brands) {
  if (windowWidth > 1330) {
    switch (brands.length % 5) {
      case 3:
        brands[brands.length - 1].style.gridColumn = "4";
        brands[brands.length - 2].style.gridColumn = "3";
        brands[brands.length - 3].style.gridColumn = "2";
        break;
      case 2:
        brands[brands.length - 1].style.gridColumn = "4 / 6";
        brands[brands.length - 2].style.gridColumn = "1 / 3";
        break;
      case 1:
        brands[brands.length - 1].style.gridColumn = "3";
        break;
    }
  } else if (windowWidth > 768 && windowWidth <= 1330) {
    switch (brands.length % 4) {
      case 2:
        brands[brands.length - 1].style.gridColumn = "3 / 5";
        brands[brands.length - 2].style.gridColumn = "1 / 3";
        break;
      case 1:
        brands[brands.length - 1].style.gridColumn = "1 / 5";
        break;
    }
  } else if (windowWidth <= 768 && windowWidth > 620) {
    switch (brands.length % 3) {
      case 1:
        brands[brands.length - 1].style.gridColumn = "1 / 4";
        break;
    }
  } else if (windowWidth <= 620 && windowWidth > 500) {
    switch (brands.length % 2) {
      case 1:
        brands[brands.length - 1].style.gridColumn = "1 / 3";
        break;
    }
  }
}

const heroBanner = document.querySelector(
  "#front-page > .hero-banner"
) as HTMLElement;

const sliderFront = document.querySelector(
  "#front-page > .slider-front"
) as HTMLElement;

if (heroBanner) {
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '" aria-label=Slide "' +
          (index + 1) +
          '"></span>'
        );
      },
    },
  });
}

if (sliderFront) {
  const swiper = new Swiper(".cate-swiper", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '" aria-label=Slide "' +
          (index + 1) +
          '"></span>'
        );
      },
    },
  });
}
