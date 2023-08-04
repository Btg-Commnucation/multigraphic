<?php

/*
Template Name: Home Page
*/

get_header(); ?>

<main id="home-template">
    <div class="container-narrow">
        <h1><?php the_title(); ?></h1>
        <div class="content"><?php the_content(); ?></div>
        <?php get_template_part("/parts/articles"); ?>
    </div>
</main>

<?php get_footer(); ?>