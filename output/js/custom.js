(function() {
	var selector = document.querySelector('#sidebar');
	var i = Math.random();

	selector.onmousemove = function() {
		var a = parseInt(((event.clientY + event.clientX * 10 + 2000) / (selector.clientHeight + selector.clientWidth * 10 + 2000)) * 230);
		var b = parseInt(((event.clientY + event.clientX * 5 + 5500) / (selector.clientHeight + selector.clientWidth * 5 + 4500)) * 220);
		var c = parseInt(((event.clientY + event.clientX * 5 + 8000) / (selector.clientHeight + selector.clientWidth * 5 + 8000)) * 240);

		selector.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
	}
})();