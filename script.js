  AOS.init();

const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
const carouselContent = document.getElementById('carouselContent');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let index = 0;

    document.getElementById('nextBtn').addEventListener('click', () => {
      index = (index + 1) % totalSlides;
      updateCarousel();
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      index = (index - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });

    function updateCarousel() {
      carouselContent.style.transform = `translateX(-${index * 100}%)`;
    }

    // Optional auto-slide every 4 seconds
    setInterval(() => {
      index = (index + 1) % totalSlides;
      updateCarousel();
    }, 4000);

  function downloadCV() {
    const link = document.createElement("a");
    link.href = "./Rohith_UX_Resume.pdf";            
    link.download = "Rohith_UX_Resume.pdf";        
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }