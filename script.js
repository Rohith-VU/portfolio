// AOS Animation
AOS.init();

// ================= MOBILE MENU =================
const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".header-section-list");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ================= CAROUSEL =================
const carouselContent = document.getElementById("carouselContent");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let index = 0;

function updateCarousel() {
  carouselContent.style.transform = `translateX(-${index * 100}%)`;
}

if (document.getElementById("nextBtn")) {
  document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });
}

if (document.getElementById("prevBtn")) {
  document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });
}

// Auto Slide
if (totalSlides > 0) {
  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 4000);
}

// ================= DOWNLOAD CV =================
function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Rohith_UX_Resume.pdf";
  link.download = "Rohith_UX_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}