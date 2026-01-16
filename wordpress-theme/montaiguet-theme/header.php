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

<header class="site-header">
    <nav class="main-navigation">
        <div class="container">
            <div class="nav-wrapper">
                <div class="site-logo">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-miellerie.png" 
                                 alt="<?php bloginfo('name'); ?>" class="logo-img">
                        </a>
                    <?php endif; ?>
                </div>
                
                <button class="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'primary-menu',
                    'container' => 'div',
                    'container_class' => 'menu-container',
                    'fallback_cb' => 'montaiguet_default_menu',
                ));
                ?>
            </div>
        </div>
    </nav>
</header>

<?php
function montaiguet_default_menu() {
    ?>
    <div class="menu-container">
        <ul class="primary-menu">
            <li><a href="<?php echo home_url('/'); ?>">Accueil</a></li>
            <li><a href="<?php echo home_url('/miels'); ?>">Nos Miels</a></li>
            <li><a href="<?php echo home_url('/points-de-vente'); ?>">Points de Vente</a></li>
            <li><a href="<?php echo home_url('/blog'); ?>">Blog</a></li>
            <li><a href="#contact">Nous contacter</a></li>
        </ul>
    </div>
    <?php
}
?>