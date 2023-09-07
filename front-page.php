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
    <?php get_template_part('./parts/savoir-faire');
    $img_engagements = get_field('image_de_fond');
    ?>
    <section class="engagement" style="background: url('<?= esc_url($img_engagements['url']); ?>') no-repeat center;">
        <div class="container-narrow">
            <?php $logo_engagement = get_field('logo_engagement'); ?>
            <img src="<?= esc_url($logo_engagement['url']); ?>" alt="<?= esc_attr($logo_engagement['alt']); ?>">
            <div class="content">
                <?php the_field('contenu_engagement'); ?>
            </div>
            <?php $link_engagement = get_field('lien_engagement'); ?>
            <a href="<?= esc_url($link_engagement['url']); ?>" class="btn"><?= esc_html($link_engagement['title']); ?></a>
        </div>
    </section>
    <section class="export">
        <div class="container-narrow">
            <h2><?php the_field('titre_produits_export'); ?></h2>
            <div class="text"><?php the_field('texte_produits_export'); ?></div>
            <div class="link">
                <img src="<?= get_template_directory_uri(); ?>/public/vague-black.svg" alt="Vague noir" />
                <?php $link_produit = get_field('lien_produits_export');
                $link_produit_target = $link_produit['target'] ? $link_produit['target'] : '_self';
                ?>
                <a class="btn" href="<?= esc_url($link_produit['url']); ?>" target="<?= esc_attr($link_produit_target); ?>"><?= esc_html($link_produit['title']); ?></a>
            </div>
        </div>
    </section>
    <section class="contenu-flexible">
        <?php get_template_part('./parts/flexible-content'); ?>
    </section>
    <section class="marques">
        <div class="container-narrow">
            <h2>Nos marques</h2>
            <div class="text"><?php the_field('texte_court_marque'); ?></div>
            <?php if (have_rows('logo_marque')) : ?>
                <ul class="marques-container">
                    <?php while (have_rows('logo_marque')) : the_row();
                        $img = get_sub_field('logo');

                        echo '<li class="marque-list"><img src="' . esc_url($img['url']) . '" alt="' . esc_attr($img['alt']) . '" title="' . esc_attr($img['title']) . '" /></li>';
                    endwhile;
                    ?>
                </ul>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>