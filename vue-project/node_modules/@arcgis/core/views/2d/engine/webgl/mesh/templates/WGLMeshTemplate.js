/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isNone as e}from"../../../../../../core/maybe.js";import{CIMEffectHelper as t}from"../../../../../../symbols/cim/effects/CIMEffectHelper.js";class r{constructor(){this._materialKey=null}bindFeature(e,t,r){}write(r,s,i,f){if(e(this._effects)||0===this._effects?.length)return this._write(r,s,f);const c=t.executeEffects(this._effects,s.readLegacyGeometryForDisplay(),r.tileKey,f.geometryEngine);let o=t.next(c);for(;o;)this._write(r,s,f,o),o=t.next(c)}_write(e,t,r,s){}}export{r as default};
