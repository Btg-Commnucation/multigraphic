<?php if (have_rows('galleries_dimage')) : ?>
    <div class="swiper">
        <div class="swiper-wrapper">
            <?php while (have_rows('galleries_dimage')) : the_row(); ?>
                <div class="swiper-slide">
                    <?php $image_slider = get_sub_field('image'); ?>
                    <img src="<?= esc_url($image_slider['url']) ?>" alt="<?= esc_attr($image_slider['alt']); ?>">
                </div>
            <?php endwhile; ?>
        </div>
    </div>
<?php
endif; ?>
<?php if (have_rows('galleries_dimage')) :
    $galleries = get_field('galleries_dimage');
?>
    <div class="swiper-thumbs">
        <div class="swiper-wrapper">
            <?php while (have_rows('galleries_dimage')) : the_row(); ?>
                <div class="swiper-slide">
                    <?php $image_slider = get_sub_field('image'); ?>
                    <img src="<?= esc_url($image_slider['url']) ?>" alt="<?= esc_attr($image_slider['alt']); ?>">
                </div>
            <?php endwhile;
            ?>
        </div>
    </div>
<?php
endif; ?>