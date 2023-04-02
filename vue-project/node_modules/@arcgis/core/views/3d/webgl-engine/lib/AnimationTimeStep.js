/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import has from"../../../../core/has.js";import{clamp as t}from"../../../../core/mathUtils.js";import{Milliseconds as i}from"../../../../core/time.js";class e{constructor(){this._step=m,this._dilation=1,this._firstIdleTime=i(0)}frame(e,_){_?0===this._firstIdleTime&&(this._firstIdleTime=i(performance.now())):this._firstIdleTime=i(0);if(has("enable-feature:high-quality-idle")){const t=_?performance.now()-this._firstIdleTime:0;if(t>=r+o)return this._step=i(1/0),void(this._dilation=1);this._dilation=t>=r?h:1}else this._dilation=1;const a=t(e/s,m,n);this._step===1/0?this._step=i(a):this._step=i(this._step*l+a*(1-l))}get value(){return this._step}get timeDilation(){return this._dilation}clear(){this._step=this._firstIdleTime=i(0)}}const s=.5,r=i(6e4),o=i(5e3),h=10,l=.9,_=30,m=i(1e3/1),n=i(1e3/_);export{e as AnimationTimeStep};
