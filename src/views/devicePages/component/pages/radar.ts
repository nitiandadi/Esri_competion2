// const dataBJ = [
//   [180, 100, 200,3, 80, 10, 10],
// ];
import { useTime } from '@/hooks/useTime';

const time = useTime();
//获得当前时间为中心的连续五天的日期
function getFivecities() {
    const fiveCities: string[] = ['西宁', 'City2', 'City3', 'City4', 'City5'];
    return fiveCities;
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
        legend: {
            left:"9%",
            top:"0px",
          
            orient:'vertical',
            itemWidth: 30,
            itemHeight: 20,
            itemGap: 0.2,
            data:[
            {name:'拥堵',icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaUlEQVR4nO3X0QnAMAgEUGe8/Sfxp9mhFA6a98AFPKNkBgAAAAAAAAAAAAAAAAAAAIDf2ORRed0DAaQ7QAKIAK5eYeMGRADtKVwvoN+ItYL6zdhClX8RAAAAAAAAAAAAAAAAAAAAAMx3Drl3iNud/LkQAAAAAElFTkSuQmCC'},
            {name:'通畅',icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVR4nO3XgQnAMAgEQJdzJsd1lHSHUnho7sAFfKOkCgAAAAAAAAAAAAAAAAAAAIDf6J2j5nUPBLDZARLACuDqFVZuwAggPYXtBeQb0VZQvhkdqPAvAgAAAAAAAAAAAAAAAAAAAID6zgMM5oFbSrb6AwAAAABJRU5ErkJggg=='},
            {name:'未知',icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAY0lEQVR4nO3UwRGAQAgEQfJPesxBH3jaXUUAsMAMAAAAAAAAAAAAAAAAAAAAAN9Rqe7PQADtLpAAEsCvX9hj2w10eAkgAaxvYS5gfxCd+oIAAAAAAAAAAAAAAAAAAAAAmJe4AAcpeOouzH0EAAAAAElFTkSuQmCC'}
        ],
        textStyle:{
            fontSize: 10,//字体大小
            color: '#4c9bfd'//字体颜色
        }  
        
        },
        animation: true,
        timeline: {
            data: [],
            axisType: 'category',
            orient: 'vertical',
            right: '0%',  // 调整时间轴位置
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
              { name: '路网高延时运行时间占比', max: 300,color:'#4c9bfd'},
              { name: '路网拥堵路段里程比', max: 250,color:'#4c9bfd' },
              { name: '常发拥堵路段里程比', max: 300 ,color:'#4c9bfd'},
              { name: '路网高峰行程延时指数', max: 5,color:'#4c9bfd' },
              { name: '骨干道路运行速度偏差率', max: 200,color:'#4c9bfd' },
              { name: '高峰平均速度', max: 100 ,color:'#4c9bfd'}
            ],  
            center: ['42%', '52%'],             
        },
        series: [
            {                       
            name: '拥堵',
            type: 'radar',
            data: [],
        },
        {                       
            name: '通畅',
            type: 'radar',
            data: [],
        },
        {                       
            name: '未知',
            type: 'radar',
            data: [],
        },
    ],
    
    },
    options: [],
};
// 获取五天的日期
const fiveCities = getFivecities();

// 配置数据
const dataMap: { [key: string]: number[] }  = {
    [fiveCities[0]]:  [180, 100, 200,3, 80, 10, 10],
    [fiveCities[1]]:  [150, 100, 200,2, 50, 20, 40],
    [fiveCities[2]]:  [180, 100, 200,3, 80, 10, 10],
    [fiveCities[3]]:  [180, 100, 200,3, 80, 10, 10],
    [fiveCities[4]]:  [180, 100, 200,3, 80, 10, 10],
};  
// 获取雷达图的指标信息
const radarOption: echarts.RadarComponentOption = Radaroptions.baseOption?.radar as echarts.RadarComponentOption;
// 填充雷达图的配置项
for (let city in dataMap) {
    let data = dataMap[city];
    console.log(city);
    let item: echarts.EChartsOption = {
        series:{
            data: [{
                value: data,
                name: city,
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
    Radaroptions.baseOption?.timeline?.data?.push(city);
}

export default Radaroptions;