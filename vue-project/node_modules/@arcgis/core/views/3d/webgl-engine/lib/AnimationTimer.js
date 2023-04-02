/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isSome as t}from"../../../../core/maybe.js";import{Milliseconds as e}from"../../../../core/time.js";class i{constructor(){this.enabled=!0,this._time=e(0)}get time(){return this._time}advance({deltaTime:i,fixedTime:m}){return t(m)?this._time!==m&&(this._time=m,!0):(this._time=e(this._time+i),0!==i)}}class m{constructor(t,e){this.deltaTime=t,this.fixedTime=e}}export{i as AnimationTimer,m as Parameters};
