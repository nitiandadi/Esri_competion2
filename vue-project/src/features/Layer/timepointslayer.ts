import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";


//获取时间序列图层的参数
const definitions = [
    { id: 0},
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
];
// 创建时间序列图层
const timeFeature = definitions.map((definition) => {
    const timelayer = createLayer(definition);
    // 返回图层
    return timelayer;
});

// 创建时间序列图层的函数
function createLayer(definition: { id: number}) {
    const url = "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/AQI%E6%97%B6%E9%97%B4%E5%BA%8F%E5%88%97/FeatureServer/" + definition.id ;
    // 创建时间图层
    return new FeatureLayer({
        url: url,
        outFields: ["*"],
        title: "AQI",
        id: "AQI" + definition.id,
        popupTemplate: {  
            title: "{名称}",
            // content: "{AQI} mg/m³, {日期}"
            content: "AQI: {AQI} mg/m³, 日期: {日期}"
        },
    });
    

};


export default timeFeature;