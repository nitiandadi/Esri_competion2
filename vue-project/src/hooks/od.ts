import { ECharts, init } from "echarts";
import echarts, { EChartsOption } from "echarts/types/dist/echarts";
import GeojsonLayer from "@arcgis/core/layers/GeoJSONLayer.js";
import Point from "@arcgis/core/geometry/Point";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils.js";
let planePath: string =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
const initOdChart = (data: any, mapJson: any): ECharts => {
    const charEle = document.getElementById("mapChart") as HTMLElement;
    const charEch: ECharts = init(charEle);
    echarts.registerMap("china", mapJson as any);
    const option: EChartsOption = {
        // 悬浮窗
        tooltip: {
            trigger: "item",
            formatter: function (params: any) {
                return `${params.name}: ${params.value || "-"}`;
            }
        },
        // echarts大小位置
        grid: {
            left: "0px",
            right: "80px",
            top: "10px",
            bottom: "10px"
        },
        geo: {
            map: "china",
            zoom: 1.5,
            center: [102.848234, 32.82333],
            scaleLimit: {
                min: 0.8
            },
            label: {
                color: "#fff",
                show: true
            },
            emphasis: {
                label: {
                    color: "#fff",
                    show: true
                },
                itemStyle: {
                    areaColor: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#073684" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#2B91B7" // 100% 处的颜色
                            }
                        ]
                    }
                }
            },
            roam: false,
            itemStyle: {
                areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#073684" // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#061E3D" // 100% 处的颜色
                        }
                    ]
                },
                borderColor: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: "#00F6FF"
                        },
                        {
                            offset: 1,
                            color: "#87ADCB"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(10,76,139,1)",
                shadowOffsetY: 0,
                shadowBlur: 60,
                borderWidth: 1
            },
            tooltip: {
                show: false
            }
        },
        // 要显示的散点数据
        series: [
            {
                name: "",
                type: "lines",
                coordinateSystem: "geo",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", // arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    color: "#fff",
                    width: 0,
                    curveness: 0.2
                },
                data
            },
            {
                name: "",
                type: "lines",
                coordinateSystem: "geo",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 28
                },
                lineStyle: {
                    color: "#fff",
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                },
                data
            }
        ]
    };
    charEch.setOption(option);
    return charEch;
};
class echartsLayer {
    view: __esri.MapView;
    data: any;
    mapJson: string;
    container: HTMLElement = document.createElement("div");
    constructor(view: __esri.MapView, data: any, mapJson: string) {
        this.view = view;
        this.data = data;
        this.mapJson = mapJson;
        this.InitContainer();
    }
    InitContainer() {
        let geojsonLayer = new GeojsonLayer({
            url: this.mapJson,
            copyright: "Emperor Nitian",
        });
        this.view.map.add(geojsonLayer);
        geojsonLayer.on('layerview-create', (event) => {
            let xmin = geojsonLayer.fullExtent.xmin;
            let ymax = geojsonLayer.fullExtent.ymax;
            let xmax = geojsonLayer.fullExtent.xmax;
            let ymin = geojsonLayer.fullExtent.ymin;
            let leftTopPoint = new Point({ x: xmin, y: ymax, spatialReference: { wkid: 3857 } });
            let rightBottomPoint = new Point({ x: xmax, y: ymin, spatialReference: { wkid: 3857 } });
            let point1 = webMercatorUtils.webMercatorToGeographic(leftTopPoint) as __esri.Point;
            let point2 = webMercatorUtils.webMercatorToGeographic(rightBottomPoint) as __esri.Point;
            let screenPoint1 = this.view.toScreen(point1);
            let screenPoint2 = this.view.toScreen(point2);
            this.container.style.top = screenPoint1.y + "px";
            this.container.style.left = screenPoint1.x + "px";
            let width=screenPoint2.x-screenPoint1.x;
            let height=screenPoint1.y-screenPoint2.y;
            this.container.style.width = width + "px";
            this.container.style.height = height + "px";
        })
    }
    
}
export default initOdChart;