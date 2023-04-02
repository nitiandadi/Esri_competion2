/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{on as o}from"../../core/reactiveUtils.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/accessorSupport/ensureType.js";import"../../core/arrayUtils.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import r from"../Widget.js";let i=class extends r{constructor(e,o){super(e,o),this.type=null,this.viewModel=null}initialize(){this.addHandles([o((()=>this.viewModel),"animate",(()=>{this.animate()})),o((()=>this.viewModel),"next",(()=>{this.next()})),o((()=>this.viewModel),"previous",(()=>{this.previous()}))])}};e([s()],i.prototype,"type",void 0),e([s()],i.prototype,"viewModel",void 0),i=e([t("esri.widgets.ValuePicker.BaseComponent")],i);const p=i;export{p as default};
