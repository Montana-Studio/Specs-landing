$(document).ready(function() {
    $('#specs-one').on('click', function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		$('#specs-five').removeClass('trama-bg-inv');
		$('#specs-six').removeClass('trama-bg-inv');
	});

	$('#specs-two').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		$('#specs-five').removeClass('trama-bg-inv');
		$('#specs-six').removeClass('trama-bg-inv');
		
	});
	$('#specs-three').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		$('#specs-five').removeClass('trama-bg-inv');
		$('#specs-six').removeClass('trama-bg-inv');
		
	});
	$('#specs-four').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-five').removeClass('trama-bg-inv');
		$('#specs-six').removeClass('trama-bg-inv');
	});

	$('#specs-five').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		$('#specs-six').removeClass('trama-bg-inv');
	});

	$('#specs-six').click(function(){
		$(this).toggleClass( 'trama-bg-animation trama-bg-inv');
		$('#specs-one').removeClass('trama-bg-inv');
		$('#specs-two').removeClass('trama-bg-inv');
		$('#specs-three').removeClass('trama-bg-inv');
		$('#specs-four').removeClass('trama-bg-inv');
		$('#specs-five').removeClass('trama-bg-inv');
	});

	$('.accordion').accordion({defaultOpen: '#specs-one'});

	$(window).load(function(){
		$('.container-All').mCustomScrollbar({
			theme:'minimal',
		});
	});


	var $elementAnima = $('#social-recomendacion');//elemento para animar
	var $animation_elements = $elementAnima;
	var $window = $(window);
	function check_if_in_view(){
		
		$.each($animation_elements, function(){

			var window_top_position = $window.scrollTop();
		
			if(document.documentElement.clientWidth >= 481){

				if(window_top_position > 150){//ScrollTop PX
					$animation_elements.removeClass('hide-social').addClass('show-social');
				}
				if(window_top_position < 150){//ScrollTop PX
					$animation_elements.removeClass('show-social').addClass('hide-social');
				}
			}
			if(document.documentElement.clientWidth <= 480){

				if(window_top_position > 60){//ScrollTop PX
					$animation_elements.removeClass('hide-social').addClass('show-social');
				}
				if(window_top_position < 60){//ScrollTop PX
					$animation_elements.removeClass('show-social').addClass('hide-social');
				}
			}	

		});
	}
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');  
});


