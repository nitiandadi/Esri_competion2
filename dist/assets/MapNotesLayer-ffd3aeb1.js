import{aO as M,e as i,y as s,a as $,bm as B,aW as z,Q as x,kc as W,e5 as k,e7 as A,e9 as H,ea as q,eb as K,es as O,f as J,H as Q,a1 as v,fR as E,r as m,l9 as L,pD as w,nE as D,wz as R,oV as j,a4 as U,t as g,b as V,u8 as X,jt as Y,dE as Z,q8 as ee,oi as te,hc as re,jW as oe,f1 as C,d$ as b,e0 as ie,ei as ae,en as le}from"./MapView-d4248bee.js";import{h as ne}from"./GraphicsLayer-7eb64ef4.js";import{n as se}from"./objectIdUtils-789e911a.js";import"./index-9ba3f23e.js";function S(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!_(e))}function _({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return T.find(o=>{var a,n,y;return r===o.geometryTypeJSON&&((y=(n=(a=t.drawingInfo)==null?void 0:a.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function P(){return new ae({xmin:-180,ymin:-90,xmax:180,ymax:90})}const I=new M({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ye=new M({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends ne{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?g(e)?w(P(),t).geometry:j(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=E();return this.graphics.forEach(o=>{const a=m(o.geometry)?w(o.geometry,t).geometry:null;m(a)&&L(e,a.type==="point"?a:a.extent,e)}),D(e,R)?null:e}get sublayers(){return this.graphics}};i([s({readOnly:!0})],u.prototype,"fullExtent",null),i([s({readOnly:!0})],u.prototype,"fullBounds",null),i([s({readOnly:!0})],u.prototype,"sublayers",null),i([s()],u.prototype,"layer",void 0),i([s()],u.prototype,"layerId",void 0),i([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([$("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const T=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new z().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new x().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new W().toJSON()}];let l=class extends k(A(H(q(K(le))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=O.WGS84,this.sublayers=new J(T.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!S(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!S(e))return null;const o=e.layers.map(a=>{const n=new Q;return n.read(a,r),n});return new J({items:o})}readLegacyfeatureCollectionJSON(t,e){return S(e)?v(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=E();return m(this.sublayers)?this.sublayers.forEach(({fullBounds:o})=>m(o)?L(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const a=w(o.layerDefinition.extent,t).geometry;m(a)&&L(e,a,e)}),D(e,R)?w(P(),t).geometry:j(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?O.fromJSON(e.layers[0].layerDefinition.spatialReference):O.WGS84}readSublayers(t,e,r){if(S(e))return null;const o=[];let a=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,d=y.id??a++,c=_(n);if(m(c)){const f=new u({id:c.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:h,symbol:N,attributes:G,popupInfo:F})=>U.fromJSON({attributes:G,geometry:h,symbol:N,popupTemplate:F}))});o.push(f)}}return new J(o)}writeSublayers(t,e,r,o){var c;const{minScale:a,maxScale:n}=this;if(g(t))return;const y=t.some(f=>f.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((c=o==null?void 0:o.messages)==null?void 0:c.push(new V("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const f of t)for(const h of f.graphics)if(m(h.geometry)){d=h.geometry.spatialReference.toJSON();break e}for(const f of T){const h=t.find(N=>f.id===N.id);this._writeMapNoteSublayer(p,h,f,a,n,d,o)}X("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=v(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(g(this.sublayers))return;let t=null;const e=[];for(const o of this.sublayers)for(const a of o.graphics)if(m(a.geometry)){const n=a.geometry;t?Y(n.spatialReference,t)||(Z(n.spatialReference,t)||ee()||await te(),a.geometry=re(n,t)):t=n.spatialReference,e.push(a)}const r=await oe(e.map(o=>o.geometry));e.forEach((o,a)=>o.geometry=r[a])}_findSublayer(t){var e;return g(this.sublayers)?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,a,n,y){const p=[];if(!g(e)){for(const d of e.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,I),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[I.toJSON(),ye.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var d,c;if(g(e))return;const{geometry:a,symbol:n,popupTemplate:y}=e;if(g(a))return;if(a.type!==r)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new C("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(g(n))return void((c=o==null?void 0:o.messages)==null?void 0:c.push(new C("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:a.toJSON(),symbol:n.toJSON()};m(y)&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let o=se(r,t)+1;const a=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||a.has(y[r]))&&(y[r]=o++),a.add(y[r])}}};i([s({readOnly:!0})],l.prototype,"capabilities",void 0),i([b(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),i([s({readOnly:!0})],l.prototype,"featureCollections",void 0),i([b(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),i([b(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),i([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),i([s({readOnly:!0})],l.prototype,"fullExtent",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),i([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),i([s({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),i([b(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),i([s({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),i([b(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),i([s({readOnly:!0})],l.prototype,"multipointLayer",null),i([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),i([s({readOnly:!0})],l.prototype,"pointLayer",null),i([s({readOnly:!0})],l.prototype,"polygonLayer",null),i([s({readOnly:!0})],l.prototype,"polylineLayer",null),i([s({type:O})],l.prototype,"spatialReference",void 0),i([b(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),i([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),i([b("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),i([ie("web-map","sublayers")],l.prototype,"writeSublayers",null),i([s({readOnly:!0})],l.prototype,"textLayer",null),i([s()],l.prototype,"title",void 0),i([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=i([$("esri.layers.MapNotesLayer")],l);const ce=l;export{ce as default};
