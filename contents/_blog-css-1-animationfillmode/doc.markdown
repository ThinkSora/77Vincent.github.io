<h1 id="issue">CSS animation-fill-mode: 'forwards' issue</h1>

<div class="meta">
<p>category: front-end / css</p>
<p>date: 2016-9-25</p>
</div>

As the example shows above, a hover effect is applied to the lightblue block, making the background color to a rose pink when hovering. Also, an animation is applied to the block, which will start in a couple of seconds, turning the background color from the origin lightblue to gray. The animation-fill-mode is set to 'forwards' (more information about <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode">animation-fill-mode</a>), which makes the element keep having the ending status of the animation, and after that, however, you will no longer be able to have the hover effect back again, even if with the important declaration, here is the code of the demo above, irrelevant parts have been removed:

		@keyframes forwardsDemo {
			from {background-color: #62acff;}
			to {background-color: gray;}
		}

		.blog-css-1 {
			background-color: #62acff;
			-webkit-animation: forwardsDemo 2s 7s forwards;
			-moz-animation: forwardsDemo 2s 7s forwards;
			-o-animation: forwardsDemo 2s 7s forwards;
			animation: forwardsDemo 2s 7s forwards;
		}

		.blog-css-1:hover {
			background-color: #c0495a !important;
		}

Maybe you also have noticed this, the hover effect loses its effect immediately after the animation begins, when the effect of animation overrides the effect of hovering if they are dealing with the same CSS property. Actually I think at this moment the animation ending status will take over any effect that has been set under other conditions whatever it is a hover, active or focus. And this only happens when the animation-fill-mode is set to forwards.

**Conclusion: Be careful with using the animation-fill-mode: forwards. As it will somehow assign the top level of priority to the certain CSS property which is dealing with, even more prior than the ! important declartion.**

