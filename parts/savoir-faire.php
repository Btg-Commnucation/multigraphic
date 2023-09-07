<section class="savoir-faire">
    <div class="container-narrow">
        <h2>Notre savoir-faire</h2>
        <div class="sub-title">
            <div class="text">
                <?php the_field('texte_savoir_faire'); ?>
            </div>
            <?php $lien_savoir = get_field('lien_savoir_faire');
            ?>
            <a class="btn" href="<?= esc_url($lien_savoir['url']); ?>"><?= esc_html($lien_savoir['title']); ?></a>
        </div>
        <?php if (have_rows('savoir_faire')) : ?>
            <ul class="savoir">
                <?php while (have_rows('savoir_faire')) : the_row();
                    $image_savoir = get_sub_field('image');
                    $picto = get_sub_field('picto');
                ?>
                    <li>
                        <img src="<?= esc_url($image_savoir['url']); ?>" alt="<?= esc_attr($image_savoir['alt']); ?>" class="img-top">
                        <div class="text-content">
                            <div class="title">
                                <img src="<?= esc_url($picto['url']); ?>" alt="<?= esc_attr($picto['alt']); ?>" />
                                <strong><?php the_sub_field('titre'); ?></strong>
                            </div>
                            <p><?php the_sub_field('texte'); ?></p>
                        </div>
                    </li>
                <?php endwhile; ?>
            </ul>
        <?php endif; ?>
    </div>
</section>