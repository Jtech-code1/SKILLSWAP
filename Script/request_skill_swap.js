
  function submitRequest(event) {
    // Prevent immediate navigation
    if (event) event.preventDefault();

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("hidden");

    // Get the href of the anchor
    const link = document.getElementById("requestLink").href;

    // Wait 1.5 seconds, then navigate
    setTimeout(() => {
      window.location.href = link;
    }, 1500);
  }

  function cancelRequest() {
    // Redirect on cancel
    window.location.href = "index.html";
  }

