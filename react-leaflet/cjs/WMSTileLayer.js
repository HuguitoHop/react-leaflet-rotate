"use strict";

exports.__esModule = true;
exports.WMSTileLayer = void 0;

var _core = require("react-leaflet-rotate/@react-leaflet/core");

var _leaflet = require("react-leaflet-rotate/leaflet-rotate-map");

const WMSTileLayer = (0, _core.createTileLayerComponent)(function createWMSTileLayer({
  params = {},
  url,
  ...options
}, context) {
  return {
    instance: new _leaflet.TileLayer.WMS(url, { ...params,
      ...(0, _core.withPane)(options, context)
    }),
    context
  };
}, function updateWMSTileLayer(layer, props, prevProps) {
  (0, _core.updateGridLayer)(layer, props, prevProps);

  if (props.params != null && props.params !== prevProps.params) {
    layer.setParams(props.params);
  }
});
exports.WMSTileLayer = WMSTileLayer;