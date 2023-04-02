/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var t,r,o,n={},a={get exports(){return n},set exports(t){n=t}};t=a,r=function(){function t(t,o,a,f,e){r(t,o,a||0,f||t.length-1,e||n)}function r(t,n,a,f,e){for(;f>a;){if(f-a>600){var h=f-a+1,i=n-a+1,u=Math.log(h),s=.5*Math.exp(2*u/3),M=.5*Math.sqrt(u*s*(h-s)/h)*(i-h/2<0?-1:1);r(t,n,Math.max(a,Math.floor(n-i*s/h+M)),Math.min(f,Math.floor(n+(h-i)*s/h+M)),e)}var c=t[n],x=a,p=f;for(o(t,a,n),e(t[f],c)>0&&o(t,a,f);x<p;){for(o(t,x,p),x++,p--;e(t[x],c)<0;)x++;for(;e(t[p],c)>0;)p--}0===e(t[a],c)?o(t,a,p):o(t,++p,f),p<=n&&(a=p+1),n<=p&&(f=p-1)}}function o(t,r,o){var n=t[r];t[r]=t[o],t[o]=n}function n(t,r){return t<r?-1:t>r?1:0}return t},void 0!==(o=r())&&(t.exports=o);const f=n;export{f as q};
