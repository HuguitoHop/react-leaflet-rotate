"use strict";

exports.__esModule = true;
exports.LayerGroup = void 0;

var _core = require("react-leaflet-rotate/@react-leaflet/core");

var _leaflet = require("react-leaflet-rotate/leaflet-rotate-map");

const LayerGroup = (0, _core.createLayerComponent)(function createLayerGroup({
  children: _c,
  ...options
}, ctx) {
  const instance = new _leaflet.LayerGroup([], options);
  return {
    instance,
    context: { ...ctx,
      layerContainer: instance
    }
  };
});
exports.LayerGroup = LayerGroup;