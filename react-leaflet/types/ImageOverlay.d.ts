import { MediaOverlayProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { ImageOverlay as LeafletImageOverlay } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface ImageOverlayProps extends MediaOverlayProps {
    children?: ReactNode;
    url: string;
}
export declare const ImageOverlay: import("react").ForwardRefExoticComponent<ImageOverlayProps & import("react").RefAttributes<LeafletImageOverlay>>;
