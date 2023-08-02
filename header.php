<!DOCTYPE html>
<html <?php language_attributes() ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <header>
        <div class="header-container">
            <?php get_template_part("parts/responsive-menu"); ?>
            <a href="<?= home_url("/") ?>" class="logo-link">
                <img src=" <?= get_template_directory_uri(); ?>/public/multigraphic-logo.png" alt="Logo Multigraphic" />
            </a>
            <?php if (has_nav_menu("main-menu")) :
                wp_nav_menu(
                    array(
                        "theme_location" => "main-menu",
                        "container" => "nav",
                        "container_class" => "main-menu"
                    )
                );
            ?>
            <?php endif; ?>
            <?php if (have_rows('reseaux_sociaux', 'option')) : ?>
                <nav class="rs">
                    <ul class="rs-container">
                        <?php while (have_rows('reseaux_sociaux', 'option')) : the_row();
                            $link = get_sub_field('lien');
                            $link_target = $link['target'] ? $link['target'] : '_self';
                            $image = get_sub_field('image_haut_de_page');
                        ?>
                            <li>
                                <a href="<?= esc_url($link['url']); ?>" target="<?= esc_attr($link_target); ?>">
                                    <span class="screen-reader-text">
                                        <?= esc_html($link['title']); ?>
                                    </span>
                                    <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image["alt"]); ?>" />
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                    <?php $external_link = get_field('lien_international', 'option');
                    $external_link_target = $external_link['target'] ? $external_link['target'] : '_self';
                    ?>
                    <a href="<?= esc_url($external_link['url']); ?>" target="<?= esc_attr($external_link_target); ?>" class="external-link">
                        <?= esc_html($external_link['title']); ?>
                        <span class="sub-text"><?php the_field('sous_texte_lien_international', 'option'); ?></span>
                    </a>
                </nav>
            <?php endif; ?>
        </div>
    </header>
    <section class="newsletter-container">
        <div class="newsletter-toggle">
            <img src="<?= get_template_directory_uri(); ?>/public/newsletter.svg" alt="ouvrir la newsletter" />
            <p><?php the_field('texte_button', 'options'); ?></p>
        </div>
        <div id="newsletter-show" class="hidden">
            <div class="news-container">
                <div class="hero-newsletter">
                    <h3><?php the_field('titre_newsletter', 'option'); ?></h3>
                    <img src="<?= get_template_directory_uri() ?>/public/close-newsletter.svg" alt="Close newsletter" id="close-newsletter">
                </div>
                <div class="newsletter-content">
                    <?= do_shortcode("[sibwp_form id=2]"); ?>
                </div>
            </div>
        </div>
    </section>