<section class="devis-container hidden">
    <div class="devis">
        <div class="top">
            <h3>Vous souhaitez obtenir un devis sur l'un de nos produits ?</h3>
            <img src="<?= get_template_directory_uri(); ?>/public/close-newsletter.svg" alt="Fermer la demande de devis" id="close-devis">
        </div>
        <div class="form-container">
            <h3>Afin que notre équipe prenne contact avec vous, merci de remplir les informations suivantes :</h3>
            <?= do_shortcode("[sibwp_form id=4]"); ?>
        </div>
    </div>
</section>