import { createPathComponent, updateCircle } from 'react-leaflet-rotate/@react-leaflet/core';
import { Circle as LeafletCircle } from 'react-leaflet-rotate/leaflet-rotate-map';
export const Circle = createPathComponent(function createCircle({
  center,
  children: _c,
  ...options
}, ctx) {
  const instance = new LeafletCircle(center, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, updateCircle);