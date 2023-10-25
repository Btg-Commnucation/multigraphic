<article>
    <?php
    $pages = (get_query_var('paged')) ? get_query_var('paged') : 1;

    $args = array(
        "post_type" => "post",
        "posts_per_page" => 16,
        "post__not_in" => array(get_the_ID()),
        'paged' => $paged
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
        <?php $pagination_args = array(
            'base' => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
            'format' => '?paged=%#%',
            'current' => max(1, $paged),
            'total' => $the_query->max_num_pages
        ); ?>
        <div class="pagination">
            <?php echo paginate_links($pagination_args); ?>
        </div>

    <?php endif; ?>
</article>