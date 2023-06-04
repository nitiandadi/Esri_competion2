import { buildData } from '@/features';
import { ref } from 'vue';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore';
const destoryIndex = {
    '无损坏': 1,
    '轻度损坏': 2,
    '中度损坏': 3,
} 
function getXData() {
    const xdata: any[] = [];
    buildData.forEach((item: any) => {
        xdata.push(item.name + `\n`);
    });
    return xdata;
}
function getYearData() {
    const yearData: any[] = [];
    buildData.forEach((item: any) => {
        yearData.push(item.year);
    });
    return yearData;
}
function getDestoryData() {
    const destoryData: any[] = [];
    buildData.forEach((item: any) => {
        // @ts-ignore
        const index = destoryIndex[item.destory];
        destoryData.push(index);
    });
    return destoryData;
}
const countA = ref(0);
const countB = ref(0);
const countC = ref(0);
function getDestoryCount(value: number) {
    buildData.forEach((item: any) => {
         // @ts-ignore
         const index = destoryIndex[item.destory];
         const year = item.year;
         const count = index * 0.7 + year * 0.3;
        if(count < 1.5) countA.value++;
        else if(count < 2.5) countB.value++;
        else countC.value++;
    });
    const mum = countA.value + countB.value + countC.value;
    const data = [countA.value / mum, countB.value / mum, countC.value / mum];
    usewidget3dStore().setBuildparam(data);
    return data[ value];
}
//柱状图配置
const BuildOptions = {
    title: {
        text: '黄河漂流广场-农家院',
        textStyle: {
            color: '#fff'
        },
    },
    legend: {
        left: 'right',
        data: ["年限", "损坏程度"] ,   
        textStyle: {
            color: '#4c9bfd'
        },
    },
    tooltip:  {
        trigger: 'axis',
        axisPointer: {  // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 显示为直线，对于柱状图，可以设置为 'shadow'，表示显示阴影
        },
        backgroundColor: '#115687',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: [5, 10],
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 80px;',
        formatter: function (params: any[]) {
            let html = '<div style="font-size: 16px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
            params.forEach(function (item) {

                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value + '<br>';
            });
            // html += '</div>';
            return html;
        },
    },
    dataset: {
        source: []
    },
    xAxis: {
        type: "category", 
        data: getXData(),
        splitLine: { show: false },
        axisLabel: {
            show: false,  //隐藏刻度文本
            interval: 0
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#4c9bfd'
        }
    },
    calculable: true,
    grid: {
        // top: 105,
      bottom: 10,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            formatter: function (params: any) {
              return params.value.replace('\n', '');
            }
          }
        }
      }
    },
    series: [
        { type: "bar", name: "年限", data: getYearData() },
        { type: "bar", name: "损坏程度", data: getDestoryData()  } ,
        {
            type: "pie",
            center: ['75%', '25%'],
            radius: '28%',
            z: 100,
            emphasis: {
                focus: 'self'
            },
            data: [ 
                { name: '优', value: getDestoryCount(0) },
                { name: '良', value: getDestoryCount(1) },
                { name: '一般', value: getDestoryCount(2) }
            ],
        }
    ]
}
export default BuildOptions ;