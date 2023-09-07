<section class="featured-news">
    <div class="container-narrow">
        <h2>Nos dernières actualités</h2>

        <div class="sub-title">
            <div class="text">
                <?php the_field('texte_actualites'); ?>
            </div>
            <?php $lien_news = get_field('lien_actualites'); ?>
            <a class="btn" href="<?= esc_url($lien_news['url']); ?>"><?= esc_html($lien_news['title']); ?></a>
        </div>
        <?php
        $args = array(
            "post_type" => "post",
            "posts_per_page" => 4,
            "post__not_in" => array(get_the_ID()),
        );
        $the_query = new WP_Query($args);
        if ($the_query->have_posts()) : ?>
            <ul class="posts">
                <?php while ($the_query->have_posts()) : $the_query->the_post();
                    $post_categories = get_the_category();
                ?>
                    <li class="<?php foreach ($post_categories as $category) {
                                    echo $category->slug . " ";
                                } ?>">
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail(); ?>
                        </a>
                        <div class="post-content">
                            <h4><?php the_title(); ?></h4>
                            <p class="date"><?php the_time("d/m/Y"); ?></p>
                            <div><?php the_excerpt(); ?></div>
                            <a href="<?php the_permalink(); ?>">Lire la suite</a>
                        </div>
                    </li>
                <?php endwhile; ?>
            </ul>
        <?php wp_reset_postdata();
        endif; ?>
    </div>
</section>