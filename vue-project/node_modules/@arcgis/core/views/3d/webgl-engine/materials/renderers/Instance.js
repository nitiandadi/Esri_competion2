/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../../core/maybe.js";import{BufferRange as s}from"./BufferRange.js";class t extends s{constructor(e,s,t){super(s,t),this.geometry=e}get isVisible(){return this.geometry.visible}get hasHighlights(){return e(this.geometry.highlights)&&this.isVisible}get hasOccludees(){return e(this.geometry.occludees)}}export{t as Instance};
