import { PathProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { LatLngExpression, PolylineOptions, Polygon as LeafletPolygon } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface PolygonProps extends PolylineOptions, PathProps {
    children?: ReactNode;
    positions: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
}
export declare const Polygon: import("react").ForwardRefExoticComponent<PolygonProps & import("react").RefAttributes<LeafletPolygon<any>>>;
