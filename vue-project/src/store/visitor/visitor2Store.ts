import type Polygon from "@arcgis/core/geometry/Polygon";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { faker } from '@faker-js/faker';
import type { Raw, Ref } from 'vue';
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { HeatmapRenderer } from "@arcgis/core/renderers";
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import { log } from "console";
interface visitor {
    name: string;
    gender: string;
    age: number;
    province: string;
}
// 定义省份
const provinces = ['甘肃', '陕西', '广东', '四川', '新疆', '山东', '江苏', '浙江', '河南', '河北', '山西', '辽宁', '吉林', '黑龙江', '安徽', '福建', '江西', '湖北', '湖南', '贵州', '云南', '重庆', '宁夏', '海南', '青海', '西藏', '香港', '澳门'];
// 定义省份分布，根据实际情况进行适当调整
const provinceDist = [0.07, 0.06, 0.08, 0.07, 0.05, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01];
// 定义性别
const genders = ['男', '女'];
let peoNumbers: number[] = [];
interface spot {
    value: string;
    label: string;
    polygonLayer: Raw<__esri.FeatureLayer>;
    pointsLayer: Raw<__esri.FeatureLayer>;
    roadsLayer: Raw<__esri.FeatureLayer>;
}

const getProvince = (): string => {
    const rand = Math.random();
    let sum = 0;
    for (let i = 0; i < provinceDist.length; i++) {
        sum += provinceDist[i];
        if (rand < sum) {
            return provinces[i];
        }
    }
    return '青海';
};
const getAge = (): number => {
    const rand = Math.random();
    if (rand < 0.6) {
        return faker.number.int({ min: 18, max: 30 });
    } else if (rand < 0.85) {
        return faker.number.int({ min: 31, max: 59 });
    } else {
        return faker.number.int({ min: 60, max: 80 });
    }
};
let symbol1 = new SimpleMarkerSymbol({
    size: 2,
    color: [0, 0, 226],
    outline: {
        color: [255, 255, 255],
        width: 0.1
    }
});
let symbol2 = new SimpleMarkerSymbol({
    size: 4,
    color: [255, 0, 0],
    outline: {
        color: [255, 255, 255],
        width: 0.1
    }
});
const smallPopulationSymbol = new SimpleMarkerSymbol({
    size: 10,
    color: "#69dcff",
    outline: {
        color: "rgba(0, 139, 174, 0.5)",
        width: 5
    }
});

const mediumPopulationSymbol = new SimpleMarkerSymbol({
    size: 20,
    color: "#69dcff",
    outline: {
        color: "rgba(0, 139, 174, 0.5)",
        width: 5
    }
});

const largePopulationSymbol = new SimpleMarkerSymbol({
    size: 30,
    color: "#69dcff",
    outline: {
        color: "rgba(0, 139, 174, 0.5)",
        width: 5
    }
});

/**
 * 实例化类后请务必调用generateVisitors方法生成游客数据
 */
