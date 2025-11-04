 const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.getAttribute('data-animate');
        entry.target.classList.add('animate__animated', animation, 'visible');
        observer.unobserve(entry.target); // play once
      }
    });
  }, { threshold: 0.3 });
  

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