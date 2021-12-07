import { createTileLayerComponent, updateGridLayer, withPane } from '@react-leaflet/core';
import { TileLayer as LeafletTileLayer } from 'leaflet-rotate-map';
export const TileLayer = createTileLayerComponent(function createTileLayer({
  url,
  ...options
}, context) {
  return {
    instance: new LeafletTileLayer(url, withPane(options, context)),
    context
  };
}, updateGridLayer);