import { taershiPolygon,taershiPoint,roadsLayer } from '@/features/Layer/visitorLayers';
import { markRaw } from 'vue';
const spotOptions = [
    {
        value: '塔尔寺',
        label: '塔尔寺',
        polygonLayer: markRaw(taershiPolygon),
        pointsLayer: markRaw(taershiPoint),
        roadsLayer:markRaw(roadsLayer)
    },
    {
        value: '青海湖',
        label: '青海湖',
    },
    {
        value: '鄂陵湖湿地',
        label: '鄂陵湖湿地',
    },
    {
        value: '盘道',
        label: '盘道',
    },
    {
        value: '扎陵湖湿地',
        label: '扎陵湖湿地',
    },
]
const provinceOption = [
    {
        value: '广东',
        label: '广东'

    },
    {
        value: '江苏',
        label: '江苏'
    },
    {
        value: '浙江',
        label: '浙江'
    },
    {
        value: '青海',
        label: '青海',
    },
    {
        value: '甘肃',
        label: '甘肃',
    },
    {
        value: '新疆',
        label: '新疆',
    },
    {
        value: '西藏',
        label: '西藏',
    },
    {
        value: '四川',
        label: '四川',
    },
    {
        value: '云南',
        label: '云南',
    },
    {
        value: '内蒙',
        label: '内蒙',
    },
    {
        value: '宁夏',
        label: '宁夏',
    },
    {
        value: '陕西',
        label: '陕西',
    },

]
export { spotOptions, provinceOption }