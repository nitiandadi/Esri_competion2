
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { HeatmapRenderer } from '@arcgis/core/renderers';

/**
 * 热力图层工具
 * @param {__esri.FeatureLayer} featureLayer 地图视图 
 * @param {string} field 字段
 * @param {Object} queryOpts 查询与修改条件
 * @export {(function)toggleHeatmap}  供组件使用的热力层开关
 */

let heatmapRenderer: __esri.Renderer | null;


/**定义一个热力层 */
export function initHeatmap(timefeatureLayer: __esri.GraphicsLayer,field: string,date: Date){
  heatmapRenderer = new HeatmapRenderer({
    field: field,
    colorStops: [
        { ratio: 0, color: "rgba(0, 255, 0, 0)" },  // 0-27 Green
        { ratio: 0.3, color: "rgba(0, 255, 0, 0.5)" }, 
        { ratio: 0.4, color: "rgba(255, 255, 0, 1)" }, // 27-39 Yellow
        { ratio: 0.6, color: "rgba(255, 255, 0, 1)" },
        { ratio: 0.7, color: "rgba(255, 140, 0, 1)" }  // >39 Orange  
    ],
    radius: 15,
    maxDensity: 0.319,
    minDensity: 0,
    
  });
  // debugger
  //填充时间热力层
  const heatMapLayer = new FeatureLayer({
    source: timefeatureLayer.graphics,
    fields: [
      {
        name: "OBJECTID",
        alias: "ObjectID",
        type: "oid"
      },
      {
        name: "name",
        alias: "Name",
        type: "string"
      },
      {
        name: "city",
        alias: "City",
        type: "string"
      },
      {
        name: "aqi",
        alias: "AQI",
        type: "double"
      },
      {
        name: "date",
        alias: "Date",
        type: "date"
      }
    ],
    objectIdField: "OBJECTID",
    geometryType: "point",
    renderer:heatmapRenderer,
    id: timefeatureLayer.id,
    popupTemplate: {  
      title: "{name}",
      // content: "{AQI} mg/m³, {日期}"
      content: "AQI: {aqi} mg/m³, 日期: {date}"
    },
    timeInfo: {
      startField: "date",
      fullTimeExtent: {
        start: date,
        end: date
      }
    },
  });
  //设置时间热力层的不可见
  heatMapLayer.visible = false;
  return  heatMapLayer;
}
