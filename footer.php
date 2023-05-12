
	</main>
	<footer class="footer">
		<div class="content-wrapper">
			<nav class="footer__menu">
				<ul>
					<?php wp_nav_menu( array( 'theme_location' => 'footer', 'container' => '', 'items_wrap' => '%3$s' ) ); ?>
				</ul>
			</nav><!--footer__menu-->
			<p class="footer__copy">
				<?php echo get_field('copyright_text','option'); ?>
			</p><!--footer__copy-->
		</div><!--content-wrapper-->
	</footer>
	<?php wp_footer(); ?>
	<script type="text/javascript" src="//cdn.commerce7.com/v2/commerce7.js" id="c7-javascript" data-tenant="haynes-vineyard"></script>
  	</body>
</html>
