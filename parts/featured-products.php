<section class="featured-products">
    <div class="container-narrow">
        <h2>Nos produits à la une</h2>
        <?php $args = array(
            'post_type' => 'product',
            'posts_per_page' => 4,
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
                    <li class="product-container">
                        <a href="<?php the_permalink(); ?>" class="product-link">
                            <?php if ($product_image) {
                                echo '<div class="image-container">
                                            <img src="' . $product_image[0] . '" alt="' . $product_title . '" />
                                            <div class="overlay"><button class="btn">Voir la fiche produit</button></div>
                                        </div>';
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
        <?php wp_reset_postdata();
        endif; ?>
    </div>
</section>