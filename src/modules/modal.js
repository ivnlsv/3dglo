import { animate } from './helpers';

const modal = () => {
	const modal = document.querySelector('.popup');
	const buttons = document.querySelectorAll('.popup-btn');
	const closeBtn = modal.querySelector('.popup-close');

	const showModal = () => {
		modal.style.display = 'block';
		animate({
			timing: (timeFraction) => timeFraction,
			draw: (progress) => {
				modal.style.opacity = progress;
			},
			duration: 500,
		});
	};

	const hideModal = () => {
		animate({
			timing: (timeFraction) => timeFraction,
			draw: (progress) => {
				modal.style.opacity = 1 - progress;
			},
			duration: 500,
		});

		setTimeout(() => {
			modal.style.display = 'none';
		}, 500); //
	};

	buttons.forEach((btn) => {
		btn.addEventListener('click', showModal);
	});

	closeBtn.addEventListener('click', hideModal);

	modal.addEventListener('click', (e) => {
		if (
			!e.target.closest('.popup-content') ||
			e.target.classList.contains('popup-close')
		) {
			hideModal();
		}
	});
};

export default modal;
