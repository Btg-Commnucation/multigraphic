<?php
$current_product_id = get_the_ID();

$suggested_products = wc_get_related_products($current_product_id, 4);

if (!empty($suggested_products)) :
?>

    <section class="same-product">
        <div class="container-narrow">
            <h2>Produit similaires</h2>
            <ul class="products-container">
                <?php foreach ($suggested_products as $product_id) :
                    $product = wc_get_product($product_id);
                    $product_categories = wc_get_product_category_list($product_id);
                ?>
                    <li>
                        <a href="<?= get_permalink($product_id); ?>" class="product-link">
                            <?= $product->get_image(); ?>
                            <strong><?= $product->get_name(); ?></strong>
                            <ul>
                                <li><?= $product_categories ?></li>
                            </ul>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>

<?php endif; ?>