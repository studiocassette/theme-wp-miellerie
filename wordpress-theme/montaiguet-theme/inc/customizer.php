<?php
/**
 * Theme Customizer
 *
 * @package Montaiguet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function montaiguet_customize_register($wp_customize) {
    // Add Montaiguet Settings Section
    $wp_customize->add_section('montaiguet_settings', array(
        'title' => __('Paramètres Miellerie', 'montaiguet'),
        'priority' => 30,
    ));
    
    // Mapbox API Token
    $wp_customize->add_setting('montaiguet_mapbox_token', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('montaiguet_mapbox_token', array(
        'label' => __('Token API Mapbox', 'montaiguet'),
        'description' => __('Entrez votre token API Mapbox pour afficher la carte des points de vente. Obtenez-le gratuitement sur mapbox.com', 'montaiguet'),
        'section' => 'montaiguet_settings',
        'type' => 'text',
    ));
    
    // Contact Information
    $wp_customize->add_setting('montaiguet_address', array(
        'default' => '3357 chemin de la plaine du Montaiguet, 13590 Meyreuil',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('montaiguet_address', array(
        'label' => __('Adresse', 'montaiguet'),
        'section' => 'montaiguet_settings',
        'type' => 'textarea',
    ));
    
    $wp_customize->add_setting('montaiguet_phone', array(
        'default' => '04 42 58 XX XX',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('montaiguet_phone', array(
        'label' => __('Téléphone', 'montaiguet'),
        'section' => 'montaiguet_settings',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('montaiguet_email', array(
        'default' => 'contact@miellerie-montaiguet.fr',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('montaiguet_email', array(
        'label' => __('Email', 'montaiguet'),
        'section' => 'montaiguet_settings',
        'type' => 'email',
    ));
    
    // Hero Section Text
    $wp_customize->add_setting('montaiguet_hero_subtitle', array(
        'default' => 'Découvrez nos miels d’exception, récoltés avec passion dans les plus beaux terroirs de Provence par Antoine Riondet.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('montaiguet_hero_subtitle', array(
        'label' => __('Texte Hero Section', 'montaiguet'),
        'section' => 'montaiguet_settings',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'montaiguet_customize_register');

?>