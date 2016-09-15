const Vinrainbow = function(selector) {
	this.selector = selector;
	this.factor = [];
	this.por = this.selector.clientHeight / this.selector.clientWidth;
	this.frame = this.selector.clientHeight + this.selector.clientWidth;
	this.init();
};

Vinrainbow.prototype = {
	init: function() {
		this.calculate();
	},

	calculate: function() {
		var self = this;

		function getRandomArbitrary(min, max) {
		   return Math.random() * (max - min) + min;
		}

		for (var i=0; i<6; i++) {
			var e = Math.floor(getRandomArbitrary(800,2000));
			this.factor.push(e);
		}

		this.selector.onmousemove = function() {
			var move = event.clientY + event.clientX * 10;
			/*	ALGORITHM
			*/
			var a = parseInt(((move + self.factor[0]) / (self.frame + self.factor[1])) * 60);
			var b = parseInt(((move + self.factor[2]) / (self.frame + self.factor[3])) * 60);
			var c = parseInt(((move + self.factor[4]) / (self.frame + self.factor[5])) * 60);

			self.selector.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
		}
	},
};

var rainbow = document.querySelector('#sidebar');
new Vinrainbow(rainbow);