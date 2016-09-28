var webtech = {

	init: function() {
		this.url = window.location.href;
		this.master = document.querySelector('.master');
		this.wrapper = document.querySelector('.wrapper');
		this.header = document.querySelector('header');
		this.iden = "toggle";

		this.indexController();
		this.postController();
		this.themeColor();
	},

	indexController: function() {
		var last = this.url.split('/');
		if (last[last.length-1] == "") {
			this.typeSwitch();
		}
	},

	postController: function() {
		var last = this.url.split('/');
		if (last[last.length-1] !== "") {
			this.stickyNav();
		}
		if (last[last.length-1] == "vinslider") {
			this.vinslider();
		}
	},

	stickyNav: function() {
		var nav = document.querySelector('nav');
		var self = this;
		window.addEventListener('scroll', function() {
			posi = window.pageYOffset;
			if (posi > self.header.clientHeight + 48) {
				vinJs.addClass(nav, self.iden);
			}	else {
				vinJs.removeClass(nav, self.iden);
			}
		});
	},

	typeSwitch: function() {
		/*	HOMEPAGE TYPE SWTICH
		*	
		*/
		var switchA =  document.querySelectorAll('.jsType');
		var switchB = document.querySelectorAll('.jsCategories');
		var projects = document.querySelector('#projects');
		var blogs = document.querySelector('#blogs');
		var self = this;

		for (var i=0; i<switchA.length; i++) {
			switchA[i].onclick = function(event) {
				event.preventDefault();
				var condition = this.children[0].dataset.type;

				if (condition.indexOf('projects') >= 0) {
					vinJs.addClass(blogs, self.iden);
					vinJs.removeClass(projects, self.iden);
				}	else {
					vinJs.addClass(projects, self.iden);
					vinJs.removeClass(blogs, self.iden);
				}
			}
		}

		this.master.onclick = function(event) {
			var t = event.target;
			var c = vinJs.closest(event.target, 'section');

			if (c == undefined || c.className.indexOf('toggle') >= 0) {
				vinJs.removeClass(projects, self.iden);
				vinJs.removeClass(blogs, self.iden);
			}
		}

		for (var f=0; f<switchB.length; f++) {
			switchB[f].onclick = function(event) {
				event.preventDefault();

				var scope = vinJs.closest(this, 'section');
				var children = scope.querySelectorAll('.preview');

				for (var r=0; r<children.length; r++) {
					vinJs.addClass(children[r], self.iden);
					if (children[r].className.indexOf(this.dataset.categories) >= 0) {
						vinJs.removeClass(children[r], self.iden);
					}
				}

				if (this.dataset.categories == 'all') {
					for (var t=0; t<children.length; t++) {
						vinJs.removeClass(children[t], self.iden);
					}
				}
			}
		}
	},

	themeColor: function() {
		/*	BACKGROUND COLOR
		*	
		*/
		var ob = document.querySelectorAll('.unit');
		var self = this;

		for (var i=0; i<ob.length; i++) {
			ob[i].onmouseenter = function() {
				var r1 = Math.random();
				var r2 = Math.random();
				var r3 = Math.random();

				var r = parseInt(150 + 30 * r1);
				var g = parseInt(150 + 30 * r2);
				var b = parseInt(150 + 30 * r3);

				self.master.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
			}
		}
	},

	vinslider: function() {
		var slider1 = document.querySelector('.slider1');
		new Vinslider(slider1, {
			duration: 3800,
			mode: 'fade'
		});

		var slider2 = document.querySelector('.slider2');
		new Vinslider(slider2, {
			duration: 3000,
			mode: 'slide',
		});

		var slider3 = document.querySelector('.slider3');
		new Vinslider(slider3, {
			duration: 1500,
			mode: 'carousel',
			amount: 4
		});

		var slider4 = document.querySelector('.slider4');
		new Vinslider(slider4, {
			duration: 4000,
			mode: 'slide',
			vertical: true
		});

		var slider5 = document.querySelector('.slider5');
		new Vinslider(slider5, {
			duration: 2500,
			mode: 'slide',
			direction: false
		});

		var slider6 = document.querySelector('.slider6');
		new Vinslider(slider6, {
			duration: 1500,
			mode: 'carousel',
			amount: 4,
			gutter: 10
		});
	}
}

window.onload = function() {
	webtech.init();
}



