import{hA as N,ct as E,hS as R,hW as h,hX as $,r as c,hY as y,t as g,cq as d,hZ as H,fE as C,fM as S,h_ as I,h$ as O,ft as M,fs as x,i0 as U,i1 as v,fo as G,g$ as P,fF as b,cr as A,cs as F,cg as k,i2 as T,d0 as q}from"./mapviewstore-8a6f290e.js";import{d as _,f as j}from"./elevationInfoUtils-db1a4384.js";import{U as z}from"./InteractiveToolBase-0db68d23.js";function B(n,e){return D(n,()=>e)}function tn(n){return D(n,e=>e.plane)}function D(n,e){const t=d(),s=d();let o=!1;return r=>{const l=e(r);if(r.action==="start"){const i=E(r.screenStart,R(h.get())),u=$(n.state.camera,i,w);c(u)&&(o=y(l,u,t))}if(!o)return null;const a=E(r.screenEnd,R(h.get())),p=$(n.state.camera,a,w);return g(p)?null:y(l,p,s)?{...r,renderStart:t,renderEnd:s,plane:l,ray:p}:null}}function J(n,e,t=0,s=null,o=null){let r=null;return l=>{if(l.action==="start"&&(r=n.sceneIntersectionHelper.intersectElevationFromScreen(S(l.screenStart.x,l.screenStart.y),e,t,o),c(r)&&c(s)&&!I(r,r,s))||g(r))return null;const a=n.sceneIntersectionHelper.intersectElevationFromScreen(S(l.screenEnd.x,l.screenEnd.y),e,t,o);return c(a)?c(s)&&!I(a,a,s)?null:{...l,mapStart:r,mapEnd:a}:null}}function K(n,e,t,s=null,o=null){return J(n,t,_(e,n,t),s,o)}function L(n,e,t,s=null,o=null){return K(n,t,j(e),s,o)}function rn(n,e,t,s){const o=e.toMap(n.screenStart,{include:[t]});return c(o)?L(e,t,o,s):null}function W(n,e){const t=Z,s=Q,o=O();n.renderCoordsHelper.worldUpAtPosition(e,t);const r=M(o,t,x(s,e,n.state.camera.eye));return M(r,r,t),U(e,r,o)}function sn(n,e,t){let s=null;const o=new z;return o.next(B(n,W(n,e))).next(X(n,e)).next(Y(n,t)).next(r=>{r.mapEnd.x=r.mapStart.x,r.mapEnd.y=r.mapStart.y,s=r}),r=>(s=null,o.execute(r),s)}function X(n,e){const t=d(),s=H(e);n.renderCoordsHelper.worldUpAtPosition(e,t);const o=d(),r=d(),l=a=>(x(a,a,e),v(t,a,a),n.viewingMode==="global"&&H(a)*Math.sign(G(t,a))<.001-s&&x(a,P(a,t,.001),e),b(a,a,e),a);return a=>(a.renderStart=l(C(o,a.renderStart)),a.renderEnd=l(C(r,a.renderEnd)),a)}function Y(n,e){const t=n.renderCoordsHelper;return s=>{const o=t.fromRenderCoords(s.renderStart,e),r=t.fromRenderCoords(s.renderEnd,e);return c(o)&&c(r)?{...s,mapStart:o,mapEnd:r}:null}}var m;function on(n){let e=null;return t=>{switch(t.action){case"start":e=n.disableDisplay();break;case"end":case"cancel":c(e)&&(e.remove(),e=null)}return t}}function an(n,e=null){const t=A(n.state.viewingMode);t.options.selectionMode=!0,t.options.store=F.MIN,t.options.hud=!1;const s=S(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},r=d(),l=k(e,n.spatialReference),a=i=>{n.map.ground&&n.map.ground.opacity<1?o.exclude.add(T):o.exclude.delete(T),n.sceneIntersectionHelper.intersectIntersectorScreen(E(i,s),t,o);const u=t.results.min;let f;if(u.getIntersectionPoint(r))f=u.intersector===q.TERRAIN?m.GROUND:m.OTHER;else{if(!t.results.ground.getIntersectionPoint(r))return null;f=m.GROUND}return{location:n.renderCoordsHelper.fromRenderCoords(r,l),surfaceType:f}};let p;return i=>{if(i.action==="start"){const f=a(i.screenStart);p=c(f)?f.location:null}if(g(p))return null;const u=a(i.screenEnd);return c(u)&&c(u.location)?{...i,mapStart:p,mapEnd:u.location,surfaceType:u.surfaceType}:null}}(function(n){n[n.GROUND=0]="GROUND",n[n.OTHER=1]="OTHER"})(m||(m={}));const Z=d(),Q=d(),w=N();export{an as B,B as C,Y as F,sn as G,K as N,L as P,tn as T,rn as h,on as z};