<h1 id="documentation">documentation</h1>

#### Light weight, easy-to-ues Javascript library for native DOM manipulation, to reduce repeated labors and make code life easy. Used throught out this website.

<h2 id="example">Code Example</h2>

### Javascript:

    var selector = document.querySelector('DOM element');
    
    var options = {
      mode: slide,
      duration: 3500,
      ......
    };
    
    var vinslider = new Vinslider(selector, options);

<h2 id="installation">Installation</h2>

What you need is:

* vinJs.js

Embed it into your project.

Download here: https://github.com/77Vincent/vinJs
    
<h2 id="api">API</h2>

<h2 id="dependency">Dependency</h2>

None

<h2 id="features">Features</h2>

* Vinslider will be immediately stopped if the DOM element is not found or improper and throw an error.
* Currently touch event on mobile devices is not supported yet.
* Pager(or bullet) are able to control the slider or carousel.
* Controller will be hidden in carousel mode if the actual amount of items is less than the amount of items to be displayed at a time.

<h2 id="demo">Demo</h2>

Go to http://www.77webtech.com/project-vinjs to see the demo.

<h2 id="contributor">Contributor</h2>

Vincent Wen

<h2 id="license">License</h2>

Released under the MIT license: http://opensource.org/licenses/MIT

