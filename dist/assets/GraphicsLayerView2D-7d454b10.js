import{au as p,a4 as a,f as o,r as g,e as s,y as m,a as l}from"./MapView-d4248bee.js";import{f as c}from"./LayerView2D-ec9a0ebb.js";import{i as n}from"./GraphicContainer-9ed9fe48.js";import{a as d}from"./GraphicsView2D-2d8fa51c.js";import{u}from"./LayerView-374f7208.js";import"./index-9ba3f23e.js";import"./Container-3552b7d8.js";import"./EffectView-a19236b0.js";import"./definitions-19bfb61c.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-d8a6d5bb.js";import"./FeatureContainer-2ba9556f.js";import"./AttributeStoreView-a590e99b.js";import"./visualVariablesUtils-23cd1413.js";import"./color-f53c4b22.js";import"./enums-4b2a86a0.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-8a24c4d3.js";import"./TileContainer-fbbf5053.js";import"./WGLContainer-81305545.js";import"./WGLBrushVTLSymbol-be6a1f21.js";import"./StyleDefinition-7d58136b.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-a409eccf.js";import"./MaterialKey-c4205548.js";import"./alignmentUtils-ae955d28.js";import"./utils-88fa6bd3.js";import"./heatmapTextureUtils-d3b5e305.js";import"./cimAnalyzer-69a577a3.js";import"./fontUtils-2b8978ff.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./normalizeUtilsSync-b85f6a03.js";import"./projectionSupport-96272605.js";import"./json-48e3ea08.js";import"./Matcher-67a3498f.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-e5bb42c4.js";import"./ExpandedCIM-21e8aeef.js";import"./schemaUtils-f4c71cbb.js";import"./util-f2b5fe85.js";import"./ComputedAttributeStorage-52a1fe70.js";import"./ArcadeDate-df6f30d4.js";import"./executionError-fb3f283a.js";import"./arcadeTimeUtils-7c000710.js";import"./centroid-589c262e.js";import"./GraphicsView-a07a93c0.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(u){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new d({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new n(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const ci=e;export{ci as default};
