<?php
/*
Template Name: Identité
*/
get_header();
?>
<main id="identite">
    <section class="hero-banner">
        <div class="container-narrow">
            <h1><?php the_title(); ?></h1>
            <?php $main_img = get_field('image_principale'); ?>
            <img src="<?= esc_url($main_img['url']); ?>" alt="<?= esc_attr($main_img['alt']); ?>">
        </div>
    </section>
    <section class="implantation">
        <div class="blue-content">
            <div>
                <?php the_field('contenu_implantation'); ?>
            </div>
        </div>
        <?php $implatation_img = get_field('image_implantation'); ?>
        <img src="<?= esc_url($implatation_img['url']); ?>" alt="<?= esc_attr($implantation_img['alt']); ?>">
    </section>
    <section class="histoire">
        <div class="background-gray"></div>
        <div class="container-narrow">
            <?php $img_histoire = get_field('image_histoire'); ?>
            <img src="<?= esc_url($img_histoire['url']) ?>" alt="<?= esc_attr($img_histoire['alt']); ?>">
            <div class="content">
                <?php the_field('texte_histoire'); ?>
            </div>
            <div class="blue-text">
                <?php the_field('texte_fond_bleu_histoire'); ?>
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>