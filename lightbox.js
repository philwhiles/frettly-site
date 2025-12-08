
        // Year in footer
        document.getElementById("year").textContent =
          new Date().getFullYear();

        // Simple lightbox logic
        (function () {
          const lightbox = document.getElementById("lightbox");
          const lightboxImg = document.getElementById("lightbox-img");
          const lightboxCaption = document.getElementById("lightbox-caption");
          const closeBtn = document.querySelector(".lightbox-close");

          function openLightbox(img) {
            const figure = img.closest("figure");
            const captionEl = figure
              ? figure.querySelector("figcaption")
              : null;

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || "";
            lightboxCaption.textContent = captionEl
              ? captionEl.textContent.trim()
              : "";

            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
          }

          function closeLightbox() {
            lightbox.classList.remove("is-open");
            lightbox.setAttribute("aria-hidden", "true");
            lightboxImg.src = "";
            lightboxImg.alt = "";
            lightboxCaption.textContent = "";
          }

          // Click thumbnails
          document
            .querySelectorAll(".gallery-image")
            .forEach((img) => {
              img.style.cursor = "zoom-in";
              img.addEventListener("click", () => openLightbox(img));
            });

          // Close button
          closeBtn.addEventListener("click", closeLightbox);

          // Click on backdrop closes (but not when clicking inner content)
          lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) {
              closeLightbox();
            }
          });

          // Escape key closes
          document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
              closeLightbox();
            }
          });
        })();
