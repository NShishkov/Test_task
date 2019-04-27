$(function() {

	//header auto height
	function heightDetect() {
	  $(".header").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
	  heightDetect();
	});


	//tabs
	$(".showcase__content").hide();
	$(".showcase__content:first").show();
	$(".showcase__tabs li a:first").addClass('active');

	$(".showcase__tabs li a").click(function(event){
		$(".showcase__tabs li a").removeClass('active');
		$(this).addClass('active');
		$(".showcase__content").hide();

		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(1000);

	})

	//scroll up
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

});
