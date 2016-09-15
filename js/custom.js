(function() {
	var selector = document.querySelector('#sidebar');
	var i = Math.random();

	selector.onmousemove = function() {
		var a = parseInt(((event.clientY + event.clientX * 10 + 2000) / (selector.clientHeight + selector.clientWidth * 10 + 1000)) * 230);
		var b = parseInt(((event.clientY + event.clientX * 5 + 5000) / (selector.clientHeight + selector.clientWidth * 5 + 4000)) * 230);
		var c = parseInt(((event.clientY + event.clientX * 5 + 7000) / (selector.clientHeight + selector.clientWidth * 5 + 7000)) * 240);

		selector.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
	}
})();