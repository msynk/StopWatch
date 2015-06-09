/**
 * Stopwatch
 */
class Stopwatch2 {
	private _startDate: Date;
	private _stopDate: Date;
	private _startMilliseconds: number;
	private _stopMilliseconds: number;
	private _elapsedMilliseconds: number;
	private _isRunning: boolean;

	public static startNew(): Stopwatch2 {
		var sw = new Stopwatch2();
		sw.start();
		return sw;
	}

	private static now(): number {
		return (
			performance.now.bind(performance) ||
			performance.webkitNow.bind(performance) ||
			function() { return new Date().getTime(); }
			)();
	}

	constructor() {
		this.reset();
	}

	get startDate(): Date {
		return this._startDate;
	}

	get startMilliseconds(): number {
		return this._startMilliseconds;
	}

	get stopDate(): Date {
		return this._stopDate;
	}

	get stopMilliseconds(): number {
		return this._stopMilliseconds;
	}

	get elapsedMilliseconds(): number {
		return this._elapsedMilliseconds;
	}

	get isRunning(): boolean {
		return this._isRunning;
	}

	start() {
		this._startDate = new Date();
		this._startMilliseconds = Stopwatch2.now();
		this._stopDate = null;
		this._stopMilliseconds = 0;
		this._elapsedMilliseconds = 0;
		this._isRunning = true;

		return this._startMilliseconds;
	}

	stop() {
		if (!this._startDate) return;

		this._stopDate = new Date();
		this._stopMilliseconds = Stopwatch2.now();
		this._elapsedMilliseconds = this._stopMilliseconds - this._startMilliseconds;
		this._isRunning = false;

		return this._stopMilliseconds;
	}

	reset() {
		this._startDate = null;
		this._startMilliseconds = 0;
		this._stopDate = null;
		this._stopMilliseconds = 0;
		this._elapsedMilliseconds = 0;
		this._isRunning = false;
	}

	restart() {
		this.reset();
		return this.start();
	}
}