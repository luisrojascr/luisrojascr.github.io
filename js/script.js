/*!
 * Smooth Scroll - v1.5.0 - 2014-08-11
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(t){function e(t){return t.replace(/(:|\.)/g,"\\$1")}var l="1.5.0",o={},s={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},n=function(e){var l=[],o=!1,s=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[s]()>0?l.push(this):(e[s](1),o=e[s]()>0,o&&l.push(this),e[s](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=n.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=n.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var s=t.extend({},t.fn.smoothScroll.defaults,l),n=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},s,r.data("ssOpts")||{}),c=s.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||(t.smoothScroll.filterPath(o.pathname)||n)===n,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var s,n,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(s=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(s=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),s.scrollElement&&(f="position","static"===s.scrollElement.css("position")&&s.scrollElement.css("position","relative"))),h="left"===s.direction?"scrollLeft":h,s.scrollElement?(n=s.scrollElement,/^(?:HTML|BODY)$/.test(n[0].nodeName)||(a=n[h]())):n=t("html, body").firstScrollable(s.direction),s.beforeScroll.call(n,s),r="number"==typeof e?e:l||t(s.scrollTarget)[f]()&&t(s.scrollTarget)[f]()[s.direction]||0,u[h]=r+a+s.offset,i=s.speed,"auto"===i&&(c=u[h]-n.scrollTop(),0>c&&(c*=-1),i=c/s.autoCoefficient),d={duration:i,easing:s.easing,complete:function(){s.afterScroll.call(s.link,s)}},s.step&&(d.step=s.step),n.length?n.stop().animate(u,d):s.afterScroll.call(s.link,s)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=s})(jQuery);

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 */
!function(e){var t=e.scrollTo=function(t,o,n){e(window).scrollTo(t,o,n)};function o(e){return"object"==typeof e?e:{top:e,left:e}}t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1},t.window=function(t){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this;if(!(!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])))return t;var o=(t.contentWindow||t).document||t.ownerDocument||t;return e.browser.safari||"BackCompat"==o.compatMode?o.body:o.documentElement})},e.fn.scrollTo=function(n,r,a){return"object"==typeof r&&(a=r,r=0),"function"==typeof a&&(a={onAfter:a}),"max"==n&&(n=9e9),a=e.extend({},t.defaults,a),r=r||a.speed||a.duration,a.queue=a.queue&&a.axis.length>1,a.queue&&(r/=2),a.offset=o(a.offset),a.over=o(a.over),this._scrollable().each(function(){var i,s=this,c=e(s),f=n,u={},l=c.is("html,body");switch(typeof f){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=o(f);break}f=e(f,this);case"object":(f.is||f.style)&&(i=(f=e(f)).offset())}function d(e){c.animate(u,r,a.easing,e&&function(){e.call(this,n,a)})}e.each(a.axis.split(""),function(e,o){var n="x"==o?"Left":"Top",r=n.toLowerCase(),m="scroll"+n,h=s[m],p=t.max(s,o);if(i)u[m]=i[r]+(l?0:h-c.offset()[r]),a.margin&&(u[m]-=parseInt(f.css("margin"+n))||0,u[m]-=parseInt(f.css("border"+n+"Width"))||0),u[m]+=a.offset[r]||0,a.over[r]&&(u[m]+=f["x"==o?"width":"height"]()*a.over[r]);else{var w=f[r];u[m]=w.slice&&"%"==w.slice(-1)?parseFloat(w)/100*p:w}/^\d+$/.test(u[m])&&(u[m]=u[m]<=0?0:Math.min(u[m],p)),!e&&a.queue&&(h!=u[m]&&d(a.onAfterFirst),delete u[m])}),d(a.onAfter)}).end()},t.max=function(t,o){var n="x"==o?"Width":"Height",r="scroll"+n;if(!e(t).is("html,body"))return t[r]-e(t)[n.toLowerCase()]();var a="client"+n,i=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(i[r],s[r])-Math.min(i[a],s[a])}}(jQuery);



/**
 * 
 * Custom scripts
 * 
 */

$(document).ready(function() { 
	scrollToTop();
	resizeMenu();
	signUpForm();
	setDropdownToggle();
	setTabSlides();
});

/**
 * Scroll to top
 */
function scrollToTop() {
	$('#top-nav a').smoothScroll({
		easing : 'swing',
		speed : 800
	});
	
	$('.smooth').smoothScroll({
		easing : 'swing',
		speed : 800
	});

	$('[data-toggle="tooltip"]').tooltip();
}

/**
 * Resize Menu
 */
function resizeMenu() {
	var scroll_timer;
	var navBG = false;
	var $window = $(window);

	$window.scroll(function () {
		window.clearTimeout(scroll_timer);
		scroll_timer = window.setTimeout(function () { // use a timer for performance
			if($window.scrollTop() <= 10) // remove background
				{
					navBG = false;
					$("#ha-header").removeClass("ha-header-bg");
				}
			else if(navBG == false) // add background
				{
					navBG = true;
					$("#ha-header").addClass("ha-header-bg");
				}
		}, 1);
	});
}

/**
 * MAILING LIST SIGN UP
 */
function signUpForm() {
	$(".signUpForm").submit(function(e) {
		e.preventDefault();
		var x = $('#signUpEmail').val();
		window.location= '/company/newsletters/mailing-list-signup?email=' + x;
	});
}

/**
 * Dropdown toggle mobile
 */
function setDropdownToggle() {
	if ($(window).width() < 480) {
		$('.dropdown-toggle').click(function() {
			$('.mobile-list').hide();
		});
		
		$('.dropdown').click(function(e) { 
			e.preventDefault();
			e.stopPropagation();
			$(this).toggleClass('open'); 
		});
		
		$('.dropdown-menu h5').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).next("ul.mobile-list").toggle();
		});
	}
}

/**
 * Set tabs slides
 */
function setTabSlides() {
	$('#panel').width(parseInt($('#mask').width() * $('#panel > div').length));
	$('#panel > div').width($('#mask').width());
	
	$('a[rel=panel]').click(function (e) {
		e.preventDefault();
		var panelheight = $($(this).attr('href')).height();
		
		$('a[rel=panel]').removeClass('selected');
		$(this).addClass('selected');
		$('#mask').animate({'height':panelheight},{queue:false, duration:500});			
		$('#mask').scrollTo($(this).attr('href'), 800);		
	});
}