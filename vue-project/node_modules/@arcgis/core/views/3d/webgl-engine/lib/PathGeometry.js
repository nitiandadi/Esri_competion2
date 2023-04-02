/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{ContentObjectType as t}from"./ContentObjectType.js";import{Geometry as e}from"./Geometry.js";class r extends e{constructor(e,r,n,o,i,s,c,h){super(e,r,n,null,t.Mesh,h),this.path=o,this.geometrySR=i,this.upVectorAlignment=s,this.stencilWidth=c}}var n;function o(t){return"upVectorAlignment"in t}!function(t){t[t.World=0]="World",t[t.Path=1]="Path"}(n||(n={}));export{r as PathGeometry,n as UpVectorAlignment,o as isPathGeometry};
