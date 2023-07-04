import { number } from "echarts";
import { Ref, onMounted, onBeforeUnmount } from "vue";

/**
 * @description 屏幕自适应并设置组件初始宽高
 * @param {ref} dataScreenRef (必传)
 * @param {number} width (必传)
 * @param {num} height (必传)
 * @return void
 * */

export const useScreen = (dataScreenRef: Ref<HTMLElement | null>) => {
    onMounted(() => {
        // debugger
        // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
        if (dataScreenRef.value) {          
            // console.log("缩放初始")
            dataScreenRef.value.style.width = 1920+"px";
            dataScreenRef.value.style.height = 1080+"px"; 
            dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;                      
        }
        setTimeout(() => {
            window.addEventListener("resize", resize);
            console.log(dataScreenRef.value?.className);
        },100)
       
    });
    
    const getScale = ( ) => {
        let ww = window.innerWidth / 1920;
        let wh = window.innerHeight / 1080;
        return ww < wh ? ww : wh;
    };
    
    // 监听浏览器 resize 事件
    const resize = () => {
        if (dataScreenRef.value ) {
            // console.log("缩放")
            dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
        }
    };
    
    
    // 销毁时触发
    onBeforeUnmount(() => {
        window.removeEventListener("resize", resize);
    });
}