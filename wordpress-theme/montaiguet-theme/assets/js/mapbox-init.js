/**
 * Mapbox Map Initialization
 * Displays store locations on an interactive map
 */

(function($) {
  'use strict';
  
  // Wait for document ready
  $(document).ready(function() {
    // Check if map container exists
    if (!document.getElementById('store-map')) {
      return;
    }
    
    // Get Mapbox token from WordPress customizer
    var mapboxToken = typeof MAPBOX_TOKEN !== 'undefined' ? MAPBOX_TOKEN : '';
    
    // If no token, show message
    if (!mapboxToken) {
      $('#store-map').html(
        '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; padding: 2rem; text-align: center;">' +
        '<div>' +
        '<h3 style="margin-bottom: 1rem;">Configuration de la carte</h3>' +
        '<p>Pour afficher la carte interactive, veuillez ajouter votre token Mapbox dans <strong>Apparence > Personnaliser > Paramètres Miellerie</strong>.</p>' +
        '<p style="margin-top: 1rem;"><a href="https://www.mapbox.com/" target="_blank" style="color: #d4a843; font-weight: 600;">Obtenir un token gratuit sur mapbox.com</a></p>' +
        '</div>' +
        '</div>'
      );
      return;
    }
    
    // Initialize Mapbox
    mapboxgl.accessToken = mapboxToken;
    
    // Collect store locations
    var stores = [];
    $('.store-card').each(function() {
      var lat = parseFloat($(this).data('lat'));
      var lng = parseFloat($(this).data('lng'));
      var name = $(this).find('.store-name').text();
      var address = $(this).find('.store-address').text();
      
      if (!isNaN(lat) && !isNaN(lng)) {
        stores.push({
          lat: lat,
          lng: lng,
          name: name,
          address: address
        });
      }
    });
    
    // Default center (Meyreuil, Provence)
    var centerLat = 43.52250353731567;
    var centerLng = 5.460940014562134;
    
    // If stores exist, center on first store
    if (stores.length > 0) {
      centerLat = stores[0].lat;
      centerLng = stores[0].lng;
    }
    
    // Create map
    var map = new mapboxgl.Map({
      container: 'store-map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [centerLng, centerLat],
      zoom: 11
    });
    
    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl());
    
    // Add markers for each store
    stores.forEach(function(store) {
      // Create marker element
      var el = document.createElement('div');
      el.className = 'custom-marker';
      el.style.width = '40px';
      el.style.height = '40px';
      el.style.backgroundImage = 'url(data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#d4a843" stroke="#3a4156" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>') + ')';
      el.style.backgroundSize = 'contain';
      el.style.cursor = 'pointer';
      
      // Create popup
      var popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          '<div style="padding: 0.5rem;">' +
          '<h4 style="margin: 0 0 0.5rem; font-weight: 600; color: #3a4156;">' + store.name + '</h4>' +
          '<p style="margin: 0; font-size: 0.875rem; color: #666;">' + store.address + '</p>' +
          '</div>'
        );
      
      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat([store.lng, store.lat])
        .setPopup(popup)
        .addTo(map);
    });
    
    // Fit map to show all markers
    if (stores.length > 1) {
      var bounds = new mapboxgl.LngLatBounds();
      
      stores.forEach(function(store) {
        bounds.extend([store.lng, store.lat]);
      });
      
      map.fitBounds(bounds, {
        padding: 50,
        maxZoom: 13
      });
    }
    
    // Handle store selection from card clicks
    $(document).on('store-selected', function(e, lat, lng) {
      if (!isNaN(lat) && !isNaN(lng)) {
        map.flyTo({
          center: [lng, lat],
          zoom: 14,
          duration: 1500
        });
      }
    });
  });
  
})(jQuery);