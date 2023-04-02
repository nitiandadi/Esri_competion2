/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../../core/maybe.js";import{Milliseconds as r}from"../../../../core/time.js";import{ShaderOutput as s}from"../core/shaderLibrary/ShaderOutput.js";import{BindParameters as t}from"./BindParameters.js";import{Camera as c}from"./Camera.js";import{RenderOccludedFlag as a}from"./Material.js";class i{constructor(r,a,i,o=null){this.rctx=r,this.sliceHelper=o,this.lastFrameCamera=new c,this.output=s.Color,this.renderOccludedMask=n,this.bindParameters=new t(a,i,e(o)?o.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=n}}class o extends i{constructor(e,s,t,c,a){super(e,t,c,a),this.offscreenRenderingHelper=s,this.sliceHelper=a,this.time=r(0)}}const n=a.Occlude|a.OccludeAndTransparent|a.OccludeAndTransparentStencil;export{i as OverlayRenderContext,o as RenderContext};
