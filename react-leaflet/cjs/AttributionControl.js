"use strict";

exports.__esModule = true;
exports.AttributionControl = void 0;

var _core = require("react-leaflet-rotate/@react-leaflet/core");

var _leaflet = require("react-leaflet-rotate/leaflet-rotate-map");

const AttributionControl = (0, _core.createControlComponent)(function createAttributionControl(props) {
  return new _leaflet.Control.Attribution(props);
});
exports.AttributionControl = AttributionControl;