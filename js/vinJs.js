/*	A custom javascript library for basic helpper functions	
*/

var vinJs = {

	addClass: function(object, classname) {
		if (object.className.indexOf(classname) < 0) {
			object.className += ' ' + classname;
		}
	},

	removeClass: function(object, classname) {
		if (object.className.indexOf(classname) >= 0) {
			object.className = object.className.replace(' ' + classname, '');
		}
	},

	toggleClass: function(object, classname) {
		if (object.className.indexOf(classname) >= 0) {
			object.className = object.className.replace(' ' + classname, '');
		}	else {
			object.className += ' ' + classname;
		}
	},

	closest: function (element, identifier) {
		var result = document.querySelectorAll(identifier);

		for (var i=0; i<result.length; i++) {
			var object = element;
			while (object !== result[i] && object.parentNode !== null) {
				object = object.parentNode;
			}
			if (object !== document) {
				return object;
			}
		}
	}
}