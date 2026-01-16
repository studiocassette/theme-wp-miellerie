<?php
/**
 * Widget Areas
 *
 * @package Montaiguet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function montaiguet_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'montaiguet'),
        'id' => 'sidebar-1',
        'description' => __('Widgets pour la barre latérale', 'montaiguet'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer', 'montaiguet'),
        'id' => 'footer-1',
        'description' => __('Widgets pour le footer', 'montaiguet'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h4 class="widget-title">',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'montaiguet_widgets_init');

?>