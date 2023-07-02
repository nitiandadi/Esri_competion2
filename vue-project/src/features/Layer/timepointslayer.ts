import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

function createtimePointslayer() {//获取时间序列图层的参数
    const definitions = [
        { id: 0},
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
    ];
    // 创建时间序列图层
    const timeFeature = definitions.map((definition) => {
        const timelayer = createLayer(definition);
        // 返回图层
        return timelayer;
    });

    // 创建时间序列图层的函数
    function createLayer(definition: { id: number}) {
        const url = "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E5%9F%8E%E5%B8%82%E6%99%AF%E7%82%B9AQI%E6%97%B6%E9%97%B4%E5%BA%8F%E5%88%97/FeatureServer/" + definition.id ;
        // 创建时间图层
        return new FeatureLayer({
            url: url,
            outFields: ["*"],
            title: "AQI",
            id: "AQI" + definition.id,
        });
    };
    return timeFeature;
}

export default createtimePointslayer;