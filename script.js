// Get DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when scrolling
window.addEventListener('scroll', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Video slider

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
let currentSlide = 0;
let autoSlideInterval;

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");

    // reset slide
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000); 
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    sliderNav(currentSlide);
}

// inisiasi auto slide
autoSlideInterval = setInterval(nextSlide, 2000);

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


slides.forEach((slide) => {
    slide.addEventListener('transitionend', () => {
        if (slide.classList.contains('active')) {
            slide.currentTime = 0; // Reset video ke awal
            slide.play(); // Mulai video
        }
    });
});