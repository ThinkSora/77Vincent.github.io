<h1 id="title">Properly manage event handler</h1>

<div class="meta">
<p>category: front-end / javascript</p>
<p>date: 2016-9-25</p>
</div>

<h2 id="preface">preface</h2>

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


Why aren't there two messages logged at the same time?

In face, assigning a function to a DOM event object in this way, what will happen is "override" but not "add". They won't share one event handler and happen all together when triggered.

As mentioned above, what I encountered when I was so immature with JS, is something similiar like the code above, I assigned one or more event handler with some functions to global objects like window or document, but somehow nothing happens, because the same event handler has already been assigned somewhere else and is more priorer in the code queue. 

For productivity, I found I need to organise those event handler in a better way. In fact, not only global objects but any object which is bound with event handler should be organised well otherwise it is likely to end up with a "why is it not working?" hell. The reason why global objects are given here as an example is because they are most likely to be bound with hanlders here or there.

<h2 id="addEventListener">addEventListener() vs element.eventhandler</h2>

But actually there is a way to really "add" but not "override" new functions to an already declared one, which is addEventListener();

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.addEventListener('click', function() {
		console.log( 'bar' );
	});

Result will be 

	foo
	bar

Then what about we apply one more traditional onclick function again following all above:

	window.onclick = function() {
		console.log( 'foo' );
	};

	window.addEventListener('click', function() {
		console.log( 'bar' );
	});

	window.onclick = function() {
		console.log( 'more stuff?' );
	};

This time the result will be:

	bar
	more stuff

Again, the later assigned one still overrides the previous onclick one, but dosen't affect the other one which is assigned with the addEventListener. Look at the order of the result, even if the 'more stuff' one is overriding the first one, but still runs at last, everything just respect the normal order by runing one by one. Actually we can assign functions as many as we want to an objects by using addEventListener without worrying the overriding issue. 

The drawback of addEventListener is broswer compatibility, which is not supported under IE9 and not fully supported in some occasions. For more information please check on: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. 

<h2 id="practice">practice</h2>

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

So here will be the only place to manage these event handlers. If using addEventListener, we can basically add them wherever we want.





