// Click-to-Zoom Pop-up Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (lightbox) {
    document.querySelectorAll('.photo-item img').forEach(image => {
        image.onclick = () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
        };
    });

    // Close when clicking X or clicking outside the photo
    lightbox.onclick = (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    };
}

// Your Original Slideshow Script
let slideIndex = 1;
if (document.getElementsByClassName("mySlides").length > 0) {
    showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(slides[slideIndex-1]) {
    slides[slideIndex-1].style.display = "block";
  }
}
