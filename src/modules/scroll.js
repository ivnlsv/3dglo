const scroll = () => { 
    const menuItems = document.querySelectorAll('ul>li>a');
const imgBtn = document.querySelector('.scroll-to'); // Предполагая, что иконка является изображением
    
const scrollToSection = (target) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Длительность анимации в миллисекундах
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};



menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            scrollToSection(targetSection);
        }
    });
});

// Обработчик для иконки img, который прокручивает к #service-block
imgBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector('#service-block');
    if (targetSection) {
        scrollToSection(targetSection);
    }
});

}
export default scroll