const scroll = () => { 
    const menuItems = document.querySelectorAll('ul>li>a')
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Duration in ms
                let startTime = null;
                
                const animation = currentTime => {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutQuad(progress);
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                requestAnimationFrame(animation);
            }
        });
    });

    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
}
export default scroll