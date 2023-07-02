let now = new Date();
let minutes = now.getMinutes();
let timeData = ['时间', minutes - 10, minutes - 9, minutes - 8, minutes - 7, minutes - 6, minutes - 5, minutes - 4, minutes - 3, minutes - 2, minutes - 1, minutes];
const source = [
    timeData,
    ['馆内人数', 165, 182, 188, 172, 158, 192, 185, 182, 178, 170, 163, 161],
    ['出馆人数', 52, 54, 59, 55, 74, 71, 68, 62, 58, 51, 47, 44],
    ['入馆人数', 45, 67, 73, 39, 48, 35, 30, 28, 32, 37, 42, 50]
];
let realTimeVisitorOption = {
    toolbox: {
        show: true,
        orient: 'vertical',
        left: '15',
        top: '-5',
        feature: {
            // myTool1: {
            //     show: true,
            //     title: '限流评估',
            //     icon: 'image://	https://cdn-icons-png.flaticon.com/512/998/998382.png',
            // }
        },
        itemSize: 25,
    },
    legend: {
        left: 'right',
        data: ['总人数', '出馆人数', '入馆人数'],
        textStyle: {
            color: '#4c9bfd'
        },
    },
    grid: [
        { bottom: '10%' },
    ],
    dataset: {
        source: source
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: '#4c9bfd'
            }
        },
    ],
    yAxis: [
        {
            gridIndex: 0,
            name: '人数',
            nameTextStyle: {
                color: '#4c9bfd',
                fontSize: 14
            },
            axisLabel: {
                color: '#4c9bfd'
            }
        },
    ],
    series: [
        {
            name: '总人数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            name: '出馆人数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
        {
            name: '入馆人数',
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
        },
    ]
};
export default realTimeVisitorOption;
