import { defineStore } from 'pinia'
import { Ref, ref, toRaw } from "vue";
import { useViewStore } from '@/store/mapViewstore'
import { initTimeSlider } from '@/utils/timesliderUtils'
import { useTime } from '@/hooks/useTime';

export const useTimesliderStore = defineStore('timerslider', () => {
    //获取mapview实例
    const view = useViewStore().getView() as __esri.MapView;

    /**用于时间热力图模块的时间组件 */
    let timeSlider = ref<__esri.TimeSlider | null>(null);
    function createTimeslider(timeSliderRef: Ref<HTMLDivElement>) {

        // 创建时间滑块参数
        const time = useTime();
        const year = time.year;
        const month = time.month;
        const day = time.day;
        const start = new Date(year.value, month.value - 1, day.value - 3);
        const end = new Date(year.value, month.value - 1, day.value + 3);
        const currentTime = new Date(year.value, month.value - 1, day.value); // 设置初始值为 现在
        //用时间滑块工具创建该图层
        timeSlider.value = initTimeSlider(start, end, currentTime, timeSliderRef.value, view);
    };
    function watchPoistslayer() {
        view.map.allLayers.getItemAt(1).visible = false;

    }
    return { createTimeslider, timeSlider, watchPoistslayer }
})