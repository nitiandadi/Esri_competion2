import { defineStore } from 'pinia'
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import axios from 'axios';
import { xyToLngLat } from '@arcgis/core/geometry/support/webMercatorUtils';
export const useroadconditionStore = defineStore('roadcondition',() => {
    interface RoadData {
      roadName: string;
      congestionEvaluation: string;
    }
    const roadDataList: RoadData[] = [];
    
    async function fetchCongestionEvaluationData() {
      const url = '/api/traffic/v1/road?';
      try {
        const roadNames = ['金塔路', '清泉路','林秀路','庄隆路','香安大道','团结南路','团结北路','通宁路','环城北路']; // 替换为要查询的多条道路名称数组
        for (const roadName of roadNames) {
        const response = await axios.get(url, {
          params: {
            ak:'IzCONMfUjk7k3lTCIwe5w9shHHyXm5R3',
            road_name: roadName,
            city:'西宁',
            coord_type_input: 'gcj02',
            coord_type_output: 'gcj02',
          }
        });
        const congestionEvaluationData = response.data;
        console.log(congestionEvaluationData);
        // 提取道路名称和堵塞评价数据
       //const roads = congestionEvaluationData?.road_traffic?.road_name;
        const newData:RoadData={
            roadName: response.data.road_traffic[0].road_name,
            congestionEvaluation:response.data.evaluation.status,
        }
        // 更新道路数据列表
        roadDataList.push(newData);
        //console.log(newData);
        console.log(roadDataList[0]);
        }
      } catch (error) {
        console.error('Failed to fetch congestion evaluation data:', error);
      }
    }
    // 在组件初始化时获取数据
    function updateFeatureLayerAttributes(layer:FeatureLayer, roadDataArray: RoadData[]) {
      // 遍历 RoadData 数组
      //console.log(roadDataList[0]);
      const attributeFieldName = "index_";
      //const updateFeatures: any[] = []
      for (const roadData of roadDataArray) {
        const roadName = roadData.roadName;
        const congestionEvaluation = roadData.congestionEvaluation;
        console.log(`Road Name: ${roadName}`);
        console.log(`Congestion Evaluation: ${congestionEvaluation}`);
        // 构造查询参数
        const query = layer.createQuery();
        query.where = `name = '${roadName}'`;
    
      // 查询与路段名称匹配的要素
      layer.queryFeatures(query).then(function(response) {
          const features = response.features;
          // 遍历查询结果，更新堵塞评价属性
          features.forEach((feature: { attributes: { [x: string]: string; }; }) => {
            feature.attributes[attributeFieldName] = congestionEvaluation;
          });
          
          // 应用编辑，更新要素图层
          layer.applyEdits({updateFeatures: features}).then(() => {
              console.log("成功！");
            }).catch((error) => {
               console.log("失败");
            });
        })
        .catch((error: any) => {
          // 查询失败  
          //console.log("失败");
        });
        }
      }
    
    
    // 返回需要在模板中使用的数据和方法
    
    //
 
    async function renderFeatureLayer(roadNetworkData: any) {

      const redata = roadNetworkData.map((roadNetworkData: any) => {
        let color = 'blue'; // 默认颜色为红色
      
        if (roadNetworkData.index === 0) {
          color = 'blue'; // 指定金塔路的颜色为蓝色
        }
        else if (roadNetworkData.index === 1) {
          color = 'green'; // 指定金塔路的颜色为蓝色
        }
        else if (roadNetworkData.index === 2) {
          color = 'red'; // 指定金塔路的颜色为蓝色
        }
        // else if (roadNetworkData.index === 3) {
        //   color = 'red'; // 指定金塔路的颜色为蓝色
        // }
      
        return {
          name: roadNetworkData.name,
          coords: roadNetworkData.coords,
          lineStyle: {
            normal: {
              color: color
            }
          }
        };
      });
    }
      //
  
    
    
    async function extractRoadNetworkData(featureLayer: FeatureLayer): Promise<{ coords: number[][] }[]> {
      return new Promise((resolve, reject) => {
        const roadNetworkData: { coords: number[][] }[] = [];
    
        // 查询图层中的所有要素
        featureLayer.queryFeatures().then((results: { features: any[] }) => {
          results.features.forEach((feature: { geometry: any }) => {
            const geometry = feature.geometry;
    
            // 如果几何类型是多段线
            if (geometry.type === "polyline") {
              const paths = geometry.paths;
    
              paths.forEach((path: number[][]) => {
                // 将路径中的每个点坐标添加到数组中
                const coords: number[][] = path.map((point: number[]) => {
                  const [longitude, latitude] = xyToLngLat(point[0], point[1]);
                  return [longitude, latitude];
                });
    
                roadNetworkData.push({
                  coords: coords
                });
              });
            }
          });
    
          resolve(roadNetworkData);
        }).catch((error) => {
          reject(error);
        });
      });
    }

    async function fieldRoadNetworkData(featureLayer: FeatureLayer): Promise<{ coords: number[][], index: number }[]> {
      return new Promise((resolve, reject) => {
        const roadNetworkData: { coords: number[][], index: any }[] = [];
    
        // 查询图层中的所有要素
        featureLayer.queryFeatures().then((results: { features: any[] }) => {
          results.features.forEach((feature: {
            geometry: any, attributes: { [key: string]: any }
}) => {
            const geometry = feature.geometry;
            const attributeFieldName = "index_";
            // 如果几何类型是多段线
            if (geometry.type === "polyline") {
              const paths = geometry.paths;
    
              paths.forEach((path: number[][]) => {
                // 将路径中的每个点坐标添加到数组中
                const coords: number[][] = path.map((point: number[]) => {
                  const [longitude, latitude] = xyToLngLat(point[0], point[1]);
                  return [longitude, latitude];
                });
    
                roadNetworkData.push({
                  coords: coords,
                  index: feature.attributes[attributeFieldName] // 将传入的 fieldValue 设置为 字段1 的值
                });
              });
            }
          });
    
          resolve(roadNetworkData);
        }).catch((error) => {
          reject(error);
        });
      });
    }
    
    
    return { fetchCongestionEvaluationData, renderFeatureLayer, updateFeatureLayerAttributes,roadDataList,extractRoadNetworkData,fieldRoadNetworkData};
});