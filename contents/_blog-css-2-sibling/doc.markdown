<h1 id="issue">The general sibling selector tip</h1>

<div class="meta">
<p>category: front-end / css</p>
<p>date: 2016-9-30</p>
</div>

    <p>the line above is not selected</p>
    <p>the line above is not selected</p>
    <p class="target">I'm the one</p>
    <p>only the line underneath is affected</p>
    <p>only the line underneath is affected</p>
    

	.target {
		color: red;
	}

	.target ~ p {
		color: #62acff;
	}

