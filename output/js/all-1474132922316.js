function addClass(e,t){t.className.indexOf(e)<0&&(t.className+=" "+e)}function removeClass(e,t){t.className.indexOf(e)>=0&&(t.className=t.className.replace(" "+e,""))}function toggleClass(e,t){t.className.indexOf(e)>=0?t.className=t.className.replace(" "+e,""):t.className+=" "+e}const Vinrainbow=function(e){this.selector=e,this.factor=[],this.por=this.selector.clientHeight/this.selector.clientWidth,this.frame=this.selector.clientHeight+this.selector.clientWidth,this.init()};Vinrainbow.prototype={init:function(){this.mouseEvent()},mouseEvent:function(){function e(e,t){return Math.random()*(t-e)+e}for(var t=this,s=0;s<6;s++){var o=Math.floor(e(800,2e3));this.factor.push(o)}this.selector.onmousemove=function(){var e=event.clientY+10*event.clientX,s=parseInt((e+t.factor[0])/(t.frame+t.factor[1])*60),o=parseInt((e+t.factor[2])/(t.frame+t.factor[3])*60),n=parseInt((e+t.factor[4])/(t.frame+t.factor[5])*60);t.selector.style.backgroundColor="rgb("+s+","+o+","+n+")"}}};const custom={init:function(){this.url=window.location.href,this.lang=this.url.split("?")[1],this.language(),this.typeSwitch()},language:function(){var e=document.querySelectorAll(".zh-cn"),t=document.querySelectorAll(".en-us");if("zh-cn"==this.lang)for(var s=0;s<e.length;s++)e[s].style.display="block",t[s].style.display="none";else for(var s=0;s<e.length;s++)e[s].style.display="none",t[s].style.display="block"},typeSwitch:function(){for(var e=document.querySelectorAll(".js-type"),t=document.querySelector("#projects"),s=document.querySelector("#blogs"),o=0;o<e.length;o++)e[o].onclick=function(e){e.preventDefault(),console.log(this.children[1]);var o=this.children[0].href;o.indexOf("projects")>0?(addClass("toggle",s),removeClass("toggle",t)):(addClass("toggle",t),removeClass("toggle",s))}}};custom.init();var rainbow=document.querySelector("#sidebar");new Vinrainbow(rainbow);