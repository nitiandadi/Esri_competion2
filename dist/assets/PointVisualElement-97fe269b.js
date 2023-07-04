import{iV as Ce,iW as Re,hQ as f,h_ as P,iX as H,iY as S,hR as a,r as o,hS as oe,iZ as U,i_ as Me,gO as he,g8 as p,gQ as ce,fq as Ae,i4 as de,i6 as ue,i7 as pe,i8 as _e,i$ as ge,d3 as T,ie as fe,im as $e,bY as c,j0 as Te,d9 as $,d4 as me,t as l,j1 as Oe,j2 as ze,cW as Ie,d6 as qe,gt as Pe,e as y,i2 as E,j3 as je,hp as We,hN as W,j4 as Ne,hX as M,gL as O,j5 as B,cR as be,fT as b,fD as v,j6 as ve,gK as Ge,h2 as He,fM as xe,hx as Ue,i1 as Be,j7 as Fe,j8 as Xe,j9 as ke,gq as F,go as j,gn as Qe,cM as X,ja as Ye,cD as k,jb as z,jc as Ze,jd as Ke,d2 as Q,je as Y,gE as Je,jf as et,gG as tt,gH as it,gI as nt,jg as st,gR as Z,il as K,gw as J,gx as ee,jh as rt,ji as at,dA as lt,jj as ot,fS as te,jk as ht,jl as ct,jm as dt,hz as ie,jn as ut,jo as pt}from"./MapView-d4248bee.js";import{t as _t}from"./VisualElement-62e5dd07.js";import{k as we}from"./index-9ba3f23e.js";import{u as gt}from"./VisualElementResources-d63a6ee6.js";function ye(s,e){s.extensions.add("GL_OES_standard_derivatives");const i=s.fragment;i.include(Ce),s.include(Re),i.uniforms.add([new f("globalAlpha",t=>t.globalAlpha),new P("glowColor",t=>t.glowColor),new f("glowWidth",(t,n)=>t.glowWidth*n.camera.pixelRatio),new f("glowFalloff",t=>t.glowFalloff),new P("innerColor",t=>t.innerColor),new f("innerWidth",(t,n)=>t.innerWidth*n.camera.pixelRatio),new H("depthMap",(t,n)=>n.linearDepthTexture),new S("nearFar",(t,n)=>n.camera.nearFar),new H("frameColor",(t,n)=>n.mainColorTexture)]),i.code.add(a`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(a`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(a`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(a`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),e.contrastControlEnabled?(i.uniforms.add(new f("globalAlphaContrastBoost",t=>o(t.globalAlphaContrastBoost)?t.globalAlphaContrastBoost:1)),i.code.add(a`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(a`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}function ft(s){const e=new oe;e.include(ye,s);const{vertex:i,fragment:t}=e;return i.uniforms.add([new U("modelView",(n,r)=>Me(Pt,r.camera.viewMatrix,n.origin)),new U("proj",(n,r)=>r.camera.projectionMatrix),new f("glowWidth",(n,r)=>n.glowWidth*r.camera.pixelRatio),new S("pixelToNDC",(n,r)=>he(mt,2/r.camera.fullViewport[2],2/r.camera.fullViewport[3]))]),e.attributes.add(p.START,"vec3"),e.attributes.add(p.END,"vec3"),e.attributes.add(p.UP,"vec3"),e.attributes.add(p.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewPlane","vec4"),i.code.add(a`void main() {
vec3 pos = mix(start, end, extrude.x);
vec4 viewPos = modelView * vec4(pos, 1);
vec4 projPos = proj * viewPos;
vec2 ndcPos = projPos.xy / projPos.w;
vec3 viewUp = (modelView * vec4(extrude.y * up, 0)).xyz;
vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
vec2 projExtrudeDir = normalize(projPosUp.xy / projPosUp.w - ndcPos);
vec2 lxy = abs(sign(projExtrudeDir) - ndcPos);
ndcPos += length(lxy) * projExtrudeDir;
vec3 worldPlaneNormal = normalize(cross(up, normalize(end - start)));
vec3 viewPlaneNormal = (modelView * vec4(worldPlaneNormal, 0)).xyz;
vViewStart = (modelView * vec4(start, 1)).xyz;
vViewEnd = (modelView * vec4(end, 1)).xyz;
vViewPlane = vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));
float xPaddingPixels = sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
ndcPos.x += xPaddingPixels * pixelToNDC.x;
uv = ndcPos * 0.5 + 0.5;
gl_Position = vec4(ndcPos, 0, 1);
}`),t.uniforms.add(new f("perScreenPixelRatio",(n,r)=>r.camera.perScreenPixelRatio)),t.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {
vec3 origin = mix(start, end, 0.5);
vec3 basis = end - origin;
vec3 posAtOrigin = pos - origin;
float x = dot(normalize(basis), posAtOrigin);
float y = dot(plane.xyz, posAtOrigin);
float dx = max(abs(x) - length(basis), 0.0);
float dy = y;
float dist = length(vec2(dx, dy));
float width = fwidth(y);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}
void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
float distance = planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);
vec4 color = laserlineProfile(distance);
float alpha = 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));
gl_FragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);
}`),e}const mt=ce(),Pt=Ae(),bt=Object.freeze(Object.defineProperty({__proto__:null,build:ft},Symbol.toStringTag,{value:"Module"}));let Ee=class Ve extends ue{initializeProgram(e){return new pe(e.rctx,Ve.shader.get().build(this.configuration),De)}initializePipeline(){return _e({blending:ge(T.ONE,T.ONE_MINUS_SRC_ALPHA),colorWrite:fe})}};Ee.shader=new de(bt,()=>we(()=>import("./LaserlinePath.glsl-5cf134bf.js"),["assets/LaserlinePath.glsl-5cf134bf.js","assets/MapView-d4248bee.js","assets/index-9ba3f23e.js","assets/index-fecf00a2.css","assets/VisualElement-62e5dd07.js","assets/VisualElementResources-d63a6ee6.js"]));const De=new Map([[p.START,0],[p.END,1],[p.UP,2],[p.EXTRUDE,3]]);let ne=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=c(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const i=Te(3*e.length);let t=0;for(const n of e)i[t++]=n[0],i[t++]=n[1],i[t++]=n[2];this.buffers=[i]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const i=this._buffers[0],t=3*Math.floor(i.length/3/2);$(this._origin,i[t+0],i[t+1],i[t+2])}else $(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const i=this._ensureVAO(e);o(i)&&(e.bindVAO(i),e.drawArrays(me.TRIANGLES,0,this._count))}dispose(){o(this._vao)&&this._vao.dispose()}_ensureVAO(e){return l(this._buffers)?null:(l(this._vao)&&(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,i){const t=this._createDataBuffer(i);return this._dirty=!1,new Oe(e,De,{data:ze(re)},{data:Ie.createVertex(e,qe.STATIC_DRAW,t)})}_ensureVertexData(e,i){var n;if(!this._dirty)return;const t=this._createDataBuffer(i);(n=e.vertexBuffers.data)==null||n.setData(t),this._dirty=!1}_numberOfRenderVertices(e){return 3*(2*(e.length/3-1))}_createDataBuffer(e){const i=e.reduce((_,d)=>_+this._numberOfRenderVertices(d),0);this._count=i;const t=re.createBuffer(i),n=this._origin;let r=0,h=0;for(const _ of e){for(let d=0;d<_.length;d+=3){const R=$(se,_[d+0],_[d+1],_[d+2]);d===0?h=this._renderCoordsHelper.getAltitude(R):this._renderCoordsHelper.setAltitude(R,h);const w=this._renderCoordsHelper.worldUpAtPosition(R,vt),u=r+2*d,G=Pe(se,R,n);if(d<_.length-3){t.up.setVec(u,w),t.up.setVec(u+3,w),t.up.setVec(u+5,w);for(let x=0;x<6;x++)t.start.setVec(u+x,G);t.extrude.setValues(u+0,0,-1),t.extrude.setValues(u+1,1,-1),t.extrude.setValues(u+2,1,1),t.extrude.setValues(u+3,0,-1),t.extrude.setValues(u+4,1,1),t.extrude.setValues(u+5,0,1)}if(d>0){t.up.setVec(u-2,w),t.up.setVec(u-4,w),t.up.setVec(u-5,w);for(let x=-6;x<0;x++)t.end.setVec(u+x,G)}}r+=this._numberOfRenderVertices(_)}return t.buffer}};const vt=c(),se=c(),re=$e().vec3f(p.START).vec3f(p.END).vec3f(p.UP).vec2f(p.EXTRUDE);class N extends je{constructor(){super(...arguments),this.contrastControlEnabled=!1}}y([E()],N.prototype,"contrastControlEnabled",void 0);const Se=W(6);function xt(s){const e=new oe;e.extensions.add("GL_OES_standard_derivatives"),e.include(Ne),e.include(ye,s);const i=e.fragment;if(s.lineVerticalPlaneEnabled||s.heightManifoldEnabled)if(i.uniforms.add(new f("maxPixelDistance",(t,n)=>s.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),i.code.add(a`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),s.spherical){const t=(r,h,_)=>b(r,h.heightManifoldTarget,_.camera.viewMatrix),n=(r,h)=>b(r,[0,0,0],h.camera.viewMatrix);i.uniforms.add([new M("heightManifoldOrigin",(r,h)=>(t(m,r,h),n(V,h),Pe(V,V,m),O(g,V),g[3]=B(V),g)),new P("globalOrigin",(r,h)=>n(m,h)),new f("cosSphericalAngleThreshold",(r,h)=>1-Math.max(2,be(h.camera.eye,r.heightManifoldTarget)*h.camera.perRenderPixelRatio)/B(r.heightManifoldTarget))]),i.code.add(a`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(a`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(s.pointDistanceEnabled&&(i.uniforms.add(new f("maxPixelDistance",(t,n)=>2*n.camera.computeScreenPixelSizeAt(t.pointDistanceTarget))),i.code.add(a`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),s.intersectsLineEnabled&&(i.uniforms.add(new f("perScreenPixelRatio",(t,n)=>n.camera.perScreenPixelRatio)),i.code.add(a`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(s.lineVerticalPlaneEnabled||s.intersectsLineEnabled)&&i.code.add(a`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.code.add(a`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),s.heightManifoldEnabled){i.uniforms.add([new S("angleCutoff",n=>A(n)),new M("heightPlane",(n,r)=>Le(n.heightManifoldTarget,n.renderCoordsHelper.worldUpAtPosition(n.heightManifoldTarget,m),r.camera.viewMatrix))]);const t=s.spherical?a`normalize(globalOrigin - pos)`:a`heightPlane.xyz`;i.code.add(a`
    {
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);
    }
    `)}return s.pointDistanceEnabled&&(i.uniforms.add([new S("angleCutoff",t=>A(t)),new M("pointDistanceSphere",(t,n)=>wt(t,n))]),i.code.add(a`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),s.lineVerticalPlaneEnabled&&(i.uniforms.add([new S("angleCutoff",t=>A(t)),new M("lineVerticalPlane",(t,n)=>yt(t,n)),new P("lineVerticalStart",(t,n)=>Et(t,n)),new P("lineVerticalEnd",(t,n)=>Vt(t,n))]),i.code.add(a`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),s.intersectsLineEnabled&&(i.uniforms.add([new S("angleCutoff",t=>A(t)),new P("intersectsLineStart",(t,n)=>b(m,t.lineStartWorld,n.camera.viewMatrix)),new P("intersectsLineEnd",(t,n)=>b(m,t.lineEndWorld,n.camera.viewMatrix)),new P("intersectsLineDirection",(t,n)=>(v(g,t.intersectsLineSegment.vector),g[3]=0,O(m,ve(g,g,n.camera.viewMatrix)))),new f("intersectsLineRadius",t=>t.intersectsLineRadius)]),i.code.add(a`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),i.code.add(a`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),e}function A(s){return he(Dt,Math.cos(s.angleCutoff),Math.cos(Math.max(0,s.angleCutoff-W(2))))}function wt(s,e){return b(q,s.pointDistanceOrigin,e.camera.viewMatrix),q[3]=be(s.pointDistanceOrigin,s.pointDistanceTarget),q}function yt(s,e){const i=Ge(s.lineVerticalPlaneSegment,.5,m),t=s.renderCoordsHelper.worldUpAtPosition(i,St),n=O(V,s.lineVerticalPlaneSegment.vector),r=He(g,t,n);return O(r,r),Le(s.lineVerticalPlaneSegment.origin,r,e.camera.viewMatrix)}function Et(s,e){const i=v(m,s.lineVerticalPlaneSegment.origin);return s.renderCoordsHelper.setAltitude(i,0),b(i,i,e.camera.viewMatrix)}function Vt(s,e){const i=xe(m,s.lineVerticalPlaneSegment.origin,s.lineVerticalPlaneSegment.vector);return s.renderCoordsHelper.setAltitude(i,0),b(i,i,e.camera.viewMatrix)}function Le(s,e,i){return b(ae,s,i),v(g,e),g[3]=0,ve(g,g,i),Ue(ae,g,Lt)}const Dt=ce(),m=c(),g=Be(),St=c(),V=c(),ae=c(),Lt=We(),q=Fe(),Ct=Object.freeze(Object.defineProperty({__proto__:null,build:xt,defaultAngleCutoff:Se},Symbol.toStringTag,{value:"Module"}));class Rt extends ke{constructor(){super(...arguments),this.innerColor=F(1,1,1),this.innerWidth=1,this.glowColor=F(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=W(6),this.pointDistanceOrigin=c(),this.pointDistanceTarget=c(),this.lineVerticalPlaneSegment=j(),this.intersectsLineSegment=j(),this.intersectsLineRadius=3,this.heightManifoldTarget=c(),this.lineStartWorld=c(),this.lineEndWorld=c()}}class I extends ue{initializeProgram(e){return new pe(e.rctx,I.shader.get().build(this.configuration),Xe)}initializePipeline(){return _e({blending:ge(T.ONE,T.ONE_MINUS_SRC_ALPHA),colorWrite:fe})}}I.shader=new de(Ct,()=>we(()=>import("./Laserlines.glsl-05461501.js"),["assets/Laserlines.glsl-05461501.js","assets/MapView-d4248bee.js","assets/index-9ba3f23e.js","assets/index-fecf00a2.css","assets/VisualElement-62e5dd07.js","assets/VisualElementResources-d63a6ee6.js"]));class D extends N{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1,this.spherical=!1}}y([E()],D.prototype,"heightManifoldEnabled",void 0),y([E()],D.prototype,"pointDistanceEnabled",void 0),y([E()],D.prototype,"lineVerticalPlaneEnabled",void 0),y([E()],D.prototype,"intersectsLineEnabled",void 0),y([E()],D.prototype,"spherical",void 0);class Mt{constructor(e,i={contrastControlEnabled:!1}){this._config=i,this._technique=null,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._viewingMode=X.Local,this._pathVerticalPlaneEnabled=!1,this._pathVerticalPlaneData=null,this._pathTechnique=null,this.canRender=!0,this._passParameters=Ye(e,new Rt)}get renderSlots(){return[this._config.contrastControlEnabled?k.LASERLINES_CONTRAST_CONTROL:k.LASERLINES]}get needsLinearDepth(){return!0}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(e){this._heightManifoldEnabled!==e&&(this._heightManifoldEnabled=e,this._requestRender())}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(e){v(this._passParameters.heightManifoldTarget,e),this._requestRender()}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(e){e!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=e,this._requestRender())}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(e){v(this._passParameters.pointDistanceTarget,e),this._requestRender()}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(e){v(this._passParameters.pointDistanceOrigin,e),this._requestRender()}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(e){e!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=e,this._requestRender())}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){z(e,this._passParameters.lineVerticalPlaneSegment),this._requestRender()}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(e){e!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=e,this._requestRender())}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(e){z(e,this._passParameters.intersectsLineSegment),this._requestRender()}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(e){e!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=e,this._requestRender())}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){e!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=e,this._requestRender())}get viewingMode(){return this._viewingMode}set viewingMode(e){e!==this._viewingMode&&(this._viewingMode=e,this._requestRender())}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(e){e!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=e,o(this._pathVerticalPlaneData)&&this._requestRender())}set pathVerticalPlaneVertices(e){l(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new ne(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=e,this.pathVerticalPlaneEnabled&&this._requestRender()}set pathVerticalPlaneBuffers(e){l(this._pathVerticalPlaneData)&&(this._pathVerticalPlaneData=new ne(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=e,this.pathVerticalPlaneEnabled&&this._requestRender()}setParameters(e){Ze(this._passParameters,e)&&this._requestRender()}initializeRenderContext(e){this._context=e;const i=e.renderContext.rctx;this._quadVAO=Ke(i),this._techniqueRepository=e.techniqueRepository,this._techniqueConfig=new D;const t=new N;t.contrastControlEnabled=this._config.contrastControlEnabled,this._pathTechnique=this._techniqueRepository.acquire(Ee,t)}uninitializeRenderContext(){this._quadVAO=Q(this._quadVAO),this._technique=Y(this._technique),this._pathVerticalPlaneData=Q(this._pathVerticalPlaneData),this._pathTechnique=Y(this._pathTechnique)}prepareTechnique(){return this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled?(this._techniqueConfig.heightManifoldEnabled=this.heightManifoldEnabled,this._techniqueConfig.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._techniqueConfig.pointDistanceEnabled=this.pointDistanceEnabled,this._techniqueConfig.intersectsLineEnabled=this.intersectsLineEnabled,this._techniqueConfig.contrastControlEnabled=this._config.contrastControlEnabled,this._techniqueConfig.spherical=this._viewingMode===X.Global,this._technique=this._techniqueRepository.releaseAndAcquire(I,this._techniqueConfig,this._technique),this._technique):this._pathTechnique}render(e,i){(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(e,i),this.pathVerticalPlaneEnabled&&this._renderPath(e)}_renderUnified(e,i){const t=e.rctx;this._updatePassParameters(e),t.bindTechnique(i,this._passParameters,e.bindParameters),t.bindVAO(this._quadVAO),t.drawArrays(me.TRIANGLE_STRIP,0,4)}_renderPath(e){if(l(this._pathVerticalPlaneData)||l(this._pathTechnique))return;const i=e.rctx,t=this._pathTechnique;i.bindTechnique(t,{...this._passParameters,origin:this._pathVerticalPlaneData.origin},e.bindParameters),this._pathVerticalPlaneData.draw(e.rctx)}_updatePassParameters(e){if(!this._intersectsLineEnabled)return;const i=e.bindParameters.camera;if(this._intersectsLineInfinite){if(Je(et(this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector),L),L.c0=-Number.MAX_VALUE,!tt(i.frustum,L))return;it(L,this._passParameters.lineStartWorld),nt(L,this._passParameters.lineEndWorld)}else v(this._passParameters.lineStartWorld,this._passParameters.intersectsLineSegment.origin),xe(this._passParameters.lineEndWorld,this._passParameters.intersectsLineSegment.origin,this._passParameters.intersectsLineSegment.vector)}_requestRender(){this._context&&this._context.requestRender()}}const L=Qe();class jt extends _t{constructor(e){super(e.view),this._angleCutoff=Se,this._style={},this._heightManifoldTarget=c(),this._heightManifoldEnabled=!1,this._intersectsLine=j(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProps(e)}get testData(){return this._renderer}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){o(e)?(v(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(l(e))return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,At);this.intersectsLine=st(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){o(e)?(z(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=o(e)?z(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=o(e)?{origin:Z(e.origin),target:e.target?Z(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||o(this._pointDistanceLine)||o(this._pathVerticalPlaneBuffers))?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){o(this._renderer)||(this._renderer=new Mt({renderCoordsHelper:this.view.renderCoordsHelper},{contrastControlEnabled:!0}),this._renderer.viewingMode=this.view.state.viewingMode,this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this._renderer.renderSlots,this._renderer))}_syncStyle(){l(this._renderer)||(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){l(this._renderer)||this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){l(this._renderer)||(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){l(this._renderer)||(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){l(this._renderer)||(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){l(this._renderer)||(this._renderer.pathVerticalPlaneEnabled=o(this._pathVerticalPlaneBuffers)&&this.visible,o(this._pathVerticalPlaneBuffers)&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){l(this._renderer)||(this._renderer.lineVerticalPlaneEnabled=o(this._lineVerticalPlaneSegment)&&this.visible,o(this._lineVerticalPlaneSegment)&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(l(this._renderer))return;const e=this._pointDistanceLine,i=o(e);this._renderer.pointDistanceEnabled=i&&e.target!=null&&this.visible,i&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){o(this._renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this._renderer),this._renderer=null)}}const At=c();class Wt{constructor(e){this.view=null,this._geometry=null,this._size=3,this._color=K(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=K(1,1,1,1),this._elevationInfo=null,this._resources=new gt({view:e.view,createResources:t=>this._createResources(t),destroyResources:t=>this._destroyResources(t),recreateGeometry:(t,n)=>{t.geometry=this._recreateGeometry(n,t.material)}});let i=!0;for(const t in e)t in this?t==="attached"?i=e[t]??!1:this[t]=e[t]:console.error("Cannot set unknown property",t);this.attached=i}destroy(){this._resources.destroy()}get visible(){return this._resources.visible}set visible(e){this._resources.visible=e}get attached(){return this._resources.attached}set attached(e){this._resources.attached=e}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this._resources.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const i=this._preferredTextureSize;this._size=e,i<this._preferredTextureSize?o(this._resources)&&this._resources.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){J(e,this._color)||(ee(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,o(this._resources)&&this._resources.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){J(e,this._outlineColor)||(ee(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._resources&&this._resources.recreateGeometry()}_updateMaterial(){const e=this._resources.resources;l(e)||e.material.setParameters(this._materialParameters(e.texture.id))}_updateSizeAttribute(){const e=this._resources.resources,i=this._resources.object;if(l(e)||l(i))return;const t=e.geometry;if(l(t))return;const n=t.getMutableAttribute(p.SIZE).data,r=this._geometrySize;n[0]=r,n[1]=r,i.geometryVertexAttrsUpdated(i.geometries[0])}_materialParameters(e){return{color:this._color,textureIsSignedDistanceField:!0,distanceFieldBoundingBox:$t,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:e,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled}}get _geometrySize(){return this._size/C}_recreateGeometry(e,i){const t=this._createRenderGeometry(i);return o(t)&&e.addGeometry(t),t}_createResources(e){const i=rt(this._primitive,this._preferredTextureSize),t=new at(this._materialParameters(i.id)),n=this._recreateGeometry(e,t);return{material:t,texture:i,geometry:n,forEach(r){r(i),r(t),o(this.geometry)&&r(this.geometry)}}}_destroyResources(e){e.geometry=null,e.material.dispose(),e.texture.dispose()}get _preferredTextureSize(){return lt(ot(2*this._geometrySize),16,128)}calculateMapBounds(e){if(l(this._resources.resources)||l(this._resources.resources.geometry))return!1;const i=this._resources.resources.geometry.vertexAttributes.get(p.POSITION);return te(i.data,this.view.renderCoordsHelper.spatialReference,le,this.view.spatialReference),ht(e,le),!0}_createRenderGeometry(e){const i=this.geometry;if(l(i))return null;const{renderCoordsHelper:t,elevationProvider:n}=this.view,r=ct(i,n,dt.fromElevationInfo(this.elevationInfo),t),h=$(ie.get(),i.x,i.y,r),_=ie.get();te(h,i.spatialReference,_,t.spatialReference);const d=this._geometrySize;return ut(e,null,_,null,[d,d],[0,0,0,1])}}const C=pt,$t=[C/2,C/2,1-C/2,1-C/2],le=c();export{xt as A,Se as C,Wt as S,jt as d,ft as v};
