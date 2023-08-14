import{hz as xe,hA as Me,h$ as Ie,aD as B,ji as Ne,gI as V,cq as T,jj as R,o as ke,fM as Re,fO as We,jk as Be,jg as Ue,cv as re,r as x,ir as Ve,fF as U,ct as qe,O as Ge,hX as K,t as y,jl as oe,jm as ce,i0 as le,hY as he,h6 as A,jn as He,hK as de,j7 as $,g$ as te,jo as ue,fE as _e,jd as Qe,fA as Je,jp as Ke,fw as Xe,jq as Ye,ec as Ze,cb as et,h_ as tt,jr as it,cg as N,js as X,jt as b,q as Y,ju as st,dy as ie,fs as Fe,jv as nt,jw as ge,c7 as at,jx as rt,jy as ot,im as fe,jz as ct,h2 as lt,jA as ht,iw as pe,iA as m,iB as dt,c_ as v,jB as ut,jC as _t,jD as gt,jE as ft,iR as ve,ho as l,jF as pt,jG as vt,ix as mt,jH as bt,jI as I,i8 as St,e as w,iO as O,jJ as F,iE as yt,jK as jt,iF as wt,iG as Ot,iH as $t,jL as Tt,jM as Lt,jN as Et,d2 as Z,jO as At,jP as Rt,iJ as Ft,jQ as Pt,jR as zt,jS as me,c$ as z,jT as Dt,jU as Ct,i9 as P,hx as se,iK as xt,jV as Mt,jW as It,jX as Nt,jY as kt,jZ as Wt,j_ as Bt,jc as Pe,hC as q,hH as Ut,j$ as Vt,hJ as be,k0 as qt,ft as ze,h3 as Gt,k1 as Ht,k2 as Qt,ff as Jt,jh as Kt,h1 as Se,k3 as Xt}from"./mapviewstore-8a6f290e.js";import{c as Yt}from"./ImageMaterial-86134e3a.js";import{l as Zt}from"./index-93a23f67.js";class De{constructor(e){var i;this.metadata=void 0,this._camera=new Ne,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=new Array,this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=V(),this._worldFrame=null,this._renderLocation=T(),this._renderLocationDirty=!0,this._location=new B({x:0,y:0,z:0}),this._elevationAlignedLocation=new B,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this.grabCursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=R.None,this._focused=!1,this.events=new ke.EventEmitter,this._screenLocation={screenPointArray:Re(),renderScreenPointArray:We(),pixelSize:0},this._screenLocationDirty=!0,this._engineResourcesAddedToStage=!1,this._attached=!1,this._location.spatialReference=e.view.spatialReference;for(const n in e)this[n]=e[n];const t=(i=this.view.state)==null?void 0:i.camera;t&&this._camera.copyFrom(t)}destroy(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this._camera=null}get _stage(){var e;return(e=this.view)==null?void 0:e._stage}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),{remove:Be(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){ye(e)&&(this._screenLocationDirty=!0),Ue(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=V()),ei(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){re(e,this._location),this._notifyLocationChanged()}_notifyLocationChanged(){this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){re(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){const e=x(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y,this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=Ve(this.location.spatialReference),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this._camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(ye(this._modelTransform)){const t=this._calculateModelTransformOffset(si);e=U(t,t,this.renderLocation)}else e=this.renderLocation;this._camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this._camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}get attached(){return this._attached}intersectionDistance(e,t){if(!this.available)return null;const i=qe(e,ti),n=this._getCollisionRadius(t),r=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(Xe(this.screenLocation.screenPointArray,i)<n*n)return this.screenLocation.renderScreenPointArray[2]+r;break;case"line":{const a=this.collisionType.paths,o=this._getWorldToScreenObjectScale(),c=this._calculateObjectTransform(o,k),d=n*this.screenLocation.pixelSize,u=K(this._camera,i,ee);if(y(u))return null;for(const p of a){if(p.length===0)continue;const h=A(M,p[0],c);for(let _=1;_<p.length;_++){const g=A(Oe,p[_],c),f=Ke(de(h,g,je),u);if(f!=null&&f<d*d){const j=U($.get(),h,g);te(j,j,.5);const L=ue($.get());return this._camera.projectToRenderScreen(j,L),L[2]+r}_e(h,g)}}break}case"disc":{const a=this.collisionType.direction,o=this.collisionType.offset??Qe,c=this._getWorldToScreenObjectScale(),d=this._calculateObjectTransform(c,k),u=n*this.screenLocation.pixelSize,p=K(this._camera,i,ee);if(y(p))return null;const h=oe(we,d),_=ce(Te,a,h),g=A(Le,o,d);le(g,_,W);const f=$e;if(he(W,p,f)&&Je(f,g)<u*u)return this.screenLocation.renderScreenPointArray[2]+r;break}case"ribbon":{const{paths:a,direction:o}=this.collisionType,c=this._getWorldToScreenObjectScale(),d=this._calculateObjectTransform(c,k),u=n*this._camera.computeScreenPixelSizeAt(this.renderLocation),p=K(this._camera,i,ee);if(y(p))return null;const h=oe(we,d),_=ce(Te,o,h),g=this._calculateModelTransformPosition(Le);le(g,_,W);const f=$e;if(!he(W,p,f))break;for(const j of a){if(j.length===0)continue;const L=A(M,j[0],d);for(let H=1;H<j.length;H++){const Q=A(Oe,j[H],d),ne=He(de(L,Q,je),f);if(ne!=null&&ne<u*u){const J=U($.get(),L,Q);te(J,J,.5);const ae=ue($.get());return this._camera.projectToRenderScreen(J,ae),ae[2]+r}_e(L,Q)}}break}default:Ge(this.collisionType)}return null}attach(e={manipulator3D:{}}){const t=this._stage;if(!t)return;const i=e.manipulator3D;if(y(i.engineLayerId)){const n=new Ye({pickable:!1,updatePolicy:Ze.SYNC});t.add(n),i.engineLayerId=n.id,this._engineLayer=n}else t!=null&&t.getObject&&(this._engineLayer=t.getObject(i.engineLayerId));i.engineLayerReferences=(i.engineLayerReferences||0)+1,this._materialIdReferences=i.materialIdReferences,y(this._materialIdReferences)&&(this._materialIdReferences=new Map,i.materialIdReferences=this._materialIdReferences),this._camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),et(this._location.spatialReference,this.view.spatialReference)||(this.location=new B({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;i&&(t.engineLayerId=null),this._removeResourcesFromStage(i),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this._camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){tt(this.location,Ee,e.spatialReference)&&it(e.extent,Ee)&&this._notifyLocationChanged()}_evaluateElevationAlignment(){if(y(this.elevationInfo))return;let e=null,t=0;const i=N(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":e=N(X(this.view.elevationProvider,this.location,"ground"),0);break;case"relative-to-ground":t=N(X(this.view.elevationProvider,this.location,"ground"),0)+i;break;case"relative-to-scene":t=N(X(this.view.elevationProvider,this.location,"scene"),0)+i;break;case"absolute-height":t=i}return t!==this._elevation.offset||e!==this._elevation.override?(this._elevation.offset=t,void(this._elevation.override=e)):void 0}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=k;if(this.autoScaleRenderObjects===!0){const a=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(a,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),n=(this.focused?b.Focused:b.Unfocused)|(this.selected?b.Selected:b.Unselected),r=this._noDisplayCount>0;for(const{stateMask:a,objects:o}of i){if(r){for(const h of o)h.visible=!1;continue}const c=(a&b.All)!==b.None,d=(a&R.All)!==R.None,u=!c||(n&a)==(a&b.All),p=!d||(this.state&a)==(a&R.All);if(u&&p)for(const h of o)h.visible=!0,h.transformation=t;else for(const h of o)h.visible=!1}}_ensureEngineResources(){if(y(this._engineResources)){const e=Y(this._engineLayer),t=[],i=new Set;this.renderObjects.forEach(({geometry:{material:a}})=>{i.has(a)||(t.push(a),i.add(a))});const n=new Map;this._renderObjects.forEach(a=>{const o=new st({castShadow:!1,geometries:[a.geometry]}),c=n.get(a.stateMask)||[];c.push(o),n.set(a.stateMask,c)});const r=[];n.forEach((a,o)=>r.push({stateMask:o,objects:a})),this._engineResources={objectsByState:r,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){const e=this._stage;if(this._engineResourcesAddedToStage||y(this._engineResources)||!e)return;const{objectsByState:t,layer:i,materials:n}=this._engineResources;n.forEach(r=>{const a=Y(this._materialIdReferences),o=a.get(r.id)||0;o===0&&e.add(r),a.set(r.id,o+1)}),t.forEach(({objects:r})=>{i.addMany(r),e.addMany(r)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(e=!1){const t=this._stage;if(!this._engineResourcesAddedToStage||y(this._engineResources)||!t)return;const{objectsByState:i,layer:n,materials:r}=this._engineResources;i.forEach(({objects:a})=>{n.removeMany(a),t.removeMany(a)}),r.forEach(a=>{const o=Y(this._materialIdReferences),c=o.get(a.id);c===1?(t.remove(a),o.delete(a.id)):o.set(a.id,c-1)}),e&&t.remove(n),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,ii);return ie(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return Fe(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return nt(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&ge(t,t,this._worldFrame),ge(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,x(this._applyObjectTransform)&&this._applyObjectTransform(t),t}get test(){let e=!1;if(x(this._engineResources))for(const t in this._engineResources.objectsByState){const i=this._engineResources.objectsByState[t];for(const n of i.objects)if(n.visible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function ye(s){return s[12]!==0||s[13]!==0||s[14]!==0}function ei(s,e,t){switch(s.viewingMode){case"local":return ct(t),!0;case"global":{const i=at(s.renderCoordsHelper.spatialReference);return rt(e,0,M,0,i.radius),ot(fe(M[0]),fe(M[1]),t),!0}}}const ti=Re(),je=xe(),ee=Me(),we=lt(),ii=V(),k=V(),W=Ie(),M=T(),Oe=T(),$e=T(),Te=T(),Le=T(),si=T(),Ee=new B({x:0,y:0,z:0,spatialReference:null});class C{constructor(e,t=b.None){this.geometry=e,this.stateMask=t}}function ni(s,e){if(!e.screenSizeEnabled)return;const t=s.vertex;ht(t,e),t.uniforms.add(new pe("perScreenPixelRatio",(i,n)=>n.camera.perScreenPixelRatio)),t.uniforms.add(new pe("screenSizeScale",i=>i.screenSizeScale)),t.code.add(m`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function ai(s){const e=new dt,t=s.hasMultipassTerrain&&(s.output===v.Color||s.output===v.Alpha);e.include(ut,s),e.include(ni,s),e.include(_t,s);const{vertex:i,fragment:n}=e;return n.include(gt),ft(i,s),n.uniforms.add(new ve("uColor",r=>r.color)),e.attributes.add(l.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),s.screenSizeEnabled&&e.attributes.add(l.OFFSET,"vec3"),s.shadingEnabled&&(pt(i),e.attributes.add(l.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(m`
    void main(void) {
      vWorldPosition = ${s.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),s.shadingEnabled&&i.code.add(m`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(m`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(vt,s),n.code.add(m`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),s.shadingEnabled?(n.uniforms.add(new mt("shadingDirection",r=>r.shadingDirection)),n.uniforms.add(new ve("shadedColor",r=>ri(r.shadingTint,r.color))),n.code.add(m`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):n.code.add(m`vec4 finalColor = uColor;`),n.code.add(m`
      ${s.output===v.ObjectAndLayerIdColor?m`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${m.float(bt)}) {
        discard;
      }
      ${s.output===v.Alpha?m`gl_FragColor = vec4(finalColor.a);`:""}

      ${s.output===v.Color?m`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${s.transparencyPassType===I.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),e}function ri(s,e){const t=1-s[3],i=s[3]+e[3]*t;return i===0?(E[3]=i,E):(E[0]=(s[0]*s[3]+e[0]*e[3]*t)/i,E[1]=(s[1]*s[3]+e[1]*e[3]*t)/i,E[2]=(s[2]*s[3]+e[2]*e[3]*t)/i,E[3]=e[3],E)}const E=St(),oi=Object.freeze(Object.defineProperty({__proto__:null,build:ai},Symbol.toStringTag,{value:"Module"}));class G extends wt{initializeProgram(e){return new Ot(e.rctx,G.shader.get().build(this.configuration),Ce)}_setPipelineState(e){const t=this.configuration,i=e===I.NONE,n=e===I.FrontFace;return $t({blending:t.output!==v.Color&&t.output!==v.Alpha||!t.transparent?null:i?Tt:Lt(e),culling:Et(t.cullFace),depthTest:{func:n?Z.LESS:t.shadingEnabled?Z.LEQUAL:Z.LESS},depthWrite:i?t.writeDepth?At:null:Rt(e),colorWrite:Ft,polygonOffset:i||n?null:Pt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}G.shader=new yt(oi,()=>Zt(()=>import("./ShadedColorMaterial.glsl-241d82bb.js"),["assets/ShadedColorMaterial.glsl-241d82bb.js","assets/mapviewstore-8a6f290e.js","assets/index-93a23f67.js","assets/index-2d69a2d2.css","assets/ImageMaterial-86134e3a.js"]));let S=class extends jt{constructor(){super(...arguments),this.output=v.Color,this.cullFace=F.None,this.transparencyPassType=I.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}};w([O({count:v.COUNT})],S.prototype,"output",void 0),w([O({count:F.COUNT})],S.prototype,"cullFace",void 0),w([O({count:I.COUNT})],S.prototype,"transparencyPassType",void 0),w([O()],S.prototype,"hasSlicePlane",void 0),w([O()],S.prototype,"transparent",void 0),w([O()],S.prototype,"writeDepth",void 0),w([O()],S.prototype,"screenSizeEnabled",void 0),w([O()],S.prototype,"shadingEnabled",void 0),w([O()],S.prototype,"hasMultipassTerrain",void 0),w([O()],S.prototype,"cullAboveGround",void 0);const Ce=new Map([[l.POSITION,0],[l.NORMAL,1],[l.OFFSET,2]]);class ci extends zt{constructor(e){super(e,new hi),this.supportsEdges=!0,this._configuration=new S,this._vertexAttributeLocations=Ce}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.screenSizeEnabled=this.parameters.screenSizeEnabled,this._configuration.shadingEnabled=this.parameters.shadingEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,i,n,r,a){if(this.parameters.screenSizeEnabled){const o=e.vertexAttributes.get(l.OFFSET);me(e,i,n,r,{applyToVertex:(d,u,p,h)=>{const _=ie(Ae,o.data[3*h+0],o.data[3*h+1],o.data[3*h+2]),g=ie(ui,d,u,p);return te(_,_,this.parameters.screenSizeScale*i.camera.computeRenderPixelSizeAt(_)),U(g,g,_),[g[0],g[1],g[2]]},applyToAabb:d=>{const u=Wt(d,Ae);return Bt(d,this.parameters.screenSizeScale*i.camera.computeRenderPixelSizeAt(u))}},a)}else me(e,i,n,r,void 0,a)}requiresSlot(e,t){if(t===v.Highlight)return e===z.OPAQUE_MATERIAL;if(t===v.Color||t===v.Alpha||t===v.ObjectAndLayerIdColor){let i=z.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?z.TRANSPARENT_MATERIAL:z.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i||e===z.DRAPED_MATERIAL}return!1}createGLMaterial(e){return new li(e)}createBufferWriter(){return new di(this.parameters.screenSizeEnabled)}}class li extends Dt{beginSlot(e){return this.ensureTechnique(G,e)}}let hi=class extends Ct{constructor(){super(...arguments),this.color=P(1,1,1,1),this.shadingTint=P(0,0,0,.25),this.shadingDirection=se(T(),[.5,-.5,-.5]),this.screenSizeScale=14,this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=F.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}};class di{constructor(e){this.screenSizeEnabled=e;const t=xt().vec3f(l.POSITION).vec3f(l.NORMAL);this.screenSizeEnabled&&t.vec3f(l.OFFSET),this.vertexBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(l.POSITION).length}write(e,t,i,n,r){if(Mt(i,this.vertexBufferLayout,e,t,n,r),this.screenSizeEnabled){if(!i.vertexAttributes.has(l.OFFSET))throw new Error(`${l.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const a=i.vertexAttributes.get(l.OFFSET),o=i.indices.get(l.OFFSET);It(a.size===3);const c=n.getField(l.OFFSET,Nt);if(!c)throw new Error("unable to acquire view for "+l.OFFSET);kt(o,a.data,t,c,r)}}}}const Ae=T(),ui=T();function _i(s,e=q.OccludeAndTransparent,t=!0){const i=P(s[0],s[1],s[2],s.length>3?s[3]:1),n=s[3]<1;return t?new ci({color:i,transparent:n,writeDepth:!0,cullFace:F.Back,renderOccluded:e}):new Pe({color:i,transparent:n,writeDepth:!0,cullFace:F.Back,renderOccluded:e})}function wi(s,e=q.OccludeAndTransparent){const t=P(s[0],s[1],s[2],s.length===4?s[3]:1);return new Pe({color:t,transparent:!0,writeDepth:!0,cullFace:F.Front,renderOccluded:e})}const D=Object.freeze({calloutLength:40,calloutWidth:1,discRadius:27,focusMultiplier:1.1,calloutColor:Jt(1,.5,0)});function Oi(s,e){const t=new De({view:s,autoScaleRenderObjects:!1,collisionPriority:1,metadata:e.metadata});return gi(t,e),t}function gi(s,e){var g;const t=e.material??new Yt({transparent:!0,writeDepth:!1,textureId:(g=e.texture)==null?void 0:g.id,renderOccluded:q.Opaque}),i=e.focusMultiplier??D.focusMultiplier,n=e.calloutLength??D.calloutLength,r=D.discRadius*(e.discScale??1),a=r*i,o=(f,j)=>{const L=[0,1,2,2,3,0];return new Kt(j,[[l.POSITION,new Se([n-f,-f,0,n+f,-f,0,n+f,f,0,n-f,f,0],3,!0)],[l.UV0,new Se([0,0,1,0,1,1,0,1],2,!0)]],[[l.POSITION,L],[l.UV0,L]])},c=D.calloutColor,d=e.calloutWidth??D.calloutWidth,u=new(d>1?Ut:Vt)({width:d,color:P(c[0],c[1],c[2],e.calloutOpacity??1),renderOccluded:q.OccludeAndTransparent}),p=be(u,[[0,0,0],[n-r,0,0]]),h=be(u,[[0,0,0],[n-a,0,0]]),_=e.customStateMask??R.None;s.collisionType={type:"disc",direction:[0,0,1],offset:[n,0,0]},s.focusMultiplier=i,s.metadata=e.metadata,s.radius=r,s.renderObjects=[new C(o(r,t),b.Unfocused|_),new C(p,b.Unfocused|_),new C(o(a,t),b.Focused|_),new C(h,b.Focused|_)]}function $i(s,e,t=1,i=R.None){const n=_i(P(e[0],e[1],e[2],t??1)),r=[new C(Xt(n,1,32,32),i)];return new De({view:s,renderObjects:r})}const Ti=Object.freeze({autoScaleRenderObjects:!1,worldSized:!0});function Li(s,e,t,i){const n=Fe($.get(),s,t),r=fi(n,ze($.get(),i,n),t,qt.get());Gt(r,r);const a=A($.get(),e,r);return Math.atan2(a[1],a[0])}function fi(s,e,t,i){const n=se($.get(),s),r=se($.get(),e),a=ze($.get(),n,r);return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=0,i[4]=r[0],i[5]=r[1],i[6]=r[2],i[7]=0,i[8]=a[0],i[9]=a[1],i[10]=a[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function pi(s,e){const t=s.getViewForGraphic(e);return x(t)&&"computeAttachmentOrigin"in t?t.computeAttachmentOrigin(e,s.spatialReference):null}function Ei(s,e,t){const i=pi(s,t);x(i)?e.elevationAlignedLocation=i:vi(e,t.geometry)}function vi(s,e){if(y(e))return;const t=e.type==="mesh"?e.anchor:Ht(e);y(t)||(s.location=Qt(t))}export{Li as C,gi as D,Ei as G,wi as L,$i as N,_i as R,Oi as U,fi as V,C as e,ai as f,De as i,ci as v,Ti as x,pi as z};