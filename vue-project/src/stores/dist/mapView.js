"use strict";
exports.__esModule = true;
exports.mapViewStore = void 0;
var pinia_1 = require("pinia");
var vue_1 = require("vue");
// import MapView from "@arcgis/core/views/MapView.js";
exports.mapViewStore = pinia_1.defineStore('mapView', {
    state: function () { return ({
        count: 0,
        view: null
    }); },
    getters: {
        double: function (state) { return state.count * 2; }
    },
    actions: {
        increment: function () {
            this.count++;
        },
        getView: function () {
            if (this.view) {
                return vue_1.toRaw(this.view);
            }
            else {
                // console.log('please register view first');
                throw console.error('please register view first');
            }
        },
        registereView: function (view) {
            this.view = view;
        }
    }
});
