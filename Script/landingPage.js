
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Testimonial Slider
    const track = document.getElementById("testimonialTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const cards = Array.from(track.children);
    let currentIndex = 0;

    // Responsive gap calculation
    function getGap() {
      if (window.innerWidth < 640) return 16; // gap-4 = 16px on mobile
      return 24; // gap-6 = 24px on desktop
    }

    function getCardsToShow() {
      if (window.innerWidth < 640) return 1; // Show 1 card on mobile
      if (window.innerWidth < 1024) return 2; // Show 2 cards on tablet
      return 2.5; // Show 2.5 cards on desktop
    }

    function getTranslateX() {
      let x = 0;
      const gap = getGap();
      for (let i = 0; i < currentIndex; i++) {
        x += cards[i].offsetWidth + gap;
      }
      return x;
    }

    function updateSlider() {
      track.style.transform = `translateX(-${getTranslateX()}px)`;
    }

    function updateButtons() {
      const cardsToShow = getCardsToShow();
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= cards.length - Math.floor(cardsToShow);
      
      // Visual feedback for disabled buttons
      if (prevBtn.disabled) {
        prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      
      if (nextBtn.disabled) {
        nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    }

    function updateAll() {
      updateSlider();
      updateButtons();
    }

    nextBtn.addEventListener("click", () => {
      const cardsToShow = getCardsToShow();
      if (currentIndex < cards.length - Math.floor(cardsToShow)) {
        currentIndex++;
        updateAll();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateAll();
      }
    });

    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Reset to first card on resize to prevent layout issues
        currentIndex = 0;
        updateAll();
      }, 250);
    });

    // Initial state
    updateAll();
  