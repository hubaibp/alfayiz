function toggleNavbar() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Intersection Observer for fade-up animation
const images = document.querySelectorAll('.image-container img');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
});

images.forEach(image => {
    observer.observe(image);
});