import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
import esriConfig from "@arcgis/core/config";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
const symbol = new SimpleMarkerSymbol({
    style: "path",
    path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",
    color: "#17e3f5", // 中间浅色
    outline: {
    color: '#115687', // 外部深色
    width: 2
    },
    size: 7
});

// 创建一个新的渲染器
const renderer = new SimpleRenderer({
    label:"景点",
    symbol:symbol
});
const visitorLayer2 = new StreamLayer({
    objectIdField: "OBJECTID",
    fields: [
        {
            name: "OBJECTID", // required
            alias: "ObjectId",
            type: "oid",
        },
        {
            name: "TRACKID",
            alias: "TrackId",
            type: "long",
        },
        {
            name: "STATUS",
            alias: "STATUS",
            type: "string",
        }
    ],
    timeInfo: {
        trackIdField: "TRACKID" // required
    },
    geometryType: "point", // required
    updateInterval: 100,
    popupTemplate: {
        title: "{status}",
        content: "{TRACKID}, {this}"
    },
});
const taershiPolygon = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E8%BE%B9%E7%95%8C/FeatureServer",
});
const taershiRoads = new FeatureLayer({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E5%86%85%E8%B7%AF%E7%BD%91/FeatureServer'
});
const taershiPoint = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E6%99%AF%E8%A7%82%E7%82%B9/FeatureServer",
    renderer: renderer
});
const riyusanPolygon = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%A5%E6%9C%88%E5%B1%B1/FeatureServer",
});
const riyusanPoints = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%A5%E6%9C%88%E5%B1%B1%E7%82%B9/FeatureServer",
    renderer: renderer
});
esriConfig.apiKey = "AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB";
const laoyasanPoints = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E8%80%81%E7%88%B7%E5%B1%B1%E7%82%B9/FeatureServer",
    renderer:renderer
});
const laoyasanPolygon = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E8%80%81%E7%88%B7%E5%B1%B1/FeatureServer"
});
const donguanPoints = new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%B8%9C%E5%85%B3%E7%82%B9/FeatureServer",
    renderer:renderer
});
const donguanPolygon = new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%B8%9C%E5%85%B3%E6%B8%85%E7%9C%9F%E5%AF%BA/FeatureServer"
});
const annimalPoints = new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%8A%A8%E7%89%A9%E5%9B%AD/FeatureServer",
    renderer:renderer
});
const annimalPolygon = new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%9D%A2/FeatureServer"
});
export { visitorLayer2, taershiPolygon, taershiRoads as roadsLayer, taershiPoint, 
    riyusanPoints, riyusanPolygon, laoyasanPoints, laoyasanPolygon, donguanPoints, donguanPolygon, annimalPoints, annimalPolygon };
export default visitorLayer2;
