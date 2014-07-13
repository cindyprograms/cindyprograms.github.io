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
  $(this).css("color","#00b0d7");
  },function(){
  $(this).css("color","white");
});
  $("#learn").hover(function(){
  $(this).css("color","#00b0d7");
  },function(){
  $(this).css("color","white");
});



$("#muir").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
$("#cindy").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
$("#girl").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
$("#ucsd").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
$("#dude").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });
$("#landscape").hover(function() {
        $(this).animate({opacity: 0.5}, 500);
    }, function() {
        $(this).animate({opacity: 1.0}, 500);
    });




$('#muir').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container').fadeIn();
		
	}); 

	$('#modal-container').click(function(){
		$('#modal-container').fadeOut();		

	}); 

$('#cindy').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container-two').fadeIn();
		
	}); 

	$('#modal-container-two').click(function(){
		$('#modal-container-two').fadeOut();		

	}); 

$('#girl').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container-three').fadeIn();
		
	}); 

	$('#modal-container-three').click(function(){
		$('#modal-container-three').fadeOut();		

	}); 

$('#ucsd').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container-four').fadeIn();
		
	}); 

	$('#modal-container-four').click(function(){
		$('#modal-container-four').fadeOut();		

	}); 


$('#dude').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container-five').fadeIn();
		
	}); 

	$('#modal-container-five').click(function(){
		$('#modal-container-five').fadeOut();		

	}); 

$('#landscape').click(function(){
		console.log("Clicked login fade in");
		$('#modal-container-six').fadeIn();
		
	}); 

	$('#modal-container-six').click(function(){
		$('#modal-container-six').fadeOut();		

	}); 



});