var xData = [];
var xData1 = [];
var seriesData = [];
var myChart = null;
var flightOption = {
    series: [{
            type: 'lines',
            coordinateSystem: 'arcgis',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                color: '#a6c84c',
                width: 0.8,
                curveness: 0.3
            }
        }, {
            type: 'effectScatter',
            coordinateSystem: 'arcgis',
            itemStyle: {
                color: '#b02a02'
            },
            rippleEffect: {
                brushType: 'stroke'
            },
            symbolSize: function (val) {
                return val[2] / 120;
            }
        }
    ]
};
var chartOption = {
    xAxis: {
        type: 'category',
        data: xData,
        axisLabel: {
            fontSize: 11,
            color: 'red',
            interval: 0
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: 'red',
            fontSize: 13
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '3%',
        top: '3%',
        width: '90%',
        containLabel: true
    },
    series: [
        {
            data: seriesData,
            type: 'bar',
            barWidth: '70%',
            color: 'red'
        }
    ]
};
function setFlightData(flightData, seriesData) {
    //@ts-ignore
    flightOption.series[0].data = flightData;
    //@ts-ignore
    flightOption.series[1].data = flightData.map(function (dataItem, index) {
        dataItem.coords[0].push(seriesData[index]);
        return {
            value: dataItem.coords[0]
        };
    });
}
function setChartData(xData, seriesData) {
    //@ts-ignore
    chartOption.xAxis.data = xData;
    //@ts-ignore
    chartOption.series[0].data = seriesData;
}
function getFlightData() {
    return flightOption;
}
function getChartData() {
    return chartOption;
}
