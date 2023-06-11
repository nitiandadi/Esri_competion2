
import { ref } from 'vue';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore';
const source = [
    ['product', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月' ],
    ['第一年', 650, 820, 880, 720, 580, 920, 850, 820, 780, 700, 630, 610],
    ['第三年', 520, 540, 590, 550, 740, 710, 680, 620, 580, 510, 470, 440], 
    ['第五年', 450, 670, 730, 390, 480, 350, 300, 280, 320, 370, 420, 500]
];
const countA = ref(0);
const countB = ref(0);
const countC = ref(0);
function getvisitorData(value: number) {
    source.forEach((item) => {
        if(item[0] === '第一年' || item[0] === '第三年' || item[0] === '第五年') {
            item.forEach((it, index) => {
                if(index !== 0) {
                    // @ts-ignore
                    if(it > 700) countA.value++;
                    // @ts-ignore
                    else if(it > 500) countB.value++;
                    else countC.value++;
                }
            });
        }
    });
    const mum = countA.value + countB.value + countC.value;
    const data = [countA.value / mum, countB.value / mum, countC.value / mum];
    usewidget3dStore().setVisitorparam(data);
    return data[ value];
}

const visitorOptions = {
    toolbox: {
        show: true,
        orient: 'vertical',
        left: '10',
        top: '-5',
        feature: {},
        itemSize: 25,
    },
    legend: {
        left: 'right',
        data: ['第一年', '第三年', '第五年'],
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
        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 90px;',
        formatter: function (params: any[]) {
            let html = '<div style="font-size: 16px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
            params.forEach(function (item,index) {
                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value[index+1] + '<br>';
            });
            // html += '</div>';
            return html;
        },
    },
    dataset: {
        source: source
    },
    xAxis: { 
        type: 'category', 
        axisLabel: {
            color: '#4c9bfd'
        } 
    },
    yAxis: { 
        gridIndex: 0,
        name: '客流量(人次)',
        nameTextStyle: {
            color: '#4c9bfd',
            fontSize: 14
        },
        axisLabel: {
            color: '#4c9bfd'
        } 
    },
    grid: { bottom: '10%'},
    series: [
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            type: "pie",
            center: ['75%', '25%'],
            radius: '28%',
            z: 100,
            emphasis: {
                focus: 'self'
            },
            data: [ 
                { name: '优', value: getvisitorData(0) },
                { name: '良', value: getvisitorData(1) },
                { name: '一般', value: getvisitorData(2) }
            ],
        },
    ]
};

export default visitorOptions;
    