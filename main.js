AOS.init({
    duration: 1000,
    once: true,
    offset: 200,
});

function toggleNavbar() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
document.getElementById("navLinks").classList.remove("active");
});
});

document.addEventListener('DOMContentLoaded', function() {
const services = document.querySelectorAll('.service');

services.forEach(service => {
service.addEventListener('touchstart', function() {
    this.querySelector('.service-inner').style.transform = 'rotateY(180deg)';
});

service.addEventListener('touchend', function() {
    this.querySelector('.service-inner').style.transform = '';
});
});
});


// Scroll to top button
const scrollTopButton = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});








var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});




window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});


