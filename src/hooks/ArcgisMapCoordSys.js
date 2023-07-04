import * as echarts from 'echarts';
import Point from '@arcgis/core/geometry/Point';

export default function getE3CoordinateSystem(mapView) {
  var ArcgisMapCoordSys = function ArcgisMapCoordSys(mapView) {
    this.map = mapView;
    this._mapOffset = [0, 0];
  }
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
    let point = new Point({
      x: data[0],
      y: data[1],
      spatialReference: {
        wkid: 4326
      }
    });
    const mapOffset = this._mapOffset;
    let px = this.map.toScreen(point);
    return [
      px.x - mapOffset[0], px.y - mapOffset[1]
    ];
  }

  ArcgisMapCoordSys.prototype.pointToData = function (pt) {
    const mapOffset = this._mapOffset;
    let screenPoint = {
      x: pt[0] + mapOffset[0],
      y: pt[1] + mapOffset[1],
    };
    let data = this.view.toMap(screenPoint);
    return [data.x, data.y];
  }
  ArcgisMapCoordSys.prototype.getViewRect = function () {
    return new echarts.graphic.BoundingRect(0, 0, this.map.width, this.map.height);
  };
  ArcgisMapCoordSys.prototype.getRoamTransform = function getRoamTransform() {
    return echarts.matrix.create();
  };
  return ArcgisMapCoordSys;
}