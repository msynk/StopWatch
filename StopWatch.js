var StopWatch = function(){
	this.startDate = null;
	this.stopDate = null;
	this.elapsedMilliseconds = null;
}

StopWatch.prototype = {
	start: function(){
		this.startDate = new Date();
		this.stopDate = null;
		this.elapsedMilliseconds = null;
		
		return this.startDate.getTime();
	},
	stop: function(){
		if (!this.startDate) return;
		
		this.stopDate = new Date();		
		this.elapsedMilliseconds = this.stopDate.getTime() - this.startDate.getTime();
		
		return this.stopDate.getTime();
	}
};