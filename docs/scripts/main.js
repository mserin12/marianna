"use strict";function scrollIt(e){function t(){var e="now"in window.performance?performance.now():(new Date).getTime(),a=Math.min(1,(e-i)/n),l=r[o](a);if(window.scroll(0,Math.ceil(l*(s-c)+c)),window.pageYOffset===s)return void(u&&u());requestAnimationFrame(t)}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",u=arguments[3],r={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},c=window.pageYOffset,i="now"in window.performance?performance.now():(new Date).getTime(),a=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),l=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,d="number"==typeof e?e:e.offsetTop,s=Math.round(a-d<l?a-l:d);if("requestAnimationFrame"in window==!1)return window.scroll(0,s),void(u&&u());t()}var swiper=new Swiper(".swiper-container",{pagination:{el:".swiper-pagination"}});document.querySelector(".arrow-down").addEventListener("click",function(){scrollIt(document.querySelector(".nav"),800,"easeOutQuad")}),document.querySelector(".arrow-up").addEventListener("click",function(){scrollIt(document.querySelector(".header"),800,"easeOutQuad")}),document.querySelector(".about-scroll").addEventListener("click",function(){scrollIt(document.querySelector(".about"),800,"easeOutQuad")}),document.querySelector(".works-scroll").addEventListener("click",function(){scrollIt(document.querySelector(".info"),800,"easeOutQuad")}),document.querySelector(".contact-sctoll").addEventListener("click",function(){scrollIt(document.querySelector(".contact"),800,"easeOutQuad")}),document.querySelector(".follow-scroll").addEventListener("click",function(){scrollIt(document.querySelector(".social"),800,"easeOutQuad")});