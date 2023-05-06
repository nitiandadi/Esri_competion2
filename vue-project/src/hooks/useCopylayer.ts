/**
 * 复制一份图层
 * @param {__esri.FeatureLayer} featureLayer 地图视图 
 * @returns copylayer
 */

//提供一个copylayer，并支持编辑
export function useCopylayer(featureLayer: __esri.FeatureLayer){
    let copylayer: __esri.FeatureLayer | null = null;
    //复制图层
    copylayer = featureLayer.clone();
    
    return copylayer;
  }