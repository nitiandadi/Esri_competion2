/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as a,isNone as t}from"../../core/maybe.js";import{ElevationSamplerData as e}from"./ElevationSamplerData.js";class r{constructor(t,r=null){if(this.tile=t,a(r)&&a(t)){const a=t.extent;this._samplerData=new e(r,a)}}get zmin(){return a(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return a(this._samplerData)?this._samplerData.data.maxValue:0}sample(a,e){if(t(this._samplerData))return;const{safeWidth:r,data:i,dx:l,dy:m,y1:n,x0:o}=this._samplerData,{width:h,values:p,noDataValue:u}=i,f=s(m*(n-e),0,r),D=s(l*(a-o),0,r),c=Math.floor(f),d=Math.floor(D),_=c*h+d,x=_+h,y=p[_],V=p[x],g=p[_+1],j=p[x+1];if(y!==u&&V!==u&&g!==u&&j!==u){const a=D-d,t=y+(g-y)*a;return t+(V+(j-V)*a-t)*(f-c)}}}function s(a,t,e){return a<t?t:a>e?e:a}export{r as ElevationTile};
