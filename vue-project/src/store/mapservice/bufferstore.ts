import * as geometryEngineAsync from "@arcgis/core/geometry/geometryEngineAsync.js";
import Graphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import { defineStore } from 'pinia'
import { Ref,ref} from "vue";

export const useBufferStore = defineStore('buffer', () =>  {
    let bufferGraphic: __esri.Graphic|null = null;
    const unit = "kilometers";
    // Create layers
    const bufferLayer = new GraphicsLayer({
      blendMode: "color-burn"
    });
    // 图表的数据存储
    let nameList: Ref<string[]> = ref([]);
    /*********************************************************************
    * 空间查询  要素图层视图以进行统计
    * 使用更新的缓冲区多边形。
    *********************************************************************/
    async function queryLayerViewAgeStats(buffer: any,view: __esri.MapView) {
        // 获取view中的id为points的图层
        const pointslayer = view.map.findLayerById("points") as __esri.FeatureLayer;
        // 客户端空间查询：获取与多边形缓冲区相交的要素
        const query = pointslayer.createQuery();
        query.geometry = buffer;
        query.spatialRelationship = "intersects";
        query.outFields = ["*"];
        query.returnGeometry = true;
        // 使用 FeatureLayerView.queryFeatures 在客户端查询功能
        await pointslayer.queryFeatures(query).then(function(results) {
            // @ts-ignore
            const uniqueValueInfos = pointslayer.renderer.uniqueValueInfos;
            nameList.value = [];
            results.features.forEach(function(result) {
                const name = result.attributes.name;
                for (let i = 0; i < uniqueValueInfos.length; i++) {
                    const uniqueValueInfo = uniqueValueInfos[i];
                    if (uniqueValueInfo.value === name) {
                        nameList.value.push(name);
                    }
                }  
            }); 
        });     
    }

    async function drawBufferPolygon( highlightGraphic: __esri.Graphic | null,view: __esri.MapView,radius: number ) {
        /***************************************************
         * 在应用程序加载或时绘制缓冲区多边形
         * 当用户搜索新位置或绘制地图时
         **************************************************/
        // 从视图中获取 highlightGraphic 的位置
        const highlightGeometry = highlightGraphic?.geometry as __esri.Point; 
        const centerScreenPoint = view.toScreen(highlightGeometry );
        // 将视图放大
        view.zoom = 8;
        // 将屏幕点转换为地图点
        const centerPoint = view.toMap({
          x: centerScreenPoint.x,
          y: centerScreenPoint.y
        });
        // 根据半径创建缓冲区
        const buffer = await geometryEngineAsync.geodesicBuffer(
            centerPoint,
            radius,
            unit
        ) as __esri.Polygon;         
        const bufferSymbol = {
            type: "simple-fill",
            color: [150, 150, 150],
            outline: {
                color: "#FFEB00",
                width: "3px"
            }
        };
        // 先删除旧的缓冲区图形
        bufferLayer.removeAll();
        bufferGraphic = createGraphic(buffer, bufferSymbol, null);
        bufferLayer.addMany([bufferGraphic]);
        view.map.add(bufferLayer);
        queryLayerViewAgeStats(buffer,view);
    }
    
    function createGraphic(geometry: any, symbol:any, attributes: any) {
        const graphic = new Graphic({
            geometry,
            symbol,
            attributes
        });
        return graphic;
    }
    // 定义一个方法，用于清除缓冲区
    function clearBuffer() {
        bufferLayer.removeAll();
        nameList.value = [];
    }
    return{drawBufferPolygon,nameList,clearBuffer}
});