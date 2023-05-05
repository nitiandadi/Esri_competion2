"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getE3CoordinateSystem;

var echarts = _interopRequireWildcard(require("echarts"));

var _Point = _interopRequireDefault(require("@arcgis/core/geometry/Point"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getE3CoordinateSystem(mapView) {
  var ArcgisMapCoordSys = function ArcgisMapCoordSys(mapView) {
    this.map = mapView;
    this._mapOffset = [0, 0];
  };

  ArcgisMapCoordSys.getDimensionsInfo = function () {
    return ['x', 'y'];
  };

  ArcgisMapCoordSys.dimensions = ['x', 'y'];
  ArcgisMapCoordSys.prototype.dimensions = ['x', 'y'];
  ArcgisMapCoordSys.prototype.type = 'arcmap';

  ArcgisMapCoordSys.prototype.setZoom = function (zoom) {
    this._zoom = zoom;
  };

  ArcgisMapCoordSys.prototype.setMapOffset = function (mapOffset) {
    this._mapOffset = mapOffset;
  };

  ArcgisMapCoordSys.create = function (ecModel) {
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'arcgis') {
        seriesModel.coordinateSystem = new ArcgisMapCoordSys(mapView);
      }
    });
  };

  ArcgisMapCoordSys.prototype.dataToPoint = function (data) {
    var point = new _Point["default"]({
      x: data[0],
      y: data[1],
      spatialReference: {
        wkid: 4326
      }
    });
    var mapOffset = this._mapOffset;
    var px = this.map.toScreen(point);
    return [px.x - mapOffset[0], px.y - mapOffset[1]];
  };

  ArcgisMapCoordSys.prototype.pointToData = function (pt) {
    var mapOffset = this._mapOffset;
    var screenPoint = {
      x: pt[0] + mapOffset[0],
      y: pt[1] + mapOffset[1]
    };
    var data = this.view.toMap(screenPoint);
    return [data.x, data.y];
  };

  ArcgisMapCoordSys.prototype.getViewRect = function () {
    return new echarts.graphic.BoundingRect(0, 0, this.map.width, this.map.height);
  };

  ArcgisMapCoordSys.prototype.getRoamTransform = function getRoamTransform() {
    return echarts.matrix.create();
  };

  return ArcgisMapCoordSys;
}