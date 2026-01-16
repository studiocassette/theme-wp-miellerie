<?php
/**
 * Miellerie du Montaiguet Theme Functions
 *
 * @package Montaiguet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Theme Setup
function montaiguet_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');
    
    // Let WordPress manage the document title
    add_theme_support('title-tag');
    
    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 675, true);
    
    // Add custom image sizes
    add_image_size('montaiguet-hero', 1920, 1080, true);
    add_image_size('montaiguet-card', 600, 400, true);
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'montaiguet'),
        'footer' => __('Menu Footer', 'montaiguet'),
    ));
    
    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');
    
    // Add support for editor styles
    add_theme_support('editor-styles');
    
    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'montaiguet_setup');

// Enqueue styles and scripts
function montaiguet_enqueue_scripts() {
    // Main stylesheet
    wp_enqueue_style('montaiguet-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom CSS
    wp_enqueue_style('montaiguet-custom', get_template_directory_uri() . '/assets/css/custom.css', array('montaiguet-style'), '1.0.0');
    
    // Mapbox CSS
    wp_enqueue_style('mapbox-gl-css', 'https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css', array(), '3.1.0');
    
    // Main JavaScript
    wp_enqueue_script('montaiguet-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Mapbox JavaScript
    wp_enqueue_script('mapbox-gl-js', 'https://api.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.js', array(), '3.1.0', true);
    
    // Mapbox initialization
    wp_enqueue_script('montaiguet-mapbox', get_template_directory_uri() . '/assets/js/mapbox-init.js', array('jquery', 'mapbox-gl-js'), '1.0.0', true);
    
    // Pass Mapbox token to JavaScript
    $mapbox_token = get_theme_mod('montaiguet_mapbox_token', '');
    wp_localize_script('montaiguet-mapbox', 'MAPBOX_TOKEN', $mapbox_token);
    
    // Localize script for AJAX
    wp_localize_script('montaiguet-main', 'montaiguet_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('montaiguet_nonce'),
    ));
    
    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'montaiguet_enqueue_scripts');

// Include custom post types
require get_template_directory() . '/inc/custom-post-types.php';

// Include custom fields
require get_template_directory() . '/inc/custom-fields.php';

// Include theme customizer
require get_template_directory() . '/inc/customizer.php';

// Include widgets
require get_template_directory() . '/inc/widgets.php';

// Contact form handler
function montaiguet_contact_form_handler() {
    check_ajax_referer('montaiguet_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_option('admin_email');
    $subject = 'Nouveau message depuis le site - Miellerie du Montaiguet';
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Téléphone: $phone\n\n";
    $body .= "Message:\n$message";
    
    $headers = array('Content-Type: text/html; charset=UTF-8', "From: $name <$email>");
    
    if (wp_mail($to, $subject, nl2br($body), $headers)) {
        wp_send_json_success(array('message' => 'Message envoyé avec succès !'));
    } else {
        wp_send_json_error(array('message' => 'Erreur lors de l\'envoi du message.'));
    }
}
add_action('wp_ajax_montaiguet_contact_form', 'montaiguet_contact_form_handler');
add_action('wp_ajax_nopriv_montaiguet_contact_form', 'montaiguet_contact_form_handler');

// Custom excerpt length
function montaiguet_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'montaiguet_excerpt_length');

// Custom excerpt more
function montaiguet_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'montaiguet_excerpt_more');

// Remove unnecessary WordPress head elements
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wp_shortlink_wp_head');

?>