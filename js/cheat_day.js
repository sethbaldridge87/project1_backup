$(document).ready(function(){
	// Index
	$("#greeter_slide span").animate({opacity:'1',left:'-100px'}, 1000);
	$("#greeter_slide img").animate({opacity:'1',left:'420px'}, 1000);
	$("#greeter_slide p").animate({opacity:'1', top: '200px'}, 2000);
	// Image Gallery
	$("#image_gallery img").attr('data-toggle','modal');
	$("#image_gallery img").attr('data-target','#gallery_modal');
	$("#image_gallery img").click(function(){
		var source = $(this).attr('src');
		$('#gallery_modal img').attr('src',source);
	});
	// Slick Carousel
	$('#slick_slide').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true
				}
			}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
});	