<?php
/**
 * Template for displaying single posts
 *
 * @package Montaiguet
 * @since 1.0.0
 */

get_header();
?>

<main id="main" class="site-main single-post-page">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            $category = get_the_category();
            $prev_post = get_previous_post();
            $next_post = get_next_post();
            ?>

            <div class="single-post-container">
                <!-- Back to blog link -->
                <a href="<?php echo esc_url(home_url('/#blog')); ?>" class="back-to-blog">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    Retour au blog
                </a>

                <!-- Post header -->
                <header class="post-header">
                    <div class="post-meta-top">
                        <?php if (!empty($category)) : ?>
                            <span class="post-category-badge">
                                <?php echo esc_html($category[0]->name); ?>
                            </span>
                        <?php endif; ?>

                        <span class="post-date-meta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg>
                            <?php echo get_the_date('j F Y'); ?>
                        </span>
                    </div>

                    <h1 class="post-title"><?php the_title(); ?></h1>
                </header>

                <!-- Featured image -->
                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-featured-image">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php else : ?>
                    <div class="post-featured-placeholder">
                        <span class="placeholder-emoji">📝</span>
                    </div>
                <?php endif; ?>

                <!-- Post content -->
                <article class="post-content">
                    <?php the_content(); ?>
                </article>

                <!-- Post navigation -->
                <nav class="post-navigation">
                    <div class="nav-links">
                        <?php if ($prev_post) : ?>
                            <a href="<?php echo get_permalink($prev_post); ?>" class="nav-link nav-prev">
                                <div class="nav-link-inner">
                                    <span class="nav-label">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="m15 18-6-6 6-6"></path>
                                        </svg>
                                        Article précédent
                                    </span>
                                    <span class="nav-title"><?php echo get_the_title($prev_post); ?></span>
                                </div>
                            </a>
                        <?php else : ?>
                            <div class="nav-spacer"></div>
                        <?php endif; ?>

                        <?php if ($next_post) : ?>
                            <a href="<?php echo get_permalink($next_post); ?>" class="nav-link nav-next">
                                <div class="nav-link-inner">
                                    <span class="nav-label">
                                        Article suivant
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="m9 18 6-6-6-6"></path>
                                        </svg>
                                    </span>
                                    <span class="nav-title"><?php echo get_the_title($next_post); ?></span>
                                </div>
                            </a>
                        <?php else : ?>
                            <div class="nav-spacer"></div>
                        <?php endif; ?>
                    </div>
                </nav>
            </div>
            <?php
        endwhile;
        ?>
    </div>
</main>

<?php
get_footer();
?>