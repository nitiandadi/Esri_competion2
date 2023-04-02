/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{getEffectiveLayerCapabilities as i,getEffectiveEditingEnabled as t}from"./layerUtils.js";function n(n){return!(!n?.loaded||!i(n)?.operations?.supportsEditing||"editingEnabled"in n&&!t(n))}export{n as isEditableLayer};
