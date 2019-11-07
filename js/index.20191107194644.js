(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', (dpi>1) ? 'images/3-324.png' : 'images/3-162.png');
$('.js-2').attr('src', (dpi>1) ? 'images/3721672-instagram_108066-164.png' : 'images/3721672-instagram_108066-82.png');
$('.js-3').attr('src', (dpi>1) ? 'images/9eb384eb1d9d09e82bcef6852d38085c-186.png' : 'images/9eb384eb1d9d09e82bcef6852d38085c-93.png');
$('.js-4').attr('src', (dpi>1) ? 'images/telegram-158.png' : 'images/telegram-79.png');
$('.js-5').attr('src', (dpi>1) ? 'images/w513h5131371296393twitter-182.png' : 'images/w513h5131371296393twitter-91.png');
$('.js-6').attr('src', (dpi>1) ? 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-1046.png' : 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-523.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fcpx_new_timeline-1170.jpg' : 'images/fcpx_new_timeline-585.jpg');
$('.js-8').attr('src', 'images/1547294299_4-548.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/best-new-logic-pro-x-features-2019-10.4.5-1200.jpg' : 'images/best-new-logic-pro-x-features-2019-10.4.5-600.jpg');}else if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/3-258.png' : 'images/3-129.png');
$('.js-2').attr('src', (dpi>1) ? 'images/3721672-instagram_108066-130.png' : 'images/3721672-instagram_108066-65.png');
$('.js-3').attr('src', (dpi>1) ? 'images/9eb384eb1d9d09e82bcef6852d38085c-150.png' : 'images/9eb384eb1d9d09e82bcef6852d38085c-75.png');
$('.js-4').attr('src', (dpi>1) ? 'images/telegram-126.png' : 'images/telegram-63.png');
$('.js-5').attr('src', (dpi>1) ? 'images/w513h5131371296393twitter-146.png' : 'images/w513h5131371296393twitter-73.png');
$('.js-6').attr('src', (dpi>1) ? 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-836.png' : 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-418-2.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fcpx_new_timeline-936.jpg' : 'images/fcpx_new_timeline-468-2.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/1547294299_4-876.jpg' : 'images/1547294299_4-438-2.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/best-new-logic-pro-x-features-2019-10.4.5-960.jpg' : 'images/best-new-logic-pro-x-features-2019-10.4.5-480-2.jpg');}else if($(window).width()>=768){$('.js').attr('src', (dpi>1) ? 'images/3-208.png' : 'images/3-104.png');
$('.js-2').attr('src', (dpi>1) ? 'images/3721672-instagram_108066-104.png' : 'images/3721672-instagram_108066-52.png');
$('.js-3').attr('src', (dpi>1) ? 'images/9eb384eb1d9d09e82bcef6852d38085c-120.png' : 'images/9eb384eb1d9d09e82bcef6852d38085c-60.png');
$('.js-4').attr('src', (dpi>1) ? 'images/telegram-100.png' : 'images/telegram-50.png');
$('.js-5').attr('src', (dpi>1) ? 'images/w513h5131371296393twitter-116.png' : 'images/w513h5131371296393twitter-58.png');
$('.js-6').attr('src', (dpi>1) ? 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-668.png' : 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-334.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fcpx_new_timeline-748.jpg' : 'images/fcpx_new_timeline-374.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/1547294299_4-700.jpg' : 'images/1547294299_4-350.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/best-new-logic-pro-x-features-2019-10.4.5-768.jpg' : 'images/best-new-logic-pro-x-features-2019-10.4.5-384.jpg');}else if($(window).width()>=480){$('.js').attr('src', (dpi>1) ? 'images/3-132.png' : 'images/3-66.png');
$('.js-2').attr('src', (dpi>1) ? 'images/3721672-instagram_108066-64.png' : 'images/3721672-instagram_108066-32.png');
$('.js-3').attr('src', (dpi>1) ? 'images/9eb384eb1d9d09e82bcef6852d38085c-74.png' : 'images/9eb384eb1d9d09e82bcef6852d38085c-37.png');
$('.js-4').attr('src', (dpi>1) ? 'images/telegram-62.png' : 'images/telegram-31.png');
$('.js-5').attr('src', (dpi>1) ? 'images/w513h5131371296393twitter-72.png' : 'images/w513h5131371296393twitter-36.png');
$('.js-6').attr('src', (dpi>1) ? 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-418.png' : 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-209.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fcpx_new_timeline-468.jpg' : 'images/fcpx_new_timeline-234.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/1547294299_4-438.jpg' : 'images/1547294299_4-219.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/best-new-logic-pro-x-features-2019-10.4.5-480.jpg' : 'images/best-new-logic-pro-x-features-2019-10.4.5-240.jpg');}else{$('.js').attr('src', (dpi>1) ? 'images/3-90.png' : 'images/3-45.png');
$('.js-2').attr('src', (dpi>1) ? 'images/3721672-instagram_108066-42.png' : 'images/3721672-instagram_108066-21.png');
$('.js-3').attr('src', (dpi>1) ? 'images/9eb384eb1d9d09e82bcef6852d38085c-50.png' : 'images/9eb384eb1d9d09e82bcef6852d38085c-25.png');
$('.js-4').attr('src', (dpi>1) ? 'images/telegram-42.png' : 'images/telegram-21.png');
$('.js-5').attr('src', (dpi>1) ? 'images/w513h5131371296393twitter-48.png' : 'images/w513h5131371296393twitter-24.png');
$('.js-6').attr('src', (dpi>1) ? 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-278.png' : 'images/obzor-12-dyuymovogo-macbook-2016-operatsionnaya-sistema-3-139.png');
$('.js-7').attr('src', (dpi>1) ? 'images/fcpx_new_timeline-312.jpg' : 'images/fcpx_new_timeline-156.jpg');
$('.js-8').attr('src', (dpi>1) ? 'images/1547294299_4-292.jpg' : 'images/1547294299_4-146.jpg');
$('.js-9').attr('src', (dpi>1) ? 'images/best-new-logic-pro-x-features-2019-10.4.5-320.jpg' : 'images/best-new-logic-pro-x-features-2019-10.4.5-160.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});