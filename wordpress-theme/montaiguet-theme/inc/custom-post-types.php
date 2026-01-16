<?php
/**
 * Custom Post Types for Montaiguet Theme
 *
 * @package Montaiguet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// Register Honey Custom Post Type
function montaiguet_register_honey_post_type() {
    $labels = array(
        'name' => _x('Miels', 'Post type general name', 'montaiguet'),
        'singular_name' => _x('Miel', 'Post type singular name', 'montaiguet'),
        'menu_name' => _x('Miels', 'Admin Menu text', 'montaiguet'),
        'name_admin_bar' => _x('Miel', 'Add New on Toolbar', 'montaiguet'),
        'add_new' => __('Ajouter un miel', 'montaiguet'),
        'add_new_item' => __('Ajouter un nouveau miel', 'montaiguet'),
        'new_item' => __('Nouveau miel', 'montaiguet'),
        'edit_item' => __('Modifier le miel', 'montaiguet'),
        'view_item' => __('Voir le miel', 'montaiguet'),
        'all_items' => __('Tous les miels', 'montaiguet'),
        'search_items' => __('Rechercher des miels', 'montaiguet'),
        'not_found' => __('Aucun miel trouvé', 'montaiguet'),
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-food',
        'query_var' => true,
        'rewrite' => array('slug' => 'miels'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 20,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true,
    );
    
    register_post_type('honey', $args);
}
add_action('init', 'montaiguet_register_honey_post_type');

// Register Store Custom Post Type
function montaiguet_register_store_post_type() {
    $labels = array(
        'name' => _x('Points de Vente', 'Post type general name', 'montaiguet'),
        'singular_name' => _x('Point de Vente', 'Post type singular name', 'montaiguet'),
        'menu_name' => _x('Points de Vente', 'Admin Menu text', 'montaiguet'),
        'name_admin_bar' => _x('Point de Vente', 'Add New on Toolbar', 'montaiguet'),
        'add_new' => __('Ajouter un point de vente', 'montaiguet'),
        'add_new_item' => __('Ajouter un nouveau point de vente', 'montaiguet'),
        'new_item' => __('Nouveau point de vente', 'montaiguet'),
        'edit_item' => __('Modifier le point de vente', 'montaiguet'),
        'view_item' => __('Voir le point de vente', 'montaiguet'),
        'all_items' => __('Tous les points de vente', 'montaiguet'),
        'search_items' => __('Rechercher des points de vente', 'montaiguet'),
        'not_found' => __('Aucun point de vente trouvé', 'montaiguet'),
    );
    
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-location',
        'query_var' => true,
        'rewrite' => array('slug' => 'points-de-vente'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 21,
        'supports' => array('title', 'editor', 'thumbnail'),
        'show_in_rest' => true,
    );
    
    register_post_type('store', $args);
}
add_action('init', 'montaiguet_register_store_post_type');

?>