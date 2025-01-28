const modal = () => { 
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth >= 768) {
                var opacity = 0;
                modal.style.display = 'block'
                modal.style.opacity = opacity
                var fadein = setInterval(() => {
                    if (opacity < 1) {
                        opacity += 0.03; 
                        modal.style.opacity = opacity;
                    } else {
                        clearInterval(fadein);
                    }
                }, 50);
            } else { 
                modal.style.display = 'block';
                modal.style.opacity = '1';
            }
        
        })
    })
    closeBtn.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
            var opacity = 1;
            modal.style.opacity = opacity;
            var fadeout = setInterval(() => {
                if (opacity > 0) {
                    opacity -= 0.03;
                    modal.style.opacity = opacity;
                } else {
                    clearInterval(fadeout);
                    modal.style.display = 'none';
                }
            }, 50);
        } else { 
            modal.style.display = 'none';
            modal.style.opacity = '0';
        }
      
    })
}
export default modal