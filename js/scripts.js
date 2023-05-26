//Add class to li to show submenu on click
var menuItem = document.getElementsByClassName("menu-item-has-children");
for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('touchend click', function () {

		if (this.classList.contains('menu-item-has-children--visible')) {
			this.classList.remove('menu-item-has-children--visible');
		} else {
			this.classList.add('menu-item-has-children--visible');
		}
	});
}

jQuery(document).ready(function($) {

    //anchor smooth scroll
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
			  event.preventDefault();

			  if (document.body.classList.contains('show-mobile-nav')) {
				document.body.classList.remove('show-mobile-nav');
				MicroModal.close('modal-menu');
				bodyScrollLock.clearAllBodyScrollLocks();
			}

			  var width = $(window).width();
			  if(width > 991){
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!						
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						}else{
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
						$('body').css('overflow','auto');
						
					});
				}else{
	
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						}else{
							$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
          }
		}
	});


	//Add class to li to show submenu on click
	var menuItem = document.getElementsByClassName("menu-item-has-children");
	for (var i = 0; i < menuItem.length; i++) {
		menuItem[i].addEventListener('touchend click', function () {

			if (this.classList.contains('menu-item-has-children--visible')) {
				this.classList.remove('menu-item-has-children--visible');
			} else {
				this.classList.add('menu-item-has-children--visible');
			}
		});
	}

	// Menu ADA
	$('li.menu-item-has-children').each(function(){
		var name = $(this).find('a').first().text();
		name = name + '-Menu-Toggle';
		$(this).prepend('<label for="'+name+'">'+name+'</label><input type="checkbox" name="'+name+'" id="'+name+'" class="toggle-sub-menu">');

		if ($(this).hasClass('current-menu-item') || $(this).hasClass('current_page_item') || $(this).hasClass('current-menu-ancestor') || $(this).hasClass('current-menu-parent')  ){
			$(this).children('.toggle-sub-menu').prop( "checked", true );
		}
	})

	


	
	var c7Observer = new MutationObserver(function(mutations) {
		//when loaded do something
		c7Observer.disconnect();

		// Replace the home "LOGIN" with "MY ACCOUNT"
	   	if($("body").hasClass('home')){
			if($('.c7-user-nav__account__name').length > 0){
				var name = $('.c7-user-nav__account__name').html();
				name = name.split('<')[0];
				// $('.home__request__header').append('<a href="/profile/logout" class="c7-account__logout_link">Log Out</a>');
				$('#menu-item-36 a').text('MY ACCOUNT');
				$('.home__logged-out').css('display','none');
				$('#c7-account').append('<a href="/profile/logout" class="c7-account__logout_link">Log Out</a>');
			}else{
				$('.c7-user-nav__account__login').on('click',function(event){
					event.preventDefault();	
					MicroModal.show('login-modal');
				});
				$('.home__logged-in').css('display','none');
			}
	   	}else{
			if($('.c7-user-nav__account__name').length > 0){
				$('#menu-item-36 a').text('MY ACCOUNT');
				$('#c7-account').append('<a href="/profile/logout" class="c7-account__logout_link">Log Out</a>');
			}else{
				$('.c7-user-nav__account__login').on('click',function(event){
					event.preventDefault();	
					MicroModal.show('login-modal');
				});
			}
		}
	 
	   c7Observer.observe(document.querySelector("#c7-account"), { childList: true, subtree: true });
	});
	// pass in the target node, as well as the observer options, this detects if any child elements change in side #c7-content
	if($("#c7-account").length > 0){
		c7Observer.observe(document.querySelector("#c7-account"), { childList: true, subtree: true });
	}

	$('.footer__menu .menu-item-33').on('click',function(event){
		event.preventDefault();	
		MicroModal.show('mailing-list-modal');	
	});

	$('.home__logged-out__login-link').on('click',function(event){
		event.preventDefault();	
		MicroModal.show('login-modal');	
	});

	
	
	// if div with id "numberToGoDownBy" exists:
	if (document.getElementById('numberToGoDownBy')) {


		// Define the target date for the countdown (July 13th, 2023)
		const targetDate = new Date("2023-07-12");

		// Define the extraDays variable as a multiplier
		let extraDays = document.getElementById('numberToGoDownBy').innerHTML;


		// Get starting date
		const startingDate = new Date('2023-05-23');

		// get today's date
		const today = new Date();

		// console.log('Today: ' + today);
		// console.log('Starting date: ' + startingDate);
		// console.log('Target date: ' + targetDate);

		const timeDifferenceSinceStart = today.getTime() - startingDate.getTime();
		let daysSinceStart = Math.ceil(timeDifferenceSinceStart / (1000 * 60 * 60 * 24));

		// console.log('Days since start: ' + daysSinceStart);


		// Calculate the number of days remaining until the target date
		const timeDifference = targetDate.getTime() - today.getTime();
		let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

		// console.log('Days remaining before extra days taken off: ' + daysRemaining);

		daysRemaining = daysRemaining - extraDays - daysSinceStart;

		// console.log('Days remaining: ' + daysRemaining);

		$('.home__request__text__counter span').text(daysRemaining);


	}	


	
});

