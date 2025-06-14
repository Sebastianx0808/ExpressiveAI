import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { MapProps } from '../types/contact';

const Map: React.FC<MapProps> = ({
  center = [12.9716, 77.5946],
  zoom = 13,
  className = "h-64 w-full rounded-lg",
  showMarker = true,
  markerPopup = "ExpressiveAI - Bengaluru, India"
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    // Dynamic import of Leaflet to avoid SSR issues
    const initializeMap = async () => {
      try {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');

        // Fix for default markers in Leaflet with webpack
        const DefaultIcon = L.Icon.Default as any;
        delete DefaultIcon.prototype._getIconUrl;
        DefaultIcon.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        if (!mapRef.current || mapInstanceRef.current) return;

        // Initialize map
        const map = L.map(mapRef.current).setView(center, zoom);

        // Add tile layer with error handling
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker if requested
        if (showMarker) {
          const marker = L.marker(center).addTo(map);
          if (markerPopup) {
            marker.bindPopup(markerPopup);
          }
        }

        mapInstanceRef.current = map;
      } catch (error) {
        console.error('Error initializing map:', error);
        // Fallback: show static map placeholder
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="flex items-center justify-center h-full bg-gradient-to-br from-accent-blue-100 to-soft-coral-100 dark:from-accent-blue-900/20 dark:to-soft-coral-900/20 rounded-lg">
              <div class="text-center">
                <div class="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <p class="text-cool-slate-600 dark:text-cool-slate-300 font-medium">Bengaluru, India</p>
                <p class="text-sm text-cool-slate-500 dark:text-cool-slate-400">Map could not be loaded</p>
              </div>
            </div>
          `;
        }
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        } catch (error) {
          console.error('Error cleaning up map:', error);
        }
      }
    };
  }, [center, zoom, showMarker, markerPopup]);

  return (
    <div 
      ref={mapRef} 
      className={`${className} bg-gradient-to-br from-accent-blue-100 to-soft-coral-100 dark:from-accent-blue-900/20 dark:to-soft-coral-900/20 glass-card border border-cool-slate-200 dark:border-cool-slate-700`}
    >
      {/* Fallback content while map loads */}
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-accent-blue-600 dark:text-accent-blue-400 mx-auto mb-2" />
          <p className="text-cool-slate-600 dark:text-cool-slate-300 font-medium">Loading map...</p>
        </div>
      </div>
    </div>
  );
};

export default Map;