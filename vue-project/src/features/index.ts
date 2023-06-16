import createPointslayer from './Layer/pointslayer'
import createtimePointslayer from './Layer/timepointslayer'
import AQIfeatures from './environment/AQI';
import {qualityname }from './environment/waterquality';
//@ts-ignore
// import visitorLayer from './Layer/visitorLayer';
import buildData from './build/build';
export {
    buildData,
    // visitorLayer,
    AQIfeatures,
    qualityname,
    createPointslayer,
    createtimePointslayer,
};