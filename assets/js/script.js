
// landing page
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'block';
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

showSlide(currentSlide);


// Ambil semua elemen produk
const produkItems = document.querySelectorAll('.card-page');

// Tambahkan event listener untuk setiap elemen produk
produkItems.forEach((item) => {
    item.addEventListener('click', () => {
        alert(`Anda memilih ${item.querySelector('h3').textContent}`);
    });
});

// Menambahkan animasi pada hover
const productCards = document.querySelectorAll('.card-page');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Menambahkan animasi pada hover
const productKategori = document.querySelectorAll('.card-kategori');

productKategori.forEach(kategori => {
    kategori.addEventListener('mouseenter', () => {
        kategori.style.transform = 'scale(1.1)';
    });

    kategori.addEventListener('mouseleave', () => {
        kategori.style.transform = 'scale(1)';
    });
});