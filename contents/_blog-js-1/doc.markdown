# Properly manage event handler

<div class="meta">
<p>category: front-end / javascript</p>
<p>date: 2016-9-25</p>
</div>

I am not sure if you have met something like this before, but I am for sure that I had been troubled by it when I was dealing with my not well-organized custom Javascript.

Let's take a look at this as an example:

	window.onclick = function() {
		console.log( I'm scrolling );
	}

	window.onclick = function() {
		console.log( I just want to say something else );
	}

Will there be two messages logged when we click?

In face, only the second one will work as assigning a function to a DOM event object in this way, what will happen is "takeover" but not "accumulate", the new declaration will override the previous one. They won't share one event handler and happen altogether when it's triggered.

As mentioned above, what I encountered when I was so immature with JS, is something similiar like the code above, I assigned one or more event handler with some functions to global objects like window or document, but somehow nothing happens, because the same event handler has already been assigned somewhere else and is more priorer in the code queue. 

For productivity, we need to organise those event handler in a better way. In fact, not only global objects but any object which is bound with event handler should be organised well otherwise it is likely to end up with a "why is it not working?" hell. The reason why global objects are given here as an example is because they are most easy to be bound with some hanlders here or there.

The way could be, place of all these event at a place, 

	var customJs = {

		`

		window.onscroll = function() {
			// what to do...
		}

		window.onresize = function() {
			// what to do...
		}

		window.onclick = function() {
			// what to do...
		}
	}




