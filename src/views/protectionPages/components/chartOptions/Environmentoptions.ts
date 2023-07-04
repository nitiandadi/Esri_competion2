import { useTime } from '@/hooks/useTime';
import { usewidget3dStore } from '@/store/widget3d/widget3dstore';
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
    const data = [1/5, 3/5, 1/5];
    usewidget3dStore().setEnvieonmentparam(data);
    return fiveDays;
}

const environmentOptions = {
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
        extraCssText: 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 50px;',
        formatter: function (params: any[]) {
            let html = '<div style="font-size: 16px; font-weight: bold;height: 30px; ">' + params[0].name + '</div>';
            params.forEach(function (item) {
                if (item.seriesIndex === 0) {
                    return;
                }
                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value + '<br>';
            });
            // html += '</div>';
            return html;
        },
    },
    legend: {
        left: 'right',
        data: ['环境分级'],
        textStyle: {
            color: '#4c9bfd'
        },
    },
    xAxis: [
        {
            type: 'category',
            data: getFiveDays(),
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                color: '#4c9bfd'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '环境评估(级)',
            nameTextStyle: {
                color: '#4c9bfd',
                fontSize: 14
            },
            // 相隔为1刻度
            interval: 1,
            axisLabel: {
                color: '#4c9bfd'
            }
        }
    ],
    grid: {
        //   top: 120,
          bottom: 20,
        },
    series: [
        {
            name: '环境分级',
            type: 'bar',
            data: [
                2, 2, 1, 3, 2
            ]
        },
        {
            type: "pie",
            center: ['75%', '30%'],
            radius: '28%',
            z: 100,
            emphasis: {
                focus: 'self'
            },
            data: [ 
                { name: '优', value: 1/5 },
                { name: '良', value: 3/5 },
                { name: '一般', value: 1/5 }
            ],
        },
        {
            name: '环境分级',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#f7b851',
                width: 2
            },
            data: [2, 2, 1, 3, 2]
        }
    ]
};

export default environmentOptions;