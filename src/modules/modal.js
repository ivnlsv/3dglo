const modal = () => { 
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            var opacity = 0;
            modal.style.display = 'block'
            modal.style.opacity = opacity
            var fadein = setInterval(function() {
                if (opacity < 1) {
                    opacity += 0.03; // Увеличиваем прозрачность
                    modal.style.opacity = opacity;
                } else {
                    clearInterval(fadein);
                }
            }, 50);
        })
    })
    closeBtn.addEventListener('click', () => { 
        var opacity = 1; 
        modal.style.opacity = opacity;
    
        var fadeout = setInterval(function() {
            if (opacity > 0) {
                opacity -= 0.03; 
                modal.style.opacity = opacity;
            } else {
                clearInterval(fadeout);
                modal.style.display = 'none'; 
            }
        }, 50); 
    })
}
export default modal