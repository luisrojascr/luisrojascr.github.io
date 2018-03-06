$(function() {
	$('#top-nav a').smoothScroll({
		easing : 'swing',
		speed : 800
	});
	
	$('.smooth').smoothScroll({
		easing : 'swing',
		speed : 800
	});

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});

	$('[data-toggle="tooltip"]').tooltip();
});

function animateBanner() {
    $('#duotone').delay(1000).animate({'opacity' : "1.0"}, 1000, 'linear');
    $('#textbox1').delay(2000).animate({'marginTop' : "-=65px"}, 750, 'linear');
    $('#textbox2').delay(3000).animate({'marginTop' : "+=75px"}, 750, 'linear');
    $('#btn-fade').delay(4000).animate({'opacity' : "1.0"}, 1000);
}

// WEBINAR ALERT SIGNUP
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires + ";" + "path=/";
	$("#webinar-alert").fadeOut();
}

function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++){
  		var c = ca[i].trim();
  		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
	}
	return "";
}

$(function() {
	var user=getCookie("eventBox");
	if (user!=""){
		$("#webinar-alert").hide();
	}else{
		$("#webinar-alert").show();
	}
});

//Google Call Function
(function(a, e, c, f, g, b, d) {
	var h = {
		ak : "1036030784",
		cl : "GGwHCPvDh10QwKaC7gM"
	};
	a[c] = a[c] ||
	function() {
		(a[c].q = a[c].q || []).push(arguments)
	};
	a[f] || (a[f] = h.ak);
	b = e.createElement(g);
	b.async = 1;
	b.src = "//www.gstatic.com/wcm/loader.js";
	d = e.getElementsByTagName(g)[0];
	d.parentNode.insertBefore(b, d);
	a._googWcmGet = function(b, d, e) {
		a[c](2, b, h, d, null, new Date, e)
	}
})(window, document, "_googWcmImpl", "_googWcmAk", "script");

var callback = function(formatted_number, mobile_number) {
	var e = document.getElementById("number_link");
	e.href = "tel:" + mobile_number;
	e.innerHTML = ""
	e.appendChild(document.createTextNode(formatted_number));
};

$(function() {
	_googWcmGet('callback', '1-305-900-2001');
});


/* Resize Menu */
$(function () { 
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
});

//MAILING LIST SIGN UP
$(document).ready(function() {
	$(".signUpForm").submit(function(e) {
		e.preventDefault();
		var x = $('#signUpEmail').val();
		window.location= '/company/newsletters/mailing-list-signup?email=' + x;
	});
});

$(window).resize(function() {
	if ($(window).width() < 1200) {
		$('.mobile-slide-btn').click(function(e) {
			e.preventDefault();
			$('.slide-sub-dropdown-menu').addClass('is-second-menu-open');
		});
	}

	$('.dropdown-menu').click(function(e) {
		e.preventDefault();
		$('.dropdown').addClass('open');
		$('.mobile-list').show();
	});
});