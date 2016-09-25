# Properly organize event handler

<div class="meta">
<p>category: front-end / javascript</p>
<p>date: 2016-9-25</p>
</div>

I am not sure if you have met issues like this before, but I am for sure that I had been troubled by this when I was dealing with my not well-organized custom js.

Let's take a look at this as an example:

	var foo = 1;
	var foo = 2;
	
	console.log(foo);

What will foo be, obviousli it will only be 2. It could never be [1,2] or something weirder.

Then how about this assignment:

	window.onscroll = function() {
		console.log( I'm scrolling );
	}

	window.onscroll = function() {
		console.log( I just want to say something else );
	}

Will the result be two log messages when we scroll?

Same as before, only the second one will work as the declaration in Javascript is just like that in CSS, which is "takeover" but not "accumulate" - in which case we will have both message logged in the console if that's how you wish.

Actually event handler 



