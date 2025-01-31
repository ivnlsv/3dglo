const slider = (
	sliderClass = '.portfolio-content',
	slideClass = '.portfolio-item',
	dotClassDefault = 'dot',
	activeClassSlide = 'portfolio-item-active',
	activeClassDot = 'dot-active'
) => {
	const sliderBlock = document.querySelector(sliderClass);
	if (!sliderBlock) {
		console.error(
			`Элемент слайдера с классом "${sliderClass}" не найден. Выход.`
		);
		return;
	}

	const slides = document.querySelectorAll(slideClass);
	if (slides.length === 0) {
		console.error(`Слайды с классом "${slideClass}" не найдены. Выход.`);
		return;
	}

	const dotsBlock = document.querySelector('.portfolio-dots');
	if (!dotsBlock) {
		console.error('Блок с точками не найден. Выход.');
		return;
	}

	const timeInterval = 2000;
	let currentSlide = 0;
	let interval = 0;

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass);
	};

	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass);
	};

	const autoSlide = () => {
		addDots();
		prevSlide(slides, currentSlide, activeClassSlide);
		prevSlide(dotsBlock.children, currentSlide, activeClassDot);

		currentSlide++;
		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		nextSlide(slides, currentSlide, activeClassSlide);
		nextSlide(dotsBlock.children, currentSlide, activeClassDot);
	};

	const startSlide = (timer = 1500) => {
		interval = setInterval(autoSlide, timer);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	const addDots = () => {
		dotsBlock.innerHTML = '';
		for (let i = 0; i < slides.length; i++) {
			const dot = document.createElement('li');
			dot.classList.add(dotClassDefault);
			dotsBlock.appendChild(dot);
		}
	};

	sliderBlock.addEventListener('click', (e) => {
		e.preventDefault();

		if (!e.target.matches(`.${dotClassDefault}, .portfolio-btn`)) {
			return;
		}

		prevSlide(slides, currentSlide, activeClassSlide);
		prevSlide(dotsBlock.children, currentSlide, activeClassDot);

		if (e.target.matches('#arrow-right')) {
			currentSlide++;
		} else if (e.target.matches('#arrow-left')) {
			currentSlide--;
		} else if (e.target.classList.contains(dotClassDefault)) {
			[...dotsBlock.children].forEach((dot, index) => {
				if (e.target === dot) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}
		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}

		nextSlide(slides, currentSlide, activeClassSlide);
		nextSlide(dotsBlock.children, currentSlide, activeClassDot);
	});

	sliderBlock.addEventListener(
		'mouseenter',
		(e) => {
			addDots();
			if (e.target.matches(`.${dotClassDefault}, .portfolio-btn`)) {
				stopSlide();
			}
		},
		true
	);

	sliderBlock.addEventListener(
		'mouseleave',
		(e) => {
			if (e.target.matches(`.${dotClassDefault}, .portfolio-btn`)) {
				startSlide(timeInterval);
			}
		},
		true
	);

	startSlide(timeInterval);
};

export default slider;
