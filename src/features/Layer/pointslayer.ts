import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
function createPointslayer() {
    const myFeature = new FeatureLayer({
        url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/point/FeatureServer",
        id: "points",
    });
    // 创建一个新的符号
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

    // 将渲染器分配给要素图层
    myFeature.renderer = renderer;
    return myFeature;
}
export default createPointslayer;