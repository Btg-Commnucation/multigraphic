<?php
/*
Template Name: engagements
*/

get_header();
?>
<main id="engagements">
    <section class="hero-banner">
        <div class="container-narrow">
            <div class="hero-banner-content">
                <h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
            </div>
            <img src="<?= get_template_directory_uri(); ?>/public/engagement-RSE.jpg" alt="Image d'une branche d'arbre feuillu">
        </div>
    </section>
    <section class="programme">
        <div class="container-narrow">
            <?php $img_prog = get_field('image_programme'); ?>
            <img src="<?= esc_url($img_prog['url']); ?>" alt="<?= esc_attr($img_prog['alt']); ?>">
            <div class="programme-content">
                <?php $link_prog = get_field('bouton_programme');
                $link_prog_target = $link_prog['target'] ? $link_prog['target'] : '_self';
                ?>
                <div><?php the_field('texte_programme'); ?></div>
                <a href="<?= esc_url($link_prog['url']); ?>" target="<?= esc_attr($link_prog_target); ?>" class="btn">
                    <?= esc_html($link_prog['title']); ?>
                </a>
            </div>
        </div>
    </section>
    <section class="gammes">
        <div class="left-gammes">
            <div>
                <?php the_field('texte_produits'); ?>
            </div>
        </div>
        <?php $img_gammes = get_field('image_produits') ?>
        <img src="<?= esc_url($img_gammes['url']); ?>" alt="<?= esc_attr($img_gammes['alt']); ?>">
    </section>
    <section class="partners">
        <?php $img_partners = get_field('image_partenaire');  ?>
        <img src="<?= esc_url($img_partners['url']); ?>" alt="<?= esc_attr($img_partners['alt']); ?>">
        <div class="partners_content">
            <div class="content-container">
                <?php the_field('texte_partenaire'); ?>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>