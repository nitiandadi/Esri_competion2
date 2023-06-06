import Query from "@arcgis/core/rest/support/Query.js";
//@ts-ignore
import { useViewStore } from '@/store/mapviewstore';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
//import Query from "@arcgis/core/rest/support/Query.js";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
// import AMapLoader from '@amap/amap-jsapi-loader';
import LineSymbol from "@arcgis/core/symbols/LineSymbol.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import Graphic from  "@arcgis/core/Graphic";
const store = useViewStore();
let view: __esri.MapView;
import axios from 'axios';

//import ColorRamp from "esri/ColorRamp";

import Color from "@arcgis/core/Color.js";
// import { loadModules } from 'esri-loader';
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
const layeerr=new FeatureLayer;

interface RoadData {
  roadName: string;
  congestionEvaluation: string;
}
const roadDataList: RoadData[] = [];

export async function fetchCongestionEvaluationData() {
  const url = '/api/traffic/v1/road?';
  const akey = 'IzCONMfUjk7k3lTCIwe5w9shHHyXm5R3';
  const roadName = '金塔路';
  const mycity = '西宁';
  const coordTypeInput = 'gcj02';
  const coordTypeOutput = 'gcj02';

  try {
    const response = await axios.get(url, {
      params: {
        ak:'IzCONMfUjk7k3lTCIwe5w9shHHyXm5R3',
        road_name: '南山路',
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
  } catch (error) {
    console.error('Failed to fetch congestion evaluation data:', error);
  }

}
export default roadDataList;
// 在组件初始化时获取数据
export function updateFeatureLayerAttributes(layer:FeatureLayer, roadDataArray: RoadData[]) {
  // 遍历 RoadData 数组
  console.log(roadDataList[0]);
  const attributeFieldName = "路况";
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
//
export function getRoadDataByRoadName(roadName: string): RoadData | undefined {
    return roadDataList.find((roadData: RoadData) => roadData.roadName === roadName);
  }
//
export async function renderFeatureLayer(featureLayer: any) {
  //
//粒子
const glowSymbol = new SimpleMarkerSymbol({
  color: 'rgba(253, 174, 97, 1)',
  size: 15,
  //blur: 10
});

// 创建粒子的符号样式
const particleSymbol = new SimpleMarkerSymbol({
  color: 'red',
  size: 8
});

// 创建 GraphicsLayer 来存储粒子
const graphicsLayer = new GraphicsLayer();
let view = useViewStore().getView();
view.map.add(graphicsLayer);
// const roadFeatureGraphic = new Graphic({
//   geometry: roadline.,
//   symbol: glowSymbol
// });

// // 将路网要素 Graphic 添加到 GraphicsLayer
// graphicsLayer.add(roadFeatureGraphic);

// // 创建粒子的初始位置和移动路径

// const startPoint = roadFeature.geometry.extent.center; // 使用路网要素的中心作为粒子的起始点

// const path = roadFeature.geometry; // 使用路网要素的几何形状作为粒子的移动路径

// // 创建粒子的 Graphic
// const particleGraphic = new Graphic({
//   geometry: startPoint,
//   symbol: particleSymbol
// });

// // 将粒子 Graphic 添加到 GraphicsLayer
// graphicsLayer.add(particleGraphic);

// 定义粒子移动的速度和起始位置索引
let speed = 0.01; // 移动速度
let currentIndex = 0; // 起始位置索引
//
var symbols2 = [
  {
      type: "simple-line",
      color: [50, 122, 183, 0.5],
      width: 3
  },
  {
      type: "simple-line",
      color: [50, 122, 200, 0.8],
      width: 1.5
  },
  {
      type: "simple-line",
      color: [255, 255, 255, 0.5],
      width: 0.75
  },
];

  const symbol1 = new SimpleLineSymbol({
      // autocasts as new SimpleLineSymbol()
      color:'#ca0020' ,
      width: 2,
      style: 'solid',
      cap: 'round',
      join: 'round',
      //@ts-ignore
      path: 'M -9,-9 L 9,9 M 9,-9 L -9,9',
      // 设置荧光效果
      effects: [
        {
          type: 'glow',
          color: 'rgba(253, 174, 97, 1)',
          size: 20,
          blur: 10
        }
      ],
      strokeStyle: 'solid',
      strokeColor: 'rgba(255, 255, 255, 0.5)',
      fillColor: 'rgba(0, 0, 255, 0.5)'
  
  });

  const symbol2 = new SimpleLineSymbol({
    color: [255, 255, 0], // 黄色
    width: 1 // 线宽
  });
  // 其他符号样式...

  // 创建符号渲染规则
  const renderer = {
    type: 'unique-value', // 使用唯一值渲染
    field: '路况', // 使用堵塞评价字段进行渲染
    defaultSymbol: 'symbols2', // 默认的符号样式（可选）
    uniqueValueInfos: [
      { value: 1, symbol: symbol1 }, // 堵塞评价为 1 的符号样式
      { value: 0, symbol: symbol2 }, // 堵塞评价为 2 的符号样式
      // 其他堵塞评价值对应的符号样式
    ]
  };

  // 设置要素图层的渲染器
  featureLayer.renderer = renderer;

  // 刷新要素图层以应用渲染器
  featureLayer.refresh();
}
