const validation = (form) => {
    const inputs = {
        calcItem: {
            elements: form.querySelectorAll('.calc-item:not(.calc-type)'),
            regex: /^[0-9]*$/,
            errorMsg: 'Введите только цифры'
        },
        textItem: {
            elements: form.querySelectorAll('input[type="text"][placeholder="Ваше имя"]'),
            regex: /^[а-яА-ЯёЁ\s]+$/,
            errorMsg: 'Недопустимый ввод в текстовое поле. Введите только буквы на кирилице и пробел'
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
        },
        msgItem: {
            elements: form.querySelectorAll('input[type=text][placeholder="Ваше сообщение"]'),
            regex: /^[а-яА-ЯёЁ\s0-9.,?!]+$/,
            errorMsg: 'Недопустимый ввод в текстовое поле. Введите только кириллицу, пробелы, цифры и знаки препинания'
        }
    };

    const errors = [];

    Object.values(inputs).forEach(({ elements, regex, errorMsg }) => {
        elements.forEach(input => {
            if (!input.value) {
                errors.push({ field: input, message: 'Поле не может быть пустым' });
            } else if (!regex.test(input.value)) {
                errors.push({ field: input, message: errorMsg });
            }
        });
    });

    return errors;
};

export default validation;
