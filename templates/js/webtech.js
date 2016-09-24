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
		var switchB = document.querySelectorAll('.jsCategories');
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
		var self = this;
		this.title.onmouseenter = function() {
			vinJs.addClass(self.header, self.iden);
		}
		this.header.onmouseleave = function() {
			vinJs.removeClass(this, self.iden);
		}
	}

}

window.onload = function() {
	webtech.init();
}