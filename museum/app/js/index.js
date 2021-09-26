!function(){"use strict";var e=[,function(e,t,a){a.r(t);var n=a(2),o=a(3),i=a(4),r=a(5),l=a(6),s=a(7);t.default=function(){(0,n.default)(),(0,o.default)(),(0,i.default)(),(0,r.default)(),(0,l.default)(),(0,s.default)(),window.matchMedia("(max-width: ".concat(settings.mobBreakpoint-1,"px)")).matches,window.matchMedia("(min-width: ".concat(settings.mobBreakpoint,"px)")).matches}},function(e,t,a){a.r(t),t.default=function(){window.settings={mobBreakpoint:1230,globalResizer:function(e,t){var a=window.settings.mobBreakpoint,n=window.innerWidth,o=!1,i=!1,r=function(n){n<=a&&!o&&e&&(o=!0,i=!1,e()),n>=a&&!i&&t&&(i=!0,o=!1,t())};r(n),$(window).on("resize",(function(){var e=window.innerWidth;r(e)}))}}}},function(e,t,a){a.r(t),t.default=function(){svg4everybody()}},function(e,t,a){a.r(t),t.default=function(){var e=navigator.userAgent;e.indexOf("Firefox")>-1?document.querySelector("body").classList.add("browser-mozzila"):e.indexOf("Opera")>-1||e.indexOf("OPR")>-1?document.querySelector("body").classList.add("browser-opera"):e.indexOf("Trident")>-1?document.querySelector("body").classList.add("browser-ie"):e.indexOf("Edge")>-1?document.querySelector("body").classList.add("browser-edge"):e.indexOf("Chrome")>-1?document.querySelector("body").classList.add("browser-chrome"):e.indexOf("Safari")>-1&&document.querySelector("body").classList.add("browser-safari"),navigator.platform.toUpperCase().indexOf("MAC")>=0&&document.querySelector("body").classList.add("platform-mac")}},function(e,t,a){a.r(t),t.default=function(){$(".lazy-img").length>0&&new LazyLoad({elements_selector:".lazy-img",threshold:200})}},function(e,t,a){a.r(t),t.default=function(){var e={load:!0},t=function(){$(".bv-form:not(.bv-form-initialized)").bootstrapValidator({feedbackIcons:{valid:"bv-icon-ok",invalid:"bv-icon-not",validating:"bv-icon-refresh"}}).on("init.form.bv",(function(e){$(this).addClass("bv-form-initialized")})).on("success.form.bv",(function(e){var t=$(e.target),a=t.serialize();$.ajax({type:"POST",url:"./module/moduleForm.php",data:a,success:function(e){console.log("success",e),$("#modalRequest").modal("hide"),"success"==e?(t.find("input").val(""),$("#modalSuccess").modal("show")):$("#modalError").modal("show"),setTimeout((function(){$("#modalSuccess").modal("hide"),$("#modalError").modal("hide")}),3e3)},error:function(e,t){console.log("error",a),$("#modalRequest").modal("hide"),$("#modalError").modal("show"),setTimeout((function(){$("#modalError").modal("hide")}),3e3)}})}))},a=function(){$('input[type="tel"]').inputmask({showMaskOnHover:!1,oncomplete:function(){var e=$(this);e.closest(".bv-form").data("bootstrapValidator").updateStatus(e.attr("name"),"VALID",null)},onincomplete:function(){var e=$(this),t=e.closest(".bv-form");setTimeout((function(){t.data("bootstrapValidator").updateStatus(e.attr("name"),"INVALID",null)}),0)}}),$(".js_inputYNP").inputmask({showMaskOnHover:!1})},n=function(){$(".js_form-select").styler({selectPlaceholder:!1})};$(document).on("mouseover touchstart touchend",".bv-form",(function(){e.load&&(e.load?($.getScript("js/vendors/bootstrapValidator.min.js",t),$.getScript("js/vendors/jquery.inputmask.min.js",a),$.getScript("js/vendors/jquery.formstyler.min.js",n),e.load=!1):(t(),a(),n()))}))}},function(e,t,a){a.r(t),t.default=function(){var e,t=[];function a(e,t){this.task=e,this.value=t}[{task:"Вёрстка валидная",value:10},{task:"Вёрстка семантическая. В коде страницы присутствуют следующие элементы (указано минимальное количество, может быть больше)",value:null},{task:"<header>, <main>, <footer>",value:2},{task:"семь элементов <section> (по количеству секций)",value:2},{task:"только один заголовок <h1>",value:2},{task:"семь заголовков <h2> (по количеству секций) +2",value:2},{task:"шесть заголовков <h3> (по количеству карточек) +2",value:2},{task:"два элемента <nav> (основная и вспомогательная панель навигации)",value:2},{task:"три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети)",value:2},{task:"тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста)",value:2},{task:'три тега input type="radio" (в секции Tickets)',value:2},{task:'два тега input type="number"(в секции Tickets)',value:2},{task:'два тега input type="range" (громкось и прогрес-бар видео)',value:2},{task:"для всех элементов <img> указан обязательный атрибут alt",value:2},{task:"Вёрстка соответствует макету",value:null},{task:"блок <header>",value:5},{task:"секция Welcome",value:5},{task:"секция Visiting",value:5},{task:"секция Explore",value:5},{task:"секция Video",value:5},{task:"секция Gallery",value:5},{task:"секция Tickets",value:5},{task:"секция Contacts",value:5},{task:"блок <footer>",value:5},{task:"Форма покупки билетов",value:null},{task:"форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей",value:2},{task:"форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay",value:2},{task:'при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select',value:8},{task:"вёрстка формы соответствует макету",value:10},{task:"Требования к css",value:null},{task:"добавлен favicon",value:2},{task:"для построения сетки используются флексы или гриды",value:2},{task:"при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону",value:2},{task:"фоновый цвет каждого блока и секции тянется на всю ширину страницы",value:2},{task:"иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления",value:2},{task:"расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing",value:2},{task:"переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка",value:2},{task:"в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel",value:2},{task:"в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css",value:2},{task:"Интерактивность, реализуемая через css",value:null},{task:"плавная прокрутка по якорям",value:5},{task:"параллакс",value:5},{task:"при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe",value:5},{task:"изменение стиля интерактивных элементов при наведении и клике",value:10},{task:"Интерактивность, реализуемая через js",value:null},{task:"можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету",value:2},{task:"кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior",value:0},{task:'кнопке "Book" в форме покупки билетов добавлен ripple-эффект',value:0},{task:"при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке",value:10}].forEach((function(e){t.push(new a(e.task,e.value))})),console.table([].concat(t,[new a("Итого",(e=0,t.forEach((function(t){e+=t.value})),e))]))}},function(e,t,a){a.r(t),t.default=function(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}},function(e,t,a){a.r(t),t.default=function(){var e=tns({container:".js_slider-welcome",items:1,slideBy:1,autoplay:!1,lazyload:!0,mouseDrag:!0,onInit:function(){},controlsContainer:".slider-welcome__nav-controls",navContainer:".slider-welcome__nav-dots",animateIn:!1,animateOut:!1,animateNormal:!1,responsive:{640:{items:1}}}),t=document.querySelector(".js_slide-index"),a=document.querySelector(".js_slide-all"),n=function(e){return e<10?"0".concat(e):e};a.innerHTML=n(e.getInfo().pages);var o=function(){t.innerHTML=n(e.getInfo().displayIndex)};o(),e.events.on("indexChanged",o)}},function(e,t,a){a.r(t),t.default=function(){var e=!1,t=document.querySelector(".gallery__inner"),a=["galery1","galery2","galery3","galery4","galery5","galery6","galery7","galery8","galery9","galery10","galery11","galery12","galery13","galery14","galery15"];new Waypoint({element:document.querySelector(".gallery"),handler:function(n){var o;e||((o=a,o.sort((function(){return Math.random()-.5}))).map((function(e){var a,n;n='\n\t\t\t<picture>\n\t\t\t\t<source srcset="images/'.concat(a=e,'.webp" type="image/webp">\n\t\t\t\t<source srcset="images/').concat(a,'.jpg" type="image/jpeg">\n\t\t\t\t<img class="gallery-img" src="images/').concat(a,'.jpg" alt="picture">\n\t\t\t</picture>\n\t\t'),t.insertAdjacentHTML("afterbegin",n)})),e=!0)},offset:"100%"})}},function(e,t,a){a.r(t),t.default=function(){var e=tns({container:".js_slider-video-main",items:1,slideBy:1,autoplay:!1,lazyload:!0,controls:!1,nav:!1,mouseDrag:!1,animateIn:!1,animateOut:!1,animateNormal:!1}),t=tns({container:".js_slider-video-nav",items:3,slideBy:1,gutter:42,autoplay:!1,lazyload:!0,mouseDrag:!0,animateIn:!1,animateOut:!1,animateNormal:!1,prevButton:".slider-video-nav__btn--prev",nextButton:".slider-video-nav__btn--next",navContainer:".slider-video-nav__nav-dots"});t.events.on("indexChanged",(function(){var a=t.getInfo().displayIndex;e.goTo(a-1)}))}},function(e,t,a){a.r(t);var n={init:function(){this.rangeSlider(),this.toggleIcon()},rangeSlider:function(){document.querySelectorAll(".vp-progress").forEach((function(e){e.addEventListener("input",(function(){var e=this.value;this.style.background="linear-gradient(to right, #710707 0%, #710707 ".concat(e,"%, #fff ").concat(e,"%, white 100%)")}))}))},toggleIcon:function(){document.querySelectorAll(".vp-nav-btn").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("is-off")}))}))}};t.default=n},function(e,t,a){a.r(t);var n={init:function(){this.showHandler()},showHandler:function(){var e=document.querySelector(".booking"),t=document.querySelector(".js_open-booking"),a=document.querySelector(".b-close"),n=document.querySelector(".booking__layout");t.addEventListener("click",(function(){e.classList.add("is-open")})),a.addEventListener("click",(function(){e.classList.remove("is-open")})),n.addEventListener("click",(function(){e.classList.remove("is-open")}))},btnClickEffect:function(){document.querySelector(".booking__action .btn-main").addEventListener("click",(function(e){var t=e.clientX,a=e.clientY,n=e.target.offsetTop,o=e.target.offsetLeft;console.log(e.target);var i=t-o,r=a-n,l=document.createElement("span");l.classList.add("circle-effect"),l.style.top=r+"px",l.style.left=i+"px",this.appendChild(l)}))}};t.default=n}],t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){a.r(n);var e=a(1),t=a(8),o=a(9),i=a(10),r=a(11),l=a(12),s=a(13);(0,t.default)((function(){(0,e.default)(),(0,o.default)(),(0,i.default)(),(0,r.default)(),l.default.init(),s.default.init()}))}()}();