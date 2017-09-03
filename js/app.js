(function($, document, window){

	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});

		$(".testimonial-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide"
		});




	    if( $(".map").length ) {

				    $('.map')
				      .gmap3({
								key: 'AIzaSyCkAQFKkKu8nQBSmNOUwIcAxfUiaiNQEpg'
				        center:[-27.254870, -49.934012],
				        zoom:15,
				        mapTypeId: "estilo", // to select it directly
				        mapTypeControlOptions: {
				          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "estilo"]
				        }
				      })
				      .styledmaptype(
				        "estilo",
				        [{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#000000"},{"lightness": 40}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#000000"},{"lightness": 16}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"lightness": 17},{"weight": 1.2}]},{"featureType": "administrative.province","elementType": "labels.text.fill","stylers": [{"color": "#e3b141"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#e0a64b"}]},{"featureType": "administrative.locality","elementType": "labels.text.stroke","stylers": [{"color": "#0e0d0a"}]},{"featureType": "administrative.neighborhood","elementType": "labels.text.fill","stylers": [{"color": "#d1b995"}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 20}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 21}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#12120f"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"lightness": "-77"},{"gamma": "4.48"},{"saturation": "24"},{"weight": "0.65"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.highway.controlled_access","elementType": "geometry.fill","stylers": [{"color": "#f6b044"}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#4f4e49"},{"weight": "0.36"}]},{"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#c4ac87"}]},{"featureType": "road.arterial","elementType": "labels.text.stroke","stylers": [{"color": "#262307"}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#a4875a"},{"lightness": 16},{"weight": "0.16"}]},{"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#deb483"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#000000"},{"lightness": 19}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#0f252e"},{"lightness": 17}]},{"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#080808"},{"gamma": "3.14"},{"weight": "1.07"}]}],
				        {name: "Satélite"}
				      );



	    }
	});

	$(window).load(function(){
		var $container = $('.filterable-items');

	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });

	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});

})(jQuery, document, window);
