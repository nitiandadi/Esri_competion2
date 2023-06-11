import { SimpleRenderer } from '@arcgis/core/renderers';
import visitorLayer2 from "@/features/Layer/visitorLayers";
import { defineStore } from 'pinia';
import type Polygon from "@arcgis/core/geometry/Polygon";
import Point from "@arcgis/core/geometry/Point";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { faker } from '@faker-js/faker';
interface Visitor {
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

export const usevisitor2Store = defineStore('visitor2Store', () => {
    let myFeatuLayer: __esri.FeatureLayer | null = null;
    let myArea: Polygon | null = null;
    let myVisitors: __esri.Graphic[] = [];
    async function setFeatureLayer(layer: __esri.FeatureLayer) {
        myFeatuLayer = layer;
        await layer.queryFeatures().then(function (results) {
            var features = results.features;
            myArea = features[0].geometry as Polygon;
        });
        return myArea;
    }
    async function generateVisitors(layer: __esri.FeatureLayer): Promise<__esri.Graphic[]> {
        let visitors: __esri.Graphic[] = [];
        await layer.queryFeatures().then(function (results) {
            var features = results.features;
            var pointCount = 0;
            while (pointCount < 1000) {
                features.forEach(function (feature) {
                    if (pointCount >= 1000) {
                        return;
                    }
                    var polygon = feature.geometry;
                    var randomPoint = getRandomPointInPolygon(polygon as Polygon);
                    var pointGraphic = new Graphic({
                        geometry: randomPoint,
                        attributes: {
                            ObjectID: pointCount,
                            name: "Visitor " + pointCount,
                            gender: faker.helpers.arrayElement(genders),
                            age: getAge(),
                            province: getProvince(),
                        },
                        symbol: new SimpleMarkerSymbol({
                            size: 2,
                            color: [0, 0, 226],
                            outline: {
                                color: [255, 255, 255],
                                width: 0.1
                            }
                        }),

                    });
                    visitors.push(pointGraphic);
                    pointCount++;
                });
            }
        });
        myVisitors = visitors;
        return visitors;
    }

    function getRandomPointInPolygon(polygon: Polygon) {
        var extent = polygon.extent;
        var point;
        do {
            var randomX = extent.xmin + (Math.random() * extent.width);
            var randomY = extent.ymin + (Math.random() * extent.height);
            point = new Point({
                x: randomX,
                y: randomY,
                spatialReference: polygon.spatialReference
            });
        } while (!polygon.contains(point));

        return point;
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
    function queryVisitors(minage: number, maxage: number, province: string, gender: string) {
        console.log(myVisitors);
        let a = myVisitors.filter((visitor) => {
            // return (visitor.attributes.age >= minage && visitor.attributes.age <= maxage
            //     && visitor.attributes.province === province && visitor.attributes.gender === gender);
            return (visitor.attributes.age >= minage) && (visitor.attributes.age <= maxage)
                && (visitor.attributes.province === province) && (visitor.attributes.gender === gender);
        })
        console.log(a);
        return a;
    }
    return { generateVisitors, setFeatureLayer, queryVisitors }
})