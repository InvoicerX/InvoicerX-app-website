// Language dropdown
const langBtn = document.getElementById("language-btn");
const langMenu = document.getElementById("language-menu");

if (langBtn && langMenu) {
  langBtn.addEventListener("click", () => {
    const isOpen = !langMenu.hasAttribute("hidden");
    if (isOpen) {
      langMenu.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", "false");
    } else {
      langMenu.removeAttribute("hidden");
      langBtn.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".language-dropdown")) {
      langMenu.setAttribute("hidden", "");
      langBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Video modal
const modal = document.getElementById("video-modal");
const openTrailerBtn = document.getElementById("watch-trailer-btn");
const closeModalBtn = document.getElementById("close-modal");
const iframe = document.getElementById("youtube-video");

const YT_URL = "https://www.youtube.com/embed/Vz3xEaUKc18?autoplay=1&rel=0";

function openModal() {
  if (!modal || !iframe) return;
  iframe.src = YT_URL;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal || !iframe) return;
  iframe.src = "";
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

if (openTrailerBtn) openTrailerBtn.addEventListener("click", openModal);
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// To top
const toTop = document.getElementById("toTopBtn");

window.addEventListener("scroll", () => {
  if (!toTop) return;
  toTop.style.display = window.scrollY > 450 ? "block" : "none";
});

if (toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Gallery / Lightbox
const galleryImages = Array.from(document.querySelectorAll(".screenshot-item img"));
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function openLightbox(index) {
  if (!lightboxModal || !lightboxImage || !galleryImages.length) return;
  currentIndex = index;
  lightboxImage.src = galleryImages[currentIndex].src;
  lightboxModal.classList.remove("hidden");
}

function closeGalleryLightbox() {
  if (!lightboxModal || !lightboxImage) return;
  lightboxModal.classList.add("hidden");
  lightboxImage.src = "";
}

function showNextImage() {
  if (!galleryImages.length || !lightboxImage) return;
  currentIndex = (currentIndex + 1) % galleryImages.length;
  lightboxImage.src = galleryImages[currentIndex].src;
}

function showPrevImage() {
  if (!galleryImages.length || !lightboxImage) return;
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  lightboxImage.src = galleryImages[currentIndex].src;
}

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

if (closeLightboxBtn) {
  closeLightboxBtn.addEventListener("click", closeGalleryLightbox);
}

if (nextBtn) {
  nextBtn.addEventListener("click", showNextImage);
}

if (prevBtn) {
  prevBtn.addEventListener("click", showPrevImage);
}

if (lightboxModal) {
  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) closeGalleryLightbox();
  });

  let startX = 0;

  lightboxModal.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );

  lightboxModal.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (Math.abs(diff) < 40) return;
    if (diff < 0) showNextImage();
    else showPrevImage();
  });
}

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeGalleryLightbox();
  }

  if (!lightboxModal || lightboxModal.classList.contains("hidden")) return;

  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});