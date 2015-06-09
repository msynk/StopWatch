var Stopwatch2 = function () {
	this.startMilliseconds = null;
	this.stopMilliseconds = null;
	this.elapsedMilliseconds = null;
};

function now(){
	return (
			performance.now.bind(performance) ||
			performance.webkitNow.bind(performance) ||
			function() { return new Date().getTime(); }
			)();
}

Stopwatch2.prototype = {
	start: function () {
		this.startMilliseconds = now();
		this.stopMilliseconds = null;
		this.elapsedMilliseconds = null;

		return this.startMilliseconds;
	},
	stop: function () {
		if (!this.startMilliseconds) return;

		this.stopMilliseconds = now();
		this.elapsedMilliseconds = this.stopMilliseconds - this.startMilliseconds;

		return this.stopMilliseconds;
	}
};