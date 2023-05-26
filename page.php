<?php
	get_header();
	echo '<div class="content-wrapper content-wrapper--narrow">';
	the_content();
	echo '</div><!--content-wrapper-->';
	get_template_part('template-parts/_page-content');
	get_footer();
?>