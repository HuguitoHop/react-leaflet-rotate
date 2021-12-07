import { Evented, LeafletEventHandlerFnMap } from 'react-leaflet-rotate/leaflet-rotate-map';
import { LeafletElement } from './element';
export interface EventedProps {
    eventHandlers?: LeafletEventHandlerFnMap;
}
export declare function useEventHandlers(element: LeafletElement<Evented>, eventHandlers: LeafletEventHandlerFnMap | null | undefined): void;
