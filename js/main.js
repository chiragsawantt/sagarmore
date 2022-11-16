(function($){
	'use strict';
	
	jQuery(document).ready(function(){
		
		/* START MENU-JS */	
			var $link = $(".smoothScroll");
			$link.on('click', function (event) {
				if (this.hash !== "") {
					var hash = this.hash;
					$('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 800, function () {
						window.location.hash = hash;
					});
				}
			});
	
			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('sticky_menu');
			  } else {
				$('.menu-top').removeClass('sticky_menu');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/* END MENU-JS */
		 
		/* START ISOTOP JS */
			var $grid = $('.work_content_area').isotope({
			  // options
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/* END ISOTOP JS */
		
		/* START LIGHTBOX */
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		/* END LIGHTBOX JS */
		
		/* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */
		
		/* START SERVICE JS */
			$(".service_slider").owlCarousel({
				loop:true,
				navText:false,
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				margin: 20,
				autoPlay:true,
				items:3,
				responsive:{
					320:{
						items:1
					},
					767:{
						items:2
					},
					991:{
						items:3
					},
					1200:{
						items:3
					}
				}
				
			});
		/* END SERVICE JS */
		
		/* START TESTIMONIAL JS */
			$(".testimonial_area").owlCarousel({
				loop:true,
				navText:false,
				autoplayHoverPause: false,
				autoplay: 6000,
				smartSpeed: 1000,
				margin: 30,
				autoPlay:true,
				items:1,
				responsive:{
					320:{
						items:1
					},
					767:{
						items:1
					},
					991:{
						items:1
					},
					1200:{
						items:1
					}
				}
				
			});
		/* END TESTIMONIAL JS */
		
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
			
		/*START WOW ANIMATION JS*/
		  new WOW().init();	
		/*END WOW ANIMATION JS*/			
})(jQuery);