"use strict";
exports.__esModule = true;
exports.worldLayer = void 0;
var ClassBreaksRenderer_1 = require("@arcgis/core/renderers/ClassBreaksRenderer");
var SimpleMarkerSymbol_1 = require("@arcgis/core/symbols/SimpleMarkerSymbol");
var FeatureLayer_1 = require("@arcgis/core/layers/FeatureLayer");
var PopupTemplate_1 = require("@arcgis/core/PopupTemplate");
var classBreaksRenderer = new ClassBreaksRenderer_1["default"]({
    field: "number",
    classBreakInfos: [{
            minValue: 0,
            maxValue: 6,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 3,
                color: "red"
            })
        }, {
            minValue: 6,
            maxValue: 70,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 6,
                color: "red"
            })
        },
        {
            minValue: 70,
            maxValue: 150,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 9,
                color: "red"
            })
        },
        {
            minValue: 150,
            maxValue: 200,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 12,
                color: "red"
            })
        }, {
            minValue: 200,
            maxValue: 277,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 15,
                color: "red"
            })
        },
        {
            minValue: 277,
            maxValue: 400,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 18,
                color: "red"
            })
        },
        {
            minValue: 400,
            maxValue: 700,
            symbol: new SimpleMarkerSymbol_1["default"]({
                size: 21,
                color: "red"
            })
        },
    ]
});
var chinaLayer = new FeatureLayer_1["default"]({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%B6%E9%97%B4%E6%97%85%E6%B8%B8%E4%BA%BA%E6%95%B0/FeatureServer'
});
var worldLayer = new FeatureLayer_1["default"]({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%85%A8%E7%90%83%E4%BA%BA%E6%95%B0/FeatureServer'
});
exports.worldLayer = worldLayer;
chinaLayer.popupTemplate = new PopupTemplate_1["default"]({
    title: "游客人数",
    content: [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: 'province',
                    label: '省份'
                },
                {
                    fieldName: 'capital',
                    label: '省会'
                },
                {
                    fieldName: 'longitude',
                    label: '经度'
                },
                {
                    fieldName: 'latitude',
                    label: '纬度'
                },
                {
                    fieldName: 'number',
                    label: '人数'
                },
                {
                    fieldName: 'year',
                    label: '年份'
                },
            ]
        }]
});
chinaLayer.definitionExpression = "year = 2020";
chinaLayer.outFields = ["*"];
exports["default"] = chinaLayer;
