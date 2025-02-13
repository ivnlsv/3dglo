const timer = (deadline) => {
	const timerDays = document.getElementById('timer-days');
	const timerDayName = document.getElementById('timer-dayName');
	const timerHours = document.getElementById('timer-hours');
	const timerMinutes = document.getElementById('timer-minutes');
	const timerSeconds = document.getElementById('timer-seconds');

	const formatTime = (time) => {
		return time < 10 ? '0' + time : time;
	};
	const formatDay = (day) => {
		if (day % 10 === 1 && day % 100 !== 11) {
			return 'день';
		} else if (
			day % 10 >= 2 &&
			day % 10 <= 4 &&
			(day % 100 < 10 || day % 100 >= 20)
		) {
			return 'дня';
		} else {
			return 'дней';
		}
	};

	const getTimeRemaining = () => {
		let dateStop = new Date(deadline).getTime();
		const dateNow = new Date().getTime();
		const timeRemaining = (dateStop - dateNow) / 1000;

		if (timeRemaining <= 0) {
			return {
				timeRemaining,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}

		const days = Math.floor(timeRemaining / 60 / 60 / 24);
		const hours = Math.floor((timeRemaining / 60 / 60) % 24);
		const minutes = Math.floor((timeRemaining / 60) % 60);
		const seconds = Math.floor(timeRemaining % 60);

		return {
			timeRemaining,
			days,
			hours,
			minutes,
			seconds,
		};
	};
	const updateClock = () => {
		const getTime = getTimeRemaining();
		timerDays.textContent = getTime.days;
		timerDayName.textContent = formatDay(getTime.days);
		timerHours.textContent = formatTime(getTime.hours);
		timerMinutes.textContent = formatTime(getTime.minutes);
		timerSeconds.textContent = formatTime(getTime.seconds);
		if (getTime.timeRemaining <= 0) {
			clearInterval(interval);
		}
	};
	const interval = setInterval(updateClock, 1000);
	updateClock();
};
export default timer;
