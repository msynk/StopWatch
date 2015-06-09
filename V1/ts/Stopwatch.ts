/**
 * Stopwatch
 */
class Stopwatch {
	private _startDate: Date;
	private _stopDate: Date;
	private _elapsedMilliseconds: number;
	private _isRunning: boolean;

	public static startNew(): Stopwatch {
		var sw = new Stopwatch();
		sw.start();
		return sw;
	}

	constructor() {
		this.reset();
	}

	get startDate(): Date {
		return this._startDate;
	}

	//	set startDate(date: Date) {
	//		this._startDate = date;
	//	}
	
	get stopDate(): Date {
		return this._stopDate;
	}
	
	//	set stoDate(date: Date) {
	//		this._stopDate = date;
	//	}
	
	get elapsedMilliseconds(): number {
		return this._elapsedMilliseconds;
	}

	get isRunning(): boolean {
		return this._isRunning;
	}

	start() {
		this._startDate = new Date();
		this._stopDate = null;
		this._elapsedMilliseconds = null;
		this._isRunning = true;
	}

	stop() {
		if (!this._startDate) return;

		this._stopDate = new Date();
		this._elapsedMilliseconds = this._stopDate.getTime() - this._startDate.getTime();
		this._isRunning = false;
	}

	reset() {
		this._startDate = null;
		this._stopDate = null;
		this._elapsedMilliseconds = 0;
		this._isRunning = false;
	}

	restart() {
		this.reset();
		this.start();
	}
}