import { defineStore } from 'pinia'
//@ts-ignore
import { Ref,ref } from "vue";

import { useViewStore } from '@/store/mapviewstore'
import { buildData } from '@/features';

export const usewidget3dStore = defineStore('widget3d', () => {
    let isDisabled: Ref<boolean>;
    // 创建存储弹窗switch点击事件
    const checked1 = ref<boolean | string | number>(false)
    const checked2 = ref<boolean | string | number>(true)
    const checked3 = ref<boolean | string | number>(false)
    // 创建存储弹窗结果
    const showResult = ref<boolean>(false)
    // 创建存储结果
    const result = ref<number>(0)
    // 结果数组
    const resultArr = ['success', 'warning', 'error']
    // 结果对应的游客限流量
    const resultNum = [30, 15, 10]
    // 结果对应的title和subTitle
    const resultTitle = {
        success: {
            title: '限流评估等级-优',
            subTitle: '当日游客承载等级高，建议游客限流量'+ resultNum[0] +'+人次'
        },
        warning: {
            title: '限流评估等级-良',
            subTitle: '当日游客承载等级中等，建议游客限流量'+ resultNum[1] +'+人次'
        },
        error: {
            title: '限流评估等级-差',
            subTitle: '当日游客承载等级低，建议游客限流量'+ resultNum[2] +'-人次'
        }
    }
    /**创建存储弹窗switch点击事件*/
    function setisDisabled(value: Ref<boolean>) {
        isDisabled = value;
    };
    function changeDisabled() {
        isDisabled.value = false;
    }
    /*创建限流评估结果*/
    let Buildparam: number[] ;
    let Envieonmentparam: number[] ;
    let Visitorparam: number[] ;
    function setBuildparam( params: number[] ){
        Buildparam = params;
    }
    function setEnvieonmentparam(  params: number[]){
        Envieonmentparam = params;
    }
    function setVisitorparam( params: number[]){
        Visitorparam = params;
    }
    function createResult() {
        const success = (checked1.value?Buildparam[0]:0) + Visitorparam[0] + (checked3.value?Envieonmentparam[0]:0);
        const warning = (checked1.value?Buildparam[1]:0) + Visitorparam[1] + (checked3.value?Envieonmentparam[1]:0);
        const error = (checked1.value?Buildparam[2]:0) + Visitorparam[2] + (checked3.value?Envieonmentparam[2]:0);     
        console.log(success, warning, error);
        // 比较出最大值，若是success返回0，warning返回1，error返回2
        const max = Math.max(success, warning, error);
        if(max === success) result.value = 0;
        else if(max === warning) result.value = 1;
        else result.value = 2;
    }

    return { setisDisabled ,changeDisabled,checked1,checked2,checked3,setBuildparam,setEnvieonmentparam,setVisitorparam,createResult,result,resultArr,resultTitle,showResult}
});