import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle } from 'lucide-react';

interface Store {
  id: number;
  name: string;
  address: string;
  type: string;
  hours: string;
  lat: number;
  lng: number;
}

interface StoreMapProps {
  stores: Store[];
  selectedStore: number | null;
  onSelectStore: (id: number) => void;
}

const StoreMap: React.FC<StoreMapProps> = ({ stores, selectedStore, onSelectStore }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: number]: mapboxgl.Marker }>({});
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);
  const [error, setError] = useState('');

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [5.4474, 43.5297], // Aix-en-Provence area
        zoom: 11,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      map.current.on('load', () => {
        stores.forEach((store) => {
          if (!map.current) return;

          const el = document.createElement('div');
          el.className = 'store-marker';
          el.innerHTML = `
            <div class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform" style="background-color: hsl(38, 75%, 55%);">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
          `;

          const marker = new mapboxgl.Marker(el)
            .setLngLat([store.lng, store.lat])
            .addTo(map.current!);

          const popup = new mapboxgl.Popup({ 
            offset: 25,
            closeButton: false,
            className: 'store-popup'
          }).setHTML(`
            <div class="p-3 min-w-[200px]">
              <h3 class="font-semibold text-base mb-1" style="color: hsl(230, 45%, 25%)">${store.name}</h3>
              <p class="text-sm text-gray-600 mb-2">${store.address}</p>
              <div class="flex items-center gap-2 text-xs">
                <span class="px-2 py-1 rounded-full" style="background-color: hsl(38, 75%, 55%, 0.2); color: hsl(38, 75%, 45%)">${store.type}</span>
                <span class="text-gray-500">${store.hours}</span>
              </div>
            </div>
          `);

          marker.setPopup(popup);
          
          el.addEventListener('click', () => {
            onSelectStore(store.id);
          });

          markers.current[store.id] = marker;
        });

        setIsMapReady(true);
        setError('');
      });

      map.current.on('error', () => {
        setError('Token Mapbox invalide. Vérifiez votre token.');
      });

    } catch (err) {
      setError('Erreur lors de l\'initialisation de la carte.');
    }
  };

  // Fly to selected store
  useEffect(() => {
    if (map.current && isMapReady && selectedStore !== null) {
      const store = stores.find(s => s.id === selectedStore);
      if (store) {
        map.current.flyTo({
          center: [store.lng, store.lat],
          zoom: 14,
          duration: 1000
        });
        
        // Open popup for selected store
        Object.values(markers.current).forEach(m => m.getPopup()?.remove());
        markers.current[selectedStore]?.togglePopup();
      }
    }
  }, [selectedStore, isMapReady, stores]);

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  if (!isMapReady && !error) {
    return (
      <div className="h-80 md:h-96 rounded-2xl bg-muted/50 flex items-center justify-center">
        <form onSubmit={handleTokenSubmit} className="text-center p-8 max-w-md">
          <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Carte Interactive</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Pour afficher la carte, entrez votre token public Mapbox.
            Obtenez-le gratuitement sur{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline font-medium"
            >
              mapbox.com
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="pk.eyJ1Ijoi..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button 
              type="submit"
              disabled={!mapboxToken.trim()}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Afficher
            </Button>
          </div>
          {error && (
            <p className="text-destructive text-sm mt-3 flex items-center justify-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {error}
            </p>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-elegant">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
        <p className="text-xs text-muted-foreground flex items-center gap-2">
          <MapPin className="h-3 w-3 text-secondary" />
          Cliquez sur un point pour voir les détails
        </p>
      </div>
    </div>
  );
};

export default StoreMap;
