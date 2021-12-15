export class IntervalTimer {
	private callbackStartTime;
	private remaining = 0;
	private paused = false;
	private interval?: NodeJS.Timer;
	private intervalCallback;
	private timeDelay;

	constructor(callback, delay) {
		this.intervalCallback = callback;
		this.timeDelay = delay;
	}
	private run(): void {
		this.callbackStartTime = new Date().getTime();
		this.intervalCallback();
	}
	public start(): void {
		this.clear();
		this.interval = setInterval(() => {
			this.run();
		}, this.timeDelay);
	}
	public pause(): void {
		if (!this.paused) {
			this.clear();
			this.remaining = new Date().getTime() - this.callbackStartTime;
			this.paused = true;
		}
	}
	public resume(): void {
		if (this.paused) {
			if (this.remaining) {
				setTimeout(() => {
					this.run();
					this.paused = false;
					this.start();
				}, this.remaining);
			} else {
				this.paused = false;
				this.start();
			}
		}
	}
	public clear(): void {
		clearInterval(this.interval);
	}
}
