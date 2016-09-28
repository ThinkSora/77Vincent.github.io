# Properly manage event handler

<div class="meta">
<p>category: front-end / javascript</p>
<p>date: 2016-9-25</p>
</div>

## Preface

I am not sure if you have met something like this before, but I am for sure that I had been troubled by it when I was dealing with my not well-organized custom Javascript.

Let's take a look at this as an example:

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.onclick = function() {
		console.log( 'bar' );
	};

Result will only be 

	bar


Will there be two messages logged when we click?

In face, only the second one will work as assigning a function to a DOM event object in this way, what will happen is "takeover" but not "add", the new declaration will override the previous one. They won't share one event handler and happen all together when triggered.

As mentioned above, what I encountered when I was so immature with JS, is something similiar like the code above, I assigned one or more event handler with some functions to global objects like window or document, but somehow nothing happens, because the same event handler has already been assigned somewhere else and is more priorer in the code queue. 

For productivity, I found I need to organise those event handler in a better way. In fact, not only global objects but any object which is bound with event handler should be organised well otherwise it is likely to end up with a "why is it not working?" hell. The reason why global objects are given here as an example is because they are most likely to be bound with hanlders here or there.

## addEventListener() vs element.eventhandler

But actually there is a way to really "add" but not "override" new functions to an already declared one, which is addEventListener();

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.addEventListener('click', function() {
		console.log( 'bar' );
	});

	window.addEventListener('click', function() {
		console.log( 'more stuff' );
	});

Result will be 

	foo
	bar
	more stuff

Then what about now we apply one more traditional onclick function again following all above:

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.addEventListener('click', function() {
		console.log( 'bar' );
	});

	window.addEventListener('click', function() {
		console.log( 'more stuff' );
	});

	window.onclick = function() {
		console.log( 'what will happen?' );
	};

This time the result will be:

	bar
	more stuff
	what will happen?

Again, the later assigned one still overrides the previous onclick one, but dosen't affect the other two which are assigned with the addEventListener(); The only drawback of addEventListener is broswer compatibility, which is not supported by or under IE9. For more information please check on: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. 

## Practice

Now here is the practice, when binding functions to event handlers, instead of placing those event handlers here and there from time to time, I place them all in one place:

	customJs = {
		init: function() {
			this.var1 = ...;
			this.var2 = ...;

			this.windowClick();
			this.windowScroll();
			this.windowResize();
		},

		windowClick: function() {
			window.onclick = function() {
				// stuff to do...
			}
		},

		windowScroll: function() {
			window.onscroll = function() {
				// stuff to do...
			}
		},

		windowResize: function() {
			window.onresize = function() {
				// stuff to do...
			}
		}
	}

So here will be the only place to manage these event handlers. But if using addEventListener, we can theoretically add them wherever we want.





