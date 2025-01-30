const menu = () => { 
    const main = document.querySelector('main')
    const menuBtn = document.querySelector('.menu') 
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')
    
    const handleMenu = () => { 
         menu.classList.toggle('active-menu')
    }
    
    main.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            handleMenu()
        } else { 
            handleMenu(menuBtn)
        }
    }); 
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-btn')) {
            handleMenu()
            
        } else if (e.target.matches('ul>li>a')) {
            menuItems.forEach(menuItem => handleMenu(menuItem))
        }
    })
    
    
}
export default menu