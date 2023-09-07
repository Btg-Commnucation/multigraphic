<?php get_header();
?>

<main id="front-page">
    <h1 class="screen-reader-text"><?php the_title(); ?></h1>
    <section class="hero-banner">
        <?php if (have_rows('carousel_haut_de_page')) {
            echo '<div class="swiper mySwiper">';
            echo '<div class="swiper-wrapper">';
            while (have_rows('carousel_haut_de_page')) : the_row();
                $image_carousel = get_sub_field('image_');
                $lien_carousel = get_sub_field('lien');
        ?>
                <div class="swiper-slide">
                    <div class="image-background" style="background: url('<?= esc_url($image_carousel['url']); ?>') no-repeat center"></div>
                    <div class="content">
                        <?php the_sub_field('texte');
                        if ($lien_carousel) {
                            $lien_carousel_target = $lien_carousel['target'] ? $lien_carousel['target'] : '_self';
                            echo '<a href="' . esc_url($lien_carousel['url']) . '" class="btn" target="' . esc_attr($lien_carousel_target) . '">' . esc_html($lien_carousel['title']) . '</a>';
                        }
                        ?>
                    </div>
                </div>
        <?php endwhile;
            echo '</div>';
            echo '<div class="swiper-pagination"></div>';
            echo '</div>';
        } ?>

    </section>
    <article>
        <div class="container-narrow">
            <?php the_content(); ?>
        </div>
    </article>
    <?php get_template_part('./parts/slider-front'); ?>
    <?php get_template_part('./parts/featured-products'); ?>
    <?php get_template_part('./parts/featured-news'); ?>
</main>

<?php get_footer(); ?>