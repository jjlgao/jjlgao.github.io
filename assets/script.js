$(document).ready(function(){

	//Chevron animation for the landing page.
	setTimeout(function() {
		$('.down-arrow').show();
		$('.down-arrow').animate({opacity: 0.5},'slow');

		$('#landing-footer').hover(function() {
			if ($('.down-arrow').hasClass('down-arrow-active')) {
				$('.down-arrow').removeClass('down-arrow-active');
				$('.down-arrow').animate({opacity: 0.5},'fast');
			} else {
				setTimeout(function() {
					$('.down-arrow').addClass('down-arrow-active');
					$('.down-arrow').animate({opacity: 1.0},'fast');
				},0);
				
			}
		});

		$('#about-footer').hover(function() {
			if ($('.down-arrow').hasClass('down-arrow-active')) {
				$('.down-arrow').removeClass('down-arrow-active');
				$('.down-arrow').animate({opacity: 0.5},'fast');
			} else {
				setTimeout(function() {
					$('.down-arrow').addClass('down-arrow-active');
					$('.down-arrow').animate({opacity: 1.0},'fast');
				},0);
				
			}
		});
	},500);

	//Animation for footers
	$('#landing-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#about-container').offset().top
	    }, 500);
	});
	$('#about-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#experience-container').offset().top
	    }, 500);
	});
	$('#experience-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#contact-container').offset().top
	    }, 500);
	});
	$('#contact-footer').click(function() {
		$('html,body').animate({
	       scrollTop: 0
	    }, 500);
	});

	//Animate the text for the landing page.
	var text = "Hey. My name is Jason.  <br />I'm an aspiring programmer with a variety of interests.  <br />Welcome to my website.  <br /> ";
	animate_typed_text('#landing-text',text);

	//Change the text of the boxes on the about page.
	var cw = $('.about-box').height();
	$('.about-box').css({'width':cw+'px'});

	$('#about-box-ed').hover(function() {
		$('#about-ed').text("Education");
	});

	$('#about-box-projs').hover(function() {
		$('#about-projs').text("Projects");
	});

	$('#about-box-interests').hover(function() {
		$('#about-interests').text("Interests");
	});

	$('#about-box-me').hover(function() {
		$('#about-me').text("Me");
	});

	//Expand the "About" screen on click.
	$('.about-box').click(function() {
		console.log($(this).hasClass('.about-box-active'));
		if ($('#about-top').css('margin-top') == "0px") {
			//Not working
			if ($(this).hasClass('.about-box-active')) {
				$(this).removeClass('.about-box-active');
			}
			$('#about-expand').animate({opacity: 0.0},'slow');

			setTimeout(function() {
				$('#about-header').animate({opacity: 1.0},'slow');
				$('#about-expand').hide();
				$('#about-footer').show();
				$('#about-footer').animate({opacity: 1.0},'slow');
			},1000);
			$('#about-top').animate({"margin-top": "9%"},'slow');
			$('#about-bottom').animate({"margin-bottom":"9%"},'slow');	
		} else {
			//Not working
			if (!$(this).hasClass('.about-box-active')) {
				$(this).addClass('.about-box-active');
			}
			$('#about-top').animate({"margin-top": 0},'slow');
			$('#about-bottom').animate({"margin-bottom":0},'slow');
			$('#about-footer').animate({opacity: 0.0},'fast');
			setTimeout(function() {
				$('#about-header').animate({opacity: 0.0},'slow');
				$('#about-expand').show();
				$('#about-expand').animate({opacity: 1.0},'slow');
				$('#about-footer').hide();
			},1000);
		}
	});

	$('#about-expand').click(function() {
		if ($(this).hasClass('.about-box-active')) {
			$(this).removeClass('.about-box-active');
		}
		$('#about-expand').animate({opacity: 0.0},'slow');
		setTimeout(function() {
			$('#about-header').animate({opacity: 1.0},'slow');
			$('#about-expand').hide();
		},1000);
		$('#about-top').animate({"margin-top": "9%"},'slow');
		$('#about-bottom').animate({"margin-bottom":"9%"},'slow');
	});
});

function animate_typed_text(div,text) {
	/*
		Takes a line of text and animates as if you're typing it in MS Word.
	*/
	var lines = text.split('<br />');
	
	//Write out the text.
	$(div).html("|");
	var length_of_str = [0];
	for (var i=0; i <= lines.length; i++) {
		if (i < lines.length)
			length_of_str.push(length_of_str[i] + lines[i].length);
		if (i < lines.length - 1)
			length_of_str[i+1] += '<br />'.length;

		var old_slice_val = 0;
		setTimeout(function() {
				
				//Type out the text, one letter at a time, per line.
				var slice_val = length_of_str.shift();
				var cursor_val = old_slice_val;
				for (var j = old_slice_val; (slice_val < text.length && j <= slice_val - 2 - '<br />'.length) || ((slice_val == text.length || slice_val == 0) && j <= slice_val); j++) {
					setTimeout(function() {
						var current_cursor = $(div).html().slice(-1);
						if (current_cursor == "|") {
							$(div).html(text.slice(0,cursor_val) + "|");
						} else {
							$(div).html(text.slice(0,cursor_val) + "  ");
						}
						cursor_val++;
					},75*(j - old_slice_val));
				}

				//Naturally move the cursor down to the next line after a little while after finishing a line of text.
				if (slice_val != old_slice_val) {
					setTimeout(function() {
						var current_cursor = $(div).html().slice(-1);
						if (current_cursor == "|") {
							$(div).html(text.slice(0,cursor_val - 1 + '  <br />'.length) + "|");
						} else {
							$(div).html(text.slice(0,cursor_val - 1 + '  <br />'.length) + "  ");
						}
						var h = $(div).html();
					},75*(j - old_slice_val + 15));
					
				}

				//Slow down after the 'Hey.' to create a more conversational transition in the first line of the intro.
				if (slice_val == 0 && text.slice(0,4) == 'Hey.') {
					for (var j = old_slice_val; j < 'Hey.'.length; j++) {
						setTimeout(function() {
							var current_cursor = $(div).html().slice(-1);
							if (current_cursor == "|") {
								$(div).html(text.slice(0,cursor_val) + "|");
							} else {
								$(div).html(text.slice(0,cursor_val) + "  ");
							}
							cursor_val++;
						},150*(j - old_slice_val));
					}
					slice_val = 'Hey.'.length;
				}

				old_slice_val = slice_val;
			},(i==1)?2000*(i) + 1000:((i==2)?3000*(i) + 1000:4000*(i) + 1000));		
	}

	//Have the cursor blink every so often.
	setInterval(function() {
		var landing_text = $(div).html();
		var cursor = landing_text.slice(-1);
		var landing_text_no_cursor = landing_text.slice(0,-1);

		if (cursor == '|') {
			$(div).html(landing_text_no_cursor + '  ');
		} else {
			$(div).html(landing_text_no_cursor.slice(0,-1) + '|');
		}
	},799);
}