import{f as g,e as t,y as s,pA as R,a as v,m,C as b,t as p,r as i,pB as x,w as u,o as w,wx as z,pD as _,kE as A,wy as P,e9 as S,eb as T,en as C}from"./MapView-d4248bee.js";import{c as q}from"./Analysis-34bda3f7.js";import{f as O,u as $}from"./LineOfSightAnalysisTarget-43569d93.js";import{i as F}from"./elevationInfoUtils-be893fde.js";import"./index-9ba3f23e.js";import"./persistable-69e9c02c.js";import"./resourceExtension-9abd8498.js";const d=g.ofType(O);let o=class extends q{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(m(()=>this._computeExtent(),e=>{(p(e)||p(e.pending))&&this._set("extent",i(e)?e.extent:null)},b))}get targets(){return this._get("targets")||new d}set targets(e){this._set("targets",x(e,this.targets,d))}get spatialReference(){return i(this.observer)&&i(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[u(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return i(e)?w(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(p(this.observer)||p(this.observer.position)||p(e))return null;const n=l=>F(l.position,l.elevationInfo)==="absolute-height",a=this.observer.position,c=z(a.x,a.y,a.z,a.x,a.y,a.z);for(const l of this.targets)if(i(l.position)){const y=_(l.position,e);if(i(y.pending))return{pending:y.pending,extent:null};if(i(y.geometry)){const{x:E,y:j,z:L}=y.geometry;A(c,[E,j,L])}}const h=P(c,e);return n(this.observer)&&this.targets.every(n)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};t([s({type:["line-of-sight"]})],o.prototype,"type",void 0),t([s({type:$,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),t([s({cast:R,type:d,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),t([s({value:null,readOnly:!0})],o.prototype,"extent",void 0),t([s({readOnly:!0})],o.prototype,"spatialReference",null),t([s({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=t([v("esri.analysis.LineOfSightAnalysis")],o);const f=o,H=g.ofType(O);let r=class extends S(T(C)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new f,this.opacity=1}initialize(){this.addHandles(m(()=>this.analysis,(e,n)=>{i(n)&&n.parent===this&&(n.parent=null),i(e)&&(e.parent=this)},b))}async load(){return i(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return u(this.analysis,e=>e.observer)}set observer(e){u(this.analysis,n=>n.observer=e)}get targets(){return i(this.analysis)?this.analysis.targets:new g}set targets(e){var n;x(e,(n=this.analysis)==null?void 0:n.targets)}get fullExtent(){return i(this.analysis)?this.analysis.extent:null}get spatialReference(){return i(this.analysis)?w(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new f)}};t([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),t([s({type:$,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"observer",null),t([s({type:H,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),t([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),t([s({readOnly:!0})],r.prototype,"fullExtent",null),t([s({readOnly:!0})],r.prototype,"spatialReference",null),t([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),t([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=t([v("esri.layers.LineOfSightLayer")],r);const J=r;export{J as default};
