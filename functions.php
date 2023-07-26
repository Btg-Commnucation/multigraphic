<?php
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

add_filter('script_loader_tag', 'load_as_ES6', 10, 3);

function load_as_ES6($tag, $handle, $source)
{
    if ('btg-script' === $handle) {
        $tag = '<script src="' . $source . '" type="module" ></script>';
    }
    return $tag;
};

function btg_register_assets()
{
    wp_enqueue_style('btg-style', get_template_directory_uri() . '/dist/index.css', 1.0);
    wp_enqueue_script('btg-script', get_template_directory_uri() . '/dist/index.js', [], 1.0, true);
}

add_filter('show_admin_bar', '__return_false');
add_action('wp_enqueue_scripts', 'btg_register_assets');

register_nav_menus([
    'main-menu' => 'Menu Principal',
    'societe-menu' => 'Menu société Mutligraphic',
    'menu-products' => 'Menu nos produits',
]);
