console.log('Invoicer X landing page loaded.');

document.addEventListener("DOMContentLoaded", function() {
  // --- Video modal ---
  const modal = document.getElementById("video-modal");
  const btn = document.getElementById("watch-trailer-btn");
  const closeBtn = document.getElementById("close-modal");
  const iframe = document.getElementById("youtube-video");

  const videoId = "C78OFF5dWo8";
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  btn.addEventListener("click", () => {
    iframe.src = videoUrl;
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    iframe.src = "";
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      iframe.src = "";
      modal.style.display = "none";
    }
  });
});

// --- Lightbox gallery ---
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".screenshots img");
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-image");
  const closeBtn = document.querySelector(".close-lightbox");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function showImage(index) {
    const img = images[index];
    if (img) {
      modalImg.src = img.src;
      currentIndex = index;
    }
  }

  images.forEach(img => {
    img.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index, 10);
      showImage(index);
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  prevBtn.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % images.length;
    showImage(newIndex);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

// --- To top button ---
const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
