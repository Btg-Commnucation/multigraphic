<section class="slider-front">
    <?php if (have_rows('caroussel')) :
        $args = array(
            'taxonomy'     => 'product_cat',
            'orderby'      => 'name',
            'show_count'   => 0,
            'pad_counts'   => 0,
            'hierarchical' => 1,
            'title_li'     => '',
            'hide_empty'   => 0,
        );

        $categories = get_categories($args);
    ?>
        <div class="blue-background"></div>
        <div class="swiper cate-swiper">
            <div class="swiper-wrapper">
                <?php while (have_rows('caroussel')) : the_row();
                    $image = get_sub_field('image');
                    $category_object = get_sub_field('choix_de_la_categorie');
                    $shop_link = get_field('lien_boutique', 'option');
                    $parent_category;

                    foreach ($categories as $category) {
                        if ($category->term_id === $category_object->parent) {
                            $parent_category = $category;
                        }
                    }
                ?>
                    <div class="swiper-slide">
                        <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>">
                        <div class="content">
                            <?php the_sub_field('texte'); ?>
                            <a href="<?= get_term_link($parent_category) . '?category=' . $category_object->slug ?>" class="btn">Toutes nos <?= esc_html($category_object->name); ?></a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    <?php endif; ?>
</section>