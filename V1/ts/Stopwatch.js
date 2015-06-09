/**
 * Stopwatch
 */
var Stopwatch = (function () {
    function Stopwatch() {
        this.reset();
    }
    Stopwatch.startNew = function () {
        var sw = new Stopwatch();
        sw.start();
        return sw;
    };
    Object.defineProperty(Stopwatch.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "stopDate", {
        //	set startDate(date: Date) {
        //		this._startDate = date;
        //	}
        get: function () {
            return this._stopDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMilliseconds", {
        //	set stoDate(date: Date) {
        //		this._stopDate = date;
        //	}
        get: function () {
            return this._elapsedMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Stopwatch.prototype.start = function () {
        this._startDate = new Date();
        this._stopDate = null;
        this._elapsedMilliseconds = null;
        this._isRunning = true;
    };
    Stopwatch.prototype.stop = function () {
        if (!this._startDate)
            return;
        this._stopDate = new Date();
        this._elapsedMilliseconds = this._stopDate.getTime() - this._startDate.getTime();
        this._isRunning = false;
    };
    Stopwatch.prototype.reset = function () {
        this._startDate = null;
        this._stopDate = null;
        this._elapsedMilliseconds = 0;
        this._isRunning = false;
    };
    Stopwatch.prototype.restart = function () {
        this.reset();
        this.start();
    };
    return Stopwatch;
})();
