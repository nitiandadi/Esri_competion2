/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../../core/JSONSupport.js";import{property as r}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/accessorSupport/ensureType.js";import"../../../../core/arrayUtils.js";import{subclass as s}from"../../../../core/accessorSupport/decorators/subclass.js";let t=class extends o{constructor(e){super(e),this.moment=null,this.success=!1}};e([r({type:Date,json:{type:Number,write:{writer:(e,o)=>{o.moment=e?e.getTime():null}}}})],t.prototype,"moment",void 0),e([r({type:Boolean,json:{write:!0}})],t.prototype,"success",void 0),t=e([s("esri.rest.versionManagementService.gdbVersion.support.PostResult")],t);const p=t;export{p as default};
