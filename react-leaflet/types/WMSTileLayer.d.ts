/// <reference types="react" />
import { LayerProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { TileLayer, WMSOptions, WMSParams } from 'react-leaflet-rotate/leaflet-rotate-map';
export interface WMSTileLayerProps extends WMSOptions, LayerProps {
    params?: WMSParams;
    url: string;
}
export declare const WMSTileLayer: import("react").ForwardRefExoticComponent<WMSTileLayerProps & import("react").RefAttributes<TileLayer.WMS>>;
