import { createTileLayerComponent, updateGridLayer, withPane } from 'react-leaflet-rotate/@react-leaflet/core';
import { TileLayer as LeafletTileLayer } from 'react-leaflet-rotate/leaflet-rotate-map';
export const TileLayer = createTileLayerComponent(function createTileLayer({
  url,
  ...options
}, context) {
  return {
    instance: new LeafletTileLayer(url, withPane(options, context)),
    context
  };
}, updateGridLayer);