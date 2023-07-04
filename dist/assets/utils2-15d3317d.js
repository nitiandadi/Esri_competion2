import{vH as c}from"./MapView-d4248bee.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const a="CALCITE-COMBOBOX-ITEM",i="CALCITE-COMBOBOX-ITEM-GROUP",r=`${a}, ${i}`;function u(e){var n,s;const t=(n=e.parentElement)==null?void 0:n.closest(r),o=(s=t==null?void 0:t.parentElement)==null?void 0:s.closest(r);return[t,o].filter(l=>l)}function C(e){var t;return((t=e.ancestors)==null?void 0:t.filter(o=>o.nodeName==="CALCITE-COMBOBOX-ITEM"))||[]}function b(e){return c(e.querySelectorAll("calcite-combobox-item"))}function O(e){return c(e.querySelectorAll("calcite-combobox-item")).filter(o=>o.selected).length>0}function E(e){return document.evaluate("ancestor::calcite-combobox-item",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{r as C,b as a,a as b,i as c,u as d,E as e,C as g,O as h};
