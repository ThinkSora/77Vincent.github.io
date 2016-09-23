/*	A custom javascript library for basic helpper functions	
*/

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
	},

	closest: function (element, identifier) {
		var p = element;
		console.log(p.parentNode)
		var result = document.querySelector(identifier);
		while (p !== result) {
			p = p.parentNode;
		}
		console.log(p)
	}
}