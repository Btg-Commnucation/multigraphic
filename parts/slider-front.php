<section class="slider-front">
    <?php if (have_rows('caroussel')) : ?>
        <div class="blue-background"></div>
        <div class="swiper cate-swiper">
            <div class="swiper-wrapper">
                <?php while (have_rows('caroussel')) : the_row();
                    $image = get_sub_field('image');
                    $category_object = get_sub_field('choix_de_la_categorie');
                    $shop_link = get_field('lien_boutique', 'option');
                ?>
                    <div class="swiper-slide">
                        <img src="<?= esc_url($image['url']); ?>" alt="<?= esc_attr($image['alt']); ?>">
                        <div class="content">
                            <?php the_sub_field('texte'); ?>
                            <a href="<?= esc_url($shop_link['url']) . '?category=' . esc_html($category_object->slug); ?>" class="btn">Toutes nos <?= esc_html($category_object->name); ?></a>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    <?php endif; ?>
</section>