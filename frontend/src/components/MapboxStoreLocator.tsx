import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  address: string;
  phone?: string;
  hours: string;
  lat: number;
  lng: number;
  type: 'direct' | 'marché' | 'magasin';
}

interface MapboxStoreLocatorProps {
  stores: Store[];
}

const MapboxStoreLocator: React.FC<MapboxStoreLocatorProps> = ({ stores }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    // Set Mapbox access token
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [5.4474, 43.5297], // Aix-en-Provence
        zoom: 11,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add markers for each store
      stores.forEach((store) => {
        if (!map.current) return;

        // Create custom marker color based on store type
        const markerColor = store.type === 'direct' ? '#D4A574' : 
                           store.type === 'marché' ? '#8B7FB8' : '#7A8A5A';

        // Create marker
        const marker = new mapboxgl.Marker({ color: markerColor })
          .setLngLat([store.lng, store.lat])
          .addTo(map.current);

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-3">
            <h3 class="font-semibold text-lg mb-2">${store.name}</h3>
            <p class="text-sm text-gray-600 mb-1">${store.address}</p>
            ${store.phone ? `<p class="text-sm text-gray-600 mb-1">📞 ${store.phone}</p>` : ''}
            <p class="text-sm text-gray-600">🕒 ${store.hours}</p>
            <span class="inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium" style="background-color: ${markerColor}20; color: ${markerColor}">
              ${store.type === 'direct' ? 'Vente directe' : 
                store.type === 'marché' ? 'Marché' : 'Magasin'}
            </span>
          </div>
        `);

        marker.setPopup(popup);
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la carte:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="h-96 flex items-center justify-center bg-muted rounded-lg">
        <div className="text-center p-8 max-w-md">
          <AlertCircle className="h-12 w-12 text-honey mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-4">Configuration Mapbox requise</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Pour afficher la carte interactive, veuillez entrer votre token public Mapbox.
            Vous pouvez l'obtenir sur{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-honey hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="pk.eyJ1Ijoi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleTokenSubmit}
              disabled={!mapboxToken.trim()}
              className="w-full"
            >
              Initialiser la carte
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="h-96 w-full rounded-lg" />
      {mapboxToken && (
        <div className="absolute top-2 left-2 bg-background/90 backdrop-blur-sm rounded px-2 py-1 text-xs text-muted-foreground">
          Carte interactive des revendeurs
        </div>
      )}
    </div>
  );
};

export default MapboxStoreLocator;