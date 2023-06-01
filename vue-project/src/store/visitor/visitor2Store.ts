import visitorLayer2 from "@/features/Layer/visitorLayers";
import { defineStore } from 'pinia';
export const usevisitor2Store = defineStore('visitor2Store', () => {
    let initializePoints: { lat: number; lon: number; }[] = [];
    let objectIdCounter = 0;
    let myfeatures: any[] = [];

    function generateRandomNumber() {
        // center coordinates
        var center_lat = 36.48777;
        var center_lon = 101.56599;
        for (var i = 0; i < 100; i++) {
            // generate random offsets
            var d_lat = Math.random() * 0.02 - 0.01;
            var d_lon = Math.random() * 0.02 - 0.01;
            var point = {
                lat: center_lat + d_lat,
                lon: center_lon + d_lon
            };
            // add point to array
            initializePoints.push(point);
        }
    }
    function undateFeature() {
        for (var i = 0; i < initializePoints.length; i++) {
            var point = initializePoints[i];
            // update point geometry
            point.lat += Math.random() * 0.002 - 0.001;
            point.lon += Math.random() * 0.002 - 0.001;
            // create feature with updated point
            var feature = {
                attributes: {
                    TRACKID: 1,
                    OBJECTID: objectIdCounter++,
                    STATUS: "red"
                },
                geometry: {
                    x: point.lon,
                    y: point.lat,
                }
            };
            // add the feature
            myfeatures.push(feature);
        }
        visitorLayer2.sendMessageToClient({
            type: "features",
            features: myfeatures
        });
    }
    function begin() {
        generateRandomNumber();
        setInterval(() => {
            undateFeature();
            visitorLayer2.sendMessageToClient({
                type: "features",
                features: myfeatures
            })
        }, 100);
    }
    return { begin };
});