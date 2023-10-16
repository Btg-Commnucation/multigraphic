<?php get_header();
$shop_link = get_field('lien_boutique', 'option');
?>

<main id="product">
    <section class="breadcrumbs">
        <nav id="breadcrumbs">
            <ul>
                <li><a href="<?= get_home_url('/'); ?>">Accueil</a></li>
                <li class="divider">/</li>
                <li><a href="<?= esc_url($shop_link['url']); ?>">Boutique</a></li>
                <li class="divider">/</li>
                <?php $product_categories = get_the_terms($post->ID, 'product_cat');
                if ($product_categories) :
                    foreach ($product_categories as $category) {
                        echo '<li><a href="' . esc_url($shop_link['url'] . '?category=' . $category->slug . '') . '">' . $category->name . '</a></li><li class="divider">/</li>';
                    }
                endif;
                ?>
                <li><?php the_title(); ?></li>
            </ul>
        </nav>
    </section>
    <section class="hero-banner">
        <div class="container-narrow">
            <div class="galleries">
                <?php get_template_part('parts/swiper'); ?>
            </div>
            <div class="content">
                <?php $logo_marque = get_field('logo_marque'); ?>
                <img src="<?= esc_url($logo_marque['url']); ?>" alt="<?= esc_attr($logo_marque['alt']); ?>" class="logo">
                <h1><?php the_title(); ?> - <?php the_field('marque'); ?></h1>
                <div class="text">
                    <?php the_excerpt(); ?>
                </div>
                <?php $file_link = get_field('lien_brochure');
                if ($file_link) :
                    $file_target = $file_link['target'] ? $file_link['target'] : '_self';
                ?>
                    <a href="<?= esc_url($file_link['url']); ?>" title="<?= esc_html($file_link['title']); ?>" target="<?= esc_attr($file_target); ?>" class="btn download">
                        <?php get_template_part('parts/download-svg'); ?>
                        Télécharger la brochure
                    </a>
                <?php endif; ?>
                <button class="btn brochure" id="devis-toggle">
                    <?php get_template_part("parts/brochure"); ?>
                    Demande de devis
                </button>
            </div>
        </div>
    </section>
    <article class="contenu-flexible">
        <?php get_template_part('parts/flexible-content'); ?>
    </article>
    <section class="specs">
        <div class="container-narrow">
            <?php if (get_the_content()) : ?>
                <h2>
                    Tableau des spécifications
                </h2>
                <?php if (get_field('plusieurs_modeles' === "Non")) {
                    echo '<div class="specs-content">';
                    the_content();
                    echo '</div>';
                } else {
                    get_template_part('parts/specs-table');
                }
                ?>
            <?php endif; ?>
        </div>
    </section>
    <?php get_template_part('parts/same-product'); ?>
    <?php get_template_part('parts/devis'); ?>
</main>

<?php get_footer(); ?>