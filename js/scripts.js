// If Intersection Observer is not supported
if (!'IntersectionObserver' in window && !'IntersectionObserverEntry' in window && !'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	$('[data-animation]').addClass('is-visible');
}

// If Internet Explorer Intersection Observer
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > -1) {
	$('[data-animation]').addClass('is-visible');
}

// Intersection Observer
setTimeout(function () {
	if ($('[data-animation]').length) {
		var elements = document.querySelectorAll('[data-animation]');

		var options = {
		threshold: 0
		};

		var observer = new IntersectionObserver(function (entries) {
		for (var i = 0; i < entries.length; i++) {
			if (entries[i].isIntersecting) {
			entries[i].target.classList.add('is-visible');
			}
		}
		}, options);

		for (var i = 0; i < elements.length; i++) {
		observer.observe(elements[i]);
		}
	}
}, 50);



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


	$('#mobile-menu-toggle').on('click',function(event){
		event.preventDefault();	
		$('body').toggleClass('show-mobile-nav');
		MicroModal.show('modal-menu');
	});

	// Fade in the Suisun landing page:
	setTimeout(function(){ 
		$('body.page-template-page-suisun').addClass('loaded');
	},1000);
	

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
});

