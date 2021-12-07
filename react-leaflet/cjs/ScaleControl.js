"use strict";

exports.__esModule = true;
exports.ScaleControl = void 0;

var _core = require("react-leaflet-rotate/@react-leaflet/core");

var _leaflet = require("react-leaflet-rotate/leaflet-rotate-map");

const ScaleControl = (0, _core.createControlComponent)(function createScaleControl(props) {
  return new _leaflet.Control.Scale(props);
});
exports.ScaleControl = ScaleControl;