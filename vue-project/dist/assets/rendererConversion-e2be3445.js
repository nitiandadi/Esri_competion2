import{t as i,c,ep as u,eq as d,r as p}from"./mapviewstore-8a6f290e.js";function y(e){return i(e)||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function $(e,r){if(i(e))return null;if(!y(e))return new c("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return f(e);case"unique-value":return m(e,r);case"class-breaks":return b(e);case"dictionary":case"heatmap":return null}return null}function l(e,r){if(!r)return null;let t;if(t=Array.isArray(r)?r:[r],t.length>0){const s=t.map(n=>n.details.symbol.type||n.details.symbol.declaredClass).filter(n=>!!n);s.sort();const o=[];return s.forEach((n,a)=>{a!==0&&n===s[a-1]||o.push(n)}),new c("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${o.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:t})}return null}function f(e){return l(e,u(e.symbol).error)}function m(e,r){var n;const t={...d,...r},s=(n=e.uniqueValueInfos)==null?void 0:n.map(a=>u(a.symbol,t).error).filter(p),o=u(e.defaultSymbol,t);return o.error&&(s==null||s.unshift(o.error)),l(e,s)}function b(e){const r=e.classBreakInfos.map(s=>u(s.symbol).error).filter(p),t=u(e.defaultSymbol);return t.error&&r.unshift(t.error),l(e,r)}export{y as s,$ as u};