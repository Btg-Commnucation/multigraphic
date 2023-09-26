<?php get_header(); ?>
<main id="single">
    <article>
        <div class="container-narrow">
            <a class="btn" href="<?= home_url("/les-actualites-multigraphic"); ?>">Retour aux articles</a>
            <h1><?php the_title(); ?></h1>
            <p class="date"><?php the_time("d/m/Y"); ?></p>
            <div class="content">
                <?php the_content(); ?>
            </div>
        </div>
    </article>
    <section class="same-theme">
        <div class="container-narrow">
            <h2>Sur le même thème</h2>

            <?php
            $args = array(
                "post_type" => "post",
                "posts_per_page" => 4,
                "post__not_in" => array(get_the_ID()),
                "tax_query" => array(
                    array(
                        "taxonomy" => "category",
                        "field" => "slug",
                        "terms" => get_the_category()[0]->slug
                    )
                )
            );
            $the_query = new WP_Query($args);
            if ($the_query->have_posts()) : ?>
                <ul class="posts">
                    <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                        <li>
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
        </div>
    </section>
</main>
<?php get_footer(); ?>