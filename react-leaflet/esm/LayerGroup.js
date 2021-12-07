import { createLayerComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { LayerGroup as LeafletLayerGroup } from 'react-leaflet-rotate/leaflet-rotate-map';
export const LayerGroup = createLayerComponent(function createLayerGroup({
  children: _c,
  ...options
}, ctx) {
  const instance = new LeafletLayerGroup([], options);
  return {
    instance,
    context: { ...ctx,
      layerContainer: instance
    }
  };
});