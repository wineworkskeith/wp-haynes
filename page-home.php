<?php
	//Template Name: Home Page
	get_header();
	?>
	<section class="black-bg home__video">
		<a href="/" class="home__video__logo">
			<img src="<?php echo get_template_directory_uri(); ?>/images/logos/logo-white.svg" alt="<?php echo get_bloginfo('name'); ?>">
		</a><!--home__video__logo-->
		<img class="home__video__desktop" src="<?php echo get_template_directory_uri(); ?>/images/home/video_placeholder_desktop.png" alt="Haynes Vineyard">
		<img class="home__video__mobile" src="<?php echo get_template_directory_uri(); ?>/images/home/video_placeholder_mobile.png" alt="Haynes Vineyard">
	</section><!--home__video-->

	<section class="black-bg home__stack">
		<img class="home__stack__image" src="<?php echo get_template_directory_uri(); ?>/images/home/image_stack.png" alt="Haynes Vineyard">
		<div class="home__stack__text">
			<p>This text could feature a short intro to Haynes. The handwritten piece above may just be scrolled past 
				(some people won't want to wait through the video) so if above gives the “feeling” of Haynes, this may be a bit more informative.</p>
		</div><!--text-->
	</section><!--home__stack-->

	<section class="white-bg home__people">
		<img class="home__people__bg" src="<?php echo get_template_directory_uri(); ?>/images/home/illustration_img.png" alt="Haynes Vineyard">
		<div class="home__people__content">
			<img class="home__people__image" src="<?php echo get_template_directory_uri(); ?>/images/home/almanac_image.jpg" alt="Haynes Vineyard">
			<div class="home__people__text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p><a href="#" class="alt-button">Request an Allocation</a></p>
			</div><!--text-->
		</div><!--content-->
		<img class="home__people__bg__bottom" src="<?php echo get_template_directory_uri(); ?>/images/home/illustration.png" alt="Haynes Vineyard">
	</section><!--home__people-->

	<section class="black-bg home__stack2">
		<div class="home__stack2__content">
			<div class="home__stack2__text">
				<p>This section could be used to talk about the wines that will be available in one's allocation, 
					or winemaking, or really anything having to do with the Haynes family of wines. 
					There is a lot of real estate so it may be brief or (somewhat) lengthy if wanted.</p>
					<p><a href="#" class="alt-button alt-button--white">Read the Almanac</a></p>
			</div><!--text-->
			<div class="home__stack2__stack">
				<img class="home__stack2__stack__image" src="<?php echo get_template_directory_uri(); ?>/images/home/image_stack_2.png" alt="Haynes Vineyard">
				<div class="home__stack2__stack__text">
					<p>2021</p>
					<p>Forgeron Pinot Noir</p>
				</div><!--stack2__text-->
			</div><!--stack-->
		</div><!--content-->
	</section><!--home__stack2-->

	<section class="white-bg home__almanac">
		<img class="home__almanac__image" src="<?php echo get_template_directory_uri(); ?>/images/home/almanac_image.jpg" alt="Haynes Vineyard">
		<div class="home__almanac__title">
			<span class="top-line"></span>
			<h2 class="handwritten">Almanac</h2>
			<span class="bottom-line"></span>
		</div><!--title-->
		<div class="home__almanac__text">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
				 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
				 voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
				 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<p><a class="alt-button" href="#">Read the Almanac</a></p>
	</section><!--home__almanac-->

	<section class="white-bg home__request">
		<div class="home__request__header">
			<a href="/" class="home__request__header__logo">
				Haynes Vineyard
			</a><!--logo-->
			<div id="c7-account"></div>
		</div><!--header-->
		<div class="home__request__text">
			<h3>Request an Allocation</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
				anim id est laborum.</p>
				<div class="home__request__text__counter"><span>47</span> of 50 remaining</div>
				<p><a class="alt-button" href="#">Request an Allocation</a></p>
		</div><!--text-->
	</section><!--home__request-->
	
	<?php
	//get_template_part('template-parts/_page-content');
	get_footer();
?>
