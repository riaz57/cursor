
$(function(){

$('.categories').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  loop: true,
  swipe: 1500,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  autoplaySpeed: 1500,
  pauseOnHover: true,
  pauseOnFocus: true
});


$('#best_seller .product_slider').owlCarousel({
	// autoplay:true,
	loop:true,
	autoplaySpeed:800,
	autoplayHoverPause:true,
	autoplayTimeout: 4000,
	margin:20,
	dots:false,
	nav:true,
	responsiveClass:true,
	items:4,
	responsive:{
		0:{
		items:1,
		margin:10
		},
		500:{
		items:2,
		margin:10
		},
		700:{
		items:3
		},
		1000:{
		items:4
		}
	}
});

$('#new_arrival .product_slider').owlCarousel({
	// autoplay:true,
	loop:true,
	autoplaySpeed:800,
	autoplayHoverPause:true,
	autoplayTimeout: 4000,
	margin:20,
	dots:false,
	nav:true,
	responsiveClass:true,
	items:4,
	responsive:{
		0:{
		items:1,
		margin:10
		},
		500:{
		items:2,
		margin:10
		},
		700:{
		items:3
		},
		1000:{
		items:4
		}
	}
});





});
	