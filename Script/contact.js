
  function toggleFAQ(id) {
    for (let i = 1; i <= 5; i++) {
      const content = document.getElementById(`content-${i}`);
      const icon = document.getElementById(`icon-${i}`);

      if (i === id) {
        const isHidden = content.classList.contains("hidden");
        content.classList.toggle("hidden", !isHidden);
        icon.textContent = isHidden ? "−" : "+";
      } else {
        content.classList.add("hidden");
        icon.textContent = "+";
      }
    }
  }

