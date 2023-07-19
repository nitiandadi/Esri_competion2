import { Query } from '@arcgis/core/rest/support/Query.js';
import { defineStore } from 'pinia'
// @ts-ignore
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { useViewStore  } from '@/store/mapviewstore';
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
export const usebuffer = defineStore('bufferlyer', () => {
    let hoteldata=new FeatureLayer({
        url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%BD%8F%E5%AE%BF/FeatureServer",
        //outFields:[],
      })
    let query: __esri.Query | __esri.QueryProperties | undefined;
    // const store = useViewStore();
    // const view = useViewStore().getView() as __esri.MapView;
    const polySym = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [140, 140, 222, 0.5],
        outline: {
          color: [0, 0, 0, 0.5],
          width: 2
        }
      };

      const pointSym = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: [255, 0, 0],
        outline: {
          color: [255, 255, 255],
          width: 1
        },
        size: 7
      };
      const polySymview = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: [140, 140, 222, 0.5],
        outline: {
          color: [0, 0, 0, 0.5],
          width: 2
        }
      };

      const pointSymview = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: [255, 0, 0],
        outline: {
          color: [255, 255, 255],
          width: 1
        },
        size: 7
      };

      const hotelPointSymbol = {
        type: 'picture-marker',
// 图片地址，可以网络路径或本地路径（PS：base64亦可）
        url:"image://data:image/png;base64,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",
        // 图片的大小
        width: '50px',
        height: '50px'

    };
    function createBuffer(longitude: number, latitude: number, radius: number, view: any,bufferLayer:FeatureLayer,pointLayer:FeatureLayer) {
            const point = new Point({
                  longitude,
                  latitude,
                  spatialReference: view.spatialReference // 使用地图视图的空间参考
            });
  
            if (point) {
              bufferPoint(point,radius,bufferLayer,pointLayer);
              
            }
          }
    function bufferPoint(point: __esri.Geometry,radius: number | number[],bufferLayer:FeatureLayer,pointLayer:FeatureLayer) { 
            point.hasZ = false;
            point.z = undefined;
  
            if (pointLayer.graphics.length === 0) {
              pointLayer.add(
                new Graphic({
                  geometry: point,
                  symbol: pointSym
                })
              );
            } else {
              const graphic = pointLayer.graphics.getItemAt(0);
              graphic.geometry = point;
            }
            const buffer = geometryEngine.geodesicBuffer(
              point,
              radius,
              "kilometers"
            );
            if (bufferLayer.graphics.length === 0) {
              bufferLayer.add(
                new Graphic({
                  geometry: buffer,
                  symbol: polySym
                })
              );
            } else {
              const graphic = bufferLayer.graphics.getItemAt(0);
              graphic.geometry = buffer;
            }
            const query = hoteldata.createQuery();
            query.geometry = buffer;
            
            const hotelPointSymbol = {
                type: 'picture-marker',
    // 图片地址，可以网络路径或本地路径（PS：base64亦可）
                url:"image://data:image/png;base64,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",
                // 图片的大小
                width: '50px',
                height: '50px'

            };
            hoteldata.queryFeatures(query).then(result => {
            const hotelsWithinBuffer = result.features;
            
      // 遍历缓冲区内的酒店要素，设置自定义样式
            hotelsWithinBuffer.forEach(feature => {
        // 设置自定义符号、颜色或其他可视化属性
                feature.symbol = hotelPointSymbol; // 设置酒店要素的符号
              
        // ...
            });
            bufferLayer.addMany(hotelsWithinBuffer);
            const hotelDetailsDiv = document.getElementById('hotel-details');
            const tbody = hotelDetailsDiv.querySelector('tbody');

            tbody.innerHTML = '';
          
            // 创建表头行
           
            hotelsWithinBuffer.forEach(feature => {
                const hotelName = feature.attributes.name;
                const hotelRating = feature.attributes.rating;
                const hotelPrice = feature.attributes.price;
                const hotelId = feature.attributes.id; 
                
                const row = document.createElement('tr');
                row.style.width='700px';
                row.style.marginBottom='10px';
                row.style.borderBottom='1px solid white';
                // 创建单元格并添加数据
                const nameCell = document.createElement('td');
                nameCell.style.width='220px';
                nameCell.style.fontSize='20px';
                nameCell.style.textAlign='center';
                nameCell.textContent = hotelName;
                row.appendChild(nameCell);
                nameCell.dataset.hotelId = hotelId;
                
            
                const priceCell = document.createElement('td');
                priceCell.style.width='220px';
                priceCell.style.fontSize='20px';
                priceCell.style.textAlign='center';
                priceCell.textContent = hotelPrice;
                row.appendChild(priceCell);
            
                const ratingCell = document.createElement('td');
                ratingCell.style.width='220px';
                ratingCell.style.fontSize='20px';
                ratingCell.style.textAlign='center';
                ratingCell.textContent = hotelRating;
                row.appendChild(ratingCell);
            
                // 将数据行添加到表格中
                tbody.appendChild(row);
            });
            
            })
          }
    function createBufferview(event: { stopPropagation: () => void; }, view: { toMap: (arg0: any) => any; },radius:number,bufferLayerview:FeatureLayer,pointLayerview:FeatureLayer,bufferEnabled:boolean) {
            event.stopPropagation();
            const point = view.toMap(event);
  
            if (point) {
              bufferPointview(point,radius,bufferLayerview,pointLayerview,bufferEnabled);
            }
          }
    function bufferPointview(point: __esri.Geometry | __esri.Geometry[],radius:number,bufferLayerview:FeatureLayer,pointLayerview:FeatureLayer,bufferEnabled:boolean) {
            if(!bufferEnabled){
                console.log('buffering not enabled. Hit the b key and click/drag to buffer.');
                return;
            }
            point.hasZ = false;
            point.z = undefined;
            if(bufferLayerview.graphics.length!=0){bufferLayerview.remove(pointLayerview.graphics.getItemAt(0));}
            if (pointLayerview.graphics.length === 0) {
              pointLayerview.add(
                new Graphic({
                  geometry: point,
                  symbol: pointSymview
                })
              );
            } else {
              const graphic = pointLayerview.graphics.getItemAt(0);
              graphic.geometry = point;
            }
  
            const buffer = geometryEngine.geodesicBuffer(
              point,
              radius,
              "kilometers"
            );
  
            if (bufferLayerview.graphics.length === 0) {
              bufferLayerview.add(
                new Graphic({
                  geometry: buffer,
                  symbol: polySymview
                })
              );
            } else {
              const graphic = bufferLayerview.graphics.getItemAt(0);
              graphic.geometry = buffer;
              const query = hoteldata.createQuery();
              query.geometry = buffer;
  
            hoteldata.queryFeatures(query).then(result => {
            const hotelsWithinBuffer = result.features;
            hotelsWithinBuffer.forEach(feature => {
                feature.symbol = hotelPointSymbol; // 设置酒店要素的符号

            });
            //pointLayerview.removeAll();
            const mygraphics = pointLayerview.graphics.toArray();
            for (let i =  mygraphics.length-1; i >0; i--) {
              const layerToRemove = mygraphics[i];
              pointLayerview.remove(layerToRemove);
            }
            pointLayerview.addMany(hotelsWithinBuffer);
            const hotelDetailsDiv = document.getElementById('hotel-details');
            const tbody = hotelDetailsDiv.querySelector('tbody');

            tbody.innerHTML = '';
          
            // 创建表头行
           
            hotelsWithinBuffer.forEach(feature => {
                const hotelName = feature.attributes.name;
                const hotelRating = feature.attributes.rating;
                const hotelPrice = feature.attributes.price;
                const hotelId = feature.attributes.id; 
                
                const row = document.createElement('tr');
                row.style.width='700px';
                row.style.marginBottom='10px';
                row.style.borderBottom='1px solid white';
                // 创建单元格并添加数据
                const nameCell = document.createElement('td');
                nameCell.style.width='220px';
                nameCell.style.fontSize='20px';
                nameCell.style.textAlign='center';
                nameCell.textContent = hotelName;
                row.appendChild(nameCell);
                nameCell.dataset.hotelId = hotelId;
                
            
                const priceCell = document.createElement('td');
                priceCell.style.width='220px';
                priceCell.style.fontSize='20px';
                priceCell.style.textAlign='center';
                priceCell.textContent = hotelPrice;
                row.appendChild(priceCell);
            
                const ratingCell = document.createElement('td');
                ratingCell.style.width='220px';
                ratingCell.style.fontSize='20px';
                ratingCell.style.textAlign='center';
                ratingCell.textContent = hotelRating;
                row.appendChild(ratingCell);
            
                // 将数据行添加到表格中
                tbody.appendChild(row);
            });
            
            })
            
            
            }

            
             
          }

    return{createBuffer,createBufferview,query}
})