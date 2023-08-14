import{eB as v,o2 as D,bS as T,g as V,r as h,ps as x,e as a,y as n,b as f,v as F,t as q,pt as $,bR as N,c9 as P,pu as Q,pv as R,av as w,p as C,E as M,ec as g,D as O,bz as E,k2 as Z,eb as I,c as j}from"./mapviewstore-8a6f290e.js";import{L as A,w as k,U as L}from"./FeatureLikeLayerView3D-11c64dae.js";import{n as U}from"./LayerView3D-5ca1a46f.js";import{r as B}from"./EventedSet-2690b7ae.js";import{A as J}from"./FeatureLayerView-c73d0326.js";import{u as H}from"./LayerView-1a71a07c.js";import{i as Y}from"./RefreshableLayerView-def91771.js";class z{constructor(t){this._controller=t,this._handle=new K(r=>t.schedule(r))}destroy(){this._handle.destroy()}invoke(t,r){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof v&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,r).then(s=>{let i=0,o=0;const l=async u=>{if(s.spatialReference=v.fromJSON(s.spatialReference),s.fields){for(;i<s.fields.length;)if(s.fields[i]=T.fromJSON(s.fields[i]),i++,u.madeProgress())return this._controller.reschedule(y=>l(y))}const b=s.spatialReference;for(;o<s.features.length;){const y=s.features[o];if(++o,y.uid=V.generateUID(),h(y.geometry)&&(y.geometry.spatialReference=b,G(y.geometry),u.madeProgress()))return this._controller.reschedule(S=>l(S))}return s};return this._controller.schedule(u=>l(u))})):Promise.resolve(null)}}function G(e){switch(e.type){case"polyline":e.paths.reduce((t,r)=>t+r.length,0)<x&&(e.paths=e.hasZ||e.hasM?e.paths.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.paths.map(t=>t.map(r=>[r[0],r[1]])));break;case"polygon":e.rings.reduce((t,r)=>t+r.length,0)<x&&(e.rings=e.hasZ||e.hasM?e.rings.map(t=>t.map(r=>[r[0],r[1],r[2]])):e.rings.map(t=>t.map(r=>[r[0],r[1]])))}}class K extends D{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:r=>[r.buffer]},t)}}let p=class extends F{constructor(e){super(e)}get queryFeaturesDehydrated(){var i;const e=this.layer.capabilities,t=e&&e.query,r=t&&t.supportsFormatPBF,s=this.layer.parsedUrl;if(r){q(this._decoder)&&(this._decoder=new z(this.controller));const o={sourceSpatialReference:((i=this.layer.spatialReference)==null?void 0:i.toJSON())??null,applyTransform:!0,maxStringAttributeLength:1024};return(l,u)=>$(s,l,"pbf",this._createRequestOptions(u)).then(b=>(N(u),h(this._decoder)?this._decoder.invoke({buffer:b.data,options:o},u.signal):Promise.reject(P())))}return(o,l)=>Q(s,o,this.layer.spatialReference,this._createRequestOptions(l)).then(u=>R(u.data))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=w(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...e==null?void 0:e.query}}}};a([n({constructOnly:!0})],p.prototype,"layer",void 0),a([n({constructOnly:!0})],p.prototype,"controller",void 0),a([n({readOnly:!0})],p.prototype,"queryFeaturesDehydrated",null),p=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],p);let d=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};a([n({constructOnly:!0})],d.prototype,"layer",void 0),a([n({readOnly:!0})],d.prototype,"queryFeaturesDehydrated",null),d=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],d);let _=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};a([n({constructOnly:!0})],_.prototype,"layer",void 0),_=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],_);let m=class extends F{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(R,r=>{if(r&&r.name==="query-features-json:unsupported")return this.layer.queryFeatures(e,t);throw r})}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};function W(e,t){return e.type==="feature"&&e.source.type==="feature-layer"?h(e.infoFor3D)?new d({layer:e}):new p({layer:e,controller:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="oriented-imagery"||e.type==="wfs"?new m({layer:e,source:e.source}):e.type==="ogc-feature"?new _({layer:e}):null}a([n({constructOnly:!0})],m.prototype,"layer",void 0),a([n({constructOnly:!0})],m.prototype,"source",void 0),m=a([f("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],m);class X{constructor(t){this._memoryCache=null,this._capabilities=null;const r=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=r.objectIdField,this.globalIdField="globalIdField"in r?r.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const s=this._layerView.view.resourceController;this.query=W(r,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(r.uid))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=w(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this._layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return h(this._capabilities)||(this._capabilities=A(this._layerView.layer)),this._capabilities}logFetchError(t,r){t.error("#fetchTile()",this._layerView.layer,r&&r.message?r.message:r)}}let c=class extends Y(k(J(U(H)))){constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this.suspendResumeExtentMode="data"}initialize(){this.handles.add(C(()=>this._updatingRequiredFieldsPromise,e=>this.updatingHandles.addPromise(e),M))}destroy(){this.updatingHandles.removeAll(),this.handles.removeAll(),this._fetcherContext=w(this._fetcherContext)}get maximumNumberOfFeatures(){var e;return((e=this.controller)==null?void 0:e.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var r,s;let e=0;if((r=this.controller)!=null&&r.updating){const i=this.controller.updatingRemaining,o=Math.max(this.controller.updatingTotal,this._controllerTotal);o>0&&(e=(o-i)/o,this._controllerTotal=o)}let t=0;if((s=this.processor)!=null&&s.updating){const i=this.processor.updatingRemaining,o=Math.max(i,this._processorTotal);o>0&&(t=(o-i)/o,this._processorTotal=o)}return .5*(e+t)}get updatePolicy(){if(!this.controller)return g.ASYNC;switch(this.controller.mode){case"snapshot":{const e=ee[this.layer.geometryType];return e==null||this.controller.serviceDataCount>e?g.ASYNC:g.SYNC}case"tiles":return g.ASYNC}}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&e.returnZ!=null?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&e.returnM!=null&&e.returnM}setVisibility(e,t){var r;(r=this.processor)==null||r.setObjectIdVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new X({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const e=new L({layerView:this,context:this._fetcherContext,graphics:new B,extent:this.clippingExtent});return this.updatingHandles.add(()=>e.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},O),this.handles.add(C(()=>this.suspended,t=>{t?e.suspend():e.resume()},M)),this.updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>e.displayFeatureLimit=t,O),this.handles.add(E(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),e}async doRefresh(e){e&&!this.suspended&&this.controller&&this.controller.refetch(),this.processor.refreshFilter()}getUsedMemory(){var e,t;return(((e=this.processor)==null?void 0:e.usedMemory)??0)+(((t=this.controller)==null?void 0:t.memoryForUnusedFeatures)??0)}getUnloadedMemory(){var i,o,l,u;const e=((i=this.processor)==null?void 0:i.unprocessedMemoryEstimate)??0,t=((o=this.controller)==null?void 0:o.expectedFeatureDiff)??0,r=((l=this.processor)==null?void 0:l.loadedFeatures)??0,s=r/(r+t);return e+t*(((u=this.processor)==null?void 0:u.usedMemoryPerFeature)??0)*s}ignoresMemoryFactor(){var e;return(e=this.controller)==null?void 0:e.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t();if(e&&e.outStatistics||q(this.graphics3DProcessor))return r;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,o=[];for(const l of r.features)if(l.geometry){const u=i.get(l.attributes[s]);u&&(l.geometry=Z(u.graphic.geometry),o.push(l))}else o.push(l);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=s=>{throw new j("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of r)e[s]!=null&&t(s);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),h(e.outSpatialReference)&&!e.outSpatialReference.equals(this.view.spatialReference)&&t("outSpatialReference")}get performanceInfo(){var s,i,o,l;const e=(s=this.controller)==null?void 0:s.displayFeatureLimit,t=h(e)?e.averageSymbolComplexity:void 0,r=h(t)?`f:${t.primitivesPerFeature},v:${t.primitivesPerCoordinate}`:"n/a";return{...this._getResourceInfo(),partial:this.maximumNumberOfFeaturesExceeded,mode:((i=this.controller)==null?void 0:i.mode)??"n/a",symbolComplexity:r,nodes:((o=this.controller)==null?void 0:o.tileDescriptors.length)??0,...((l=this.controller)==null?void 0:l.debug)??{storedFeatures:0,totalVertices:0}}}get test(){var e;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:(e=this.controller)==null?void 0:e.graphics}}};a([n()],c.prototype,"layer",void 0),a([n()],c.prototype,"controller",void 0),a([n()],c.prototype,"_controllerTotal",void 0),a([n()],c.prototype,"_processorTotal",void 0),a([n()],c.prototype,"maximumNumberOfFeatures",null),a([n()],c.prototype,"maximumNumberOfFeaturesExceeded",null),a([n(I)],c.prototype,"updatingProgress",void 0),a([n({readOnly:!0})],c.prototype,"updatingProgressValue",null),a([n({readOnly:!0})],c.prototype,"updatePolicy",null),a([n({readOnly:!0})],c.prototype,"hasZ",null),a([n({readOnly:!0})],c.prototype,"hasM",null),a([n()],c.prototype,"suspendResumeExtentMode",void 0),c=a([f("esri.views.3d.layers.FeatureLayerViewBase3D")],c);const ee={point:5e3,polygon:500,polyline:1e3},le=c;export{le as j};