/// <reference types="react" />
import { LayerProps } from '@react-leaflet/core';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet-rotate-map';
export interface TileLayerProps extends TileLayerOptions, LayerProps {
    url: string;
}
export declare const TileLayer: import("react").ForwardRefExoticComponent<TileLayerProps & import("react").RefAttributes<LeafletTileLayer>>;
