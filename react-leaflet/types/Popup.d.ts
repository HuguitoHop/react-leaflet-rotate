import { EventedProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { LatLngExpression, Popup as LeafletPopup, PopupOptions } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface PopupProps extends PopupOptions, EventedProps {
    children?: ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
    position?: LatLngExpression;
}
export declare const Popup: import("react").ForwardRefExoticComponent<PopupProps & import("react").RefAttributes<LeafletPopup>>;
