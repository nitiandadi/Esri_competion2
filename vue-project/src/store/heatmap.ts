import { defineStore } from 'pinia'
import { useMapviewStore } from '@/store/mapview'
import {initTimeHeatmap,cancelHeatmap} from '@/utils/timeheatmapUtils'
import { AQIfeatures } from '@/features'
import { useCopylayer } from '@/hooks/useCopylayer';
import { useUpdate } from '@/hooks/useUpdata';
import { useTime } from '@/hooks/useTime';

export const useHeatmapStore = defineStore('heatmap', () => {
    //获取mapview实例
    const view = useMapviewStore().getView() as __esri.MapView;

    //创建带有时间属性的热力图
    function createTimeHeatmap() {
        //获取到图层   
        const pointslayer = (view.map.allLayers.getItemAt(1) as __esri.FeatureLayer);
        //复制该图层
        const copypointslayer = useCopylayer(pointslayer)
        //获取当日时间
        const time = useTime();
        const year = time.year;
        const month = time.month;
        const day = time.day;
        let realytime;
        //流动图层
        let changelayer: __esri.FeatureLayer | null = null;
        let i=0;
        for( i; i<7; i++){
            //为复制图层提供数据
            for (const feature of AQIfeatures) {
                const where = `名称='${feature.name}'`;
                const attributeUpdates = { AQI: feature.AQI[i]};           
                const queryOpts: {
                    where: string;
                    attributeUpdates: {
                        [key: string]: any;
                    }
                } = {
                    where: where ,
                    attributeUpdates: attributeUpdates
                }; 
                //流动图层
                changelayer = useCopylayer(copypointslayer);
                //提供数据
                useUpdate(changelayer, queryOpts);
              
            };
           
                  // #region 
                  changelayer!.queryFeatures().then((result) => {
                    debugger
                    // 在控制台输出查询结果
                    console.log(result.features);
                  }).catch((error) => {
                    console.error("查询要素出错：", error);
                });  
                // #endregion
            //配置时间信息 
            if(day.value > 3)
            realytime = new Date(year.value,month.value-1,day.value-3+i);
            else
            realytime = new Date(year.value,month.value-1,i);
            changelayer!.timeExtent = {
                    start: realytime,
                    end: realytime                

            } as __esri.TimeExtent;
            //用热力图工具创建该图层
            initTimeHeatmap(view ,changelayer as __esri.FeatureLayer ,'AQI') as __esri.FeatureLayer; 
                   
        };
       
    }


    //删除复制图层
    function cancelTimeHeatmap() {
        cancelHeatmap(view);
        view.map.allLayers.getItemAt(1).visible = true
    }
    return { createTimeHeatmap,cancelTimeHeatmap}
})