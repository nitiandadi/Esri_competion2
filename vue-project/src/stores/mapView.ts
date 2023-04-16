import { defineStore } from 'pinia';
import { toRaw } from 'vue';
// import MapView from "@arcgis/core/views/MapView.js";
export const mapViewStore = defineStore('mapView', {
    state: () => ({
        count: 0,
        view: null as __esri.MapView | null,
    }),
    getters: {
        double: (state) => state.count * 2,

    },
    actions: {
        increment() {
            this.count++
        },
        getView() {
            if (this.view) {
                return toRaw(this.view);
            }
            else{
                // console.log('please register view first');
                throw console.error('please register view first');
                
            }
        },
        registereView(view: __esri.MapView) {
            this.view = view;
        },
        // addLayer(layer:__esri.Layer) {
        //     if (this.view) {
        //        this.view.map.add(layer);
        //     }
        // },
    },
})