import{e as i,y as a,a as s,oI as m,ac as l,b as o,r as n,dE as y}from"./MapView-d4248bee.js";import{j as c}from"./FeatureLayerViewBase3D-b1c5ed69.js";import"./index-9ba3f23e.js";import"./FeatureLikeLayerView3D-db0c636c.js";import"./dehydratedFeatureComparison-0ac2f54e.js";import"./queryForSymbologySnapping-bff12345.js";import"./elevationInfoUtils-be893fde.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-b1c745af.js";import"./rendererConversion-90e15c15.js";import"./optimizedFeatureQueryEngineAdapter-fa5b86b1.js";import"./centroid-589c262e.js";import"./PooledRBush-848b4499.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-0e5abd53.js";import"./QueryEngineResult-000a2eb4.js";import"./WhereClause-34fcc82f.js";import"./executionError-fb3f283a.js";import"./utils-5fb83578.js";import"./ClassBreaksDefinition-6b9f5256.js";import"./projectionSupport-96272605.js";import"./json-48e3ea08.js";import"./utils-f77fba44.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-ae1793ee.js";import"./FeatureStore-15f08eb6.js";import"./BoundsStore-eb68ff23.js";import"./heatmapTextureUtils-d3b5e305.js";import"./projectExtentUtils-9657433f.js";import"./LayerView3D-d82b3e07.js";import"./EventedSet-0c6da25d.js";import"./FeatureLayerView-122bb138.js";import"./popupUtils-7e1f6d3e.js";import"./LayerView-374f7208.js";import"./RefreshableLayerView-82af8ccd.js";let t=class extends c{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){var p;const{layer:e,view:r}=this;(p=l(e))!=null&&p.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),n(e.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||y(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([a({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([a()],t.prototype,"layer",void 0),t=i([s("esri.views.3d.layers.FeatureLayerView3D")],t);const K=t;export{K as default};
