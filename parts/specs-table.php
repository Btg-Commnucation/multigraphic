<?php if (have_rows('tableau')) : ?>
    <?php while (have_rows('tableau')) : the_row(); ?>
        <div class="specs-content table-vers">
            <?php if (have_rows('ligne')) : ?>
                <?php while (have_rows('ligne')) : the_row(); ?>
                    <p><?php the_sub_field('propriete'); ?></p>
            <?php endwhile;
            endif; ?>
        </div>
<?php endwhile;
endif; ?>