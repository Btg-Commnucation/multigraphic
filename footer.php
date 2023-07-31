<footer>
    <section class="blue-background">
        <div class="container-narrow">
            <img src="<?= get_template_directory_uri(); ?>/public/logo_allonge_blanc.png" alt="Logo du Multigraphic">
            <div class="list-footer">
                <?php if (has_nav_menu("societe-menu")) : ?>
                    <div class="societe">
                        <h3>La société Multigraphic</h3>
                        <?php wp_nav_menu(
                            array(
                                "theme_location" => "societe-menu",
                                "container" => "nav",
                                "container_class" => "societe-menu",
                                'menu_class' => '',
                                'menu_id' => ''
                            )
                        ); ?>
                    </div>
                <?php endif; ?>
                <div class="horaires">
                    <h3>Nos horaires</h3>
                    <div class="text-horaire"><?php the_field('texte_horaire', 'option'); ?></div>
                </div>
                <div class="contact">
                    <h3>Nous contacter</h3>
                    <div class="text-contact"><?php the_field('texte_contacter', 'option'); ?></div>
                </div>
                <div class="produits">
                    <h3>Nos produits</h3>
                    <?php if (has_nav_menu("menu-products")) :
                        wp_nav_menu(
                            array(
                                "theme_location" => "menu-products",
                                "container" => "nav",
                                "container_class" => "produits-menu",
                                'menu_class' => '',
                                'menu_id' => ''
                            )
                        );
                    endif; ?>
                </div>
            </div>
            <nav class="rs-footer">
                <?php if (have_rows('reseaux_sociaux', 'option')) : ?>
                    <ul>
                        <?php while (have_rows('reseaux_sociaux', 'option')) : the_row();
                            $lien = get_sub_field('lien');
                            $lien_target = $lien['target'] ? $lien['target'] : '_self';
                            $image = get_sub_field('image_bas_de_page');
                        ?>
                            <a href="<?= esc_url($lien['url']); ?>" target="<?= esc_attr($lien_target); ?>">
                                <span class="screen-reader-text"><?= esc_html($lien['title']); ?></span>
                                <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>" />
                            </a>
                        <?php endwhile; ?>
                    </ul>
                <?php endif; ?>
                <p>Site réalisé par <a href="https://www.btg-communication.fr" target="_blank">btg communication</a></p>
            </nav>
        </div>
    </section>
</footer>

<?php wp_footer(); ?>
</body>

</html>