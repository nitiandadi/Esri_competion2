/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isPolyline as t,isPolygon as s}from"../../../geometry/support/jsonUtils.js";import{cloneAndDecodeGeometry as e,deltaEncodeGeometry as r}from"../CIMCursor.js";import{SimpleGeometryCursor as o}from"../CIMEffects.js";import{getEffectOperator as n}from"../CIMOperators.js";const c=96/72;class f{static executeEffects(t,s,r,f){const p=e(s),u=c;let i=new o(p);for(const e of t){const t=n(e);t&&(i=t.execute(i,e,u,r,f))}return i}static next(t){const s=t.next();return r(s),s}static applyEffects(e,r,c){if(!e)return r;let f=new o(r);for(const t of e){const s=n(t);s&&(f=s.execute(f,t,1,null,c))}let p,u=null;for(;p=f.next();)u?t(u)?t(p)&&u.paths.push(...p.paths):s(u)&&s(p)&&u.rings.push(...p.rings):u=p;return u}}export{f as CIMEffectHelper};
