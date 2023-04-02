/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{NATIVE_ARRAY_MAX_SIZE as r}from"../../../../core/typedArrayUtil.js";function t(t){if(t.length<r)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}export{t as cloneAttributeData};
