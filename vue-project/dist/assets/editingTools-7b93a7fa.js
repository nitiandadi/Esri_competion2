import{we as Tt,V as J,cg as rt,q as p,r as P,aD as T,g as A,hr as nt,ey as Vt,e as c,y as _,av as U,b as et,b3 as Ut,fU as It,t as Y,ce as Q,b2 as yt,d8 as pt,p as I,fJ as Et,wf as Gt,k5 as zt,im as Nt,ba as Rt,cq as f,fE as V,rS as tt,fm as kt,rT as q,eD as Bt,fp as Z,fs as L,hT as Ft,fN as Mt,hZ as N,fo as vt,fi as jt,ca as Wt,nv as ft,g$ as lt,c1 as Yt,hx as Zt,fF as $,fG as K,b9 as Kt,ch as Xt,cf as qt,wg as Jt,v as Qt}from"./mapviewstore-8a6f290e.js";import{u as te}from"./SnappingVisualizer2D-d8ecade4.js";import{H as ee,k as ie,B as oe,a as se,S as At,A as ae}from"./editPlaneUtils-0385d39e.js";import{i as z,u as wt}from"./analysisThemeUtils-81ceedff.js";import{h as xt}from"./GraphicsLayer-0c6904d3.js";import{x as dt,v as _t,p as Ct,U as Ot}from"./InteractiveToolBase-0db68d23.js";import{t as re,j as ut}from"./GraphicManipulator-b2738ff8.js";import{E as R,V as $t,e as mt,g as ne}from"./EditGeometryOperations-03e088f6.js";import{a as le}from"./drawUtils-04a6e6ca.js";import"./index-93a23f67.js";import"./enums-4b2a86a0.js";import"./settings-f0529d83.js";import"./SnappingManager-e678da87.js";import"./elevationInfoUtils-db1a4384.js";import"./QueryEngineResult-555e15c4.js";import"./WhereClause-1d488167.js";import"./executionError-fb3f283a.js";import"./utils-da1501b7.js";import"./ClassBreaksDefinition-e0623088.js";import"./projectionSupport-2ac8e0ed.js";import"./json-48e3ea08.js";import"./utils-756c69af.js";import"./geometry2dUtils-3b519363.js";import"./viewUtils-4b1f07e9.js";import"./SnappingContext-3f11e741.js";import"./PointSnappingHint-65883099.js";import"./quantityFormatUtils-6059fd77.js";import"./index-c3e37161.js";import"./mapViewstore-4da67348.js";import"./EhcartsLayer-3879df94.js";import"./geometryEngine-31bba3a2.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-a556b3e7.js";import"./StreamLayer-b49a9964.js";import"./PointSizeSplatAlgorithm-f0628442.js";import"./statsWorker-02dc41d2.js";import"./executeQueryPBF-9fbd9b6f.js";import"./colorUtils-9fd88e2d.js";import"./geodesicUtils-0ed15d7f.js";import"./useTime-a8fa1ef7.js";import"./automaticLengthMeasurementUtils-4b743452.js";import"./getDefaultUnitForView-09ed9ab9.js";import"./euclideanLengthMeasurementUtils-a4a01115.js";import"./measurementUtils-834d1f5d.js";import"./automaticAreaMeasurementUtils-3a14dcec.js";import"./euclideanAreaMeasurementUtils-352e0847.js";import"./dehydratedFeatureComparison-baf6aa6d.js";import"./SnappingOperation-f7fee6c6.js";import"./drapedUtils-23d99367.js";const he=new Tt({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),ce=new J({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),pe=new J({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let H=class extends ee{constructor(t){super(t),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:rt(t.activeLineSymbol,he),regularVertices:rt(t.regularVerticesSymbol,ce),activeVertex:rt(t.activeVertexSymbol,pe),fill:p(t.activeFillSymbol)}}normalizeCtorArgs(t){const e={...t};return delete e.activeFillSymbol,delete e.activeVertexSymbol,delete e.regularVerticesSymbol,delete e.activeLineSymbol,e}initializeGraphic(t){return P(this._visualElementSymbols.fill)&&(t.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const{defaultZ:t,hasZ:e,view:i}=this;return new ie({view:i,manipulators:this.manipulators,geometryType:oe(this.geometryType),drawingMode:this.mode,hasZ:e,defaultZ:t,snapToSceneEnabled:this.snapToScene,drawSurface:new se(i,e,t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new te(this.internalGraphicsLayer),tooltipOptions:this.tooltipOptions})}onActiveVertexChanged(t){if(this.geometryType==="point")return null;const[e,i]=t,s=new T({x:e,y:i,spatialReference:this.view.spatialReference});return P(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=s,null):(this._visualElementGraphics.activeVertex=new A({geometry:s,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(ht),nt(()=>{P(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=U(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(t){const e=t.clone();if(e.type==="polyline"){const i=e.paths[e.paths.length-1];i.splice(0,i.length-2)}return P(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=e,null):(this._visualElementGraphics.outline=new A({geometry:e,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(ht),nt(()=>{P(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=U(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(t){const e=new Vt({points:t,spatialReference:this.view.spatialReference});return P(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=e,null):(this._visualElementGraphics.regularVertices=new A({geometry:e,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(ht),nt(()=>{P(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=U(this._visualElementGraphics.regularVertices))}))}};function ht(o,t){var e,i;return(((e=o.attributes)==null?void 0:e.displayOrder)??-1/0)-(((i=t.attributes)==null?void 0:i.displayOrder)??-1/0)}c([_()],H.prototype,"activeFillSymbol",void 0),c([_({readOnly:!0})],H.prototype,"type",void 0),c([_({constructOnly:!0,nonNullable:!0})],H.prototype,"view",void 0),H=c([et("esri.views.2d.interactive.draw.DrawGraphicTool2D")],H);let gt=class{get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}hasManipulator(t){return this.someManipulator(e=>e===t)}someManipulator(t){let e=!1;return this.forEachManipulator(i=>{!e&&t(i)&&(e=!0)}),e}};var B;(function(o){o[o.TRANSLATE_XY=0]="TRANSLATE_XY",o[o.SCALE=1]="SCALE",o[o.ROTATE=2]="ROTATE"})(B||(B={}));class Lt extends gt{constructor(t){super(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._manipulator=this._createManipulator(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._graphic=null}forEachManipulator(t){t(this._manipulator,B.TRANSLATE_XY)}createDragPipeline(t,e){let i=null,s=null,r=0,n=0,a=0;const{offsetX:l,offsetY:d,size:m}=re(p(this._graphic.symbol));return dt(this._manipulator,(g,E)=>{E.next(y=>{if(y.action==="start"){const h=t();i=h.editGeometryOperations,s=h.constraints}return y}).next(_t(this._view)).next(y=>{const{x:h,y:u,z:v}=y.mapEnd;if(s&&(h+l<s.xmin||u+d-m<s.ymin||h+l>s.xmax||u+d-m>s.ymax))return y;y.action==="start"&&(r=y.mapStart.x,n=y.mapStart.y,a=y.mapStart.z);const w=h-r,D=u-n,x=v-a;r=h,n=u,a=v;const O=[];for(const ot of i.data.components)O.push(...ot.vertices);const F=y.action==="start"?R.NEW_STEP:R.ACCUMULATE_STEPS,it=i.moveVertices(O,w,D,x,F);return e(y,it),y})})}_createManipulator(){const t=this._view,e=this._graphic;return new ut({view:t,graphic:e,selectable:!0,cursor:"move"})}}const G={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",toggleOpacity:"t",shift:"Shift",primaryKey:Gt},de=1,_e=10,St=new Ut("#009AF2");let M=class extends Ct{constructor(t){super(t),this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this._initialControlPoints=null,this._graphicsLayer=new xt({internal:!0,listMode:"hide",visible:!1,effect:"drop-shadow(0px, 0px, 3px)"}),this._undoStack=[],this._redoStack=[],this._sharedUndoStack=[],this._sharedRedoStack=[],this._highlightHandle=null,this.activeHandle=0}initialize(){this._initialize()}destroy(){const{map:t}=this.view;this._controlPointManipulations.forEach(e=>e.destroy()),this._controlPointEditGeometryOperations.forEach(e=>e.destroy()),t.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=U(this._graphicsLayer),this._georeference=null,this._controlPointGraphics=null,this._controlPointManipulations=null,this._graphicsLayer=null,this._controlPointEditGeometryOperations=null,this._undoStack=null,this._redoStack=null,this._initialControlPoints=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _hasValidSpatialReference(){return It(this.view.spatialReference)}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){const t=this._undoStack[this._undoStack.length-1];return t!=null&&this._controlPointEditGeometryOperations[t].canUndo}canRedo(){const t=this._redoStack[this._redoStack.length-1];return t!=null&&this._controlPointEditGeometryOperations[t].canRedo}undo(){if(this._undoStack.length>0){const t=this._undoStack.pop();this._controlPointEditGeometryOperations[t].undo(),this.updateGraphics(),this._redoStack.push(t)}}redo(){if(this._redoStack.length>0){const t=this._redoStack.pop();this._controlPointEditGeometryOperations[t].redo(),this.updateGraphics(),this._undoStack.push(t)}}refresh(){const{mediaElement:t}=this;if(Y(t.georeference))return;const e=t.georeference;e.type!=="control-points"||Y(e.coords)||(this._georeference=e,p(this._georeference.controlPoints).forEach(({mapPoint:i},s)=>{const r=this._controlPointEditGeometryOperations[s],n=r.data.components[0].vertices[0];r.setVertexPosition(n,r.data.coordinateHelper.pointToVector(i))}),this.updateGraphics())}reset(){this._georeference.controlPoints=this._initialControlPoints,this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const t=this._georeference,e=p(t.controlPoints),i=p(e[0].mapPoint).spatialReference,s=this._hasValidSpatialReference;this._georeference.controlPoints=this._controlPointEditGeometryOperations.map((r,n)=>{const a=r.data.geometry;return this._controlPointGraphics[n].geometry=a,{mapPoint:Q(a,i),sourcePoint:s?p(e[n]).sourcePoint:t.toSource(a)}})}updateActiveHandle(t){if(this.activeHandle===t)return;const e=p(this._controlPointGraphics[this.activeHandle].symbol).clone();yt(e,z()),this._controlPointGraphics[this.activeHandle].symbol=e;const i=p(this._controlPointGraphics[t].symbol).clone();yt(i,St),this._controlPointGraphics[t].symbol=i,this.activeHandle=t,this.view.surface===document.activeElement&&this.highlightActiveHandle()}async highlightActiveHandle(){this.removeHighlightActiveHandle();const t=await this.view.whenLayerView(this._graphicsLayer);this._highlightHandle=t.highlight(this._controlPointGraphics[this.activeHandle])}removeHighlightActiveHandle(){this._highlightHandle&&this._highlightHandle.remove()}setSharedUndoStack(t){this._sharedUndoStack=t}setSharedRedoStack(t){this._sharedRedoStack=t}async _initialize(){const{view:t,mediaElement:e}=this;if(Y(e.georeference))return;const i=e.georeference;i.type!=="control-points"||Y(i.coords)||(this._georeference=i,this._initialControlPoints=p(this._georeference.controlPoints),t.map.addMany([this._graphicsLayer]),t.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._controlPointEditGeometryOperations=p(this._georeference.controlPoints).map(({mapPoint:s})=>$t.fromGeometry(Q(s,t.spatialReference),pt.Local)),this._controlPointGraphics=this._controlPointEditGeometryOperations.map((s,r)=>new A({symbol:new Tt({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,colorLocked:!0,anchorPoint:{x:0,y:-15.75},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:9,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:84.3,ymax:84.3},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[83.2,32.5],[84.3,40.7],[83.8,48.9],[81.7,56.9],[78.1,64.3],[73,70.9],[66.9,76.4],[59.7,80.5],[51.9,83.2],[43.7,84.3],[35.4,83.8],[27.4,81.7],[20,78],[13.4,73],[7.9,66.8],[3.8,59.7],[1.1,51.9],[0,43.7],[.5,35.4],[2.6,27.4],[6.3,20],[11.3,13.4],[17.5,7.9],[24.7,3.8],[32.5,1.1],[39.8,.1],[47.1,.3],[54.3,1.8],[61.1,4.5],[67.4,8.4],[72.9,13.3],[77.4,19.1],[80.9,25.5],[83.2,32.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,255,255,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[84.3,0],[84.3,84.3],[0,84.3],[0,0]]]}},rotation:0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-11.25},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:22.5,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:197.7,ymax:294.7},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[98.9,0],[119.4,23.2],[139.4,49.3],[156.8,75.2],[171.2,100.8],[182.4,125.3],[190.6,148.8],[195.7,171.4],[197.7,192.9],[197.7,195.8],[197.7,200.3],[197.6,202.5],[197.5,204.8],[197.3,207.1],[197,209.4],[196.7,211.7],[196.4,214.1],[196,216.4],[195.5,218.7],[195,221.1],[194.4,223.4],[193.7,225.8],[193,228.1],[192.2,230.5],[191.4,232.8],[190.5,235.1],[189.5,237.5],[188.5,239.7],[187.4,242],[186.2,244.3],[185,246.5],[183.7,248.7],[182.4,250.9],[181,253.1],[179.5,255.2],[178,257.3],[176.4,259.4],[174.7,261.4],[173.1,263.3],[171.3,265.3],[169.5,267.2],[167.7,269],[165.8,270.8],[163.9,272.5],[161.9,274.2],[159.9,275.8],[157.8,277.4],[155.7,278.9],[153.6,280.4],[151.4,281.7],[149.2,283.1],[147,284.4],[144.8,285.6],[142.5,286.7],[140.3,287.8],[138,288.8],[135.7,289.8],[133.4,290.7],[131,291.5],[128.7,292.3],[126.4,293],[124,293.6],[121.7,294.2],[119.4,294.7],[117,295.2],[114.7,295.6],[112.4,296],[110.1,296.3],[107.8,296.5],[105.5,296.7],[103.3,296.8],[101.1,296.9],[98.8,296.9],[83.1,295.7],[67.8,292],[53.3,285.9],[39.9,277.5],[28.1,267.2],[18,255.1],[10,241.5],[4.2,226.9],[.9,211.5],[0,195.8],[.1,192.9],[2.1,171.4],[7.2,148.8],[15.4,125.3],[26.6,100.8],[41,75.2],[58.4,49.3],[78.4,23.2],[98.9,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:r===this.activeHandle?St.toArray():z().toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[197.7,0],[197.7,294.7],[0,294.7],[0,0]]]}},rotation:0}],haloSize:1,scaleX:1,angleAlignment:"Display",angle:0}}}),geometry:s.data.geometry})),this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]),this._controlPointManipulations=this._controlPointGraphics.map(s=>new Lt({tool:this,view:t,graphic:s})),this.addHandles([...this._controlPointManipulations.map((s,r)=>s.createDragPipeline(this._getInfo.bind(this,r),(n,a)=>{n.action==="start"&&(this._undoStack.push(r),this._redoStack=[],this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0),this.updateGraphics()})),I(()=>this.view.scale,()=>this.active?this.updateGraphics():null)]),this._controlPointManipulations.forEach((s,r)=>{const n=a=>{this.addHandles([a.events.on(["click","grab-changed"],l=>this.updateActiveHandle(r))])};s.forEachManipulator(n)}),this.addHandles([t.on("key-down",s=>{t.activeTool===this&&(s.key!==G.shift||s.repeat||(this._isModifierActive=!0,s.stopPropagation()),s.key!==G.toggleOpacity||s.repeat||(e.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled,s.stopPropagation()),s.key!==G.primaryKey||s.repeat||(this._factor=_e,s.stopPropagation()),this._isModifierActive&&(s.key===G.up&&(this._move(0,this._factor),s.stopPropagation()),s.key===G.down&&(this._move(0,-this._factor),s.stopPropagation()),s.key===G.left&&(this._move(-this._factor,0),s.stopPropagation()),s.key===G.right&&(this._move(this._factor,0),s.stopPropagation())))}),t.on("key-up",s=>{t.activeTool===this&&(s.key===G.shift&&(this._isModifierActive=!1,s.stopPropagation()),s.key===G.primaryKey&&(this._factor=de,s.stopPropagation()))})]))}async _loadProjectionEngine(){const t=p(p(this._georeference.controlPoints)[0].mapPoint);return Et(t.spatialReference,this.view.spatialReference)}_getInfo(t){return{editGeometryOperations:this._controlPointEditGeometryOperations[t],constraints:this._hasValidSpatialReference?null:{xmin:0,ymin:0,xmax:this._georeference.width,ymax:this._georeference.height}}}_move(t,e){const i=this._controlPointEditGeometryOperations[this.activeHandle],s=[];for(const n of i.data.components)s.push(...n.vertices);const r=i.moveVertices(s,t*this.view.resolution,e*this.view.resolution,0,R.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()}};c([_()],M.prototype,"_hasValidSpatialReference",null),c([_()],M.prototype,"activeHandle",void 0),c([_({constructOnly:!0,nonNullable:!0})],M.prototype,"mediaElement",void 0),c([_({constructOnly:!0})],M.prototype,"view",void 0),M=c([et("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")],M);function Dt(o,t){o.action==="start"?t.cursor="grabbing":t.cursor="grab"}class ue{constructor(){this._lastDragEvent=null,this.next=new Ot,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&P(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"};t&&this._adjustScaleFactors(e),this.next.execute(e)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustScaleFactors(t),t)}_adjustScaleFactors(t){const e=t.direction[0]!==0&&t.direction[1]!==0?Math.max(Math.abs(t.factor1),Math.abs(t.factor2)):t.direction[0]===0?Math.abs(t.factor2):Math.abs(t.factor1);t.factor1=t.factor1<0?-e:e,t.factor2=t.factor2<0?-e:e}}class me{constructor(){this._lastDragEvent=null,this.next=new Ot,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&P(this._lastDragEvent)){const e={...this._lastDragEvent,action:"update"};t&&this._adjustRotateAngle(e),this.next.execute(e)}this._enabled=t}createDragEventPipelineStep(){return this._lastDragEvent=null,t=>(this._lastDragEvent=t.action!=="end"?{...t}:null,this._enabled&&this._adjustRotateAngle(t),t)}_adjustRotateAngle(t){const e=zt(t.rotateAngle);t.rotateAngle=Nt(5*Math.round(e/5))}}class ge extends gt{constructor(t){super(),this._handles=new Rt,this._originCache=f(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._snapRotation=t.snapRotation,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",e=>Dt(e,this._manipulator))]),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._snapRotation=null,this._graphic=null,this._handles=null,this._originCache=null}forEachManipulator(t){t(this._manipulator,B.ROTATE)}createDragPipeline(t,e){let i=null,s=null;return dt(this._manipulator,(r,n)=>{n.next(a=>{if(a.action==="start"){r.cursor="grabbing";const l=t();i=l.plane,s=l.editGeometryOperations}return a}).next(_t(this._view)).next(a=>({...a,rotateAngle:le(a.mapStart,a.mapEnd,{x:i.origin[0],y:i.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),this._snapRotation.next).next(a=>{const l=V(this._originCache,i.origin),d=[];for(const E of s.data.components)d.push(...E.vertices);const m=a.action==="start"?R.NEW_STEP:R.ACCUMULATE_STEPS,g=s.rotateVertices(d,l,a.rotateAngle,m,mt.REPLACE);return At(g,i),e(a,g),a}).next(a=>(a.action==="end"&&(r.cursor="grab"),a))})}_createManipulator(){const t=this._view,e=this._graphic;return new ut({view:t,graphic:e,selectable:!0,cursor:"grab"})}}const ct=10,bt=1e-6,ye=.3;function Pt(o){const t=N(o.basis1),e=N(o.basis2);return ye*Math.min(t,e)}class ve extends gt{constructor(t){super(),this._handles=new Rt,this._planeStart=tt(),this._displayPlaneStart=tt(),this._originCache=f(),this._axisCache=kt(),this._renderStartCache=f(),this._renderEndCache=f(),this._resizeOriginCache=f(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._direction=t.direction,this._preserveAspectRatio=t.preserveAspectRatio,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",e=>Dt(e,this._manipulator))]),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this._handles.destroy(),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._graphic=null,this._manipulator=null,this._direction=null,this._handles=null,this._planeStart=null,this._displayPlaneStart=null,this._originCache=null,this._axisCache=null,this._renderStartCache=null,this._renderEndCache=null,this._resizeOriginCache=null,this._preserveAspectRatio=null}forEachManipulator(t){t(this._manipulator,B.SCALE)}createDragPipeline(t,e){let i=null,s=null,r=null,n=0,a=null,l=null;const d=this._planeStart,m=this._displayPlaneStart,g=this._direction;return dt(this._manipulator,(E,y)=>{y.next(h=>{if(h.action==="start"){E.cursor="grabbing";const u=t();i=u.plane,s=u.displayPlane,r=u.editGeometryOperations,n=ct*this._view.resolution,q(i,d),q(s,m);const v=Bt(r.data.spatialReference);a=v?v.valid[1]-v.valid[0]-3*ct*this._view.resolution:null}return h}).next(_t(this._view)).next(h=>{const u=V(this._renderStartCache,[h.mapStart.x,h.mapStart.y,0]),v=V(this._renderEndCache,[h.mapEnd.x,h.mapEnd.y,0]),w=V(this._resizeOriginCache,m.origin);Z(w,w,m.basis1,-g[0]),Z(w,w,m.basis2,-g[1]),L(v,v,w),L(u,u,w);const D=g[0]!==0&&g[1]!==0,x=Pt(m),O=Pt(s)/x,F=(st,at)=>{if(st===0)return 1;let C=N(at),j=.5*st*vt(at,v)/C;const W=j<0?-1:1;D&&(j+=(C-.5*st*vt(at,u)/C)*W*O);const Ht=C<1.5*n?1:bt;return C=Math.max(C-n,bt),W>0&&(j-=ct*this._view.resolution),W*Math.max(W*(j/C),Ht)},it=F(g[0],m.basis1),ot=F(g[1],m.basis2);return{...h,direction:g,factor1:it,factor2:ot}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(h=>{const u=V(this._originCache,d.origin);Z(u,u,d.basis1,-g[0]),Z(u,u,d.basis2,-g[1]);const v=Ft(this._axisCache,d.basis1[0],d.basis1[1]);Mt(v,v);const w=[];for(const O of r.data.components)w.push(...O.vertices);const D=h.action==="start"?R.NEW_STEP:R.ACCUMULATE_STEPS,x=r.scaleVertices(w,u,v,h.factor1,h.factor2,D,mt.REPLACE);return a&&a<r.data.geometry.extent.width&&l?r.updateVertices(w,l):(q(d,i),At(x,i),l=x.operation,e(h,x)),h}).next(h=>(h.action==="end"&&(E.cursor="grab"),h))})}_createManipulator(){return new ut({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}const S={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",plus:"+",minus:"-",toggleOpacity:"t",shift:"Shift",primaryKey:Gt},fe=80,we=10,Se=30,be=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],Pe=1,Te=10;let b=class extends Ct{constructor(o){super(o),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._planeCache=tt(),this._displayPlaneCache=tt(),this._mainAxisCache=kt(),this._rotationHandleCache=f(),this._cornerA=f(),this._cornerB=f(),this._cornerC=f(),this._cornerD=f(),this._avgAB=f(),this._avgBC=f(),this._avgCD=f(),this._avgDA=f(),this._preserveAspectRatio=new ue,this._snapRotation=new me,this._graphicsLayer=new xt({internal:!0,listMode:"hide",visible:!1}),this._sharedUndoStack=[],this._sharedRedoStack=[],this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this.preserveAspectRatio=null,this.snapRotation=null}initialize(){this._initialize()}destroy(){const{map:o}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach(t=>t.destroy()),this._editGeometryOperations.destroy(),o.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=U(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _plane(){const o=this._graphic.geometry;if(!P(o))return null;const t=this._editGeometryOperations.data,e=t.components[0].edges[0],i=jt(this._mainAxisCache,e.leftVertex.pos,e.rightVertex.pos);Mt(i,i);let s=fe*this.view.resolution;const r=this.view.spatialReference;return Wt(r,o.spatialReference)&&(s*=ft(r)/ft(o.spatialReference)),ae(i,t,s,this._planeCache)}get _displayPlane(){const o=this._plane;if(!o)return null;const t=this._displayPlaneCache;q(o,t);const e=we*this.view.resolution;return lt(t.basis1,t.basis1,1+e/N(t.basis1)),lt(t.basis2,t.basis2,1+e/N(t.basis2)),t}get _backgroundGraphicGeometry(){const o=this._displayPlane;if(!o)return null;const t=this.view.spatialReference;return this._updateDisplayPlaneConrers(o),new Yt({spatialReference:t,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}get _rotateGraphicGeometry(){const o=this._plane;if(!o)return null;const t=this._rotationHandleCache;return Zt(t,o.basis1),lt(t,t,Se*this.view.resolution),$(t,t,o.origin),$(t,t,o.basis1),new T({x:t[0],y:t[1],spatialReference:this.view.spatialReference})}get _scaleGraphicGeometries(){const o=this._displayPlane;if(!o)return[];const t=this.view.spatialReference;this._updateDisplayPlaneConrers(o);const{_cornerA:e,_cornerB:i,_cornerC:s,_cornerD:r}=this,n=K(this._avgAB,e,i,.5),a=K(this._avgBC,i,s,.5),l=K(this._avgCD,s,r,.5),d=K(this._avgDA,r,e,.5);return[new T({x:e[0],y:e[1],spatialReference:t}),new T({x:i[0],y:i[1],spatialReference:t}),new T({x:s[0],y:s[1],spatialReference:t}),new T({x:r[0],y:r[1],spatialReference:t}),new T({x:n[0],y:n[1],spatialReference:t}),new T({x:a[0],y:a[1],spatialReference:t}),new T({x:l[0],y:l[1],spatialReference:t}),new T({x:d[0],y:d[1],spatialReference:t})]}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this._editGeometryOperations.undo(),this.updateGraphics()}redo(){this._editGeometryOperations.redo(),this.updateGraphics()}refresh(){const{view:o,target:t}=this,e="georeference"in t?p(p(t.georeference).coords):t.geometry,i=this._editGeometryOperations,s=i.data.components[0].vertices,r=ne.fromGeometry(Q(e,o.spatialReference),pt.Local).components[0].vertices;s.forEach((n,a)=>{i.setVertexPosition(n,r[a].pos)}),this.updateGraphics()}reset(){const{target:o}=this;if("georeference"in o){const t=p(o.georeference);t.type==="control-points"&&(t.controlPoints=this._initialControlPoints)}else o.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const o=this._editGeometryOperations.data.geometry;"georeference"in this.target&&(p(this.target.georeference).coords=o),this._graphic.geometry=o,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach((t,e)=>{this._scaleGraphics[e].geometry=t})}setSharedUndoStack(o){this._sharedUndoStack=o}setSharedRedoStack(o){this._sharedRedoStack=o}async _initialize(){const{view:o,target:t}=this;if("georeference"in t){const i=p(t.georeference);this._graphic=new A({geometry:p(i.coords)}),this._initialControlPoints=i.type==="control-points"?i.controlPoints:null}else this._graphic=t,this._initialGeometry=p(t.geometry);o.map.addMany([this._graphicsLayer]),o.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=$t.fromGeometry(Q(this._graphic.geometry,o.spatialReference),pt.Local),this._backgroundGraphic=new A({symbol:new Kt({color:"transparent",outline:{type:"simple-line",color:z(),width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new A({symbol:new J({color:wt(),outline:{type:"simple-line",color:z(),width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map(i=>new A({symbol:new J({size:6,style:"square",color:wt(),outline:{type:"simple-line",color:z(),width:1}}),geometry:i})),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new Lt({tool:this,view:o,graphic:this._graphic}),this._rotateManipulation=new ge({tool:this,view:o,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map((i,s)=>new ve({tool:this,view:o,graphic:i,direction:be[s],preserveAspectRatio:this._preserveAspectRatio})),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map(i=>i.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this))),I(()=>this.view.scale,()=>this.active?this.updateGraphics():null),o.on("click",async i=>{if(o.activeTool!=null&&o.activeTool!==this)return;const s=Xt(i),r=[];o.map.allLayers.forEach(l=>{l.type!=="vector-tile"&&l.type!=="imagery"||r.push(l)});const n=await this.view.hitTest(s,{exclude:r}),a=n.results;if(a.length===0)o.activeTool=null;else{const l=qt(n.results),d="georeference"in t,m=a.map(E=>E.type==="media"?E.element:null).filter(Boolean),g=[...this._graphicsLayer.graphics,d?null:t].filter(Boolean);d&&m.includes(t)||P(l)&&g.includes(l.graphic)?o.activeTool==null&&(o.activeTool=this):o.activeTool=null}})]);const e=i=>{this.addHandles(i.events.on("grab-changed",s=>{"georeference"in t&&(s.action==="start"?t.opacity*=.5:s.action==="end"&&(t.opacity*=2))}))};this._dragManipulation.forEachManipulator(e),this._rotateManipulation.forEachManipulator(e),this._scaleManipulations.forEach(i=>i.forEachManipulator(e)),this.addHandles([o.on("key-down",i=>{o.activeTool===this&&(i.key!==S.shift||i.repeat||(this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!0,i.stopPropagation()),i.key!==S.toggleOpacity||i.repeat||("georeference"in t&&(t.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled),i.stopPropagation()),i.key!==S.primaryKey||i.repeat||(this._factor=Te,i.stopPropagation()),this._isModifierActive&&(i.key===S.plus&&(this._scale(this._factor),i.stopPropagation()),i.key===S.minus&&(this._scale(-this._factor),i.stopPropagation()),i.key===S.up&&(this._move(0,this._factor),i.stopPropagation()),i.key===S.down&&(this._move(0,-this._factor),i.stopPropagation()),i.key===S.left&&(this._move(-this._factor,0),i.stopPropagation()),i.key===S.right&&(this._move(this._factor,0),i.stopPropagation())))}),o.on("key-up",i=>{o.activeTool===this&&(i.key===S.shift&&(this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled),this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled),this._isModifierActive=!1,i.stopPropagation()),i.key===S.primaryKey&&(this._factor=Pe,i.stopPropagation()))})])}async _loadProjectionEngine(){const o=p(this._graphic.geometry);return Et(o.spatialReference,this.view.spatialReference)}_updateDisplayPlaneConrers(o){const{basis1:t,basis2:e,origin:i}=o,s=this._cornerA;$(s,i,t),$(s,s,e);const r=this._cornerB;$(r,i,t),L(r,r,e);const n=this._cornerC;L(n,i,t),L(n,n,e);const a=this._cornerD;L(a,i,t),$(a,a,e)}_getInfo(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}}_updateGraphics(o,t){o.action==="start"&&(this._sharedUndoStack.push({tool:this,operation:t}),this._sharedRedoStack.length=0),this.updateGraphics()}_scale(o){var n;const t=this._editGeometryOperations,e=[];for(const a of t.data.components)e.push(...a.vertices);const i=(n=t.data.geometry.extent)==null?void 0:n.width,s=(i+o*this.view.resolution)/i,r=t.scaleVertices(e,this._plane.origin,Jt,s,s,R.NEW_STEP,mt.REPLACE);this._sharedUndoStack.push({tool:this,operation:r}),this._sharedRedoStack.length=0,this.updateGraphics()}_move(o,t){const e=this._editGeometryOperations,i=[];for(const r of e.data.components)i.push(...r.vertices);const s=e.moveVertices(i,o*this.view.resolution,t*this.view.resolution,0,R.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:s}),this._sharedRedoStack.length=0,this.updateGraphics()}};c([_()],b.prototype,"_plane",null),c([_()],b.prototype,"_backgroundGraphicGeometry",null),c([_()],b.prototype,"_rotateGraphicGeometry",null),c([_()],b.prototype,"_scaleGraphicGeometries",null),c([_()],b.prototype,"preserveAspectRatio",void 0),c([_()],b.prototype,"snapRotation",void 0),c([_({constructOnly:!0,nonNullable:!0})],b.prototype,"target",void 0),c([_({constructOnly:!0})],b.prototype,"view",void 0),b=c([et("esri.views.2d.interactive.editingTools.TransformTool")],b);const X={redo:"r",undo:"z"};let k=class extends Qt{constructor(o){super(o),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=[],this._sharedRedoStack=[],this._originalOpacity=null,this.activeHandle=0}initialize(){const{view:o,mediaElement:t,preserveAspectRatio:e,snapRotation:i,advancedMode:s}=this;this._originalOpacity=t.opacity,this._transformTool=new b({target:t,view:o,preserveAspectRatio:e,snapRotation:i}),this._controlPointsTransformTool=new M({mediaElement:t,view:o}),this._advancedModeTransformTool=new M({mediaElement:s.mediaElement,view:s.view}),this._transformTool.setSharedUndoStack(this._sharedUndoStack),this._transformTool.setSharedRedoStack(this._sharedRedoStack),this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack),this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack),this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack),this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);const r=p(t.georeference),n=p(s.mediaElement.georeference);s.view.tools.addMany([this._advancedModeTransformTool]),"controlPoints"in n&&"controlPoints"in r&&this.addHandles([s.view.on("key-down",a=>{a.key===X.undo&&this.canUndo()&&(this.undo(),a.stopPropagation()),a.key===X.redo&&this.canRedo()&&(this.redo(),a.stopPropagation())}),s.view.on("focus",async a=>{this._controlPointsTransformTool.removeHighlightActiveHandle(),this._advancedModeTransformTool.highlightActiveHandle()}),I(()=>n.controlPoints,a=>{var l;r.controlPoints=p(a).map(({sourcePoint:d},m)=>({sourcePoint:d,mapPoint:p(r.controlPoints)[m].mapPoint})),(l=this._activeTool)==null||l.refresh()}),I(()=>this._controlPointsTransformTool.activeHandle,a=>{this._advancedModeTransformTool.updateActiveHandle(a),this.activeHandle=a}),I(()=>this._advancedModeTransformTool.activeHandle,a=>{this._controlPointsTransformTool.updateActiveHandle(a),this.activeHandle=a})]),this.addHandles([o.on("key-down",a=>{a.key===X.undo&&this.canUndo()&&(this.undo(),a.stopPropagation()),a.key===X.redo&&this.canRedo()&&(this.redo(),a.stopPropagation())}),o.on("focus",async a=>{this._advancedModeTransformTool.removeHighlightActiveHandle(),this._controlPointsTransformTool.highlightActiveHandle()})]),o.tools.addMany([this._transformTool,this._controlPointsTransformTool]),o.activeTool=this._transformTool,this._activeTool=this._transformTool,o.focus()}destroy(){var o,t;(o=this._transformTool)==null||o.destroy(),(t=this._controlPointsTransformTool)==null||t.destroy(),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=null,this._sharedRedoStack=null}canUndo(){return this._sharedUndoStack.length>0}canRedo(){return this._sharedRedoStack.length>0}undo(){var o;if(this._sharedUndoStack.length>0){const{tool:t,operation:e}=this._sharedUndoStack.pop();t!==this._activeTool&&t.refresh(),e.undo(),t.updateGraphics(),this._sharedRedoStack.push({tool:t,operation:e}),this._activeTool!==t&&((o=this._activeTool)==null||o.refresh())}}redo(){var o;if(this._sharedRedoStack.length>0){const{tool:t,operation:e}=this._sharedRedoStack.pop();t!==this._activeTool&&t.refresh(),e.apply(),t.updateGraphics(),this._sharedUndoStack.push({tool:t,operation:e}),this._activeTool!==t&&((o=this._activeTool)==null||o.refresh())}}refresh(){this._activeTool.refresh()}reset(){this._activeTool.reset(),this._advancedModeTransformTool.reset()}async enableAdvancedMode(){this.view.activeTool=this._controlPointsTransformTool,this._activeTool=this._controlPointsTransformTool,this._activeTool.refresh(),await this.advancedMode.view.when(),this.advancedMode.view.activeTool=this._advancedModeTransformTool,this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity,this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity}disableAdvancedMode(){this.view.activeTool=this._transformTool,this._activeTool=this._transformTool,this._activeTool.refresh(),this.advancedMode.view.activeTool=null,this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity}};c([_()],k.prototype,"activeHandle",void 0),c([_({constructOnly:!0})],k.prototype,"advancedMode",void 0),c([_()],k.prototype,"preserveAspectRatio",void 0),c([_()],k.prototype,"snapRotation",void 0),c([_({constructOnly:!0,nonNullable:!0})],k.prototype,"mediaElement",void 0),c([_({constructOnly:!0})],k.prototype,"view",void 0),k=c([et("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],k);export{M as ControlPointsTransformTool,H as DrawGraphicTool2D,k as MediaTransformToolsWrapper,b as TransformTool};