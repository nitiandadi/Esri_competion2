/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{ObservationHandle as e}from"./tracking/ObservationHandle.js";class s{constructor(){this._observers=null,this.destroyed=!1}observe(s){if(this.destroyed||s.destroyed)return r;null==this._observers&&(this._observers=[]);const t=this._observers;let o=!1,n=!1;const i=t.length;for(let e=0;e<i;++e){const r=t[e];if(r.destroyed)n=!0;else if(r===s){o=!0;break}}return o||(t.push(s),n&&this._removeDestroyedObservers()),new e(t,s)}_removeDestroyedObservers(){const e=this._observers;if(!e||0===e.length)return;const s=e.length;let r=0;for(let t=0;t<s;++t){for(;t+r<s;){if(!e[t+r].destroyed)break;++r}if(r>0){if(!(t+r<s))break;e[t]=e[t+r]}}e.length=s-r}destroy(){if(this.destroyed)return;this.destroyed=!0;const e=this._observers;if(null!=e){for(const s of e)s.onCommitted();this._observers=null}}}const r={remove:()=>{}};export{s as ObservableBase};
