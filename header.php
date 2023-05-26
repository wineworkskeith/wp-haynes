<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<?php wp_head(); ?>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon/cropped-Haynes_Favicon-32x32.png" sizes="32x32" />
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon/cropped-Haynes_Favicon-192x192.png" sizes="192x192" />
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon/cropped-Haynes_Favicon-180x180.png" />
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/images/favicon/cropped-Haynes_Favicon-270x270.png" />
	</head>

	<body <?php body_class(); ?> id="top">
		<a class="screen-reader-text skip-link" href="#content">Skip to content</a>
		<header class="header">
			<a href="/" class="home__request__header__logo">
				<?php get_template_part( 'template-parts/header/logo' ); ?>
			</a><!--logo-->
			<div id="c7-account"></div>
		</header>
		<main id="content">