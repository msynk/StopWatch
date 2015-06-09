var Stopwatch = function(){
	this.startDate = null;
	this.stopDate = null;
	this.elapsedMilliseconds = null;
};

Stopwatch.prototype = {
	start: function(){
		this.startDate = new Date();
		//this.startDate = performance.now();
		this.stopDate = null;
		this.elapsedMilliseconds = null;
		
		return this.startDate.getTime();
		//return this.startDate;
	},
	stop: function(){
		if (!this.startDate) return;
		
		this.stopDate = new Date();
		//this.stopDate = performance.now(); 		
		this.elapsedMilliseconds = this.stopDate.getTime() - this.startDate.getTime();
		//this.elapsedMilliseconds = this.stopDate - this.startDate;
		
		return this.stopDate.getTime();
		//return this.stopDate;
	}
};