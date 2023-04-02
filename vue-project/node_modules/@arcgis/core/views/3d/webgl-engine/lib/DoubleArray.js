/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{NATIVE_ARRAY_MAX_SIZE as r}from"../../../../core/typedArrayUtil.js";function n(n,t=!1){return n<=r?t?new Array(n).fill(0):new Array(n):new Float64Array(n)}function t(n){return length<=r?Array.from(n):new Float64Array(n)}function a(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}export{t as doubleArrayFrom,a as doubleSubArray,n as newDoubleArray};
