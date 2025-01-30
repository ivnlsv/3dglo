const menu = () => {
	const main = document.querySelector('main');
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	//const menuItems = menu.querySelectorAll('ul>li>a')

    const toggleMenu = (target) => {
        // Проверяем, нужно ли открыть или закрыть меню
        if (target && target !== menuBtn && !menu.contains(target)) {
            menu.classList.remove('active-menu');
        } else {
            menu.classList.toggle('active-menu');
        }
    }

    main.addEventListener('click', () => {
        toggleMenu();
    });
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            toggleMenu(e.target);
        } else if (e.target.matches('ul>li>a')) {
            toggleMenu(e.target);
        }
    });

};
export default menu;
