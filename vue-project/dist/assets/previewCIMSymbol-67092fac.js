import{bu as w,bv as b,u_ as V,bB as P,bo as q}from"./mapviewstore-8a6f290e.js";import{s as D,d as x}from"./cimAnalyzer-e86f3d50.js";import{GeometryStyle as G,CIMSymbolRasterizer as E}from"./CIMSymbolRasterizer-32f4a067.js";import"./index-93a23f67.js";import"./fontUtils-6d1d96e7.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./alignmentUtils-ae955d28.js";import"./definitions-19bfb61c.js";import"./number-b10bd8f5.js";import"./Rect-ea14f53a.js";import"./CIMResourceManager-eff0cb11.js";import"./Rasterizer-b629859a.js";import"./_commonjsHelpers-2f3e7994.js";import"./rasterizingUtils-4ceced3d.js";import"./imageutils-136b51bf.js";const g=new E(null,!0),m=w(b.size),F=w(b.maxSize),L=w(b.lineWidth),k=1;function A(e){const t=e==null?void 0:e.size;return typeof t=="number"?{width:t,height:t}:{width:t!=null&&typeof t=="object"&&"width"in t?t.width:null,height:t!=null&&typeof t=="object"&&"height"in t?t.height:null}}async function ot(e,t={}){var I;const{node:M,opacity:v,symbolConfig:h}=t,j=typeof h=="object"&&"isSquareFill"in h&&h.isSquareFill,S=t.cimOptions||t,o=S.geometryType||V((I=e==null?void 0:e.data)==null?void 0:I.symbol),i=A(t),{feature:C,fieldMap:z}=S;if(i.width==null||i.height==null){const r=await D.resolveSymbolOverrides(e.data,C,null,z,o);if(!r)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:r},e.data.primitiveOverrides=void 0;const y=[];x.fetchResources(r,g.resourceManager,y),y.length>0&&await Promise.all(y);const n=x.getEnvelope(r,null,g.resourceManager),d=n==null?void 0:n.width,f=n==null?void 0:n.height;i.width=o==="esriGeometryPolygon"?m:o==="esriGeometryPolyline"?L:d!=null&&isFinite(d)?Math.min(d,F):m,i.height=o==="esriGeometryPolygon"?m:f!=null&&isFinite(f)?Math.max(Math.min(f,F),k):m}const p=await g.rasterizeCIMSymbolAsync(e,C,i,j||o!=="esriGeometryPolygon"?G.Preview:G.Legend,z,o);if(!p)return null;const{width:O,height:R}=p,l=document.createElement("canvas");l.width=O,l.height=R,l.getContext("2d").putImageData(p,0,0);const u=P(i.width),c=P(i.height),s=new Image(u,c);s.src=l.toDataURL(),v!=null&&(s.style.opacity=`${v}`);let a=s;if(t.effectView!=null){const r={shape:{type:"image",x:0,y:0,width:u,height:c,src:s.src},fill:null,stroke:null,offset:[0,0]};a=q([[r]],[u,c],{effectView:t.effectView})}return M&&a&&M.appendChild(a),a}export{ot as previewCIMSymbol};