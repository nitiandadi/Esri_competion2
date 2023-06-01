import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
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
const polygonLayer=new FeatureLayer({
    url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%A1%94%E5%B0%94%E5%AF%BA/FeatureServer",
});
const roadLayer=new FeatureLayer({
    url:'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%9D%92%E6%B5%B7%E7%9C%81/FeatureServer'
});
export {visitorLayer2,polygonLayer,roadLayer};
export default visitorLayer2;
