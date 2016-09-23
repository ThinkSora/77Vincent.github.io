var webtech = {

	init: function() {
		this.master = document.querySelector('.master');
		this.wrapper = document.querySelector('.wrapper');
		this.header = document.querySelector('header');
		this.title = document.querySelector('header a.title');
		this.iden = "toggle";
		this.typeSwitch();
		this.themeColor();
		this.aboutDropdown();
	},

	typeSwitch: function() {
		/*	HOMEPAGE TYPE SWTICH
		*	
		*/
		var switchA =  document.querySelectorAll('.jsType');
		var switchB = document.querySelectorAll('.jsCategory');
		var projects = document.querySelector('#projects');
		var blogs = document.querySelector('#blogs');
		var self = this;

		for (var i=0; i<switchA.length; i++) {
			switchA[i].onclick = function(event) {
				event.preventDefault();
				var condition = this.children[0].href;

				if (condition.indexOf('projects') > 0) {
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
			vinJs.closest(event.target, 'section');
			// if (t == self.master || t == self.wrapper) {
			// 	vinJs.removeClass(projects, self.iden);
			// 	vinJs.removeClass(blogs, self.iden);
			// }
		}

		// for (var f=0; f<switchB.length; f++) {
		// 	switchB[f].onclick = function() {
		// 		var iden = this.id;
		// 		for ()
		// 	}
		// }
	},

	themeColor: function() {
		/*	BACKGROUND COLOR
		*	
		*/
		var jsColor = document.querySelectorAll('.jsColor');
		var self = this;

		for (var i=0; i<jsColor.length; i++) {
			jsColor[i].onmouseenter = function() {
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

	aboutDropdown: function() {
		/*	ABOUT DROPDOWN SECTION
		*	
		*/
		var nav = document.querySelector('header ul li:last-child');
		var self = this;

		this.title.onmouseenter = function() {
			vinJs.addClass(self.header, self.iden);
			vinJs.addClass(nav, self.iden);
		}
		this.header.onmouseleave = function() {
			vinJs.removeClass(this, self.iden);
			vinJs.removeClass(nav, self.iden)
		}
		nav.onclick = function(event) {
			event.preventDefault();
			if (this.className.indexOf(self.iden) < 0) {
				vinJs.addClass(self.header, self.iden);
			} else {
				vinJs.removeClass(self.header, self.iden);
			}
			vinJs.toggleClass(this, self.iden);
		}
	}

}

window.onload = function() {
	webtech.init();
}