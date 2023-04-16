import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"
import Featurelayer from "@arcgis/core/layers/FeatureLayer"
import PopupTemplate from "@arcgis/core/PopupTemplate"
let classBreaksRenderer = new ClassBreaksRenderer({
    field: "Peo_Number",
    classBreakInfos: [{
        minValue: 0,
        maxValue: 6,
        symbol: new SimpleMarkerSymbol({
            size: 5,
            color: "red"
        })
    }, {
        minValue: 6,
        maxValue: 70,
        symbol: new SimpleMarkerSymbol({
            size: 10,
            color: "red"
        })
    },
    {
        minValue: 70,
        maxValue: 150,
        symbol: new SimpleMarkerSymbol({
            size: 15,
            color: "red"
        })
    },
    {
        minValue: 150,
        maxValue: 200,
        symbol: new SimpleMarkerSymbol({
            size: 20,
            color: "red"
        })
    }, {
        minValue: 200,
        maxValue: 277,
        symbol: new SimpleMarkerSymbol({
            size: 25,
            color: "red"

        })
    },
    {
        minValue: 277,
        maxValue: 400,
        symbol: new SimpleMarkerSymbol({
            size: 30,
            color: "red"

        })
    },
    ]
})
let sourceLayer = new Featurelayer({
    url: 'https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E6%97%85%E6%B8%B8%E4%BA%BA%E6%95%B0/FeatureServer',
    renderer: classBreaksRenderer,
})
sourceLayer.popupTemplate = new PopupTemplate({
    title: "游客人数",
    content: [{
        type: "fields",
        fieldInfos: [
            {
                fieldName: 'Province',
                label: 'Province',
            },
            {
                fieldName: 'Capital',
                label: 'Capital',
            },
            {
                fieldName: 'Longitude',
                label: 'Longitude',
            },
            {
                fieldName: 'Latitude',
                label: 'Latitude',
            },
            {
                fieldName: 'Peo_Number',
                label: 'Peo_Number',
            },
        ]
    }]
})
export default sourceLayer;