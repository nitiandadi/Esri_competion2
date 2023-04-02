/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../../core/JSONSupport.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/accessorSupport/ensureType.js";import"../../../core/arrayUtils.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";let t=class extends e{constructor(r){super(r),this.ownerFilter=null,this.includeHidden=!1}};r([o({type:String,json:{write:!0}})],t.prototype,"ownerFilter",void 0),r([o({type:Boolean,json:{write:!0}})],t.prototype,"includeHidden",void 0),t=r([s("esri.rest.versionManagementService.support.GetVersionInfosParameters")],t);const p=t;export{p as default};
