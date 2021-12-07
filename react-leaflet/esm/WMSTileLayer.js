import { createTileLayerComponent, updateGridLayer, withPane } from 'react-leaflet-rotate/@react-leaflet/core';
import { TileLayer } from 'leaflet-rotate-map';
export const WMSTileLayer = createTileLayerComponent(function createWMSTileLayer({
  params = {},
  url,
  ...options
}, context) {
  return {
    instance: new TileLayer.WMS(url, { ...params,
      ...withPane(options, context)
    }),
    context
  };
}, function updateWMSTileLayer(layer, props, prevProps) {
  updateGridLayer(layer, props, prevProps);

  if (props.params != null && props.params !== prevProps.params) {
    layer.setParams(props.params);
  }
});