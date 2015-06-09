/**
 * Stopwatch
 */
var Stopwatch2 = (function () {
    function Stopwatch2() {
        this.reset();
    }
    Stopwatch2.startNew = function () {
        var sw = new Stopwatch2();
        sw.start();
        return sw;
    };
    Stopwatch2.now = function () {
        return (performance.now.bind(performance) ||
            performance.webkitNow.bind(performance) ||
            function () { return new Date().getTime(); })();
    };
    Object.defineProperty(Stopwatch2.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch2.prototype, "startMilliseconds", {
        get: function () {
            return this._startMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch2.prototype, "stopDate", {
        get: function () {
            return this._stopDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch2.prototype, "stopMilliseconds", {
        get: function () {
            return this._stopMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch2.prototype, "elapsedMilliseconds", {
        get: function () {
            return this._elapsedMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch2.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Stopwatch2.prototype.start = function () {
        this._startDate = new Date();
        this._startMilliseconds = Stopwatch2.now();
        this._stopDate = null;
        this._stopMilliseconds = 0;
        this._elapsedMilliseconds = 0;
        this._isRunning = true;
        return this._startMilliseconds;
    };
    Stopwatch2.prototype.stop = function () {
        if (!this._startDate)
            return;
        this._stopDate = new Date();
        this._stopMilliseconds = Stopwatch2.now();
        this._elapsedMilliseconds = this._stopMilliseconds - this._startMilliseconds;
        this._isRunning = false;
        return this._stopMilliseconds;
    };
    Stopwatch2.prototype.reset = function () {
        this._startDate = null;
        this._startMilliseconds = 0;
        this._stopDate = null;
        this._stopMilliseconds = 0;
        this._elapsedMilliseconds = 0;
        this._isRunning = false;
    };
    Stopwatch2.prototype.restart = function () {
        this.reset();
        return this.start();
    };
    return Stopwatch2;
})();
