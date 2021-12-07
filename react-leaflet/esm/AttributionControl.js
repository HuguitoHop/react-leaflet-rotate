import { createControlComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { Control } from 'react-leaflet-rotate/leaflet-rotate-map';
export const AttributionControl = createControlComponent(function createAttributionControl(props) {
  return new Control.Attribution(props);
});