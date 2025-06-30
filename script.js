// Za sad nema interaktivnosti, ali možeš dodati animacije ili funkcionalnosti ovdje

console.log('Invoicer X landing page loaded.');

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("video-modal");
  const btn = document.getElementById("watch-trailer-btn");
  const closeBtn = document.getElementById("close-modal");
  const iframe = document.getElementById("youtube-video");

  const videoId = "C78OFF5dWo8";  // Zamijeni sa svojim YouTube ID-em
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;


  btn.addEventListener("click", () => {
    iframe.src = videoUrl;
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    iframe.src = "";
    modal.style.display = "none";
  });

  // Klik izvan modala zatvara video
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      iframe.src = "";
      modal.style.display = "none";
    }

    // Dropdown language menu
const languageBtn = document.getElementById("language-btn");
  const languageMenu = document.getElementById("language-menu");

  languageBtn.addEventListener("click", (event) => {
    event.stopPropagation(); // spriječi da klik "curla" na dokument i odmah zatvori meni

    const isHidden = languageMenu.hasAttribute("hidden");
    if (isHidden) {
      languageMenu.removeAttribute("hidden");
      languageMenu.setAttribute("aria-hidden", "false");
      languageBtn.setAttribute("aria-expanded", "true");
    } else {
      languageMenu.setAttribute("hidden", "");
      languageMenu.setAttribute("aria-hidden", "true");
      languageBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Kad se klikne bilo gdje na dokument, osim na button i menu - zatvori meni
  document.addEventListener("click", (event) => {
    if (
      !languageBtn.contains(event.target) &&
      !languageMenu.contains(event.target)
    ) {
      languageMenu.setAttribute("hidden", "");
      languageMenu.setAttribute("aria-hidden", "true");
      languageBtn.setAttribute("aria-expanded", "false");
    }
  });


// Zatvori meni ako se klikne bilo gdje izvan dugmeta i menija
document.addEventListener("click", (event) => {
  if (!languageBtn.contains(event.target) && !languageMenu.contains(event.target)) {
    languageMenu.setAttribute("hidden", "");
    languageMenu.setAttribute("aria-hidden", "true");
    languageBtn.setAttribute("aria-expanded", "false");
  }
});

  });
});



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

  // Zatvori klikom izvan slike
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});


// Dohvati gumb
const toTopBtn = document.getElementById("toTopBtn");

// Kad korisnik skrola 100px od vrha, pokaži gumb
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// Kad se klikne, skrola glatko na vrh
toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});





