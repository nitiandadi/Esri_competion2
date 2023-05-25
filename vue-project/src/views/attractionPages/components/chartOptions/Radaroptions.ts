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

const Radaroptions: echarts.EChartsOption = {
    baseOption: {
        toolbox: {
            show: true,
            orient: 'vertical',
            left: '10',
            top: '-10',
            feature: {},
            itemSize: 25,
        },
        animation: true,
        timeline: {
            data: [],
            axisType: 'category',
            orient: 'vertical',
            left: '15%',  // 调整时间轴位置
            top: 'center',
            width: '15%',  // 设置时间轴的宽度
            height: '200px',
            autoPlay: true,
            playInterval: 1500, 
            label: {
                fontSize: 12,
                color: '#4c9bfd'
            },
            tooltip: {
                show: false,
            }
        },
        tooltip:  {
            trigger: 'axis',
        },
        radar: {
            indicator: [
                { name: 'PM10', max: 100 ,color:'#4c9bfd'},
                { name: 'PM2.5', max: 50,color:'#4c9bfd'},   
                { name: 'CO', max: 1 ,color:'#4c9bfd'},            
                { name: 'SO₂', max: 50 ,color:'#4c9bfd'},
                { name: 'NO₂', max: 50,color:'#4c9bfd' },
            ],  
            center: ['70%', '50%'],             
        },
        series: {                       
            name: '污染指数',
            type: 'radar',
            data: [],
        },
    },
    options: [],
};
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
// 获取雷达图的指标信息
const radarOption: echarts.RadarComponentOption = Radaroptions.baseOption?.radar as echarts.RadarComponentOption;
// 填充雷达图的配置项
for (let date in dataMap) {
    let data = dataMap[date];
    let item: echarts.EChartsOption = {
        series:{
            data: [{
                value: data,
                name: date,
                itemStyle: {
                    color: '#17e3f5', // 系列折线颜色
                },
            }],                    
        },
        tooltip:  {
            trigger: 'item',
            backgroundColor: '#115687',
            borderColor: '#ccc',
            borderWidth: 1,
            padding: [5, 10],
            textStyle: {
                color: '#fff',
                fontSize: 12,
            },
            extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 130px;',
            formatter: function (params: any) {
                let html = '<div style="font-size: 18px; font-weight: bold;height: 30px; ">' + params.name + '</div>';
                if(radarOption.indicator){
                    // 显示各项指标数据
                    for (let i = 0; i < params.value.length; i++) {                                       
                        html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 18px; border-radius: 50%; background-color: ' + params.color + ';"></span>' + radarOption.indicator[i].name + '：' +  params.value[i]+ '<br>';
                    }
                }
                return html;
            },
        },
    };
    // 将数据添加到雷达图的options中
    Radaroptions.options?.push(item);
    // 将时间添加到时间轴中
    Radaroptions.baseOption?.timeline?.data?.push(date);
}

export default Radaroptions;