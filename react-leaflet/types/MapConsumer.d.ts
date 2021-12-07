import { Map } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactElement } from 'react';
export interface MapConsumerProps {
    children: (map: Map) => ReactElement | null;
}
export declare function MapConsumer({ children }: MapConsumerProps): ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
