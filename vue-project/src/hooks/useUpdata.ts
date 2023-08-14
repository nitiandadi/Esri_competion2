import Query from "@arcgis/core/rest/support/Query.js";

/**
 * 更新 FeatureLayer 中指定查询条件的已有属性。
 * @param featureLayer 要更新的 FeatureLayer 对象。
 * @param queryOpts 查询参数对象，包含查询条件及要更新的属性值。
 * @returns featureLayer
 */
export async function useUpdate(featureLayer: __esri.FeatureLayer, queryOpts: {
  where: string;
  attributeUpdates: {
    [key: string]: any;
  }
}){
  const { where, attributeUpdates } = queryOpts;
  const query = new Query({
    where: where,
    outFields: ["*"],
    returnGeometry: true
  });
  //获取查询结果
  const queryResults = await featureLayer.queryFeatures(query);
  if (queryResults.features.length === 0) {
    console.log(featureLayer.id + where);
    throw new Error("No features found for query");
  }

  const updatedFeatures: __esri.Graphic[] = [];
  //对查询结果进行克隆
  queryResults.features.forEach((feature) => {

    const clonedFeature = feature.clone();
    for (const key in attributeUpdates) {
      clonedFeature.attributes[key] = attributeUpdates[key];
    }

    updatedFeatures.push(clonedFeature);
  });
  //更新要素
 
  const editResults = await featureLayer.applyEdits({
    updateFeatures: updatedFeatures
  });
  //判断更新是否成功
  if (!editResults.updateFeatureResults || editResults.updateFeatureResults.length === 0) {
    throw new Error("Update failed");
  }

  return featureLayer;
}
