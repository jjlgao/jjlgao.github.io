$(document).ready(function(){
	//Animation for the landing header.
	$('#landing-menu').animate({opacity: 1.0},'slow');
	$('svg').animate({opacity: 1.0},'slow');

	$('svg').click(function() {
		console.log($('#landing-background').css('background-color'));
		if ($('#landing-background').css('background-color') == 'rgb(0, 150, 136)') {
			$('#landing-background').css({'background-color':'#7986CB'},'slow');
		} else {
			$('#landing-background').css({'background-color':'#009688'},'slow');
		}
	});


	$('#landing-home').click(function() {
		$('html,body').animate({
	       scrollTop: $('#landing-container').offset().top
	    }, 500);
	});

	$('#landing-about').click(function() {
		$('html,body').animate({
	       scrollTop: $('#about-container').offset().top
	    }, 500);
	});

	$('#landing-exp').click(function() {
		$('html,body').animate({
	       scrollTop: $('#experience-container').offset().top
	    }, 500);
	});

	$('#landing-contact').click(function() {
		$('html,body').animate({
	       scrollTop: $('#contact-container').offset().top
	    }, 500);
	});

	//Chevron animation for the landing page.
	setTimeout(function() {
		$('.down-arrow').show();
		$('.down-arrow').animate({opacity: 0.5},'slow');
		$('.up-arrow').show();
		$('.up-arrow').animate({opacity: 0.5},'slow');

		$('.footer').hover(function() {
			$('.down-arrow').animate({opacity: 1.0},'fast');
		}, function() {
			$('.down-arrow').animate({opacity: 0.5},'fast');
		});

		$('#contact-footer').hover(function() {
			$('.up-arrow').animate({opacity: 1.0},'fast');
		},function() {
			$('.up-arrow').animate({opacity: 0.5},'fast');
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
	console.log(cw);
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
		$('#about-me').text("Origins");
	});

	

	//Expand the "About" screen on click.
	$('.about-box').click(function() {
		console.log(this.id);
		var box_id = this.id;
		var is_active = false;
		if ($(this).hasClass('about-box-active'))
			is_active = true;
		if ($('#about-top').css('margin-top') == "0px") {
			if ($('.about-box').hasClass('about-box-active')) {
				$('.about-box').removeClass('about-box-active');
			}
			$('#about-expand').animate({opacity: 0.0},'slow');

			setTimeout(function() {
				if (is_active)
					$('#about-header').animate({opacity: 1.0},'slow');
				$('#about-expand').hide();
				if (is_active)
					$('#about-footer').show();
				$('#about-footer').animate({opacity: 1.0},'slow');
				$('.about-text').hide();
			},1000);
			if (is_active) {
				$('#about-top').animate({"margin-top": "9%"},'slow');
				$('#about-bottom').animate({"margin-bottom":"9%"},'slow');
			}
		} 
		if (!is_active) {
			if (!$(this).hasClass('about-box-active')) {
				$(this).addClass('about-box-active');
			}
			$('#about-top').animate({"margin-top": 0},'slow');
			$('#about-bottom').animate({"margin-bottom":0},'slow');
			$('#about-footer').animate({opacity: 0.0},'fast');
			setTimeout(function() {
				$('#about-header').animate({opacity: 0.0},'slow');
				$('#about-expand').show();
				$('#about-expand').animate({opacity: 1.0},'slow');
				$('#about-footer').hide();

				if (box_id == 'about-box-ed') {
					$('#ed-text').show();
				}
				else if (box_id == 'about-box-projs') {
					$('#proj-text').show();
				}
				else if (box_id == 'about-box-interests') {
					$('#interests-text').show();
					var cw2 = $('.about-box-mini').height();
					console.log(cw2);
					$('.about-box-mini').css({'width':cw2+'px'});

					$('#about-got').hover(function() {
						$('#about-got-text').text("I'm a huge Game of Thrones nerd, and I look forward to every season.");
						$('#overlay-got').addClass('overlay-active');
						$('#overlay-got').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-got').animate({"opacity":0.0},'fast');
						// setTimeout(function() {
						// 	$('#overlay-got').removeClass('overlay-active');
						// },500);
					});

					$('#about-gym').hover(function() {
						$('#about-gym-text').text("Lately, I've been trying to be more active, and I'm really enjoying it.");
						$('#overlay-gym').addClass('overlay-active');
						$('#overlay-gym').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-gym').animate({"opacity":0.0},'fast');
						// setTimeout(function() {
						// 	$('#overlay-gym').removeClass('overlay-active');
						// },500);
					});

					$('#about-food').hover(function() {
						$('#about-food-text').text("Although I don't have much time to do so, I like to cook, when I can.");
						$('#overlay-food').addClass('overlay-active');
						$('#overlay-food').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-food').animate({"opacity":0.0},'fast');
						// setTimeout(function() {
						// 	$('#overlay-food').removeClass('overlay-active');
						// },500);
					});

					$('#about-stock').hover(function() {
						$('#about-stock-text').text("Recently, I've tried my hand at investing. It's a learning process, but I think it will pay off.");
						$('#overlay-stock').addClass('overlay-active');
						$('#overlay-stock').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-stock').animate({"opacity":0.0},'fast');
						// setTimeout(function() {
						// 	$('#overlay-stock').removeClass('overlay-active');
						// },500);
					});

				}
				else if (box_id == 'about-box-me') {
					$('#me-text').show();
				}
			},1000);
		}
	});

	$('#about-expand').click(function() {
		if ($('.about-box').hasClass('about-box-active')) {
			$('.about-box').removeClass('about-box-active');
		}
		$('#about-expand').animate({opacity: 0.0},'slow');
		setTimeout(function() {
			$('#about-header').animate({opacity: 1.0},'slow');
			$('#about-expand').hide();
		},1000);
		$('#about-top').animate({"margin-top": "9%"},'slow');
		$('#about-bottom').animate({"margin-bottom":"9%"},'slow');
	});

	var scrolled = false;
	$(".border").hide();
	console.log($('#contact-container').offset().top);
	console.log($('#contact-container').height());
	console.log(document.body.scrollHeight);
	$('#about-bottom').waypoint(function(direction) {
		if (scrolled == false) {

			// $('html,body').animate({
			//        scrollTop: $('#experience-container').offset().top + (1.0/2.6)*($('#experience-container').height())
			//     }, 4000);
			// scrolled = true;
		}
		$('#experience-line').show();
		$('#experience-line').animate({height: "80%"},3500, function() {
			//console.log($(window).animate({scrollTop: ($('#experience-container')[0].scrollHeight));

			//$("#experience-container").animate({ scrollTop: $("#experience-container").attr("scrollHeight") - $('#experience-container').height() }, 3000);

			
		});

		setTimeout(function() {
			$('#experience-line-left').show();
			$('#experience-line-left').animate({width: "5%"},1000);
			$('#experience-line-right').show();
			$('#experience-line-right').animate({width: "5%"},1000);

			setTimeout(function() {
				$('#experience-line-left-down').show();
				$('#experience-line-left-down').animate({height: "15%"},2000);

				$('#experience-line-right-down').show();
				$('#experience-line-right-down').animate({height: "15%"},3000);
			},1000);
		},3500);
		
	});

	var blurb_active = false;
	$('#experience-container').waypoint(function(direction) {
		var text = "Like what you see?  <br />Let's get in touch.";
		if (direction == 'down' && blurb_active == false) {
			animate_typed_text_no_delay('.blurb',text);
			blurb_active = true;
		}
	});

	// $(window).scroll(function() {
	// 	var offsetY = $(window).scrollTop();
	// 	var waypoint = $('#contact-background').offset().top;
	// 	var progress = offsetY / waypoint;
		
	// 	var translate = 10 * progress
	// 	console.log(progress);
	// 	$('#contact-background').css(
	// 		'filter', 'blur(' + translate + 'px)'
	// 	);
	// });
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

function animate_typed_text_no_delay(div,text) {
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

				old_slice_val = slice_val;
			},(i==1)?1000*(i):((i==2)?2000*(i):3000*(i)));		
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