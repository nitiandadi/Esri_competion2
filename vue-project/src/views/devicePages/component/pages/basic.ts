import { useTime } from '@/hooks/useTime';
const time = useTime();

const lineStyle = {
    width: 2,
    opacity: 0.5
  };
const basicoption: echarts.EChartsOption = {
    backgroundColor: '',
    color: ["#00f2f1", "#ed3f35"],
    //@ts-ignore
    tooltip: {
      trigger: 'axis',
      formatter: function (params, ticket, callback) {
        var htmlStr = '';
        //@ts-ignore
        for(var i=0;i<params.length;i++){
          //@ts-ignore
          var param = params[i];
          var xName = param.name;//x轴的名称
          var seriesName = param.seriesName;//图例名称
          var value = param.value;//y轴值
          var color = param.color;//图例颜色
          if(i===0){
            htmlStr += xName + '<br/>';//x轴的名称
          }
          
          htmlStr += '<span style="margin-right:2px;display:inline-block;width:5px;height:5px;border-radius:2px;background-color:'+color+';"></span>';
          htmlStr += seriesName + '：' + value ;
          
        }
        return htmlStr;
       }
  },
    legend: { 
    left: "5%",
    top:"0%",
    data: [{name:"客流量",icon:''}],
    textStyle: {
        color: "#4c9bfd",
    },
  },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00','18:00','21:00'],
      axisTick: {
        show: true,
        alignWithLabel:true
    },
    axisLabel: {
        color: "#4c9bfd",
    },
    splitLine: {
        show: false,
    },
      axisPointer: {
        show: true,
        type: "line",
        lineStyle: {
            color: "#4c9bfd",
        },
    },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false,
    },
    axisLabel: {
        color: "#4c9bfd",
    },
    splitLine :{    //网格线
      lineStyle:{
          type:'solid' ,
          color: "#4c9bfd",   //设置网格线类型 dotted：虚线   solid:实线
      },
      show:true //隐藏或显示
  }
    },
    grid: {
      top: "15%",
      left: "3%",
      right: "5%",
      bottom: "3%",
      show: true,
      borderColor: "#4c9bfd",
      containLabel: true,
  },
    series: [
      {
        name:'客流量',
        data: [],
        type: 'line',
        lineStyle:lineStyle,
        
        smooth:true,
        // areaStyle: {
        //     color:'#4c9bfd',
        //     opacity: 0.5
        // },
        itemStyle: {
            color: '#00FFFF'
          },
      },
     

    ],
    

  };
 
 
  export default basicoption;
  