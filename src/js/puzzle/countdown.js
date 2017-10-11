class Timer {
	constructor(container, minutes) {
		this.seconds = parseInt(minutes * 60);
		this.duration = parseInt(minutes * 60);
		this.container = document.querySelector(container);
		this.timerBar = document.querySelector('.puzzle-info__timer-bar');
		this.width = 0;

		this.updateClock(minutes, 0);
	}

	updateClock(minutes, seconds) {
		const updatedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const updatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		const clock = `<span>${updatedMinutes}</span>:<span>${updatedSeconds}</span>`;
		this.container.innerHTML = clock;
	}

	startTimer() {
		this.createTimer(this.duration);
	}

	updateTimer(futureTime) {
		const time = futureTime - 1;
		this.duration = time;

		if (this.duration <= 0) {
			clearInterval(this.interval);
			return {};
		}

		return {
			minutes: Math.floor((time / 60) % 60),
			seconds: Math.floor((time) % 60)
		};
	}

	createTimer() {
		// const interval = setInterval(() => {
		// 	const timer = this.updateTimer(futureTime);
		// }, 1000);

		this.interval = setInterval(() => {
			const time = this.updateTimer(this.duration);
			const increment = 100 / this.seconds;

			this.updateClock(time.minutes, time.seconds);

			this.width = this.width + increment;
			this.timerBar.style.width = this.width + '%';
		}, 1000);
	}
}

export default Timer;
