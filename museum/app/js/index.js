!function(){"use strict";var e=[,function(e,t,n){n.r(t);var o=n(2),a=n(3),i=n(4),r=n(5),c=n(7);t.default=function(){(0,o.default)(),(0,a.default)(),(0,i.default)(),(0,r.default)(),(0,c.default)(),window.matchMedia("(max-width: ".concat(settings.mobBreakpoint-1,"px)")).matches,window.matchMedia("(min-width: ".concat(settings.mobBreakpoint,"px)")).matches}},function(e,t,n){n.r(t),t.default=function(){window.settings={mobBreakpoint:1230,globalResizer:function(e,t){var n=window.settings.mobBreakpoint,o=window.innerWidth,a=!1,i=!1,r=function(o){o<=n&&!a&&e&&(a=!0,i=!1,e()),o>=n&&!i&&t&&(i=!0,a=!1,t())};r(o),$(window).on("resize",(function(){var e=window.innerWidth;r(e)}))}}}},function(e,t,n){n.r(t),t.default=function(){svg4everybody()}},function(e,t,n){n.r(t),t.default=function(){var e=navigator.userAgent;e.indexOf("Firefox")>-1?document.querySelector("body").classList.add("browser-mozzila"):e.indexOf("Opera")>-1||e.indexOf("OPR")>-1?document.querySelector("body").classList.add("browser-opera"):e.indexOf("Trident")>-1?document.querySelector("body").classList.add("browser-ie"):e.indexOf("Edge")>-1?document.querySelector("body").classList.add("browser-edge"):e.indexOf("Chrome")>-1?document.querySelector("body").classList.add("browser-chrome"):e.indexOf("Safari")>-1&&document.querySelector("body").classList.add("browser-safari"),navigator.platform.toUpperCase().indexOf("MAC")>=0&&document.querySelector("body").classList.add("platform-mac")}},function(e,t,n){n.r(t),t.default=function(){$(".lazy-img").length>0&&new LazyLoad({elements_selector:".lazy-img",threshold:200})}},,function(e,t,n){n.r(t),t.default=function(){var e,t=[];function n(e,t){this.task=e,this.value=t}[{task:"Вёрстка соответствует макету. Ширина экрана 1024px",value:36},{task:"Вёрстка соответствует макету. Ширина экрана 768px",value:36},{task:"Вёрстка соответствует макету. Ширина экрана 420px",value:36},{task:"Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки",value:6},{task:"Совмещается адаптивная и респонсивная (резиновая) вёрстка",value:14},{task:"На ширине экрана 1024рх и меньше реализовано адаптивное меню",value:12},{task:"Оптимизация скорости загрузки страницы",value:4},{task:"Неточности px2px в секции с видео",value:0}].forEach((function(e){t.push(new n(e.task,e.value))})),console.table([].concat(t,[new n("Итого",(e=0,t.forEach((function(t){e+=t.value})),e))]))}},function(e,t,n){n.r(t),t.default=function(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}},function(e,t,n){n.r(t);var o={init:function(){this.sliderInit()},slider:function(){console.log("яя");var e=tns({container:".js_slider-welcome",items:1,slideBy:1,autoplay:!1,lazyload:!0,mouseDrag:!0,onInit:function(){},controlsContainer:".slider-welcome__nav-controls",navContainer:".slider-welcome__nav-dots",animateIn:!1,animateOut:!1,animateNormal:!1,responsive:{640:{items:1}}}),t=document.querySelector(".js_slide-index"),n=document.querySelector(".js_slide-all"),o=function(e){return e<10?"0".concat(e):e};n.innerHTML=o(e.getInfo().pages);var a=function(){t.innerHTML=o(e.getInfo().displayIndex)};a(),e.events.on("indexChanged",a)},sliderInit:function(){var e=this,t=!1,n=function(){t||(t=!0,e.slider())};document.addEventListener("mousemove",n),document.addEventListener("keypress",n),document.addEventListener("scroll",n),document.addEventListener("click",n)}};t.default=o},function(e,t,n){n.r(t),t.default=function(){var e=!1,t=document.querySelector(".gallery__inner"),n=["galery1","galery2","galery3","galery4","galery5","galery6","galery7","galery8","galery9","galery10","galery11","galery12","galery13","galery14","galery15"];new Waypoint({element:document.querySelector(".gallery"),handler:function(o){var a;e||((a=n,a.sort((function(){return Math.random()-.5}))).map((function(e){var n,o;o='\n\t\t\t<picture>\n\t\t\t\t<source srcset="images/'.concat(n=e,'.webp" type="image/webp">\n\t\t\t\t<source srcset="images/').concat(n,'.jpg" type="image/jpeg">\n\t\t\t\t<img class="gallery-img" src="images/').concat(n,'.jpg" alt="picture">\n\t\t\t</picture>\n\t\t'),t.insertAdjacentHTML("afterbegin",o)})),e=!0)},offset:"100%"})}},function(e,t,n){n.r(t),t.default=function(){tns({container:".js_slider-video-main",items:1,slideBy:1,autoplay:!1,lazyload:!0,controls:!1,nav:!1,mouseDrag:!1,animateIn:!1,animateOut:!1,animateNormal:!1}),tns({container:".js_slider-video-nav",items:3,slideBy:1,gutter:42,autoplay:!1,lazyload:!0,mouseDrag:!0,animateIn:!1,animateOut:!1,animateNormal:!1,prevButton:".slider-video-nav__btn--prev",nextButton:".slider-video-nav__btn--next",navContainer:".slider-video-nav__nav-dots"})}},function(e,t,n){n.r(t);var o={init:function(){this.rangeSlider(),this.toggleIcon()},rangeSlider:function(){document.querySelectorAll(".vp-progress").forEach((function(e){e.addEventListener("input",(function(){var e=this.value;this.style.background="linear-gradient(to right, #710707 0%, #710707 ".concat(e,"%, #fff ").concat(e,"%, white 100%)")}))}))},toggleIcon:function(){document.querySelectorAll(".vp-nav-btn").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("is-off")}))}))}};t.default=o},function(e,t,n){n.r(t);var o={init:function(){this.showHandler()},showHandler:function(){var e=document.querySelector(".booking"),t=document.querySelector(".js_open-booking"),n=document.querySelector(".b-close"),o=document.querySelector(".booking__overlay");t.addEventListener("click",(function(){e.classList.add("is-open")})),n.addEventListener("click",(function(){e.classList.remove("is-open")})),o.addEventListener("click",(function(){e.classList.remove("is-open")}))},btnClickEffect:function(){document.querySelector(".booking__action .btn-main").addEventListener("click",(function(e){var t=e.clientX,n=e.clientY,o=e.target.offsetTop,a=e.target.offsetLeft;console.log(e.target);var i=t-a,r=n-o,c=document.createElement("span");c.classList.add("circle-effect"),c.style.top=r+"px",c.style.left=i+"px",this.appendChild(c)}))}};t.default=o},function(e,t,n){n.r(t),t.default=function(){var e=document.querySelector(".js_main-menu-btn"),t=document.querySelector(".js_main-menu"),n=t.querySelectorAll(".main-menu__link"),o=document.querySelector("body"),a=function(){o.classList.remove("fixed"),t.classList.remove("is-open")};e.addEventListener("click",(function(){o.classList.toggle("fixed"),t.classList.toggle("is-open")})),n.forEach((function(e){e.addEventListener("click",a)}))}},function(e,t,n){n.r(t),t.default=function(){document.querySelectorAll(".pc-counter").forEach((function(e){var t=e.querySelector(".js_pc-counter-plus"),n=e.querySelector(".js_pc-counter-minus"),o=e.querySelector(".js_pc-counter-input");t.addEventListener("click",(function(){o.stepUp(1)})),n.addEventListener("click",(function(){o.stepDown(1)}))}))}}],t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o);var e=n(1),t=n(8),a=n(9),i=n(10),r=n(11),c=n(12),l=n(13),s=n(14),u=n(15);(0,t.default)((function(){(0,e.default)(),a.default.init(),(0,i.default)(),(0,r.default)(),c.default.init(),l.default.init(),(0,s.default)(),(0,u.default)()}))}()}();