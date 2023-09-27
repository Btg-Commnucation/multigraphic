<?php
$category = get_queried_object();
$parent_id = $category->parent;
$parent_slug = null;
if ($parent_id) {
    $parent_category = get_term($parent_id, 'product_cat');
    $parent_slug = $parent_category->slug;
}

function display_categories($parent_id)
{
    $args = array(
        'taxonomy' => 'product_cat',
        'parent' => $parent_id,
    );

    $categories = get_terms($args);

    if ($categories) {
        echo '<ul class="filters-categories__container">';
        foreach ($categories as $category) {
            echo '<li class="filters_categories__item">';
            echo '<label for="' . $category->slug . '"><input class="checkbox" type="checkbox" id="' . $category->slug . '" name="' . $category->name . '" value="' . $category->slug . '"/>' . $category->name . '</label>';
            display_categories($category->term_id);
            echo '</li>';
        }
        echo '</ul>';
    }
}

function display_parent_categories($parent_id = 0)
{
    $args = array(
        'taxonomy' => 'product_cat',
        'parent' => $parent_id,
    );

    $categories = get_terms($args);

    if ($categories) {
        foreach ($categories as $category) {
            if ($parent_id === 0 && $category->name !== "Marques") {
                echo '<li class="category-title"><a href="' . get_term_link($category) . '">' . $category->name . '</a></li>';
            }
        }
    }
}

get_header(); ?>

<main id="boutique" class="category-product__page">
    <?php $img_top = get_field('image_de_fond', 'product_cat_' . $category->term_id); ?>
    <section class="hero-banner <?= $parent_slug === "marques" ? $parent_slug : '' ?>" style="background: url(<?= esc_url($img_top['url']); ?>) no-repeat center;">
        <div class="container-narrow">
            <h1 class="screen-reader-text"><?php the_title(); ?></h1>
            <div class="blue-content">
                <div class="txt">
                    <?php the_field('texte_court_marque', 'product_cat_' . $category->term_id); ?>
                </div>
            </div>
        </div>
    </section>
    <?php if ($parent_slug === "marques") : ?>
        <section class="marques-exclusive-content">
            <div class="container-narrow">
                <?php $image_marque = get_field('logo_marque');
                $marque_description = get_field('marque_description');
                ?>
                <img src="<?= esc_url($image_marque['url']); ?>" alt="<?= esc_attr($image_marque['alt']); ?>">
                <div class="text">
                    <?= $marque_description; ?>
                </div>
            </div>
        </section>
    <?php endif; ?>
    <section id="breadcrumbs" class="<?= $parent_slug === "marques" ? "marque-breadcrumb" : "" ?>">
        <div class="container-narrow">
            <nav id="breadcrumbs-container">
                <ul>
                    <li><a href="<?= home_url("/"); ?>">Accueil</a></li>
                    <li class="separator">/</li>
                    <?php $lien_boutique = get_field('lien_boutique', 'option'); ?>
                    <li><a href="<?= esc_url($lien_boutique['url']); ?>">Boutique</a></li>
                    <li class="separator">/</li>
                    <li id="last-breadcrumb"><?php the_title(); ?></li>
                </ul>
            </nav>
        </div>
    </section>
    <article>
        <div class="container-narrow">
            <section class="filters-section">
                <button class="btn" id="show-filters">
                    Filtres
                </button>
                <div class="background-black hidden">
                    <div class="filtre-container">
                        <img src="<?= get_template_directory_uri();
                                    ?>/public/close-blue.svg" alt="Fermer les filtres" id="close-filters">
                        <strong>Filtrer les produits</strong>
                        <ul class="filters-categories__container">
                            <li class="filters-categories__item">
                                <?php $shop_link = get_field('lien_boutique', 'option');
                                ?>
                                <a href="<?= esc_url($shop_link['url']);
                                            ?>">Tous les produits</a>
                            </li>
                            <?php if ($parent_slug !== 'marques') : ?>
                                <li class="filters-categories__item"><strong><?php the_title(); ?></strong></li>
                            <?php
                            endif;
                            display_categories($category->term_id);
                            display_parent_categories();
                            ?>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="products">
                <?php
                $descendants = get_term_children($category->term_id, 'product_cat');
                $categories = array_merge(array($category->term_id), $descendants);
                foreach ($descendants as $descendant) {
                    $grandchildren = get_term_children($descendant, 'product_cat');
                    $categories = array_merge($categories, $grandchildren);
                }
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => -1,
                    'tax_query' => array(
                        array(
                            'taxonomy'  => 'product_cat',
                            'field' => 'id',
                            'terms' => $categories,
                            'include_children' => true,
                        )
                    ),
                    'order' => 'DESC'
                );
                $products = new WP_Query($args);
                if ($products->have_posts()) :
                ?>
                    <ul class="products-container">
                        <?php while ($products->have_posts()) : $products->the_post();
                            $product = wc_get_product(get_the_ID());
                            $product_title = get_the_title();
                            $product_categories = get_the_terms(get_the_ID(), 'product_cat');
                            $product_image = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'full');
                        ?>
                            <li class="product-container product-element <?php if (!empty($product_categories)) {
                                                                                foreach ($product_categories as $category) {
                                                                                    echo $category->slug . ' ';
                                                                                }
                                                                            } ?>">
                                <a href="<?php the_permalink(); ?>" class="product-link">
                                    <?php if ($product_image) {
                                        echo '<div class="image-container"><img src="' . $product_image[0] . '" alt="' . $product_title . '" /><div class="overlay"><button class="btn">Voir la fiche produit</button></div></div>';
                                    }
                                    echo '<h3>' . $product_title . ' - ' . get_field('marque') . '</h3>';
                                    if (!empty($product_categories)) {
                                        echo '<ul class="product-categories">';
                                        foreach ($product_categories as $category) {
                                            echo $category->parent !== 47 ? '<li>' . $category->name . '</li>' : '';
                                        }
                                        echo '</ul>';
                                    }
                                    ?>
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                <?php wp_reset_query();
                endif; ?>
            </section>
        </div>
    </article>
    <section class="marques">
        <div class="container-narrow">
            <h2>Nos marques</h2>
            <div class="text"><?php the_field('texte_court_marque'); ?></div>
            <?php if (have_rows('logo_marque', 'option')) : ?>
                <ul class="marques-container">
                    <?php while (have_rows('logo_marque', 'option')) : the_row();
                        $img = get_sub_field('logo');
                        $marque = get_sub_field('marque');
                        if (!empty($marque)) {
                            echo '<li class="marque-list"><a href="' . get_term_link($marque[0]) . '"><img src="' . esc_url($img['url']) . '" alt="' . esc_attr($img['alt']) . '" title="' . esc_attr($img['title']) . '" /></a></li>';
                        } else {
                            echo '<li class="marque-list"><img src="' . esc_url($img['url']) . '" alt="' . esc_attr($img['alt']) . '" title="' . esc_attr($img['title']) . '" /></li>';
                        }
                    endwhile;
                    ?>
                </ul>
            <?php endif; ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>