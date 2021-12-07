/// <reference types="react" />
import { PathProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { FeatureGroup as LeafletFeatureGroup } from 'react-leaflet-rotate/leaflet-rotate-map';
import { LayerGroupProps } from './LayerGroup';
export interface FeatureGroupProps extends LayerGroupProps, PathProps {
}
export declare const FeatureGroup: import("react").ForwardRefExoticComponent<FeatureGroupProps & import("react").RefAttributes<LeafletFeatureGroup<any>>>;
