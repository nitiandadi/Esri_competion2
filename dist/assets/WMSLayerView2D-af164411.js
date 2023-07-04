import{z as b,s as M,m as R,au as q,ei as U,e as h,y as x,a as I}from"./MapView-d4248bee.js";import{a as w}from"./BitmapContainer-085555d0.js";import{f as E}from"./LayerView2D-ec9a0ebb.js";import{v as H}from"./ExportStrategy-07cbfc93.js";import{u as W}from"./LayerView-374f7208.js";import{i as z}from"./RefreshableLayerView-82af8ccd.js";import{i as A}from"./WMSLayerView-c2e9e47e.js";import"./index-9ba3f23e.js";import"./WGLContainer-81305545.js";import"./definitions-19bfb61c.js";import"./WGLBrushVTLSymbol-be6a1f21.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-f53c4b22.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-a409eccf.js";import"./MaterialKey-c4205548.js";import"./alignmentUtils-ae955d28.js";import"./utils-88fa6bd3.js";import"./heatmapTextureUtils-d3b5e305.js";import"./Container-3552b7d8.js";import"./EffectView-a19236b0.js";import"./Bitmap-559d38d0.js";import"./ExportWMSImageParameters-23954089.js";let s=class extends A(z(E(W))){constructor(){super(...arguments),this.bitmapContainer=new w}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch(e=>{b(e)||M.getLogger(this.declaredClass).error(e)})}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:r}=t;this.bitmapContainer=new w,this.container.addChild(this.bitmapContainer),this.strategy=new H({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=q(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:r}=this,{x:a,y:o}=t,{spatialReference:v}=e;let i,m=0,d=0;if(r.children.some(S=>{const{width:c,height:g,resolution:l,x:p,y:n}=S,y=p+l*c,f=n-l*g;return a>=p&&a<=y&&o<=n&&o>=f&&(i=new U({xmin:p,ymin:f,xmax:y,ymax:n,spatialReference:v}),m=c,d=g,!0)}),!i)return null;const u=i.width/m,C=Math.round((a-i.xmin)/u),$=Math.round((i.ymax-o)/u);return{extent:i,width:m,height:d,x:C,y:$}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,...a})}};h([x()],s.prototype,"strategy",void 0),h([x()],s.prototype,"updating",void 0),s=h([I("esri.views.2d.layers.WMSLayerView2D")],s);const pt=s;export{pt as default};
