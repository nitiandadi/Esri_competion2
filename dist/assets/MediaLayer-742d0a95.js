import{e as i,a as x,ri as Me,t as c,pD as ee,s as G,y as l,bS as h,Z as ge,es as Pe,wA as Ee,gO as U,b as J,r as S,o as F,gh as z,wB as Le,fP as te,d$ as Q,e0 as re,iS as B,hb as pe,bW as ie,gQ as b,v as Se,de as q,ei as ae,r7 as je,df as Ce,wC as Oe,a0 as ve,_ as ne,f3 as Te,f$ as ue,no as xe,g4 as we,g3 as Ve,g0 as We,g2 as He,wD as Ae,fW as Ne,f7 as Ue,f as oe,as as Be,k as Ge,l as Fe,m as ze,aN as De,pB as ke,hd as Je,jt as qe,hc as Ke,oR as Qe,sl as Ye,e5 as Ze,e7 as Xe,e9 as et,eb as tt,c as nt,en as ot}from"./MapView-d4248bee.js";import{h as j,j as st}from"./perspectiveUtils-524b7bb4.js";import{t as rt}from"./resourceExtension-9abd8498.js";import{o as it}from"./BoundsStore-eb68ff23.js";import{u as at}from"./MediaElementView-6ca5ac62.js";import"./index-9ba3f23e.js";import"./PooledRBush-848b4499.js";import"./normalizeUtilsSync-b85f6a03.js";let se=class extends Me{projectOrWarn(t,n){if(c(t))return t;const{geometry:o,pending:s}=ee(t,n);return s?null:s||o?o:(G.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:n}),null)}};se=i([x("esri.layers.support.GeoreferenceBase")],se);const Y=se,Z=te(),u=b();let D=class extends Se{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],D.prototype,"sourcePoint",void 0),i([l({type:h})],D.prototype,"mapPoint",void 0),D=i([x("esri.layers.support.ControlPoint")],D);let y=class extends ge(Y){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,n){const o=Pe.fromJSON(n.spatialReference),s=Ee(...n.coefficients,1);return t.map(r=>(U(u,r.x,r.y),j(u,u,s),{sourcePoint:r,mapPoint:new h({x:u[0],y:u[1],spatialReference:o})}))}writeControlPoints(t,n,o,s){if(c(this.transform)){const r=new J("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:s==null?void 0:s.layer,georeference:this});s!=null&&s.messages?s.messages.push(r):G.getLogger(this.declaredClass).error(r.name,r.message)}else S(t)&&f(t[0])&&(n.controlPoints=t.map(r=>{const a=F(r.sourcePoint);return{x:a.x,y:a.y}}),n.spatialReference=t[0].mapPoint.spatialReference.toJSON(),n.coefficients=this.transform.slice(0,8))}get coords(){if(c(this.controlPoints))return null;const t=this._updateTransform(Z);if(c(t)||!f(this.controlPoints[0]))return null;const n=this.controlPoints[0].mapPoint.spatialReference;return dt(t,this.width,this.height,n)}set coords(t){if(c(this.controlPoints)||!f(this.controlPoints[0]))return;const n=this.controlPoints[0].mapPoint.spatialReference;if(t=this.projectOrWarn(t,n),c(t))return;const{width:o,height:s}=this,{rings:[[r,a,p,d]]}=t,g={sourcePoint:z(0,s),mapPoint:new h({x:r[0],y:r[1],spatialReference:n})},P={sourcePoint:z(0,0),mapPoint:new h({x:a[0],y:a[1],spatialReference:n})},v={sourcePoint:z(o,0),mapPoint:new h({x:p[0],y:p[1],spatialReference:n})},M={sourcePoint:z(o,s),mapPoint:new h({x:d[0],y:d[1],spatialReference:n})};f(g)&&f(P)&&f(v)&&f(M)&&(de(Z,g,P,v,M),this.controlPoints=F(this.controlPoints).map(({sourcePoint:T})=>(U(u,T.x,T.y),j(u,u,Z),{sourcePoint:T,mapPoint:new h({x:u[0],y:u[1],spatialReference:n})})))}get inverseTransform(){return c(this.transform)?null:Le(te(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(c(t)||c(this.transform)||c(this.controlPoints)||!f(this.controlPoints[0]))return null;U(u,t.x,t.y);const n=this.controlPoints[0].mapPoint.spatialReference;return j(u,u,this.transform),new h({x:u[0],y:u[1],spatialReference:n})}toSource(t){if(c(t)||c(this.inverseTransform)||c(this.controlPoints)||!f(this.controlPoints[0]))return null;const n=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),t=ee(t,n).geometry,c(t)?null:(U(u,t.x,t.y),j(u,u,this.inverseTransform),z(u[0],u[1]))}_updateTransform(t){const{controlPoints:n,width:o,height:s}=this;if(c(n)||!(o>0)||!(s>0))return null;const[r,a,p,d]=n;if(!f(r))return null;const g=r.mapPoint.spatialReference,P=this._projectControlPoint(a,g),v=this._projectControlPoint(p,g),M=this._projectControlPoint(d,g);if(!P.valid||!v.valid||!M.valid||!f(P.controlPoint))return null;c(t)&&(t=te());let T=null;return T=f(v.controlPoint)&&f(M.controlPoint)?de(t,r,P.controlPoint,v.controlPoint,M.controlPoint):f(v.controlPoint)?ct(t,r,P.controlPoint,v.controlPoint):lt(t,r,P.controlPoint),T.every(be=>be===0)?null:T}_projectControlPoint(t,n){if(!f(t))return{valid:!0,controlPoint:t};const{sourcePoint:o,mapPoint:s}=t,{geometry:r,pending:a}=ee(s,n);return a?{valid:!1,controlPoint:null}:a||r?{valid:!0,controlPoint:{sourcePoint:o,mapPoint:r}}:(G.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:s.spatialReference,targetSpatialReference:n}),{valid:!1,controlPoint:null})}};function f(e){return S(e)&&S(e.sourcePoint)&&S(e.mapPoint)}i([l({type:[D],json:{write:{allowNull:!1,isRequired:!0}}})],y.prototype,"controlPoints",void 0),i([Q("controlPoints")],y.prototype,"readControlPoints",null),i([re("controlPoints")],y.prototype,"writeControlPoints",null),i([l()],y.prototype,"coords",null),i([l({json:{write:!0}})],y.prototype,"height",void 0),i([l({readOnly:!0})],y.prototype,"inverseTransform",null),i([l({readOnly:!0})],y.prototype,"transform",null),i([l({json:{write:!0}})],y.prototype,"width",void 0),y=i([x("esri.layers.support.ControlPointsGeoreference")],y);const w=b(),R=b(),V=b(),C=b(),$=b(),_=b(),W=b(),O=b(),K=Math.PI/2;function I(e,t,n){U(e,n.sourcePoint.x,n.sourcePoint.y),U(t,n.mapPoint.x,n.mapPoint.y)}function lt(e,t,n){return I(w,$,t),I(R,_,n),B(V,R,w,K),B(C,w,R,K),B(W,_,$,-K),B(O,$,_,-K),le(e,w,R,V,C,$,_,W,O)}function ct(e,t,n,o){return I(w,$,t),I(R,_,n),I(V,W,o),pe(C,w,R,.5),B(C,V,C,Math.PI),pe(O,$,_,.5),B(O,W,O,Math.PI),le(e,w,R,V,C,$,_,W,O)}function de(e,t,n,o,s){return I(w,$,t),I(R,_,n),I(V,W,o),I(C,O,s),le(e,w,R,V,C,$,_,W,O)}const pt=new Array(8).fill(0),ut=new Array(8).fill(0);function he(e,t,n,o,s){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=s[0],e[7]=s[1],e}function le(e,t,n,o,s,r,a,p,d){return st(e,he(pt,t,n,o,s),he(ut,r,a,p,d))}function dt(e,t,n,o){const s=q(0,n),r=q(0,0),a=q(t,0),p=q(t,n);return j(s,s,e),j(r,r,e),j(a,a,e),j(p,p,e),new ie({rings:[[s,r,a,p,s]],spatialReference:o})}const Re=y;let E=class extends Y{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:n,bottomLeft:o,bottomRight:s}=this;if(c(t)||c(n)||c(o)||c(s))return null;const r=t.spatialReference;return n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),s=this.projectOrWarn(s,r),c(n)||c(o)||c(s)?null:new ie({rings:[[[o.x,o.y],[t.x,t.y],[n.x,n.y],[s.x,s.y],[o.x,o.y]]],spatialReference:r})}set coords(t){const{topLeft:n}=this;if(c(n))return;const o=n.spatialReference;if(t=this.projectOrWarn(t,o),c(t))return;const{rings:[[s,r,a,p]]}=t;this.bottomLeft=new h({x:s[0],y:s[1],spatialReference:o}),this.topLeft=new h({x:r[0],y:r[1],spatialReference:o}),this.topRight=new h({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new h({x:p[0],y:p[1],spatialReference:o})}};i([l()],E.prototype,"coords",null),i([l({type:h})],E.prototype,"bottomLeft",void 0),i([l({type:h})],E.prototype,"bottomRight",void 0),i([l({type:h})],E.prototype,"topLeft",void 0),i([l({type:h})],E.prototype,"topRight",void 0),E=i([x("esri.layers.support.CornersGeoreference")],E);const ht=E;let H=class extends Y{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(c(this.extent))return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:s}=this.extent;let r;if(this.rotation){const{x:a,y:p}=this.extent.center,d=fe(a,p,this.rotation);r=[d(e,t),d(e,o),d(n,o),d(n,t)],r.push(r[0])}else r=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ie({rings:[r],spatialReference:s})}set coords(e){if(c(e)||c(this.extent))return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),c(e)||c(e.extent))return;const{rings:[[n,o,s]],extent:{center:{x:r,y:a}}}=e,p=je(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),d=fe(r,a,-p),[g,P]=d(n[0],n[1]),[v,M]=d(s[0],s[1]);this.extent=new ae({xmin:g,ymin:P,xmax:v,ymax:M,spatialReference:t}),this.rotation=p}};function fe(e,t,n){const o=Ce(n),s=Math.cos(o),r=Math.sin(o);return(a,p)=>[s*(a-e)+r*(p-t)+e,s*(p-t)-r*(a-e)+t]}i([l()],H.prototype,"coords",null),i([l({type:ae})],H.prototype,"extent",void 0),i([l({type:Number})],H.prototype,"rotation",void 0),H=i([x("esri.layers.support.ExtentAndRotationGeoreference")],H);const ft=H,mt={key:"type",base:Y,typeMap:{"control-points":Re,corners:ht,"extent-and-rotation":ft}};let A=class extends Oe(ge(ve)){constructor(){super(...arguments),this.georeference=null,this.opacity=1}readGeoreference(e){return Re.fromJSON(e)}};i([l({types:mt,json:{write:!0}})],A.prototype,"georeference",void 0),i([Q("georeference")],A.prototype,"readGeoreference",null),i([l()],A.prototype,"opacity",void 0),A=i([x("esri.layers.support.MediaElementBase")],A);const ce=A;let L=class extends ce{constructor(e){super(e),this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=ne(e,{responseType:"image"}).then(({data:n})=>{this._set("content",n)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new J("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}readImage(e,t,n){return Te(t.url,n)}writeImage(e,t,n,o){if(c(e))return;const s=o==null?void 0:o.portalItem,r=o==null?void 0:o.resources;if(!s||!r)return void(typeof e=="string"&&(t[n]=ue(e,o)));const a=typeof e!="string"||xe(e)||we(e)?null:e;if(a){if(Ve(a)==null)return void(t[n]=a);const p=ue(a,{...o,verifyItemRelativeUrls:o&&o.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},We.NO);if(s&&p&&!He(p))return r.toKeep.push({resource:s.resourceFromPath(p),compress:!1}),void(t[n]=p)}t[n]="<pending>",r.pendingOperations.push(_e(e).then(p=>{const d=gt(p,s);t[n]=d.itemRelativeUrl,r.toAdd.push({resource:d,content:p,compress:!1,finish:g=>{this.image=g.url}})}))}};i([l({readOnly:!0})],L.prototype,"content",void 0),i([l({json:{name:"url",type:String}})],L.prototype,"image",void 0),i([Q("image",["url"])],L.prototype,"readImage",null),i([re("image")],L.prototype,"writeImage",null),i([l({readOnly:!0,json:{name:"mediaType"}})],L.prototype,"type",void 0),L=i([x("esri.layers.support.ImageElement")],L);const $e=L;async function _e(e){if(typeof e=="string"){if(we(e)){const{data:t}=await ne(e,{responseType:"blob"});return t}return xe(e)?Ae(e):_e((await ne(e,{responseType:"image"})).data)}return new Promise(t=>yt(e).toBlob(t))}function yt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),o}function gt(e,t){const n=Ne(),o=`${Ue("media",n)}.${rt(e)}`;return t.resourceFromPath(o)}let k=class extends ce{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new J("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):G.getLogger(this.declaredClass).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,n)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,n)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};i([l({readOnly:!0})],k.prototype,"content",void 0),i([l()],k.prototype,"video",null),k=i([x("esri.layers.support.VideoElement")],k);const Ie=k,Pt={key:"type",defaultKeyValue:"image",base:ce,typeMap:{image:$e,video:Ie}},me=oe.ofType(Pt);let N=class extends ve.LoadableMixin(Be(Ge(Fe.EventedAccessor))){constructor(e){super(e),this._index=new it,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const s=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(s),this.handles.remove(s),s.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const s=new at({spatialReference:n,element:o});this._elementViewsMap.set(o,s);const r=ze(()=>s.coords,()=>this._updateIndexForElement(s,!1));this._updateIndexForElement(s,!0),this.handles.add(r,s)}this._elementsIndexes.clear(),this.elements.forEach((o,s)=>this._elementsIndexes.set(o,s)),this.emit("refresh")},this.elements=new me}async load(e){if(De(e),!this.spatialReference){const t=this.elements.find(n=>S(n.georeference)&&S(n.georeference.coords));this._set("spatialReference",t?F(F(t.georeference).coords).spatialReference:Pe.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",ke(e,this._get("elements"),me))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return c(e)?null:new ae({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):G.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Je(e.spatialReference,this.spatialReference,null,t);const n=qe(e.spatialReference,this.spatialReference)?e:Ke(e,this.spatialReference);if(!n)return[];const o=n.normalize(),s=[];for(const r of o)this._index.forEachInBounds(Qe(r),({normalizedCoords:a,element:p})=>{S(a)&&Ye(r,a)&&s.push(p)});return s.sort((r,a)=>this._elementsIndexes.get(r)-this._elementsIndexes.get(a)),s}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),s=S(n);this._index.delete(e),s&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==s?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([l()],N.prototype,"elements",null),i([l({readOnly:!0})],N.prototype,"fullExtent",null),i([l()],N.prototype,"spatialReference",null),N=i([x("esri.layers.support.LocalMediaElementSource")],N);const X=N;function ye(e){return typeof e=="object"&&e!=null&&"type"in e}let m=class extends Ze(Xe(et(tt(ot)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new X}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new J("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const n=ye(t)?new X({elements:new oe([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference);const o=n.load(e).then(()=>{this.spatialReference=n.spatialReference});return this.addResolvingPromise(o),Promise.resolve(this)}destroy(){var e,t;(e=F(this.effectiveSource))==null||e.destroy(),(t=F(this.source))==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):G.getLogger(this.declaredClass).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)||e instanceof oe?new X({elements:e}):e:null}readSource(e,t,n){const o=t.mediaType==="image"?new $e:t.mediaType==="video"?new Ie:null;return o==null||o.read(t,n),o}writeSource(e,t,n,o){var s;e&&ye(e)&&e.type==="image"?e.write(t,o):o!=null&&o.messages&&((s=o==null?void 0:o.messages)==null||s.push(new J("media-layer:unsupported-source","source must be an 'ImageElement'")))}};i([l({readOnly:!0})],m.prototype,"effectiveSource",void 0),i([l({type:String})],m.prototype,"copyright",void 0),i([l({readOnly:!0})],m.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],m.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],m.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],m.prototype,"source",null),i([nt("source")],m.prototype,"castSource",null),i([Q("source",["url"])],m.prototype,"readSource",null),i([re("source")],m.prototype,"writeSource",null),i([l()],m.prototype,"spatialReference",void 0),i([l({readOnly:!0})],m.prototype,"type",void 0),m=i([x("esri.layers.MediaLayer")],m);const St=m;export{St as default};
