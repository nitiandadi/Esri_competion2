import{t as I,am as T,a6 as x,r as f}from"./MapView-d4248bee.js";async function b(e,s=e.popupTemplate){var l,o;if(I(s))return[];const n=await s.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:c}=s,{objectIdField:t,typeIdField:i,globalIdField:p,relationships:u}=e;if(n.includes("*"))return["*"];const h=c?await T(e):[],a=x(e.fieldsIndex,[...n,...h]);return i&&a.push(i),a&&t&&((l=e.fieldsIndex)!=null&&l.has(t))&&!a.includes(t)&&a.push(t),a&&p&&((o=e.fieldsIndex)!=null&&o.has(p))&&!a.includes(p)&&a.push(p),u&&u.forEach(m=>{var r;const{keyField:d}=m;a&&d&&((r=e.fieldsIndex)!=null&&r.has(d))&&!a.includes(d)&&a.push(d)}),a}function E(e,s){return e.popupTemplate?e.popupTemplate:f(s)&&s.defaultPopupTemplateEnabled&&f(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{b as d,E as s};
