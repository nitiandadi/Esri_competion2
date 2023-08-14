/**
 * 将feature中的数据按要素ID给出对应图表系列所需对象。
 * @param feature  feature 对象源数据。
 * @param name 要素名称。
 * @returns series 数据集。
 */
import { useTimeoption} from '@/hooks/useTimeoption'
import { useTime } from '@/hooks/useTime';
import { usedataStore } from '@/store/environment/datastore'
// 为图表添加新的数据
function addData( series: any[] , chart: echarts.ECharts | null ) {
    if (chart) {
        chart.setOption({
            series: series
        });
    };
};

const time = useTime();
//获得当前时间为中心的连续五天的日期
function getFiveDays() {
    let fiveDays: string[] = [];
    let nowTime = new Date(time.year.value, time.month.value - 1, time.day.value).getTime();
    let oneDayTime = 24 * 60 * 60 * 1000;
    for (let i = 0; i < 5; i++) {
        let ShowTime = new Date(nowTime + (i - 4) * oneDayTime);
        let year = ShowTime.getFullYear();
        let month = ShowTime.getMonth() + 1;
        let day = ShowTime.getDate();
        let time = year + '/' + month + '/' + day;
        time = "";
        fiveDays.push(time);
    }
    return fiveDays;
}

export async function useGetdata(results: __esri.FeatureSet, name: string , ChartLine: echarts.ECharts | null, ChartRadar: echarts.ECharts | null, ChartBar: echarts.ECharts | null) {
       const environmentdata = usedataStore().data;
        //获得feature的城市
        const mycity = results.features[0].attributes['city'];
        // 根据FID要素，为图表添加新的数据
        let series = []; // 初始化子对象
        /**
        *获取到id值对应的climate对象中的series对象
        */
       const features = environmentdata[mycity].weaNear5d;
        //初始化series对象
        series = [];
        //随机获取一个feature
        const feature = features[Math.floor(Math.random() * features.length)];
        //遍历feature对象，将数据整理为新对象{data：series[key]}，并赋值给series对象
        for (let key in  feature) {
            if(key === "tempMax" || key === "tempMin" || key === "humidity" ){
                const newData = {
                    "data": feature[key]
                };
                series.push(newData);
            }
        }
        addData(series, ChartLine);
        /**
        *获取到id值对应的waterquality对象中的数据集
        */
        // 配置数据 
        const fiveDays: string[] = getFiveDays();
        // 初始化保存数据的数组
        const setfeature:{ [key:string]: number[]} = {
            "ph": [],
            "dissolvedoxygen": [],
            "permanganateindex": [],
            "totalnitrogen": [],
        };
        for(let i = 0; i < fiveDays.length; i++){
            const features = environmentdata[mycity].water              
            //随机获取一个feature
            const feature = features[Math.floor(Math.random() * features.length)];
            //为图层提供数据
            for(let index in feature){
                if(index === 'ph' || index === 'dissolvedoxygen' || index === 'permanganateindex' || index === 'totalnitrogen'){
                    setfeature[index].push(feature[index]);
                }
            }
        }
        //初始化series对象
        series = [];
        //遍历setfeature对象，将数据整理为新对象{data：series[key]}，并赋值给series对象
        for (let key in  setfeature ) {
            const newData = {
                "data": setfeature[key]
            };
            series.push(newData);
        }
        addData(series, ChartBar);

        useTimeoption( ChartRadar,  environmentdata[mycity].airLast5d);// id值对应的pollution对象中的数据集来修改相关时间配置
}