import { Ref, onMounted, onBeforeUnmount } from "vue";

/**
 * @description 屏幕自适应并设置组件初始宽高
 * @param {ref} dataScreenRef (必传)
 * @param {number} width (必传)
 * @param {num} height (必传)
 * @return void
 * */

export const useScreen = (dataScreenRef: Ref<HTMLElement | null>,width:number,height:number) => {
    onMounted(() => {
        // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
        if (dataScreenRef.value) {
            if(width === 1920){
                dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
            }
            else{
                dataScreenRef.value.style.transform = `scale(${getScale()})`;
            }       
            dataScreenRef.value.style.width = width+"px";
            dataScreenRef.value.style.height = height+"px";        
        }
        setTimeout(() => {
            window.addEventListener("resize", resize);
        },100)
       
    });
    
    const getScale = () => {
        let ww = window.innerWidth / 1920;
        let wh = window.innerHeight / 1080;
        return ww < wh ? ww : wh;
    };
    
    // 监听浏览器 resize 事件
    const resize = () => {
        if (dataScreenRef.value && width > 1000 ) {
            dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
        }
        else if(dataScreenRef.value){
            dataScreenRef.value.style.transform = `scale(${getScale()})`;
        }
    };
    
    
    // 销毁时触发
    onBeforeUnmount(() => {
        window.removeEventListener("resize", resize);
    });
}