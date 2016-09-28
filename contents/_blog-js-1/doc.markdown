# Properly manage event handler

<div class="meta">
<p>category: front-end / javascript</p>
<p>date: 2016-9-25</p>
</div>

I am not sure if you have met something like this before, but I am for sure that I had been troubled by it when I was dealing with my not well-organized custom Javascript.

Let's take a look at this as an example:

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.onclick = function() {
		console.log( 'bar' );
	};

	// result will only be 'bar'


Will there be two messages logged when we click?

In face, only the second one will work as assigning a function to a DOM event object in this way, what will happen is "takeover" but not "add", the new declaration will override the previous one. They won't share one event handler and happen all together when triggered.

As mentioned above, what I encountered when I was so immature with JS, is something similiar like the code above, I assigned one or more event handler with some functions to global objects like window or document, but somehow nothing happens, because the same event handler has already been assigned somewhere else and is more priorer in the code queue. 

For productivity, I found I need to organise those event handler in a better way. In fact, not only global objects but any object which is bound with event handler should be organised well otherwise it is likely to end up with a "why is it not working?" hell. The reason why global objects are given here as an example is because they are most likely to be bound with hanlders here or there.

But actually there is a way to really "add" but not "override" new functions to an already declared one, which is addEventListener();

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.addEventListener('click', function() {
		console.log( 'bar' );
	});

	// result will be 
	// 'foo'
	// 'bar'

The result here will be both 'foo' and 'bar', and actually we can keep adding.




