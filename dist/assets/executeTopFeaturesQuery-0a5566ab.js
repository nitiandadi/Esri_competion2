import{aI as f,bQ as i,a5 as n}from"./MapView-d4248bee.js";import{d as p}from"./queryTopFeatures-a49411eb.js";import"./index-9ba3f23e.js";async function d(a,r,o,t){const e=f(a),m={...t},{data:s}=await p(e,i.from(r),o,m);return n.fromJSON(s)}export{d as executeTopFeaturesQuery};
