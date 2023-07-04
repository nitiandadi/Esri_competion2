import{ce as ue,cf as X,cg as Z,ch as re,ci as de,cj as he,ck as ce,cl as fe,cm as ge,cn as ye,co as me,cp as V,cq as J,cr as we,cs as K,ct as Q,cu as pe,cv as Pe,cw as ee,bT as Se,cx as te,cy as be}from"./MapView-d4248bee.js";function Ie(e,a){return a=a||{},ue(e,null,null,a.state!=="normal")}function Me(e){var a=X.extend(e);return X.registerClass(a),a}function Le(e){var a=Z.extend(e);return Z.registerClass(a),a}re([de,he]);re(ce);Me({type:"series.liquidFill",optionUpdated:function(){var e=this.option;e.gridSize=Math.max(Math.floor(e.gridSize),4)},getInitialData:function(e,a){var u=fe(e.data,{coordDimensions:["value"]}),c=new ge(u,this);return c.initData(e.data),c},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}});const Te=ye({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(e,a){a.radiusY==null&&(a.radiusY=a.radius);for(var u=Math.max(Math.ceil(2*a.radius/a.waveLength*4)*2,8);a.phase<-Math.PI*2;)a.phase+=Math.PI*2;for(;a.phase>0;)a.phase-=Math.PI*2;var c=a.phase/Math.PI/2*a.waveLength,d=a.cx-a.radius+c-a.radius*2;e.moveTo(d,a.waterLevel);for(var g=0,p=0;p<u;++p){var O=p%4,o=Ce(p*a.waveLength/4,O,a.waveLength,a.amplitude);e.bezierCurveTo(o[0][0]+d,-o[0][1]+a.waterLevel,o[1][0]+d,-o[1][1]+a.waterLevel,o[2][0]+d,-o[2][1]+a.waterLevel),p===u-1&&(g=o[2][0])}a.inverse?(e.lineTo(g+d,a.cy-a.radiusY),e.lineTo(d,a.cy-a.radiusY),e.lineTo(d,a.waterLevel)):(e.lineTo(g+d,a.cy+a.radiusY),e.lineTo(d,a.cy+a.radiusY),e.lineTo(d,a.waterLevel)),e.closePath()}});function Ce(e,a,u,c){return a===0?[[e+1/2*u/Math.PI/2,c/2],[e+1/2*u/Math.PI,c],[e+u/4,c]]:a===1?[[e+1/2*u/Math.PI/2*(Math.PI-2),c],[e+1/2*u/Math.PI/2*(Math.PI-1),c/2],[e+u/4,0]]:a===2?[[e+1/2*u/Math.PI/2,-c/2],[e+1/2*u/Math.PI,-c],[e+u/4,-c]]:[[e+1/2*u/Math.PI/2*(Math.PI-2),-c],[e+1/2*u/Math.PI/2*(Math.PI-1),-c/2],[e+u/4,0]]}var I=Pe;function ae(e){return e&&e.indexOf("path://")===0}Le({type:"liquidFill",render:function(e,a,u){var c=this,d=this.group;d.removeAll();var g=e.getData(),p=g.getItemModel(0),O=p.get("center"),o=p.get("radius"),k=u.getWidth(),M=u.getHeight(),q=Math.min(k,M),z=0,D=0,_=e.get("outline.show");_&&(z=e.get("outline.borderDistance"),D=I(e.get("outline.itemStyle.borderWidth"),q));var L=I(O[0],k),T=I(O[1],M),C,x,E,P=!1,w=e.get("shape");if(w==="container"?(P=!0,C=[k/2,M/2],x=[C[0]-D/2,C[1]-D/2],E=[I(z,k),I(z,M)],o=[Math.max(x[0]-E[0],0),Math.max(x[1]-E[1],0)]):(C=I(o,q)/2,x=C-D/2,E=I(z,q),o=Math.max(x-E,0)),_){var ie=F();ie.style.lineWidth=D,d.add(F())}var le=P?0:L-o,ne=P?0:T-o,A=null;d.add(oe());var G=this._data,U=[];g.diff(G).add(function(t){var r=N(t,!1),i=r.shape.waterLevel;r.shape.waterLevel=P?M/2:o,me(r,{shape:{waterLevel:i}},e),r.z2=2,$(t,r,null),d.add(r),g.setItemGraphicEl(t,r),U.push(r)}).update(function(t,r){for(var i=G.getItemGraphicEl(r),s=N(t,!1,i),n={},l=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],h=0;h<l.length;++h){var v=l[h];s.shape.hasOwnProperty(v)&&(n[v]=s.shape[v])}for(var y={},f=["fill","opacity","shadowBlur","shadowColor"],h=0;h<f.length;++h){var v=f[h];s.style.hasOwnProperty(v)&&(y[v]=s.style[v])}P&&(n.radiusY=M/2),V(i,{shape:n,x:s.x,y:s.y},e),e.isUniversalTransitionEnabled&&e.isUniversalTransitionEnabled()?V(i,{style:y},e):i.useStyle(y);var m=i.getClipPath(),S=s.getClipPath();i.setClipPath(s.getClipPath()),i.shape.inverse=s.inverse,m&&S&&c._shape===w&&!ae(w)&&V(S,{shape:m.shape},e,{isFrom:!0}),$(t,i,i),d.add(i),g.setItemGraphicEl(t,i),U.push(i)}).remove(function(t){var r=G.getItemGraphicEl(t);d.remove(r)}).execute(),p.get("label.show")&&d.add(se(U)),this._shape=w,this._data=g;function R(t,r){if(w)if(ae(w)){var i=ee(w.slice(7),{}),s=i.getBoundingRect(),n=s.width,l=s.height;n>l?(l=t*2/n*l,n=t*2):(n=t*2/l*n,l=t*2);var h=r?0:L-n/2,v=r?0:T-l/2;return i=ee(w.slice(7),{},new Se(h,v,n,l)),r&&(i.x=-n/2,i.y=-l/2),i}else if(P){var y=r?-t[0]:L-t[0],f=r?-t[1]:T-t[1];return te("rect",y,f,t[0]*2,t[1]*2)}else{var y=r?-t:L-t,f=r?-t:T-t;return w==="pin"?f+=t:w==="arrow"&&(f-=t),te(w,y,f,t*2,t*2)}return new be({shape:{cx:r?0:L,cy:r?0:T,r:t}})}function F(){var t=R(C);return t.style.fill=null,t.setStyle(e.getModel("outline.itemStyle").getItemStyle()),t}function oe(){var t=R(o);t.setStyle(e.getModel("backgroundStyle").getItemStyle()),t.style.fill=null,t.z2=5;var r=R(o);r.setStyle(e.getModel("backgroundStyle").getItemStyle()),r.style.stroke=null;var i=new J;return i.add(t),i.add(r),i}function N(t,r,i){var s=P?o[0]:o,n=P?M/2:o,l=g.getItemModel(t),h=l.getModel("itemStyle"),v=l.get("phase"),y=I(l.get("amplitude"),n*2),f=I(l.get("waveLength"),s*2),m=g.get("value",t),S=n-m*n*2;v=i?i.shape.phase:v==="auto"?t*Math.PI/4:v;var b=h.getItemStyle();if(!b.fill){var W=e.get("color"),B=t%W.length;b.fill=W[B]}var ve=s*2,Y=new Te({shape:{waveLength:f,radius:s,radiusY:n,cx:ve,cy:0,waterLevel:S,amplitude:y,phase:v,inverse:r},style:b,x:L,y:T});Y.shape._waterLevel=S;var j=l.getModel("emphasis.itemStyle").getItemStyle();j.lineWidth=0,Y.ensureState("emphasis").style=j,we(Y);var H=R(o,!0);return H.setStyle({fill:"white"}),Y.setClipPath(H),Y}function $(t,r,i){var s=g.getItemModel(t),n=s.get("period"),l=s.get("direction"),h=g.get("value",t),v=s.get("phase");v=i?i.shape.phase:v==="auto"?t*Math.PI/4:v;var y=function(S){var b=g.count();return b===0?S:S*(.2+(b-t)/b*.8)},f=0;n==="auto"?f=y(5e3):f=typeof n=="function"?n(h,t):n;var m=0;l==="right"||l==null?m=Math.PI:l==="left"?m=-Math.PI:l==="none"?m=0:console.error("Illegal direction value for liquid fill."),l!=="none"&&s.get("waveAnimation")&&r.animate("shape",!0).when(0,{phase:v}).when(f/2,{phase:m+v}).when(f,{phase:m*2+v}).during(function(){A&&A.dirty(!0)}).start()}function se(t){var r=p.getModel("label");function i(){var b=e.getFormattedLabel(0,"normal"),W=g.get("value",0)*100,B=g.getName(0)||e.name;return isNaN(W)||(B=W.toFixed(0)+"%"),b??B}var s={z2:10,shape:{x:le,y:ne,width:(P?o[0]:o)*2,height:(P?o[1]:o)*2},style:{fill:"transparent"},textConfig:{position:r.get("position")||"inside"},silent:!0},n={style:{text:i(),textAlign:r.get("align"),textVerticalAlign:r.get("baseline")}};Object.assign(n.style,Ie(r));var l=new K(s),h=new K(s);h.disableLabelAnimation=!0,l.disableLabelAnimation=!0;var v=new Q(n),y=new Q(n);l.setTextContent(v),h.setTextContent(y);var f=r.get("insideColor");y.style.fill=f;var m=new J;m.add(l),m.add(h);var S=R(o,!0);return A=new pe({shape:{paths:t},x:L,y:T}),A.setClipPath(S),h.setClipPath(A),m}},dispose:function(){}});
