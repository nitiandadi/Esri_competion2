"use strict";
exports.__esModule = true;
var useTime_1 = require("@/hooks/useTime");
var timeHander = useTime_1.useTime();
var now = new Date();
var tenSecondsBefore = [];
for (var i = 1; i <= 10; i++) {
    var newTime = new Date(now.getTime() - i * 1000);
    tenSecondsBefore.push(timeHander.formatTime(newTime));
}
var source = [
    tenSecondsBefore,
    ['馆内人数', 165, 182, 188, 172, 158, 192, 185, 182, 178, 170, 163, 161],
    ['出馆人数', 52, 54, 59, 55, 74, 71, 68, 62, 58, 51, 47, 44],
    ['入馆人数', 45, 67, 73, 39, 48, 35, 30, 28, 32, 37, 42, 50]
];
var realTimeVisitorOption = {
    toolbox: {
        show: true,
        orient: 'vertical',
        left: '15',
        top: '-5',
        feature: {},
        itemSize: 25
    },
    legend: {
        left: 'right',
        data: ['总人数', '出馆人数', '入馆人数'],
        textStyle: {
            color: '#4c9bfd'
        }
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
exports["default"] = realTimeVisitorOption;
