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

const custom = {
	init: function() {
		this.url = window.location.href;
		this.lang = this.url.split('?')[1];

		// this.language();
		this.typeSwitch();
		this.colorTheme();
		this.about();
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
		var self = this;

		for (var i=0; i<sel.length; i++) {
			sel[i].onclick = function(event) {
				event.preventDefault();
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
	},

	colorTheme: function() {
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

	about: function() {
		var title = document.querySelector('a.title');
		var header = document.querySelector('header');
		var about = document.querySelector('.about');
		var nav = document.querySelector('header ul li:last-child');
		var iden = 'toggle';
		var hh = header.clientHeight;
		var ah;

		header.style.height = hh + 'px';

		function open() {
			addClass(iden, header);
			about.style.display = 'block';
			ah = about.clientHeight;
			header.style.height = hh + ah + 'px';
		}
		function close() {
			removeClass(iden, header);
			header.style.height = hh + 'px';
			setTimeout(function() {
				about.style.display = 'none';
			}, 300);
		}
		title.onmouseenter = function() {
			open();
			addClass(iden, nav);
		}
		header.onmouseleave = function() {
			close();
			removeClass(iden, nav)
		}
		nav.onclick = function(event) {
			event.preventDefault();
			if (this.className.indexOf(iden) < 0) {
				open();
			} else {
				close();
			}
			toggleClass(iden, this);
		}
	}

}

window.onload = function() {
	custom.init();
}