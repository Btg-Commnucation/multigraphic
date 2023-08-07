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
        <div class="container-narrow"></div>
    </section>
</main>

<?php get_footer(); ?>