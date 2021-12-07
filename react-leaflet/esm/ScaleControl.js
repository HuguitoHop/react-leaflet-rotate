import { createControlComponent } from '@react-leaflet/core';
import { Control } from 'leaflet-rotate-map';
export const ScaleControl = createControlComponent(function createScaleControl(props) {
  return new Control.Scale(props);
});