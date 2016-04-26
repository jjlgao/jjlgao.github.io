$(document).ready(function(){
	//Animation for the landing header.
	$('#landing-menu').animate({opacity: 1.0},'slow');
	$('svg').animate({opacity: 1.0},'slow');

	$('svg').click(function() {
		if ($('#landing-background').css('background-color') == 'rgb(0, 150, 136)') {
			$('#landing-background').css({'background-color':'#9FA8DA', opacity: 0.75},'slow');
		} else {
			$('#landing-background').css({'background-color':'#009688', opacity: 0.75},'slow');
		}
	});


	$('#landing-home').click(function() {
		$('html,body').animate({
	       scrollTop: $('#landing-container').offset().top
	    }, 500);
	});

	$('#landing-about').click(function() {
		$('html,body').animate({
	       scrollTop: $('#intro-container').offset().top
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

	    setTimeout(function() {
	    	$('html,body').animate({
		       scrollTop: $('#contact-container').offset().top
		    }, 2000);
	    }, 3000);
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

		$('.up-footer').hover(function() {
			$('.up-arrow').animate({opacity: 1.0},'fast');
		},function() {
			$('.up-arrow').animate({opacity: 0.5},'fast');
		});
	},500);

	//Animation for footers
	$('#landing-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#intro-container').offset().top
	    }, 500);
	});
	$('#about-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#experience-container').offset().top
	    }, 500);
	});
	$('#experience-up-footer').click(function() {
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

	animate_stars('#intro-container');

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
		$('#about-me').text("Origins");
	});

	

	//Expand the "About" screen on click.
	$('.about-box').click(function() {
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
				$('.about-tiles').hide();
			},1000);
			if (is_active) {
				$('#about-top').animate({"margin-top": "7.5%"},'slow');
				$('#about-bottom').animate({"margin-bottom":"7.5%"},'slow');
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
					console.log($('#about-expand').height()*0.5 - $('#ed-text').height()*0.5);
					$('#ed-text').css('padding-top', $('#about-expand').height()*0.5 - $('#ed-text').height()*0.5);
				}
				else if (box_id == 'about-box-projs') {
					$('#proj-text').show();
					// $('#proj-text').css('padding-top', $('#about-expand').height()*0.5 - $('#proj-text').height()*0.5);

					$('#about-og').hover(function() {
						$('#about-og').text("Old Gods website");
						});
				}
				else if (box_id == 'about-box-interests') {
					$('#interests-text').show();
					// $('#interests-text').css('top') = $(window).height()*0.5 - $('#about-expand').css('height')*0.5;

					var cw2 = $('.about-box-mini').height();
					$('.about-box-mini').css({'width':cw2+'px'});

					$('#about-got').hover(function() {
						$('#about-got-text').text("I'm a huge Game of Thrones nerd, and I look forward to every season.");
						$('#overlay-got').addClass('overlay-active');
						$('#overlay-got').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-got').animate({"opacity":0.0},'fast');
					});

					$('#about-gym').hover(function() {
						$('#about-gym-text').text("Lately, I've been trying to be more active, and I'm really enjoying it.");
						$('#overlay-gym').addClass('overlay-active');
						$('#overlay-gym').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-gym').animate({"opacity":0.0},'fast');
					});

					$('#about-food').hover(function() {
						$('#about-food-text').text("Although I don't have much time to do so, I like to cook, when I can.");
						$('#overlay-food').addClass('overlay-active');
						$('#overlay-food').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-food').animate({"opacity":0.0},'fast');
					});

					$('#about-stock').hover(function() {
						$('#about-stock-text').text("Recently, I've tried my hand at investing. It's a learning process, but I think it will pay off.");
						$('#overlay-stock').addClass('overlay-active');
						$('#overlay-stock').animate({"opacity":1.0},'fast');
					}, function() {
						$('#overlay-stock').animate({"opacity":0.0},'fast');
					});

				}
				else if (box_id == 'about-box-me') {
					$('#me-text').show();
					$('#me-text').css('padding-top', $('#about-expand').height()*0.5 - $('#me-text').height()*0.5);
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

	$('.about-box-mini').click(function() {
		event.stopPropagation();
	});

	var scrolled = false;
	$(".border").hide();
	$('#about-bottom').waypoint(function(direction) {
		if (scrolled == false) {

			$('html,body').animate({
			       scrollTop: $('#timeline-sixth').offset().top
			    }, 4500);
			scrolled = true;
		}
		$('#experience-line').show();
		$('#experience-line').animate({height: "85%"},5000);

		$('#experience-overlay').animate({opacity: 0.0},1000);
		$('#experience-blurb').animate({opacity: 0.0},500);
		setTimeout(function() {
			$('#experience-blurb').hide();
		},1000);

		var timeline_width = $('.experience-item-container').width()*.05 + 75;
		setTimeout(function() {
			$('#timeline-first').animate({'opacity': 1.0},'slow');
			$('#timeline-left-line-first').show();
			$('#timeline-left-line-first').animate({width: timeline_width, opacity: 1.0},1000);

			setTimeout(function() {
				$('#timeline-second').animate({'opacity': 1.0},'slow');
				$('#timeline-right-line-second').show();
				$('#timeline-right-line-second').animate({width: timeline_width, opacity: 1.0},1000);

				setTimeout(function() {
					$('#timeline-third').animate({'opacity': 1.0},'slow');
					$('#timeline-right-line-third').show();
					$('#timeline-right-line-third').animate({width: timeline_width, opacity: 0.5},1000);

					setTimeout(function() {
						$('#timeline-fourth').animate({'opacity': 1.0},'slow');
						$('#timeline-left-line-fourth').show();
						$('#timeline-left-line-fourth').animate({width: timeline_width, opacity: 1.0},1000);

						setTimeout(function() {
							$('#timeline-fifth').animate({'opacity': 1.0},'slow');
							$('#timeline-right-line-fifth').show();
							$('#timeline-right-line-fifth').animate({width: timeline_width, opacity: 1.0},1000);

							setTimeout(function() {
								$('#timeline-sixth').animate({'opacity': 1.0},'slow');
								$('#timeline-left-line-sixth').show();
								$('#timeline-left-line-sixth').animate({width: timeline_width, opacity: 0.5},1000);

								setTimeout(function() {
									$('#timeline-last').animate({'opacity': 1.0},'slow');
									$('#timeline-right-line-last').show();
									$('#timeline-right-line-last').animate({width: timeline_width, opacity: 0.5},1000);
								},500);
							},500);
						},500);
					},500);
				},500);
			},500);
		},100);

		var timeline_left = $('.experience-item-container').width()*.45 - 75;
		var old_opacity = 1.0;
		$('.exp-logo').hover(function() {
			old_opacity = $(this).parent().parent().parent().find(".timeline-future").css('opacity');
			//old_opacity = $(this).parent().parent().parent().find(".timeline-right-line").css('opacity');
			if (old_opacity) {
				old_opacity = 0.5;
			}
			if (!old_opacity) {
				old_opacity = 1.0;
			}
			console.log(old_opacity);
			$(this).parent().parent().parent().find(".timeline-left-line").animate({opacity: 0.75},400);
			$(this).parent().parent().parent().find(".timeline-right-line").animate({opacity: 0.75},400);
		},function() {
			$(this).parent().parent().parent().find(".timeline-left-line").animate({opacity: old_opacity},400);
			$(this).parent().parent().parent().find(".timeline-right-line").animate({opacity: old_opacity},400);
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
		},5000);
		
	});

	var blurb_active = false;
	$('#timeline-last').waypoint(function(direction) {
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
					},60*(j - old_slice_val));
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
					},60*(j - old_slice_val + 15));
					
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

