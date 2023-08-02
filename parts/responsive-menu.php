<div class="responsive-menu">
    <button id="burger">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <div id="responsive-menu-container">
        <div class="responsive-container">
            <button id="close-burger">
                <span class="screen-reader-text">Fermer le menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
                    <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
                </svg>
            </button>
            <?php if (has_nav_menu("main-menu")) :
                wp_nav_menu(
                    array(
                        "theme_location" => "main-menu",
                        "container" => "nav",
                        "container_class" => "responsive-main-menu"
                    )
                );
            endif;
            ?>
            <div class="newsletter-toggle">
                <strong>Newsletter</strong>
            </div>
            <nav class="rs responsive-rs">
                <?php $external_link = get_field('lien_international', 'option');
                $external_link_target = $external_link['target'] ? $external_link['target'] : '_self';
                ?>
                <a href="<?= esc_url($external_link['url']); ?>" target="<?= esc_attr($external_link_target); ?>" class="external-link">
                    <?= esc_html($external_link['title']); ?>
                    <span class="sub-text"><?php the_field('sous_texte_lien_international', 'option'); ?></span>
                </a>
            </nav>
        </div>
    </div>
</div>