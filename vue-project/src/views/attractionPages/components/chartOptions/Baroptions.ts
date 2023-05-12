const Baroptions = {
    grid: {
        top: '12%',
        left: '15%',
        bottom: '10%',
    },
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
        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 110px;',
        formatter: function (params: any[]) {
            let html = '<div style="font-size: 16px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
            params.forEach(function (item) {

                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value + '<br>';
            });
            // html += '</div>';
            return html;
        },
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#4c9bfd'
        }

    },
    legend: {
        data: ['pH值', '溶解氧', '化学需氧量', '总氮'],
        textStyle: {
            color: '#4c9bfd'
        },

    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#4c9bfd'
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        showTitle: false,
        feature: {
            magicType: { show: true, type: ['line', 'bar'] },
        },
        iconStyle: {
            color: '#4c9bfd',
            borderColor: '#4c9bfd'
        }
    },
    series: [
        {
            name: 'pH值',
            type: 'bar',
            data: [],
            itemStyle: {
                borderRadius: 20,
            },
        },
        {
            name: '溶解氧',
            type: 'bar',
            data: [],
            itemStyle: {
                borderRadius: 20,
            },
        },
        {
            name: '化学需氧量',
            type: 'bar',
            data: [],
            itemStyle: {
                borderRadius: 20,
            },
        },
        {
            name: '总氮',
            type: 'bar',
            data: [],
            itemStyle: {
                borderRadius: 20,
            },
        },
    ]
};

export default Baroptions;