$(document).ready(function(){

	// // //Chevron animation for the landing page.
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
	},1500);

	$('#landing-footer').click(function() {
		$('html,body').animate({
	       scrollTop: $('#about-container').offset().top
	    }, 500);
	});

	//Animate the text for the landing page.
	var text = "Hey. My name is Jason.  <br />I'm an aspiring programmer with a variety of interests.  <br />Welcome to my website.  <br /> ";
	animate_typed_text('#landing-text',text);
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