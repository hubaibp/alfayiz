// Counter section
const countElements = document.querySelectorAll('.count');

const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const count = parseInt(element.innerText);
    const increment = target / 300;

    if (count < target) {
        element.innerText = Math.ceil(count + increment);
        setTimeout(() => countUp(element), 80);
    } else {
        element.innerText = target;
    }
};

const handleCounterIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countElements.forEach(countElement => {
                countUp(countElement);
            });
            observer.unobserve(entry.target);
        }
    });
};

const counterObserver = new IntersectionObserver(handleCounterIntersection, {
    threshold: 0.5
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    counterObserver.observe(statsSection);
}