function animate_stars(div) {
	//Makes a bunch of circles flicker on the screen, like stars. 
	var num_stars = 500;

	var parent_div = document.getElementById(div.substr(1));
	var max_height = 315;
	var max_width = $(window).width() - 10;
	console.log(max_width);

	console.log(div);

	var stars = []
	
	for (var i=0; i < num_stars; i++) {
		var new_div = document.createElement('div');
		new_div.className = 'star';
		parent_div.appendChild(new_div);

		new_div.style.top = Math.random() * max_height;
		new_div.style.left = Math.random() * max_width;

		if (Math.random() < 0.1) {
			new_div.style.background = '#B3E5FC'; //Light blue

			if (Math.random() > 0.8) {
				new_div.style.background = '#2196F3'; //Really angry blue.
			}
		} else if (Math.random() > 0.9) {
			new_div.style.background = '#FFCDD2'; //Red

			if (Math.random() > 0.6) {
				new_div.style.background = '#EF5350'; //Really angry red.
			}
		}

		var new_div_size = Math.max(Math.random() * 6, 2);
		if (Math.random() > 0.99) {
			new_div_size = 15;

			if (Math.random() > 0.75) {
				//Make a black hole!
				new_div.style.background = '#000000';
			}
		}
		new_div.style.width = new_div_size;
		new_div.style.height = new_div_size;
		new_div.style.borderRadius = new_div_size;

		new_div.style.opacity = Math.random();

		stars.push(new_div);
	}

	//Have the stars twinkle.
	setInterval(function() {
		for (var i=0; i < stars.length; i++) {
			var star = stars[i];

			if (Math.random() >= 0.75) {
				if (star.style.opacity > 0.25) {
					star.style.opacity = Math.random() * 0.25;
				}
			}
		}
	},1000);

	setTimeout(function() {
		setInterval(function() {
				for (var i=0; i < stars.length; i++) {
					var star = stars[i];

					if (Math.random() >= 0.75) {
						if (star.style.opacity < 0.75) {
							star.style.opacity = 1.0 - Math.random() * 0.25;
						} 
					}
				}
			},1000);
	},500);
	
}