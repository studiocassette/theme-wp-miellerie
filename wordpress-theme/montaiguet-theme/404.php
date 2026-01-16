<?php
/**
 * 404 Error Page Template
 *
 * @package Montaiguet
 * @since 1.0.0
 */

get_header();
?>

<main id="main" class="site-main error-404">
    <div class="container">
        <div class="error-content">
            <h1 class="error-title">404</h1>
            <h2 class="error-subtitle">Page non trouvée</h2>
            <p class="error-description">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
                Retour à l'accueil
            </a>
            
            <div class="search-form-wrapper">
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
?>