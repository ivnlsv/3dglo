const validation = () => {
    const calcInput = document.querySelectorAll('.calc-item');
    const textInput = document.querySelectorAll('input[type=text][placeholder="Ваше сообщение"], input[type="text"][placeholder="Ваше имя"]')
    const emailInput = document.querySelectorAll('input[type=email]') 
    const telInput = document.querySelectorAll('input[type=tel]') 

	calcInput.forEach((input) => {
		input.addEventListener('input', (e) => {
			const inputValue = e.target.value;
			const regex = /^[0-9]*$/;
			if (!regex.test(inputValue)) {
				alert('Введите только цифры');
				e.target.value = '';
			}
		});
    });
    
    textInput.forEach(input => { 
        input.addEventListener('input', (e) => { 
            const inputValue = e.target.value;
            const regex = /^[а-яА-ЯёЁ\s-]+$/;
            if (!regex.test(inputValue)) {
				alert('Недопустимый ввод. Введите только буквы на кирилице, пробел или дефис');
				e.target.value = '';
			}
        })
    })
    emailInput.forEach(input => { 
        input.addEventListener('input', (e) => { 
            const inputValue = e.target.value;
            const regex = /^[a-zA-Z0-9@._!~*'-]+$/;
            if (!regex.test(inputValue)) {
				alert('Недопустимый ввод. Введите только буквы на латинице, @ - _ . ! ~ *');
				e.target.value = '';
			}
        })
    })
    telInput.forEach(input => { 
        input.addEventListener('input', (e) => { 
            const inputValue = e.target.value;
            const regex = /^[0-9()\-]+$/;
            if (!regex.test(inputValue)) {
				alert('Недопустимый ввод. Введите только цифры 0-9, () - ');
				e.target.value = '';
			}
        })
    })
};

export default validation;