export default class VisitorHandler {
    private _spotAreaLayer: __esri.FeatureLayer;
    private _myVisitors: __esri.Graphic[] = [];
    private _myPolygon: Polygon | null = null;
    private _myPoints: __esri.Point[] = [];
    private internalTimer: NodeJS.Timer | null = null;
    private _spotPointsLayer: __esri.FeatureLayer;
    private _areaFeatureSet!: __esri.FeatureSet;
    private _pointsFeatureset!: __esri.FeatureSet;
    private _roadsLayer: Raw<FeatureLayer>;
    private _myRodas: __esri.Polyline[] | null = null;
    public roadsFeatureset: __esri.FeatureSet | undefined;
    get roadsLayer(): __esri.FeatureLayer {
        return this._roadsLayer;
    }
    get spotAreaLayer(): __esri.FeatureLayer {
        return this._spotAreaLayer;
    }
    get spotPointsLayer(): __esri.FeatureLayer {
        return this._spotPointsLayer;
    }
    get pointFeatureset(): __esri.FeatureSet {
        return this._pointsFeatureset;
    }
    constructor(spot: spot) {
        this._spotAreaLayer = spot.polygonLayer;
        this._spotPointsLayer = spot.pointsLayer;
        this._roadsLayer = spot.roadsLayer;
    }
    private isInbuffers(point: Point, buffers: __esri.Polygon[]) {
        for (let i = 0; i < buffers.length; i++) {
            if (geometryEngine.contains(buffers[i], point)) {
                return true;
            }
        }
        let a = Math.random();
        if (a < 0.8) {
            return false;
        }
        else {
            return true;
        }
    }
    private getRandomPointInPolygon(polygon: Polygon) {
        var extent = polygon.extent;
        let buffers = geometryEngine.buffer(this._myPoints, 60, "meters") as __esri.Polygon[];
        var point;
        do {
            var randomX = extent.xmin + (Math.random() * extent.width);
            var randomY = extent.ymin + (Math.random() * extent.height);
            point = new Point({
                x: randomX,
                y: randomY,
                spatialReference: polygon.spatialReference
            });
        } while (!(polygon.contains(point) && this.isInbuffers(point, buffers)));

        return point;
    }
    public async ininit(): Promise<void> {
        let visitors: __esri.Graphic[] = [];
        this._areaFeatureSet = await this._spotAreaLayer.queryFeatures();
        this._myPolygon = this._areaFeatureSet.features[0].geometry as Polygon;
        this._pointsFeatureset = await this._spotPointsLayer.queryFeatures();
        this._myPoints = this._pointsFeatureset.features.map((feature) => {
            return feature.geometry as Point;
        });
        this.roadsFeatureset = await this._roadsLayer.queryFeatures();
        this._myRodas = this.roadsFeatureset.features.map((feature) => {
            return feature.geometry as __esri.Polyline;
        });
        await this.roadsLayer.load();
        let pointCount = 0;
        while (pointCount < 1000) {
            if (pointCount >= 1000) {
                return;
            }
            var randomPoint = this.getRandomPointInPolygon(this._myPolygon);
            var pointGraphic = new Graphic({
                geometry: randomPoint,
                attributes: {
                    ObjectID: pointCount,
                    name: "Visitor " + pointCount,
                    gender: faker.helpers.arrayElement(genders),
                    age: getAge(),
                    province: getProvince(),
                },
                symbol: symbol1

            });
            visitors.push(pointGraphic);
            pointCount++;
        }
        this._myVisitors = visitors;
    }
    get visitors(): __esri.Graphic[] {
        return this._myVisitors;
    }
    public queryVisitors(minage: number, maxage: number, province: string, gender: string) {
        if (this._myVisitors.length === 0) {
            throw new Error('visitors not generated');
        }
        else {
            return this._myVisitors.filter((visitor) => {
                return (visitor.attributes.age >= minage) && (visitor.attributes.age <= maxage)
                    && (visitor.attributes.province === province) && (visitor.attributes.gender === gender);
            })
        }

    }
    /**
     * 开启实时游客展示和地理围栏功能
     */
    public enableRealtime(boundarys?: Polygon[], inputText?: Ref<string>) {
        this.internalTimer = setInterval(() => {
            // 创建一个新的点对象，基于旧的点对象，但是更改了经纬度
            for (let i = 0; i < this.visitors.length; i++) {
                let newPoint = new Point({
                    latitude: (this.visitors[i].geometry as Point).latitude + Math.random() * 0.0001 - 0.00005,
                    longitude: (this.visitors[i].geometry as Point).longitude + Math.random() * 0.0001 - 0.00005,
                });
                if (this._myPolygon!.contains(newPoint)) {
                    this.visitors[i].geometry = newPoint;
                }
                else {
                    this.visitors[i].geometry = this._myPoints[5];
                }
                if (boundarys) {
                    for (let index = 0; index < boundarys!.length; index++) {
                        if (boundarys![index].contains(this.visitors[i].geometry as Point)) {
                            if (this.visitors[i].symbol === symbol1) {
                                this.visitors[i].symbol = symbol2;
                                inputText!.value += this.visitors[i].attributes.name + "进入了围栏"+(index+1)+",来自于" +
                                    this.visitors[i].attributes.province + "年龄为" + this.visitors[i].attributes.age + "性别为"
                                    + this.visitors[i].attributes.gender + '\n';
                            }
                            break;
                        }
                        else {
                            if (this.visitors[i].symbol === symbol2) {
                                inputText!.value += this.visitors[i].attributes.name + "离开了围栏"+(index+1)+",逗留时间20分钟\n";
                                this.visitors[i].symbol = symbol1;
                            }
                        }
                    }
                }




            }
        }, 800);
    }
    /**
     * 停止实时展示
     */
    public stopRealtime() {
        clearInterval(this.internalTimer!);
    }
    /**
     * 以每个景点生成缓冲区
     */
    public generateBuffer(radius: number, type: 'spots' | 'roads') {
        let bufferGraphics: __esri.Graphic[] = [];
        if (type === 'spots') {
            this._myPoints.forEach((point) => {
                var buffer = geometryEngine.buffer(point, radius, "meters") as __esri.Polygon;
                var bufferGraphic = new Graphic({
                    geometry: buffer,
                    symbol: new SimpleFillSymbol({
                        // color: [100, 149, 237, 0.8],
                        style: "solid",
                        outline: {
                            color: [255, 255, 255],
                            width: 0.3
                        }
                    })
                });
                bufferGraphics.push(bufferGraphic);
            });
        }
        else {
            this._myRodas!.forEach((point) => {
                var buffer = geometryEngine.buffer(point, radius, "meters") as __esri.Polygon;
                var bufferGraphic = new Graphic({
                    geometry: buffer,
                    symbol: new SimpleFillSymbol({
                        // color: [100, 149, 237, 0.8],
                        style: "solid",
                        outline: {
                            color: [255, 255, 255],
                            width: 0.3
                        }
                    })
                });
                bufferGraphics.push(bufferGraphic);
            });

        }

        return bufferGraphics;
    }
    /**
     * 得到景区内的游客数量
     */
    public getVisitorsinPolygons(polygons: __esri.Graphic[]) {
        polygons.forEach((polygon) => {
            let touristsInBuffer = [];
            for (let i = 0; i < this.visitors.length; i++) {
                if (geometryEngine.contains(polygon.geometry, this.visitors[i].geometry)) {
                    touristsInBuffer.push(this.visitors[i]);
                }
            }
            polygon.attributes = {
                ...polygon.attributes,
                tourists: touristsInBuffer,
            }
            polygon.attributes.tourists = touristsInBuffer;
            //记录缓冲区内的人数，后面有用
            peoNumbers.push(touristsInBuffer.length);
        })
    }
    /**
     * 产生热力图图层
     */
    public async generateLayer(type: 'spots' | 'roads') {
        let heatmapLayer = new FeatureLayer({
            source: type === 'spots' ? this._pointsFeatureset.features :
                this.roadsFeatureset!.features,
            objectIdField: "ObjectID",
            fields: [{
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid"
            }, {
                name: "name",
                alias: "name",
                type: "string"
            },
            {
                name: "peoNumber",
                alias: "peoNumber",
                type: "integer"
            }
            ],
            geometryType: type === 'spots' ? "point" : "polyline",
        })
        let query = heatmapLayer.createQuery();
        query.where = "1=1"; // 查询所有特征
        let results = await heatmapLayer.queryFeatures(query);
        let features = results.features;
        const colors = ["#ff8080", "#ff6060", "#ff4040", "#ff2020", "#ff0000"];
        let linewidth = 3;
        let updatedFeatures = features.map(function (feature, index) {
            feature.attributes.peoNumber = peoNumbers[index];
            return feature;
        });
        await heatmapLayer.applyEdits({ updateFeatures: updatedFeatures });
        if (type === 'spots') {
            heatmapLayer.renderer = new ClassBreaksRenderer({
                field: "peoNumber",
                classBreakInfos: [{
                    minValue: 0,
                    maxValue: 20,
                    symbol: smallPopulationSymbol,
                }, {
                    minValue: 20,
                    maxValue: 40,
                    symbol: mediumPopulationSymbol,
                }, {
                    minValue: 40,
                    maxValue: Infinity,
                    symbol: largePopulationSymbol
                }]
            });
        }
        else {
            heatmapLayer.renderer = new ClassBreaksRenderer({
                field: "peoNumber",
                classBreakInfos: [{
                    minValue: 0,
                    maxValue: 10,
                    symbol: new SimpleLineSymbol({
                        color: colors[0],
                        width: linewidth,
                        style: "solid"
                    })
                }, {
                    minValue: 10,
                    maxValue: 20,
                    symbol: new SimpleLineSymbol({
                        color: colors[1],
                        width: linewidth,
                        style: "solid"
                    })
                }, {
                    minValue: 20,
                    maxValue: 30,
                    symbol: new SimpleLineSymbol({
                        color: colors[2],
                        width: linewidth,
                        style: "solid"
                    })
                },
                {
                    minValue: 30,
                    maxValue: 40,
                    symbol: new SimpleLineSymbol({
                        color: colors[3],
                        width: linewidth,
                        style: "solid"
                    })
                },
                {
                    minValue: 40,
                    maxValue: 50,
                    symbol: new SimpleLineSymbol({
                        color: colors[4],
                        width: linewidth,
                        style: "solid"
                    })
                }, {
                    minValue: 50,
                    maxValue: 60,
                    symbol: new SimpleLineSymbol({
                        color: "#CC0000",
                        width: linewidth,
                        style: "solid"
                    })
                },
                {
                    minValue: 60,
                    maxValue: 600,
                    symbol: new SimpleLineSymbol({
                        color: "#B20000",
                        width: linewidth,
                        style: "solid"
                    })
                }]
            });
        }
        return heatmapLayer;
    }
    public julei() {
        let featureLayer = new FeatureLayer({
            source: this._myVisitors,
            objectIdField: "ObjectID",
        })
        return featureLayer;
    }
    public recover() {
        this._myVisitors.forEach((visitor) => {
            visitor.symbol = symbol1;
        })
    }
}

