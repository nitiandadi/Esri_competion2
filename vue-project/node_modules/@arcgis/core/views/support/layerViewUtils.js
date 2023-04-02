/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isNone as n,isSome as e}from"../../core/maybe.js";function t(n){return n&&"function"==typeof n.highlight}function c(n){return n&&"function"==typeof n.maskOccludee}function o(e,t,c){return n(e)||e>c&&(0===t||e<t)}function r(n,t){return e(n)&&n>0||e(t)&&t>0}function i(n){const e=n.effectiveScaleRange;return{minScale:e?.minScale??0,maxScale:e?.maxScale??0}}export{i as extractSafeScaleBounds,t as highlightsSupported,r as isScaleRangeActive,c as occludeesSupported,o as scaleBoundsPredicate};
