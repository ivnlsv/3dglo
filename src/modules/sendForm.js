/* eslint-disable no-unused-vars */
import validation from './validation.js'; 

const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер свяжется с вами!';

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json());
    };

    const displayErrors = (errors) => {
        errors.forEach(({ field, message }) => {
            alert(message); 
            field.value = '';
        });
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};
    
        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                statusBlock.style.color = 'white';
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        const errors = validation(form); 
        if (errors.length === 0) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText;
                setTimeout(() => {
                    statusBlock.textContent = "";
                }, 5000);
                formElements.forEach(input => {
                    input.value = '';
                });
            }).catch(error => {
                statusBlock.textContent = errorText;
            });
        } else {
            form.removeChild(statusBlock);
            displayErrors(errors);
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
            
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default sendForm;
