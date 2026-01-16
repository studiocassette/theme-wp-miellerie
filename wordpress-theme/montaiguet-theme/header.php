<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Header -->
<header class="site-header" id="site-header">
    <div class="container">
        <div class="nav-wrapper">
            <!-- Logo -->
            <div class="site-logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="logo-link">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-miellerie.png" 
                             alt="<?php bloginfo('name'); ?>" class="logo-img">
                    </a>
                <?php endif; ?>
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="desktop-nav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'primary-menu',
                    'container' => false,
                    'fallback_cb' => 'montaiguet_default_menu',
                ));
                ?>
            </nav>
            
            <!-- CTA Button -->
            <div class="header-cta">
                <a href="#contact" class="btn-contact">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Nous contacter
                </a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" aria-label="Menu" id="mobile-menu-toggle">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Menu Overlay -->
<div class="mobile-menu-overlay" id="mobile-menu-overlay">
    <div class="mobile-menu-backdrop"></div>
    <div class="mobile-menu-content">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-miellerie.png" 
             alt="<?php bloginfo('name'); ?>" class="mobile-menu-logo">
        
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_class' => 'mobile-menu-list',
            'container' => false,
            'fallback_cb' => 'montaiguet_mobile_menu',
        ));
        ?>
        
        <a href="#contact" class="btn-contact-mobile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Nous contacter
        </a>
    </div>
</div>

<?php
function montaiguet_default_menu() {
    ?>
    <ul class="primary-menu">
        <li><a href="#miels">Nos Miels</a></li>
        <li><a href="#points-de-vente">Points de Vente</a></li>
        <li><a href="#blog">Blog</a></li>
    </ul>
    <?php
}

function montaiguet_mobile_menu() {
    ?>
    <ul class="mobile-menu-list">
        <li><a href="#miels">Nos Miels</a></li>
        <li><a href="#points-de-vente">Points de Vente</a></li>
        <li><a href="#blog">Blog</a></li>
    </ul>
    <?php
}
?>