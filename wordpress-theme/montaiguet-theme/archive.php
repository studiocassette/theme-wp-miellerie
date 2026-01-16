<?php
/**
 * Template for displaying archive pages
 *
 * @package Montaiguet
 * @since 1.0.0
 */

get_header();
?>

<main id="main" class="site-main archive-page">
    <div class="container">
        <header class="page-header">
            <?php
            the_archive_title('<h1 class="page-title">', '</h1>');
            the_archive_description('<div class="archive-description">', '</div>');
            ?>
        </header>
        
        <div class="archive-grid">
            <?php
            if (have_posts()) :
                while (have_posts()) : the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('archive-item'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="item-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('montaiguet-card'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="item-content">
                            <div class="item-meta">
                                <?php if (has_category()) : ?>
                                    <span class="category"><?php the_category(', '); ?></span>
                                <?php endif; ?>
                                <span class="date"><?php echo get_the_date(); ?></span>
                            </div>
                            
                            <h2 class="item-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            
                            <div class="item-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="read-more-btn">
                                Lire la suite →
                            </a>
                        </div>
                    </article>
                    <?php
                endwhile;
                
                the_posts_pagination(array(
                    'mid_size' => 2,
                    'prev_text' => __('&larr; Précédent', 'montaiguet'),
                    'next_text' => __('Suivant &rarr;', 'montaiguet'),
                ));
            else :
                ?>
                <p>Aucun contenu trouvé.</p>
                <?php
            endif;
            ?>
        </div>
    </div>
</main>

<?php
get_footer();
?>