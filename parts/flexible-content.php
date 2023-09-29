<?php if (have_rows('bloc_de_contenu')) : ?>
    <?php while (have_rows('bloc_de_contenu')) : the_row(); ?>
        <?php if (get_row_layout() === 'video') : ?>
            <div class="video">
                <div class="blue-background"></div>
                <?php the_sub_field('lien_video'); ?>
            </div>

        <?php elseif (get_row_layout() === 'text') : ?>
            <div class="text-flexible"><?php the_sub_field('texte'); ?></div>
        <?php elseif (get_row_layout() === 'image_+_texte') : ?>
            <div class="image-texte-flexible">
                <?php $image = get_sub_field('image'); ?>
                <img src="<?= esc_url($image['url']) ?>" alt="<?= esc_attr($image['alt']); ?>">
                <div class="text-flexible"><?php the_sub_field('texte'); ?></div>
            </div>
        <?php endif; ?>
    <?php endwhile; ?>
<?php endif; ?>