/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{disposeMaybe as s,isSome as t}from"../../core/maybe.js";class r{constructor(){this._result=!1}dispose(){this._program=s(this._program)}get result(){return t(this._program)&&(this._result=this._test(this._program),this.dispose()),this._result}}export{r as WebGLDriverTestModule};
