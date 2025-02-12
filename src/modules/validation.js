const validation = (form) => {
    const inputs = {
        calcItem: {
            elements: form.querySelectorAll('.calc-item:not(.calc-type)'),
            regex: /^[0-9]*$/,
            errorMsg: 'Введите только цифры'
        },
        textItem: {
            elements: form.querySelectorAll('input[type=text][placeholder="Ваше сообщение"], input[type="text"][placeholder="Ваше имя"]'),
            regex: /^[а-яА-ЯёЁ\s-]+$/,
            errorMsg: 'Недопустимый ввод в текстовое поле. Введите только буквы на кирилице, пробел или дефис'
        },
        emailItem: {
            elements: form.querySelectorAll('input[type=email]'),
            regex: /^[a-zA-Z0-9@._!~*'-]+$/,
            errorMsg: 'Недопустимый ввод e-mail. Введите только буквы на латинице, @ - _ . ! ~ *'
        },
        telItem: {
            elements: form.querySelectorAll('input[type=tel]'),
            regex: /^[0-9()\-+]+$/,
            errorMsg: 'Недопустимый ввод номера телефона. Введите только цифры 0-9, () - +'
        }
    };

    const errors = [];

    Object.values(inputs).forEach(({ elements, regex, errorMsg }) => {
        elements.forEach(input => {
            if (!regex.test(input.value)) {
                errors.push({ field: input, message: errorMsg });
            }
        });
    });

    return errors;
};

export default validation;
