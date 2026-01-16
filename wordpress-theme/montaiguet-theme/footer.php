<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-column footer-about">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-miellerie.png" 
                     alt="<?php bloginfo('name'); ?>" class="footer-logo">
                <p class="footer-description">
                    Nous produisons des miels d'exception dans le respect des traditions apicoles 
                    provençales et du bien-être de nos abeilles.
                </p>
                <div class="footer-badges">
                    <div class="badge-circle">AB</div>
                    <div class="badge-circle">IGP</div>
                    <div class="badge-circle">BIO</div>
                </div>
            </div>
            
            <div class="footer-column">
                <h4 class="footer-title">Contact</h4>
                <div class="footer-contact">
                    <div class="contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                            <?php 
                            $address = get_theme_mod('montaiguet_address', '3357 chemin de la plaine du Montaiguet, 13590 Meyreuil');
                            echo nl2br(esc_html($address));
                            ?>
                        </div>
                    </div>
                    <div class="contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span><?php echo esc_html(get_theme_mod('montaiguet_phone', '04 42 58 XX XX')); ?></span>
                    </div>
                    <div class="contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span><?php echo esc_html(get_theme_mod('montaiguet_email', 'contact@miellerie-montaiguet.fr')); ?></span>
                    </div>
                </div>
            </div>
            
            <div class="footer-column">
                <h4 class="footer-title">Vente directe</h4>
                <div class="footer-hours">
                    <div class="hours-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <div>
                            <p class="hours-title">Sur rendez-vous</p>
                            <p class="hours-subtitle">Appelez-nous pour visiter</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="footer-legal">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Tous droits réservés.</p>
                <p class="footer-certification">Récolté et mis en pot par l'apiculteur • Agriculture Biologique FR-BIO-16</p>
            </div>
            <div class="footer-links">
                <a href="#">Mentions légales</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>