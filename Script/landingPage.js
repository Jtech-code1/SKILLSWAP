
  const track = document.getElementById("testimonialTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const cards = Array.from(track.children);
  const gap = 24; // gap-6 = 24px

  let currentIndex = 0;

  function getTranslateX() {
    let x = 0;
    for (let i = 0; i < currentIndex; i++) {
      x += cards[i].offsetWidth + gap;
    }
    return x;
  }

  function updateSlider() {
    track.style.transform = `translateX(-${getTranslateX()}px)`;
  }

  function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
  }

  function updateAll() {
    updateSlider();
    updateButtons();
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
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

  // Initial state
  updateAll();

