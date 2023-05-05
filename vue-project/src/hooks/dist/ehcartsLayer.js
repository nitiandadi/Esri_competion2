"use strict";
exports.__esModule = true;
var echarts = require("echarts");
//@ts-ignore
var ArcgisMapCoordSys_1 = require("./ArcgisMapCoordSys");
var EchartsLayer = /** @class */ (function () {
    function EchartsLayer(mapView, option) {
        if (option === void 0) { option = {}; }
        var div = this._echartsContainer = document.createElement('div');
        this.mapView = mapView;
        div.style.position = 'absolute';
        div.style.height = mapView.height + 'px';
        div.style.width = mapView.width + 'px';
        div.style.top = 0 + 'px';
        div.style.left = 0 + 'px';
        div.id = 'echartLayer';
        var parent = document.getElementsByClassName("esri-view-user-storage")[0];
        parent.appendChild(div);
        echarts.registerCoordinateSystem('arcgis', ArcgisMapCoordSys_1["default"](mapView));
        if (mapView.isFulfilled()) {
            this.chart = echarts.init(div);
            this._init();
            console.log(option);
            this.chart.setOption(option);
        }
        else {
            throw new Error('mapView is not ready');
        }
    }
    EchartsLayer.prototype._init = function () {
        var _this = this;
        this.mapView.watch('extent', function () {
            var _a;
            (_a = _this.chart) === null || _a === void 0 ? void 0 : _a.resize();
        });
    };
    /**
     * destroy the chart and relasee the resource
     */
    EchartsLayer.prototype.destroy = function () {
        var _a, _b;
        (_a = this.chart) === null || _a === void 0 ? void 0 : _a.dispose();
        this.chart = null;
        // this.echartsContainer.de
        (_b = this._echartsContainer) === null || _b === void 0 ? void 0 : _b.remove();
        this._echartsContainer = null;
    };
    /**
     * Redraw the chart
     */
    EchartsLayer.prototype.Redraw = function (option) {
        var _a;
        (_a = this.chart) === null || _a === void 0 ? void 0 : _a.setOption(option);
    };
    EchartsLayer.prototype.setVisiable = function (visiable) {
        this._echartsContainer.hidden = !visiable;
    };
    return EchartsLayer;
}());
exports["default"] = EchartsLayer;
