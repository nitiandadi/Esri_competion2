/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../core/maybe.js";function n(n,t){switch(n){case"point":case"multipoint":return"point";case"polyline":return(e(t)&&"polyline"===t.type&&t.paths.length?t.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex";case"polygon":{const n=e(t)&&"polygon"===t.type&&t.rings.length?t.rings[0].length:0;return n<3?"polylineZeroVertices":n<4?"polygonOneVertex":"polygonTwoVertices"}default:return}}export{n as getDrawHelpMessage};
