import { createControlComponent } from '@react-leaflet/core';
import { Control } from 'leaflet-rotate-map';
export const ZoomControl = createControlComponent(function createZoomControl(props) {
  return new Control.Zoom(props);
});