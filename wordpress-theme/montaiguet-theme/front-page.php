<?php
/**
 * Front Page Template - Homepage
 *
 * @package Montaiguet
 * @since 1.0.0
 */

get_header();
?>

<main id="main" class="site-main homepage">
    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-background">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-antoine-apiculteur.jpg" 
                 alt="Antoine Riondet, apiculteur de la Miellerie du Montaiguet" 
                 class="hero-image">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content">
            <div class="container">
                <div class="hero-inner">
                    <div class="hero-logo">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-miellerie.png" 
                             alt="Miellerie du Montaiguet">
                    </div>
                    
                    <div class="hero-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Lauréat 2025
                        <span class="badge-subtitle">Prix Agricole des Produits de Provence</span>
                    </div>
                    
                    <h1 class="hero-title">
                        Miel Artisanal
                        <span class="hero-subtitle">100% Bio de Provence</span>
                    </h1>
                    
                    <p class="hero-description">
                        <?php 
                        echo esc_html(get_theme_mod('montaiguet_hero_subtitle', 
                            'Découvrez nos miels d\'exception, récoltés avec passion dans les plus beaux terroirs de Provence par Antoine Riondet.'
                        )); 
                        ?>
                    </p>
                    
                    <div class="hero-certifications">
                        <span class="cert-badge">IGP Miels de Provence</span>
                        <span class="cert-badge">Agriculture Biologique</span>
                        <span class="cert-badge">FR-BIO-16</span>
                    </div>
                    
                    <div class="hero-stats">
                        <div class="stat-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>300 ruches</span>
                        </div>
                        <div class="stat-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>7 variétés</span>
                        </div>
                        <div class="stat-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Provence</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator">
                <div class="scroll-mouse">
                    <div class="scroll-wheel"></div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Honey Collection Section -->
    <section id="miels" class="honey-section">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Notre Collection</span>
                <h2 class="section-title">Nos Miels d'Exception</h2>
                <p class="section-description">
                    Six variétés uniques révélant les secrets des terroirs provençaux, 
                    récoltées avec passion et certifiées Agriculture Biologique.
                </p>
            </div>
            
            <div class="honey-featured-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/honey-collection.jpg" 
                     alt="Collection des miels de la Miellerie du Montaiguet">
                <div class="featured-quote">
                    "Le miel est le reflet du terroir et du travail des abeilles"
                </div>
            </div>
            
            <div class="honey-grid">
                <?php
                // Query honey post type
                $honey_query = new WP_Query(array(
                    'post_type' => 'honey',
                    'posts_per_page' => -1,
                    'orderby' => 'menu_order',
                    'order' => 'ASC',
                ));
                
                if ($honey_query->have_posts()) :
                    while ($honey_query->have_posts()) : $honey_query->the_post();
                        $icon = get_post_meta(get_the_ID(), '_honey_icon', true);
                        $usage = get_post_meta(get_the_ID(), '_honey_usage', true);
                        $format = get_post_meta(get_the_ID(), '_honey_format', true) ?: '500g';
                        ?>
                        <div class="honey-card">
                            <div class="honey-icon"><?php echo esc_html($icon); ?></div>
                            <h3 class="honey-name"><?php the_title(); ?></h3>
                            <p class="honey-description"><?php the_excerpt(); ?></p>
                            <?php if ($usage) : ?>
                                <div class="honey-usage">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                    <span><?php echo esc_html($usage); ?></span>
                                </div>
                            <?php endif; ?>
                            <div class="honey-format">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <span><?php echo esc_html($format); ?> • Bio • IGP Provence</span>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else:
                    // Default honey types if no custom posts exist
                    $default_honeys = array(
                        array('icon' => '🌸', 'name' => 'Miel de Lavande', 'desc' => 'Doux et parfumé, aux notes florales subtiles', 'usage' => 'Idéal sur les tartines et dans les tisanes'),
                        array('icon' => '🌿', 'name' => 'Miel de Garrigue', 'desc' => 'Caractère authentique des plantes sauvages', 'usage' => 'Parfait avec les fromages de chèvre'),
                        array('icon' => '🌰', 'name' => 'Miel de Châtaignier', 'desc' => 'Puissant et corsé, aux notes boisées', 'usage' => 'Excellent dans les plats salés'),
                        array('icon' => '🌱', 'name' => 'Miel de Romarin', 'desc' => 'Cristallisé fin, au goût délicat', 'usage' => 'Idéal pour la cuisine méditerranéenne'),
                        array('icon' => '⛰️', 'name' => 'Miel de Montagne', 'desc' => 'Mélange complexe des fleurs d\'altitude', 'usage' => 'Parfait nature ou avec du pain complet'),
                        array('icon' => '🌻', 'name' => 'Miel de Fleurs de Provence', 'desc' => 'Symphonie florale de tout le terroir', 'usage' => 'Polyvalent pour tous usages'),
                    );
                    
                    foreach ($default_honeys as $honey) :
                        ?>
                        <div class="honey-card">
                            <div class="honey-icon"><?php echo $honey['icon']; ?></div>
                            <h3 class="honey-name"><?php echo $honey['name']; ?></h3>
                            <p class="honey-description"><?php echo $honey['desc']; ?></p>
                            <div class="honey-usage">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                                <span><?php echo $honey['usage']; ?></span>
                            </div>
                            <div class="honey-format">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <span>500g • Bio • IGP Provence</span>
                            </div>
                        </div>
                        <?php
                    endforeach;
                endif;
                ?>
            </div>
        </div>
    </section>
    
    <!-- Store Locator Section -->
    <section id="points-de-vente" class="stores-section">
        <div class="container">
            <div class="section-header">
                <span class="section-badge primary-badge">Où Nous Trouver</span>
                <h2 class="section-title">Points de Vente</h2>
                <p class="section-description">
                    Retrouvez nos miels directement à la miellerie, sur les marchés 
                    et chez nos partenaires revendeurs en Provence.
                </p>
            </div>
            
            <div id="store-map" class="store-map"></div>
            
            <div class="stores-grid">
                <?php
                $stores_query = new WP_Query(array(
                    'post_type' => 'store',
                    'posts_per_page' => -1,
                    'orderby' => 'menu_order',
                    'order' => 'ASC',
                ));
                
                if ($stores_query->have_posts()) :
                    while ($stores_query->have_posts()) : $stores_query->the_post();
                        $address = get_post_meta(get_the_ID(), '_store_address', true);
                        $type = get_post_meta(get_the_ID(), '_store_type', true);
                        $hours = get_post_meta(get_the_ID(), '_store_hours', true);
                        $latitude = get_post_meta(get_the_ID(), '_store_latitude', true);
                        $longitude = get_post_meta(get_the_ID(), '_store_longitude', true);
                        ?>
                        <div class="store-card" data-lat="<?php echo esc_attr($latitude); ?>" data-lng="<?php echo esc_attr($longitude); ?>">
                            <div class="store-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <div class="store-info">
                                <h3 class="store-name"><?php the_title(); ?></h3>
                                <p class="store-address"><?php echo esc_html($address); ?></p>
                                <div class="store-meta">
                                    <?php if ($type) : ?>
                                        <span class="store-type"><?php echo esc_html($type); ?></span>
                                    <?php endif; ?>
                                    <?php if ($hours) : ?>
                                        <span class="store-hours">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            <?php echo esc_html($hours); ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>
    
    <!-- Blog Section -->
    <section id="blog" class="blog-section">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Actualités</span>
                <h2 class="section-title">Notre Blog</h2>
                <p class="section-description">
                    Suivez nos aventures apicoles, découvrez nos conseils 
                    et restez informés de nos dernières actualités.
                </p>
            </div>
            
            <div class="blog-grid">
                <?php
                $blog_query = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                    'orderby' => 'date',
                    'order' => 'DESC',
                ));
                
                if ($blog_query->have_posts()) :
                    while ($blog_query->have_posts()) : $blog_query->the_post();
                        $category = get_the_category();
                        ?>
                        <article class="blog-card">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="blog-thumbnail">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('montaiguet-card'); ?>
                                    </a>
                                </div>
                            <?php else : ?>
                                <div class="blog-placeholder">
                                    <span class="placeholder-icon">🐝</span>
                                </div>
                            <?php endif; ?>
                            
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <?php if (!empty($category)) : ?>
                                        <span class="blog-category"><?php echo esc_html($category[0]->name); ?></span>
                                    <?php endif; ?>
                                    <span class="blog-date">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <?php echo get_the_date(); ?>
                                    </span>
                                </div>
                                
                                <h3 class="blog-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                                
                                <div class="blog-excerpt">
                                    <?php the_excerpt(); ?>
                                </div>
                                
                                <a href="<?php the_permalink(); ?>" class="blog-link">
                                    Lire la suite
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <span class="section-badge">Contact</span>
                    <h2 class="section-title">Nous Contacter</h2>
                    <p class="section-description">
                        Une question sur nos miels ou nos points de vente ? 
                        N'hésitez pas à nous écrire, nous vous répondrons avec plaisir.
                    </p>
                    
                    <div class="contact-details">
                        <div class="contact-detail-item">
                            <div class="detail-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4>Adresse</h4>
                                <p><?php echo nl2br(esc_html(get_theme_mod('montaiguet_address', '3357 chemin de la plaine du Montaiguet<br>13590 Meyreuil'))); ?></p>
                            </div>
                        </div>
                        
                        <div class="contact-detail-item">
                            <div class="detail-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4>Téléphone</h4>
                                <p><?php echo esc_html(get_theme_mod('montaiguet_phone', '04 42 58 XX XX')); ?></p>
                            </div>
                        </div>
                        
                        <div class="contact-detail-item">
                            <div class="detail-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p><?php echo esc_html(get_theme_mod('montaiguet_email', 'contact@miellerie-montaiguet.fr')); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-wrapper">
                    <form id="contact-form" class="contact-form" method="post">
                        <div class="form-group">
                            <label for="contact_name">Nom complet *</label>
                            <input type="text" id="contact_name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="contact_email">Email *</label>
                            <input type="email" id="contact_email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="contact_phone">Téléphone</label>
                            <input type="tel" id="contact_phone" name="phone">
                        </div>
                        
                        <div class="form-group">
                            <label for="contact_message">Message *</label>
                            <textarea id="contact_message" name="message" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" class="btn-submit">
                            Envoyer le message
                        </button>
                        
                        <div class="form-message"></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
?>
