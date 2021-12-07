import { createPathComponent } from '@react-leaflet/core';
import { Polygon as LeafletPolygon } from 'leaflet-rotate-map';
export const Polygon = createPathComponent(function createPolygon({
  positions,
  ...options
}, ctx) {
  const instance = new LeafletPolygon(positions, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updatePolygon(layer, props, prevProps) {
  if (props.positions !== prevProps.positions) {
    layer.setLatLngs(props.positions);
  }
});