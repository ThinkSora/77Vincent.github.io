var vinJs = {
	addClass: function(target, classname) {
		if (target.className.indexOf(classname) < 0) {
			target.className += ' ' + classname;
		}
	},

	removeClass: function(target, classname) {
		if (target.className.indexOf(classname) >= 0) {
			target.className = target.className.replace(' ' + classname, '');
		}
	},

	toggleClass: function(target, classname) {
		if (target.className.indexOf(classname) >= 0) {
			target.className = target.className.replace(' ' + classname, '');
		}	else {
			target.className += ' ' + classname;
		}
	}
}

var webtech = {
	init: function() {
		this.url = window.location.href;
		this.typeSwitch();
		this.themeColor();
		this.aboutDropdown();
	},

	typeSwitch: function() {
		/*	HOMEPAGE TYPE SWTICH
		*	
		*/
		var sel =  document.querySelectorAll('.js-type');
		var projects = document.querySelector('#projects');
		var blogs = document.querySelector('#blogs');
		var iden = 'toggle';
		var self = this;

		for (var i=0; i<sel.length; i++) {
			sel[i].onclick = function(event) {
				event.preventDefault();
				var condition = this.children[0].href;

				if (condition.indexOf('projects') > 0) {
					vinJs.addClass(blogs, iden);
					vinJs.removeClass(projects, iden);
				}	else {
					vinJs.addClass(projects, iden);
					vinJs.removeClass(blogs, iden);
				}
			}
		}
	},

	themeColor: function() {
		var jsColor = document.querySelectorAll('.jsColor');
		var back = document.querySelector('.master');

		for (var i=0; i<jsColor.length; i++) {
			jsColor[i].onmouseenter = function() {
				var r1 = Math.random();
				var r2 = Math.random();
				var r3 = Math.random();

				var r = parseInt(150 + 30 * r1);
				var g = parseInt(150 + 30 * r2);
				var b = parseInt(150 + 30 * r3);

				back.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
			}
		}
	},

	aboutDropdown: function() {
		var title = document.querySelector('a.title');
		var header = document.querySelector('header');
		var nav = document.querySelector('header ul li:last-child');
		var iden = 'toggle';

		title.onmouseenter = function() {
			vinJs.addClass(header, iden);
			vinJs.addClass(nav, iden);
		}
		header.onmouseleave = function() {
			vinJs.removeClass(header, iden);
			vinJs.removeClass(nav, iden)
		}
		nav.onclick = function(event) {
			event.preventDefault();
			if (this.className.indexOf(iden) < 0) {
				vinJs.addClass(header, iden);
			} else {
				vinJs.removeClass(header, iden);
			}
			vinJs.toggleClass(this, iden);
		}
	}

}

window.onload = function() {
	webtech.init();
}