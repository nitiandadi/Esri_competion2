/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import"../../core/arrayUtils.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import e from"../../layers/support/FeatureFilter.js";const s=s=>{let n=class extends s{constructor(...r){super(...r),this.connectionError=null,this.filter=null}get connectionStatus(){return this.controller?.isPaused?"paused":this.controller?.connection?.connectionStatus??"disconnected"}};return r([o({readOnly:!0})],n.prototype,"connectionError",void 0),r([o({readOnly:!0})],n.prototype,"connectionStatus",null),r([o({type:e})],n.prototype,"filter",void 0),n=r([t("esri.layers.mixins.StreamLayerView")],n),n};export{s as default};
