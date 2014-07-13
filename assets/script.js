$(document).ready(function(){
	$('#cover-nav-home').click(function(){
		var top = $('#cover').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
	$('#cover-nav-about').click(function(){
		var top = $('#about').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
	$('#cover-nav-experience').click(function(){
		var top = $('#experience').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
	$('#cover-nav-photo').click(function(){
		var top = $('#photography').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
	$('#cover-nav-skills').click(function(){
		var top = $('#dome').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});
	$('#call-to-action').click(function(){
		var top = $('#footer').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});

	$('#learn').click(function(){
		var top = $('#skills').offset().top;
		$('html, body').animate({scrollTop: top}, 500);
	});

	


  $(".cover-nav-item").hover(function(){
  $(this).css("color","#669999");
  },function(){
  $(this).css("color","white");
});
  $("#learn").hover(function(){
  $(this).css("color","#669999");
  },function(){
  $(this).css("color","white");
});




});