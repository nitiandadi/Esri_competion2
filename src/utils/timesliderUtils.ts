
import TimeSlider from "@arcgis/core/widgets/TimeSlider.js";

/**
 * 时间滑块工具
 * @param {Date} start 滑块的最小日期 
 * @param {Date} end 滑块的最大日期
 * @param {Date} currentTime 初始滑块位置 
 * @param {MapView} view 依据的视图 
 * @param {HTMLDivElement} container 滑块的容器元素
 * @export {(function)initTimeSlider} 滑块实例
 */
export function initTimeSlider( start:Date, end: Date,  currentTime:Date, container: HTMLDivElement, view: __esri.MapView) {
    
    // console.log(container.style.height)
    const timeSlider = new TimeSlider({
        container: container,
        view: view,
        fullTimeExtent: {
            start: start,
            end: end,
        }, 
        timeExtent:{  start: currentTime,end: currentTime},
        // view: view,
        timeVisible: true, // show the time stamps on the timeslider
        loop: true,
        stops: {
            interval: {
                unit: "days",
                value: 1
            } as __esri.TimeInterval
        },
        mode: "instant",
        layout: "compact",
    }); 
    
    //时间滑块不可见
    timeSlider.visible = false;
    return timeSlider;
}
