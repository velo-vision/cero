$(document).ready(function() {
	$(".Modern-Slider").slick({
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		pauseOnDotsHover: true,
		cssEase: 'linear',
// fade:true,
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});
})

/*slider testimonio*/
$('.bxslider').bxSlider({
	mode: 'horizontal',
	auto: true,
	touchEnabled:false
});

/*scroll ligero*/
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/*Menu responsive*/
$('.burger_deluxe, .close').on('click', function() {
	  $(this).toggleClass('open');
	  $('.overlay').toggleClass('open');
	});
$('.close').on('click', function() {

		$(this).toggleClass('close');
		$('.overlay').toggleClass('close');

	});
/*animacion*/
new WOW().init();

			