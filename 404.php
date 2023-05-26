<?php 
get_header();

$page_title = get_field('404_page_title','option');
$home_link_text = get_field('404_page_home_link_text','option');
$image = get_field('404_page_image','option');

echo '<div class="four-oh-four-image">';
    echo '<img src="'.$image['url'].'" alt="'.$image['alt'].'">';
echo '</div><!--four-oh-four-image-->';

echo '<div class="four-oh-four-text">';
    echo '<div>';
        echo '<h1>'.$page_title.'</h1>';
        echo '<a href="/" class="alt-button">'.$home_link_text.'</a>';
    echo '</div>';
echo '</div><!--four-oh-four-->';

    
get_footer(); 
?>
