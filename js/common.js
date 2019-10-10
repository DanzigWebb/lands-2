
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
});


$('.block5-reviews').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	arrows: true,
	prevArrow: '<button type="button" class="slick-navigation prev"><img src="img/prev.svg"></button>',
	nextArrow: '<button type="button" class="slick-navigation next"><img src="img/next.svg"></button>',

	// autoplay: true,
	adaptiveHeight: true,
	autoplaySpeed: 4000,
});

console.log('made by https://github.com/DanzigWebb')