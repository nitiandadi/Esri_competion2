import createPointslayer from './Layer/pointslayer'
import createtimePointslayer from './Layer/timepointslayer'
import AQIfeatures from './environment/AQI';
import {qualityname }from './environment/waterquality';
//@ts-ignore
// import visitorLayer from './Layer/visitorLayer';
import buildData from './build/build';
import treedata from './evaluation/treedata';
import selectFilterData from './evaluation/selectdata';
import commentsList from './evaluation/commentsList';
import ageData from './evaluation/chartdata';
export {
    ageData,
    commentsList,
    selectFilterData,
    treedata,
    buildData,
    // visitorLayer,
    AQIfeatures,
    qualityname,
    createPointslayer,
    createtimePointslayer,
};