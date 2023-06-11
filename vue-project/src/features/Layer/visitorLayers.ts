import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import esriConfig from "@arcgis/core/config";
import vecTileLayer from "@arcgis/core/layers/VectorTileLayer";
import { HeatmapRenderer } from "@arcgis/core/renderers"
import Featurelayer from "@arcgis/core/layers/FeatureLayer"
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
const taershiLayer = new FeatureLayer({
    url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA/FeatureServer",
    
});
const roadsLayer = new FeatureLayer({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E8%B7%AF%E7%BD%91/FeatureServer'
});
const tdtImgLayer = new WebTileLayer({
    urlTemplate: "https://{subDomain}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={col}&TILEROW={row}&TILEMATRIX={level}&tk=8a84a78555c7086fba04d7a7b80bd525	",
    subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
    copyright: "天地图"
})
const pointsLayer=new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA%E6%99%AF%E7%82%B9/FeatureServer"
});
esriConfig.apiKey = "AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB";
const  streetLayer = new vecTileLayer({
    url: "https://basemaps-api.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer"
});

export { visitorLayer2, taershiLayer , roadsLayer, pointsLayer,streetLayer};
export default visitorLayer2;
