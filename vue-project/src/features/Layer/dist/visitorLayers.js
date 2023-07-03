"use strict";
exports.__esModule = true;
exports.annimalPolygon = exports.annimalPoints = exports.donguanPolygon = exports.donguanPoints = exports.laoyasanPolygon = exports.laoyasanPoints = exports.riyusanPolygon = exports.riyusanPoints = exports.taershiPoint = exports.roadsLayer = exports.taershiPolygon = exports.visitorLayer2 = void 0;
var FeatureLayer_1 = require("@arcgis/core/layers/FeatureLayer");
var StreamLayer_1 = require("@arcgis/core/layers/StreamLayer");
var config_1 = require("@arcgis/core/config");
var SimpleMarkerSymbol_1 = require("@arcgis/core/symbols/SimpleMarkerSymbol");
var SimpleRenderer_1 = require("@arcgis/core/renderers/SimpleRenderer");
var symbol = new SimpleMarkerSymbol_1["default"]({
    style: "path",
    path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",
    color: "#17e3f5",
    outline: {
        color: '#115687',
        width: 2
    },
    size: 7
});
// 创建一个新的渲染器
var renderer = new SimpleRenderer_1["default"]({
    label: "景点",
    symbol: symbol
});
var visitorLayer2 = new StreamLayer_1["default"]({
    objectIdField: "OBJECTID",
    fields: [
        {
            name: "OBJECTID",
            alias: "ObjectId",
            type: "oid"
        },
        {
            name: "TRACKID",
            alias: "TrackId",
            type: "long"
        },
        {
            name: "STATUS",
            alias: "STATUS",
            type: "string"
        }
    ],
    timeInfo: {
        trackIdField: "TRACKID" // required
    },
    geometryType: "point",
    updateInterval: 100,
    popupTemplate: {
        title: "{status}",
        content: "{TRACKID}, {this}"
    }
});
exports.visitorLayer2 = visitorLayer2;
var taershiPolygon = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E8%BE%B9%E7%95%8C/FeatureServer"
});
exports.taershiPolygon = taershiPolygon;
var taershiRoads = new FeatureLayer_1["default"]({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E5%86%85%E8%B7%AF%E7%BD%91/FeatureServer'
});
exports.roadsLayer = taershiRoads;
var taershiPoint = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E6%99%AF%E8%A7%82%E7%82%B9/FeatureServer",
    renderer: renderer
});
exports.taershiPoint = taershiPoint;
var riyusanPolygon = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%A5%E6%9C%88%E5%B1%B1/FeatureServer"
});
exports.riyusanPolygon = riyusanPolygon;
var riyusanPoints = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%A5%E6%9C%88%E5%B1%B1%E7%82%B9/FeatureServer",
    renderer: renderer
});
exports.riyusanPoints = riyusanPoints;
config_1["default"].apiKey = "AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB";
var laoyasanPoints = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E8%80%81%E7%88%B7%E5%B1%B1%E7%82%B9/FeatureServer",
    renderer: renderer
});
exports.laoyasanPoints = laoyasanPoints;
var laoyasanPolygon = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E8%80%81%E7%88%B7%E5%B1%B1/FeatureServer"
});
exports.laoyasanPolygon = laoyasanPolygon;
var donguanPoints = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%B8%9C%E5%85%B3%E7%82%B9/FeatureServer",
    renderer: renderer
});
exports.donguanPoints = donguanPoints;
var donguanPolygon = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%B8%9C%E5%85%B3%E6%B8%85%E7%9C%9F%E5%AF%BA/FeatureServer"
});
exports.donguanPolygon = donguanPolygon;
var annimalPoints = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%8A%A8%E7%89%A9%E5%9B%AD/FeatureServer",
    renderer: renderer
});
exports.annimalPoints = annimalPoints;
var annimalPolygon = new FeatureLayer_1["default"]({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%9D%A2/FeatureServer"
});
exports.annimalPolygon = annimalPolygon;
exports["default"] = visitorLayer2;
