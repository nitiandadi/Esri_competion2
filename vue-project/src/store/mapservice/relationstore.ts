import { defineStore } from 'pinia'
import { ElMessageBox, ElSwitch } from 'element-plus';
import { Ref,ref,h} from "vue";
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import { UniqueValueRenderer } from '@arcgis/core/renderers';

export const useRelationStore = defineStore('relation', () =>  {
    // 图表的数据存储
    let ListData: Ref<any[]> = ref([]);
    let checked1: Ref<boolean> = ref(false);
    let disabled1: Ref<boolean> = ref(false);
    let checked2: Ref<boolean> = ref(false);
    let disabled2: Ref<boolean> = ref(false);
    let checked3: Ref<boolean> = ref(false);
    let disabled3: Ref<boolean> = ref(false);
    let checked4: Ref<boolean> = ref(false);
    let disabled4: Ref<boolean> = ref(false);
    let checked5: Ref<boolean> = ref(false);
    let disabled5: Ref<boolean> = ref(false);
    const checkList = [checked1,checked2,checked3,checked4,checked5];
    // 获得推荐数据
    function getListData(data:any[]){
        let typeName:string = '';
        let valueList:[
            {
                id: number,
                name: string,
                typeName: number,
            }
        ]=[] as any;
        checkList.forEach((item,index) => {
            if(item.value){
                switch (index) {
                    case 0:
                        typeName =  '游山玩水';
                        break;
                    case 1:
                        typeName = '文化古迹'
                        break;
                    case 2:
                        typeName = '森林草原';
                        break;
                    case 3:
                        typeName = '探险奇趣';
                        break;
                    case 4:
                        typeName = '地标观景';
                        break;
                    default:
                        typeName = '';
                        break;
                }
                for (let i = 0; i < data.length; i++) {
                    if(data[i].typeName == typeName){
                        let value = {
                            id: i,
                            name: data[i].name,
                            typeName: index,
                        };
                        valueList.push(value);
                    }
                }
            }
        });
       
        return valueList;  
    }
    // 根据数据的变化，改变组件的显示
    function showRelation( view:__esri.MapView,points:any[]) {
        const myFeatureLayer = view?.map.findLayerById("points") as __esri.FeatureLayer;
        // 从points中获取数据
        ListData.value = getListData(points);
        // debugger
        /*****************根据数据对景点进行渲染*********************/
         // 定义颜色数组,从浅到深
        const innerColors = [
            [0, 255, 0, 0.5],   // 浅绿色,级别1 
            [0, 200, 40, 0.6], //深绿色,级别2
            [0, 80, 210, 0.8], //浅蓝色,级别3   
            [255, 255, 0, 0.8], // 黄色,级别4
            [255, 0, 0, 0.8],   // 红色,级别5
        ];
        // 定义外部轮廓颜色数组,与内部填充颜色对应
        const outerColors = [
            "#17f5a7",   // 浅绿,与浅绿色对应 
            "#0B610B",   // 深绿,与深绿色对应
            "#1A6EA5",   // 浅蓝,与浅蓝色对应
            "#A59825",   // 棕色, 与黄色对应
            "#7F1A1C"    // 深红色,与红色对应
        ];
        // 创建新的符号列表
        let symbols: SimpleMarkerSymbol[] = [];
        for (let index = 0; index < 5; index++) {
            const symbol = new SimpleMarkerSymbol({
                style: "path",  
                path: "M18.3,8.7c0,0-1.7-2.2-8.3-4.4S1.7,8.7,1.7,8.7S6,14.3,10,18c4-3.7,8.3-9.3,8.3-9.3",            
                color: innerColors[index],
                outline: {                
                    color: outerColors[index],  
                    width: 2                
                },               
                size: 7
            });
            symbols.push(symbol);
            
        }
        // 创建一个新的渲染器
        const renderer = new UniqueValueRenderer({
            field: "name",  // 要根据哪个字段的值进行渲染
            uniqueValueInfos: []     
        });
        debugger
        ListData.value.forEach((item:any) => {
            //@ts-ignore
            renderer.uniqueValueInfos.push({
                value: item.name,  // 要素的名称
                symbol: symbols[item.typeName]
            });
        });
        // 将渲染器分配给要素图层
        myFeatureLayer.renderer = renderer;
        myFeatureLayer.refresh();
    }
    // 与组件数据通信，进行特征关联
    function RelateFeatures(typeName: string, view: __esri.MapView,points:any[]) {   
        // 根据typeName改变checked的值
        switch (typeName) {
            case '游山玩水':
                checked1.value = true;
                disabled1.value = true;
                break;
            case '文化古迹':
                checked2.value = true;
                disabled2.value = true;
                break;
            case '森林草原':
                checked3.value = true;
                disabled3.value = true;
                break;
            case '探险奇趣':
                checked4.value = true;
                disabled4.value = true;
                break;
            case '地标观景':
                checked5.value = true;
                disabled5.value = true;
            default:
                break;
        }
        ElMessageBox({
            title: '选择关联特征',
            // Should pass a function if VNode contains dynamic props
            message: () =>
            h('div', { style: { display: 'flex', flexDirection: 'column' } }, [
                h('div', { style: { display: 'flex',    justifyContent: 'space-evenly'} }, [
                    h('div', { style: {} }, [
                        h('label', { for: 'switch1',style:{color: '#fff'} }, '游山玩水：'),
                        h(ElSwitch, {
                                id: 'switch1',
                                modelValue: checked1.value,
                                disabled: disabled1.value,
                                'onUpdate:modelValue': (val) => (checked1.value = val as boolean),
                        }),
                    ]),
                    h('div', { style: {} }, [
                        h('label', { for: 'switch2',style:{color: '#fff'} }, '文化古迹：'),
                        h(ElSwitch, {
                                id: 'switch2',
                                disabled: disabled2.value,
                                modelValue: checked2.value,
                                'onUpdate:modelValue': (val) => (checked2.value = val as boolean),
                        }),
                    ]),
                    h('div', {}, [
                        h('label', { for: 'switch3',style:{color: '#fff'} }, '森林草原：'),
                        h(ElSwitch, {
                                id: 'switch3',
                                modelValue: checked3.value,
                                disabled: disabled3.value,
                                'onUpdate:modelValue': (val) => (checked3.value = val as boolean),
                        }),
                    ]),
                ]),
                h('div', { style: { display: 'flex', justifyContent: 'space-evenly' } }, [
                    h('div', {}, [
                        h('label', { for: 'switch4',style:{color: '#fff'} }, '探险奇趣：'),
                        h(ElSwitch, {
                                id: 'switch4',
                                modelValue: checked4.value,
                                disabled: disabled4.value,
                                'onUpdate:modelValue': (val) => (checked4.value = val as boolean),
                        }),
                    ]),
                    h('div', {}, [
                        h('label', { for: 'switch5',style:{color: '#fff'} }, '地标观景：'),
                        h(ElSwitch, {
                                id: 'switch5',
                                modelValue: checked5.value,
                                disabled: disabled5.value,
                                'onUpdate:modelValue': (val) => (checked5.value = val as boolean),
                        }),
                    ]),
                ]),
            ]),
            confirmButtonText: '执行分析',
            closeOnClickModal: false,
            beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    showRelation(view,points);
                    instance.confirmButtonText = '执行中...';
                    setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        instance.confirmButtonText = '分析成功';
                    }, 300);
                    setTimeout(() => {
                        done();
                    }, 3000);
                } else {
                    done();
                }
            },
        })
    }
    // 将所有的数据恢复到初始状态
    function reset() {
        checked1.value = false;
        disabled1.value = false;
        checked2.value = false;
        disabled2.value = false;
        checked3.value = false;
        disabled3.value = false;
        checked4.value = false;
        disabled4.value = false;
    }
    return { RelateFeatures,reset  }
})