<?php if (have_rows('bloc_de_contenu')) : ?>
    <?php while (have_rows('bloc_de_contenu')) : the_row(); ?>
        <?php if (get_row_layout() === 'video') : ?>
            <div class="video">
                <div class="blue-background"></div>
                <?php the_sub_field('lien_video'); ?>
            </div>
        <?php endif; ?>
    <?php endwhile; ?>
<?php endif; ?>