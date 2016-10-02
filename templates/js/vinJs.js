/**
*
*	@Title: 	vinJs
*	@Descr: 	A javascript library for native DOM manipulation
*	@Package: 	Javascript
*	@Copyright: Released under the MIT license: http://opensource.org/licenses/MIT
*	@Author: 	Vincent Wen <www.77webtech.com/about> <wentianqi77@outlook.com>
*
**/

var vjs = {

	cl: function(object) {
		console.log(object);
	},

	addClass: function(object, classname) {
		if (object !== undefined && object.className.indexOf(classname) < 0) {
			object.className += ' ' + classname;
		}
	},

	removeClass: function(object, classname) {
		if (object !== undefined && object.className.indexOf(classname) >= 0) {
			object.className = object.className.replace(' ' + classname, '');
		}
	},

	toggleClass: function(object, classname) {
		if (object !== undefined && object.className.indexOf(classname) >= 0) {
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