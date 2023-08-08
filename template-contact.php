<?php
/*
Template Name: Contact
*/
get_header();
?>

<main id="contact">
    <section class="form">
        <div class="container-narrow">
            <h1><?php the_title(); ?></h1>
            <div class="form-container">
                <div class="form-title">
                    <h3>Vous souhaitez plus d'informations sur Multigraphic ou nos produits ?</h3>
                </div>
                <div class="form-content">
                    <p>Afin d'obtenir des informations, veuillez renseignez les informations suivates. Multigraphic vous répondra dans les meilleurs délais.</p>
                    <?= do_shortcode("[sibwp_form id=3]"); ?>
                </div>
            </div>
        </div>
    </section>
    <section class="address">
        <div class="container-narrow">
            <div class="address-container">
                <div class="left">
                    <?php $img = get_field('image');
                    ?>
                    <img src="<?= esc_url($img['url']) ?>" alt="<?= esc_attr($img['alt']); ?>">
                </div>
                <div class="right">
                    <div class="background"></div>
                    <div class="content-address"><?php the_field('nous_rejoindre'); ?></div>
                </div>
            </div>
            <div class="warehouse">
                <div class="warehouse-content">
                    <?php the_field('livraison');
                    $link = get_field('bouton');
                    $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a href="<?= esc_url($link['url']); ?>" target="<?= esc_attr($link_target); ?>" class="btn">
                        <?= esc_html($link['title']); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="map-container">
        <div id="map"></div>
    </section>
</main>

<?php get_footer(); ?>