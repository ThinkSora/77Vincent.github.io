function addClass(target, selector) {
	if (selector.className.indexOf(target) < 0) {
		selector.className += ' ' + target;
	}
}

function removeClass(target, selector) {
	if (selector.className.indexOf(target) >= 0) {
		selector.className = selector.className.replace(' '+ target, '');
	}
}

function toggleClass(target, selector) {
	if (selector.className.indexOf(target) >= 0) {
		selector.className = selector.className.replace(' ' + target, '');
	}	else {
		selector.className += ' ' + target;
	}
}

const Vinrainbow = function(selector) {
	this.selector = selector;
	this.factor = [];
	this.por = this.selector.clientHeight / this.selector.clientWidth;
	this.frame = this.selector.clientHeight + this.selector.clientWidth;
	this.init();
};

Vinrainbow.prototype = {
	init: function() {
		this.mouseEvent();
	},

	mouseEvent: function() {
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

const custom = {
	init: function() {
		this.url = window.location.href;
		this.lang = this.url.split('?')[1];

		this.language();
		this.typeSwitch();
	},

	language: function() {
		/*	LANGUAGE SWITCH
		*
		*/
		var zh = document.querySelectorAll('.zh-cn');
		var en = document.querySelectorAll('.en-us');
		if (this.lang == 'zh-cn') {
			for (var i=0; i<zh.length; i++) {
				zh[i].style.display = 'block';
				en[i].style.display = 'none';
			}
		}	else {
			for (var i=0; i<zh.length; i++) {
				zh[i].style.display = 'none';
				en[i].style.display = 'block';
			}
		}
	},

	typeSwitch: function() {
		/*	HOMEPAGE TYPE SWTICH
		*	
		*/
		var sel =  document.querySelectorAll('.js-type');
		var projects = document.querySelector('#projects');
		var blogs = document.querySelector('#blogs');
		var nav = document.querySelectorAll('#sidebar .subnav');
		var self = this;
		for (var i=0; i<sel.length; i++) {
			sel[i].onclick = function(event) {
				event.preventDefault();
				for (var f=0; f<nav.length; f++) {
					removeClass('toggle', nav[f]);
				}
				addClass('toggle', this.children[1]);
				var iden = this.children[0].href;

				if (iden.indexOf('projects') > 0) {
					addClass('toggle', blogs);
					removeClass('toggle', projects);
				}	else {
					addClass('toggle', projects);
					removeClass('toggle', blogs);
				}
			}
		}
	}
}

// (function() {
// 	var sel =  document.querySelector('.page-title');
// 	window.onscroll = function() {
// 		var posi = this.pageYOffset;
// 		if (posi > 50) {
// 			sel.className = 'page-title toggle';
// 		}	else {
// 			sel.className = 'page-title';
// 		}
// 	}

// })();

custom.init();

var rainbow = document.querySelector('#sidebar');
new Vinrainbow(rainbow);