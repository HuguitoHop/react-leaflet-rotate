import { createControlComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { Control } from 'react-leaflet-rotate/leaflet-rotate-map';
export const ZoomControl = createControlComponent(function createZoomControl(props) {
  return new Control.Zoom(props);
});