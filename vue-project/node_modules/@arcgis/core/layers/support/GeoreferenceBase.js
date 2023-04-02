/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{Clonable as r}from"../../core/Clonable.js";import o from"../../core/Logger.js";import{isNone as t}from"../../core/maybe.js";import"../../core/accessorSupport/ensureType.js";import"../../core/arrayUtils.js";import"../../core/Error.js";import"../../core/has.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import{projectOrLoad as c}from"../../geometry/projection.js";let a=class extends r{projectOrWarn(e,r){if(t(e))return e;const{geometry:s,pending:a}=c(e,r);return a?null:a||s?s:(o.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};a=e([s("esri.layers.support.GeoreferenceBase")],a);const p=a;export{p as default};
