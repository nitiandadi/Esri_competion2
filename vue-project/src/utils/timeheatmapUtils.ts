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
export function initHeatmap(mapview: __esri.MapView,timefeatureLayer: __esri.FeatureLayer,field: string){
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
      
  //填充时间热力层
  timefeatureLayer.renderer = heatmapRenderer;
  //设置时间热力层的不可见
  timefeatureLayer.visible = false;
  //添加到图层中
  mapview.map.add( timefeatureLayer);
  return  timefeatureLayer;
}

/**取消热力层 */
export  function cancelHeatmap(mapview: __esri.MapView,timefeatureLayer: __esri.FeatureLayer) {
  if (heatmapRenderer) {
    heatmapRenderer = null;
    // 将mapview.map中的热力图层移除
    mapview.map.remove(timefeatureLayer);

  } 
}

/**供外界使用的热力层开关 */
export function toggleHeatmap(mapview: __esri.MapView,featureLayer: __esri.FeatureLayer,field: string) {
  if (heatmapRenderer) {
    cancelHeatmap(mapview,featureLayer);
  } else {
    //使原图层不可见
    return  initHeatmap(mapview,featureLayer,field);
  }
}