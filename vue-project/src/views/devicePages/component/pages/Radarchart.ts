const lineStyle = {
    width: 2,
    opacity: 0.8
  };
  const hotelradar: echarts.EChartsOption={
    backgroundColor: '',
    title: {
      text: '设施评价',
      left: 'left',
      textStyle: {
        color: '#17e3f5',
        fontSize: 14
      }
    },
    
    radar: {
      indicator: [
        { name: '价格', max: 500 },
        { name: '评分', max: 5},
        { name: '位置', max: 10},
        { name: '卫生', max: 5},
        { name: '服务', max: 5 },
        { name: '综合', max: 7 }
      ],
      shape: 'circle',
      splitNumber: 5,
      axisName: {
        color: '#4c9bfd'
      },
      
      splitLine: {
        lineStyle: {
          color: '#17e3f5'
        },
        
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#17e3f5'
        }
      }
    },
    series: [
      {
        name: '维也纳酒店',
        type: 'radar',
        lineStyle: lineStyle,
        data: [],
        symbol: 'circle',
        itemStyle: {
          color: '#17e3f5'
        },
        areaStyle: {
          opacity: 0.1
        }
      },
     
    ]
      
          }
          
          
 export default hotelradar;