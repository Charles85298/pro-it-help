(() => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category") || "arizona-landscapes";
  const galleries = window.PHOTOGRAPHY_GALLERIES || {};
  const data = galleries[category];
  const title = document.getElementById("gallery-title");
  const description = document.getElementById("gallery-description");
  const gallery = document.getElementById("photo-gallery");
  const empty = document.getElementById("gallery-empty");

  if (!data) {
    title.textContent = "Gallery Not Found";
    description.textContent = "Return to the photography page and choose a gallery.";
    empty.hidden = false;
    return;
  }

  document.title = `${data.title} | Charles Fleming Photography`;
  title.textContent = data.title;
  description.textContent = data.description;

  const photos = Array.isArray(data.photos) ? data.photos : [];
  if (!photos.length) {
    empty.hidden = false;
    return;
  }

  photos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = "gallery-photo-card";
    button.type = "button";
    button.dataset.index = String(index);
    const image = document.createElement("img");
    image.src = data.folder + photo.file;
    image.alt = photo.alt || photo.title || data.title;
    image.loading = "lazy";
    const caption = document.createElement("span");
    caption.textContent = photo.title || "Untitled photograph";
    button.append(image, caption);
    gallery.appendChild(button);
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  let currentIndex = 0;

  const show = (index) => {
    currentIndex = (index + photos.length) % photos.length;
    const photo = photos[currentIndex];
    lightboxImage.src = data.folder + photo.file;
    lightboxImage.alt = photo.alt || photo.title || data.title;
    lightboxCaption.textContent = photo.title || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  };

  gallery.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-photo-card");
    if (card) show(Number(card.dataset.index));
  });
  document.querySelector(".lightbox-close").addEventListener("click", close);
  document.querySelector(".lightbox-prev").addEventListener("click", () => show(currentIndex - 1));
  document.querySelector(".lightbox-next").addEventListener("click", () => show(currentIndex + 1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) close(); });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
  });
})();
