// 导入依赖库
import Graphic from "@arcgis/core/Graphic";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Query from '@arcgis/core/rest/support/Query';

/**
 * @description 使用Getis-Ord Gi* 进行热点分析
 * @return void
 * */

// 定义OGRIntermediatedata类型
interface OGRIntermediatedata {
    id:number, 
    name:string,
    value:number, 
    geometry:__esri.Geometry
}
// 定义mapG类型
interface mapG {
    city: string;
    name:string,
    value:number,
    geometry:__esri.Geometry
    gi:number
}
export const GetisOrdGi = () => {
    // 定义属性
    let m_orgLayer: __esri.FeatureLayer | null = null; //输入图层
    let m_selectFields: string  = ''  //指定要用于分析的字段
    let threshold: number = 216416.6330  //固定范围阈值
    let m_nameList: string[] = []  //指定要用于分析的景点名称列表
    let m_OGRIntermediatedata: OGRIntermediatedata[] = []  //存储每个要素的OBJECTID、指定字段值、geometry
    let mapG: mapG[] = []; //存储每个要素的OBJECTID、Gi值


    // process方法
    function process(myFeature:__esri.FeatureLayer, tempFields: string,nameList:string[]){
        m_orgLayer = myFeature
        m_selectFields = tempFields
        m_nameList = nameList
        return cal()
    }

    // cal方法
    async function cal() {
        const query = new Query();
        query.where = "1=1"; // 查询所有要素
        query.outFields = ["*"];
        query.returnGeometry = true;
        const graphicsLayer = new GraphicsLayer({
            id: `giLayer`
        });
        await m_orgLayer!.queryFeatures(query).then(function(result) {
            const features = result.features;
            const ogrIntermediatedata = features.map(function(feature) {
                const name = feature.attributes.name;
                if (m_nameList.indexOf(name) === -1) return;
                const geometry = feature.geometry;
                const data = {
                    id: feature.attributes.ObjectId as number, 
                    name: feature.attributes.name as string,
                    value: feature.attributes[m_selectFields] as number, 
                    geometry: geometry as __esri.Geometry,
                    city: feature.attributes.city as string,
                };
                m_OGRIntermediatedata.push(data);
                return data;
            }); 
            ogrIntermediatedata.forEach(function(obj) {
                if (!obj) return;
                let gi = calGetisOrdGi(obj,threshold);
                if(!gi) gi = 0.5; 
                const data = {
                    name: obj.name,
                    value: obj.value,
                    city: obj.city,
                    geometry: obj.geometry,
                    gi: gi,
                };
                mapG.push(data);
            });
            console.log(mapG);
            mapG.forEach(function(map) {
                // 判断gi值，分为5类，分别是大于0.9，大于0.8，小于0.2，小于0.1，其他
                let gilable = '';
                if (map.gi > 0.95) {
                    gilable = '热点';
                } else if (map.gi > 0.90) {
                    gilable = '次热点';
                } else if (map.gi < 0.1) {
                    gilable = '次冷点';
                } else if (map.gi < 0.05) {
                    gilable = '冷点';
                } else {
                    gilable = '非显著';
                }
                const graphic = new Graphic({
                    geometry: map.geometry,
                    attributes: {
                        name: map.name,
                        userScore: map.value,
                        gi: gilable,
                        city: map.city,
                    }
                });
                // 添加或更新 Graphic 对象
                graphicsLayer.add(graphic);
            });

        });
        return graphicsLayer;
    }

    // calGetisOrdGi方法
    function calGetisOrdGi(obj: OGRIntermediatedata,threshold: number): number {
        // 求wij * xj 和
        let Gi = 0.0
        let sumwijxj = 0.0
        let sumwij = 0.0
        let sumxj = 0.0
        let sumwij2 = 0.0
        let sumxj2 = 0.0
        const n = m_OGRIntermediatedata.length
        m_OGRIntermediatedata.forEach(tempobj => {
            if (tempobj.id !== obj.id) {
                const dist = geometryEngine.distance(obj.geometry, tempobj.geometry, "meters")
                const wij = dist <= threshold ? 1 : 0
                const xj = tempobj.value
                sumwijxj += wij * xj
                sumwij += wij
                sumxj += xj
                sumwij2 += Math.pow(wij, 2)
                sumxj2 += Math.pow(xj, 2)
            }
        })
        const X = sumxj / n
        const S = Math.sqrt((sumxj2 / n) - Math.pow(X, 2))
        Gi = (sumwijxj - (X * sumwij)) / (S * Math.sqrt((n * sumwij2 - Math.pow(sumwij, 2)) / n - 1))
        return Gi
    }
    return { process }
};