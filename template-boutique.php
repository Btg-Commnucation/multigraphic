<?php
/*
Template Name: Boutique
*/
get_header();

function display_categories($parent_id = 0)
{
    $args = array(
        'taxonomy' => 'product_cat',
        'parent' => $parent_id,
    );

    $categories = get_categories($args);

    if ($categories) {
        echo '<ul class="filters-categories__container">';
        foreach ($categories as $category) {
            echo '<li class="filters-categories__item">';
            echo '<label for="' . $category->slug . '"><input type="checkbox" name="' . $category->slug . '" value="' . $category->slug . '"/>' . $category->name . '</label>';
            display_categories($category->term_id);
            echo '</li>';
        }
        echo '</ul>';
    }
}
?>
<main id="boutique">
    <?php $img_top = get_field('image_de_fond'); ?>
    <section class="hero-banner" style="background: url(<?= esc_url($img_top['url']); ?>) no-repeat center;">
        <div class="container-narrow">
            <h1 class="screen-reader-text"><?php the_title(); ?></h1>
            <div class="blue-content">
                <div class="txt">
                    <?php the_field('texte_haut_de_page'); ?>
                </div>
            </div>
        </div>
    </section>
    <section id="breadcrumbs">
        <div class="container-narrow">
            <nav id="breadcrumbs-container">
                <ul>
                    <li><a href="<?= home_url("/"); ?>">Accueil</a></li>
                    <li class="separator">/</li>
                    <?php $lien_boutique = get_field('lien_boutique', 'option'); ?>
                    <li><a href="<?= esc_url($lien_boutique['url']); ?>">Boutique</a></li>
                    <li class="separator">/</li>
                    <li id="last-breadcrumb">Tous les produits</li>
                </ul>
            </nav>
        </div>
    </section>
    <article>
        <div class="container-narrow">
            <section class="filters-section">
                <strong>Filtrer les produits</strong>
                <?php display_categories(); ?>
            </section>
            <section class="products">
                <?php $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => -1,
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
                            <li class="product-container <?php
                                                            if (!empty($product_categories)) {
                                                                foreach ($product_categories as $category) {
                                                                    echo $category->slug . ' ';
                                                                }
                                                            }
                                                            ?>">
                                <a href="<?php the_permalink(); ?>" class="product-link">
                                    <?php if ($product_image) {
                                        echo '<div class="image-container">
                                            <img src="' . $product_image[0] . '" alt="' . $product_title . '" />
                                            <div class="overlay"><button class="btn">Voir la fiche produit</button></div>
                                        </div>';
                                    }
                                    echo '<h3>' . $product_title . '</h3>';

                                    if (!empty($product_categories)) {
                                        echo '<ul class="product-categories">';
                                        foreach ($product_categories as $category) {
                                            echo '<li>' . $category->name . '</li>';
                                        }
                                        echo '</ul>';
                                    }

                                    ?>
                                </a>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                <?php wp_reset_postdata();
                endif; ?>
            </section>
        </div>
    </article>
</main>
<?php get_footer(); ?>