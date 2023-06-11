import createPointslayer from './Layer/pointslayer'
import createtimePointslayer from './Layer/timepointslayer'
import AQIfeatures from './environment/AQI';
<<<<<<< HEAD
import { qualityname } from './environment/waterquality';
import visitorLayer from './Layer/visitorLayer1';

=======
import {qualityname }from './environment/waterquality';
import visitorLayer from './Layer/visitorLayer';
import buildData from './build/build';
>>>>>>> 24c4bd7e40adbe8b46feacbf8b49423b5d7c85f7
export {
    buildData,
    visitorLayer,
    AQIfeatures,
    qualityname,
    createPointslayer,
    createtimePointslayer,
};