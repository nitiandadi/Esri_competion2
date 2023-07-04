import{o as K}from"./_commonjsHelpers-2f3e7994.js";import{lq as Q,nn as W}from"./MapView-d4248bee.js";import{c as Z,d as M,r as R,t as $,h as ee}from"./cimAnalyzer-69a577a3.js";import{r as te,e as re}from"./rasterizingUtils-5a0afdfb.js";var G,D={};G=function(){return function(l){var n={};function e(a){if(n[a])return n[a].exports;var u=n[a]={exports:{},id:a,loaded:!1};return l[a].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}return e.m=l,e.c=n,e.p="",e(0)}([function(l,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.isNotPNG=o,n.isNotAPNG=s,n.default=i;var a=f(e(1)),u=e(2);function f(m){return m&&m.__esModule?m:{default:m}}var h=new Error("Not a PNG"),t=new Error("Not an animated PNG");function o(m){return m===h}function s(m){return m===t}var r=new Uint8Array([137,80,78,71,13,10,26,10]);function i(m){var v=new Uint8Array(m);if(Array.prototype.some.call(r,function(B,P){return B!==v[P]}))return h;var _=!1;if(c(v,function(B){return!(_=B==="acTL")}),!_)return t;var b=[],w=[],F=null,y=null,S=0,L=new u.APNG;if(c(v,function(B,P,x,I){var C=new DataView(P.buffer);switch(B){case"IHDR":F=P.subarray(x+8,x+8+I),L.width=C.getUint32(x+8),L.height=C.getUint32(x+12);break;case"acTL":L.numPlays=C.getUint32(x+8+4);break;case"fcTL":y&&(L.frames.push(y),S++),(y=new u.Frame).width=C.getUint32(x+8+4),y.height=C.getUint32(x+8+8),y.left=C.getUint32(x+8+12),y.top=C.getUint32(x+8+16);var J=C.getUint16(x+8+20),T=C.getUint16(x+8+22);T===0&&(T=100),y.delay=1e3*J/T,y.delay<=10&&(y.delay=100),L.playTime+=y.delay,y.disposeOp=C.getUint8(x+8+24),y.blendOp=C.getUint8(x+8+25),y.dataParts=[],S===0&&y.disposeOp===2&&(y.disposeOp=1);break;case"fdAT":y&&y.dataParts.push(P.subarray(x+8+4,x+8+I));break;case"IDAT":y&&y.dataParts.push(P.subarray(x+8,x+8+I));break;case"IEND":w.push(g(P,x,12+I));break;default:b.push(g(P,x,12+I))}}),y&&L.frames.push(y),L.frames.length==0)return t;var H=new Blob(b),V=new Blob(w);return L.frames.forEach(function(B){var P=[];P.push(r),F.set(U(B.width),0),F.set(U(B.height),4),P.push(A("IHDR",F)),P.push(H),B.dataParts.forEach(function(x){return P.push(A("IDAT",x))}),P.push(V),B.imageData=new Blob(P,{type:"image/png"}),delete B.dataParts,P=null}),L}function c(m,v){var _=new DataView(m.buffer),b=8,w=void 0,F=void 0,y=void 0;do F=_.getUint32(b),y=v(w=d(m,b+4,4),m,b,F),b+=12+F;while(y!==!1&&w!="IEND"&&b<m.length)}function d(m,v,_){var b=Array.prototype.slice.call(m.subarray(v,v+_));return String.fromCharCode.apply(String,b)}function p(m){for(var v=new Uint8Array(m.length),_=0;_<m.length;_++)v[_]=m.charCodeAt(_);return v}function g(m,v,_){var b=new Uint8Array(_);return b.set(m.subarray(v,v+_)),b}var A=function(m,v){var _=m.length+v.length,b=new Uint8Array(_+8),w=new DataView(b.buffer);w.setUint32(0,v.length),b.set(p(m),4),b.set(v,8);var F=(0,a.default)(b,4,_);return w.setUint32(_+4,F),b},U=function(m){return new Uint8Array([m>>>24&255,m>>>16&255,m>>>8&255,255&m])}},function(l,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(h){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=-1,s=t,r=t+(arguments.length>2&&arguments[2]!==void 0?arguments[2]:h.length-t);s<r;s++)o=o>>>8^e[255&(o^h[s])];return-1^o};for(var e=new Uint32Array(256),a=0;a<256;a++){for(var u=a,f=0;f<8;f++)u=1&u?3988292384^u>>>1:u>>>1;e[a]=u}},function(l,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.Frame=n.APNG=void 0;var a=function(){function t(o,s){for(var r=0;r<s.length;r++){var i=s[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}return function(o,s,r){return s&&t(o.prototype,s),r&&t(o,r),o}}(),u=f(e(3));function f(t){return t&&t.__esModule?t:{default:t}}function h(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}n.APNG=function(){function t(){h(this,t),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return a(t,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(o){return o.createImage()}))}},{key:"getPlayer",value:function(o){var s=this,r=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.createImages().then(function(){return new u.default(s,o,r)})}}]),t}(),n.Frame=function(){function t(){h(this,t),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return a(t,[{key:"createImage",value:function(){var o=this;return this.imageElement?Promise.resolve():new Promise(function(s,r){var i=URL.createObjectURL(o.imageData);o.imageElement=document.createElement("img"),o.imageElement.onload=function(){URL.revokeObjectURL(i),s()},o.imageElement.onerror=function(){URL.revokeObjectURL(i),o.imageElement=null,r(new Error("Image creation error"))},o.imageElement.src=i})}}]),t}()},function(l,n,e){Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function s(r,i){for(var c=0;c<i.length;c++){var d=i[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(r,d.key,d)}}return function(r,i,c){return i&&s(r.prototype,i),c&&s(r,c),r}}();function u(s){return s&&s.__esModule?s:{default:s}}function f(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}function h(s,r){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||typeof r!="object"&&typeof r!="function"?s:r}function t(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(s,r):s.__proto__=r)}var o=function(s){function r(i,c,d){f(this,r);var p=h(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return p.playbackRate=1,p._currentFrameNumber=0,p._ended=!1,p._paused=!0,p._numPlays=0,p._apng=i,p.context=c,p.stop(),d&&p.play(),p}return t(r,s),a(r,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var i=this.currentFrame;this._prevFrame=i,this._prevFrameData=null,i.disposeOp==2&&(this._prevFrameData=this.context.getImageData(i.left,i.top,i.width,i.height)),i.blendOp==0&&this.context.clearRect(i.left,i.top,i.width,i.height),this.context.drawImage(i.imageElement,i.left,i.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var i=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var c=performance.now()+this.currentFrame.delay/this.playbackRate,d=function p(g){if(!i._ended&&!i._paused){if(g>=c){for(;g-c>=i._apng.playTime/i.playbackRate;)c+=i._apng.playTime/i.playbackRate,i._numPlays++;do i.renderNextFrame(),c+=i.currentFrame.delay/i.playbackRate;while(!i._ended&&g>c)}requestAnimationFrame(p)}};requestAnimationFrame(d)}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),r}(u(e(4)).default);n.default=o},function(l,n){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(t){return typeof t=="function"}function u(t){return typeof t=="number"}function f(t){return typeof t=="object"&&t!==null}function h(t){return t===void 0}l.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(t){if(!u(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},e.prototype.emit=function(t){var o,s,r,i,c,d;if(this._events||(this._events={}),t==="error"&&(!this._events.error||f(this._events.error)&&!this._events.error.length)){if((o=arguments[1])instanceof Error)throw o;var p=new Error('Uncaught, unspecified "error" event. ('+o+")");throw p.context=o,p}if(h(s=this._events[t]))return!1;if(a(s))switch(arguments.length){case 1:s.call(this);break;case 2:s.call(this,arguments[1]);break;case 3:s.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),s.apply(this,i)}else if(f(s))for(i=Array.prototype.slice.call(arguments,1),r=(d=s.slice()).length,c=0;c<r;c++)d[c].apply(this,i);return!0},e.prototype.addListener=function(t,o){var s;if(!a(o))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,a(o.listener)?o.listener:o),this._events[t]?f(this._events[t])?this._events[t].push(o):this._events[t]=[this._events[t],o]:this._events[t]=o,f(this._events[t])&&!this._events[t].warned&&(s=h(this._maxListeners)?e.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),typeof console.trace=="function"&&console.trace()),this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(t,o){if(!a(o))throw TypeError("listener must be a function");var s=!1;function r(){this.removeListener(t,r),s||(s=!0,o.apply(this,arguments))}return r.listener=o,this.on(t,r),this},e.prototype.removeListener=function(t,o){var s,r,i,c;if(!a(o))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(i=(s=this._events[t]).length,r=-1,s===o||a(s.listener)&&s.listener===o)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,o);else if(f(s)){for(c=i;c-- >0;)if(s[c]===o||s[c].listener&&s[c].listener===o){r=c;break}if(r<0)return this;s.length===1?(s.length=0,delete this._events[t]):s.splice(r,1),this._events.removeListener&&this.emit("removeListener",t,o)}return this},e.prototype.removeAllListeners=function(t){var o,s;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[t]&&delete this._events[t],this;if(arguments.length===0){for(o in this._events)o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events={},this}if(a(s=this._events[t]))this.removeListener(t,s);else if(s)for(;s.length;)this.removeListener(t,s[s.length-1]);return delete this._events[t],this},e.prototype.listeners=function(t){return this._events&&this._events[t]?a(this._events[t])?[this._events[t]]:this._events[t].slice():[]},e.prototype.listenerCount=function(t){if(this._events){var o=this._events[t];if(a(o))return 1;if(o)return o.length}return 0},e.listenerCount=function(t,o){return t.listenerCount(o)}}])},{get exports(){return D},set exports(l){D=l}}.exports=G();const Se=K(D);var O={},q={},z={};Object.defineProperty(z,"__esModule",{value:!0}),z.loop=z.conditional=z.parse=void 0;var ne=function l(n,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:a;if(Array.isArray(e))e.forEach(function(h){return l(n,h,a,u)});else if(typeof e=="function")e(n,a,u,l);else{var f=Object.keys(e)[0];Array.isArray(e[f])?(u[f]={},l(n,e[f],a,u[f])):u[f]=e[f](n,a,u,l)}return a};z.parse=ne;var ie=function(l,n){return function(e,a,u,f){n(e,a,u)&&f(e,l,a,u)}};z.conditional=ie;var ae=function(l,n){return function(e,a,u,f){for(var h=[],t=e.pos;n(e,a,u);){var o={};if(f(e,l,a,o),e.pos===t)break;t=e.pos,h.push(o)}return h}};z.loop=ae;var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.readBits=k.readArray=k.readUnsigned=k.readString=k.peekBytes=k.readBytes=k.peekByte=k.readByte=k.buildStream=void 0;var se=function(l){return{data:l,pos:0}};k.buildStream=se;var X=function(){return function(l){return l.data[l.pos++]}};k.readByte=X;var oe=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+l]}};k.peekByte=oe;var j=function(l){return function(n){return n.data.subarray(n.pos,n.pos+=l)}};k.readBytes=j;var ue=function(l){return function(n){return n.data.subarray(n.pos,n.pos+l)}};k.peekBytes=ue;var le=function(l){return function(n){return Array.from(j(l)(n)).map(function(e){return String.fromCharCode(e)}).join("")}};k.readString=le;var ce=function(l){return function(n){var e=j(2)(n);return l?(e[1]<<8)+e[0]:(e[0]<<8)+e[1]}};k.readUnsigned=ce;var fe=function(l,n){return function(e,a,u){for(var f=typeof n=="function"?n(e,a,u):n,h=j(l),t=new Array(f),o=0;o<f;o++)t[o]=h(e);return t}};k.readArray=fe;var he=function(l,n,e){for(var a=0,u=0;u<e;u++)a+=l[n+u]&&Math.pow(2,e-u-1);return a},de=function(l){return function(n){for(var e=X()(n),a=new Array(8),u=0;u<8;u++)a[7-u]=!!(e&1<<u);return Object.keys(l).reduce(function(f,h){var t=l[h];return t.length?f[h]=he(a,t.index,t.length):f[h]=a[t.index],f},{})}};k.readBits=de,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=z,e=k,a={blocks:function(r){for(var i=0,c=[],d=r.data.length,p=0,g=(0,e.readByte)()(r);g!==i&&g;g=(0,e.readByte)()(r)){if(r.pos+g>=d){var A=d-r.pos;c.push((0,e.readBytes)(A)(r)),p+=A;break}c.push((0,e.readBytes)(g)(r)),p+=g}for(var U=new Uint8Array(p),m=0,v=0;v<c.length;v++)U.set(c[v],m),m+=c[v].length;return U}},u=(0,n.conditional)({gce:[{codes:(0,e.readBytes)(2)},{byteSize:(0,e.readByte)()},{extras:(0,e.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,e.readUnsigned)(!0)},{transparentColorIndex:(0,e.readByte)()},{terminator:(0,e.readByte)()}]},function(r){var i=(0,e.peekBytes)(2)(r);return i[0]===33&&i[1]===249}),f=(0,n.conditional)({image:[{code:(0,e.readByte)()},{descriptor:[{left:(0,e.readUnsigned)(!0)},{top:(0,e.readUnsigned)(!0)},{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{lct:(0,e.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,n.conditional)({lct:(0,e.readArray)(3,function(r,i,c){return Math.pow(2,c.descriptor.lct.size+1)})},function(r,i,c){return c.descriptor.lct.exists}),{data:[{minCodeSize:(0,e.readByte)()},a]}]},function(r){return(0,e.peekByte)()(r)===44}),h=(0,n.conditional)({text:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{preData:function(r,i,c){return(0,e.readBytes)(c.text.blockSize)(r)}},a]},function(r){var i=(0,e.peekBytes)(2)(r);return i[0]===33&&i[1]===1}),t=(0,n.conditional)({application:[{codes:(0,e.readBytes)(2)},{blockSize:(0,e.readByte)()},{id:function(r,i,c){return(0,e.readString)(c.blockSize)(r)}},a]},function(r){var i=(0,e.peekBytes)(2)(r);return i[0]===33&&i[1]===255}),o=(0,n.conditional)({comment:[{codes:(0,e.readBytes)(2)},a]},function(r){var i=(0,e.peekBytes)(2)(r);return i[0]===33&&i[1]===254}),s=[{header:[{signature:(0,e.readString)(3)},{version:(0,e.readString)(3)}]},{lsd:[{width:(0,e.readUnsigned)(!0)},{height:(0,e.readUnsigned)(!0)},{gct:(0,e.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,e.readByte)()},{pixelAspectRatio:(0,e.readByte)()}]},(0,n.conditional)({gct:(0,e.readArray)(3,function(r,i){return Math.pow(2,i.lsd.gct.size+1)})},function(r,i){return i.lsd.gct.exists}),{frames:(0,n.loop)([u,t,o,f,h],function(r){var i=(0,e.peekByte)()(r);return i===33||i===44})}];l.default=s}(q);var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.deinterlace=void 0;var pe=function(l,n){for(var e=new Array(l.length),a=l.length/n,u=function(r,i){var c=l.slice(i*n,(i+1)*n);e.splice.apply(e,[r*n,n].concat(c))},f=[0,4,2,1],h=[8,8,4,2],t=0,o=0;o<4;o++)for(var s=f[o];s<a;s+=h[o])u(s,t),t++;return e};E.deinterlace=pe;var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.lzw=void 0;var me=function(l,n,e){var a,u,f,h,t,o,s,r,i,c,d,p,g,A,U,m,v=4096,_=-1,b=e,w=new Array(e),F=new Array(v),y=new Array(v),S=new Array(v+1);for(t=(u=1<<(c=l))+1,a=u+2,s=_,f=(1<<(h=c+1))-1,r=0;r<u;r++)F[r]=0,y[r]=r;for(d=p=g=A=U=m=0,i=0;i<b;){if(A===0){if(p<h){d+=n[m]<<p,p+=8,m++;continue}if(r=d&f,d>>=h,p-=h,r>a||r==t)break;if(r==u){f=(1<<(h=c+1))-1,a=u+2,s=_;continue}if(s==_){S[A++]=y[r],s=r,g=r;continue}for(o=r,r==a&&(S[A++]=g,r=s);r>u;)S[A++]=y[r],r=F[r];g=255&y[r],S[A++]=g,a<v&&(F[a]=s,y[a]=g,!(++a&f)&&a<v&&(h++,f+=a)),s=o}A--,w[U++]=S[A],i++}for(i=U;i<b;i++)w[i]=0;return w};N.lzw=me,Object.defineProperty(O,"__esModule",{value:!0});var ve=O.decompressFrames=O.decompressFrame=Ae=O.parseGIF=void 0,ye=xe(q),ge=z,_e=k,be=E,we=N;function xe(l){return l&&l.__esModule?l:{default:l}}var ke=function(l){var n=new Uint8Array(l);return(0,ge.parse)((0,_e.buildStream)(n),ye.default)},Ae=O.parseGIF=ke,Pe=function(l){for(var n=l.pixels.length,e=new Uint8ClampedArray(4*n),a=0;a<n;a++){var u=4*a,f=l.pixels[a],h=l.colorTable[f]||[0,0,0];e[u]=h[0],e[u+1]=h[1],e[u+2]=h[2],e[u+3]=f!==l.transparentIndex?255:0}return e},Y=function(l,n,e){if(l.image){var a=l.image,u=a.descriptor.width*a.descriptor.height,f=(0,we.lzw)(a.data.minCodeSize,a.data.blocks,u);a.descriptor.lct.interlaced&&(f=(0,be.deinterlace)(f,a.descriptor.width));var h={pixels:f,dims:{top:l.image.descriptor.top,left:l.image.descriptor.left,width:l.image.descriptor.width,height:l.image.descriptor.height}};return a.descriptor.lct&&a.descriptor.lct.exists?h.colorTable=a.lct:h.colorTable=n,l.gce&&(h.delay=10*(l.gce.delay||10),h.disposalType=l.gce.extras.disposal,l.gce.extras.transparentColorGiven&&(h.transparentIndex=l.gce.transparentColorIndex)),e&&(h.patch=Pe(h)),h}console.warn("gif frame does not have associated image.")};O.decompressFrame=Y;var Ue=function(l,n){return l.frames.filter(function(e){return e.image}).map(function(e){return Y(e,l.gct,n)})};ve=O.decompressFrames=Ue;const Fe=512;class Oe{constructor(n){this._resourceManager=n,this._rasterizationCanvas=null}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(n,e,a){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),n.type==="simple-fill"||n.type==="esriSFS"){const[d,p,g]=te(this._rasterizationCanvas,n.style,e);return{size:[p,g],image:new Uint32Array(d.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:Q(Math.ceil(e))}}if(n.type==="simple-line"||n.type==="esriSLS"||n.type==="line"&&n.dashTemplate){let d,p;if(n.type==="simple-line"||n.type==="esriSLS")switch(d=Z(n.style,n.cap),n.cap){case"butt":p="Butt";break;case"square":p="Square";break;default:p="Round"}else d=n.dashTemplate,p=n.cim.capStyle;const[g,A,U]=re(d,p);return{size:[A,U],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let u,f=null,h=null,t=1;if(n.type==="simple-marker"||n.type==="esriSMS"||n.type==="line-marker"?(u=M.fromSimpleMarker(n),h=R(u)):n.cim&&n.cim.type==="CIMHatchFill"?(u=M.fromCIMHatchFill(n.cim,e),f=new $(u.frame.xmin,-u.frame.ymax,u.frame.xmax-u.frame.xmin,u.frame.ymax-u.frame.ymin),t=e):n.cim.markerPlacement&&n.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(u=M.fromCIMInsidePolygon(n.cim),f=new $(u.frame.xmin,-u.frame.ymax,u.frame.xmax-u.frame.xmin,u.frame.ymax-u.frame.ymin)):(u=n.cim,n.avoidSDFRasterization||(h=R(u))),h&&!a){const[d,p,g]=ee(h);return d?{size:[p,g],image:new Uint32Array(d.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:t}:null}const[o,s,r,i,c]=M.rasterize(this._rasterizationCanvas,u,f,this._resourceManager,!a);return o?{size:[s,r],image:new Uint32Array(o.buffer),sdf:!1,simplePattern:!1,anchorX:i,anchorY:c}:null}rasterizeImageResource(n,e,a,u){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=n,this._rasterizationCanvas.height=e;const f=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?f.putImageData(a,0,0):(a.setAttribute("width",`${n}px`),a.setAttribute("height",`${e}px`),f.drawImage(a,0,0,n,e));const h=f.getImageData(0,0,n,e),t=new Uint8Array(h.data);if(u){for(const d of u)if(d&&d.oldColor&&d.oldColor.length===4&&d.newColor&&d.newColor.length===4){const[p,g,A,U]=d.oldColor,[m,v,_,b]=d.newColor;if(p===m&&g===v&&A===_&&U===b)continue;for(let w=0;w<t.length;w+=4)p===t[w]&&g===t[w+1]&&A===t[w+2]&&U===t[w+3]&&(t[w]=m,t[w+1]=v,t[w+2]=_,t[w+3]=b)}}let o;for(let d=0;d<t.length;d+=4)o=t[d+3]/255,t[d]=t[d]*o,t[d+1]=t[d+1]*o,t[d+2]=t[d+2]*o;let s=t,r=n,i=e;const c=Fe;if(r>=c||i>=c){const d=r/i;d>1?(r=c,i=Math.round(c/d)):(i=c,r=Math.round(c*d)),s=new Uint8Array(4*r*i);const p=new Uint8ClampedArray(s.buffer);W(t,n,e,p,r,i,!1)}return{size:[r,i],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{Ae as C,ve as b,Oe as c,Se as i};
