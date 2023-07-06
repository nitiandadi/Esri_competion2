import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import {GetisOrdGi} from '@/hooks/hotspot';
import { defineStore } from 'pinia'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import { UniqueValueRenderer } from '@arcgis/core/renderers';

export const useClusterStore = defineStore('cluster', () =>  {

    // 函数在应用程序加载并运行统计查询后运行一次
    // 在景点图层上将所有要素的用户评分进行统计，由小到大分成6个部分，并将每部分与图层的相应要素关联起来。
    async function runStats(view: __esri.MapView, numChunks: number ,nameList:string[]): Promise<any> {
      view.zoom = 5;
      const myFeature = view.map.allLayers.find((layer) => {
        return layer.id === "points";
      }) as __esri.FeatureLayer;
      // 创建一个查询，以获取要素图层中的所有要素
      const query = myFeature.createQuery();
      query.outFields = ["userScore", "name"];
      const statsResults = await myFeature.queryFeatures(query);
      // 将要素按用户评分进行排序
      const userScoreArray = statsResults.features
      .filter((feature) => nameList.indexOf(feature.attributes.name) !== -1)
      .map((feature) => {
        const userScore = feature.attributes.userScore;
        const geometry = feature.geometry;
        const name = feature.attributes.name;
        return { userScore, geometry, name };
      }).sort((a, b) => a.userScore - b.userScore);
      
      // 找到最小和最大评分
      const minScore = Math.min(...userScoreArray.map((obj) => obj.userScore));
      const maxScore = Math.max(...userScoreArray.map((obj) => obj.userScore));

      // 计算分数区间
      const scoreRange = (maxScore - minScore) / numChunks;

      // 将userScoreArray分成六个部分
      const chunkedArray = Array.from({length: numChunks}, (_, i) => {
        const min = minScore + i * scoreRange;
        const max = i === numChunks - 1 ? maxScore : minScore + (i + 1) * scoreRange;
        return userScoreArray.filter((obj) => obj.userScore >= min && obj.userScore < max);
      });
      // 建立一个图表数组，根据它可以创建一个柱状图表，显示每个部分的用户评分范围以及要素数量
      const chartData = chunkedArray.map((chunk) => {
          const range = [chunk[0].userScore, chunk[chunk.length - 1].userScore];
          const count = chunk.length;
          return { range, count };
      });
      return {chartData, chunkedArray};
    }
    // 当用户将鼠标悬停在圆环图上时调用此函数
    // 它将在用户悬停的区域上运行统计信息得到区域内的要素并在地图上高亮显示
    async function highlightFeatures(view: __esri.MapView,chunkedArray: {
      name: string;
      userScore: any;
      geometry: __esri.Geometry;
    }[]): Promise<void> {
      const graphicsLayer = new GraphicsLayer({
          id: `count`
      });
      chunkedArray.forEach((chunk) => {
        const graphic = new Graphic({
            geometry: chunk.geometry,
            attributes: {
              name: chunk.name,
              userScore: chunk.userScore,
            },
            symbol: new SimpleMarkerSymbol({
              style: 'circle',
              size: '9px',
              color: [0, 0, 128, 0.8], 
              outline: {
                color: [78, 25, 255, 1], 
                width: '5px',
              },
            }),
        });
        graphicsLayer.add(graphic);
    })  
    // 先删除所有的要素
    view.graphics.removeAll();

    // 将新的要素添加到视图中
    view.graphics.addMany(graphicsLayer.graphics.toArray());
  }

    // 函数在应用程序加载并运行统计查询后运行一次
    // 进行热点分析
    async function gethotspot(view: __esri.MapView,tempFields: string,nameList:string[]) {
      const myFeature = view.map.allLayers.find((layer) => {return layer.id === "points";}) as __esri.FeatureLayer;
      const Layer = await GetisOrdGi().process(myFeature, tempFields, nameList);
      myFeature.visible = false;
      const giLayer = new FeatureLayer({
        source: Layer.graphics,
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
            name: "userScore",
            alias: "UserScore",
            type: "double"
          },
          {
            name: "gi",
            alias: "Gi",
            type: "string"
          }
        ],
        objectIdField: "OBJECTID",
        geometryType: "point",
        id: Layer.id,
      });
      addrender(giLayer);
      debugger
      view.map.add(giLayer);
    }
    //给图层新渲染器
    function addrender(myFeature: __esri.FeatureLayer) {
      // 定义颜色数组,从浅到深
      const innerColors = [
        [205, 92, 92, 0.8],   // 深红色,级别1
        [255, 192, 203, 0.5],  // 浅红色,级别2
        [0, 139, 139, 0.8],   // 深青色,级别3
        [72, 209, 204, 0.8],  // 浅青色,级别4
        [211, 211, 211, 0.5],  // 浅灰色,级别5
      ];
      
      const outerColors = [
        "#8B0000",  // 深红,与深红色对应
        "#FF69B4",  // 浅红,与浅红色对应
        "#008B8B",  // 深青,与深青色对应
        "#00CED1",  // 浅青,与浅青色对应
        "#D3D3D3",  // 浅灰,与浅灰色对应
      ];
      // 大小数组
      const sizes = [
        "15px",
        "10px",
        "15px",
        "10px",
        "5px",
      ]
      const symbols = [];

      // 循环创建多个符号,对应不同的级别
      for (let i=0; i<5; i++) {
        // 创建新的符号
        const symbol = new SimpleMarkerSymbol({
          style: 'circle',
          size: sizes[i],          
          color: innerColors[i],
          outline: {                
            color: outerColors[i],  
            width: 2                
          },               
        });
        symbols.push(symbol);
      }
      // 创建一个新的渲染器
      const renderer = new UniqueValueRenderer({
          field: "gi",  // 要根据哪个字段的值进行渲染
          uniqueValueInfos: [      
            {
              value: '热点',
              symbol: symbols[0]
            },
            {
              value: '次热点',
              symbol: symbols[1]
            },
            {
              value: '冷点',
              symbol: symbols[2]
            },
            {
              value: '次冷点',
              symbol: symbols[3]
            },
            {
              value: '非显著',
              symbol: symbols[4]
            },
          ]
      });
      // 将渲染器分配给要素图层
      myFeature.renderer = renderer;
      //设置pointslayer弹窗模板
      const popupTemplate = new PopupTemplate({
          // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
          title: "{name}",
          content: [{
              type: "fields",
              fieldInfos: [
                  {
                      fieldName: "city",
                      label: "所在城市"
                  },
                  {
                      fieldName: "userScore",
                      label: "用户评分"
                  },
              ]
          }],
      });
      myFeature.popupTemplate = popupTemplate;
    }
    // 当用户未将鼠标悬停在图表上时清除与区域相关的地图高亮显示
    function clearStatsInfo(view: __esri.MapView) {
      view.graphics.removeAll();
    }
    // 恢复原状
    function rest(view:__esri.MapView){
      const myFeature = view.map.allLayers.find((layer) => {return layer.id === "points";}) as __esri.FeatureLayer;
      myFeature.visible = true;
      const gilayer = view.map.allLayers.find((layer)=> {return layer.id === "giLayer";}) as __esri.FeatureLayer;
      view.map.remove(gilayer)
    }
    return {runStats, highlightFeatures, clearStatsInfo,gethotspot,rest} 
});