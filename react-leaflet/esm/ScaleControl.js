import { createControlComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { Control } from 'react-leaflet-rotate/leaflet-rotate-map';
export const ScaleControl = createControlComponent(function createScaleControl(props) {
  return new Control.Scale(props);
});