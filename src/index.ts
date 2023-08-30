import "typeface-quicksand";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Swiper from "swiper/bundle";
import { SwiperOptions } from "swiper/types";
import "swiper/css/bundle";

const swiperContainer = document.querySelector(".swiper");

if (swiperContainer) {
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
