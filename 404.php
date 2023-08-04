<?php get_header(); ?>
<main id="error">
    <div class="container-narrow">
        <img src="<?= get_template_directory_uri(); ?>/public/multigraphic.svg" alt="Multigraphic" />
        <h1>ERREUR 404</h1>
        <h2>La page que vous cherchez n'existe pas.</h2>
        <a href="<?= home_url("/") ?>" class="btn">Retour à l'accueil</a>
    </div>
</main>
<?php get_footer(); ?>