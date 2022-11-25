$(document).ready(function(){
	 $("#owl-demo").owlCarousel({
		 
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		 
	});
	
	 $("#slide-testimonial").owlCarousel({
		 
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		 
		singleItem:true,
		pagination: true,
		 
	});

	var num = 30; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('nav').addClass('sticky');
			$('.nav').addClass('sticky');
			$('#logo-img').attr("src", "img/logo.png");
		} else {
			$('nav').removeClass('sticky');
			$('.nav').removeClass('sticky');
			$('#logo-img').attr("src", "img/logo-white.png");
		}
	});

});