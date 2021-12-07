import { EventedProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { LatLngExpression, Marker as LeafletMarker, MarkerOptions } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface MarkerProps extends MarkerOptions, EventedProps {
    children?: ReactNode;
    position: LatLngExpression;
}
export declare const Marker: import("react").ForwardRefExoticComponent<MarkerProps & import("react").RefAttributes<LeafletMarker<any>>>;
