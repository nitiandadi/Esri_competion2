/**
 * 整理feature对象中的数据，填充echarts中有关时间轴的配置项
 * @param feature  feature 对象源数据。
 * @param timechart  有光时间轴的图表。
 * @returns void。
 */
import axios from 'axios';
import { useTime } from '@/hooks/useTime';
const time = useTime();
//获得当前时间为中心的连续五天的日期
function getFiveDays() {
    let fiveDays: string[] = [];
    let nowTime = new Date(time.year.value, time.month.value - 1, time.day.value).getTime();
    let oneDayTime = 24 * 60 * 60 * 1000;
    for (let i = 0; i < 5; i++) {
        let ShowTime = new Date(nowTime + (i - 4) * oneDayTime);
        let month = ShowTime.getMonth() + 1;
        let day = ShowTime.getDate();
        let time = month + '-' + day;
        fiveDays.push(time);
    }
    return fiveDays;
}

export async function useTimeoption(timechart: echarts.ECharts | null, data: any) {
    // 获取五天的日期
    const fiveDays = getFiveDays();
    // 配置数据
    const dataMap: { [key: string]: number[] }  = {
        [fiveDays[0]]: [],
        [fiveDays[1]]: [],
        [fiveDays[2]]: [],
        [fiveDays[3]]: [],
        [fiveDays[4]]: [],
    }; 
    // 获取到id值对应的feature对象中的子对象
    await axios.post("http://81.70.22.42:9000/quality/airLast5d", data).then((res) => {
        // 初始化series对象
        let options = [];
        // 初始化子对象
        let childfeature: {  [key: string]: number[]} = res.data;
        // 遍历数据集，将数据添加到时间数据中
        for (let key in childfeature) {
            if(key === "pm2p5" || key === "pm10" || key === "so2" || key === "no2" || key === "co"){
                // 获取到子对象中的数据
                let datas = childfeature[key];
                // 将数据添加到时间数据中
                datas.forEach((data: number, index: number) => {
                    dataMap[fiveDays[index]].push(data);
                });
            }
        };
        // 更改雷达图的配置项数据
        if (timechart) {
            for (let date in dataMap) {
                const newseries = {
                    "series": {
                        'data' : [{ 
                            'value' : dataMap[date],
                            'name' : date,
                            'itemStyle': {
                                'color': '#17e3f5', // 系列折线颜色
                            }
                        }]
                    }
                };
                options.push(newseries);
            };
            timechart.setOption({
                options: options
            });
        }
    });          
}