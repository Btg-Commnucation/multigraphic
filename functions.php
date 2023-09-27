<?php
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Theme General Settings',
        'menu_title' => 'Theme Settings',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false,
        'position' => '2'
    ));
}

add_filter('script_loader_tag', 'load_as_ES6', 10, 3);

function load_as_ES6($tag, $handle, $source)
{
    if ('btg-script' === $handle) {
        $tag = '<script type="module" src="' . $source . '" ></script>';
    }
    return $tag;
};

function btg_register_assets()
{
    wp_enqueue_style('btg-style', get_template_directory_uri() . '/dist/index.fa6460a9.css', 1.0);
    // wp_enqueue_script('btg-script', get_template_directory_uri() . '/dist/index.314bee02.js', [], 1.0, false);
    wp_enqueue_script('btg-script', get_template_directory_uri() . '/dist/index.9b68b7ee.js', [], 1.0, true);
}

add_filter('show_admin_bar', '__return_false');
add_action('wp_enqueue_scripts', 'btg_register_assets');

register_nav_menus([
    'main-menu' => 'Menu Principal',
    'societe-menu' => 'Menu société Mutligraphic',
    'menu-products' => 'Menu nos produits',
    'footer-menu' => 'Menu bas de page'
]);
