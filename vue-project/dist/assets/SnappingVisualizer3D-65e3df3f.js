import{hy as he,hz as ce,hA as ue,cq as h,ff as se,hB as H,hC as f,fE as S,fs as ne,hD as I,fz as j,hE as $,hF as L,r as R,t as z,hG as pe,cg as B,fy as G,hH as C,hI as ae,hJ as W,hK as Y,hL as _e,hM as fe,hN as me,hO as ge,hP as ye,ho as T,hQ as N,hR as E,hx as De,p as Oe,fF as be,fN as Re,fi as Ee,hS as q,q as oe,g0 as V,hT as we,f$ as x,fm as U,fM as de,fg as Ge,hU as A,b3 as D,fG as Ae,hV as M,h5 as Se}from"./mapviewstore-8a6f290e.js";import{Z,E as k}from"./elevationInfoUtils-db1a4384.js";import{t as le,S as xe}from"./RightAngleQuadVisualElement-51086ef2.js";import{d as ve,S as Q}from"./PointVisualElement-e48a1b74.js";import{b as X,c as J,p as d,u as F,s as Pe,E as $e}from"./SnappingManager-e678da87.js";import{r as je}from"./SnappingContext-3f11e741.js";import{f as Ce}from"./viewUtils-4b1f07e9.js";class Te extends le{constructor(e){super(e),this._ray=ue(),this._isWorldDown=!1,this._start=h(),this._end=se(1,0,0),this._width=1,this._color=H(1,0,1,1),this._polygonOffset=!1,this._writeDepthEnabled=!0,this._innerWidth=0,this._innerColor=H(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._falloff=0,this._extensionType=m.LINE,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=f.OccludeAndTransparent,this._fadedExtensions=te,this._laserline=new ve({view:this.view}),this.applyProps(e)}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}updateVisibility(e){super.updateVisibility(e),this._laserline.visible=e}onAttachedChange(){this._laserline.attached=this._laserlineAttached}setStartEndFromWorldDownAtLocation(e){this._isWorldDown=!0,S(this._start,e),this.view.renderCoordsHelper.worldUpAtPosition(e,this._end),ne(this._end,e,this._end),I(this._start,this._end,this._ray),this._updateGeometry()}get start(){return this._start}set start(e){this._isWorldDown=!1,j(this._start,e)||(S(this._start,e),I(this._start,this._end,this._ray),this._updateGeometry())}get end(){return this._end}set end(e){this._isWorldDown=!1,j(this._end,e)||(S(this._end,e),I(this._start,this._end,this._ray),this._updateGeometry())}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){$(e,this._color)||(L(this._color,e),this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){$(e,this._innerColor)||(L(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=R(e)!==R(this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){(z(e)||z(this._stippleOffColor)||!$(e,this._stippleOffColor))&&(this._stippleOffColor=R(e)?pe(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){e!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get extensionType(){return this._extensionType}set extensionType(e){e!==this._extensionType&&(this._extensionType=e,this.recreateGeometry())}get _laserlineAttached(){return this._laserlineEnabled&&R(this._laserlineStyle)&&this.attached&&!this.isDraped}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,R(e)&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===f.OccludeAndTransparentStencil?f.OccludeAndTransparent:this._renderOccluded}get fadedExtensions(){return this._fadedExtensions}set fadedExtensions(e){this._fadedExtensions=B(e,te),this.recreateGeometry()}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=G(this.object3dResources.resources))==null||t.material.setParameters(e),(r=G(this.drapedResources.resources))==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,hasPolygonOffset:this._polygonOffset,renderOccluded:this._normalizedRenderOccluded,writeDepth:this._writeDepthEnabled}}_createObject3DResources(e){const t=new C(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyExternalResources(e){e.geometries=[],e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const i=this._createGeometry(e);r.push(i),t.addGeometry(i),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new C(this.materialParameters);return{material:e,geometries:[this._createDrapedGeometry(e)]}}_recreateDrapedGeometry(e){e.geometries=[this._createDrapedGeometry(e.material)]}_createDrapedGeometry(e){const t=this._createGeometry(e);this._updateVerticesDraped(t);const r=new ae(t,{boundingInfo:t.boundingInfo});return r.computeBoundingSphere(r.transformation,r.boundingSphere),r}_createGeometry(e){const t=this.extensionType===m.FADED,r=t?[h(),h(),h(),h()]:[h(),h()];return W(e,r,null,t?[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]:null)}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=G(this.object3dResources.object);e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this._lineSegment;this._updateVertexAttributesObject3D(e,t),this._laserline.intersectsLine=t}_updateVerticesDraped(e){this._updateVertexAttributesDraped(e,this._lineSegment)}get _lineSegment(){return this._extensionType===m.FADED?this._updateLineSegmentFinite(K):this._updateLineSegmentInfinite(this._extensionType,K)}_updateLineSegmentFinite(e){return Y(this._start,this._end,e)}_updateLineSegmentInfinite(e,t){const r=this.view.state.camera;switch(_e(this._ray,y),e){case m.LINE:y.c0=-Number.MAX_VALUE;break;case m.RAY:case m.GROUND_RAY:{const s=this._ray.origin,o=B(this.view.elevationProvider.getElevation(s[0],s[1],s[2],this.view.renderCoordsHelper.spatialReference,"ground"),0),a=this.view.renderCoordsHelper.getAltitude(s);this._isWorldDown&&a<o&&fe(y.ray.direction,y.ray.direction),this._extensionType===m.GROUND_RAY&&o!=null&&(y.c1=Math.abs(a-o));break}}if(!me(r.frustum,y))return this._updateLineSegmentFinite(t);const i=ge(y,O),n=ye(y,Ie);return Y(i,n,t)}_updateVertexAttributesObject3D(e,t){var n;const r=(n=e.geometries[0].getMutableAttribute(T.POSITION))==null?void 0:n.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=s[2];e.geometryVertexAttrsUpdated(e.geometries[0])}_updateVertexAttributesDraped(e,t){var n;const r=(n=e.getMutableAttribute(T.POSITION))==null?void 0:n.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=N;e.invalidateBoundingInfo()}*_lineVertices(e){this.extensionType===m.FADED?(yield E(e,-this.fadedExtensions.start,O),yield E(e,0,O),yield E(e,1,O),yield E(e,1+this.fadedExtensions.end,O)):(yield E(e,0,O),yield E(e,1,O))}}const y=he(),O=h(),Ie=h(),K=ce();var m;(function(p){p[p.LINE=0]="LINE",p[p.RAY=1]="RAY",p[p.GROUND_RAY=2]="GROUND_RAY",p[p.FADED=3]="FADED"})(m||(m={}));const ee=1/3,te={start:ee,end:ee};class Ve extends le{constructor(e){super(e),this._location=h(),this._direction=se(1,0,0),this._width=1,this._offset=1,this._length=18,this._color=H(1,0,1,1),this._renderOccluded=f.OccludeAndTransparent,this.applyProps(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyObject3DResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}get location(){return this._location}set location(e){j(this._location,e)||(S(this._location,e),this._updateGeometry())}get direction(){return this._direction}set direction(e){j(this._direction,e)||(S(this._direction,e),this._updateGeometry())}setDirectionFromPoints(e,t){De(this._direction,ne(this._direction,t,e)),this._updateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get offset(){return this._offset}set offset(e){e!==this._offset&&(this._offset=e,this._updateGeometry())}get length(){return this._length}set length(e){e!==this._length&&(this._length=e,this._updateGeometry())}get color(){return this._color}set color(e){$(e,this._color)||(L(this._color,e),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}_createObject3DResources(e){const t=new C(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyObject3DResources(e){e.geometries.length=0,e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const[i,n]=this._createGeometries(e);t.addGeometry(i),t.addGeometry(n),r.push(i),r.push(n),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new C(this.materialParameters),t=Oe(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:e,geometries:this._createDrapedGeometry(e),pixelRatioHandle:t}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[],e.material.dispose()}_recreateDrapedGeometry(e){e.geometries=this._createDrapedGeometry(e.material)}_createDrapedGeometry(e){const t=this._createGeometries(e);this._updateVerticesDraped(t);const r=t.map(i=>new ae(i,{boundingInfo:i.boundingInfo}));for(const i of r)i.computeBoundingSphere(i.transformation,i.boundingSphere);return r}_createGeometries(e){return[W(e,[h(),h()]),W(e,[h(),h()])]}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=G(this.object3dResources.resources))==null||t.material.setParameters(e),(r=G(this.drapedResources.resources))==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,renderOccluded:this._renderOccluded}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=G(this.object3dResources.object);e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this.view.state.camera;t.projectToScreen(this.location,P),be(g,this.location,this.direction),t.projectToScreen(g,w),Re(w,Ee(w,w,P)),this._updateVertexAttributesObject3D(t,e,0,P,w,1),this._updateVertexAttributesObject3D(t,e,1,P,w,-1)}_updateVertexAttributesObject3D(e,t,r,i,n,s){var u;const o=t.geometries[r],a=(u=o.getMutableAttribute(T.POSITION))==null?void 0:u.data;if(!a)return;const{start:c,end:_}=this._computeStartEnd(n,i,s,this.offset,this.width,this.length);e.unprojectFromScreen(q(c),g),a[0]=g[0],a[1]=g[1],a[2]=g[2],e.unprojectFromScreen(q(_),g),a[3]=g[0],a[4]=g[1],a[5]=g[2],t.geometryVertexAttrsUpdated(o)}_updateVerticesDraped(e){const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{location:i,width:n,length:s,offset:o}=this,a=Me;a.spatialReference=oe(t.renderer.spatialReference),a.x=i[0],a.y=i[1];const c=t.overlayPixelSizeInMapUnits(a)*r,_=n*c,u=s*c,l=o*c;this._updateVertexAttributesDraped(e[0],_,u,l,-1),this._updateVertexAttributesDraped(e[1],_,u,l,1)}_updateVertexAttributesDraped(e,t,r,i,n){var u;const s=(u=e.getMutableAttribute(T.POSITION))==null?void 0:u.data;if(!s)return;const{location:o,direction:a}=this,{start:c,end:_}=this._computeStartEnd(a,o,n,i,t,r);s[0]=c[0],s[1]=c[1],s[2]=N,s[3]=_[0],s[4]=_[1],s[5]=N,e.invalidateBoundingInfo()}_computeStartEnd(e,t,r,i,n,s){const o=V(re,we(re,e[1]*r,e[0]*-r),i+n/2),a=x(v,x(v,x(v,t,V(v,e,s/2)),o),o);return{start:a,end:x(ie,a,V(ie,e,-s))}}}const g=h(),re=U(),v=U(),ie=U(),P=de(),w=de(),Me=Ge(0,0,void 0,null);class Be extends je{sortUniqueHints(e){return e.sort((t,r)=>(r instanceof X?r.length:0)-(t instanceof X?t.length:0))}visualizeIntersectionPoint(e,t){const{spatialReference:r,view:i}=t;return A(new Q({view:i,primitive:"circle",geometry:J(e.intersectionPoint,r),elevationInfo:e.isDraped?Z:k,size:20,outlineSize:2,color:[0,0,0,0],outlineColor:D.toUnitRGBA(d.orange),pixelSnappingEnabled:!1}))}visualizePoint(e,t){const{view:r,spatialReference:i}=t,n=this._alignPoint(e.point,e.domain,t);return A(new Q({view:r,primitive:"circle",geometry:J(n,i),elevationInfo:this._hintElevationInfo(e,t),size:20,outlineSize:2,color:[0,0,0,0],outlineColor:D.toUnitRGBA(d.orange),pixelSnappingEnabled:!1}))}visualizeLine(e,t){const{view:r,spatialReference:i}=t,n=this._alignPoint(e.lineStart,e.domain,t),s=this._alignPoint(e.lineEnd,e.domain,t);return A(this._createLineSegmentHint(e.type,n,s,i,this._hintElevationInfo(e,t),r,e.isDraped,e.fadeLeft,e.fadeRight))}visualizeParallelSign(e,t){const{view:r,spatialReference:i}=t,{isDraped:n}=e,s=this._hintElevationInfo(e,t),o=this._alignPoint(e.lineStart,e.domain,t),a=this._alignPoint(e.lineEnd,e.domain,t),c=b(o,i,s,r,n),_=b(a,i,s,r,n),u=Ae(_,c,_,.5),l=new Ve({view:r,attached:!1,offset:d.parallelLineHintOffset,length:d.parallelLineHintLength,width:d.parallelLineHintWidth,color:D.toUnitRGBA(d.orange),location:u,renderOccluded:n?f.OccludeAndTransparent:f.Opaque,isDraped:n,renderGroup:M.SnappingHint});return l.setDirectionFromPoints(c,u),l.attached=!0,A(l)}visualizeRightAngleQuad(e,t){const{view:r,spatialReference:i}=t,n=this._hintElevationInfo(e,t),{isDraped:s}=e,o=this._alignPoint(e.previousVertex,e.domain,t),a=this._alignPoint(e.centerVertex,e.domain,t),c=this._alignPoint(e.nextVertex,e.domain,t),_=b(o,i,n,r,s),u=b(a,i,n,r,s),l=b(c,i,n,r,s);return A(new xe({view:r,attached:!0,color:s?D.toUnitRGBA(d.orangeTransparent):D.toUnitRGBA(d.orange),renderOccluded:s?f.OccludeAndTransparent:f.Transparent,outlineRenderOccluded:s?f.OccludeAndTransparent:f.Opaque,outlineColor:D.toUnitRGBA(d.orange),outlineSize:d.rightAngleHintOutlineSize,size:d.rightAngleHintSize,isDraped:s,geometry:{previous:_,center:u,next:l},renderGroup:M.SnappingHint}))}_createLineSegmentHint(e,t,r,i,n,s,o=!1,a=!0,c=!0){const _=b(t,i,n,s,o),u=b(r,i,n,s,o),l=new Te({view:s,extensionType:m.FADED,start:_,end:u,isDraped:o,color:D.toUnitRGBA(d.orange),renderOccluded:o?f.OccludeAndTransparent:f.Opaque,renderGroup:M.SnappingHint});switch(e){case F.TARGET:l.width=d.lineHintWidthTarget,l.fadedExtensions={start:0,end:d.lineHintFadedExtensions};break;case F.REFERENCE_EXTENSION:l.width=d.lineHintWidthReference,l.fadedExtensions={start:0,end:0};break;case F.REFERENCE:l.width=d.lineHintWidthReference,l.fadedExtensions={start:a?d.lineHintFadedExtensions:0,end:c?d.lineHintFadedExtensions:0}}return l.attached=!0,l}_alignPoint(e,t,r){const i=this._getSelfSnappingZ(t,r);return z(i)?e:Pe(e[0],e[1],i)}_hintElevationInfo(e,t){return R(this._getSelfSnappingZ(e.domain,t))?oe(t.selfSnappingZ).elevationInfo:e.isDraped?Z:k}_getSelfSnappingZ(e,{selfSnappingZ:t}){return e===$e.SELF&&R(t)?t.value:null}}function b(p,e,t,r,i,n=h()){if(i){const s=r.basemapTerrain.overlayManager.renderer.spatialReference;Se(p,e,n,s)}else Ce(p,e,t,r,n);return n}export{m as W,Te as v,Be as x};