
$(function(){

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
	