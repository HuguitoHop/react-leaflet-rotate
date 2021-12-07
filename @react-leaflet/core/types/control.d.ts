import { Control, ControlOptions } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ElementHook } from './element';
export declare function createControlHook<E extends Control, P extends ControlOptions>(useElement: ElementHook<E, P>): (props: P) => ReturnType<ElementHook<E, P>>;
