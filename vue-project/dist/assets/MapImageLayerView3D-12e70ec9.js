import{e as r,b as p}from"./mapviewstore-8a6f290e.js";import{q as o}from"./DynamicLayerView3D-572442a1.js";import{p as s}from"./MapImageLayerView-f0e289a0.js";import{S as a}from"./MapServiceLayerViewHelper-6b08e376.js";import{a as m}from"./drapedUtils-23d99367.js";import"./index-93a23f67.js";import"./LayerView3D-5ca1a46f.js";import"./projectExtentUtils-e23412a1.js";import"./ImageMaterial-86134e3a.js";import"./LayerView-1a71a07c.js";import"./RefreshableLayerView-def91771.js";import"./ExportImageParameters-3ed81a65.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-694cd24b.js";import"./popupUtils-19dc2706.js";let i=class extends s(o){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new a({createFetchPopupFeaturesQueryGeometry:(t,e)=>m(t,e,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};i=r([p("esri.views.3d.layers.MapImageLayerView3D")],i);const _=i;export{_ as default};