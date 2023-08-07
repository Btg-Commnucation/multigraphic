<article>
    <?php
    $args = array(
        "post_type" => "post",
        "posts_per_page" => -1,
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
    <?php endif; ?>
</article>