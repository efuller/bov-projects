import Messages from './messages';

class Timer {
	constructor(container, minutes) {
		this.seconds = parseInt(minutes * 60, 10);
		this.duration = parseInt(minutes * 60, 10);
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
			Messages.createMessage('Time Expired!!!');
			return {
				minutes: 0,
				seconds: 0
			};
		}

		return {
			minutes: Math.floor((time / 60) % 60),
			seconds: Math.floor((time) % 60)
		};
	}

	createTimer() {

		this.interval = setInterval(() => {
			const time = this.updateTimer(this.duration);
			const increment = 100 / this.seconds;

			this.updateClock(time.minutes, time.seconds);

			this.width = this.width + increment;
			this.timerBar.style.width = this.width + '%';
		}, 1000);
	}

	deleteTimer() {
		clearInterval(this.interval);
	}
}

export default Timer;
