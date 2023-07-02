import { defineStore } from "pinia";
export const useoptionStore = defineStore('optionStore', () => {
    let barOption: echarts.EChartsOption = {
        xAxis: {
            type: 'category',
            axisLabel: {
                // fontSize: 13,
                color: '#4c9bfd',
            }
        },
        yAxis: {
            type: 'value',
            name: '人数(人)',
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 15,
                margin: 0,
            },
            nameTextStyle: {
                color: '#4c9bfd',
                fontSize: 14,
            },

        },
        dataZoom: [{
            type: 'slider', // 使用滑动条型的数据缩放组件
            start: 0, // 数据窗口范围的起始百分比
            end: 30 // 数据窗口范围的结束百分比
        }],
        grid: {
            left: '1%',
            right: '1%',
            bottom: '10%',
            top: '10%',
            width: '90%',
            containLabel: true
        },
        series: [
            {
                type: 'bar',
                barWidth: '70%',
                color: 'red',
                itemStyle: {
                    //@ts-ignore
                    normal: {
                        barBorderRadius: [5, 5, 0, 0] // 设置柱状图的圆角大小，单位为像素
                    }
                }
            }
        ],
        tooltip: {
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
            formatter: function (params: any) {
                var dataIndex = params[0].dataIndex; // 获取当前柱子的索引
                var value = params[0].value; // 获取当前柱子的值
                return '景点名称：' + dataIndex + '<br>游客数量：' + value;
            }
        },
    };
    function SetDataForbarOption(xData: string[], seriesData: string[]) {
        //@ts-ignore
        barOption.xAxis.data = xData;
        //@ts-ignore
        barOption.series[0].data = seriesData;
    }
    function getbarOption() {
        return barOption;
    }
    return { getbarOption, SetDataForbarOption }
})