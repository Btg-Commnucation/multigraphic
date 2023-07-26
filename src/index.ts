import "./sass/style.scss";
import "typeface-quicksand";

const newsletterToggle: HTMLElement | null =
  document.getElementById("newsletter-toggle");
const newsletter: HTMLElement | null =
  document.getElementById("newsletter-show");
console.log("newsletterToggle");

if (newsletterToggle && newsletter) {
  newsletterToggle.addEventListener("click", () => {
    newsletter.classList.toggle("hidden");
  });
}
