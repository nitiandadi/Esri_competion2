/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isNone as t,unwrapOr as r}from"../core/maybe.js";import{getDefaultUnitSystem as e}from"../core/unitUtils.js";import o from"../portal/Portal.js";function i(i){const n="metric";if(t(i))return n;const s=i.map,a=(s&&"portalItem"in s?s.portalItem?.portal:null)??o.getDefault();switch(a.user?.units??a.units){case n:return n;case"english":return"imperial"}return r(e(i.spatialReference),n)}export{i as getDefaultUnitForView};
