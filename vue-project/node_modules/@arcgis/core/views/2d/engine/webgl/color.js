/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{isNone as r}from"../../../../core/maybe.js";import{i8888to32 as n}from"./number.js";function t(r,n=0,t=!1){const o=r[n+3];return r[n+0]*=o,r[n+1]*=o,r[n+2]*=o,t||(r[n+3]*=255),r}function o(r){if(!r)return 0;const{r:t,g:o,b:u,a:e}=r;return n(t*e,o*e,u*e,255*e)}function u(r){if(!r)return 0;const[t,o,u,e]=r;return n(t*(e/255),o*(e/255),u*(e/255),e)}function e(n,t,o=0){if(r(t))return n[o+0]=0,n[o+1]=0,n[o+2]=0,void(n[o+3]=0);const{r:u,g:e,b:i,a:c}=t;n[o+0]=u*c/255,n[o+1]=e*c/255,n[o+2]=i*c/255,n[o+3]=c}export{t as premultiplyAlpha,o as premultiplyAlphaRGBA,u as premultiplyAlphaRGBAArray,e as writeColor};
