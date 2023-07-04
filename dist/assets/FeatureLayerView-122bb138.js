import{s as N,e as l,y as u,po as C,dM as j,dY as S,a as M,m as Q,C as B,bo as I,a6 as v,dJ as R,r as d,x as q,a2 as D,aS as P,pp as _,pq as T,pr as O,ps as L,pt as z,pu as y,pv as m,t as F,b as g,pw as U}from"./MapView-d4248bee.js";import{o as A}from"./floorFilterUtils-080a7cd2.js";import{s as w,d as k}from"./popupUtils-7e1f6d3e.js";const $="esri.views.layers.FeatureLayerView",x=N.getLogger($),Y=G=>{let o=class extends G{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.handles.add([Q(()=>{var e;const t=this.layer;return[(e=t==null?void 0:t.elevationInfo)==null?void 0:e.featureExpressionInfo,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),B),I(()=>{var t;return(t=this.view)==null?void 0:t.floors},"change",()=>this._handleRequiredFieldsChange()),I(()=>{const t=this.layer;return t&&"sublayers"in t?t.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const{layer:t,layer:{fieldsIndex:e},requiredFields:r}=this;return"outFields"in t&&t.outFields?v(e,[...R(e,t.outFields),...r]):v(e,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){this._override("featureEffect",t)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){x.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=d(this.filter)?this.filter.createQuery(t):new q(t);if(this.layer.type==="feature"){const r=A(this);d(r)&&(e.where=e.where?`(${e.where}) AND (${r})`:r)}return d(this.timeExtent)&&(e.timeExtent=d(e.timeExtent)?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}createAggregateQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new q(t)}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}async fetchPopupFeatures(t,e){const r=this.validateFetchPopupFeatures(e);if(r)throw r;return this.fetchClientPopupFeatures(e)}_loadArcadeModules(t){return t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?D():Promise.resolve()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t=this.view.type==="3d",{layer:e,layer:{fieldsIndex:r,objectIdField:a}}=this,f="renderer"in e&&e.renderer,s="orderBy"in e&&e.orderBy,n="featureReduction"in e?e.featureReduction:null,i=new Set,c=await P([f?f.collectRequiredFields(i,r):null,_(i,e),t?T(i,e):null,d(this.filter)?O(i,e,this.filter):null,d(this.featureEffect)?O(i,e,this.featureEffect.filter):null,n?L(i,e,n):null,s?z(i,e,s):null]);if("timeInfo"in e&&e.timeInfo&&this.timeExtent&&y(i,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),e.type==="feature"&&(e.floorInfo&&y(i,e.fieldsIndex,[e.floorInfo.floorField]),t&&d(e.infoFor3D)&&(e.globalIdField==null&&x.error("globalIdField missing on 3DObjectFeatureLayer"),y(i,e.fieldsIndex,[e.globalIdField]))),e.type==="subtype-group"){m(i,r,e.subtypeField);const p=e.sublayers.map(E=>{var b;return Promise.all([(b=E.renderer)==null?void 0:b.collectRequiredFields(i,r),_(i,E)])});await P(p)}for(const p of c)p.error&&x.error(p.error);m(i,r,a),t&&"displayField"in e&&e.displayField&&m(i,r,e.displayField);const h=Array.from(i).sort();this._set("requiredFields",h)}validateFetchPopupFeatures(t){if(F(t))return null;for(const e of t.clientGraphics??[]){const r=e.layer;if("popupEnabled"in r&&!r.popupEnabled)return new g("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r});if(e.isAggregate){const a="featureReduction"in r?r.featureReduction:null;if(!(a&&"popupTemplate"in a&&a.popupEnabled&&a.popupTemplate))return new g("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r})}else if("popupTemplate"in r&&!w(r,t))return new g("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r})}}async fetchClientPopupFeatures(t){const e=d(t)?t.clientGraphics:null;if(!e||e.length===0)return[];const r=new Array(e.length),a=new Map,f=await this.createPopupQuery(t);for(let s=0;s<e.length;s++){const n=e[s];if(n.isAggregate){r[s]=n;continue}const i=n.layer;if(!("popupEnabled"in i))continue;const c=R(this.layer.fieldsIndex,f.outFields),h=w(i,t);if(F(h))continue;const p=await this._loadArcadeModules(h);p&&p.arcadeUtils.hasGeometryOperations(h)||!U(c,n)?a.set(n.getObjectId(),{graphic:n,index:s}):r[s]=n}if(this.layer.type==="stream"||a.size===0)return r.filter(Boolean);f.objectIds=Array.from(a.keys());try{const s=await this.layer.queryFeatures(f);for(const n of s.features){const{graphic:{geometry:i},index:c}=a.get(n.getObjectId());n.geometry||(n.geometry=i),r[c]=n}}catch{}return r.filter(Boolean)}async createPopupQuery(t){const e=this.layer.createQuery(),r=new Set;let a=!1;const f=d(t)&&t.clientGraphics?t.clientGraphics.map(s=>s.layer):[this.layer];for(const s of f){if(!("popupEnabled"in s))continue;const n=w(s,t);if(F(n))continue;const i=await this._loadArcadeModules(n),c=i&&i.arcadeUtils.hasGeometryOperations(n);a=!(this.layer.geometryType!=="point"&&!c);const h=await k(this.layer,n);for(const p of h)r.add(p)}if(e.returnGeometry=a,e.returnZ=a,e.returnM=a,e.outFields=Array.from(r),e.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const s=A(this);d(s)&&(e.where=e.where?`(${e.where}) AND (${s})`:s)}return e}canResume(){return!!super.canResume()&&(!d(this.timeExtent)||!this.timeExtent.isEmpty)}};return l([u()],o.prototype,"_updatingRequiredFieldsPromise",void 0),l([u({readOnly:!0})],o.prototype,"availableFields",null),l([u({type:C})],o.prototype,"featureEffect",null),l([u({type:j})],o.prototype,"filter",void 0),l([u(S)],o.prototype,"timeExtent",void 0),l([u()],o.prototype,"layer",void 0),l([u({type:Number})],o.prototype,"maximumNumberOfFeatures",null),l([u({readOnly:!0,type:Boolean})],o.prototype,"maximumNumberOfFeaturesExceeded",null),l([u({readOnly:!0})],o.prototype,"requiredFields",void 0),l([u()],o.prototype,"suspended",void 0),l([u()],o.prototype,"view",void 0),o=l([M($)],o),o};export{Y as A};
