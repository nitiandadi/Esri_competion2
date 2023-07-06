import { defineStore } from 'pinia'
//@ts-ignore
import { useViewStore } from '@/store/mapViewstore'
import { useUpdate } from '@/hooks/useUpdata';
import axios from 'axios';
import type { ref, Ref } from 'vue';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { UniqueValueRenderer,SimpleRenderer } from '@arcgis/core/renderers';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import Legend from '@arcgis/core/widgets/Legend';
import { qualityname } from '@/features';

export const useAutoUpdataStore = defineStore('Autoupdata', () => {
    //获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;
    //创建指标数组
    const indexs = {
        'AQI':'aqi',
        'ph值': "ph", 
        '溶解氧': "dissolvedoxygen", 
        '高锰酸盐指数': "permanganateindex", 
        '总氮': "totalnitrogen",  
        '湿度': "humidity" 
    }
    //各指标的最优范围
    let indexsRange = {
        "aqi": [20, 40],
        "ph": [7, 9],
        "dissolvedoxygen": [6, 8],
        "permanganateindex": [2, 5],
        "totalnitrogen": [0, 1],
        "mintemp": 18,
        "humidity": [45, 55],
        "maxtemp": 23
    }
    //指标范围存储数组
    const indexsRangeHistory: typeof indexsRange[] = [indexsRange];
    //创建景点评价数组
    const evaluation = ["环境优美","环境良好","环境一般","环境较差","环境脏乱"]
    //给图层新渲染器
    function addrender(myFeature: __esri.FeatureLayer) {
        // 定义颜色数组,从浅到深
        const innerColors = [
            [0, 255, 0, 0.5],   // 浅绿色,级别1 
            [0, 180, 0, 0.8],   // 深绿色,级别2
            [0, 80, 210, 0.8], //浅蓝色,级别3   
            [255, 255, 0, 0.8], // 黄色,级别4
            [255, 0, 0, 0.8],   // 红色,级别5
        ];
        // 定义外部轮廓颜色数组,与内部填充颜色对应
        const outerColors = [
            "#17f5a7",   // 浅绿,与浅绿色对应 
            "#1F7A44",   // 深绿,与深绿色对应
            "#1A6EA5",   // 浅蓝,与浅蓝色对应
            "#A59825",   // 棕色, 与黄色对应
            "#7F1A1C"    // 深红色,与红色对应
        ];
        const symbols = [];
  
        // 循环创建多个符号,对应不同的级别
        for (let i=0; i<5; i++) {
          // 创建新的符号
          const symbol = new SimpleMarkerSymbol({
            style: "path",  
            path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",            
            color: innerColors[i],
            outline: {                
              color: outerColors[i],  
              width: 2                
            },               
            size: 7
          });
          symbols.push(symbol);
        }
        // 创建一个新的渲染器
        const renderer = new UniqueValueRenderer({
            field: "class",  // 要根据哪个字段的值进行渲染
            uniqueValueInfos: [      
                {
                    value: '环境优美',  // 字段值
                    symbol: symbols[0] // 对应的符号
                },
                {
                    value: "环境良好",
                    symbol: symbols[1]
                },
                {
                    value: "环境一般",
                    symbol: symbols[2]
                },
                {
                    value: "环境较差",
                    symbol: symbols[3]
                },
                {
                    value: "环境恶劣",
                    symbol: symbols[4]
                }
            ]     
        });
        // 将渲染器分配给要素图层
        myFeature.renderer = renderer;
        //设置pointslayer弹窗模板
        const popupTemplate = new PopupTemplate({
            // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
            title: "{name}",
            content: [{
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "aqi",
                        label: "AQI"
                    },
                    {
                        fieldName: "ph",
                        label: "ph值"
                    },
                    {
                        fieldName: "dissolvedoxygen",
                        label: "溶解氧"
                    },
                    {
                        fieldName: "permanganate",
                        label: "高锰酸盐指数"
                    },
                    {
                        fieldName: "totalnitrogen",
                        label: "总氮"
                    },
                    {
                        fieldName: "humidity",
                        label: "湿度"
                    },
                    {
                        fieldName: "maxtemp",
                        label: "最高气温"
                    },
                    {
                        fieldName: "class",
                        label: "景点评价"
                    },
                ]
            }],
        });
        myFeature.popupTemplate = popupTemplate;
    }

    /**更新图层*/
    async function Uplayerdata(percentage: Ref<number>, isActive: Ref<boolean>,LegendRef:HTMLDivElement | null ){
        //获取图层
        const pointslayer = view.map.findLayerById('points') as __esri.FeatureLayer;
        // 遍历要素图层中的所有要素
        const query = pointslayer.createQuery();
        query.where = "1=1";
        /***********************只执行一次*************************** */
            await pointslayer.queryFeatures(query).then(({features}) => {
                isActive.value = true
                percentage.value = 0
                let i = 0
                features.forEach(async (feature) => {
                    //获得feature的坐标
                    const geometry = feature.geometry;
                    const point = geometry as __esri.Point;
                    //将坐标转换为json格式
                    const nowdata = {
                        "location": `${point.longitude},${point.latitude}`
                    }
                    //获得feature的areaCode，站点name，日期
                    const city = feature.attributes['city'];
                    //获得该城市的行政代码
                    const message = qualityname[city];
                    let areaCode = '';
                    let name = '';
                    // 随机获取一个站点
                    if(message){
                        const siteNames = Object.keys(message);
                        const randomIndex = Math.floor(Math.random() * siteNames.length);
                        name = siteNames[randomIndex];
                        areaCode = message[name].行政区划;
                    }
                    //转换为json格式
                    const waterdata = {
                        "areaCode": areaCode,
                        "name": name,
                        "date": '',
                    }
                    //使用axios发送请求，获得feature的数据
                    await axios.post('http://81.70.22.42:9000/quality/water',waterdata).then((res) => {
                        let attributeUpdates = {} as any;
                        let where =  `name='${feature.attributes['name']}'`;
                    //为图层提供数据
                        for(let index in res.data){
                            if(index === 'ph' || index === 'dissolvedoxygen' || index === 'permanganateindex' || index === 'totalnitrogen'){
                                if(res.data[index] === null ) {
                                    i++
                                    // 每次请求的进度和状态
                                    percentage.value = Math.floor((i / (features.length * 8)) * 100)
                                    if (i === (features.length * 8)) {
                                        setTimeout(() => {
                                            isActive.value = false
                                        }, 600);
                                    }
                                    return;
                                }
                                console.log(res.data[index])
                                attributeUpdates[index.toLowerCase()] = res.data[index].toString();                       
                                i++
                                // 每次请求的进度和状态
                                percentage.value = Math.floor((i / (features.length * 8)) * 100)
                                if (i === (features.length * 8)) {
                                    setTimeout(() => {
                                        isActive.value = false
                                    }, 600);
                                }
                            }
                        }
                        const queryOpts = {
                            where: where,
                            attributeUpdates: attributeUpdates
                        };
                        //提供数据
                        useUpdate(pointslayer, queryOpts);
                    });
                    // //使用axios发送请求，获得feature的数据
                    await axios.post('http://81.70.22.42:9000/quality/now',nowdata).then((res) => {
                        let attributeUpdates = {} as any;
                        let where = `name='${feature.attributes['name']}'`;
                        //为图层提供数据
                        for(let index in res.data){
                            if(index === 'tempMax' || index === 'aqi' || index === 'humidity'||index === "date"){
                                
                                attributeUpdates[index.toLocaleLowerCase()] = res.data[index].toString();
                                if(index === 'tempMax') attributeUpdates['maxtemp']=res.data[index].toString();
                                if(index === 'date') attributeUpdates['pointstime']=res.data[index];
                                i++
                                // 每次请求的进度和状态
                                percentage.value = Math.floor((i / (features.length * 8)) * 100)
                                if (i === (features.length * 8)) {
                                    setTimeout(() => {
                                        isActive.value = false
                                    }, 600);
                                }
                            }
                        }
                        const queryOpts = {
                            where: where,
                            attributeUpdates: attributeUpdates
                        };
                        //提供数据
                        useUpdate(pointslayer, queryOpts);
                    });
                });
            });
        // 为view上的一个图创建图例
        const legend = new Legend({
            container: LegendRef as HTMLDivElement,
            view: view,
            layerInfos: [{
                layer: pointslayer,
                title: '景点图例'
            }],
        });
    };
    /**模糊分析 */
    async function classifyAnalysis(sliderValue: any,selectValue: string){
        //将indexsRangeHistory的最新版本赋给indexsRange
        indexsRange = indexsRangeHistory[indexsRangeHistory.length-1];
        //判断sliderValue的值
        if(sliderValue.name){
            //根据sliderValue的值，获取对应的指标,并将其值赋给indexsRange
            if(sliderValue.name === '气温'){
                indexsRange.mintemp = sliderValue.Value[0];
                indexsRange.maxtemp = sliderValue.Value[1];
            }else{
                const Cindex = indexs[sliderValue.name as keyof typeof indexs];
                //@ts-ignore
                indexsRange[Cindex] = sliderValue.Value as number[];
            }
        }
        //将indexsRange的值赋给indexsRangeHistory
        indexsRangeHistory.push(indexsRange);
        //根据selectValue的值，获取对应的指标
        const Cindex = indexs[selectValue as keyof typeof indexs];
        //获取图层
        const pointslayer = view.map.findLayerById('points') as __esri.FeatureLayer;
        // 遍历要素图层中的所有要素
        const query = pointslayer.createQuery();
        query.where = "1=1";
        await pointslayer.queryFeatures(query).then(({features}) => {
            features.forEach( (feature) => {
                //初始化一个count属性，用于计数
                let count = 0;
                //遍历每个要素的属性，判断与indexsRange相同的值是否在其范围内，进行累加
                for(const index in feature.attributes){    
                    if(index === "maxtemp" ){//判断是否为"tempmax"
                        //判断是否在范围内
                        if(feature.attributes[index] > indexsRange[index]){
                            count++;
                        }else if(feature.attributes[index] < indexsRange['mintemp']){
                            count++;
                        }
                    }else if(index === 'aqi' || index === 'humidity' ){//判断是否为其他指标
                        //@ts-ignore
                        if(feature.attributes[index] < indexsRange[index][0] || feature.attributes[index] > indexsRange[index][1]){
                            count++;
                        }
                    }else if(index === Cindex){//判断是否为其他指标
                        //@ts-ignore
                        if(feature.attributes[index] < indexsRange[index][0] || feature.attributes[index] > indexsRange[index][1]){
                            count++;
                        }
                    }
                }
                //将count的值赋给feature的属性
                console.log(feature.attributes['name'],count);
                const where = `name='${feature.attributes['name']}'`;
                const attributeUpdates = { class : evaluation[count] };
                const queryOpts = {
                    where: where,
                    attributeUpdates: attributeUpdates
                };
                //提供数据
                useUpdate(pointslayer, queryOpts);
                
            });
            //添加分类渲染器
            addrender(pointslayer);
        });
    }
    /**取消要素图层的渲染 */
    function cancelrender(){
        //获取图层
        const pointslayer = view.map.findLayerById('points') as __esri.FeatureLayer;
        //取消要素图层的渲染
        //设置pointslayer弹窗模板
        const popupTemplate = new PopupTemplate({
            // title: "<span class='esri-popup__header-title'>{{layer.title}}</span>", // 添加一个带有标题文本的 span 元素
            title: "{名称}",
            content: [{
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "名称",
                        label: "名称"
                    },
                    {
                        fieldName: "类型名称",
                        label: "类型名称"
                    },
                    {
                        //经度英文名为longitude，纬度英文名为latitude
                        fieldName: "longitude",
                        label: "经度"
                    },
                    {
                        fieldName: "latitude",
                        label: "纬度"
                    },
                    {
                        fieldName: "高程",
                        label: "高程"
                    }
                ]
            }],
        });
        pointslayer.popupTemplate = popupTemplate;
        // 创建一个新的符号
        const symbol = new SimpleMarkerSymbol({
            style: "path",
            path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",
            color: "#17e3f5", // 中间浅色
            outline: {
            color: '#115687', // 外部深色
            width: 2
            },
            size: 7
        });

        // 创建一个新的渲染器
        const renderer = new SimpleRenderer({
            label:"景点",
            symbol:symbol
        });

        // 将渲染器分配给要素图层
        pointslayer.renderer = renderer;
    }
    return { Uplayerdata ,classifyAnalysis,cancelrender}
});