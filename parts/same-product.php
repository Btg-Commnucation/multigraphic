<?php
$current_product = wc_get_product(get_the_ID());

// Récupération des produits liés
$upsells = $current_product->get_upsell_ids();

if ($upsells) : ?>

    <section class="same-product">
        <div class="container-narrow">
            <h2>Produits suggérés</h2>
            <ul class="products-container">
                <?php foreach ($upsells as $upsell_id) :
                    $product = wc_get_product($upsell_id);
                    $product_categories = wc_get_product_category_list($upsell_id);
                ?>
                    <li>
                        <a href="<?= get_permalink($upsell_id); ?>" class="product-link">
                            <?= $product->get_image(); ?>
                            <strong><?= $product->get_name(); ?></strong>
                            <ul class="categories-same-product">
                                <li><?= $product_categories ?></li>
                            </ul>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>

<?php endif; ?>