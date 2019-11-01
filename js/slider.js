
$('.slick').each(function(){
	var $this = $(this),
		$blockArrows = $('.controls-arrows', $this),
		$blockDots = $('.controls-dots', $this),
		$slick = $('.slider', $this);
	$slick.slick({
		dots: true,
		rows: 2,
		arrows: true,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $blockArrows,
		appendDots: $blockDots,
		responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,

      }
    }
  ]
	});
});
