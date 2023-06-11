import { defineStore } from "pinia";
export const useoptionStore = defineStore('optionStore', () => {
    let barOption: echarts.EChartsOption = {
        xAxis: {
            type: 'category',
            // data: xData,
            axisLabel: {
                fontSize: 13,
                color: '#4c9bfd',
                interval: 0,
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 15,
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
                // data: seriesData,
                type: 'bar',
                barWidth: '70%',
                color: 'red',
            }
        ]
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
    return {getbarOption, SetDataForbarOption}
})