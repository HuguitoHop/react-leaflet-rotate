import { createPathComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { GeoJSON as LeafletGeoJSON } from 'react-leaflet-rotate/leaflet-rotate-map';
export const GeoJSON = createPathComponent(function createGeoJSON({
  data,
  ...options
}, ctx) {
  const instance = new LeafletGeoJSON(data, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updateGeoJSON(layer, props, prevProps) {
  if (props.style !== prevProps.style) {
    if (props.style == null) {
      layer.resetStyle();
    } else {
      layer.setStyle(props.style);
    }
  }
});