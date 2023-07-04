/**
 * 将feature中的数据按要素ID给出对应图表系列所需对象。
 * @param feature  feature 对象源数据。
 * @param name 要素名称。
 * @returns series 数据集。
 */
import { useTimeoption} from '@/hooks/useTimeoption'
import { qualityname } from '@/features';
import axios from "axios";
import { useTime } from '@/hooks/useTime';
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
        let time = year + '-' + month + '-' + day;
        time = ""
        fiveDays.push(time);
    }
    return fiveDays;
}

export async function useGetdata(results: __esri.FeatureSet, name: string , ChartLine: echarts.ECharts | null, ChartRadar: echarts.ECharts | null, ChartBar: echarts.ECharts | null) {
        //获得feature的坐标
        const geometry = results.features[0].geometry;
        const point = geometry as __esri.Point;
        //将坐标转换为json格式
        const data = {
            "location": `${point.longitude},${point.latitude}`
        }
        // 根据FID要素，为图表添加新的数据
        let series = []; // 初始化子对象
        // 获取到id值对应的climate对象中的series对象
        await axios.post("http://81.70.22.42:9000/quality/weaNear5d", data).then((res) => {
            // 初始化series对象
            series = [];
            //遍历res.data对象，将数据整理为新对象{data：series[key]}，并赋值给series对象
            for (let key in  res.data ) {
                if(key === "tempMax" || key === "tempMin" || key === "humidity" ){
                    const newData = {
                        "data": res.data[key]
                    };
                    series.push(newData);
                }
            }
            addData(series, ChartLine);
        });
        
        // 获取到id值对应的waterquality对象中的数据集
        //获得feature的areaCode，站点name，日期
        const city = results.features[0].attributes['city'];
        //获得该城市的行政代码
        const message = qualityname[city];
        let areaCode = '';
        name = '';
        for(let index in message){
            areaCode = message[index].行政区划;
            name = index;
        }
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
        //转换为json格式
            const waterdata = {
                "areaCode": areaCode,
                "name": name,
                "date": fiveDays[i],
            }
            //使用axios发送请求，获得feature的数据
            await axios.post('http://81.70.22.42:9000/quality/water',waterdata).then((res) => {
            //为图层提供数据
                for(let index in res.data){
                    if(index === 'ph' || index === 'dissolvedoxygen' || index === 'permanganateindex' || index === 'totalnitrogen'){
                    setfeature[index].push(res.data[index]);
                    }
                }
            });
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

        useTimeoption( ChartRadar, data);// id值对应的pollution对象中的数据集来修改相关时间配置
}