// import type View from "@arcgis/core/views/MapView.js";
import type View from "@arcgis/core/views/View.js";
import * as echarts from 'echarts';
//@ts-ignore
import getE3CoordinateSystem from "./ArcgisMapCoordSys";
export default class EchartsLayer {
    private _echartsContainer: HTMLDivElement|null;
    mapView: View;
    chart: echarts.ECharts|null;
    constructor(mapView: View, option: any = {}) {
        var div = this._echartsContainer = document.createElement('div');
        this.mapView = mapView;
        div.style.position = 'absolute';
        div.style.height = mapView.height + 'px';
        div.style.width = mapView.width + 'px';
        div.style.top = 0 + 'px';
        div.style.left = 0 + 'px';
        div.style.zIndex = '999';
        div.id = 'echartLayer'
        let parent = document.getElementsByClassName("esri-view-user-storage")[0];
        parent.appendChild(div);
        echarts.registerCoordinateSystem('arcgis', getE3CoordinateSystem(mapView) as any)
        if (mapView.isFulfilled()) {
            this.chart = echarts.init(div);
            this._init();
            console.log(option);
            this.chart.setOption(option);
        }
        else {
            throw new Error('mapView is not ready');
        }
    }
    private _init() {
        this.mapView.watch('extent', () => {
            this.chart?.resize();
        })
    }
    /**
     * destroy the chart and relasee the resource
     */
    public destroy() {
        this.chart?.dispose();
        this.chart = null;
        // this.echartsContainer.de
        this._echartsContainer?.remove();
        this._echartsContainer=null;
    }
    /**
     * Redraw the chart
     */
    public Redraw(option: any) {
        this.chart?.setOption(option);
    }
    public setVisiable(visiable: boolean) {
       (this._echartsContainer as HTMLDivElement) .hidden = !visiable;
    }
}