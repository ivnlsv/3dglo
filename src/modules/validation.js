/* eslint-disable no-useless-escape */
const validation = () => {
    const inputs = {
        calcItem: {
            elements: document.querySelectorAll('.calc-item'),
            regex: /^[0-9]*$/,
            errorMsg: 'Введите только цифры'
        },
        textItem: {
            elements: document.querySelectorAll('input[type=text][placeholder="Ваше сообщение"], input[type="text"][placeholder="Ваше имя"]'),
            regex: /^[а-яА-ЯёЁ\s-]+$/,
            errorMsg: 'Недопустимый ввод. Введите только буквы на кирилице, пробел или дефис'
        },
        emailItem: {
            elements: document.querySelectorAll('input[type=email]'),
            regex: /^[a-zA-Z0-9@._!~*'-]+$/,
            errorMsg: 'Недопустимый ввод. Введите только буквы на латинице, @ - _ . ! ~ *'
        },
        telItem: {
            elements: document.querySelectorAll('input[type=tel]'),
            regex: /^[0-9()\-]+$/,
            errorMsg: 'Недопустимый ввод. Введите только цифры 0-9, () - '
        }
    };

    const handleInput = ({ target }, regex, errorMsg) => {
        if (!regex.test(target.value)) {
            alert(errorMsg);
            target.value = '';
        }
    };

    Object.values(inputs).forEach(({ elements, regex, errorMsg }) => {
        elements.forEach(input => {
            input.addEventListener('input', (e) => handleInput(e, regex, errorMsg));
        });
    });
};

export default validation;
