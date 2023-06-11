const lineStyle = {
    width: 2,
    opacity: 0.5
  };
const basicoption: echarts.EChartsOption = {
    backgroundColor: '',
    legend: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '03:00', '03:00', '06:00', '09:00', '12:00', '15:00','18:00','21:00'],
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        color: '#F9713C' // 这里设置 x 坐标轴刻度文本的颜色为红色
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#F9713C' // 这里设置 x 坐标轴刻度文本的颜色为红色
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320,1000,600],
        type: 'line',
        lineStyle:lineStyle,
        smooth:true,
        areaStyle: {
            color:'#F9713C',
            opacity: 0.5
        },
        itemStyle: {
            color: '#F9713C'
          },
      }
    ]
  };
  export default basicoption;
  