function addClass(e,t){t.className.indexOf(e)<0&&(t.className+=" "+e)}function removeClass(e,t){t.className.indexOf(e)>=0&&(t.className=t.className.replace(" "+e,""))}function toggleClass(e,t){t.className.indexOf(e)>=0?t.className=t.className.replace(" "+e,""):t.className+=" "+e}const Vinrainbow=function(e){this.selector=e,this.factor=[],this.por=this.selector.clientHeight/this.selector.clientWidth,this.frame=this.selector.clientHeight+this.selector.clientWidth,this.init()};Vinrainbow.prototype={init:function(){this.mouseEvent()},mouseEvent:function(){function e(e,t){return Math.random()*(t-e)+e}for(var t=this,o=0;o<6;o++){var s=Math.floor(e(800,2e3));this.factor.push(s)}this.selector.onmousemove=function(){var e=event.clientY+10*(event.clientX-1700),o=parseInt((e+t.factor[0])/(t.frame+t.factor[1])*60),s=parseInt((e+t.factor[2])/(t.frame+t.factor[3])*60),n=parseInt((e+t.factor[4])/(t.frame+t.factor[5])*60);t.selector.style.backgroundColor="rgb("+o+","+s+","+n+")"}}};const custom={init:function(){this.url=window.location.href,this.lang=this.url.split("?")[1],this.typeSwitch(),this.shit()},language:function(){var e=document.querySelectorAll(".zh-cn"),t=document.querySelectorAll(".en-us");if("zh-cn"==this.lang)for(var o=0;o<e.length;o++)e[o].style.display="block",t[o].style.display="none";else for(var o=0;o<e.length;o++)e[o].style.display="none",t[o].style.display="block"},typeSwitch:function(){for(var e=document.querySelectorAll(".js-type"),t=document.querySelector("#projects"),o=document.querySelector("#blogs"),s=document.querySelectorAll("#sidebar .subnav"),n=0;n<e.length;n++)e[n].onclick=function(e){e.preventDefault();for(var n=0;n<s.length;n++)removeClass("toggle",s[n]);toggleClass("toggle",this.children[1]);var r=this.children[0].href;r.indexOf("projects")>0?(addClass("toggle",o),removeClass("toggle",t)):(addClass("toggle",t),removeClass("toggle",o))}},shit:function(){for(var e=document.querySelectorAll(".preview"),t=document.querySelector(".master"),o=0;o<e.length;o++)e[o].onmouseenter=function(){var e=Math.random(),o=Math.random(),s=Math.random(),n=parseInt(150+30*e),r=parseInt(150+30*o),l=parseInt(150+30*s);console.log(t.style.backgroundColor),t.style.backgroundColor="rgb("+n+","+r+","+l+")"}}};custom.init();var rainbow=document.querySelector("#sidebar");