/**
 * 获取连续五天所有站点的环境数据（包括气候数据，空气质量数据，水质数据）。
 * @param feature  feature 对象源数据。
 * @param name 要素名称。
 * @returns 。
 */

import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { qualityname, city } from '@/features';
import axios from "axios";
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
export const usedataStore = defineStore('data', () => {
    /**************创建对象，存储环境数据*******************/
    interface CityData {
        weaNear5d: any[];
        airLast5d: any[];
        water: any[];
    }
    interface CityDataMap {
        [cityName: string]: CityData;
    }
    const data: CityDataMap = {};
    async function getdata(percentage: Ref<number>, isActive: Ref<boolean> ,falg: Ref<boolean>) {
        if(falg.value === false) return; 
        isActive.value = true
        percentage.value = 0
        let i = 0;
        //mycit中的坐标挨个发送请求，获得环境数据
        for (const feature of city) {
            // 初始化data对象
            data[feature.name] = {
                weaNear5d: [],
                airLast5d: [],
                water: []
            };
            for (const coordinate of feature.coordinates) {
                const param = {
                    "location": coordinate,
                };
                /**************获取到climate数据*******************/
                await axios.post("http://47.108.76.144:9000/quality/weaNear5d", param).then((res) => {
                    data[feature.name].weaNear5d.push(res.data);
                });
                /**************获取到airquality数据********************/
                await axios.post("http://47.108.76.144:9000/quality/airLast5d", param).then((res) => {
                    data[feature.name].airLast5d.push(res.data);
                });
                /**************获取到waterquality数据*******************/
                //获得feature的areaCode，站点name，日期
                const mycit = feature.name;
                //获得该城市的行政代码
                const message = qualityname[mycit];
                let areaCode = '';
                let myname = '';
                // 随机获取一个站点
                if(message){
                    const siteNames = Object.keys(message);
                    const randomIndex = Math.floor(Math.random() * siteNames.length);
                    myname = siteNames[randomIndex];
                    areaCode = message[myname].行政区划;
                }
                //转换为json格式
                const waterdata = {
                    "areaCode": areaCode,
                    "name": myname,
                }
                //使用axios发送请求，获得feature的数据
                await axios.post('http://47.108.76.144:9000/quality/water',waterdata).then((res) => {
                    data[feature.name].water.push(res.data);
                });
                i++;
                percentage.value = Math.floor(i /  (city.length*3) * 100);
                if (i ===  (city.length*3)) {
                    setTimeout(() => { isActive.value = false; }, 600);
                }
                console.log(percentage.value);
            }
            console.log(data);
            falg.value = false;
        }
    }
    return { getdata, data };
});