
$(document).ready(function() {

    /* Responsive Menu */
    $('#dl-menu').dlmenu({
          animationClasses: {
              classin: 'dl-animate-in-5',
              classout: 'dl-animate-out-5'
           }
    });

/*----------------------------------------------------*/
/*	Carousel
/*----------------------------------------------------*/
    $("#recent-works").flexisel({
        visibleItems: 4,
        animationSpeed: 500,
        autoPlay: true,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });

    $("#clients").flexisel({
        visibleItems: 5,
        animationSpeed: 500,
        autoPlay: false,
        autoPlaySpeed: 3000,
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: {
            portrait: {
                changePoint:480,
                visibleItems: 1
            },
            landscape: {
                changePoint:640,
                visibleItems: 2
            },
            tablet: {
                changePoint:768,
                visibleItems: 3
            }
        }
    });


	$("a[data-gal^='prettyPhoto']").prettyPhoto();


	// Google map
    if($('#map_canvas').length > 0){
        $('#map_canvas').gMap({
			                maptype: 'ROADMAP',
						    scrollwheel: false,
						    zoom: 18,
						    markers: [
							    {
								    address: 'Lahore', // Your Adress Here
								    html: '',
								    popup: false,
							    }
						    ],
		    });
	}

	// Button Up
	var btnUp = $('<div/>', {'class':'btntoTop'});
	btnUp.appendTo('body');
	$(document)
			.on('click', '.btntoTop', function() {
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});

	$(window)
			.on('scroll', function() {
				if ($(this).scrollTop() > 200)
					$('.btntoTop').addClass('active');
				else
					$('.btntoTop').removeClass('active');
			});

     $('.bxslider').bxSlider();
});

/*----------------------------------------------------*/
/*	Yoink!
/*----------------------------------------------------*/
window.onload = function(){

var mkIndex = new Swiper('.swiper-container', {
			 loop: false,
			 autoplay:8000,
	 	 	 onlyExternal : true,
	 });

 //icon点击切换
 $('#icon li').hover(function(){
		if(!$(this).hasClass('active')){
			 $('#icon li').removeClass('active');
			 $(this).addClass('active');
			 mkIndex.slideTo($(this).index(), 300, false);//切换到第一个slide
		}
	 },function(){
		 });
}
