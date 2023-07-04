import { useTime } from '@/hooks/useTime';

const time = useTime();
//获得当前时间为中心的连续五天的日期
function getFiveDays() {
    let fiveDays: string[] = [];
    let nowTime = new Date(time.year.value, time.month.value - 1, time.day.value).getTime();
    let oneDayTime = 24 * 60 * 60 * 1000;
    for (let i = 0; i < 5; i++) {
        let ShowTime = new Date(nowTime + (i - 3) * oneDayTime);
        let month = ShowTime.getMonth() + 1;
        let day = ShowTime.getDate();
        let time = month + '-' + day;
        fiveDays.push(time);
    }
    return fiveDays;
}

const Lineoptions = {
    // 设置折线颜色分别为红色，蓝色，黄色
    color: ['#ed3f35','#00f2f1',  '#f7b851'],
    title: {
        text: time.nowTime.value,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ccc',
                width: 1,
                type: 'solid'
            }
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
            params.forEach(function (item) {
                let suffix = '';
                if (item.seriesIndex === 0 || item.seriesIndex === 1) {
                    suffix = '°C';
                } else {
                    suffix = '%';
                }
                html += '<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: ' + item.color + ';"></span>' + item.seriesName + '：' + item.value + suffix + '<br>';
            });
            // html += '</div>';
            return html;
        },
    },
    legend: {
        textStyle: {
            color: '#4c9bfd'
        },
        right: '3%',
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,
        borderColor: "#012f4a",
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: getFiveDays(),
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#4c9bfd'
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#4c9bfd'
        },
        splitLine: {
            lineStyle: {
                color: '#012f4a'
            }
        },
    },
    series: [
        {
            name: '最高温度',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '最低温度',
            type: 'line',
            smooth: true,
            data: []
        },
        {
            name: '湿度',
            type: 'line',
            smooth: true,
            data: []
        },
    
    ]
};

export default Lineoptions;