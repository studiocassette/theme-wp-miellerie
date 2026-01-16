<?php
/**
 * Custom Fields for Montaiguet Theme
 *
 * @package Montaiguet
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

// Add meta boxes for Honey post type
function montaiguet_honey_meta_boxes() {
    add_meta_box(
        'honey_details',
        __('Détails du Miel', 'montaiguet'),
        'montaiguet_honey_meta_box_callback',
        'honey',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'montaiguet_honey_meta_boxes');

function montaiguet_honey_meta_box_callback($post) {
    wp_nonce_field('montaiguet_honey_meta', 'montaiguet_honey_nonce');
    
    $icon = get_post_meta($post->ID, '_honey_icon', true);
    $usage = get_post_meta($post->ID, '_honey_usage', true);
    $format = get_post_meta($post->ID, '_honey_format', true) ?: '500g';
    $color_class = get_post_meta($post->ID, '_honey_color_class', true);
    ?>
    <div style="margin-bottom: 15px;">
        <label for="honey_icon" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Icône (emoji)', 'montaiguet'); ?>
        </label>
        <input type="text" id="honey_icon" name="honey_icon" value="<?php echo esc_attr($icon); ?>" 
               style="width: 100px;" placeholder="🌿" />
        <p class="description"><?php _e('Ex: 🌻, 🌼, 🌿, 🌰, ⛰️', 'montaiguet'); ?></p>
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="honey_usage" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Utilisation recommandée', 'montaiguet'); ?>
        </label>
        <input type="text" id="honey_usage" name="honey_usage" value="<?php echo esc_attr($usage); ?>" 
               style="width: 100%;" placeholder="Idéal sur les tartines" />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="honey_format" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Format', 'montaiguet'); ?>
        </label>
        <input type="text" id="honey_format" name="honey_format" value="<?php echo esc_attr($format); ?>" 
               style="width: 150px;" placeholder="500g" />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="honey_color_class" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Classe de couleur CSS', 'montaiguet'); ?>
        </label>
        <input type="text" id="honey_color_class" name="honey_color_class" value="<?php echo esc_attr($color_class); ?>" 
               style="width: 100%;" placeholder="bg-purple-100 border-purple-300 text-purple-800" />
        <p class="description"><?php _e('Classes CSS pour le badge de couleur', 'montaiguet'); ?></p>
    </div>
    <?php
}

function montaiguet_save_honey_meta($post_id) {
    if (!isset($_POST['montaiguet_honey_nonce']) || 
        !wp_verify_nonce($_POST['montaiguet_honey_nonce'], 'montaiguet_honey_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['honey_icon'])) {
        update_post_meta($post_id, '_honey_icon', sanitize_text_field($_POST['honey_icon']));
    }
    
    if (isset($_POST['honey_usage'])) {
        update_post_meta($post_id, '_honey_usage', sanitize_text_field($_POST['honey_usage']));
    }
    
    if (isset($_POST['honey_format'])) {
        update_post_meta($post_id, '_honey_format', sanitize_text_field($_POST['honey_format']));
    }
    
    if (isset($_POST['honey_color_class'])) {
        update_post_meta($post_id, '_honey_color_class', sanitize_text_field($_POST['honey_color_class']));
    }
}
add_action('save_post_honey', 'montaiguet_save_honey_meta');

// Add meta boxes for Store post type
function montaiguet_store_meta_boxes() {
    add_meta_box(
        'store_details',
        __('Détails du Point de Vente', 'montaiguet'),
        'montaiguet_store_meta_box_callback',
        'store',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'montaiguet_store_meta_boxes');

function montaiguet_store_meta_box_callback($post) {
    wp_nonce_field('montaiguet_store_meta', 'montaiguet_store_nonce');
    
    $address = get_post_meta($post->ID, '_store_address', true);
    $type = get_post_meta($post->ID, '_store_type', true);
    $hours = get_post_meta($post->ID, '_store_hours', true);
    $phone = get_post_meta($post->ID, '_store_phone', true);
    $website = get_post_meta($post->ID, '_store_website', true);
    $latitude = get_post_meta($post->ID, '_store_latitude', true);
    $longitude = get_post_meta($post->ID, '_store_longitude', true);
    ?>
    <div style="margin-bottom: 15px;">
        <label for="store_address" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Adresse complète', 'montaiguet'); ?>
        </label>
        <input type="text" id="store_address" name="store_address" value="<?php echo esc_attr($address); ?>" 
               style="width: 100%;" required />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="store_type" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Type de commerce', 'montaiguet'); ?>
        </label>
        <input type="text" id="store_type" name="store_type" value="<?php echo esc_attr($type); ?>" 
               style="width: 100%;" placeholder="Magasin Bio" />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="store_hours" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Horaires', 'montaiguet'); ?>
        </label>
        <input type="text" id="store_hours" name="store_hours" value="<?php echo esc_attr($hours); ?>" 
               style="width: 100%;" placeholder="9H00-19H00" />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="store_phone" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Téléphone', 'montaiguet'); ?>
        </label>
        <input type="text" id="store_phone" name="store_phone" value="<?php echo esc_attr($phone); ?>" 
               style="width: 100%;" placeholder="04 42 XX XX XX" />
    </div>
    
    <div style="margin-bottom: 15px;">
        <label for="store_website" style="display: block; margin-bottom: 5px; font-weight: bold;">
            <?php _e('Site web', 'montaiguet'); ?>
        </label>
        <input type="url" id="store_website" name="store_website" value="<?php echo esc_attr($website); ?>" 
               style="width: 100%;" placeholder="https://example.com" />
    </div>
    
    <div style="margin-bottom: 15px; padding: 15px; background: #f0f0f0; border-radius: 5px;">
        <h4 style="margin-top: 0;"><?php _e('Coordonnées GPS (pour la carte)', 'montaiguet'); ?></h4>
        <div style="margin-bottom: 10px;">
            <label for="store_latitude" style="display: inline-block; width: 100px; font-weight: bold;">
                <?php _e('Latitude', 'montaiguet'); ?>
            </label>
            <input type="text" id="store_latitude" name="store_latitude" value="<?php echo esc_attr($latitude); ?>" 
                   style="width: 200px;" placeholder="43.52250" step="any" />
        </div>
        <div>
            <label for="store_longitude" style="display: inline-block; width: 100px; font-weight: bold;">
                <?php _e('Longitude', 'montaiguet'); ?>
            </label>
            <input type="text" id="store_longitude" name="store_longitude" value="<?php echo esc_attr($longitude); ?>" 
                   style="width: 200px;" placeholder="5.46094" step="any" />
        </div>
        <p class="description" style="margin-top: 10px;">
            <?php _e('Obtenez les coordonnées sur Google Maps : clic droit > coordonnées GPS', 'montaiguet'); ?>
        </p>
    </div>
    <?php
}

function montaiguet_save_store_meta($post_id) {
    if (!isset($_POST['montaiguet_store_nonce']) || 
        !wp_verify_nonce($_POST['montaiguet_store_nonce'], 'montaiguet_store_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array('address', 'type', 'hours', 'phone', 'website', 'latitude', 'longitude');
    
    foreach ($fields as $field) {
        if (isset($_POST['store_' . $field])) {
            update_post_meta($post_id, '_store_' . $field, sanitize_text_field($_POST['store_' . $field]));
        }
    }
}
add_action('save_post_store', 'montaiguet_save_store_meta');

?>