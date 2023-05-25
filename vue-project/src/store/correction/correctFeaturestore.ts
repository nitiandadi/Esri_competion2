import { defineStore } from 'pinia'
//@ts-ignore
import { useViewStore } from '@/store/mapViewstore'
import FeatureForm from "@arcgis/core/widgets/FeatureForm.js";
import formTemplate from "@arcgis/core/form/FormTemplate.js";
import type { Ref } from 'vue';

export const useCorrectFeatureStore = defineStore('correctFeature',() => {
    let editFeature: __esri.Graphic | __esri.Graphic[] | undefined;
    //获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;
    //创建要素表单内容
    const  IformTemplate = new  formTemplate({
        elements: [
          {
            //@ts-ignore
            type: "group",
            label: "基本信息",
            description: "展示景点基本信息",
            elements: [
                {
                    // Autocasts to new FieldElement
                    type: "field",
                    fieldName: "名称",
                    label: "名称",
                    editableExpression: "return false" 
                },
                {
                    type: "field",
                    fieldName: "time",
                    label: "日期",
                    editableExpression: "return false"
                },
                {
                    type: "field",
                    fieldName: "类型名称",
                    label: "类型名称",
                    editableExpression: "return false"
                },
            ]
          },
          {
            //@ts-ignore
            type: "group",
            label: "修正分类",
            description: "执行修正景点分类的操作",
            elements: [
              {
                type: "field",
                fieldName: "class",
                label: "景点分类",
                editableExpression: "return true",
                // hint: "请输入景点分类:'环境优美','环境良好','环境一般','环境较差'"
                input: {
                    type: "combo-box",
                    showNoValueOption: false
                },
                domain: {
                    type: "coded-value",
                    name: "class",
                    codedValues: [
                        {
                            name: "环境优美",
                            code: "环境优美"
                        },
                        {
                            name: "环境良好",
                            code: "环境良好"
                        },
                        {
                            name: "环境一般",
                            code: "环境一般"
                        },
                        {
                            name: "环境较差",
                            code: "环境较差"
                        },
                    ]   
                }
              },
            ]
          },

        ],

    });
    //创建要素表单实例
    let featureForm: __esri.FeatureForm;

    //选择要素,并显示要素表单
    async function selectFeature(objectId: number,featureLayer: __esri.FeatureLayer,form: __esri.FeatureForm) {
        //从要素图层中查询要素
        await featureLayer.queryFeatures({objectIds: [objectId],outFields: ["*"],returnGeometry: true}).then((results) => {
            if (results.features.length > 0) {
                editFeature = results.features[0];
                //显示要素表单
                form.feature = editFeature;
            }
        });
    }

    // 使用指定的参数调用 FeatureLayer.applyEdits()。
    function applyAttributeUpdates(params: any, featureLayer: __esri.FeatureLayer){
        featureLayer.applyEdits(params).catch((error) => {
                console.log("===============================================");
                console.error(
                "[ applyEdits ] FAILURE: ",
                error.code,
                error.name,
                error.message
                );
                console.log("error = ", error);
          });
      }

    /**创建要素表单*/
    function createFeaturefrom(correctionRef: Ref<HTMLDivElement | null> ){
        //获取要素图层
        const pointsLayer = view.map.layers.find((layer) => { return layer.id === "points" }) as __esri.FeatureLayer;
        //将要素表单内容赋给要素图层
        pointsLayer.formTemplate = IformTemplate;
        //创建要素表单
        featureForm = new FeatureForm({
            view: view, 
            container: correctionRef.value as HTMLDivElement,
            groupDisplay: "sequential",
            layer: pointsLayer,
        });
       
        //添加点击事件
        view.on("click", (event) => {
            view.hitTest(event).then((response) => {
              if(response.results.length === 0) return;
              const result = response.results[0]  as __esri.GraphicHit;
              if (result.graphic &&result.graphic.layer === pointsLayer) {
                selectFeature(result.graphic.attributes['objectid'],pointsLayer,featureForm);
              }
            });
        });
        // 监听表单提交事件
        featureForm.on("submit", () => {
            if (editFeature) {
                // 从表单中获取更新后的属性
                const updated = featureForm.getValues();

                // 遍历更新的属性并分配特征属性的更新值。
                Object.keys(updated).forEach((name) => {
                    (editFeature as  __esri.Graphic).attributes[name] = updated[name];
                });

                // 使用更新设置 applyEdits 参数。
                const edits = { updateFeatures: [editFeature] };
                applyAttributeUpdates(edits,pointsLayer);
            }
        });
    }

    /**提交表单 */
    function submitForm(){
        featureForm.submit();
    }
    return { createFeaturefrom ,submitForm}
})