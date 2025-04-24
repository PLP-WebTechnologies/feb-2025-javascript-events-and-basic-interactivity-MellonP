// Live style preview
const nameInput = document.getElementById("name");
const styleInput = document.getElementById("style");
const previewName = document.getElementById("previewName");
const previewStyle = document.getElementById("previewStyle");

nameInput.addEventListener("input", () => {
  previewName.textContent = nameInput.value || "-";
  });

  styleInput.addEventListener("input", () => {
    previewStyle.textContent = styleInput.value || "-";
    });

    // Style form submission
    document.getElementById("styleForm").addEventListener("submit", (e) => {
      e.preventDefault();
        alert(`Thanks, ${nameInput.value}! Minty is curating a look for your ${styleInput.value} style.`);
        });

        // Contact form validation
        document.getElementById("contactForm").addEventListener("submit", (e) => {
          e.preventDefault();
            const email = document.getElementById("email").value.trim();
              const message = document.getElementById("message").value.trim();

                if (!email || !message) {
                    alert("Please fill in all fields.");
                        return;
                          }

                            if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
                                alert("Invalid email format.");
                                    return;
                                      }

                                        alert("Message sent successfully! We'll get back to you soon.");
                                          e.target.reset();
                                          });

                                          // Theme toggle
                                          const toggleBtn = document.getElementById("themeToggle");
                                          toggleBtn.addEventListener("click", () => {
                                            document.body.classList.toggle("dark");
                                            });

                                            // Download button action
                                            document.getElementById("downloadBtn").addEventListener("click", () => {
                                              // Replace with real link when available
                                                alert("Downloading Minty Lookbook...");
                                                  window.open("files/minty-lookbook.pdf", "_blank");
                                                  });
