import { createPathComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { Rectangle as LeafletRectangle } from 'react-leaflet-rotate/leaflet-rotate-map';
export const Rectangle = createPathComponent(function createRectangle({
  bounds,
  ...options
}, ctx) {
  const instance = new LeafletRectangle(bounds, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updateRectangle(layer, props, prevProps) {
  if (props.bounds !== prevProps.bounds) {
    layer.setBounds(props.bounds);
  }
});