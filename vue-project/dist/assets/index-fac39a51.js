import{Q as bo,u as Ro,e as te,y as ae,c1 as Th,cp as wo,b as yr,t as rt,s as Yu,r as xe,K as Nh,cq as Ls,b3 as wa,a3 as Fh,cr as Ph,cs as Mh,av as bn,ct as Oh,q as ii,ba as Xo,p as qt,cu as Ju,a8 as Bh,cv as no,aD as Ws,E as Mr,cg as Lh,cw as si,ch as Vs,v as Wh,bz as Vh,A as Qu,c8 as Jn,cx as zs,j as zh,bR as Uh,B as Zu,cy as Hh,f as Us,J as Hs,W as Gh,n as Ae,cz as qh,a as jh,bG as $h,cA as Kh,cB as Xh,X as Yh,H as Jh,R as Qh,cC as Zh}from"./mapviewstore-8a6f290e.js";import{u as Tr}from"./useEcharts-e87bb20d.js";import"./chartdata-dcab81db.js";import{k as ed,r as fe,d as qr,o as Yo,a2 as Ar,a as wn,c as Jo,f as re,i as ec,j as tc,a3 as ct,P as _a,ap as ui,_ as Ni,m as _o,ao as td,n as Fi,u as Ie,s as Co,ag as nd,q as Eo,w as Ve,g as Se,v as sn,a1 as rd,y as od,z as Cr,x as ro,a8 as ad,aq as id,H as sd,F as ud,$ as Er,ar as cd,p as Ca}from"./index-93a23f67.js";import{u as Pi}from"./useTime-a8fa1ef7.js";import Gs from"./SceneLayer-1d5e5bc3.js";import{c as ld}from"./Analysis-47e7ad1f.js";import{e as hd}from"./defaultUnit-99281ff3.js";import{t as dd,a as pd}from"./SceneSnappingManagerPool-06fb7178.js";import{E as qs}from"./measurementUtils-101e252c.js";import{x as fd}from"./SnappingVisualizer3D-65e3df3f.js";import{B as vd,z as md}from"./dragEventPipeline3D-cb32ecbd.js";import{i as js,u as gd}from"./analysisThemeUtils-81ceedff.js";import{N as $s}from"./manipulatorUtils-6039567a.js";import{d as yd}from"./PointVisualElement-e48a1b74.js";import{e as nc,x as xd}from"./InteractiveToolBase-0db68d23.js";import{a as bd}from"./AnalysisToolBase-c24b1232.js";import{V as wd,g as _d,w as Cd}from"./EditGeometryOperations-03e088f6.js";import{e as Ed}from"./SnappingContext-3f11e741.js";import{h as Id,m as Rd}from"./SnappingOperation-f7fee6c6.js";import{m as kd}from"./SnappingManager-e678da87.js";import"./SceneService-4438382c.js";import"./I3SIndexInfo-540caffe.js";import"./saveUtils-a923b5a1.js";import"./resourceUtils-ae877d62.js";import"./capabilities-a18453f6.js";import"./FetchAssociatedFeatureLayer-a8db85c2.js";import"./I3SLayerDefinitions-acca3de2.js";import"./persistable-583a46db.js";import"./resourceExtension-dfbbe1e7.js";import"./I3SUtil-e7249754.js";import"./I3SBinaryReader-61540d2b.js";import"./popupUtils-19dc2706.js";import"./getDefaultUnitForView-09ed9ab9.js";import"./geometryEngine-31bba3a2.js";import"./geometryEngineBase-e1a33b0a.js";import"./hydrated-a556b3e7.js";import"./geodesicUtils-0ed15d7f.js";import"./elevationInfoUtils-db1a4384.js";import"./RightAngleQuadVisualElement-51086ef2.js";import"./VisualElement-cf195c8c.js";import"./VisualElementResources-219837dc.js";import"./viewUtils-4b1f07e9.js";import"./colorUtils-9fd88e2d.js";import"./ImageMaterial-86134e3a.js";import"./drawUtils-04a6e6ca.js";import"./geometry2dUtils-3b519363.js";import"./PointSnappingHint-65883099.js";import"./dehydratedFeatureComparison-baf6aa6d.js";import"./QueryEngineResult-555e15c4.js";import"./WhereClause-1d488167.js";import"./executionError-fb3f283a.js";import"./utils-da1501b7.js";import"./ClassBreaksDefinition-e0623088.js";import"./projectionSupport-2ac8e0ed.js";import"./json-48e3ea08.js";import"./utils-756c69af.js";const Qo=[{oid:2,name:"黑陶展厅",destory:"无损坏",year:1,screenPoint:{x:202.66668701171875,y:385.1111145019531}},{oid:4,name:"1号农家合院",destory:"轻度损坏",year:5,screenPoint:{x:277.3333435058594,y:705.1111450195312}},{oid:6,name:"1号休闲房",destory:"无损坏",year:1,screenPoint:{x:436.4444885253906,y:514.0000610351562}},{oid:7,name:"2号民宿",destory:"轻度损坏",year:3,screenPoint:{x:292.4444580078125,y:534.4444580078125}},{oid:8,name:"咨询处",destory:"中度损坏",year:5,screenPoint:{x:396.4444885253906,y:367.3333435058594}},{oid:9,name:"3号农家食堂",destory:"轻度损坏",year:3,screenPoint:{x:520,y:439.3333435058594}},{oid:10,name:"1号农家房",destory:"中度损坏",year:5,screenPoint:{x:657.7777709960938,y:441.1111145019531}},{oid:11,name:"售票房",destory:"中度损坏",year:5,screenPoint:{x:533.3333129882812,y:764.6666870117188}},{oid:12,name:"黑陶展厅",destory:"无损坏",year:1,screenPoint:{x:163.55555725097656,y:334.4444580078125}},{oid:13,name:"3号农家合院",destory:"无损坏",year:1,screenPoint:{x:519.1111450195312,y:379.7778015136719}},{oid:14,name:"陶艺讲堂 ",destory:"无损坏",year:1,screenPoint:{x:369.7778015136719,y:330.888916015625}},{oid:15,name:"1号农家食堂",destory:"轻度损坏",year:5,screenPoint:{x:259.5555725097656,y:322.8888854980469}},{oid:16,name:"小展厅",destory:"轻度损坏",year:5,screenPoint:{x:635.5555419921875,y:210}},{oid:17,name:"2号农家食堂",destory:"中度损坏",year:5,screenPoint:{x:528,y:309.5555725097656}},{oid:18,name:"2号农家合院",destory:"轻度损坏",year:5,screenPoint:{x:176.00001525878906,y:502.4444580078125}},{oid:19,name:"2号农家房",destory:"轻度损坏",year:3,screenPoint:{x:240,y:628.6666870117188}},{oid:20,name:"1号民宿",destory:"轻度损坏",year:5,screenPoint:{x:398.22222900390625,y:587.7777709960938}},{oid:21,name:"2号休闲房",destory:"无损坏",year:1,screenPoint:{x:377.77777099609375,y:537.1111450195312}},{oid:22,name:"大展厅",destory:"轻度损坏",year:5,screenPoint:{x:547.5555419921875,y:476.6666564941406}},{oid:23,name:"3号农家房",destory:"轻度损坏",year:3,screenPoint:{x:464.8888854980469,y:338.8888854980469}}],Un=ed("widget3d",()=>{let r;const t=fe(!1),e=fe(!0),n=fe(!1),o=fe(!1),a=fe(0),i=["success","warning","error"],s=[30,15,10],u={success:{title:"限流评估等级-优",subTitle:"当日游客承载等级高，建议游客限流量"+s[0]+"+人次"},warning:{title:"限流评估等级-良",subTitle:"当日游客承载等级中等，建议游客限流量"+s[1]+"+人次"},error:{title:"限流评估等级-差",subTitle:"当日游客承载等级低，建议游客限流量"+s[2]+"-人次"}};function c(x){r=x}function l(){r.value=!1}let h,d,p;function f(x){h=x}function m(x){d=x}function v(x){p=x}function g(){const x=(t.value?h[0]:0)+p[0]+(n.value?d[0]:0),w=(t.value?h[1]:0)+p[1]+(n.value?d[1]:0),y=(t.value?h[2]:0)+p[2]+(n.value?d[2]:0);console.log(x,w,y);const b=Math.max(x,w,y);b===x?a.value=0:b===w?a.value=1:a.value=2}return{setisDisabled:c,changeDisabled:l,checked1:t,checked2:e,checked3:n,setBuildparam:f,setEnvieonmentparam:m,setVisitorparam:v,createResult:g,result:a,resultArr:i,resultTitle:u,showResult:o}}),rc={无损坏:1,轻度损坏:2,中度损坏:3};function Sd(){const r=[];return Qo.forEach(t=>{r.push(t.name+`
`)}),r}function Dd(){const r=[];return Qo.forEach(t=>{r.push(t.year)}),r}function Ad(){const r=[];return Qo.forEach(t=>{const e=rc[t.destory];r.push(e)}),r}const Ea=fe(0),Ia=fe(0),Ra=fe(0);function ka(r){Qo.forEach(n=>{const o=rc[n.destory],a=n.year,i=o*.7+a*.3;i<1.5?Ea.value++:i<2.5?Ia.value++:Ra.value++});const t=Ea.value+Ia.value+Ra.value,e=[Ea.value/t,Ia.value/t,Ra.value/t];return Un().setBuildparam(e),e[r]}const Td={title:{text:"黄河漂流广场-农家院",textStyle:{color:"#fff"}},legend:{left:"right",data:["年限","损坏程度"],textStyle:{color:"#4c9bfd"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"#115687",borderColor:"#ccc",borderWidth:1,padding:[5,10],textStyle:{color:"#fff",fontSize:12},extraCssText:"box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 80px;",formatter:function(r){let t='<div style="font-size: 16px; font-weight: bold;height: 30px; ">'+r[0].name+"</div>";return r.forEach(function(e){t+='<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: '+e.color+';"></span>'+e.seriesName+"："+e.value+"<br>"}),t}},dataset:{source:[]},xAxis:{type:"category",data:Sd(),splitLine:{show:!1},axisLabel:{show:!1,interval:0}},yAxis:{type:"value",axisLabel:{color:"#4c9bfd"}},calculable:!0,grid:{bottom:10,tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,formatter:function(r){return r.value.replace(`
`,"")}}}}},series:[{type:"bar",name:"年限",data:Dd()},{type:"bar",name:"损坏程度",data:Ad()},{type:"pie",center:["75%","25%"],radius:"28%",z:100,emphasis:{focus:"self"},data:[{name:"优",value:ka(0)},{name:"良",value:ka(1)},{name:"一般",value:ka(2)}]}]},oc=[["product","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],["第一年",650,820,880,720,580,920,850,820,780,700,630,610],["第三年",520,540,590,550,740,710,680,620,580,510,470,440],["第五年",450,670,730,390,480,350,300,280,320,370,420,500]],Sa=fe(0),Da=fe(0),Aa=fe(0);function Ta(r){oc.forEach(n=>{(n[0]==="第一年"||n[0]==="第三年"||n[0]==="第五年")&&n.forEach((o,a)=>{a!==0&&(o>700?Sa.value++:o>500?Da.value++:Aa.value++)})});const t=Sa.value+Da.value+Aa.value,e=[Sa.value/t,Da.value/t,Aa.value/t];return Un().setVisitorparam(e),e[r]}const Ks={toolbox:{show:!0,orient:"vertical",left:"10",top:"-5",feature:{},itemSize:25},legend:{left:"right",data:["第一年","第三年","第五年"],textStyle:{color:"#4c9bfd"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"#115687",borderColor:"#ccc",borderWidth:1,padding:[5,10],textStyle:{color:"#fff",fontSize:12},extraCssText:"box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 90px;",formatter:function(r){let t='<div style="font-size: 16px; font-weight: bold;height: 30px; ">'+r[0].name+"</div>";return r.forEach(function(e,n){t+='<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: '+e.color+';"></span>'+e.seriesName+"："+e.value[n+1]+"<br>"}),t}},dataset:{source:oc},xAxis:{type:"category",axisLabel:{color:"#4c9bfd"}},yAxis:{gridIndex:0,name:"客流量(人次)",nameTextStyle:{color:"#4c9bfd",fontSize:14},axisLabel:{color:"#4c9bfd"}},grid:{bottom:"10%"},series:[{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{type:"pie",center:["75%","25%"],radius:"28%",z:100,emphasis:{focus:"self"},data:[{name:"优",value:Ta(0)},{name:"良",value:Ta(1)},{name:"一般",value:Ta(2)}]}]},Na=Pi();function Nd(){let r=[],t=new Date(Na.year.value,Na.month.value-1,Na.day.value).getTime(),e=24*60*60*1e3;for(let o=0;o<5;o++){let a=new Date(t+(o-4)*e),i=a.getMonth()+1,s=a.getDate(),u=i+"-"+s;r.push(u)}const n=[1/5,3/5,1/5];return Un().setEnvieonmentparam(n),r}const Fd={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:"#115687",borderColor:"#ccc",borderWidth:1,padding:[5,10],textStyle:{color:"#fff",fontSize:12},extraCssText:"box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);max-width: 200px; max-height: 50px;",formatter:function(r){let t='<div style="font-size: 16px; font-weight: bold;height: 30px; ">'+r[0].name+"</div>";return r.forEach(function(e){e.seriesIndex!==0&&(t+='<span style="display: inline-block; width: 10px; height: 10px; margin-right: 5px;font-size: 14px; border-radius: 50%; background-color: '+e.color+';"></span>'+e.seriesName+"："+e.value+"<br>")}),t}},legend:{left:"right",data:["环境分级"],textStyle:{color:"#4c9bfd"}},xAxis:[{type:"category",data:Nd(),axisPointer:{type:"shadow"},axisLabel:{color:"#4c9bfd"}}],yAxis:[{type:"value",name:"环境评估(级)",nameTextStyle:{color:"#4c9bfd",fontSize:14},interval:1,axisLabel:{color:"#4c9bfd"}}],grid:{bottom:20},series:[{name:"环境分级",type:"bar",data:[2,2,1,3,2]},{type:"pie",center:["75%","30%"],radius:"28%",z:100,emphasis:{focus:"self"},data:[{name:"优",value:1/5},{name:"良",value:3/5},{name:"一般",value:1/5}]},{name:"环境分级",type:"line",smooth:!0,lineStyle:{color:"#f7b851",width:2},data:[2,2,1,3,2]}]},xr=r=>(ec("data-v-a120c94b"),r=r(),tc(),r),Pd={class:"Container",ref:"ContainerRef"},Md={class:"Container-panel line"},Od=xr(()=>re("div",{class:"Container-panel-title"},[re("span",null,"设施评估")],-1)),Bd=xr(()=>re("div",{class:"Container-panel-footer"},null,-1)),Ld={class:"Container-panel bar"},Wd=xr(()=>re("div",{class:"Container-panel-title"},[re("span",null,"客流量评估")],-1)),Vd=xr(()=>re("div",{class:"Container-panel-footer"},null,-1)),zd={class:"Container-panel pie"},Ud=xr(()=>re("div",{class:"Container-panel-title"},[re("span",null,"环境评估")],-1)),Hd=xr(()=>re("div",{class:"Container-panel-footer"},null,-1)),Gd=qr({__name:"buildingInfro",setup(r){const t=Un(),e=fe(null),n=fe(null),o=fe(null);return Yo(()=>{let a=null;e.value&&(a=bo(e.value),Tr(a,Td));let i=null;n.value&&(i=bo(n.value),Ks.toolbox.feature={myTool1:{show:!0,title:"限流评估",icon:"image://	https://cdn-icons-png.flaticon.com/512/998/998382.png",onclick:function(){t.showResult=!1,Ar({title:"限流评估参数",message:()=>ct("div",{style:{display:"flex",flexDirection:"column"}},[ct("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},[ct("div",{style:{}},[ct("label",{for:"switch1",style:{color:"#fff"}},"设施："),ct(_a,{id:"switch1",modelValue:t.checked1,"onUpdate:modelValue":u=>t.checked1=u})]),ct("div",{style:{}},[ct("label",{for:"switch2",style:{color:"#fff"}},"客流量："),ct(_a,{id:"switch2",disabled:!0,modelValue:t.checked2,"onUpdate:modelValue":u=>t.checked2=u})]),ct("div",{},[ct("label",{for:"switch3",style:{color:"#fff"}},"环境："),ct(_a,{id:"switch3",modelValue:t.checked3,"onUpdate:modelValue":u=>t.checked3=u})])]),t.showResult?ct(ui,{icon:t.resultArr[t.result],title:t.resultTitle[t.resultArr[t.result]].title,subTitle:t.resultTitle[t.resultArr[t.result]].subTitle,style:{color:"#fff"}}):null]),confirmButtonText:"执行分析",closeOnClickModal:!1,beforeClose:(u,c,l)=>{u==="confirm"?(c.confirmButtonLoading=!0,c.confirmButtonText="执行中...",t.createResult(),console.log(t.result),setTimeout(()=>{c.confirmButtonLoading=!1,t.showResult=!0,t.changeDisabled(),c.confirmButtonText="分析成功"},300),setTimeout(()=>{l()},3e3)):l()}})}}},Tr(i,Ks));let s=null;o.value&&(s=bo(o.value),Tr(s,Fd))}),(a,i)=>(wn(),Jo("div",Pd,[re("div",Md,[Od,re("div",{class:"Container-panel-chart",ref_key:"chartBuildRef",ref:e},null,512),Bd]),re("div",Ld,[Wd,re("div",{class:"Container-panel-chart",ref_key:"chartVisitorRef",ref:n},null,512),Vd]),re("div",zd,[Ud,re("div",{class:"Container-panel-chart",ref_key:"chartEnvironmentRef",ref:o},null,512),Hd])],512))}});const qd=Ni(Gd,[["__scopeId","data-v-a120c94b"]]),jd="/exit.mp4",$d="/enter.mp4";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ac=function(r,t){return(ac=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Tt(r,t){function e(){this.constructor=r}ac(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function K(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function X(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(h){l=[6,h],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Kd=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return Xd(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function Xd(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function M(){return ic}var ic=null,ko=new Map,ci=new Map;function sc(r,t){var e=cc(r,t);return ko.get(e)}function Yd(r){return ci.get(r)}function Xs(r){for(var t=ko.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function uc(r){var t=r.kernelName,e=r.backendName,n=cc(t,e);if(ko.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");ko.set(n,r)}function Jd(r){var t=r.kernelName;ci.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),ci.set(t,r)}function cc(r,t){return t+"_"+r}function li(r,t,e){return Math.max(r,Math.min(t,e))}function lc(r){return r%2==0?r:r+1}function Qd(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Ce(r,t,e){e===void 0&&(e=""),E(Xe(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function br(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function fr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||$t(r)&&!e)for(var n=0;n<r.length;++n)fr(r[n],t,e);else t.push(r);return t}function Y(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Xe(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Le(r){return r%1==0}function Zd(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function hi(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function ir(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Ys(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function ep(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function $e(r,t){var e=t.length;return E((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return Le(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function On(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:$e(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Or(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function So(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function tp(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function np(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function rp(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function $t(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function hc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function op(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Mi(r){return typeof r=="string"||r instanceof String}function ap(r){return typeof r=="boolean"}function ip(r){return typeof r=="number"}function jr(r){return Array.isArray(r)?jr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":ip(r)?"float32":Mi(r)?"string":ap(r)?"bool":"float32"}function di(r){return!!(r&&r.constructor&&r.call&&r.apply)}function pi(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Kt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function dc(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=fr(r)),e&&tp(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Js(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(d,p){return d*p});for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s}(0,r,t)}function pc(r,t){for(var e=$r(r,t),n=0;n<e.length;n++)e[n]=1;return e}function $r(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Ut(){return M().platform.now()}function fc(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function sp(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(r,t)}function Do(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(r,t)}function Qs(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function up(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var cp=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new lp)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var d=0;d<c.length;d++){var p=c[d];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),lp=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?ir(o+"ms",9):o.error,u=ir(t,25),c=e.rank,l=e.size,h=ir(e.shape.toString(),14),d="";for(var p in a){var f=a[p].shape||e.shape,m=f.length;d+=p+": "+m+"D "+(m>0?f:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+d+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Zs=20,Ir=3,Fa=7;function hp(r,t,e,n){var o=Kt(t),a=function(c,l,h,d){var p=Y(l),f=d[d.length-1],m=new Array(f).fill(0),v=l.length,g=h==="complex64"?kr(c):c;if(v>1)for(var x=0;x<p/f;x++)for(var w=x*f,y=0;y<f;y++)m[y]=Math.max(m[y],Rr(g[w+y],0,h).length);return m}(r,t,e,o),i=t.length,s=function c(l,h,d,p,f,m){m===void 0&&(m=!0);var v=d==="complex64"?2:1,g=h[0],x=h.length;if(x===0)return d==="complex64"?[Rr(kr(l)[0],0,d)]:d==="bool"?[vc(l[0])]:[l[0].toString()];if(x===1){if(g>Zs){var w=Ir*v,y=Array.from(l.slice(0,w)),b=Array.from(l.slice((g-Ir)*v,g*v));return d==="complex64"&&(y=kr(y),b=kr(b)),["["+y.map(function(B,z){return Rr(B,f[z],d)}).join(", ")+", ..., "+b.map(function(B,z){return Rr(B,f[g-Ir+z],d)}).join(", ")+"]"]}return["["+(d==="complex64"?kr(l):Array.from(l)).map(function(B,z){return Rr(B,f[z],d)}).join(", ")+"]"]}var _=h.slice(1),S=p.slice(1),k=p[0]*v,I=[];if(g>Zs){for(var R=0;R<Ir;R++){var N=(A=R*k)+k;I.push.apply(I,c(l.slice(A,N),_,d,S,f,!1))}for(I.push("..."),R=g-Ir;R<g;R++)N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),_,d,S,f,R===g-1))}else for(R=0;R<g;R++){var A;N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),_,d,S,f,R===g-1))}var L=x===2?",":"";for(I[0]="["+I[0]+L,R=1;R<I.length-1;R++)I[R]=" "+I[R]+L;var O=`,
`;for(R=2;R<x;R++)O+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(m?"":O),I}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Rr(r,t,e){return ir(Array.isArray(r)?parseFloat(r[0].toFixed(Fa))+" + "+parseFloat(r[1].toFixed(Fa))+"j":Mi(r)?"'"+r+"'":e==="bool"?vc(r):parseFloat(r.toFixed(Fa)).toString(),t)}function vc(r){return r===0?"false":"true"}function kr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var Br=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||So(e,this.size),this.strides=Kt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Ht().makeTensor(this.values,this.shape,this.dtype)},r}(),Ht=null,P=null,mc=null,Fe=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=Kt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Js(this.shape,t)]}})})},r.prototype.arraySync=function(){return Js(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var t,e;return X(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Ht().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return Do(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Ht().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return Do(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Ht().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Ht().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),hp(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),mc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),P.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Ht().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(Fe,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var eu,fi,vi,mi,gi,vr=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Tt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Xe(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Ht().disposeTensor(this),this.dataId=e.dataId,Ht().incRef(this,null)},t.prototype.dispose=function(){Ht().disposeVariable(this),this.isDisposedInternal=!0},t}(Fe);Object.defineProperty(vr,Symbol.hasInstance,{value:function(r){return r instanceof Fe&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(eu||(eu={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(fi||(fi={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(vi||(vi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(mi||(mi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(gi||(gi={}));var dp={float32:mi,int32:fi,bool:vi,complex64:gi};function Ze(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return dp[r][t]}function Pa(r){return Ze(r,"int32")}function Me(r,t){if(r.dtype===t.dtype)return[r,t];var e=Ze(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function pp(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function gc(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof Fe)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var Ma,tu=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),fp=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new tu}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new cp(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Xs(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;Xs(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var d,p=function(x){h&&(l=x.map(function(w){return c.keep(c.clone(w))}))},f=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=sc(o,this.backendName);return d=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var w=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,w);var y=w.map(function(_){var S=_.dataId,k=_.shape,I=_.dtype;return c.makeTensorFromDataId(S,k,I)}),b=y.filter(function(_,S){return s[S]});return p((i||[]).slice().concat(b)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,p)});var w=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,w),w},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return d()}):d()}),h&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-f,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Mi(t[0])&&(a=t.map(function(l){return sp(l)}));var i=o.write(a,e,n),s=new Fe(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=op(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Fe(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new vr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*hc(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof vr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=Yd(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var d=n[h],p=$r(d.size,d.dtype);return i.makeTensor(p,d.shape,d.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=gc(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});E(i instanceof Fe,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},d={},p=0;p<c.length;p++)h[c[p].id]=!0;for(p=0;p<u.length;p++){var f=(_=u[p]).inputs;for(var m in f){for(var v=f[m],g=!1,x=0;x<c.length;x++)if(h[v.id]){_.outputs.forEach(function(R){return h[R.id]=!0}),g=!0,d[_.id]=!0;break}if(g)break}}var w={};w[l.id]=!0;var y={};for(p=u.length-1;p>=0;p--)for(f=(_=u[p]).inputs,x=0;x<_.outputs.length;x++)if(w[_.outputs[x].id]){for(var m in f)w[f[m].id]=!0,y[_.id]=!0;break}var b=[];for(p=0;p<u.length;p++){var _;if(d[(_=u[p]).id]&&y[_.id]){var S={};for(var m in _.inputs){var k=_.inputs[m];h[k.id]&&(S[m]=k)}var I=Object.assign({},_);I.inputs=S,I.outputs=_.outputs,b.push(I)}}return b}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=pc(Y(u),"float32"),T.makeTensor(c,u,"float32")),function(d,p,f){for(var m=function(g){var x=p[g],w=[];if(x.outputs.forEach(function(S){var k=d[S.id];k!=null?w.push(k):w.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(w),b=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=f(function(){return y[S]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var I=x.inputs[S];if(!Xe(k.shape,I.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+I.shape+"'");if(d[I.id]==null)d[I.id]=k;else{var R=d[I.id];d[I.id]=R.add(k),R.dispose()}};for(var _ in x.inputs)b(_)},v=p.length-1;v>=0;v--)m(v)}(l,s,function(d){return a.tidy(d)});var h=e.map(function(d){return l[d.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(d){for(var p=0,f=d.saved;p<f.length;p++)f[p].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(t){var e=this;return E(di(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof Fe}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof Fe,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(di(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(d){return d instanceof Fe}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(d,p){h[p]=function(){return d}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){switch(o.label){case 0:return e=Ut(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Ut()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new tu,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(Ma==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Ma=e}return Ma}();if(r._tfengine==null){var t=new Kd(r);r._tfengine=new fp(t)}return function(e){ic=e}(r._tfengine.ENV),Ht=function(){return r._tfengine},r._tfengine}();function yc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var rn=M();rn.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),rn.registerFlag("IS_BROWSER",function(){return yc()}),rn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),rn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),rn.registerFlag("PROD",function(){return!1}),rn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return rn.getBool("DEBUG")}),rn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),rn.registerFlag("IS_TEST",function(){return!1});var Lr,yt,gt,Fn={},Oa={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function vp(r,t){Fn[r]=t}function Jt(r){r in Fn||(Fn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Fn[e]},!1),e===1?n.getContext("webgl",Oa)||n.getContext("experimental-webgl",Oa):n.getContext("webgl2",Oa)}(r));var t=Fn[r];return t.isContextLost()?(delete Fn[r],Jt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Fn[r])}function Zo(r,t){return[t,r]}function Nr(r){var t=Y(r);return hi(Math.ceil(t/4))}function Kr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function Oi(r,t){var e,n,o,a,i,s,u,c,l,h=r;return M().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+xp(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(Lr||(Lr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(yt||(yt={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(gt||(gt={}));var mp=596e-10,gp=65504;function yp(r){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||mp<Math.abs(r)&&Math.abs(r)<gp)}function xp(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function oo(r,t,e){return hn(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function bp(r,t,e){var n=hn(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function wp(r,t,e){var n=hn(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=_p.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return ir((g+1).toString(),c)+v}),h=0,d=0;d<l.length;d++)h=Math.max(l[d].length,h);var p=l.slice(0,s-1),f=l.slice(s-1,s),m=l.slice(s);console.log(p.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+ir(f[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Ba,La,_p=/ERROR: [0-9]+:([0-9]+):/g;function Cp(r,t){return hn(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Ep(r,t,e){if(J(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Wa(r,t,e){if(J(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Ip(r,t,e){var n=hn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Rp(r,t,e){var n=hn(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function kp(r,t){return hn(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Sp(r,t){var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Dp(r,t){return hn(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function nu(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),J(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function Ap(r,t,e,n){Mp(r,n),J(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Tp(r,t,e,n){return hn(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Np(r,t,e){return r.getUniformLocation(t,e)}function Fp(r,t,e,n,o,a){J(r,t,function(){return Ap(r,t,n,a)}),J(r,t,function(){return r.uniform1i(o,a)})}function Va(r,t,e,n){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function ru(r,t,e){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function ao(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Pp(r,t))}function Pp(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function hn(r,t,e,n){var o=J(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Mp(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Ao(r,t){return t===void 0&&(t=2),Y(r.slice(0,r.length-t))}function To(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function za(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Ao(r)].concat(To(r))),t}function Op(r,t){var e;t===void 0&&(t=!1);var n=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?lc(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=On(r);r=o.newShape}var a=Y(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=Ao(r),s=2,u=2;return r.length&&(s=(e=To(r))[0],u=e[1]),hi(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return hi(a)}function io(r){return r%2==0}function so(r,t){if(Xe(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||io(e)&&io(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&io(r[0])&&io(t[0])}function Bp(r){if(Ba==null){var t=Jt(r);Ba=t.getParameter(t.MAX_TEXTURE_SIZE)}return Ba}function Lp(r){if(La==null){var t=Jt(r);La=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,La)}function Wp(r){if(r===0)return 0;var t=Jt(r);return It(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:It(t,"EXT_disjoint_timer_query")?1:0}function It(r,t){return r.getExtension(t)!=null}function ou(r){try{if(Jt(r)!=null)return!0}catch{return!1}return!1}function Vp(r){if(r===0)return!1;var t=Jt(r);if(r===1){if(!It(t,"OES_texture_float"))return!1}else if(!It(t,"EXT_color_buffer_float"))return!1;return yi(t)}function zp(r){if(r===0)return!1;var t=Jt(r);if(r!==1){if(It(t,"EXT_color_buffer_float"))return yi(t);if(It(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=Oi(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!It(t,"OES_texture_float")&&!!It(t,"WEBGL_color_buffer_float")&&yi(t)}function yi(r){var t=Oi(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Up(r){return r===2&&Jt(r).fenceSync!=null}var oe=M();function xc(r){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return T.tidy(r,t)}function dt(r){gc(r).forEach(function(t){return t.dispose()})}function Hp(r){return T.keep(r)}function No(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,r)}function Dn(r,t){var e=r;if($t(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||$t(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!$t(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function au(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Fe)return au(n,r.dtype,t,e),r;var o=jr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),au(n,o,t,e),r==null||!$t(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=Dn(r,o);$t(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?dc(r,o,M().getBool("DEBUG")):fr(r,[],!0);return T.makeTensor(s,i,o)}function Fo(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,t+"["+a+"]",e)},n)}function bc(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Gp(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function tt(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function pt(r,t){return Gp(r,t.map(function(e){return 1}),t)}function mt(r,t,e){E(bc(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Qt(r,t){if(bc(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Bi(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Zt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function qp(r,t){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function mr(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}oe.registerFlag("HAS_WEBGL",function(){return oe.getNumber("WEBGL_VERSION")>0}),oe.registerFlag("WEBGL_VERSION",function(){return ou(2)?2:ou(1)?1:0}),oe.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return oe.get("WEBGL_VERSION")===2}),oe.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),oe.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),oe.registerFlag("WEBGL_PACK",function(){return oe.getBool("HAS_WEBGL")}),oe.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_CLIP",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),oe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_PACK_REDUCE",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_LAZILY_UNPACK",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_CONV_IM2COL",function(){return oe.getBool("WEBGL_PACK")}),oe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Bp(oe.getNumber("WEBGL_VERSION"))}),oe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Lp(oe.getNumber("WEBGL_VERSION"))}),oe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=oe.getNumber("WEBGL_VERSION");return r===0?0:Wp(r)}),oe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return oe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),oe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Vp(oe.getNumber("WEBGL_VERSION"))}),oe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!oe.getBool("WEBGL_FORCE_F16_TEXTURES")&&oe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),oe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return zp(oe.getNumber("WEBGL_VERSION"))}),oe.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Up(oe.getNumber("WEBGL_VERSION"))}),oe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return oe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),mc=xc;var Qe=D({complex_:function(r,t){var e=C(r,"real","complex"),n=C(t,"imag","complex");return Ce(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),Et=D({real_:function(r){var t=C(r,"input","real");return T.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Gt=D({imag_:function(r){var t=C(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function et(r,t,e){return An(r,t,Dn(r,e),e)}function An(r,t,e,n){if(n==null&&(n=jr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!$t(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){fc(t);var o=Y(t),a=Y(e);E(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Y(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return $t(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?dc(r,n,M().getBool("DEBUG")):fr(r,[],!0),T.makeTensor(r,t,n)}function q(r,t){if(($t(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&$t(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return An(r,[],[],t)}function ze(r,t){br(r);var e=Dn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return An(r,null,e,t)}function In(r,t,e){if(br(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=Dn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return An(r,t,n,e)}function Li(r,t,e){if(br(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=Dn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return An(r,t,n,e)}function lt(r,t,e){if(br(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=Dn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return An(r,t,n,e)}function jp(r,t,e){if(br(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=Dn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return An(r,t,n,e)}function $p(r,t,e){if(br(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=Dn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return An(r,t=t||n,n,e)}function Kp(r,t,e,n){return t===void 0&&(t=!0),T.makeVariable(r,t,e,n)}function wr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=wr(r,"float32"),n=De(r,"float32");return Qe(e,n)}var o=pc(Y(r),t);return T.makeTensor(o,r,t)}function De(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=De(r,"float32"),n=De(r,"float32");return Qe(e,n)}var o=$r(Y(r),t);return T.makeTensor(o,r,t)}function Xt(r,t,e){return T.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function Xp(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function Po(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return De([0],n);var o=$r(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return ze(o,n)}var wc=D({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var e=wc(Et(t)),n=be(Gt(t));return Qe(e,n)}return T.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return be(o)}}})}}),be=D({zerosLike_:function(r){var t=C(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return be(e)}}})}}),He=D({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=Fo(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=$e(t,e[0].shape)[0];var n=mr(e.map(function(s){return s.shape}),t);if(Y(n)===0)return et([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});qp(o,t);var a=e,i={axis:t};return T.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return Wi(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),Yp=D({concat1d_:function(r){return He(r,0)}}),Jp=D({concat2d_:function(r,t){return He(r,t)}}),Qp=D({concat3d_:function(r,t){return He(r,t)}}),Zp=D({concat4d_:function(r,t){return He(r,t)}}),Wi=D({split_:function(r,t,e){e===void 0&&(e=0);var n,o=C(r,"x","split");return e=$e(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),T.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return He(a,e)}}})}});function Hn(r,t){return r(t={exports:{}},t.exports),t.exports}var ef=Hn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var d=0;d<h.length;d++){var p=.02519603282416938*(u+=h.charCodeAt(d));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),tf=Hn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),nf=Hn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),rf=Hn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,d=u.i;return c=h[d],l=(c^=c>>>7)^c<<24,l^=(c=h[d+1&7])^c>>>10,l^=(c=h[d+3&7])^c>>>3,l^=(c=h[d+4&7])^c<<7,c=h[d+7&7],l^=(c^=c<<13)^c<<9,h[d]=l,u.i=d+1&7,l},function(c,l){var h,d=[];if(l===(0|l))d[0]=l;else for(l=""+l,h=0;h<l.length;++h)d[7&h]=d[7&h]<<15^l.charCodeAt(h)+d[h+1&7]<<13;for(;d.length<8;)d.push(0);for(h=0;h<8&&d[h]===0;++h);for(h==8?d[7]=-1:d[h],c.x=d,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),of=Hn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,d=u.X,p=u.i;return u.w=h=h+1640531527|0,l=d[p+34&127],c=d[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=d[p]=l^c,u.i=p,l+(h^h>>>16)|0},function(c,l){var h,d,p,f,m,v=[],g=128;for(l===(0|l)?(d=l,l=null):(l+="\0",d=0,g=Math.max(g,l.length)),p=0,f=-32;f<g;++f)l&&(d^=l.charCodeAt((f+32)%l.length)),f===0&&(m=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,f>=0&&(m=m+1640531527|0,p=(h=v[127&f]^=d+m)==0?p+1:0);for(p>=128&&(v[127&(l&&l.length||0)]=-1),p=127,f=512;f>0;--f)d=v[p+34&127],h=v[p=p+1&127],d^=d<<13,h^=h<<17,d^=d>>>15,h^=h>>>12,v[p]=d^h;c.w=m,c.X=v,c.i=p}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),af=Hn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,d=u.c,p=u.d,f=u.a;return h=h<<25^h>>>7^d,d=d-p|0,p=p<<24^p>>>8^f,f=f-h|0,u.b=h=h<<20^h>>>12^d,u.c=d=d-p|0,u.d=p<<16^d>>>16^f,u.a=f-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),Pn=Hn(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,h=a-1;function d(g,x,w){var y=[],b=m(function k(I,R){var N,A=[],L=typeof I;if(R&&L=="object")for(N in I)try{A.push(k(I[N],R-1))}catch{}return A.length?A:L=="string"?I:I+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g??function(){try{var k;return n&&(k=n.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),v(k)}catch{var I=o.navigator,R=I&&I.plugins;return[+new Date,o,R,o.screen,v(t)]}}(),3),y),_=new p(y),S=function(){for(var k=_.g(i),I=u,R=0;k<c;)k=(k+R)*a,I*=a,R=_.g(1);for(;k>=l;)k/=2,I/=2,R>>>=1;return(k+R)/I};return S.int32=function(){return 0|_.g(4)},S.quick=function(){return _.g(4)/4294967296},S.double=S,m(v(_.S),t),(x.pass||w||function(k,I,R,N){return N&&(N.S&&f(N,_),k.state=function(){return f(_,{})}),R?(e[s]=k,I):k})(S,b,"global"in x?x.global:this==e,x.state)}function p(g){var x,w=g.length,y=this,b=0,_=y.i=y.j=0,S=y.S=[];for(w||(g=[w++]);b<a;)S[b]=b++;for(b=0;b<a;b++)S[b]=S[_=h&_+g[b%w]+(x=S[b])],S[_]=x;(y.g=function(k){for(var I,R=0,N=y.i,A=y.j,L=y.S;k--;)I=L[N=h&N+1],R=R*a+L[h&(L[N]=L[A=h&A+I])+(L[A]=I)];return y.i=N,y.j=A,R})(a)}function f(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var w,y=g+"",b=0;b<y.length;)x[h&b]=h&(w^=19*x[h&b])+y.charCodeAt(b++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=d,m(e.random(),t),r.exports){r.exports=d;try{n=require("crypto")}catch{}}})([],Math)});Pn.alea=ef,Pn.xor128=tf,Pn.xorwow=nf,Pn.xorshift7=rf,Pn.xor4096=of,Pn.tychei=af;var ea=Pn.alea,Vi=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=ea(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),sf=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=ea(a.toString()),this.randn=new Vi(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),uf=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=ea(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function se(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",fc(r),new Br(r,t,e)}function cf(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var _c=D({batchToSpaceND_:function(r,t,e){var n=C(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),lf=D({broadcastTo_:function(r,t){var e=C(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),hf=D({cast_:function(r,t){var e=C(r,"x","cast");if(!np(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return T.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),df=D({clone_:function(r){var t=C(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),pf=D({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),a=Qt([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Zt(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),ff=D({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=C(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),Ct=D({expandDims_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Dt(e,n)}}),Cc=D({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=se([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return sr(Ct(s,0),[e[0],1,1]);if(e.length===2)return sr(Ct(Ct(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return sr(Ct(Ct(Ct(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),vf=D({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),xi=D({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return De(o.shape,"float32")}}}).reshape(a)}}),Gn=D({pad_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return T.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),mf=D({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Gn(r,[t],e)}}),gf=D({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Gn(r,t,e)}}),yf=D({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Gn(r,t,e)}}),xf=D({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Gn(r,t,e)}}),bf=D({rand_:function(r,t,e){var n=Y(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return T.makeTensor(o,r,e)}}),wf=D({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Vi(t,e,n,!1,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),_f=D({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new sf(t,e,n,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ec=D({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=se(r,n),i=new uf(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Dt=D({reshape_:function(r,t){var e=C(r,"x","reshape",null);t=ep(t,e.size),E(e.size===Y(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return T.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Ic=D({spaceToBatchND_:function(r,t,e){var n=C(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Rc=D({squeeze_:function(r,t){var e=C(r,"x","squeeze");return Dt(e,On(e.shape,t).newShape)}}),_t=D({stack_:function(r,t){t===void 0&&(t=0);var e=Fo(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Ce(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return He(i,t)}}),sr=D({tile_:function(r,t){var e=C(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return T.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=be(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var d=0;d<t[3];++d)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],d*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Cf=D({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Vi(t,e,n,!0,o),i=se(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ge=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=C(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return T.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return _t(o,t)}}},"Unpack",n)}}),Ef=function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h;return X(this,function(d){switch(d.label){case 0:return e=C(r,"x","setdiff1d"),n=C(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=d.sent(),[4,n.data()];case 2:for(a=d.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new Br([s],e.dtype),c=new Br([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Mo(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Oo(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Bo(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function kc(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Sc(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function Dc(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Kt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var Ac=30;function Ua(r){return r<=Ac?r:pi(r,Math.floor(Math.sqrt(r)))}function If(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Rf(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}If(e,t,r)}function Lo(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(t.shape)/u,sliceSize:i,strides:Kt(e.slice(0,o)).concat([1]),outputSize:Y(e)}}function kf(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function iu(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function zi(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Sf(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=li(0,a,s-1)}function Df(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?li(0,a,s):li(-1,a,s-1)}function Tc(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function Nc(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Af(r,t){E(di(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof vr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],T.registeredVariables)t.push(T.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ta(r){return T.customGrad(r)}var dn=D({softmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return T.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),Tf=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ta(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Fc=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Pc=function(){function r(){}return r.prototype.time=function(t){return F("time")},r.prototype.read=function(t){return F("read")},r.prototype.readSync=function(t){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(t){return F("disposeData")},r.prototype.write=function(t,e,n){return F("write")},r.prototype.move=function(t,e,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return F("slice")},r.prototype.stridedSlice=function(t,e,n,o){return F("stridedSlice")},r.prototype.unstack=function(t,e){return F("unstack")},r.prototype.reverse=function(t,e){return F("reverse")},r.prototype.concat=function(t,e){return F("concat")},r.prototype.neg=function(t){return F("neg")},r.prototype.add=function(t,e){return F("add")},r.prototype.addN=function(t){return F("addN")},r.prototype.subtract=function(t,e){return F("subtract")},r.prototype.multiply=function(t,e){return F("multiply")},r.prototype.realDivide=function(t,e){return F("realDivide")},r.prototype.floorDiv=function(t,e){return F("floorDiv")},r.prototype.sum=function(t,e){return F("sum")},r.prototype.prod=function(t,e){return F("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return F("argMin")},r.prototype.argMax=function(t,e){return F("argMax")},r.prototype.equal=function(t,e){return F("equal")},r.prototype.notEqual=function(t,e){return F("notEqual")},r.prototype.less=function(t,e){return F("less")},r.prototype.lessEqual=function(t,e){return F("lessEqual")},r.prototype.greater=function(t,e){return F("greater")},r.prototype.greaterEqual=function(t,e){return F("greaterEqual")},r.prototype.logicalNot=function(t){return F("logicalNot")},r.prototype.logicalAnd=function(t,e){return F("logicalAnd")},r.prototype.logicalOr=function(t,e){return F("logicalOr")},r.prototype.where=function(t){return F("where")},r.prototype.select=function(t,e,n){return F("select")},r.prototype.topk=function(t,e,n){return F("topk")},r.prototype.min=function(t,e){return F("min")},r.prototype.minimum=function(t,e){return F("minimum")},r.prototype.mod=function(t,e){return F("mod")},r.prototype.max=function(t,e){return F("max")},r.prototype.maximum=function(t,e){return F("maximum")},r.prototype.all=function(t,e){return F("all")},r.prototype.any=function(t,e){return F("any")},r.prototype.squaredDifference=function(t,e){return F("squaredDifference")},r.prototype.ceil=function(t){return F("ceil")},r.prototype.floor=function(t){return F("floor")},r.prototype.round=function(t){return F("round")},r.prototype.sign=function(t){return F("sign")},r.prototype.isNaN=function(t){return F("isNaN")},r.prototype.isInf=function(t){return F("isInf")},r.prototype.isFinite=function(t){return F("isFinite")},r.prototype.pow=function(t,e){return F("pow")},r.prototype.exp=function(t){return F("exp")},r.prototype.expm1=function(t){return F("expm1")},r.prototype.softmax=function(t,e){return F("softmax")},r.prototype.log=function(t){return F("log")},r.prototype.log1p=function(t){return F("log1p")},r.prototype.sqrt=function(t){return F("sqrt")},r.prototype.rsqrt=function(t){return F("rsqrt")},r.prototype.square=function(t){return F("square")},r.prototype.reciprocal=function(t){return F("reciprocal")},r.prototype.relu=function(t){return F("relu")},r.prototype.relu6=function(t){return F("relu6")},r.prototype.prelu=function(t,e){return F("prelu")},r.prototype.elu=function(t){return F("elu")},r.prototype.eluDer=function(t,e){return F("eluDer")},r.prototype.selu=function(t){return F("selu")},r.prototype.int=function(t){return F("int")},r.prototype.clip=function(t,e,n){return F("clip")},r.prototype.abs=function(t){return F("abs")},r.prototype.complexAbs=function(t){return F("complexAbs")},r.prototype.sigmoid=function(t){return F("sigmoid")},r.prototype.softplus=function(t){return F("softplus")},r.prototype.sin=function(t){return F("sin")},r.prototype.cos=function(t){return F("cos")},r.prototype.tan=function(t){return F("tan")},r.prototype.asin=function(t){return F("asin")},r.prototype.acos=function(t){return F("acos")},r.prototype.atan=function(t){return F("atan")},r.prototype.atan2=function(t,e){return F("atan2")},r.prototype.sinh=function(t){return F("sinh")},r.prototype.cosh=function(t){return F("cosh")},r.prototype.tanh=function(t){return F("tanh")},r.prototype.asinh=function(t){return F("asinh")},r.prototype.acosh=function(t){return F("acosh")},r.prototype.atanh=function(t){return F("atanh")},r.prototype.erf=function(t){return F("erf")},r.prototype.step=function(t,e){return F("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return F("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return F("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return F("reshape")},r.prototype.cast=function(t,e){return F("cast")},r.prototype.tile=function(t,e){return F("tile")},r.prototype.pad=function(t,e,n){return F("pad")},r.prototype.transpose=function(t,e){return F("transpose")},r.prototype.gather=function(t,e,n){return F("gather")},r.prototype.gatherND=function(t,e){return F("gatherND")},r.prototype.scatterND=function(t,e,n){return F("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return F("multinomial")},r.prototype.oneHot=function(t,e,n,o){return F("oneHot")},r.prototype.cumsum=function(t,e,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(t){return F("fft")},r.prototype.ifft=function(t){return F("ifft")},r.prototype.complex=function(t,e){return F("complex")},r.prototype.real=function(t){return F("real")},r.prototype.imag=function(t){return F("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return F("depthToSpace")},r.prototype.split=function(t,e,n){return F("split")},r.prototype.sparseToDense=function(t,e,n,o){return F("sparseToDense")},r.prototype.diag=function(t){return F("diag")},r.prototype.fill=function(t,e,n){return F("fill")},r.prototype.onesLike=function(t){return F("onesLike")},r.prototype.zerosLike=function(t){return F("zerosLike")},r.prototype.linspace=function(t,e,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function _n(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function qe(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function pe(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function Wr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=zo(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return qn(r,s,e,n,o,a,!1,i)}function Wo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=bi(t),l=c[0],h=c[1],d=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,d,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,d,r[1],r[1]]}return Vo(r,s,e,n,o,!1,u,a)}function qn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],d=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],d=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],d=r[1],l=r[2],h=r[3]}var p,f=t[0],m=t[1],v=t[3],g=zo(e),x=g[0],w=g[1],y=zo(n),b=y[0],_=y[1],S=ur(f,b),k=ur(m,_),I=function(O,B,z,V,W,H,G,j){var ee,ne,ce;if(typeof O=="number"){ee={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var le=function(me,Ee,we,Oe,Te){Oe==null&&(Oe=Mc(me,Ee,we));var Ne=me[0],Pt=me[1],Mt=Fr((Ne-Ee+2*Oe)/we+1,Te);E(Le(Mt),function(){return"The output # of rows ("+Mt+") must be an integer. Change the stride and/or zero pad parameters"});var vt=Fr((Pt-Ee+2*Oe)/we+1,Te);return E(Le(vt),function(){return"The output # of columns ("+vt+") must be an integer. Change the stride and/or zero pad parameters"}),[Mt,vt]}([B,z],H,V,O,j);ne=le[0],ce=le[1]}else if(O==="same"){ne=Math.ceil(B/V),ce=Math.ceil(z/W);var de=Math.max(0,(ne-1)*V+H-B),ge=Math.max(0,(ce-1)*W+G-z),ve=Math.floor(de/2),ye=de-ve,We=Math.floor(ge/2);ee={top:ve,bottom:ye,left:We,right:ge-We,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},ne=Math.ceil((B-H+1)/V),ce=Math.ceil((z-G+1)/W)}return{padInfo:ee,outHeight:ne,outWidth:ce}}(o,l,h,x,w,S,k,a),R=I.padInfo,N=I.outHeight,A=I.outWidth,L=i?v*d:v;return s==="channelsFirst"?p=[c,L,N,A]:s==="channelsLast"&&(p=[c,N,A,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:d,outHeight:N,outWidth:A,outChannels:L,padInfo:R,strideHeight:x,strideWidth:w,filterHeight:f,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:b,dilationWidth:_,inShape:r,outShape:p,filterShape:t}}function Vo(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],d=u[3],p=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],d=r[3],p=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],p=r[1],l=r[2],h=r[3],d=r[4]}var f,m=t[0],v=t[1],g=t[2],x=t[4],w=bi(e),y=w[0],b=w[1],_=w[2],S=bi(n),k=S[0],I=S[1],R=S[2],N=ur(m,k),A=ur(v,I),L=ur(g,R),O=function(G,j,ee,ne,ce,le,de,ge,ve,ye,We){var me,Ee,we,Oe;if(typeof G=="number"){me={top:G,bottom:G,left:G,right:G,front:G,back:G,type:G===0?"VALID":"NUMBER"};var Te=function(Xn,nn,ma,Yn,Ot,ga){Ot==null&&(Ot=Mc(Xn,nn,Yn));var Sh=Xn[0],Dh=Xn[1],Ah=Xn[2],ya=Fr((Sh-nn+2*Ot)/Yn+1,ga);E(Le(ya),function(){return"The output # of depths ("+ya+") must be an integer. Change the stride and/or zero pad parameters"});var xa=Fr((Dh-nn+2*Ot)/Yn+1,ga);E(Le(xa),function(){return"The output # of rows ("+xa+") must be an integer. Change the stride and/or zero pad parameters"});var ba=Fr((Ah-nn+2*Ot)/Yn+1,ga);return E(Le(ba),function(){return"The output # of columns ("+ba+") must be an integer. Change the stride and/or zero pad parameters"}),[ya,xa,ba,ma]}([j,ee,ne,1],ge,1,ce,G,We);Ee=Te[0],we=Te[1],Oe=Te[2]}else if(G==="same"){Ee=Math.ceil(j/ce),we=Math.ceil(ee/le),Oe=Math.ceil(ne/de);var Ne=(Ee-1)*ce+ge-j,Pt=(we-1)*le+ve-ee,Mt=(Oe-1)*de+ye-ne,vt=Math.floor(Ne/2),Kn=Ne-vt,en=Math.floor(Pt/2),gn=Pt-en,tn=Math.floor(Mt/2);me={top:en,bottom:gn,left:tn,right:Mt-tn,front:vt,back:Kn,type:"SAME"}}else{if(G!=="valid")throw Error("Unknown padding parameter: "+G);me={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Ee=Math.ceil((j-ge+1)/ce),we=Math.ceil((ee-ve+1)/le),Oe=Math.ceil((ne-ye+1)/de)}return{padInfo:me,outDepth:Ee,outHeight:we,outWidth:Oe}}(o,l,h,d,y,b,_,N,A,L,s),B=O.padInfo,z=O.outDepth,V=O.outHeight,W=O.outWidth,H=a?x*p:x;return i==="channelsFirst"?f=[c,H,z,V,W]:i==="channelsLast"&&(f=[c,z,V,W,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:d,inChannels:p,outDepth:z,outHeight:V,outWidth:W,outChannels:H,padInfo:B,strideDepth:y,strideHeight:b,strideWidth:_,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:N,effectiveFilterHeight:A,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:I,dilationWidth:R,inShape:r,outShape:f,filterShape:t}}function Mc(r,t,e,n){n===void 0&&(n=1);var o=ur(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function zo(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function bi(r){return typeof r=="number"?[r,r,r]:r}function ur(r,t){return t<=1?r:r+(r-1)*(t-1)}function Fr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function gr(r){var t=zo(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function ft(r,t){return gr(r)||gr(t)}function Ui(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function Oc(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=De(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!rp(r.dtype,t))return T.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=q(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function wi(r,t){return T.makeTensorFromDataId(r.dataId,t,r.dtype)}function Bc(r,t,e){var n=(t-r)/(e-1),o=$r(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return ze(o,"float32")}function _i(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function su(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Nf(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Ff(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Pf(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var h=0,d=u.length,p=0,f=!1;h<d;){var m=l(c,u[p=h+(d-h>>>1)]);m>0?h=p+1:(d=p,f=!m)}return f?h:-h-1}(a,i,s||Mf)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Mf(r,t){return r>t?1:r<t?-1:0}function Hi(r,t,e,n,o){return Lc(r,t,e,n,o,0).selectedIndices}function Gi(r,t,e,n,o,a){var i=Lc(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Lc(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,b){return{score:y,boxIndex:b,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(uu),c=a>0?-.5/a:0,l=[],h=[];l.length<e&&u.length>0;){var d=u.pop(),p=d.score,f=d.boxIndex,m=d.suppressBeginIndex;if(p<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Of(r,f,l[g]);if(x>=n){v=!0;break}if(d.score=d.score*Bf(n,c,x),d.score<=o)break}d.suppressBeginIndex=l.length,v||(d.score===p?(l.push(f),h.push(d.score)):d.score>o&&Pf(u,d,uu))}var w=l.length;return s&&(l.fill(0,w),h.fill(0,w)),{selectedIndices:ze(l,"int32"),selectedScores:ze(h,"float32"),numValidOutputs:q(w,"int32")}}function Of(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(s-a)*(u-i),f=(h-c)*(d-l);if(p<=0||f<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,h),x=Math.min(u,d),w=Math.max(g-m,0)*Math.max(x-v,0);return w/(p+f-w)}function Bf(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function uu(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function Wc(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function Vc(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=se(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function zc(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Or(e,s*n),l=Or("int32",s*n),h=0;h<s;h++){for(var d=h*u,p=r.subarray(d,d+u),f=[],m=0;m<p.length;m++)f.push({value:p[m],index:m});f.sort(function(y,b){return b.value-y.value});var v=h*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=f[m].value,x[m]=f[m].index}var w=t.slice();return w[w.length-1]=n,[et(c,w,e),et(l,w,"int32")]}function qi(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=se(r,"int32"),a=se([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var Lf=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Wf=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Vf=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Uc(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function ht(r,t){return t===1?[r]:Uc(r,t)}function ot(){var r,t,e,n,o,a,i,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Bn(r,t,e){e===void 0&&(e="index");var n=Kt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function ji(r){var t=Kt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Hc=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function zf(r,t,e,n){var o=[];r.forEach(function(p){var f=Y(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(f>1?"["+f+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(p){return function(f,m,v){v===void 0&&(v=!1);var g="";g+=v?Gc(f):nr(f);var x=f.shapeInfo.logicalShape,w=m.logicalShape;return x.length<=w.length&&(g+=v?function(y,b){var _,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),I="get"+k+"AtOutCoords",R=y.shapeInfo.logicalShape.length,N=b.logicalShape.length,A=_n(y.shapeInfo.logicalShape,b.logicalShape),L=Re(N),O=N-R,B=["x","y","z","w","u","v"];_=R===0?"":N<2&&A.length>=1?"coords = 0;":A.map(function(ee){return"coords."+B[ee+O]+" = 0;"}).join(`
`);var z="";z=N<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(ee,ne){return"coords."+B[ne+O]}).join(", ");var V="return outputValue;",W=Y(y.shapeInfo.logicalShape)===1,H=Y(b.logicalShape)===1;if(R!==1||W||H){if(W&&!H)V=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var G=R-2,j=R-1;A.indexOf(G)>-1&&A.indexOf(j)>-1?V="return vec4(outputValue.x);":A.indexOf(G)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(j)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+L+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+k+"("+z+`);
      `+V+`
    }
  `}(f,m):function(y,b){var _=y.name,S=_.charAt(0).toUpperCase()+_.slice(1),k="get"+S+"AtOutCoords",I=b.texShape,R=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,A=b.logicalShape.length;if(!y.shapeInfo.isUniform&&N===A&&y.shapeInfo.flatOffset==null&&Xe(R,I))return`
      float `+k+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var L,O=Re(A),B=_n(y.shapeInfo.logicalShape,b.logicalShape),z=A-N,V=["x","y","z","w","u","v"];L=N===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(H){return"coords."+V[H+z]+" = 0;"}).join(`
`);var W="";return W=A<2&&N>0?"coords":y.shapeInfo.logicalShape.map(function(H,G){return"coords."+V[G+z]}).join(", "),`
    float `+k+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+S+"("+W+`);
    }
  `}(f,m)),g}(p,t,n)}).join(`
`),c=t.texShape,l=ot(),h=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),d=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Uf+`
    `+Hf+`
    `+Gf+`
  `}(l);return t.isPacked?(a=function(p,f){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,b){var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,f);case 2:return function(y,b){var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];if(Xe(y,b))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(p,f);case 3:return m=p,v=f,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),w=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+w+`;
      index -= b * `+w+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,b){for(var _=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),I=k,R="",N="b, r, c",A=2;A<y.length-1;A++)I*=y[y.length-A-1],R=`
      int b`+A+" = index / "+I+`;
      index -= b`+A+" * "+I+`;
    `+R,N="b"+A+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `}(p,f)}var m,v,g,x,w}(t.logicalShape,c),i=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(a=function(p,f){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,f);case 2:return function(g,x){return Xe(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,f);case 3:return m=f,v=Bn(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var w=Bn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+w+`
      return ivec4(r, c, d, d2);
    }
  `}(p,f);case 5:return function(g,x){var w=Bn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+w+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,f);case 6:return function(g,x){var w=Bn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+w+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,f);default:throw new Error(p.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(d+=qf),[d,h,i,s,a,u,e].join(`
`)}function nr(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=Nn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Qn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Nn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Xe(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=On(n),l=c.newShape,h=c.keptDims,d=l;if(d.length<n.length){var p=rr(e,d);return`
      `+nr(p)+`
      float `+a+`(int row, int col) {
        return `+a+"("+or(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Qn(e)+`
      }
    `;var f=i[0],m=i[1],v=Nn(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+f+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:f===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+f+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=On(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var d=rr(e,h);return`
        `+nr(d)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+or(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Qn(e)+`
      }
    `;var p=e.shapeInfo.texShape,f=p[0],m=p[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+f+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+f+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Nn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+f+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=On(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var d=rr(e,l);return`
      `+nr(d)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+or(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Qn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,m=f[0],v=f[1];if(v===u&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Nn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=On(n),h=l.newShape,d=l.keptDims;if(h.length<n.length){var p=rr(e,h);return`
      `+nr(p)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+or(["row","col","depth","depth2","depth3"],d)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Qn(e)+`
      }
    `;var f=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&f==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Nn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=On(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=rr(e,s);return`
      `+nr(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+or(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,d=n[3]*h,p=n[2]*d,f=n[1]*p;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+f+", "+p+", "+d+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Qn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===f&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+d+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var w=Nn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+f+" + col * "+p+" + depth * "+d+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+w+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Gc(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=ot(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=ot();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=ot();if(u!=null&&Xe(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var d=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+d[0]+", "+d[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=rr(o,l);return`
        `+Gc(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+or(["b","row","col"],[1,2])+`);
        }
      `}var d=c[0],p=c[1],f=Math.ceil(a[2]/2),m=f*Math.ceil(a[1]/2),v=ot();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+d+", "+p+", "+m+", "+f+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],d=l[1],p=Math.ceil(a[i-1]/2),f=p*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+f+" + (row / 2) * "+p+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,f*=a[i-g-1],v="b"+g+" * "+f+" + "+v;var x=ot();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+d+`;
      int texC = index - texR * `+d+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+d+", "+h+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Uf=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Hf=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Gf=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,qf=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Nn(r){return"offset"+r}function Qn(r){var t=r.name,e=Y(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Re(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function rr(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function or(r,t){return t.map(function(e){return r[e]}).join(", ")}var jf=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Re(c),h=ht("coords",c);if(a===1){var d=Re(s=c+1);i=`
        `+d+" sourceLocR = "+d+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+d+" sourceLocG = "+d+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+d+" sourceLocA = "+d+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+d+" sourceLocB = "+d+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),f="."+p[s-1],m=p.map(function(k){return"int "+k}),v=ht("sourceLocR",s-1).concat("inIdx.r"),g=ht("sourceLocG",s-1).concat("inIdx.g"),x=ht("sourceLocB",s-1).concat("inIdx.b"),w=ht("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",b=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+w.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+w.join()+") : 0.)",S=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+f+", sourceLocG"+f+`,
          sourceLocB`+f+", sourceLocA"+f+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+b+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},$f=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},Kf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=l-1-r.padInfo.front,f=h-1-r.padInfo.top,m=d-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+f+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+d+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Xf=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],pe(r,t),pe(r,e);var i="0.0";n!=null&&(pe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(pe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},Yf=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],pe(r,t),pe(r,e);var i="vec4(0.0)";n!=null&&(pe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(pe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},Jf="return areal * breal - aimag * bimag;",Qf="return areal * bimag + aimag * breal;",cu=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=pe(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ha="return a + b;",Ga="return a - b;",lu="return a * b;",qc="return (a < 0.) ? b * a : a;",Be=function(r,t,e){this.variableNames=["A","B"],this.outputShape=pe(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},jc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,on=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=pe(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||Y(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+Re(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=ht("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},Zf=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),ev=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),tv=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},nv=function(r){this.outputShape=[],this.outputShape=mr(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},rv=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=mr(r,t);var e=this.outputShape,n=e.length,o=Re(n),a=ht("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),h=i.join(),d="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];d+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+uo(i,c,p)+`),
            vec2(`+uo(l,c,p)+`));
        }`}var f=s.length,m=s[s.length-1];d+=`
        return getChannel(
          getT`+f+"("+uo(i,c,m)+`),
          vec2(`+uo(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+d+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function uo(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var ov=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},av=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},iv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},sv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},uv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},cv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},hu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4,f=r.dataFormat==="channelsLast",m=f?1:2,v=f?2:3,g=f?3:1,x="",w="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,w="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+d+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+f+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+f+`) {
                dotProd +=
                    getX(batch, xR, xC, `+d+`) *
                    getW(wR, wC, `+d+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+d+`, xR, xC) *
                    getW(wR, wC, `+d+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2)
              );

              if (`+f+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2),
                getW(wR, wC, `+d+` + 2, d2)
              );

              if (`+f+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1),
                  getX(batch, xR, xC, `+d+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC),
                  getX(batch, `+d+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+w+`
        setOutput(result);
      }
    `},lv=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,d=r.filterWidth,p=4*Math.floor(r.inChannels/4),f=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+d+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(f===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(f===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(f===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},du=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,d=r.filterHeight,p=r.filterWidth,f=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+f+`;
        int q = d2 - d1 * `+f+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+d+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},pu=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,d=r.filterHeight,p=r.filterWidth,f=p,m="int xR; int xC; int xCOffset;",v=0;v<d;v++)for(var g=0;g<p;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<d;v++)for(var x=0;x<f;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*h+`;
        `,c===1){if(g<p&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<p)){var w=s%2==0?lc(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+w+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+w+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<p&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<p&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<p&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<p&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<p&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<d;v++)for(g=0;g<p;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",b="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,b="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+_+`
        `+b+`
        setOutput(result);
      }
    `},hv=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var d=n==="bilinear"?1:0,p=[i-1+".0",s-1+".0"],f=p[0],m=p[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+f+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+f],g=v[0],x=v[1],w=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],b=y[0],_=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+b+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+w+`;
        if( in_y < 0.0 || in_y > `+f+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+d+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},dv=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Re(n)+` coords = getOutputCoords();
        int end = `+fu(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+fu(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function fu(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var pv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Lr.DENSE;var t=Nr(r),e=ot();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Bn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},fv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Lr.DENSE;var t=Nr(r),e=ot();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Bn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},vv=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),mv=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},gv=function(r){this.variableNames=["A"],this.outTexUsage=yt.DOWNLOAD;var t=ot();this.outputShape=r,this.userCode=`
      `+Hc+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},yv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=yt.DOWNLOAD;var t=ot();this.outputShape=r,this.userCode=`
      `+Hc+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},xv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=ot(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+ji(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},bv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=ot(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+ji(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},wv="return real * expR - imag * expI;",_v="return real * expI + imag * expR;",vu=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Cv=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Ev=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=Re(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Iv=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Re(t.length),o=Re(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Rv(r,t){var e=ot();return bp(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function kv(r,t){return Ip(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Sv(r,t){return Rp(r,t,new Uint16Array([0,1,2,2,1,3]))}function Xr(r,t,e,n,o,a,i){Sp(e,n);var s=kp(r,t),u=r.TEXTURE_2D;return J(r,t,function(){return r.bindTexture(u,s)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Dv(r,t,e,n,o){var a=Zo(e,n);return Xr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Av(r,t,e,n,o){var a=Zo(e,n);return Xr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Tv(r,t,e,n,o){var a=Zo(e,n);return Xr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Nv(r,t,e,n,o){var a=Kr(e,n);return Xr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Fv(r,t,e,n,o){var a=Kr(e,n);return Xr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Pv(r,t,e,n){return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),nu(r,t,e,"clipSpacePos",n,3,20,0)&&nu(r,t,e,"uv",n,2,20,12)}function Mv(r,t,e,n,o,a,i){var s,u,c;J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Ov(r,t,e,n){J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Bv(r,t,e,n,o){var a=r.createBuffer();J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return J(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Lv(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Wv(r,t,e,n,o){var a=Zo(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Vv(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var d=Kr(l,h);return d[0]*d[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function zv(r,t,e,n){var o=new Float32Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var Uv=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,vp(e,t)):this.gl=Jt(e);var n="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=oo(this.gl,this.debug,"OES_texture_float"),It(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=oo(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),It(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=oo(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",It(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!It(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=kv(this.gl,this.debug),this.indexBuffer=Sv(this.gl,this.debug),this.framebuffer=Dp(this.gl,this.debug),this.textureConfig=Oi(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Dv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Av(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Tv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Ov(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),Mv(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Fv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Nv(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(ru(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return Wv(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Vv(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Lv(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Bv(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return zv(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=wp(e,this.debug,t),o=Rv(e,this.debug),a=Cp(e,this.debug);return J(e,this.debug,function(){return e.attachShader(a,o)}),J(e,this.debug,function(){return e.attachShader(a,n)}),Ep(e,this.debug,a),this.debug&&Wa(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Pv(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Wa(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Tp(this.gl,this.debug,t,e):Np(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Fp(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=Kr(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Wa(this.gl,this.debug,this.program),ao(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=oo(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){switch(n.label){case 0:return[4,Ys(function(){return e.disposed||e.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Ys(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Va(this.gl,this.debug,t,this.framebuffer),this.debug&&ao(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Va(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&ao(this.gl)):ru(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Va(o,this.debug,t,this.framebuffer),this.debug&&ao(o),this.outputTexture=t,J(o,this.debug,function(){return o.viewport(0,0,e,n)}),J(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function mu(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Xe(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Xe(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Hv=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,d=s.left,p=s.top,f=o*n,m=ot(),v=h==="channelsLast",g=v?0:1,x=v?1:2,w="",y=0;y<=1;y++)for(var b=0;b<=1;b++)w+=`
          blockIndex = rc.y + `+b+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+f+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+d+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+f+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+b)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+b)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+w+`

        `+m.output+` = result;
      }
    `},Gv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},qv=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},jv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},$v=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Kv=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,d=c-1-r.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+d+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},qa=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",f="";a&&(p=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,f="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+d[0]+`);
          result += (`+h[1]+" * "+d[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+f+`

        setOutput(result);
      }
    `},Xv=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Yv=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Jv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=ht("rc",t),n=Re(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(h,d){for(var p=[],f=0;f<=1;f++)for(var m=0;m<=1;m++){for(var v=(f===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<h;g++)v=d[d.length-1-g]+","+v;p.push(v)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},Qv=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=Re(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Zv=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=Re(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=ht("rc",n),u=ht("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],d=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",f=0,m=n===1?2:4;f<m;f++)p+=`
        `+h[f]+`
        if (`+d+`) {
          result[`+f+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+f+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},ja=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var d=t==="avg",p="0.0";if(d||(p="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var f=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(f="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+d+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+f+`);
      }
    `}},$a=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,f=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+p+", "+f+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+d+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+d+` +
                      wR * `+d+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var w=4*Math.floor(n/4),y=n%4,b=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+p+", "+f+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+w+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+b+`
            }

            int xC = xCCorner + `+w+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+b+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},em=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,d="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");var p="";o%e>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},tm=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Bn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+ji(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},nm=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],d=c[1]/l[1],p=1/h,f=1/d,m=2*Math.ceil(p)+2,v=2*Math.ceil(f)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+f+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},rm=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},om=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},am=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],d=c[1]/l[1],p=1/h,f=1/d,m=2*Math.ceil(p)+2,v=2*Math.ceil(f)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+f+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},im=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},sm=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=Re(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},um=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=ht("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Re(e);function s(u){var c=r.map(function(l,h){return function(d,p){return t.indexOf(d)!==-1&&r[d]!==1?r[d]+" - "+p[d]+" - 1":""+p[d]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},gu=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=Re(o.length),u=Re(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var d="getUpdates("+h+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+d+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},cm=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},lm=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=Re(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},hm=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Re(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Ka.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Ka[s]+" = start["+s+"] + coords."+Ka[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Ka=["x","y","z","w","u","v"],dm=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Re(this.rank),n=ht("coords",this.rank),o=ht("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),pm=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=Re(e.length),a=Re(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},fm=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=yu(e,n),i=xu(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===gt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===gt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===gt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===gt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===gt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=xu(e,yu(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function yu(r,t){if(r===yt.UPLOAD)return gt.PACKED_2X2_FLOAT32;if(r===yt.RENDER||r==null)return function(e){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?gt.PACKED_2X2_FLOAT32:gt.UNPACKED_FLOAT32:e?gt.PACKED_2X2_FLOAT16:gt.UNPACKED_FLOAT16}(t);if(r===yt.DOWNLOAD||r===yt.PIXELS)return gt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function xu(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var vm=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=Re(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},mm=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=Re(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},gm=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Re(this.rank),a=Uc("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},$i=1.7580993408473768,Ki=1.0507009873554805,ue=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Nt="if (isnan(x)) return x;",ym="return x;",bu="return abs(x);",$c=Nt+`
  return (x < 0.0) ? 0.0 : x;
`,Kc=Nt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Xc="return (x >= 0.0) ? x : (exp(x) - 1.0);",xm=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+$i+`;
  float scale = `+Ki+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,wu="return -x;",_u="return ceil(x);",Cu="return floor(x);",Eu="return exp(x);",Iu="return exp(x) - 1.0;",bm=Nt+`
  return sin(x);
`,wm=Nt+`
  return cos(x);
`,_m=Nt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Cm=Nt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Em=Nt+`
  return atan(x);
`,Im=Nt+"return log(x + sqrt(x * x + 1.0));",Rm=Nt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,km=Nt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,co="return x;",Sm="return x;",Yc=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Jc=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Qc=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Sr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Dm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=ht("rc",t),n=Re(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},lo={};function ho(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Sm:ym;if(r==="relu")return t?Yc:$c;if(r==="elu")return t?Qc:Xc;if(r==="relu6")return t?Jc:Kc;if(r==="prelu")return t?jc:qc;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Am=600,Tm=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=Jt(M().getNumber("WEBGL_VERSION"));o.binaryCache=((n=M().getNumber("WEBGL_VERSION"))in lo||(lo[n]={}),lo[n]),o.gpgpu=new Uv(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new fm(o.gpgpu),o.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*Am/1024/1024,o.texData=new Fc(o,T),o}return Tt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:yt.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(M().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:yt.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new Sr(u,co):new ue(u,co);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),d=this.readSync(h.dataId);return this.disposeData(h.dataId),d}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var p,f,m=this.activeTimers!=null;return m&&(p=Ut()),a==="complex64"?f=_i(i.real.dataSync(),i.imag.dataSync()):f=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Ut()-p),this.convertAndCacheOnCPU(e,f)},t.prototype.read=function(e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,d,p,f,m,v,g,x,w,y,b,_,S,k;return X(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new Sr(i,co):new ue(i,co),d=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:u}],u),p=this.read(d.dataId),this.disposeData(d.dataId),[2,p];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return f=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),f=(k=this.gpgpu).createBufferFromTexture.apply(k,[v.texture].concat(Nr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=I.sent(),w=x[0],y=x[1],g=_i(w,y),[3,5];case 4:f==null?g=this.getValuesFromTexture(e):(b=Y(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(f,b)),I.label=5;case 5:return m!=null&&this.disposeData(m.dataId),_=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach(function(R){return R(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!yp(o))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=Y(a);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Nr(a))).subarray(0,u);return this.disposeData(c.dataId),h}var d=M().getBool("WEBGL_PACK")&&s===!0,p=d?za(a):a,f=d?new yv(p):new gv(p),m=this.runWebGLProgram(f,[{shape:p,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return X(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=fr(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=fr(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Qd(c),u.getExtraProfileInfo=function(){return c.map(function(h,d){return{name:s[d],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ut(),endMs:null}},t.prototype.endTimer=function(e){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Ut(),e)},t.prototype.getQueryTime=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var d=this.texData.get(e);d.texture=null,d.texShape=null,d.isPacked=!1,d.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Y(o)===0)return et([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Tc(e.shape,n,o);if(a||!i){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new dm(o):new hm(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Nc(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=zi(n,o,a);if(i.some(function(u){return u===0}))return et([],i);var s=new pm(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new um(e.shape,n):new sm(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(p){return Et(p)}),a=e.map(function(p){return Gt(p)});return Qe(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new rv(e.map(function(p){return p.shape}),n);return this.compileAndRun(c,e)}var l=mr(e.map(function(p){return p.shape}),n),h=e.map(function(p){return p.as2D(-1,Y(p.shape.slice(n)))}),d=new nv(h.map(function(p){return p.shape}));return this.compileAndRun(d,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,wu,e.dtype);var n=new ue(e.shape,wu);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,d=s===1?n.as3D(c,1,u):n;return this.multiply(l,d).sum(h,!0)}var p=Ze(e.dtype,n.dtype),f=new qa(e.shape,[c,i,s],o,a);return this.compileAndRun(f,[e,n],p)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],d=n.shape[0],p=Ze(n.dtype,o.dtype),f=s!=null,m=c!=null,v=u?ho(u,!0):null,g=new qa(n.shape,[d,l,h],a,i,f,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,p)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new cu(Jf,e.shape,n.shape),s=new cu(Qf,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,lu,e.dtype);var d=new Be(lu,e.shape,n.shape);return this.compileAndRun(d,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),M().getBool("WEBGL_PACK_NORMALIZATION")){var h=new Yf(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var d=new Xf(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(d,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new jv(e.shape,n,o,a,i):new Gv(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new qv(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return Do(i)});return Vc(se(e.shape,e.dtype,o),n)}var a=new vm(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Zv(e.shape,n,o):new Qv(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gm(e.shape,n):new mm(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Ev(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,d){return h*d}),i=Mo(e.shape,n,a),s=Oo(i.length,n.length),u=Bo(e.shape,n,a),c=kc(o,n.length),l=Sc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(d,p){return d*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Mo(u.shape,n,a,!1),l=Oo(c.length,n.length,!1),h=Bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=Ua(i),u=new em({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Ua(i),u=new Vf({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=Ua(a[a.length-1]),s=new jf(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){mt("sum",n,e.rank);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i),u=Pa(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i),u=Pa(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Qt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Zt(1,e.rank)[0]);var u=function(p,f,m){for(var v=[],g=p.length,x=0;x<g;x++)x!==f?v.push(p[x]):v.push(m);return v}(s.shape,a,o),c=Y([s.shape[a]]),l=s.as2D(-1,c),h=Pa(e.dtype),d=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(d=d.transpose(Bi(i))),d},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(d,p){var f,m=!1;for(d<=Ac?(f=d,m=!0):f=pi(d,Math.floor(Math.sqrt(d)));!m;)f>p||f===d?m=!0:f=pi(d,f+1);return f}(u,i),l=new cm({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[e,o],a);return h.shape[1]===i?h:(o=Po(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(mt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!M().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=tt(e.shape,a),s=i[0],u=Y(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new dv(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Be("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Be("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Be("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Be("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Be("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Be("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ue(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Be("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Be("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new lm(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],Ze(n.dtype,o.dtype))},t.prototype.where=function(e){No("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return qi(e.shape,n)},t.prototype.topk=function(e,n,o){return zc(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){mt("min",n,e.rank);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);mt("max",n,e.rank);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){mt("all",n,e.rank);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){mt("any",n,e.rank);var o=tt(e.shape,n),a=o[0],i=Y(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Be(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Be(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ha);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Ze(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ha,o);var a=new Be(Ha,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new Sr(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new on(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(d){var p=d[0],f=d[1],m=a.makeComplexComponentTensorInfo(e,p),v=a.makeComplexComponentTensorInfo(n,f),g=new Be(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],Ze(p.dtype,f.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Ze(c,l)}),s=e.map(function(c){return c.shape}),u=M().getBool("WEBGL_PACK")?new Wf(e[0].shape,s):new Lf(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ga);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Ze(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ga,e.dtype);var a=new Be(Ga,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=Ze(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,_u,e.dtype);var n=new ue(e.shape,_u);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Cu,e.dtype);var n=new ue(e.shape,Cu);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ue(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ue(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ue(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ue(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ue(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Eu,e.dtype);var n=new ue(e.shape,Eu);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Iu,e.dtype);var n=new ue(e.shape,Iu);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=$e([n],e.shape),a=this.max(e,o),i=pt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ue(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ue(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ue(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ue(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ue(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=M().getBool("WEBGL_PACK")?new Sr(e.shape,Yc):new ue(e.shape,$c),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=M().getBool("WEBGL_PACK")?new Sr(e.shape,Jc):new ue(e.shape,Kc),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(jc,e.shape,n.shape):new Be(qc,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Qc,e.dtype);var n=new ue(e.shape,Xc);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Be("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ue(e.shape,xm);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ue(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=M().getBool("WEBGL_PACK_CLIP")?new ev(e.shape):new Zf(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,bu,e.dtype);var n=new ue(e.shape,bu);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new tv(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ue(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ue(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ue(e.shape,bm);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ue(e.shape,wm);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ue(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ue(e.shape,_m);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ue(e.shape,Cm);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ue(e.shape,Em);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Be(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ue(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ue(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ue(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ue(e.shape,Im);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ue(e.shape,Rm);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ue(e.shape,km);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ue(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ue(e.shape,function(a){return a===void 0&&(a=0),Nt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],d=o.outChannels,p=o.dataFormat==="channelsLast",f=(h===1||d===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(f||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var w=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,w,o.inChannels],dtype:e.dtype},b=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(so(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(S.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=b,k.shape=o.outShape,T.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,d=o.outHeight,p=o.dataFormat==="channelsLast",f=u*c*l,m=d*h,v=[f,m],g=e.squeeze([0]),x=n.reshape([1,f,-1]),w=new Hv(v,g.shape,o),y=this.compileAndRun(w,[g]).reshape([1,v[0],v[1]]),b=a!=null,_=s!=null,S=i?ho(i,!0):null,k=new qa(y.shape,[1,m,o.outChannels],!0,!1,b,S,_),I=[y,x];a&&I.push(a),_&&I.push(s);var R=this.compileAndRun(k,I);return p?R.reshape([1,d,h,o.outChannels]):R.reshape([1,o.outChannels,d,h])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?ho(s,!1):null,d=new hu(a,c,h,l),p=[n,o];return i&&p.push(i),u&&p.push(u),this.compileAndRun(d,p)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new hu(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new av(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new ov(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?ho(u,l):null,d=[o,a],p=s!=null,f=c!=null;return p&&d.push(s),f&&d.push(c),l?(n=new pu(i,p,h,f),this.compileAndRun(n,d)):(n=new du(i,p,h,f),this.compileAndRun(n,d))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new pu(o),this.compileAndRun(a,[e,n])):(a=new du(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new cv(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new uv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new lv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new sv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new iv(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new ja(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new ja(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new ja(a,"max",!0),s=this.compileAndRun(i,[n]),u=new $v(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new $f(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return Oc(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new $a(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new Kf(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new $a(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new $a(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Kv(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!so(e.shape,n)&&(o.texture===null||!so(o.shape,n))){var a=this.packedReshape(e,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return wi(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new om(e.shape,n,o,a):new rm(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new nm(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new im(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new am(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:dn(e),s=i.shape[0],u=i.shape[1],c=new Xv(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new Yv(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new mv(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return No("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Hi(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new hv(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,h=u/(n*n),d=new vv(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(d,[e])},t.prototype.split=function(e,n,o){return Wc(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=Lo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],d=e.reshape([s,i]),p=n.reshape([s,u]);if(l===0)return wi(et([]),o);var f=q(0),m=new gu(s,i,d.rank,p.rank,c,h);return this.compileAndRun(m,[p,d,f]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=Lo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new gu(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new vu(wv,e.shape,n),i=new vu(_v,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Dc(e,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),d=e.reshape([e.size/c,c]),p=new Iv(a,l,[u,c]);return this.compileAndRun(p,[d,h]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||jr(n))==="string"){var a=So(o,Y(e));return a.fill(n),T.makeTensor(a,e,o,this)}var i=new Cv(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return Bc(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return T.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new Dm(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Jv(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[Ao(e.shape)].concat(To(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[Ao(n)].concat(To(n)),s=new tm(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=za(i);return n=a?new fv(u):new pv(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===Lr.DENSE){var l=Nr(e.outputShape);c.texShape=l.map(function(w){return 2*w})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=Or(u.dtype,0),u;var h=[],d=n.map(function(w){if(w.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(w.dataId);if(y.texture==null){if(!e.packedInputs&&Y(w.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:w.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=w.shape)}else if(!!y.isPacked!=!!e.packedInputs)w=y.isPacked?s.unpackTensor(w):s.packTensor(w),h.push(w),y=s.texData.get(w.dataId);else if(y.isPacked&&!so(y.shape,w.shape)){var b=w,_=w.shape;w.shape=y.shape,w=s.packedReshape(w,_),h.push(w),y=s.texData.get(w.dataId),b.shape=_}return s.uploadToGPU(w.dataId),{shape:w.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var p,f={shape:u.shape,texData:c,isUniform:!1},m=function(w,y,b){var _="";y.concat(b).forEach(function(I){var R=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,N=I.isUniform?"uniform":I.texData.texShape;_+=I.shape+"_"+N+"_"+R});var S=w.userCode,k=w.constructor.name;return k+="_"+_+"_"+S}(e,d,f),v=this.getAndSaveBinary(m,function(){return function(w,y,b,_){var S=y.userCode,k=b.map(function(W,H){var G={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(G.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[H],shapeInfo:G}}),I=k.map(function(W){return W.shapeInfo}),R={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},N=zf(k,R,S,y.packedInputs),A=w.createProgram(N),L=null,O=w.getUniformLocation(A,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(L=w.getUniformLocation(A,"INFINITY",!1));for(var B={},z=0;z<y.variableNames.length;z++){var V=y.variableNames[z];B[V]=w.getUniformLocation(A,V,!1),B["offset"+V]=w.getUniformLocation(A,"offset"+V,!1)}return{program:y,source:N,webGLProgram:A,uniformLocations:B,inShapeInfos:I,outShapeInfo:R,infLoc:L,nanLoc:O}}(s.gpgpu,e,d,f)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(w,y,b,_,S){mu(y.inShapeInfos,b),mu([y.outShapeInfo],[_]);var k=_.texData.texture,I=_.texData.texShape;_.texData.isPacked?w.setOutputPackedMatrixTexture(k,I[0],I[1]):w.setOutputMatrixTexture(k,I[0],I[1]),w.setProgram(y.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&w.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&w.gl.uniform1f(y.nanLoc,NaN),b.forEach(function(R,N){var A=y.program.variableNames[N],L=y.uniformLocations[A],O=y.uniformLocations["offset"+A];if(L!=null)if(R.isUniform)if(Y(R.shape)<2)w.gl.uniform1f(L,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),w.gl.uniform1fv(L,B)}else R.texData.slice!=null&&O!=null&&w.gl.uniform1i(O,R.texData.slice.flatOffset),w.setInputMatrixTexture(R.texData.texture,L,N)}),S!=null&&S(w,y.webGLProgram),w.executeProgram()}(this.gpgpu,v,d,f,a),h.forEach(function(w){return s.disposeData(w.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(p)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=M().getBool("DEBUG");M().set("DEBUG",!1);var o=e.abs(q(1e-8)).dataSync()[0];if(M().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,d=this.activeTimers!=null;d&&(h=Ut());var p=o.texShape;if(p==null&&(p=Op(a,l),o.texShape=p),s!=null){var f=za(a),m=void 0,v=p[1],g=p[0],x=s instanceof Uint8Array;l?(v=(n=Kr(p[0],p[1]))[0],g=n[1],m=new bv(f,[g,v],x)):m=new xv(f,[g,v],x);var w=this.makeTensorInfo([g,v],i);this.texData.get(w.dataId).usage=x?yt.PIXELS:yt.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),v,g,s);var y=this.runWebGLProgram(m,[w],i,null,!0),b=this.texData.get(y.dataId);o.texture=b.texture,o.texShape=b.texShape,o.isPacked=b.isPacked,o.usage=b.usage,this.disposeData(w.dataId),this.texData.delete(y.dataId),o.values=null,d&&(this.uploadWaitMs+=Ut()-h)}else{var _=this.acquireTexture(p,c,i,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*hc(n)},t}(Pc);yc()&&T.registerBackend("webgl",function(){return new Tm},2);var Nm=D({square_:function(r){var t=C(r,"x","square"),e=[t];return T.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),Vr="SquaredDifference",Zc=D({squaredDifference_:function(r,t){var e,n=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},Vr,{},i,[])}}),Fm=D({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):T.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Pm=D({acos_:function(r){var t=C(r,"x","acos");return T.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Mm=D({acosh_:function(r){var t=C(r,"x","acosh");return T.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Om=D({asin_:function(r){var t=C(r,"x","asin");return T.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),Bm=D({asinh_:function(r){var t=C(r,"x","asinh");return T.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),Lm=D({atan_:function(r){var t=C(r,"x","atan");return T.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Wm=D({atanh_:function(r){var t=C(r,"x","atanh");return T.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(q(1).sub(o.toFloat().square()))}}})}}),Vm=D({ceil_:function(r){var t=C(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),Xi=D({clipByValue_:function(r,t,e){var n=C(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return T.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),be(i))}}},"ClipByValue",a,o)}}),zm=D({cos_:function(r){var t=C(r,"x","cos"),e=[t];return T.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Um=D({cosh_:function(r){var t=C(r,"x","cosh");return T.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Hm=D({erf_:function(r){var t=C(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),T.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ci=D({exp_:function(r){var t=C(r,"x","exp");return T.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Gm=D({expm1_:function(r){var t=C(r,"x","expm1");return T.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),qm=D({floor_:function(r){var t=C(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),jm=D({log_:function(r){var t=C(r,"x","log"),e=[t];return T.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),$m=D({log1p_:function(r){var t=C(r,"x","log1p");return T.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),Km=D({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return T.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Uo=D({neg_:function(r){var t=C(r,"x","neg"),e=[t];return T.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),Xm=D({reciprocal_:function(r){var t=C(r,"x","reciprocal");return T.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Ym=D({round_:function(r){var t=C(r,"x","round");return T.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),el=D({rsqrt_:function(r){var t=C(r,"x","rsqrt"),e=[t];return T.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),tl=D({sigmoid_:function(r){var t=C(r,"x","sigmoid");return T.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),Jm=D({sign_:function(r){var t=C(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),Qm=D({isNaN_:function(r){var t=C(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),Zm=D({isInf_:function(r){var t=C(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),eg=D({isFinite_:function(r){var t=C(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return be(e)}}})}}),tg=D({sin_:function(r){var t=C(r,"x","sin"),e=[t];return T.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),ng=D({sinh_:function(r){var t=C(r,"x","sinh");return T.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),rg=D({softplus_:function(r){var t=C(r,"x","softplus");return T.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),og=D({sqrt_:function(r){var t=C(r,"x","sqrt");return T.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),ag=D({step_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","step");return T.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return be(n)}}})}}),ig=D({tan_:function(r){var t=C(r,"x","tan");return T.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),sg=D({tanh_:function(r){var t=C(r,"x","tanh");return T.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function nl(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Yr(u,c,l,s,i,a)}function rl(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Yr(u,c,l,s,i,a)}function ol(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Yr(u,c,l,s,i,a)}function Yr(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),h=C(e,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var d=[c,l,h,i];return T.runKernelFunc(function(p,f){var m=p.batchNormalization(u,po(l),po(h),a,po(i),po(s));return f([c,l,h,i]),m},{x:c,mean:l,variance:h,scale:i,offset:s},function(p,f){var m=f,v=m[0],g=m[1],x=m[2],w=m[3],y=w??q(1),b=qe(g.shape,u.shape),_=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)_.push(u.shape[S]);_.push(1)}var k=v.sub(g),I=p.mul(y),R=el(x.add(q(a))),N=R.mul(R).mul(R).mul(q(-.5));return{x:function(){return g.rank===1?p.mul(sr(R.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(v.shape):p.mul(R).mul(y).reshape(v.shape)},mean:function(){var A=R.mul(q(-1)).mul(I);return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)},variance:function(){var A=N.mul(k).mul(I);return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)},scale:function(){var A=k.mul(R),L=p.mul(A);return g.rank===1&&(L=L.sum(b)),L.reshape(g.shape)},offset:function(){var A=p;return g.rank===1&&(A=A.sum(b)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},d).reshape(c.shape)}function po(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function na(){xc("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var ug=D({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),nl(r,t,e,a,o,n)}}),cg=D({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),rl(r,t,e,a,o,n)}}),lg=D({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),ol(r,t,e,a,o,n)}}),hg=D({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),na(),Yr(r,t,e,a,o,n)}}),al=D({batchNorm_:Yr}),dg=D({batchNorm2d_:nl}),pg=D({batchNorm3d_:rl}),fg=D({batchNorm4d_:ol}),ra=D({logicalAnd_:function(r,t){var e=C(r,"a","logicalAnd","bool"),n=C(t,"b","logicalAnd","bool");return pe(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),vg=D({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),il=D({logicalOr_:function(r,t){var e=C(r,"a","logicalOr","bool"),n=C(t,"b","logicalOr","bool");return pe(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),mg=D({logicalXor_:function(r,t){var e=C(r,"a","logicalXor","bool"),n=C(t,"b","logicalXor","bool");return pe(e.shape,n.shape),il(r,t).logicalAnd(ra(r,t).logicalNot())}}),zn=D({where_:function(r,t,e){var n=C(t,"a","where"),o=C(e,"b","where"),a=C(r,"condition","where","bool");return Ce(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Ce(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return be(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),sl=function(r){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=qi(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},he=D({add_:function(r,t){var e,n=C(r,"a","add"),o=C(t,"b","add");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=qe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=qe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),gg=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Xe(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return T.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),yg=D({addStrict_:function(r,t){var e=C(r,"a","addStrict"),n=C(t,"b","addStrict");return Ce(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),xg=D({atan2_:function(r,t){var e,n=C(r,"a","atan2"),o=C(t,"b","atan2");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=he(u.square(),c.square()),h=i.mul(c.div(l)),d=qe(u.shape,a);return d.length>0&&(h=h.sum(d)),h.reshape(u.shape)},$b:function(){var l=he(u.square(),c.square()),h=Uo(i.mul(u.div(l))),d=qe(c.shape,a);return d.length>0&&(h=h.sum(d)),h.reshape(c.shape)}}})}}),St=D({div_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");if(e=Me(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return ul(n,o);var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=qe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=qe(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var d=c.square();return l.div(d.toFloat()).neg()}}},"Div")}}),bg=D({divNoNan_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");n=(e=Me(n,o))[0],o=e[1];var a=St(n,o),i=be(a),s=o.equal(i);return zn(s,i,a)}}),wg=D({divStrict_:function(r,t){var e=C(r,"a","div"),n=C(t,"b","div");return Ce(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),ul=D({floorDiv_:function(r,t){var e,n=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=qe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=qe(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var d=c.square();return l.div(d.toFloat()).neg()}}},"FloorDiv")}}),Yi=D({maximum_:function(r,t){var e,n=C(r,"a","maximum"),o=C(t,"b","maximum");return e=Me(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),pe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),_g=D({maximumStrict_:function(r,t){var e=C(r,"a","maximumStrict"),n=C(t,"b","maximumStrict");return Ce(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),cl=D({minimum_:function(r,t){var e,n=C(r,"a","minimum"),o=C(t,"b","minimum");return e=Me(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),pe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Cg=D({minimumStrict_:function(r,t){var e=C(r,"a","minimumStrict"),n=C(t,"b","minimumStrict");return Ce(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Eg=D({mod_:function(r,t){var e,n=C(r,"a","mod"),o=C(t,"b","mod");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=qe(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=qe(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Ig=D({modStrict_:function(r,t){var e=C(r,"a","modStrict"),n=C(t,"b","modStrict");return Ce(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),it=D({mul_:function(r,t){var e,n=C(r,"a","mul"),o=C(t,"b","mul");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=qe(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=qe(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Rg=D({mulStrict_:function(r,t){var e=C(r,"a","mul"),n=C(t,"b","mul");return Ce(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Ho=D({pow_:function(r,t){var e,n=C(r,"base","pow"),o=C(t,"exp","pow");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape),i=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var d=l.toFloat(),p=s.mul(d.mul(c.pow(d.sub(q(1))))),f=qe(c.shape,a);return f.length>0&&(p=p.sum(f)),p.reshape(c.shape)},b:function(){var d=c.greater(0),p=c.log().where(d,be(c)),f=s.mul(h.mul(p)),m=qe(l.shape,a);return m.length>0&&(f=f.sum(m)),f.reshape(l.shape)}}},"Pow",{},i,[!0])}}),kg=D({powStrict_:function(r,t){return Ce(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Sg=D({squaredDifferenceStrict_:function(r,t){var e=C(r,"a","squaredDifferenceStrict"),n=C(t,"b","squaredDifferenceStrict");return Ce(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),je=D({sub_:function(r,t){var e,n=C(r,"a","sub"),o=C(t,"b","sub");e=Me(n,o),n=e[0],o=e[1];var a=pe(n.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=qe(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=qe(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Dg=D({subStrict_:function(r,t){var e=C(r,"a","subStrict"),n=C(t,"b","subStrict");return Ce(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),ll=D({equal_:function(r,t){var e,n=C(r,"a","equal"),o=C(t,"b","equal");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),Ag=D({equalStrict_:function(r,t){var e=C(r,"a","equalStrict"),n=C(t,"b","equalStrict");return Ce(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),Tg=D({greater_:function(r,t){var e,n=C(r,"a","greater"),o=C(t,"b","greater");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),hl=D({greaterEqual_:function(r,t){var e,n=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return be(s)},b:function(){return be(u)}}},"GreaterEqual")}}),Ng=D({greaterEqualStrict_:function(r,t){var e=C(r,"a","greaterEqualStrict"),n=C(t,"b","greaterEqualStrict");return Ce(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Fg=D({greaterStrict_:function(r,t){var e=C(r,"a","greaterStrict"),n=C(t,"b","greaterStrict");return Ce(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Pg=D({less_:function(r,t){var e,n=C(r,"a","less"),o=C(t,"b","less");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),Mg=D({lessEqual_:function(r,t){var e,n=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Og=D({lessEqualStrict_:function(r,t){var e=C(r,"a","lessEqualStrict"),n=C(t,"b","lessEqualStrict");return Ce(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Bg=D({lessStrict_:function(r,t){var e=C(r,"a","lessStrict"),n=C(t,"b","lessStrict");return Ce(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Lg=D({notEqual_:function(r,t){var e,n=C(r,"a","notEqual"),o=C(t,"b","notEqual");return e=Me(n,o),n=e[0],o=e[1],pe(n.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Wg=D({notEqualStrict_:function(r,t){var e=C(r,"a","notEqualStrict"),n=C(t,"b","notEqualStrict");return Ce(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function Ru(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function ku(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Ji=D({gather_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","gather"),o=C(t,"indices","gather","int32");e=$e(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,d=1,p=0;p<u;p++)l.push(i.shape[p]),h*=i.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<i.rank;p++)l.push(i.shape[p]),d*=i.shape[p];return{batchSize:h,sliceSize:d,dimSize:c,outputShape:l}}(n,o,e);return T.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),d=h.length,p=c.slice(e,c.length).slice(1),f=p.length,m=Ru(0,d),v=Ru(d+1,d+1+f),g=ku([h,[l],p]),x=i.reshape(g),w=u.reshape([l]),y=ku([[d],m,v]),b=x.transpose(y),_=dl(b,w,n.shape[e]),S=Bi(y);return _=_.transpose(S)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),dl=D({unsortedSegmentSum_:function(r,t,e){var n=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return E(Le(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Yi(c,be(c)),h=Ji(u,l),d=hl(c,q(0,"int32")),p=h.rank-d.rank,f=0;f<p;++f)d=Ct(d,f+1);d=ra(d,wr(h.shape,"bool"));var m=be(h);return zn(d,h,m)}(a,s)}}})}}),Vg=function(r,t,e){return K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,d,p,f,m;return X(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),Ce(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),d=o.reshape([-1]),[4,sl(d)];case 1:return p=v.sent(),f=p.squeeze([1]),m=Ji(h,f,a),r!==n&&n.dispose(),t!==o&&o.dispose(),f.dispose(),h.dispose(),d.dispose(),p.dispose(),[2,m]}})})};function pl(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Le(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var d=Ui(a),p=qn(s,e.shape,n,1,o,i,!1,d),f=T.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,p);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return Rt(m,g,n,o,a,1,i)},filter:function(){return Qi(m,x,g.shape,n,o,a,i)}}});return c?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Xa(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function fl(r,t,e,n,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Vo(a,e.shape,n,1,o),h=T.runKernelFunc(function(d){return d.conv3dDerInput(i,e,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var zg=D({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Le(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(ft(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=Rt(d,h,[1,e],n,"NHWC",[1,a],i);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),Rt=D({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Le(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(ft(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var d=Ui(o),p=qn(c.shape,u.shape,e,a,n,i,!1,d),f=[u,c],m=T.runKernelFunc(function(v,g){var x=v.conv2d(c,u,p);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,w=x[0],y=x[1];return E(gr(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return vl(y.shape,v,w,e,n,o)},filter:function(){return Qi(y,v,w.shape,e,n,o)}}},"Conv2D",p,f);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Ug=D({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(d,p){return Xa(d)||Xa(p)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Vo(u.shape,s.shape,e,a,n),h=T.runKernelFunc(function(d,p){var f=d.conv3d(u,s,l);return p([u,s]),f},{x:u,$filter:s},function(d,p){E(Xa(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var f=p[0],m=p[1];return{x:function(){return fl(f.shape,d,m,e,n)},$filter:function(){return function(v,g,x,w,y){var b=v;v.rank===4&&(b=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(b.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+b.shape+"."}),E(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(b.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+b.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=Vo(b.shape,x,w,1,y);return T.runKernelFunc(function(k){return k.conv3dDerFilter(b,_,S)},{x5D:b,dy5D:_})}(f,d,m.shape,e,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Qi=D({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Le(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Ui(a),d=qn(s.shape,e,n,1,o,i,!1,h);return T.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,d)},{x4D:s,dy4D:u})}}),vl=D({conv2dDerInput_:pl}),oa=D({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(ft(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(Le(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=qn(c.shape,u.shape,e,a,n,i,!0),d=[c,u],p=T.runKernelFunc(function(f,m){var v=f.depthwiseConv2D(c,u,h);return m([c,u]),v},{x:c,filter:u},function(f,m){E(gr(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return ml(v.shape,f,g,h)},filter:function(){return gl(v,f,g.shape,h)}}},"DepthwiseConv2dNative",h,d);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),ml=D({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),gl=D({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Zi=D({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var d=u.shape[2],p=u.shape[3];E(c.shape[2]===d*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+d*p+", but got "+c.shape[2]+"."});var f=oa(l,u,n,o,i,a),m=Rt(f,c,1,"valid",i);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Hg=D({conv2dTranspose_:function(r,t,e,n,o,a){return pl(e,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Gg=D({conv3dTranspose_:function(r,t,e,n,o){return fl(e,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),n,o)}}),aa=D({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=C(r,"a","matMul"),i=C(t,"b","matMul");o=Me(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),d=i.shape.slice(0,-2),p=Y(h),f=Y(d);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Xe(h,d),function(){return"Error in matMul: outer dimensions ("+h+") and ("+d+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(p,s,c):a.as3D(p,c,s),g=n?i.as3D(f,l,u):i.as3D(f,u,l),x={transposeA:e,transposeB:n};return T.runKernelFunc(function(w,y){var b=w.batchMatMul(v,g,e,n);return y([v,g]),b},{a:v,b:g},function(w,y){var b=y,_=b[0],S=b[1];return e||n?!e&&n?{a:function(){return w.matMul(S,!1,!1)},b:function(){return w.matMul(_,!0,!1)}}:e&&!n?{a:function(){return S.matMul(w,!1,!0)},b:function(){return _.matMul(w,!1,!1)}}:{a:function(){return S.matMul(w,!0,!0)},b:function(){return w.matMul(_,!0,!0)}}:{a:function(){return w.matMul(S,!1,!0)},b:function(){return _.matMul(w,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),qg=D({dot_:function(r,t){var e=C(r,"t1","dot"),n=C(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),jg=D({outerProduct_:function(r,t){var e=C(r,"v1","outerProduct"),n=C(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Jr=D({reverse_:function(r,t){var e=C(r,"x","reverse");if(e.rank===0)return e.clone();var n=$e(t,e.shape);return T.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),$g=D({reverse1d_:function(r){var t=C(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Jr(t,0)}}),Kg=D({reverse2d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Jr(e,t)}}),Xg=D({reverse3d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Jr(e,t)}}),Yg=D({reverse4d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Jr(e,t)}});function yl(r,t,e,n,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(ft(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&E(Le(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Wr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Xe(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc(function(d,p){var f=d.maxPool(s,c);return p([s,f]),f},{x:s},function(d,p){var f=p[0],m=p[1];return{x:function(){return function(v,g,x,w,y,b,_,S){var k=C(v,"dy","maxPoolBackprop"),I=C(g,"input","maxPoolBackprop"),R=C(x,"output","maxPoolBackprop");E(I.rank===k.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+k.rank+")"}),b==null&&(b=[1,1]),E(ft(y,b),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+b+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."}),S!=null&&E(Le(_),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+_+"."});var N=Wr(I.shape,w,y,b,_,S);return T.runKernelFunc(function(A){return A.maxPoolBackprop(k,I,R,N)},{$dy:k,$input:I})}(d,f,m,t,e,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function xl(r,t,e,n,o,a){var i=C(r,"x","avgPool","float32");n==null&&(n=[1,1]),E(ft(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Le(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Wr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Xe(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(d,p,f,m,v,g){var x=C(d,"dy","avgPoolBackprop"),w=C(p,"input","avgPoolBackprop");E(w.rank===x.rank,function(){return"Rank of input ("+w.rank+") does not match rank of dy ("+x.rank+")"}),v==null&&(v=[1,1]),E(ft(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=w,b=x,_=!1;w.rank===3&&(_=!0,y=w.as4D(1,w.shape[0],w.shape[1],w.shape[2]),b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(b.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+b.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=Wr(y.shape,f,m,v,g),k=T.runKernelFunc(function(I){return I.avgPoolBackprop(b,y,S)},{dy4D:b,input4D:y});return _?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(h,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ke=D({maxPool_:function(r,t,e,n,o){return yl(r,t,e,1,n,o)}}),Qr=D({avgPool_:function(r,t,e,n,o){return xl(r,t,e,1,n,o)}}),Jg=D({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(ft(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=Wr(s.shape,t,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,b){var _=y.map(function(I,R){return I+(I-1)*(b[R]-1)}).map(function(I){return I-1}),S=_.map(function(I){return Math.floor(I/2)}),k=_.map(function(I,R){return I-S[R]});return _.map(function(I,R){return[S[R],k[R]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var d=h[0]===1&&h[1]===1,p=function(y,b,_){var S=_.map(function(O){return O[0]}),k=_.map(function(O){return O[1]}),I=y.concat(S,k),R=b.map(function(O,B){return(O-I[B]%O)%O}),N=k.map(function(O,B){return O+R[B]}),A=b.map(function(O,B){return[S[B],N[B]]}),L=b.map(function(O,B){return[0,R[B]]});return[A,L]}([l.inHeight,l.inWidth],h,c),f=p[0],m=p[1],v=d?n:"valid",g=d?s:Ic(s,h,f),x=(e==="avg"?function(){return xl(g,t,a,1,v)}:function(){return yl(g,t,a,1,v)})(),w=d?x:_c(x,h,m);return u?w.as3D(w.shape[1],w.shape[2],w.shape[3]):w}}),Qg=D({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ft(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Le(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Wo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc(function(d,p){var f=d.maxPool3d(u,l);return p([u,f]),f},{x:u},function(d,p){var f=p[0],m=p[1];return{x:function(){return function(v,g,x,w,y,b,_,S){var k=C(v,"dy","maxPool3dBackprop"),I=C(g,"input","maxPool3dBackprop"),R=C(x,"output","maxPool3dBackprop"),N=k,A=I,L=R,O=!1;I.rank===4&&(O=!0,N=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(N.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),b==null&&(b=[1,1,1]),E(ft(y,b),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+b+"'"}),S!=null&&E(Le(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+_+"."});var B=Wo(A.shape,w,y,b,_,S),z=T.runKernelFunc(function(V){return V.maxPool3dBackprop(N,A,L,B)},{dy5D:N,input5D:A});return O?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(d,f,m,t,e,i,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Zg=D({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ft(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Le(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Wo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc(function(d){return d.avgPool3d(u,l)},{x:u},function(d){return{x:function(){return function(p,f,m,v,g,x,w){var y=C(p,"dy","avgPool3dBackprop"),b=C(f,"input","avgPool3dBackprop"),_=y,S=b,k=!1;b.rank===4&&(k=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3])),E(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),E(ft(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),w!=null&&E(Le(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+w+" but got pad "+x+"."});var I=Wo(S.shape,m,v,g,x,w),R=T.runKernelFunc(function(N){return N.avgPool3dBackprop(_,S,I)},{dy5D:_,input5D:S});return k?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(d,u,t,e,i,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Yt=D({slice_:function(r,t,e){var n,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),kf(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),e0=D({slice1d_:function(r,t,e){var n=C(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Yt(n,[t],[e])}}),t0=D({slice2d_:function(r,t,e){var n=C(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Yt(n,t,e)}}),bl=D({slice3d_:function(r,t,e){var n=C(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Yt(n,t,e)}}),n0=D({slice4d_:function(r,t,e){var n=C(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Yt(n,t,e)}});function wl(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(pt(t.shape,n))),r.rank<e.rank&&(r=r.reshape(pt(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var r0=D({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","all","bool"),o=$e(t,n.shape),a=o,i=Qt(a,n.rank);i!=null&&(n=n.transpose(i),a=Zt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=pt(s.shape,o);return s.reshape(u)}return s}}),o0=D({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","any","bool"),o=$e(t,n.shape),a=o,i=Qt(a,n.rank);i!=null&&(n=n.transpose(i),a=Zt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=pt(s.shape,o);return s.reshape(u)}return s}}),a0=D({argMax_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMax");t==null&&(t=0);var n=$e(t,e.shape),o=Qt(n,e.rank);o!=null&&(e=e.transpose(o),n=Zt(n.length,e.rank));var a={axis:n[0]},i=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return be(c)}}},"ArgMax",a,i)}}),i0=D({argMin_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMin");t==null&&(t=0);var n=$e(t,e.shape),o=Qt(n,e.rank);return o!=null&&(e=e.transpose(o),n=Zt(n.length,e.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return be(s)}}})}}),s0=D({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","logSumExp"),o=$e(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=pt(s.shape,o);return s.reshape(u)}return s}}),ia=D({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","max"),o=n,a=$e(t,n.shape),i=a,s=Qt(i,n.rank);s!=null&&(n=n.transpose(s),i=Zt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,d){var p=h.max(n,i);return d([o,p]),p},{x:n},function(h,d){return wl(h,d[1],d[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=pt(c.shape,a);c=c.reshape(l)}return c}}),u0=D({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","mean"),o=$e(t,n.shape),a=Y(tt(n.shape,o)[1]);return ta(function(i){var s=q(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(wr(i.shape,"float32")).div(a)}}})(n)}}),c0=D({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","min"),o=n,a=$e(t,n.shape),i=a,s=Qt(i,n.rank);s!=null&&(n=n.transpose(s),i=Zt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,d){var p=h.min(n,i);return d([o,p]),p},{x:n},function(h,d){return wl(h,d[1],d[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=pt(c.shape,a);c=c.reshape(l)}return c}}),l0=D({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=$e(t,(r=C(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=pt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),_l=D({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=$e(t,n.shape);return ta(function(a){var i=Qt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Zt(s.length,a.rank));var c=function(p){var f=a.shape.slice();return o.forEach(function(m){f[m]=1}),p.reshape(f).mul(wr(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(e){var d=pt(h.shape,o);h=h.reshape(d)}return{value:h,gradFunc:c}})(n)}}),h0=D({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=$e(t,n.shape),a=Qt(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=Zt(i.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=pt(u.shape,o);u=u.reshape(c)}return u}}),Cl=D({elu_:function(r){var t=C(r,"x","elu");return T.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),d0=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=C(r,"x","leakyRelu");return Yi(q(t).mul(e),e)}}),El=D({prelu_:function(r,t){var e=C(r,"x","prelu"),n=C(t,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return zn(u,o,o.mul(s))},alpha:function(){var c=zn(u,be(o),o.mul(i)),l=qe(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Pe=D({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Il=D({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),p0=D({selu_:function(r){var t=C(r,"x","selu");return T.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(q(0)),i=q($i),s=q(Ki),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return zn(a,u,c)}}})}}),Sn=D({transpose_:function(r,t){var e=C(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return T.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=Bi(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),f0=D({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Le(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,t,e,n,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],d=l[1];return{x4D:function(){return T.runKernelFunc(function(p){return p.LRNGrad(c,h,d,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Rl=D({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,e),a=o.shape;if(n){var i=$e(e,r.shape);a=pt(o.shape,i)}return o.reshape(a)}}),v0=D({basicLSTMCell_:function(r,t,e,n,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),h=C(a,"h","basicLSTMCell"),d=c.concat(h,1).matMul(s).add(u),p=d.shape[0],f=d.shape[1]/4,m=[p,f],v=d.slice([0,0],m),g=d.slice([0,f],m),x=d.slice([0,2*f],m),w=d.slice([0,3*f],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),b=y.tanh().mulStrict(w.sigmoid());return[y,b]}}),m0=D({multiRNNCell_:function(r,t,e,n){for(var o=C(t,"data","multiRNNCell"),a=Fo(e,"c","multiRNNCell"),i=Fo(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],d=[];for(c=0;c<u.length;c+=2)h.push(u[c]),d.push(u[c+1]);return[h,d]}}),g0=D({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");pp(a,i),E(Xe(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=C(n,"step","movingAverage");l=l.div(u.sub(Ho(s,h)))}return a.add(l)}}),y0=D({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=iu(s),h=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var d=0;d<c.rank;d++)t[d]=Sf(o,t,n,c.shape,d),e[d]=Df(a,e,n,c.shape,d),n[d]=n[d]||1;var p=iu(u);p.forEach(function(v){e[v]=t[v]+1,n[v]=1});var f=zi(t,e,n),m=f.filter(function(v,g){return p.indexOf(g)===-1});return n.every(function(v){return v===1})?Yt(c,t,f).reshape(m):T.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),x0=D({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=T.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),b0=D({scatterND_:function(r,t,e){var n=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Rf(o,n,e),T.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),es=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),Go=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),ts=D({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(De(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=Qe(e,u).as2D(o,n),l=es(c),h=Math.floor(n/2)+1,d=Et(l),p=Gt(l),f=d.split([h,n-h],d.shape.length-1),m=p.split([h,n-h],p.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,Qe(f[0],m[0]).reshape(v)}}),kl=D({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=Go(n);return Et(o)}var a=[e,2*(t-1)],i=Et(r).as2D(e,t),s=Gt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=Qe(l,h).as2D(a[0],a[1]),o=Go(n),Et(o)}}),w0=Object.freeze({fft:es,ifft:Go,rfft:ts,irfft:kl}),_0=D({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(t,"sparseValues","sparseToDense"),i=C(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,d=s.rank>1?s.shape[1]:1;if(c.length!==d)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+d+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),C0=D({gatherND_:function(r,t){var e=C(t,"indices","gatherND","int32"),n=C(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),E0=D({diag_:function(r){var t=C(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),I0=D({dropout_:function(r,t,e,n){var o=C(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Fe?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Xe(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,e),i=1-t,s=Ec(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Sl(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return ze(o,"float32")}var ns=D({hannWindow_:function(r){return Sl(r,.5,.5)}}),Dl=D({hammingWindow_:function(r){return Sl(r,.54,.46)}}),rs=D({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Yt(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=He([Yt(r,a,t-s),Xt([s],o)]);i.push(u),a+=e}return i.length===0?In([],[0,t]):He(i).as2D(i.length,t)}}),Al=D({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=ns),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=rs(r,t,e),s=it(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(ts(s.slice([c,0],[1,t]),n));return He(u)}}),R0=Object.freeze({hannWindow:ns,hammingWindow:Dl,frame:rs,stft:Al}),at,k0=function(r,t,e){return e===void 0&&(e=1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,d,p,f,m,v;return X(this,function(g){switch(g.label){case 0:return n=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),Ce(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],h=Or("bool",c=u[0]),d=0;d<c;d++){for(p=d*l,f=i.subarray(p,p+l),m=[],v=0;v<f.length;v++)m.push({value:f[v],index:v});for(m.sort(function(x,w){return w.value-x.value}),h[d]=0,v=0;v<e;v++)if(m[v].index===s[d]){h[d]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,et(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(at||(at={}));var S0=D({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=at.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=C(e,"weights","absoluteDifference")),Ce(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return pn(s,i,n)}}),pn=D({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=at.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===at.NONE)return a;if(e===at.SUM)return a.sum();if(e===at.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(q(i)):s}if(e===at.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(q(n.size));var u=o.mul(wr(n.shape)).notEqual(q(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),D0=D({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=at.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(t,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),Ce(a.shape,i.shape,"Error in cosineDistance: ");var u=q(1).sub(a.mul(i).sum(e,!0));return pn(u,s,o)}}),A0=D({hingeLoss_:function(r,t,e,n){n===void 0&&(n=at.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(t,"predictions","hingeLoss"),i=null;e!=null&&(i=C(e,"weights","hingeLoss")),Ce(o.shape,a.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return pn(u,i,n)}}),T0=D({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=at.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),Ce(a.shape,i.shape,"Error in huberLoss: ");var u=q(n),c=i.sub(a).abs(),l=cl(c,u),h=c.sub(l),d=q(.5).mul(l.square()).add(u.mul(h));return pn(d,s,o)}}),N0=D({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=at.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),Ce(a.shape,i.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return pn(l,s,o)}}),F0=D({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=at.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=C(e,"weights","meanSquaredError")),Ce(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return pn(s,i,n)}}),P0=D({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=at.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),Ce(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(d,p){var f=C(d,"labels","sigmoidCrossEntropyWithLogits"),m=C(p,"logits","sigmoidCrossEntropyWithLogits");Ce(f.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(f),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(a,i);return pn(h,s,o)}}),M0=D({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=at.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),Ce(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(d,p,f){if(f===void 0&&(f=-1),f===-1&&(f=p.rank-1),f!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+f);return ta(function(m,v,g){var x=v.logSumExp([f],!0),w=v.toFloat().sub(x);return g([m,w]),{value:w.mul(m).neg().sum([f]),gradFunc:function(y,b){var _=b[0],S=b[1],k=pt(y.shape,[f]);return[y.reshape(k).mul(_.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(_.toFloat()))]}}})(d,p)}(a,i);return pn(h,s,o)}}),O0=Object.freeze({get Reduction(){return at},absoluteDifference:S0,computeWeightedLoss:pn,cosineDistance:D0,hingeLoss:A0,huberLoss:T0,logLoss:N0,meanSquaredError:F0,sigmoidCrossEntropy:P0,softmaxCrossEntropy:M0});function Su(r,t){return t===void 0&&(t=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Cc(e),a=r.clone(),i=In([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(h){var d,p=a,f=s,m=o;d=T.tidy(function(){var v=a.slice([h,h],[e-h,1]),g=v.norm(),x=a.slice([h,h],[1,1]),w=In([[-1]]).where(x.greater(0),In([[1]])),y=x.sub(w.mul(g)),b=v.div(y);s=b.shape[0]===1?i.clone():i.concat(b.slice([1,0],[b.shape[0]-1,b.shape[1]]),0);var _=w.matMul(y).div(g).neg(),S=a.slice([h,0],[e-h,n]),k=_.mul(s);if(h===0)a=S.sub(k.matMul(s.transpose().matMul(S)));else{var I=S.sub(k.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[h,n]).concat(I,0)}var R=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(k.transpose()));else{var N=R.sub(R.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,h]).concat(N,1)}return[s,a,o]}),s=d[0],a=d[1],o=d[2],dt([p,f,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var B0=D({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=Po(0,i,1,"int32").reshape([-1,1]),c=Po(0,s,1,"int32"),l=je(u,c),h=ra(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),d=De([i,s],n.dtype);return _t(Ge(n.reshape([-1,i,s])).map(function(p){return zn(h,p,d)})).reshape(o)}}),L0=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=Wi(r,r.shape[0],0).map(function(u){return Rc(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=_l(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(Rl(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?_t(a,0):a}}),W0=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Su(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Ge(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=Su(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[_t(o,0).reshape(r.shape),_t(a,0).reshape(r.shape)]}}),V0=Object.freeze({bandPart:B0,gramSchmidt:L0,qr:W0});function sa(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var z0=D({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),U0=D({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),H0=D({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),s=sa(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),G0=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return X(this,function(d){switch(d.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),s=sa(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=d.sent(),c=u[0],l=u[1],h=Hi(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,h]}})})},q0=D({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=sa(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),j0=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),K(this,void 0,void 0,function(){var i,s,u,c,l,h,d;return X(this,function(p){switch(p.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=sa(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=p.sent(),l=c[0],h=c[1],d=Gi(l,h,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,d]}})})},$0=D({cropAndResize_:function(r,t,e,n,o,a){var i=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),os=Object.freeze({resizeBilinear:z0,resizeNearestNeighbor:U0,nonMaxSuppression:H0,nonMaxSuppressionAsync:G0,nonMaxSuppressionWithScore:q0,nonMaxSuppressionWithScoreAsync:j0,cropAndResize:$0}),as=function(r,t){return!(r>0)||t==="linear"},is=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},ss=function(r,t){var e=t,n=qe(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},us=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Pe(r);if(t==="elu")return Cl(r);if(t==="relu6")return Il(r);if(t==="prelu")return El(r,e);throw new Error("Unknown fused activation "+t+".")},K0=D({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(as(T.state.gradientDepth,l)===!1){var d=aa(e,n,a,s);return u!=null&&(d=he(d,u)),us(d,l,h)}var p=C(e,"a","fused matMul"),f=C(n,"b","fused matMul");t=Me(p,f),p=t[0],f=t[1];var m=a?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?f.shape[f.rank-1]:f.shape[f.rank-2],g=a?p.shape[p.rank-1]:p.shape[p.rank-2],x=s?f.shape[f.rank-2]:f.shape[f.rank-1],w=p.shape.slice(0,-2),y=f.shape.slice(0,-2),b=Y(w),_=Y(y);E(p.rank>=2&&f.rank>=2&&p.rank===f.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+f.rank+"."}),E(Xe(w,y),function(){return"Error in fused matMul: outer dimensions ("+w+") and ("+y+") of Tensors with shapes "+p.shape+" and "+f.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+p.shape+" and "+f.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var S,k,I=p.shape.slice(0,-2).concat([g,x]),R=a?p.as3D(b,m,g):p.as3D(b,g,m),N=s?f.as3D(_,x,v):f.as3D(_,v,x);u!=null&&pe(I,(S=Me(S=C(u,"bias","fused matMul"),p)[0]).shape),h!=null&&(k=C(h,"prelu weights","fused matMul"));var A={a:R,b:N};u!=null&&(A.bias=S),h!=null&&(A.preluActivationWeights=k);var L=[R,N];return T.runKernelFunc(function(O,B){var z=O.fusedBatchMatMul({a:R,b:N,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return B([R,N,z]),z},A,function(O,B){var z=B[0],V=B[1],W=B[2],H=is(O,W,l),G={};return u!=null&&(G={bias:function(){return ss(S,H)}}),Object.assign(a||s?!a&&s?{a:function(){return H.matMul(V,!1,!1)},b:function(){return H.matMul(z,!0,!1)}}:a&&!s?{a:function(){return V.matMul(H,!1,!0)},b:function(){return z.matMul(H,!1,!1)}}:{a:function(){return V.matMul(H,!0,!0)},b:function(){return H.matMul(z,!0,!0)}}:{a:function(){return H.matMul(V,!1,!0)},b:function(){return z.matMul(H,!0,!1)}},G)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(I)}}),X0=D({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,d=h===void 0?"linear":h,p=r.preluActivationWeights;if(d=d||"linear",as(T.state.gradientDepth,d)===!1){var f=Rt(t,e,n,o,i,u,c);return l!=null&&(f=he(f,l)),us(f,d,p)}var m=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Le(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(ft(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var w,y,b=qn(g.shape,v.shape,n,u,o,c);l!=null&&(w=Me(w=C(l,"bias","fused conv2d"),m)[0],pe(b.outShape,w.shape)),p!=null&&(y=C(p,"prelu weights","fused conv2d"));var _={x:g,filter:v};l!=null&&(_.bias=w),p!=null&&(_.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc(function(I,R){var N=I.fusedConv2d({input:g,filter:v,convInfo:b,bias:w,activation:d,preluActivationWeights:y});return R([v,g,N]),N},_,function(I,R){var N=R,A=N[0],L=N[1],O=N[2],B=is(I,O,d);E(gr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return ss(w,B)}}),Object.assign({x:function(){return vl(L.shape,B,A,n,o)},filter:function(){return Qi(L,B,A.shape,n,o)}},z)},"FusedConv2D",{convInfo:b,activation:d},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Y0=D({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,d=h===void 0?"linear":h,p=r.preluActivationWeights;if(as(T.state.gradientDepth,d)===!1){var f=oa(t,e,n,o,i,u,c);return l!=null&&(f=he(f,l)),us(f,d,p)}var m=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(ft(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Le(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var w,y,b=qn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(w=Me(w=C(l,"bias","fused conv2d"),m)[0],pe(b.outShape,w.shape)),p!=null&&(y=C(p,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:v};l!=null&&(_.bias=w),p!=null&&(_.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc(function(I,R){var N=I.fusedDepthwiseConv2D({input:g,filter:v,convInfo:b,bias:w,activation:d,preluActivationWeights:y});return R([v,g,N]),N},_,function(I,R){E(gr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var N=R[0],A=R[1],L=R[2],O=is(I,L,d),B={};return l!=null&&(B={bias:function(){return ss(w,O)}}),Object.assign({x:function(){return ml(A.shape,O,N,b)},filter:function(){return gl(A,O,N.shape,b)}},B)},"FusedDepthwiseConv2D",{convInfo:b,activation:d},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),J0=Object.freeze({matMul:K0,conv2d:X0,depthwiseConv2d:Y0}),Q0=Object.freeze({image:os,linalg:V0,losses:O0,spectral:w0,fused:J0,signal:R0,square:Nm,squaredDifference:Zc,conv1d:zg,conv2d:Rt,conv3d:Ug,depthwiseConv2d:oa,separableConv2d:Zi,conv2dTranspose:Hg,conv3dTranspose:Gg,op:D,batchNormalization2d:ug,batchNormalization3d:cg,batchNormalization4d:lg,batchNormalization:hg,batchNorm:al,batchNorm2d:dg,batchNorm3d:pg,batchNorm4d:fg,booleanMaskAsync:Vg,complex:Qe,real:Et,imag:Gt,concat:He,concat1d:Yp,concat2d:Jp,concat3d:Qp,concat4d:Zp,split:Wi,matMul:aa,dot:qg,outerProduct:jg,reverse:Jr,reverse1d:$g,reverse2d:Kg,reverse3d:Xg,reverse4d:Yg,maxPool:Ke,avgPool:Qr,pool:Jg,maxPool3d:Qg,avgPool3d:Zg,slice:Yt,slice1d:e0,slice2d:t0,slice3d:bl,slice4d:n0,abs:Fm,acos:Pm,acosh:Mm,asin:Om,asinh:Bm,atan:Lm,atanh:Wm,ceil:Vm,clipByValue:Xi,cos:zm,cosh:Um,erf:Hm,exp:Ci,expm1:Gm,floor:qm,log:jm,log1p:$m,logSigmoid:Km,neg:Uo,reciprocal:Xm,round:Ym,rsqrt:el,sigmoid:tl,sign:Jm,isNaN:Qm,isInf:Zm,isFinite:eg,sin:tg,sinh:ng,softplus:rg,sqrt:og,step:ag,tan:ig,tanh:sg,all:r0,any:o0,argMax:a0,argMin:i0,logSumExp:s0,max:ia,mean:u0,min:c0,moments:l0,sum:_l,prod:h0,equal:ll,equalStrict:Ag,greater:Tg,greaterEqual:hl,greaterEqualStrict:Ng,greaterStrict:Fg,less:Pg,lessEqual:Mg,lessEqualStrict:Og,lessStrict:Bg,notEqual:Lg,notEqualStrict:Wg,add:he,addN:gg,addStrict:yg,atan2:xg,div:St,divNoNan:bg,divStrict:wg,floorDiv:ul,maximum:Yi,maximumStrict:_g,minimum:cl,minimumStrict:Cg,mod:Eg,modStrict:Ig,mul:it,mulStrict:Rg,pow:Ho,powStrict:kg,squaredDifferenceStrict:Sg,sub:je,subStrict:Dg,elu:Cl,leakyRelu:d0,prelu:El,relu:Pe,relu6:Il,selu:p0,logicalAnd:ra,logicalNot:vg,logicalOr:il,logicalXor:mg,where:zn,whereAsync:sl,buffer:se,print:cf,batchToSpaceND:_c,broadcastTo:lf,cast:hf,clone:df,cumsum:pf,depthToSpace:ff,expandDims:Ct,eye:Cc,multinomial:vf,oneHot:xi,pad:Gn,pad1d:mf,pad2d:gf,pad3d:yf,pad4d:xf,rand:bf,randomNormal:wf,randomGamma:_f,randomUniform:Ec,reshape:Dt,spaceToBatchND:Ic,squeeze:Rc,stack:_t,tile:sr,truncatedNormal:Cf,unstack:Ge,setdiff1dAsync:Ef,fill:Xt,linspace:Xp,ones:wr,range:Po,scalar:q,tensor:et,tensor1d:ze,tensor2d:In,tensor3d:Li,tensor4d:lt,tensor5d:jp,tensor6d:$p,variable:Kp,zeros:De,onesLike:wc,zerosLike:be,transpose:Sn,softmax:dn,logSoftmax:Tf,localResponseNormalization:f0,norm:Rl,gather:Ji,unsortedSegmentSum:dl,basicLSTMCell:v0,multiRNNCell:m0,movingAverage:g0,stridedSlice:y0,topk:x0,scatterND:b0,fft:es,ifft:Go,rfft:ts,irfft:kl,sparseToDense:_0,gatherND:C0,diag:E0,dropout:I0,hannWindow:ns,hammingWindow:Dl,frame:rs,stft:Al,inTopKAsync:k0});function U(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Ya(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var Z0=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Fc(e,T),e}return Tt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&No(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?_i(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return Do(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return se(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return T.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return n=Ut(),e(),[2,{kernelMs:Ut()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(U(e,"slice"),Tc(e.shape,n,o)){var a=Nc(n,e.strides),i=Y(o);return et(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=se(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,d){return h+n[d]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){U(e,"stridedSlice");var i=zi(n,o,a);if(i.some(function(p){return p===0}))return et([],i);for(var s=se(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),d=0;d<h.length;d++)h[d]=l[d]*a[d]+n[d];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=se([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){U(e,"reverse");for(var o=se(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(p){return Et(p)}),i=e.map(function(p){return Gt(p)});return Qe(this.concat(a,n),this.concat(i,n))}var s=e.map(function(p){var f=Y(p.shape.slice(n));return p.as2D(-1,f)}),u=mr(s.map(function(p){return p.shape}),1),c=se(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var h=0;s.forEach(function(p){for(var f=o.readSync(p.dataId),m=0,v=0;v<p.shape[0];++v)for(var g=v*u[1]+h,x=0;x<p.shape[1];++x)c[g+x]=f[m++];h+=p.shape[1]})}var d=mr(e.map(function(p){return p.shape}),n);return et(c,d,e[0].dtype)},t.prototype.neg=function(e){return U(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,Ze(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;U(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=se(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=$e([n],e.shape),a=this.max(e,o),i=pt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,Ze(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return U([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){U([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),d=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],p=d[0],f=d[1],m=d[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],w=v[2],y=s*u,b=se([c,s,u],e.dtype),_=b.values,S=this.blockSize,k=0;k<c;k++)for(var I=0;I<s;I+=S)for(var R=0;R<u;R+=S)for(var N=0;N<i;N+=S)for(var A=Math.min(I+S,s),L=Math.min(R+S,u),O=Math.min(N+S,i),B=I;B<A;B++)for(var z=R;z<L;z++){for(var V=0,W=N;W<O;W++)V+=l[k*p+B*f+W*m]*h[W*g+z*x+k*w];_[k*y+(B*u+z)]+=V}return b.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Ya(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,Ze(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return U([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return U([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){U(e,"sum"),mt("sum",n,e.rank);for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,Ze(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=0,f=0;f<u;++f)p+=l[d+f];c[h]=p}return s},t.prototype.prod=function(e,n){U(e,"sum");for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,Ze(e.dtype,"int32")),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=1,f=0;f<u;++f)p*=l[d+f];c[h]=p}return s},t.prototype.unsortedSegmentSum=function(e,n,o){U(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=ll(u,n).asType("float32").mul(e).sum(0);a.push(c)}return _t(a)},t.prototype.argMin=function(e,n){U(e,"argMin");var o=[n];mt("argMin",o,e.rank);for(var a=tt(e.shape,o),i=a[0],s=a[1],u=De(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),d=0;d<l.length;++d){for(var p=d*c,f=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g<f&&(f=g,m=v)}l[d]=m}return u},t.prototype.argMax=function(e,n){U(e,"argMax");var o=[n];mt("argMax",o,e.rank);for(var a=tt(e.shape,o),i=a[0],s=a[1],u=De(i,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),d=0;d<l.length;++d){for(var p=d*c,f=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g>f&&(f=g,m=v)}l[d]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(U(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=Ze(e.dtype,"int32"),s=De(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},d=0;d<c.length;d+=l)for(var p=0;p<l;p++){var f=h(d,p);if(p===0)u[f]=o?0:c[f];else{var m=h(d,p-1);u[f]=o?c[m]+u[m]:c[f]+u[m]}}return s},t.prototype.equal=function(e,n){return U([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return U([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return U([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return U([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return U([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return U([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){U(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return U([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return U([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){U([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=De(n.shape,Ze(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Y(n.shape.slice(1)),d=0;d<a.length;d++)for(var p=0;p<h;p++)a[d]===1?c[l++]=i[d]:c[l++]=s[d];return u},t.prototype.where=function(e){U([e],"where");var n=this.readSync(e.dataId);return qi(e.shape,n)},t.prototype.topk=function(e,n,o){return U(e,"topk"),zc(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){U(e,"min"),mt("min",n,e.rank);for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=l[d],f=0;f<u;++f){var m=l[d+f];m<p&&(p=m)}c[h]=p}return s},t.prototype.minimum=function(e,n){return U([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return U([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){U(e,"max"),mt("max",n,e.rank);for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=l[d],f=0;f<u;++f){var m=l[d+f];m>p&&(p=m)}c[h]=p}return s},t.prototype.maximum=function(e,n){return U([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){U(e,"all"),mt("all",n,e.rank);for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=l[d],f=0;f<u;++f){var m=l[d+f];p=p&&m}c[h]=p}return s},t.prototype.any=function(e,n){U(e,"any"),mt("any",n,e.rank);for(var o=tt(e.shape,n),a=o[0],i=o[1],s=De(a,e.dtype),u=Y(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,p=l[d],f=0;f<u;++f){var m=l[d+f];p=p||m}c[h]=p}return s},t.prototype.squaredDifference=function(e,n){return U([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){U(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){U(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){U(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){U(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){U(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){U(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){U(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){U(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){U(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){U(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){U(e,"relu");for(var n=De(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){U(e,"relu");for(var n=De(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return U([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){U(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){U([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){U(e,"selu");for(var n=$i,o=Ki,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){U(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){U(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){U(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){U(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){U(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){U(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){U(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){U(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){U(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){U(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return U([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){U(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){U(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){U(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Zd(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){U(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){U(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){U(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){U(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),U(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Ya(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){U([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",d=se(o.outShape,e.dtype),p=e.strides[0],f=h?e.strides[1]:e.strides[2],m=h?e.strides[2]:1,v=h?1:e.strides[1],g=d.strides[0],x=h?d.strides[1]:d.strides[2],w=h?d.strides[2]:1,y=h?1:d.strides[1],b=this.readSync(e.dataId),_=this.readSync(n.dataId),S=d.values,k=0;k<o.batchSize;++k)for(var I=k*p,R=k*g,N=0;N<o.outHeight;++N)for(var A=R+N*x,L=N*o.strideHeight-l,O=0;O<a;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var z=O*n.strides[0],V=I+B*f,W=0;W<o.outWidth;++W)for(var H=A+W*w,G=W*o.strideWidth-c,j=0;j<i;j++){var ee=G+j*u;if(!(ee<0||ee>=o.inWidth))for(var ne=V+ee*m,ce=z+j*n.strides[1],le=0;le<o.inChannels;++le){for(var de=b[ne+le*v],ge=0;ge<o.outChannels;++ge)S[H+ge*y]+=de*_[ce+ge];ce+=o.outChannels}}}return d.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,d=o.padInfo.left,p=o.padInfo.top,f=se(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=f.values,x=0;x<o.batchSize;++x)for(var w=x*e.strides[0],y=x*f.strides[0],b=0;b<o.outDepth;++b)for(var _=y+b*f.strides[1],S=b*o.strideDepth-h,k=0;k<a;k++){var I=S+k*u;if(!(I<0||I>=o.inDepth))for(var R=k*n.strides[0],N=w+I*e.strides[1],A=0;A<o.outHeight;++A)for(var L=_+A*f.strides[2],O=A*o.strideHeight-p,B=0;B<i;B++){var z=O+B*c;if(!(z<0||z>=o.inHeight))for(var V=R+B*n.strides[1],W=N+z*e.strides[2],H=0;H<o.outWidth;++H)for(var G=L+H*o.outChannels,j=H*o.strideWidth-d,ee=0;ee<s;ee++){var ne=j+ee*l;if(!(ne<0||ne>=o.inWidth))for(var ce=V+ee*n.strides[2],le=W+ne*o.inChannels,de=ce,ge=0;ge<o.inChannels;++ge){for(var ve=m[le+ge],ye=0;ye<o.outChannels;++ye)g[G+ye]+=ve*v[de+ye];de+=o.outChannels}}}}return f.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){U([e,n],"conv2dDerInput");for(var a=se(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],d=c[2],p=o.batchSize,f=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,w=o.outChannels,y=o.outHeight,b=o.outWidth,_=o.strideHeight,S=o.strideWidth,k=o.dataFormat,I=f-1-o.padInfo.top,R=m-1-o.padInfo.left,N=k==="channelsLast",A=a.strides[0],L=N?a.strides[1]:a.strides[2],O=N?a.strides[2]:1,B=N?1:a.strides[1],z=e.strides[0],V=N?e.strides[1]:e.strides[2],W=N?e.strides[2]:1,H=N?1:e.strides[1],G=0;G<p;++G)for(var j=0;j<v;++j)for(var ee=0;ee<g;++ee)for(var ne=ee-I,ce=Math.max(0,Math.ceil(ne/_)),le=Math.min(y,(f+ne)/_),de=0;de<x;++de){for(var ge=de-R,ve=Math.max(0,Math.ceil(ge/S)),ye=Math.min(b,(m+ge)/S),We=0,me=ce;me<le;++me)for(var Ee=me*_-ne,we=ve;we<ye;++we)for(var Oe=z*G+V*me+W*we,Te=l*(f-1-Ee)+h*(m-1-(we*S-ge))+d*j,Ne=0;Ne<w;++Ne)We+=s[Oe+H*Ne]*u[Te+Ne];i[A*G+L*ee+O*de+B*j]=We}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=se(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],d=this.readSync(e.dataId),p=e.strides,f=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(n.dataId),w=n.strides,y=w[0],b=w[1],_=w[2],S=w[3],k=o.batchSize,I=o.filterDepth,R=o.filterHeight,N=o.filterWidth,A=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,z=o.outChannels,V=o.outDepth,W=o.outHeight,H=o.outWidth,G=o.strideDepth,j=o.strideHeight,ee=o.strideWidth,ne=I-1-o.padInfo.front,ce=R-1-o.padInfo.top,le=N-1-o.padInfo.left,de=0;de<k;++de)for(var ge=0;ge<A;++ge)for(var ve=0;ve<L;++ve)for(var ye=ve-ne,We=Math.max(0,Math.ceil(ye/G)),me=Math.min(V,(I+ye)/G),Ee=0;Ee<O;++Ee)for(var we=Ee-ce,Oe=Math.max(0,Math.ceil(we/j)),Te=Math.min(W,(R+we)/j),Ne=0;Ne<B;++Ne){for(var Pt=Ne-le,Mt=Math.max(0,Math.ceil(Pt/ee)),vt=Math.min(H,(N+Pt)/ee),Kn=0,en=We;en<me;++en)for(var gn=en*G-ye,tn=Oe;tn<Te;++tn)for(var Xn=tn*j-we,nn=Mt;nn<vt;++nn)for(var ma=f*de+m*en+v*tn+g*nn,Yn=y*(I-1-gn)+b*(R-1-Xn)+_*(N-1-(nn*ee-Pt))+S*ge,Ot=0;Ot<z;++Ot)Kn+=d[ma+Ot]*x[Yn+Ot];i[u*de+c*ve+l*Ee+h*Ne+ge]=Kn}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){U([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=se(o.filterShape,"float32"),h=o.padInfo.left,d=o.padInfo.top,p=this.bufferSync(e),f=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((d-m)/a)),g=Math.min(o.outHeight,(o.inHeight+d-m)/a),x=0;x<u;++x)for(var w=Math.max(0,Math.ceil((h-x)/i)),y=Math.min(o.outWidth,(o.inWidth+h-x)/i),b=0;b<o.inChannels;++b)for(var _=0;_<o.outChannels;++_){for(var S=0,k=0;k<o.batchSize;++k)for(var I=v;I<g;++I)for(var R=m+I*a-d,N=w;N<y;++N){var A=x+N*i-h;S+=c?p.get(k,R,A,b)*f.get(k,I,N,_):p.get(k,b,R,A)*f.get(k,_,I,N)}l.set(S,m,x,b,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=se(o.filterShape,"float32"),d=h.values,p=h.strides,f=p[0],m=p[1],v=p[2],g=p[3],x=this.readSync(n.dataId),w=n.strides,y=w[0],b=w[1],_=w[2],S=w[3],k=this.readSync(e.dataId),I=e.strides,R=I[0],N=I[1],A=I[2],L=I[3],O=o.padInfo.front,B=o.padInfo.left,z=o.padInfo.top,V=0;V<u;++V)for(var W=Math.max(0,Math.ceil((O-V)/a)),H=Math.min(o.outDepth,(o.inDepth+O-V)/a),G=V*f,j=0;j<c;++j)for(var ee=Math.max(0,Math.ceil((z-j)/i)),ne=Math.min(o.outHeight,(o.inHeight+z-j)/i),ce=j*m+G,le=0;le<l;++le)for(var de=Math.max(0,Math.ceil((B-le)/s)),ge=Math.min(o.outWidth,(o.inWidth+B-le)/s),ve=le*v+ce,ye=0;ye<o.inChannels;++ye)for(var We=ye*g+ve,me=0;me<o.outChannels;++me){for(var Ee=0,we=0;we<o.batchSize;++we)for(var Oe=we*R,Te=we*y,Ne=W;Ne<H;++Ne)for(var Pt=(V+Ne*a-O)*N+Oe,Mt=Ne*b+Te,vt=ee;vt<ne;++vt)for(var Kn=(j+vt*i-z)*A+Pt,en=vt*_+Mt,gn=de;gn<ge;++gn){var tn=gn*S+en;Ee+=k[(le+gn*s-B)*L+Kn+ye]*x[tn+me]}d[We+me]=Ee}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Ya(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){U([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,d=se(o.outShape,e.dtype),p=this.readSync(e.dataId),f=this.readSync(n.dataId),m=d.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*d.strides[0],w=0;w<o.outHeight;++w)for(var y=x+w*d.strides[1],b=w*o.strideHeight-c,_=0;_<a;++_){var S=b+_*s;if(!(S<0||S>=o.inHeight))for(var k=_*n.strides[0],I=g+S*e.strides[1],R=0;R<o.outWidth;++R)for(var N=y+R*d.strides[2],A=R*o.strideWidth-l,L=0;L<i;++L){var O=A+L*u;if(!(O<0||O>=o.inWidth))for(var B=k+L*n.strides[1],z=I+O*o.inChannels,V=N,W=B,H=0;H<o.inChannels;++H){for(var G=p[z+H],j=0;j<h;++j)m[V+j]+=G*f[W+j];V+=h,W+=h}}}return d.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){U([e,n],"depthwiseConv2DDerInput");for(var a=se(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),d=e.strides,p=d[0],f=d[1],m=d[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],w=g[1],y=g[2],b=o.batchSize,_=o.filterHeight,S=o.filterWidth,k=o.inChannels,I=o.inHeight,R=o.inWidth,N=o.outChannels,A=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,z=_-1-o.padInfo.top,V=S-1-o.padInfo.left,W=N/k,H=0;H<b;++H)for(var G=0;G<k;++G)for(var j=0;j<I;++j)for(var ee=j-z,ne=Math.max(0,Math.ceil(ee/O)),ce=Math.min(A,(_+ee)/O),le=0;le<R;++le){for(var de=le-V,ge=Math.max(0,Math.ceil(de/B)),ve=Math.min(L,(S+de)/B),ye=0,We=ne;We<ce;++We)for(var me=We*O-ee,Ee=ge;Ee<ve;++Ee)for(var we=p*H+f*We+m*Ee,Oe=x*(_-1-me)+w*(S-1-(Ee*B-de))+y*G,Te=0;Te<W;++Te)ye+=h[we+(G*W+Te)]*v[Oe+Te];i[u*H+c*j+l*le+G]=ye}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){U([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=se(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,d=o.outChannels/o.inChannels,p=this.bufferSync(e),f=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),x=0;x<u;++x)for(var w=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),b=0;b<o.outChannels;++b){for(var _=Math.trunc(b/d),S=b%d,k=0,I=0;I<o.batchSize;++I)for(var R=v;R<g;++R)for(var N=m+R*a-h,A=w;A<y;++A){var L=x+A*i-l;k+=p.get(I,N,L,_)*f.get(I,R,A,b)}c.set(k,m,x,_,S)}return c.toTensor()},t.prototype.tile=function(e,n){return U(e,"tile"),Vc(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){U(e,"pad");var a=n.map(function(d,p){return d[0]+e.shape[p]+d[1]}),i=n.map(function(d){return d[0]}),s=this.bufferSync(e),u=se(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(d,p){return d+i[p]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){U(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=se(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var d=s.locToIndex(l);s.values[d]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){U([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=se(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var d=u.locToIndex(h);s.values[c]=u.values[d]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){U([e],"batchToSpaceND");var a=n.reduce(function(h,d){return h*d}),i=Mo(e.shape,n,a),s=Oo(i.length,n.length),u=Bo(e.shape,n,a),c=kc(o,n.length),l=Sc(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){U([e],"spaceToBatchND");var a=n.reduce(function(d,p){return d*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Mo(u.shape,n,a,!1),l=Oo(c.length,n.length,!1),h=Bo(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,o){U(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,d=n.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,f=this.readSync(e.dataId),m=se(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],w=n.outShape[3],y=0;y<n.batchSize;++y)for(var b=y*g,_=y*e.strides[0],S=0;S<n.inChannels;++S)for(var k=0;k<n.outHeight;++k)for(var I=k*a-h,R=Math.max(0,I),N=Math.min(n.inHeight,c+I),A=b+k*x,L=0;L<n.outWidth;++L){for(var O=L*i-d,B=Math.max(0,O),z=Math.min(n.inWidth,l+O),V=p,W=0,H=0,G=R;G<N;G+=s){for(var j=_+G*e.strides[1],ee=B;ee<z;ee+=u){var ne=f[j+ee*e.strides[2]+S];o==="max"&&ne>V?V=ne:o==="avg"&&(W+=ne,H++)}if(isNaN(V))break}v[A+L*w+S]=o==="avg"?W/H:V}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=se(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,d=n.padInfo.left,p=this.bufferSync(e),f=0;f<n.batchSize;++f)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-h,x=g;x<0;)x+=s;for(var w=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var b=y*i-d,_=b;_<0;)_+=u;for(var S=Math.min(n.inWidth,l+b),k=Number.NEGATIVE_INFINITY,I=-1,R=x;R<w;R+=s)for(var N=R-g,A=_;A<S;A+=u){var L=A-b,O=p.get(f,R,A,m);O>k&&(k=O,I=N*l+L)}o.set(I,f,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){U([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,d=a.effectiveFilterWidth,p=d-1-a.padInfo.left,f=h-1-a.padInfo.top,m=se(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var w=0;w<a.inChannels;++w)for(var y=0;y<a.inHeight;++y)for(var b=0;b<a.inWidth;++b){for(var _=y-f,S=b-p,k=0,I=0;I<h;I+=c){var R=(_+I)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var N=0;N<d;N+=l){var A=(S+N)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var L=h*d-1-v.get(x,R,A,w)===I*d+N?1:0;L!==0&&(k+=g.get(x,R,A,w)*L)}}}m.set(k,x,y,b,w)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){U([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,d=o.effectiveFilterWidth,p=d-1-o.padInfo.left,f=h-1-o.padInfo.top,m=se(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var w=0;w<o.inChannels;++w)for(var y=0;y<o.inHeight;++y)for(var b=0;b<o.inWidth;++b){for(var _=y-f,S=b-p,k=0,I=0;I<h;I+=c){var R=(_+I)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var N=0;N<d;N+=l){var A=(S+N)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(k+=g.get(x,R,A,w))}}m.set(k*v,x,y,b,w)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){U(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,d=n.effectiveFilterHeight,p=n.effectiveFilterWidth,f=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),w=se(n.outShape,e.dtype),y=w.values,b=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],S=n.outShape[3]*n.outShape[4],k=n.outShape[4],I=0;I<n.batchSize;++I)for(var R=I*b,N=I*e.strides[0],A=0;A<n.inChannels;++A)for(var L=0;L<n.outDepth;++L){for(var O=L*a-f,B=O;B<0;)B+=u;for(var z=Math.min(n.inDepth,h+O),V=R+L*_,W=0;W<n.outHeight;++W){for(var H=W*i-m,G=H;G<0;)G+=c;for(var j=Math.min(n.inHeight,d+H),ee=V+W*S,ne=0;ne<n.outWidth;++ne){for(var ce=ne*s-v,le=ce;le<0;)le+=l;for(var de=Math.min(n.inWidth,p+ce),ge=ee+ne*k,ve=g,ye=0,We=0,me=B;me<z;me+=u){for(var Ee=N+me*e.strides[1],we=G;we<j;we+=c){for(var Oe=Ee+we*e.strides[2],Te=le;Te<de;Te+=l){var Ne=x[Oe+Te*e.strides[3]+A];if(o==="max"&&Ne>ve?ve=Ne:o==="avg"&&(ye+=Ne,We++),isNaN(ve))break}if(isNaN(ve))break}if(isNaN(ve))break}y[ge+A]=o==="avg"?ye/We:ve}}}return w.toTensor()},t.prototype.avgPool3d=function(e,n){return U(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){U([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,d=o.dilationHeight,p=o.dilationWidth,f=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=f-1-o.padInfo.front,x=v-1-o.padInfo.left,w=m-1-o.padInfo.top,y=se(n.shape,"float32"),b=1/(u*c*l),_=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var k=0;k<o.inChannels;++k)for(var I=0;I<o.inDepth;++I)for(var R=0;R<o.inHeight;++R)for(var N=0;N<o.inWidth;++N){for(var A=I-g,L=R-w,O=N-x,B=0,z=0;z<f;z+=h){var V=(A+z)/a;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var W=0;W<m;W+=d){var H=(L+W)/i;if(!(H<0||H>=o.outHeight||Math.floor(H)!==H))for(var G=0;G<v;G+=p){var j=(O+G)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=_.get(S,V,H,j,k))}}}y.set(B*b,S,I,R,N,k)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return U(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=se(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,d=n.effectiveFilterHeight,p=n.effectiveFilterWidth,f=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var w=0;w<n.inChannels;++w)for(var y=0;y<n.outDepth;++y){for(var b=y*a-f,_=b;_<0;)_+=u;for(var S=Math.min(n.inDepth,h+b),k=0;k<n.outHeight;++k){for(var I=k*i-m,R=I;R<0;)R+=c;for(var N=Math.min(n.inHeight,d+I),A=0;A<n.outWidth;++A){for(var L=A*s-v,O=L;O<0;)O+=l;for(var B=Math.min(n.inWidth,p+L),z=Number.NEGATIVE_INFINITY,V=-1,W=_;W<S;W+=u)for(var H=W-b,G=R;G<N;G+=c)for(var j=G-I,ee=O;ee<B;ee+=l){var ne=ee-L,ce=g.get(x,W,G,ee,w);ce>=z&&(z=ce,V=H*d*p+j*d+ne)}o.set(V,x,y,k,A,w)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){U([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,d=a.dilationWidth,p=a.effectiveFilterDepth,f=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=p-1-a.padInfo.front,g=m-1-a.padInfo.left,x=f-1-a.padInfo.top,w=se(n.shape,"float32"),y=this.bufferSync(i),b=this.bufferSync(e),_=0;_<a.batchSize;++_)for(var S=0;S<a.inChannels;++S)for(var k=0;k<a.inDepth;++k)for(var I=0;I<a.inHeight;++I)for(var R=0;R<a.inWidth;++R){for(var N=k-v,A=I-x,L=R-g,O=0,B=0;B<p;B+=l){var z=(N+B)/s;if(!(z<0||z>=a.outDepth||Math.floor(z)!==z))for(var V=0;V<f;V+=h){var W=(A+V)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var H=0;H<m;H+=d){var G=(L+H)/c;if(!(G<0||G>=a.outWidth||Math.floor(G)!==G)){var j=p*f*m-1-y.get(_,z,W,G,S)===B*f*m+V*m+H?1:0;j!==0&&(O+=b.get(_,z,W,G,S)*j)}}}}w.set(O,_,k,I,R,S)}return w.toTensor()},t.prototype.cast=function(e,n){return Oc(e,n,this)},t.prototype.reshape=function(e,n){return wi(e,n)},t.prototype.avgPool=function(e,n){return U(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){U(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),d=new Float32Array(Y([s,n,o,l])),p=[a&&n>1?u-1:u,a&&o>1?c-1:c],f=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=p[0]/f[0],g=p[1]/f[1],x=0;x<s;x++)for(var w=0;w<n;w++)for(var y=v*w,b=Math.floor(y),_=y-b,S=Math.min(u-1,Math.ceil(y)),k=x*e.strides[0]+b*e.strides[1],I=x*e.strides[0]+S*e.strides[1],R=0;R<o;R++)for(var N=g*R,A=Math.floor(N),L=N-A,O=Math.min(c-1,Math.ceil(N)),B=k+A*e.strides[2],z=I+A*e.strides[2],V=k+O*e.strides[2],W=I+O*e.strides[2],H=0;H<l;H++){var G=h[B+H],j=h[z+H],ee=G+(h[V+H]-G)*L,ne=ee+(j+(h[W+H]-j)*L-ee)*_;d[m++]=ne}return et(d,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){U([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],d=l[2],p=new Float32Array(i*s*u*c),f=[o&&h>1?s-1:s,o&&d>1?u-1:u],m=[o&&h>1?h-1:h,o&&d>1?d-1:d],v=f[0]/m[0],g=f[1]/m[1],x=this.readSync(e.dataId),w=0,y=0;y<i;y++)for(var b=y*n.strides[0],_=0;_<h;_++)for(var S=_*v,k=Math.floor(S),I=Math.min(Math.ceil(S),s-1),R=b+k*n.strides[1],N=b+I*n.strides[1],A=S-k,L=1-A,O=0;O<d;O++)for(var B=O*g,z=Math.floor(B),V=Math.min(Math.ceil(B),u-1),W=B-z,H=1-W,G=R+z*n.strides[2],j=R+V*n.strides[2],ee=N+z*n.strides[2],ne=N+V*n.strides[2],ce=L*H,le=L*W,de=A*H,ge=A*W,ve=0;ve<c;ve++){var ye=x[w++];p[G+ve]+=ye*ce,p[j+ve]+=ye*le,p[ee+ve]+=ye*de,p[ne+ve]+=ye*ge}return lt(p,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){U(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),d=new Float32Array(s*n*o*l),p=[a&&n>1?u-1:u,a&&o>1?c-1:c],f=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=p[0]/f[0],v=p[1]/f[1],g=0,x=0;x<s;x++)for(var w=x*e.strides[0],y=0;y<n;y++)for(var b=m*y,_=w+Math.min(u-1,a?Math.round(b):Math.floor(b))*e.strides[1],S=0;S<o;S++)for(var k=v*S,I=_+Math.min(c-1,a?Math.round(k):Math.floor(k))*e.strides[2],R=0;R<l;R++){var N=h[I+R];d[g++]=N}return et(d,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){U([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],d=l[2],p=new Float32Array(i*s*u*c),f=this.readSync(e.dataId),m=[o&&h>1?s-1:s,o&&d>1?u-1:u],v=[o&&h>1?h-1:h,o&&d>1?d-1:d],g=m[0]/v[0],x=m[1]/v[1],w=1/g,y=1/x,b=2*Math.ceil(w)+2,_=2*Math.ceil(y)+2,S=0;S<i;S++)for(var k=S*n.strides[0],I=0;I<s;I++)for(var R=k+I*n.strides[1],N=Math.floor(I*w),A=Math.floor(N-b/2),L=0;L<u;L++)for(var O=R+L*n.strides[2],B=Math.floor(L*y),z=Math.floor(B-_/2),V=0;V<c;V++){for(var W=0,H=0;H<b;H++){var G=H+A;if(!(G<0||G>=h)){var j=k+G*e.strides[1],ee=G*g;if(I===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var ne=0;ne<_;ne++){var ce=ne+z;if(!(ce<0||ce>=d)){var le=j+ce*e.strides[2],de=ce*x;L===Math.min(u-1,o?Math.round(de):Math.floor(de))&&(W+=f[le+V])}}}}p[O+V]=W}return lt(p,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){U([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),d=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),f=d.length,m=h.length,v=l.length,g=c.length,x=0,w=0,y=0,b=0,_=0;_<u.length;++_)p[_]=d[x++]+(u[_]-c[w++])*h[y++]/Math.sqrt(l[b++]+a),x>=f&&(x=0),w>=g&&(w=0),y>=m&&(y=0),b>=v&&(b=0);return lt(p,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){U(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function d(v){for(var g=v%s,x=v-g+Math.max(0,g-n),w=v-g+Math.min(g+n,u),y=0;x<=w;x++){var b=c[x];y+=b*b}return y}for(var p=0;p<l;p++){var f=d(p),m=c[p]*Math.pow(o+a*f,-i);h[p]=m}return lt(h,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){U(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),d=this.readSync(o.dataId),p=new Float32Array(e.size),f=e.size,m=0;m<f;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),w=0,y=g;y<x;y++)w+=Math.pow(h[y],2);for(w=s*w+i,y=g;y<x;y++){var b=-2*s*u*h[y]*d[m]/w;m===y&&(b+=Math.pow(w,-u)),b*=l[m],p[y]+=b}}return lt(p,e.shape)},t.prototype.multinomial=function(e,n,o,a){U(e,"multinomial");for(var i=n?e:dn(e),s=i.shape[0],u=i.shape[1],c=De([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),d=0;d<s;++d){var p=d*u,f=new Float32Array(u-1);f[0]=h[p];for(var m=1;m<f.length;++m)f[m]=f[m-1]+h[p+m];for(var v=ea(a.toString()),g=d*o,x=0;x<o;++x){var w=v();l[g+x]=f.length;for(var y=0;y<f.length;y++)if(w<f[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){U(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return In(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return U(e,"nonMaxSuppression"),Hi(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=se(e.shape,"float32"),s=se(e.shape,"float32"),u=Et(e).as2D(o,a),c=Gt(e).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),d=c.slice([l,0],[1,a]),p=Qe(h,d),f=this.readSync(this.fftImpl(p,n).dataId),m=0;m<a;m++){var v=su(f,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return Qe(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=Qe(Et(i).div(q(a)),Gt(i).div(q(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),d=0;d<c.length;d+=2)l[d/2]=c[d],h[d/2]=c[d+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,n));return Qe(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var x=Math.ceil(g.length/4),w=new Float32Array(x),y=new Float32Array(x),b=0;b<g.length;b+=4)w[Math.floor(b/4)]=g[b],y[Math.floor(b/4)]=g[b+1];return{real:w,imag:y}}(a),u=Qe(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),w=new Float32Array(x),y=new Float32Array(x),b=2;b<g.length;b+=4)w[Math.floor(b/4)]=g[b],y[Math.floor(b/4)]=g[b+1];return{real:w,imag:y}}(a),l=Qe(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(g,x){for(var w=new Float32Array(g/2),y=new Float32Array(g/2),b=0;b<Math.ceil(g/2);b++){var _=(x?2:-2)*Math.PI*(b/g);w[b]=Math.cos(_),y[b]=Math.sin(_)}return{real:w,imag:y}}(n,o),d=Qe(h.real,h.imag).mul(l),p=u.add(d),f=u.sub(d),m=Et(p).concat(Et(f)),v=Gt(p).concat(Gt(f));return Qe(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Ff(i*c,n,o),h=su(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),Nf(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,h=u/(n*n),d=this.readSync(e.dataId),p=new Float32Array(a*c*l*h),f=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,w=0;w<l;++w)for(var y=Math.floor(w/n),b=(x*n+w%n)*h,_=0;_<h;++_){var S=_+b+u*(y+s*(g+i*m));p[f++]=d[S]}return lt(p,[a,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=pe(e.shape,n.shape),s=se(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=_n(e.shape,i),h=_n(n.shape,i),d=s.values;if(l.length+h.length===0)for(var p=0;p<d.length;++p)d[p]=a(u[p%u.length],c[p%c.length]);else{var f=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),w=x.slice(-e.rank);l.forEach(function(S){return w[S]=0});var y=f.locToIndex(w),b=x.slice(-n.rank);h.forEach(function(S){return b[S]=0});var _=m.locToIndex(b);d[g]=a(u[y],c[_])};for(p=0;p<d.length;++p)v(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=pe(e.shape,n.shape),i=se(a,"float32"),s=se(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=_n(e.shape,a),h=_n(n.shape,a),d=i.values,p=s.values;if(l.length+h.length===0)for(var f=0;f<d.length;f++){var m=f%u.length,v=f%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);d[f]=g.real,p[f]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),w=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(b){var _=i.indexToLoc(b),S=_.slice(-e.rank);l.forEach(function(A){return S[A]=0});var k=x.locToIndex(S),I=_.slice(-n.rank);h.forEach(function(A){return I[A]=0});var R=w.locToIndex(I),N=o(u[2*k],u[2*k+1],c[2*R],c[2*R+1]);d[b]=N.real,p[b]=N.imag};for(f=0;f<d.length;f++)y(f)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return Wc(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],d=u[3],p=n.shape[0],f=a[0],m=a[1],v=se([p,f,m,d],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),w=this.readSync(e.dataId),y=e.strides,b=v.strides,_=0;_<p;_++){var S=4*_,k=g[S],I=g[S+1],R=g[S+2],N=g[S+3],A=x[_];if(!(A>=c))for(var L=f>1?(R-k)*(l-1)/(f-1):0,O=m>1?(N-I)*(h-1)/(m-1):0,B=0;B<f;B++){var z=f>1?k*(l-1)+B*L:.5*(k+R)*(l-1);if(z<0||z>l-1)for(var V=0;V<m;V++)for(var W=0;W<d;W++){var H=W+V*b[2]+B*b[1]+_*b[0];v.values[H]=s}else if(i==="bilinear"){var G=Math.floor(z),j=Math.ceil(z),ee=z-G;for(V=0;V<m;V++)if((me=m>1?I*(h-1)+V*O:.5*(I+N)*(h-1))<0||me>h-1)for(W=0;W<d;W++)H=W+V*b[2]+B*b[1]+_*b[0],v.values[H]=s;else{var ne=Math.floor(me),ce=Math.ceil(me),le=me-ne;for(W=0;W<d;W++){var de=w[H=W+ne*y[2]+G*y[1]+A*y[0]],ge=w[H=W+ce*y[2]+G*y[1]+A*y[0]],ve=w[H=W+ne*y[2]+j*y[1]+A*y[0]],ye=de+(ge-de)*le,We=ve+(w[H=W+ce*y[2]+j*y[1]+A*y[0]]-ve)*le;H=W+V*b[2]+B*b[1]+_*b[0],v.values[H]=ye+(We-ye)*ee}}}else for(V=0;V<m;++V){var me;if((me=m>1?I*(h-1)+V*O:.5*(I+N)*(h-1))<0||me>h-1)for(W=0;W<d;W++)H=W+V*b[2]+B*b[1]+_*b[0],v.values[H]=s;else{var Ee=Math.round(me),we=Math.round(z);for(W=0;W<d;W++){var Oe=W+Ee*y[2]+we*y[1]+A*y[0],Te=W+V*b[2]+B*b[1]+_*b[0];v.values[Te]=w[Oe]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=Lo(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(e,n,o,h,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=Dc(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return et([],s,e.dtype);for(var h=new Br([u,c],e.dtype),d=this.readSync(n.dataId),p=this.readSync(e.dataId),f=0;f<u;f++){for(var m=[],v=0,g=0;g<a;g++){var x=d[f*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var w=0;w<c;w++)h.values[f*c+w]=p[v*c+w]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=Lo(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=q(0);return this.scatter(e,n,o,l,u,s,i,c,h,!0)},t.prototype.fill=function(e,n,o){var a=So(o=o||jr(n),Y(e));return a.fill(n),T.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=So(e.dtype,Y(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return Bc(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,h){var d=[a/i,i],p=this.readSync(e.dataId),f=this.readSync(n.dataId);if(a===0)return et([],o,n.dtype);var m=new Br(d,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,w=0;w<u;w++){var y=p[v*u+w];g.push(y),x+=y*c[w]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var b=0;b<i;b++)h?m.values[x*i+b]+=f[v*i+b]:m.values[x*i+b]=n.rank===0?f[0]:f[v*i+b]}return m.toTensor().reshape(o)},t}(Pc);T.registerBackend("cpu",function(){return new Z0},1);for(var Ja=0,Du=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,d=e;U(a,"NonMaxSuppressionWithScore");var p=Gi(d.data.get(a.dataId).values,d.data.get(i.dataId).values,u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;U(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:Vr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;U([o,a],Vr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(d,p,f,m,v,g){var x=pe(d,p),w=x.length,y=Kt(x),b=Or(v,Y(x)),_=d.length,S=p.length,k=Kt(d),I=Kt(p),R=_n(d,x),N=_n(p,x);if(R.length+N.length===0)for(var A=0;A<b.length;++A)b[A]=g(f[A%f.length],m[A%m.length]);else{var L=function(O){var B=up(O,w,y),z=B.slice(-_);R.forEach(function(G){return z[G]=0});var V=Qs(z,_,k),W=B.slice(-S);N.forEach(function(G){return W[G]=0});var H=Qs(W,S,I);b[O]=g(f[V],m[H])};for(A=0;A<b.length;++A)L(A)}return[b,x]}(o.shape,a.shape,s,u,o.dtype,function(d,p){var f=d-p;return f*f}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Ja<Du.length;Ja++)uc(Du[Ja]);var Zn,ey=function(r){this.variableNames=["A"];var t=ot(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},ty=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=ot(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Qa=0,Au=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],d=[l,c,a];(s||i)&&(Zn==null&&(Zn=document.createElement("canvas").getContext("2d")),Zn.canvas.width=c,Zn.canvas.height=l,Zn.drawImage(o,0,0,c,l),o=Zn.canvas);var p=e.makeTensorInfo(h,"int32");e.texData.get(p.dataId).usage=yt.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(p.dataId),o);var f=M().getBool("WEBGL_PACK")?new ty(d):new ey(d),m=e.runWebGLProgram(f,[p],"int32");return e.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;No("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,d=e,p=Gi(d.readSync(a.dataId),d.readSync(i.dataId),u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ue(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:Vr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new on("return (a - b) * (a - b);",o.shape,a.shape):new Be("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Qa<Au.length;Qa++)uc(Au[Qa]);for(var Za=0,Tu=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:Vr,gradFunc:function(r,t){var e=t[0],n=t[1],o=q(2);return{a:function(){return it(r,it(o,je(e,n)))},b:function(){return it(r,it(o,je(n,e)))}}}}];Za<Tu.length;Za++)Jd(Tu[Za]);var ny=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();M().get("IS_BROWSER")&&M().setPlatform("browser",new ny);var ei,ry=function(){return require("node-fetch")},oy=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return M().global.fetch!=null?M().global.fetch(t,e):(ei==null&&(ei=ry()),ei(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();M().get("IS_NODE")&&M().setPlatform("node",new oy);var Ei={float32:4,int32:4,uint16:2,uint8:1,bool:1},qo=4;function Tl(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),d=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var f=Ei[p.dtype],m=r.slice(n,n+h*f),v=p.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")d=Float32Array.from(v,function(_){return _*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=Int32Array.from(v,function(_){return Math.round(_*p.scale+p.min)})}n+=h*f}else if(c==="string"){var g=Y(s.shape);d=[];for(var x=0;x<g;x++){var w=new Uint32Array(r.slice(n,n+qo))[0];n+=qo;var y=new Uint8Array(r.slice(n,n+w));d.push(y),n+=w}}else{var b=Ei[c];if(m=r.slice(n,n+h*b),c==="float32")d=new Float32Array(m);else if(c==="int32")d=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=new Uint8Array(m)}n+=h*b}e[u]=et(d,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function ay(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var Ii=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Nu(r){return Ii?Buffer.byteLength(r):new Blob([r]).size}function cs(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function Fu(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Zr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Nu(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Nu(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var xt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),cr="://",Rn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(cr)&&(t=t.slice(0,t.indexOf(cr))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Io(r){if(r.indexOf(cr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Rn.getSchemes().join(","));return{scheme:r.split(cr)[0],path:r.split(cr)[1]}}function Pu(r,t,e){return e===void 0&&(e=!1),K(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h;return X(this,function(d){switch(d.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=xt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=xt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=Io(r).scheme,u=Io(r).path,c=s===Io(r).scheme,[4,o.load()];case 1:return l=d.sent(),e&&c?[4,Rn.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return[4,i.save(l)];case 4:return h=d.sent(),!e||c?[3,6]:[4,Rn.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Ln="models_store",Cn="model_info_store";function Nl(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ri(r){var t=r.result;t.createObjectStore(Ln,{keyPath:"modelPath"}),t.createObjectStore(Cn,{keyPath:"modelPath"})}var lr=function(){function r(t){if(this.indexedDB=Nl(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ri(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Ln,"readonly"),c=u.objectStore(Ln).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=Zr(e),d=s.transaction(Cn,"readwrite"),p=d.objectStore(Cn),f=p.put({modelPath:n.modelPath,modelArtifactsInfo:h});f.onsuccess=function(){var m=(l=s.transaction(Ln,"readwrite")).objectStore(Ln).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});m.onsuccess=function(){return o({modelArtifactsInfo:h})},m.onerror=function(v){var g=(p=d.objectStore(Cn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},f.onerror=function(m){return s.close(),a(f.error)},d.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Mu=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(lr.URL_SCHEME)?(t=r.slice(lr.URL_SCHEME.length),new lr(t)):null;var t};xt.registerSaveRouter(Mu),xt.registerLoadRouter(Mu);var iy=function(){function r(){this.indexedDB=Nl()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t=this;return X(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ri(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Cn,"readonly"),u=s.objectStore(Cn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var d=h[l];c[d.modelPath]=d.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){var o;return t=(o=t).startsWith(lr.URL_SCHEME)?o.slice(lr.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ri(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Cn,"readwrite"),h=l.objectStore(Cn),d=h.get(t);d.onsuccess=function(){if(d.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=h.delete(t),f=function(){var m=(u=c.transaction(Ln,"readwrite")).objectStore(Ln).delete(t);m.onsuccess=function(){return a(d.result.modelArtifactsInfo)},m.onerror=function(v){return i(d.error)}};p.onsuccess=f,p.onerror=function(m){return f(),c.close(),i(d.error)}},d.onerror=function(p){return c.close(),i(d.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(M().getBool("IS_BROWSER"))try{Rn.registerManager(lr.URL_SCHEME,new iy)}catch{}var un="/",ar="tensorflowjs_models",Fl="info",sy="model_topology",uy="weight_specs",cy="weight_data",ly="model_metadata";function Pl(r){return{info:[ar,r,Fl].join(un),topology:[ar,r,sy].join(un),weightSpecs:[ar,r,uy].join(un),weightData:[ar,r,cy].join(un),modelMetadata:[ar,r,ly].join(un)}}function hy(r){var t=r.split(un);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(un)}var hr=function(){function r(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Pl(this.modelPath)}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Zr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Ii)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return X(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Ii){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),d=new Uint8Array(h.length),p=0;p<h.length;++p)d.set([h.charCodeAt(p)],p);return d.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Ou=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(hr.URL_SCHEME)?(t=r.slice(hr.URL_SCHEME.length),new hr(t)):null;var t};xt.registerSaveRouter(Ou),xt.registerLoadRouter(Ou);var dy=function(){function r(){E(M().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i;return X(this,function(s){for(t={},e=ar+un,n=un+Fl,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=hy(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){var a;if(t=(a=t).startsWith(hr.URL_SCHEME)?a.slice(hr.URL_SCHEME.length):a,e=Pl(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(M().getBool("IS_BROWSER"))try{Rn.registerManager(hr.URL_SCHEME,new dy)}catch{}var py="model",fy=".json",vy=".weights.bin";function Bu(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var ti=function(){function r(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=py),this.modelTopologyFileName=t+fy,this.weightDataFileName=t+vy}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s;return X(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Bu(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Bu(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Zr(t)}]}})})},r.URL_SCHEME="downloads://",r}(),my=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n=this;return X(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var d;try{d=n.checkManifestAndWeightFiles(h,e)}catch(v){return void i(v)}var p=[],f=[],m=[];h.forEach(function(v){v.paths.forEach(function(g){f.push(g),m.push(null)}),p.push.apply(p,v.weights)}),h.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(w){var y=w.target.result,b=f.indexOf(g);m[b]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:p,weightData:cs(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(w){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(d[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return Fu(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=Fu(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Lu(r,t,e,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function Ml(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return X(this,function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,n=r.map(function(d){return e(d,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,Lu(n,t.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(d){return d.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,Lu(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function Wu(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),K(t,void 0,void 0,function(){var a,i,s,u,c,l,h,d,p,f;return X(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(w){var y="quantization"in w?w.quantization.dtype:w.dtype,b=Ei[y]*Y(w.shape),_=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:w,groupOffset:x,sizeBytes:b})};o!=null?o.forEach(function(S,k){S===w.name&&(_(),s[k]=!0)}):_(),u.push(w.name),x+=b})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,x){return g&&v.push(x),v},[]),h=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;h.push(x)})}),[4,r(h)];case 1:return d=m.sent(),p={},f=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,w=0;w<g;w++)x+=d[f+w].byteLength;for(var y=new ArrayBuffer(x),b=new Uint8Array(y),_=0,S=0;S<g;S++){var k=new Uint8Array(d[f+S]);b.set(k,_),_+=k.byteLength}i[v].forEach(function(I){var R=Tl(y.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var N in R)p[N]=R[N]}),f+=g}),[2,p]}})})}}xt.registerSaveRouter(function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ti.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ti(t)}(r.slice(ti.URL_SCHEME.length)):null});var Ol=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,a;return X(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:Zr(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,h,d;return X(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return e=p.sent(),[3,5];case 4:throw p.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:d=p.sent(),l=d[0],h=d[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h,d;return X(this,function(p){switch(p.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(f){var m=f.lastIndexOf("/"),v=f.lastIndexOf("?"),g=f.substring(0,m),x=v>m?f.substring(v):"";return[g+"/",x]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(f){f.paths.forEach(function(m){h.push(i+m+a)})}),[4,Ml(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=p.sent(),[2,[s,cs(d)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function ki(r){return r.match(Ol.URL_SCHEME_REGEX)!=null}var Vu=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return ki(e)}):ki(r))?Si(r,{onProgress:t}):null};function Si(r,t){return new Ol(r,t)}xt.registerSaveRouter(Vu),xt.registerLoadRouter(Vu);var ni=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.modelArtifacts]})})},r}(),gy=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Bl=Object.freeze({browserFiles:function(r){return new my(r)},browserHTTPRequest:function(r,t){return Si(r,t)},concatenateArrayBuffers:cs,decodeWeights:Tl,encodeWeights:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return X(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var d={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var p=new Promise(function(f){return K(s,void 0,void 0,function(){var m,v,g,x,w,y,b;return X(this,function(_){switch(_.label){case 0:return[4,h.bytes()];case 1:for(m=_.sent(),v=m.reduce(function(S,k){return S+k.length},0)+qo*m.length,g=new Uint8Array(v),x=0,w=0;w<m.length;w++)y=m[w],b=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(b,x),x+=qo,g.set(y,x),x+=y.length;return f(g),[2]}})})});n.push(p)}else n.push(h.data());t!=null&&(d.group=t),e.push(d)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:ay(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new ni(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ni({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ni({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return xt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Zr,getSaveHandlers:function(r){return xt.getSaveHandlers(r)},http:Si,isHTTPScheme:ki,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),K(this,void 0,void 0,function(){return X(this,function(o){return[2,Wu(function(a){return Ml(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return xt.registerLoadRouter(r)},registerSaveRouter:function(r){return xt.registerSaveRouter(r)},weightsLoaderFactory:Wu,withSaveHandler:function(r){return new gy(r)},copyModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,Pu(r,t,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return X(this,function(s){switch(s.label){case 0:r=Rn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,Rn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+cr+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,Pu(r,t,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var t;return X(this,function(e){return t=Io(r),[2,Rn.getManager(t.scheme).removeModel(t.path)]})})}}),er;D({confusionMatrix_:function(r,t,e){var n=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=xi(n.asType("int32"),e),i=xi(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var yy=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(sc("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(a||o)&&(er==null&&(er=document.createElement("canvas").getContext("2d")),er.canvas.width=l,er.canvas.height=h,er.drawImage(r,0,0,l,h),s=er.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var d=l*h;u=new Int32Array(d*t);for(var p=0;p<d;p++)for(var f=0;f<t;++f)u[p*t+f]=s[4*p+f]}return Li(u,[h,l,t],"int32")}}),ls=Object.freeze({toPixels:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h,d,p,f,m,v,g,x,w,y,b,_,S,k;return X(this,function(I){switch(I.label){case 0:if(e=C(r,"img","toPixels"),r instanceof Fe||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=I.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],d=l[1],p=h[0],f=d[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(p<0||f>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+f+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(p<0||f>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+f+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,w=void 0,y=void 0,b=void 0,i===1?(x=s[g]*m,w=s[g]*m,y=s[g]*m,b=255):i===3?(x=s[3*g]*m,w=s[3*g+1]*m,y=s[3*g+2]*m,b=255):i===4&&(x=s[4*g]*m,w=s[4*g+1]*m,y=s[4*g+2]*m,b=s[4*g+3]*m),v[(_=4*g)+0]=Math.round(x),v[_+1]=Math.round(w),v[_+2]=Math.round(y),v[_+3]=Math.round(b);return t!=null&&(t.width=a,t.height=o,S=t.getContext("2d"),k=new ImageData(v,a,o),S.putImageData(k,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:yy}),xy=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),by=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function jn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),by.register(r)}var $n=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Tt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return dt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Af(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&dt(this.iterations_)},t.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return X(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(xy);Object.defineProperty($n,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var wy=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:$(function(){return be(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:$(function(){return be(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),d=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(d);var p=h.mul(-n.learningRate).add(i);i.assign(p)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(dt(this.accumulatedGrads.map(function(e){return e.variable})),dt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}($n);jn(wy);var _y=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:$(function(){return Xt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&dt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}($n);jn(_y);var Cy=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],$(function(){i.accBeta1=q(n).variable(),i.accBeta2=q(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=je(1,n.accBeta1),i=je(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return be(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return be(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,d=n.accumulatedSecondMoment[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),f=d.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=p.div(a),v=f.div(i);h.assign(p),d.assign(f);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&dt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n,o=this;return X(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),$(function(){o.accBeta1.assign(Ho(o.beta1,o.iterations_+1)),o.accBeta2.assign(Ho(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}($n);jn(Cy);var Ey=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);$(function(){var a=je(1,n.accBeta1),i=St(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:be(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:be(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,d=n.accumulatedWeightedInfNorm[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),f=d.mul(n.beta2),m=l.abs(),v=f.maximum(m);h.assign(p),d.assign(v);var g=i.div(a).mul(p.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&dt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&dt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}($n);jn(Ey);var Ll=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=T.registeredVariables[o];$(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Hp(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}($n);jn(Ll);var Iy=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=q(a.momentum),a}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:$(function(){return be(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&dt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(Ll);jn(Iy);var Ry=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Tt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:$(function(){return be(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:$(function(){return be(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:$(function(){return be(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,d=h.mul(n.decay).add(s.mul(1-n.decay)),p=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(d.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(d),c.assign(p);var f=i.sub(p);i.assign(f)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));p=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(p),f=i.sub(p),i.assign(f)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&dt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&dt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&dt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}($n);jn(Ry);Fe.prototype.squaredDifference=function(r){return Zc(this,r)},P=Q0;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Di=function(r,t){return Di=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Di(r,t)};function ie(r,t){Di(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var nt=function(){return nt=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},nt.apply(this,arguments)};function Q(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function Z(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Pr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Wn=function(){function r(t,e){if(!Vn(t)||!Vn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function ua(r,t){return r instanceof Fe&&r.shape.length===t}function ky(r){return ua(r,2)}function ca(r){return ua(r,3)}function kn(r){return ua(r,4)}function Sy(r){return r%1!==0}function zu(r){return r%2===0}function Dy(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Uu(r){return r&&r.width&&r.height}function Ay(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Wn(Math.round(e*o),Math.round(n*o))}function hs(r){return r.reduce(function(t,e){return t.add(e)},new _e(0,0)).div(new _e(r.length,r.length))}function zr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Vn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Hu(r){return Vn(r)&&0<=r&&r<=1}var _e=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),cn=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Vn),a=[n.x,n.y,n.width,n.height].every(Vn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Vn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new _e(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new _e(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new _e(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new _e(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Uu(t)?t.width:t,n=Uu(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,d=Math.min(l,t-u),p=Math.min(h,e-c);return new r({x:u,y:c,width:d,height:p}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,d=this.bottom;return h>e&&(s=-h+e+n,h=e),d>t&&(u=-d+t+o,d=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:d,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),la=function(r){ie(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(cn),Wl=function(){function r(t,e,n,o,a){this._imageDims=new Wn(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new cn(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new cn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),Ft=function(r){ie(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(Wl);function Ty(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function Ny(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new la(n,o,a,i)}function Ur(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],d=r[s],p=r[h];c.push(Ty(d,p,n))}o=o.filter(function(f,m){return c[m]<=e})};o.length>0;)i();return a}function eo(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],a=Xt(Pr(r.shape.slice(0,3),[1]),e),i=Xt(Pr(r.shape.slice(0,3),[1]),n),s=Xt(Pr(r.shape.slice(0,3),[1]),o),u=He([a,i,s],3);return je(r,u)})}function Fy(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(p){var f=r.shape.slice();return f[s]=p,Xt(f,0)},c=u(i),l=a-c.shape[s],h=t&&l?u(l):null,d=[h,r,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return He(d,s)})}function ri(r){return 1/(1+Math.exp(-r))}var ds=function(r){ie(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(cn),Py=.5,My=.43,Oy=.45,Hr=function(){function r(t,e,n){n===void 0&&(n=new _e(0,0));var o=e.width,a=e.height;this._imgDims=new Wn(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new _e(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new _e(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new _e(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new _e(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof Ft?t.box.floor():new cn(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(h){return o.sub(h).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/Oy),u=hs(t),c=Math.floor(Math.max(0,u.x-Py*s)),l=Math.floor(Math.max(0,u.y-My*s));return new ds(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=Ny(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),By=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],hs([e[3],e[4]])]},t}(Hr),Ly=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(hs)},t}(Hr),Gu=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Dy(this.distance)+")":"")},r}(),qu=function(r){ie(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(cn.assertIsValidBox(e,n),!Vn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(cn),fo=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){ie(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(qu.assertIsValidLabeledBox(e,n),!Hu(e.score)||!Hu(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(qu);function Vl(r){return r.detection instanceof Ft}function Gr(r,t){var e={detection:t};return Object.assign({},r,e)}function zl(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function Ul(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Hl(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=Ul();return nt({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function Gl(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function ql(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Ue;function Wy(){if(!Ue)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ue}function Ai(r){Ue=r}function ps(){Gl()&&Ai(zl()),ql()&&Ai(Hl())}function Vy(r){if(Ue||ps(),!Ue)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Ue.Canvas:t,n=r.Image,o=n===void 0?Ue.Image:n;Ue.Canvas=e,Ue.Image=o,Ue.createCanvasElement=r.createCanvasElement||function(){return new e},Ue.createImageElement=r.createImageElement||function(){return new o},Ue.ImageData=r.ImageData||Ue.ImageData,Ue.Video=r.Video||Ue.Video,Ue.fetch=r.fetch||Ue.fetch,Ue.readFile=r.readFile||Ue.readFile}var st={getEnv:Wy,setEnv:Ai,initialize:ps,createBrowserEnv:zl,createFileSystem:Ul,createNodejsEnv:Hl,monkeyPatch:Vy,isBrowser:Gl,isNodejs:ql};ps();function fs(r){return!st.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function ln(r){var t=st.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=fs(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var En;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(En||(En={}));var jl=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||En.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}(),zy=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new jl(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===En.BOTTOM_RIGHT||n===En.TOP_RIGHT,a=n===En.BOTTOM_LEFT||n===En.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,h=e.height,d=Math.max(Math.min(u,l-i),0),p=Math.max(Math.min(c,h-s),0);return{x:d,y:p}}return{x:u,y:c}},r.prototype.draw=function(t){var e=fs(t),n=ln(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),h=this.measureHeight();n.fillStyle=a;var d=this.getUpperLeft(n,e);n.fillRect(d.x,d.y,l,h),n.fillStyle=i,this.text.forEach(function(p,f){var m=c+d.x,v=c+d.y+(f+1)*s;n.fillText(p,m,v)})},r}(),Uy=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:En.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new jl(Object.assign({},i,a))}return r}(),Hy=function(){function r(t,e){e===void 0&&(e={}),this.box=new cn(t),this.options=new Uy(e)}return r.prototype.draw=function(t){var e=ln(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var h=this.options.label;h&&new zy([h],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function $l(r){var t=st.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Gy(r){return new Promise(function(t,e){if(r instanceof st.getEnv().Canvas||$l(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function vs(r){var t=st.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Wn(r.naturalWidth,r.naturalHeight):r instanceof n?new Wn(r.videoWidth,r.videoHeight):new Wn(r.width,r.height)}function ha(r){var t=r.width,e=r.height,n=st.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function ms(r,t){var e=st.getEnv().ImageData;if(!(r instanceof e)&&!$l(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||vs(r),o=n.width,a=n.height,i=ha({width:o,height:a});return r instanceof e?ln(i).putImageData(r,0,0):ln(i).drawImage(r,0,0,o,a),i}function qy(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return e=t||st.getEnv().createCanvasElement(),n=r.shape.slice(kn(r)?1:0),o=n[0],a=n[1],i=n[2],s=$(function(){return r.as3D(o,a,i).toInt()}),[4,ls.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function ju(r){var t=st.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function jy(r,t,e){e===void 0&&(e=!1);var n=st.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=vs(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=ha({width:t,height:t}),h=r instanceof a?r:ms(r),d=Math.abs(u-c)/2,p=e&&u<c?d:0,f=e&&c<u?d:0;return ln(l).drawImage(h,p,f,u,c),l}var jo=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(ca(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(kn(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof st.getEnv().Canvas?o:ms(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return zr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return Ay({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=zr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Fe){var u=kn(s)?s:s.expandDims();return u=Fy(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=os.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof st.getEnv().Canvas)return ls.fromPixels(jy(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=_t(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function Ye(r){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof jo)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(fs),n.forEach(function(a,i){if(!ju(a)&&!ca(a)&&!kn(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(kn(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return ju(a)&&Gy(a)}))];case 1:return o.sent(),[2,new jo(n,Array.isArray(r))]}})})}function gs(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return Z(this,function(c){switch(c.label){case 0:return e=st.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ye(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,qy(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=ln(n),u=t.map(function(l){return l instanceof Ft?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,d=l.y,p=l.width,f=l.height,m=ha({width:p,height:f});return ln(m).putImageData(s.getImageData(h,d,p,f),0,0),m})]}})})}function ys(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!ca(r)&&!kn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(kn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(kn(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof Ft?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,d=c.width,p=c.height;return bl(r.as3D(o,a,i),[h,l,0],[p,d,i])});return u})]})})}function $y(r,t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=st.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function Ky(r){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,$y(r)];case 1:return[2,t.sent().json()]}})})}function Kl(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function Xy(r,t){return Q(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:return e=Kl(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,Ky(n)];case 1:return a=i.sent(),[2,Bl.loadWeights(a,o)]}})})}function Yy(r,t,e){e===void 0&&(e=!1);var n=e?vs(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var fn=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof vr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof vr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=et(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Xy(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h;return Z(this,function(d){switch(d.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=st.getEnv().readFile,n=Kl(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(p){return Promise.all(p.map(function(f){return e(f).then(function(m){return m.buffer})}))},s=Bl.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[d.sent().toString()]),[4,s(u,a)];case 2:return h=d.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Fe))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function bt(r,t,e){return $(function(){var n=Zi(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=he(n,t.bias),n})}function oi(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Pe(e?he(Rt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):bt(r,t.conv0,[2,2])),o=bt(n,t.conv1,[1,1]),a=Pe(he(n,o)),i=bt(a,t.conv2,[1,1]);return Pe(he(n,he(o,i)))})}function vo(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=Pe(e?he(Rt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):bt(r,t.conv0,n?[2,2]:[1,1])),a=bt(o,t.conv1,[1,1]),i=Pe(he(o,a)),s=bt(i,t.conv2,[1,1]),u=Pe(he(o,he(a,s))),c=bt(u,t.conv3,[1,1]);return Pe(he(o,he(a,he(s,c))))})}function At(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=he(Rt(r,t.filters,[1,1],e),t.bias);return n?Pe(o):o})}function vn(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function da(r,t){return function(e,n,o,a){var i=lt(r(e*n*o*o),[o,o,e,n]),s=ze(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function xs(r,t){return function(e,n,o){var a=In(r(e*n),[e,n]),i=ze(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Xl=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function bs(r,t){return function(e,n,o){var a=lt(r(9*e),[3,3,e,1]),i=lt(r(e*n),[1,1,e,n]),s=ze(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Xl(a,i,s)}}function ws(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Xl(e,n,o)}}function Tn(r,t){return function(e,n,o){var a=r[e];if(!ua(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function mn(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Yl(r,t){var e=da(r,t),n=bs(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),d=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:d}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,d=l.conv1,p=l.conv2,f=n(s,s,u+"/conv3");return{conv0:h,conv1:d,conv2:p,conv3:f}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Jy(r){var t=[],e=mn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Yl(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Jl(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Ql(r,t){var e=Tn(r,t),n=Jl(e),o=ws(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),d=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:d}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Qy(r){var t=[],e=Ql(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return vn(r,t),{params:n,paramMappings:t}}var Zl=function(r){ie(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=eo(o,a).div(q(255)),s=vo(i,n.dense0,!0);return s=vo(s,n.dense1),s=vo(s,n.dense2),s=vo(s,n.dense3),s=Qr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Qy(e)},t.prototype.extractParams=function(e){return Jy(e)},t}(fn);function jt(r,t){return $(function(){return he(aa(r,t.weights),t.bias)})}function Zy(r,t,e){var n=[],o=mn(r),a=o.extractWeights,i=o.getRemainingWeights,s=xs(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function e1(r){var t=[],e=Tn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return vn(r,t),{params:o,paramMappings:t}}function eh(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var th=function(r){ie(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof jo?n.faceFeatureExtractor.forwardInput(e):e;return jt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Zy(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=eh(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),e1(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(fn),$u=["neutral","happy","sad","angry","fearful","disgusted","surprised"],t1=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);$u.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return $u.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),n1=function(r){ie(t,r);function t(e){return e===void 0&&(e=new Zl),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return dn(n.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,Ye(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Ge(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new t1(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(th);function nh(r,t){var e={expressions:t};return Object.assign({},r,e)}function rh(r){return Vl(r)&&r.landmarks instanceof Hr&&r.unshiftedLandmarks instanceof Hr&&r.alignedRect instanceof Ft}function pa(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new Ft(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function r1(r,t){var e=da(r,t),n=bs(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function o1(r,t){var e=[],n=mn(r),o=n.extractWeights,a=n.getRemainingWeights,i=r1(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),d=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),f={conv_in:h,reduction_block_0:d,reduction_block_1:p},m={};zr(t,0,1).forEach(function(w){m["main_block_"+w]=l(128,"middle_flow/main_block_"+w)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:f,middle_flow:m,exit_flow:x}}}function a1(r,t){var e=Tn(r,t),n=Jl(e),o=ws(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function i1(r,t){var e=[],n=a1(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},d={};zr(t,0,1).forEach(function(v){d["main_block_"+v]=s("middle_flow/main_block_"+v)});var p=i("exit_flow/reduction_block"),f=a("exit_flow/separable_conv"),m={reduction_block:p,separable_conv:f};return vn(r,e),{params:{entry_flow:h,middle_flow:d,exit_flow:m},paramMappings:e}}function oh(r,t,e){return he(Rt(r,t.filters,e,"same"),t.bias)}function ai(r,t,e){e===void 0&&(e=!0);var n=e?Pe(r):r;return n=bt(n,t.separable_conv0,[1,1]),n=bt(Pe(n),t.separable_conv1,[1,1]),n=Ke(n,[3,3],[2,2],"same"),n=he(n,oh(r,t.expansion_conv,[2,2])),n}function s1(r,t){var e=bt(Pe(r),t.separable_conv0,[1,1]);return e=bt(Pe(e),t.separable_conv1,[1,1]),e=bt(Pe(e),t.separable_conv2,[1,1]),e=he(e,r),e}var u1=function(r){ie(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=eo(a,i).div(q(256)),u=Pe(oh(s,o.entry_flow.conv_in,[2,2]));return u=ai(u,o.entry_flow.reduction_block_0,!1),u=ai(u,o.entry_flow.reduction_block_1),zr(n._numMainBlocks,0,1).forEach(function(c){u=s1(u,o.middle_flow["main_block_"+c])}),u=ai(u,o.exit_flow.reduction_block),u=Pe(bt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return i1(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return o1(e,this._numMainBlocks)},t}(fn);function c1(r){var t=[],e=mn(r),n=e.extractWeights,o=e.getRemainingWeights,a=xs(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function l1(r){var t=[],e=Tn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return vn(r,t),{params:o,paramMappings:t}}var $o;(function(r){r.FEMALE="female",r.MALE="male"})($o||($o={}));var h1=function(r){ie(t,r);function t(e){e===void 0&&(e=new u1(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var a=e instanceof jo?n.faceFeatureExtractor.forwardInput(e):e,i=Qr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=jt(i,o.fc.age).as1D(),u=jt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:dn(i)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,Ye(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Ge(o.age),i=Ge(o.gender),s=a.map(function(h,d){return{ageTensor:h,genderTensor:i[d]}}),[4,Promise.all(s.map(function(h){var d=h.ageTensor,p=h.genderTensor;return Q(c,void 0,void 0,function(){var f,m,v,g,x;return Z(this,function(w){switch(w.label){case 0:return[4,d.data()];case 1:return f=w.sent()[0],[4,p.data()];case 2:return m=w.sent()[0],v=m>.5,g=v?$o.MALE:$o.FEMALE,x=v?m:1-m,d.dispose(),p.dispose(),[2,{age:f,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return c1(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=eh(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),l1(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(fn),ah=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return $(function(){var s=function(d,p){return _t([Xt([68],d),Xt([68],p)],1).as2D(1,136).as1D()},u=function(d,p){var f=a[d],m=f.width,v=f.height;return p(m,v)?Math.abs(m-v)/2:0},c=function(d){return u(d,function(p,f){return p<f})},l=function(d){return u(d,function(p,f){return f<p})},h=e.mul(Xt([i,136],n)).sub(_t(Array.from(Array(i),function(d,p){return s(c(p),l(p))}))).div(_t(Array.from(Array(i),function(d,p){return s(a[p].width,a[p].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ye(e)];case 1:return n=s.sent(),o=$(function(){return Ge(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(i,void 0,void 0,function(){var l,h,d,p,f;return Z(this,function(m){switch(m.label){case 0:return d=(h=Array).from,[4,u.data()];case 1:return l=d.apply(h,[m.sent()]),p=l.filter(function(v,g){return zu(g)}),f=l.filter(function(v,g){return!zu(g)}),[2,new Ly(Array(68).fill(0).map(function(v,g){return new _e(p[g],f[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(th),ih=function(r){ie(t,r);function t(e){return e===void 0&&(e=new Zl),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(ah);function d1(r){var t=[],e=Ql(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return vn(r,t),{params:n,paramMappings:t}}function p1(r){var t=[],e=mn(r),n=e.extractWeights,o=e.getRemainingWeights,a=Yl(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var f1=function(r){ie(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=eo(o,a).div(q(255)),s=oi(i,n.dense0,!0);return s=oi(s,n.dense1),s=oi(s,n.dense2),s=Qr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return d1(e)},t.prototype.extractParams=function(e){return p1(e)},t}(fn),v1=function(r){ie(t,r);function t(e){return e===void 0&&(e=new f1),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(ah);(function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(ih);function m1(r,t){return he(it(r,t.weights),t.biases)}function _s(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=Rt(r,i,e,o);return u=he(u,s),u=m1(u,t.scale),n?Pe(u):u}function g1(r,t){return _s(r,t,[1,1],!0)}function sh(r,t){return _s(r,t,[1,1],!1)}function uh(r,t){return _s(r,t,[2,2],!0,"valid")}function y1(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Sy(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return Sn(lt(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),d=ze(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:d}}function o(s,u){var c=ze(r(s)),l=ze(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),d=o(u,l+"/scale");return{conv:h,scale:d}}function i(s,u,c,l,h){h===void 0&&(h=!1);var d=a((h?.5:1)*s,u,c,l+"/conv1"),p=a(s,u,c,l+"/conv2");return{conv1:d,conv2:p}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function x1(r){var t=mn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=y1(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),d=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),f=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),w=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),b=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),S=$(function(){return Sn(In(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:d,conv64_1:p,conv64_2:f,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:w,conv256_1:y,conv256_2:b,conv256_down_out:_,fc:S};return{params:k,paramMappings:o}}function b1(r,t){var e=Tn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function w1(r){var t=[],e=b1(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),d=o("conv64_3"),p=o("conv128_down"),f=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),w=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!ky(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var b={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:d,conv128_down:p,conv128_1:f,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:w,fc:y};return vn(r,t),{params:b,paramMappings:t}}function Bt(r,t){var e=g1(r,t.conv1);return e=sh(e,t.conv2),e=he(e,r),e=Pe(e),e}function mo(r,t){var e=uh(r,t.conv1);e=sh(e,t.conv2);var n=Qr(r,2,2,"valid"),o=De(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=Pr(e.shape);s[1]=1;var u=De(s);e=He([e,u],1);var c=Pr(e.shape);c[2]=1;var l=De(c);e=He([e,l],2)}return n=a?He([n,o],3):n,e=he(n,e),e=Pe(e),e}var _1=function(r){ie(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=eo(o,a).div(q(256)),s=uh(i,n.conv32_down);s=Ke(s,3,2,"valid"),s=Bt(s,n.conv32_1),s=Bt(s,n.conv32_2),s=Bt(s,n.conv32_3),s=mo(s,n.conv64_down),s=Bt(s,n.conv64_1),s=Bt(s,n.conv64_2),s=Bt(s,n.conv64_3),s=mo(s,n.conv128_down),s=Bt(s,n.conv128_1),s=Bt(s,n.conv128_2),s=mo(s,n.conv256_down),s=Bt(s,n.conv256_1),s=Bt(s,n.conv256_2),s=mo(s,n.conv256_down_out);var u=s.mean([1,2]),c=aa(u,n.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var n,o,a,i=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ye(e)];case 1:return n=s.sent(),o=$(function(){return Ge(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return w1(e)},t.prototype.extractParams=function(e){return x1(e)},t}(fn);function ch(r,t){var e={descriptor:t};return Object.assign({},r,e)}function lh(r,t){var e={age:t};return Object.assign({},r,e)}function hh(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var dh=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function C1(r,t){function e(u,c){var l=lt(r(9*u),[3,3,u,1]),h=ze(r(u)),d=ze(r(u)),p=ze(r(u)),f=ze(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:d,batch_norm_mean:p,batch_norm_variance:f}}function n(u,c,l,h,d){var p=lt(r(u*c*l*l),[l,l,u,c]),f=ze(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(d?"batch_norm_offset":"bias")}),{filters:p,bias:f}}function o(u,c,l,h){var d=n(u,c,l,h,!0),p=d.filters,f=d.bias;return{filters:p,batch_norm_offset:f}}function a(u,c,l){var h=e(u,l+"/depthwise_conv"),d=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:d}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),d=a(128,256,"mobilenetv1/conv_4"),p=a(256,256,"mobilenetv1/conv_5"),f=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),w=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),b=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:d,conv_5:p,conv_6:f,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:w,conv_12:y,conv_13:b}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),d=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),f=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),w=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),b=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},L={box_encoding_predictor:x,class_predictor:w},O={box_encoding_predictor:y,class_predictor:b},B={box_encoding_predictor:_,class_predictor:S},z={box_encoding_predictor:k,class_predictor:I},V={box_encoding_predictor:R,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:d,conv_5:p,conv_6:f,conv_7:m,box_predictor_0:A,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:z,box_predictor_5:V}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function E1(r){var t=[],e=mn(r),n=e.extractWeights,o=e.getRemainingWeights,a=C1(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Li(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function I1(r,t){var e=Tn(r,t);function n(c,l,h){var d=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),p=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:d,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",d=l+"/depthwise_conv",p=l+"/pointwise_conv",f=e(h+"/depthwise_weights",4,d+"/filters"),m=e(h+"/BatchNorm/gamma",1,d+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,d+"/batch_norm_offset"),g=e(h+"/BatchNorm/moving_mean",1,d+"/batch_norm_mean"),x=e(h+"/BatchNorm/moving_variance",1,d+"/batch_norm_variance");return{depthwise_conv:{filters:f,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,p)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=e(c+"/weights",4,l+"/filters"),d=e(c+"/biases",1,l+"/bias");return{filters:h,bias:d}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function R1(r){var t=[],e=I1(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ca(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return vn(r,t),{params:i,paramMappings:t}}function Vt(r,t,e){return $(function(){var n=Rt(r,t.filters,e,"same");return n=he(n,t.batch_norm_offset),Xi(n,0,6)})}var k1=.0010000000474974513;function S1(r,t,e){return $(function(){var n=oa(r,t.filters,e,"same");return n=al(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,k1),Xi(n,0,6)})}function D1(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function A1(r,t){return $(function(){var e=null,n=Vt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=D1(s);n=S1(n,a.depthwise_conv,u),n=Vt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function T1(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,d=c.length-1;d>=0;--d){var p=N1(r,l.boxIndex,c[d]);if(p!==0&&(l.score*=u(p),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function N1(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),d=(i-o)*(s-a),p=(l-u)*(h-c);if(d<=0||p<=0)return 0;var f=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,h),x=Math.max(v-f,0)*Math.max(g-m,0);return x/(d+p-x)}function F1(r){var t=Ge(Sn(r,[1,0])),e=[je(t[2],t[0]),je(t[3],t[1])],n=[he(t[0],St(e[0],q(2))),he(t[1],St(e[1],q(2)))];return{sizes:e,centers:n}}function P1(r,t){var e=F1(r),n=e.sizes,o=e.centers,a=Ge(Sn(t,[1,0])),i=St(it(Ci(St(a[2],q(5))),n[0]),q(2)),s=he(it(St(a[0],q(10)),n[0]),o[0]),u=St(it(Ci(St(a[3],q(5))),n[1]),q(2)),c=he(it(St(a[1],q(10)),n[1]),o[1]);return Sn(_t([je(s,i),je(c,u),he(s,i),he(c,u)]),[1,0])}function M1(r,t,e){return $(function(){var n=r.shape[0],o=P1(Dt(sr(e.extra_dim,[n,1,1]),[-1,4]),Dt(r,[-1,4]));o=Dt(o,[n,o.shape[0]/n,4]);var a=tl(Yt(t,[0,0,1],[-1,-1,-1])),i=Yt(a,[0,0,0],[-1,-1,1]);i=Dt(i,[n,i.shape[1]]);var s=Ge(o),u=Ge(i);return{boxes:s,scores:u}})}function tr(r,t){return $(function(){var e=r.shape[0],n=Dt(At(r,t.box_encoding_predictor),[e,-1,1,4]),o=Dt(At(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function O1(r,t,e){return $(function(){var n=Vt(r,e.conv_0,[1,1]),o=Vt(n,e.conv_1,[2,2]),a=Vt(o,e.conv_2,[1,1]),i=Vt(a,e.conv_3,[2,2]),s=Vt(i,e.conv_4,[1,1]),u=Vt(s,e.conv_5,[2,2]),c=Vt(u,e.conv_6,[1,1]),l=Vt(c,e.conv_7,[2,2]),h=tr(t,e.box_predictor_0),d=tr(r,e.box_predictor_1),p=tr(o,e.box_predictor_2),f=tr(i,e.box_predictor_3),m=tr(u,e.box_predictor_4),v=tr(l,e.box_predictor_5),g=He([h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,f.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=He([h.classPrediction,d.classPrediction,p.classPrediction,f.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var fa=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),ph=function(r){ie(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=je(it(o,q(.007843137718737125)),q(1)),i=A1(a,n.mobilenetv1),s=O1(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return M1(u,c,n.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ye(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,d,p,f,m,v,g,x,w,y,b,_,S,k;return Z(this,function(I){switch(I.label){case 0:return o=new fa(n),a=o.maxResults,i=o.minConfidence,[4,Ye(e)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],d=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return v=(m=Array).from,[4,d.data()];case 2:return f=v.apply(m,[I.sent()]),g=.5,x=T1(h,f,a,g,i),w=s.getReshapedInputDimensions(0),y=s.inputSize,b=y/w.width,_=y/w.height,S=h.arraySync(),k=x.map(function(R){var N=[Math.max(0,S[R][0]),Math.min(1,S[R][2])].map(function(V){return V*_}),A=N[0],L=N[1],O=[Math.max(0,S[R][1]),Math.min(1,S[R][3])].map(function(V){return V*b}),B=O[0],z=O[1];return new Ft(f[R],new ds(B,A,z-B,L-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),d.dispose(),[2,k]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return R1(e)},t.prototype.extractParams=function(e){return E1(e)},t}(fn);(function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(ph);var B1=.4,L1=[new _e(.738768,.874946),new _e(2.42204,2.65704),new _e(4.30971,7.04493),new _e(10.246,4.59428),new _e(12.6868,11.8741)],W1=[new _e(1.603231,2.094468),new _e(6.041143,7.080126),new _e(2.882459,3.518061),new _e(4.266906,5.178857),new _e(9.041765,10.66308)],V1=[117.001,114.697,97.404],z1="tiny_yolov2_model",U1="tiny_yolov2_separable_conv_model",go=function(r){return typeof r=="number"};function H1(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!go(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return go(t.x)&&go(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(go)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Cs(r){return $(function(){var t=it(r,q(.10000000149011612));return he(Pe(je(r,t)),t)})}function yn(r,t){return $(function(){var e=Gn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Rt(e,t.conv.filters,[1,1],"valid"),e=je(e,t.bn.sub),e=it(e,t.bn.truediv),e=he(e,t.conv.bias),Cs(e)})}function xn(r,t){return $(function(){var e=Gn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Zi(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=he(e,t.bias),Cs(e)})}function G1(r,t){var e=da(r,t);function n(i,s){var u=ze(r(i)),c=ze(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=bs(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function q1(r,t,e,n){var o=mn(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=G1(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,d;if(t.withSeparableConvs){var p=n[0],f=n[1],m=n[2],v=n[3],g=n[4],x=n[5],w=n[6],y=n[7],b=n[8],_=t.isFirstLayerConv2d?c(p,f,3,"conv0"):h(p,f,"conv0"),S=h(f,m,"conv1"),k=h(m,v,"conv2"),I=h(v,g,"conv3"),R=h(g,x,"conv4"),N=h(x,w,"conv5"),A=y?h(w,y,"conv6"):void 0,L=b?h(y,b,"conv7"):void 0,O=c(b||y||w,5*e,1,"conv8");d={conv0:_,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:O}}else{var p=n[0],f=n[1],m=n[2],v=n[3],g=n[4],x=n[5],w=n[6],y=n[7],b=n[8],_=l(p,f,"conv0"),S=l(f,m,"conv1"),k=l(m,v,"conv2"),I=l(v,g,"conv3"),R=l(g,x,"conv4"),N=l(x,w,"conv5"),A=l(w,y,"conv6"),L=l(y,b,"conv7"),O=c(b,5*e,1,"conv8");d={conv0:_,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:O}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:d,paramMappings:s}}function j1(r,t){var e=Tn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=ws(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function $1(r,t){var e=[],n=j1(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return vn(r,e),{params:s,paramMappings:e}}var Ku;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Ku||(Ku={}));var Es=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),fh=function(r){ie(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return H1(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=yn(e,n.conv0);return o=Ke(o,[2,2],[2,2],"same"),o=yn(o,n.conv1),o=Ke(o,[2,2],[2,2],"same"),o=yn(o,n.conv2),o=Ke(o,[2,2],[2,2],"same"),o=yn(o,n.conv3),o=Ke(o,[2,2],[2,2],"same"),o=yn(o,n.conv4),o=Ke(o,[2,2],[2,2],"same"),o=yn(o,n.conv5),o=Ke(o,[2,2],[1,1],"same"),o=yn(o,n.conv6),o=yn(o,n.conv7),At(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Cs(At(e,n.conv0,"valid",!1)):xn(e,n.conv0);return o=Ke(o,[2,2],[2,2],"same"),o=xn(o,n.conv1),o=Ke(o,[2,2],[2,2],"same"),o=xn(o,n.conv2),o=Ke(o,[2,2],[2,2],"same"),o=xn(o,n.conv3),o=Ke(o,[2,2],[2,2],"same"),o=xn(o,n.conv4),o=Ke(o,[2,2],[2,2],"same"),o=xn(o,n.conv5),o=Ke(o,[2,2],[1,1],"same"),o=n.conv6?xn(o,n.conv6):o,o=n.conv7?xn(o,n.conv7):o,At(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return $(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?eo(i,o.config.meanRgb):i,i=i.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ye(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,d,p,f,m,v,g,x=this;return Z(this,function(w){switch(w.label){case 0:return o=new Es(n),a=o.inputSize,i=o.scoreThreshold,[4,Ye(e)];case 1:return s=w.sent(),[4,this.forwardInput(s,a)];case 2:return u=w.sent(),c=$(function(){return Ge(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=w.sent(),u.dispose(),c.dispose(),d=h.map(function(y){return y.box}),p=h.map(function(y){return y.score}),f=h.map(function(y){return y.classScore}),m=h.map(function(y){return x.config.classes[y.label]}),v=Ur(d.map(function(y){return y.rescale(a)}),p,this.config.iouThreshold,!0),g=v.map(function(y){return new Wl(p[y],f[y],m[y],d[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return $1(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return q1(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,d,p,f,m,v,g,x,w,y,b,_,S,k,I,R,N,A,L,O,B,z,V,W=this;return Z(this,function(H){switch(H.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],h=this.config.anchors.length,d=$(function(){var G=e.reshape([l,l,h,W.boxEncodingSize]),j=G.slice([0,0,0,0],[l,l,h,4]),ee=G.slice([0,0,0,4],[l,l,h,1]),ne=W.withClassScores?dn(G.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):q(0);return[j,ee,ne]}),p=d[0],f=d[1],m=d[2],v=[],[4,f.array()];case 1:return g=H.sent(),[4,p.array()];case 2:x=H.sent(),w=0,H.label=3;case 3:if(!(w<l))return[3,12];y=0,H.label=4;case 4:if(!(y<l))return[3,11];b=0,H.label=5;case 5:return b<h?(_=ri(g[w][y][b][0]),!o||_>o?(S=(y+ri(x[w][y][b][0]))/l*u,k=(w+ri(x[w][y][b][1]))/l*c,I=Math.exp(x[w][y][b][2])*this.config.anchors[b].x/l*u,R=Math.exp(x[w][y][b][3])*this.config.anchors[b].y/l*c,N=S-I/2,A=k-R/2,L={row:w,col:y,anchor:b},this.withClassScores?[4,this.extractPredictedClass(m,L)]:[3,7]):[3,9]):[3,10];case 6:return V=H.sent(),[3,8];case 7:V={classScore:1,label:0},H.label=8;case 8:O=V,B=O.classScore,z=O.label,v.push(nt({box:new la(N,A,N+I,A+R),score:_,classScore:_*B,label:z},L)),H.label=9;case 9:return b++,[3,5];case 10:return y++,[3,4];case 11:return w++,[3,3];case 12:return p.dispose(),f.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return Q(this,void 0,void 0,function(){var o,a,i,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(fn),K1=function(r){ie(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:B1,classes:["face"]},e?{anchors:W1,meanRgb:V1}:{anchors:L1,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Ft(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?U1:z1},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(fh),vh=function(r){ie(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Es),to=function(){function r(){}return r.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function va(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Q(this,void 0,void 0,function(){var a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return rh(h)?o(h):h.detection}),s=n,s?[3,5]:t instanceof Fe?[4,ys(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,gs(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof Fe&&h.dispose()}),[2,c]}})})}function Is(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a=this;return Z(this,function(i){return[2,va([r],t,function(s){return Q(a,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function X1(r){return $(function(){return _t(Ge(r,3).reverse(),3)})}var yo=2,Ko=12;function Y1(r,t){var e=da(r,t),n=xs(r,t);function o(c,l){var h=ze(r(c));return t.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var d=e(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),f=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:d,prelu1_alpha:p,conv2:f,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return nt(nt({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),d=n(128,2,"rnet/fc2_1"),p=n(128,4,"rnet/fc2_2");return nt(nt({},c),{fc1:l,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),d=n(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),f=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return nt(nt({},c),{conv4:l,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:f,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function J1(r){var t=mn(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=Y1(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function Q1(r,t){var e=Tn(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),d=e(l+"/bias",1);return{filters:h,bias:d}}function o(l){var h=e(l+"/weights",2),d=e(l+"/bias",1);return{weights:h,bias:d}}function a(l){return e(l,1)}function i(l){var h=n(l+"/conv1"),d=a(l+"/prelu1_alpha"),p=n(l+"/conv2"),f=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:f,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),d=n("pnet/conv4_2");return nt(nt({},l),{conv4_1:h,conv4_2:d})}function u(){var l=i("rnet"),h=o("rnet/fc1"),d=a("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),f=o("rnet/fc2_2");return nt(nt({},l),{fc1:h,prelu4_alpha:d,fc2_1:p,fc2_2:f})}function c(){var l=i("onet"),h=n("onet/conv4"),d=a("onet/prelu4_alpha"),p=o("onet/fc1"),f=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return nt(nt({},l),{conv4:h,prelu4_alpha:d,fc1:p,prelu5_alpha:f,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function Z1(r){var t=[],e=Q1(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return vn(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Ti(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function ex(r,t,e){for(var n=e[0],o=e[1],a=Ko/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var Rs=function(r){ie(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(cn);function mh(r){return $(function(){return it(je(r,q(127.5)),q(.0078125))})}function dr(r,t){return $(function(){return he(Pe(r),it(t,Uo(Pe(Uo(r)))))})}function ks(r,t,e){return e===void 0&&(e=!1),$(function(){var n=At(r,t.conv1,"valid");return n=dr(n,t.prelu1_alpha),n=Ke(n,e?[2,2]:[3,3],[2,2],"same"),n=At(n,t.conv2,"valid"),n=dr(n,t.prelu2_alpha),n=e?n:Ke(n,[3,3],[2,2],"valid"),n=At(n,t.conv3,"valid"),n=dr(n,t.prelu3_alpha),n})}function tx(r,t){return $(function(){var e=ks(r,t,!0),n=At(e,t.conv4_1,"valid"),o=Ct(ia(n,3),3),a=dn(je(n,o),3),i=At(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function nx(r,t){return $(function(){var e=Ti(t,r.shape.slice(1)),n=e.height,o=e.width,a=os.resizeBilinear(r,[n,o]),i=mh(a);return Sn(i,[0,2,1,3])})}function rx(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new _e(s,i));var u=o.map(function(c){var l=new la(Math.round((c.y*yo+1)/e),Math.round((c.x*yo+1)/e),Math.round((c.y*yo+Ko)/e),Math.round((c.x*yo+Ko)/e)),h=a[c.y][c.x],d=t.arraySync(),p=new Rs(d[c.y][c.x][0],d[c.y][c.x][1],d[c.y][c.x][2],d[c.y][c.x][3]);return{cell:l,score:h,region:p}});return u}function ox(r,t,e,n,o){o.stage1=[];var a=t.map(function(d){return $(function(){var p={scale:d},f=nx(r,d),m=Date.now(),v=tx(f,n),g=v.prob,x=v.regions;p.pnet=Date.now()-m;var w=Ge(Ge(g,3)[1])[0],y=Ge(x)[0];return{scoresTensor:w,regionsTensor:y,scale:d,statsForScale:p}})}),i=a.map(function(d){var p=d.scoresTensor,f=d.regionsTensor,m=d.scale,v=d.statsForScale,g=rx(p,f,m,e);if(p.dispose(),f.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),w=Ur(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=w.length,o.stage1.push(v),w.map(function(y){return g[y]})}),s=i.reduce(function(d,p){return d.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=Ur(s.map(function(d){return d.cell}),s.map(function(d){return d.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(d){return s[d].score}),u=h.map(function(d){return s[d]}).map(function(d){var p=d.cell,f=d.region;return new la(p.left+f.left*p.width,p.top+f.top*p.height,p.right+f.right*p.width,p.bottom+f.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function gh(r,t,e){var n=e.width,o=e.height;return Q(this,void 0,void 0,function(){var a,i,s,u=this;return Z(this,function(c){switch(c.label){case 0:return a=ln(r),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var h,d,p,f,m,v,g,x;return Z(this,function(w){return h=l.padAtBorders(r.height,r.width),d=h.y,p=h.ey,f=h.x,m=h.ex,v=f-1,g=d-1,x=a.getImageData(v,g,m-v,p-g),[2,st.isNodejs()?ms(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=ha({width:n,height:o}),d=ln(h);d.drawImage(l,0,0,n,o);for(var p=d.getImageData(0,0,n,o).data,f=[],m=0;m<p.length;m+=4)f.push(p[m+2]),f.push(p[m+1]),f.push(p[m]);s.push(f)}),[2,s.map(function(l){var h=$(function(){var d=Sn(lt(l,[1,n,o,3]),[0,2,1,3]).toFloat();return mh(d)});return h})]}})})}function ax(r,t){return $(function(){var e=ks(r,t),n=Dt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=jt(n,t.fc1),a=dr(o,t.prelu4_alpha),i=jt(a,t.fc2_1),s=Ct(ia(i,1),1),u=dn(je(i,s),1),c=jt(a,t.fc2_2),l=Ge(u,1)[1];return{scores:l,regions:c}})}function ix(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,d,p,f,m,v,g,x;return Z(this,function(w){switch(w.label){case 0:return a=Date.now(),[4,gh(r,t,{width:24,height:24})];case 1:return i=w.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var b=ax(y,n);return y.dispose(),b}),o.stage2_rnet=Date.now()-a,u=s.length>1?He(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[w.sent()]),u.dispose(),d=c.map(function(y,b){return{score:y,idx:b}}).filter(function(y){return y.score>e}).map(function(y){var b=y.idx;return b}),p=d.map(function(y){return t[y]}),f=d.map(function(y){return c[y]}),m=[],v=[],p.length>0&&(a=Date.now(),g=Ur(p,f,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var b=s[d[y]].regions.arraySync();return new Rs(b[0][0],b[0][1],b[0][2],b[0][3])}),v=g.map(function(y){return f[y]}),m=g.map(function(y,b){return p[y].calibrate(x[b])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function sx(r,t){return $(function(){var e=ks(r,t);e=Ke(e,[2,2],[2,2],"same"),e=At(e,t.conv4,"valid"),e=dr(e,t.prelu4_alpha);var n=Dt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=jt(n,t.fc1),a=dr(o,t.prelu5_alpha),i=jt(a,t.fc2_1),s=Ct(ia(i,1),1),u=dn(je(i,s),1),c=jt(a,t.fc2_2),l=jt(a,t.fc2_3),h=Ge(u,1)[1];return{scores:h,regions:c,points:l}})}function ux(r,t,e,n,o){return Q(this,void 0,void 0,function(){var a,i,s,u,c,l,h,d,p,f,m,v,g,x,w;return Z(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,gh(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(b){var _=sx(b,n);return b.dispose(),_}),o.stage3_onet=Date.now()-a,u=s.length>1?He(s.map(function(b){return b.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),d=c.map(function(b,_){return{score:b,idx:_}}).filter(function(b){return b.score>e}).map(function(b){var _=b.idx;return _}),p=d.map(function(b){var _=s[b].regions.arraySync();return new Rs(_[0][0],_[0][1],_[0][2],_[0][3])}),f=d.map(function(b,_){return t[b].calibrate(p[_])}),m=d.map(function(b){return c[b]}),v=[],g=[],x=[],f.length>0&&(a=Date.now(),w=Ur(f,m,.7,!1),o.stage3_nms=Date.now()-a,v=w.map(function(b){return f[b]}),g=w.map(function(b){return m[b]}),x=w.map(function(b,_){return Array(5).fill(0).map(function(S,k){var I=s[b].points.arraySync();return new _e(I[0][k]*(v[_].width+1)+v[_].left,I[0][k+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(b){b.regions.dispose(),b.scores.dispose(),b.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var cx=function(r){ie(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,d,p,f,m,v,g,x,w,y,b,_,S,k;return Z(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=$(function(){return X1(Ct(ls.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],d=l[1],p=new dh(n),f=p.minFaceSize,m=p.scaleFactor,v=p.maxNumScales,g=p.scoreThresholds,x=p.scaleSteps,w=(x||ex(f,m,[h,d])).filter(function(R){var N=Ti(R,[h,d]);return Math.min(N.width,N.height)>Ko}).slice(0,v),i.scales=w,i.pyramid=w.map(function(R){return Ti(R,[h,d])}),y=Date.now(),[4,ox(u,w,g[0],o.pnet,i)];case 1:return b=I.sent(),i.total_stage1=Date.now()-y,b.boxes.length?(i.stage2_numInputBoxes=b.boxes.length,y=Date.now(),[4,ix(a,b.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return _=I.sent(),i.total_stage2=Date.now()-y,_.boxes.length?(i.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,ux(a,_.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=I.sent(),i.total_stage3=Date.now()-y,k=S.boxes.map(function(R,N){return pa(Gr({},new Ft(S.scores[N],new ds(R.left/d,R.top/h,R.width/d,R.height/h),{height:h,width:d})),new By(S.points[N].map(function(A){return A.sub(new _e(R.left,R.top)).div(new _e(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:k,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ye(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ye(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Z1(e)},t.prototype.extractParams=function(e){return J1(e)},t}(fn),lx=.4,hx=[new _e(1.603231,2.094468),new _e(6.041143,7.080126),new _e(2.882459,3.518061),new _e(4.266906,5.178857),new _e(9.041765,10.66308)],dx=[117.001,114.697,97.404],px=function(r){ie(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:lx,classes:["face"],anchors:hx,meanRgb:dx,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Ft(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(fh),wt={ssdMobilenetv1:new ph,tinyFaceDetector:new px,tinyYolov2:new K1,mtcnn:new cx,faceLandmark68Net:new ih,faceLandmark68TinyNet:new v1,faceRecognitionNet:new _1,faceExpressionNet:new n1,ageGenderNet:new h1},yh=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(to),Ss=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,va(e,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return wt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return nh(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Ns(this,this.input)},t}(yh),Ds=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Is(e,this.input,function(a){return wt.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,nh(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Fs(this,this.input)},t}(yh),As=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ps(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Os(this,this.input)},t}(Ss),Ts=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Bs(this,this.input)},t}(Ds),xh=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(to),Ns=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,va(e,this.input,function(i){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return wt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return lh(hh(i,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Ss(this,this.input)},t}(xh),Fs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Is(e,this.input,function(u){return wt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,lh(hh(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new Ds(this,this.input)},t}(xh),Ps=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new As(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Os(this,this.input)},t}(Ns),Ms=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Ts(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Bs(this,this.input)},t}(Fs),bh=function(r){ie(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(to),Os=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,va(e,this.input,function(a){return Promise.all(a.map(function(i){return wt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return ch(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new As(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ps(this,this.input)},t}(bh),Bs=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Is(e,this.input,function(a){return wt.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,ch(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Ts(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t}(bh),wh=function(r){ie(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?wt.faceLandmark68TinyNet:wt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(to),fx=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Fe?[4,ys(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,gs(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Fe&&c.dispose()}),[2,e.map(function(c,l){return pa(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new As(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ps(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Os(this,this.input)},t}(wh),vx=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Fe?[4,ys(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,gs(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Fe&&u.dispose()}),[2,pa(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Ts(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ms(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Bs(this,this.input)},t}(wh),_h=function(r){ie(t,r);function t(e,n){n===void 0&&(n=new fa);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(to),Ch=function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof dh?[4,wt.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof vh?function(s){return wt.tinyFaceDetector.locateFaces(s,o)}:o instanceof fa?function(s){return wt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Es?function(s){return wt.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Gr({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new fx(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ss(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Ns(this.runAndExtendWithFaceDetections(),this.input)},t}(_h);(function(r){ie(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,new Ch(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Gr({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new vx(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ds(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Fs(this.runAndExtendWithFaceDetection(),this.input)},t})(_h);function mx(r,t){return t===void 0&&(t=new fa),new Ch(r,t)}function gx(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof fo)return i;if(i instanceof Float32Array)return new fo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new fo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return gx(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Gu(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Gu("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return fo.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function Eh(r,t){var e=new Wn(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return Eh(s,{width:n,height:o})});if(rh(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return pa(Gr(r,a),i)}return Vl(r)?Gr(r,r.detection.forSize(n,o)):r instanceof Hr||r instanceof Ft?r.forSize(n,o):r}let yx=Pi(),xx=new Date,Ih=[];for(let r=1;r<=10;r++){let t=new Date(xx.getTime()-r*1e3);Ih.push(yx.formatTime(t))}const bx=[Ih,["馆内人数",165,182,188,172,158,192,185,182,178,170,163,161],["出馆人数",52,54,59,55,74,71,68,62,58,51,47,44],["入馆人数",45,67,73,39,48,35,30,28,32,37,42,50]];let kt={toolbox:{show:!0,orient:"vertical",left:"15",top:"-5",feature:{},itemSize:25},legend:{left:"right",data:["总人数","出馆人数","入馆人数"],textStyle:{color:"#4c9bfd"}},grid:[{bottom:"10%"}],dataset:{source:bx},xAxis:[{type:"category",axisLabel:{color:"#4c9bfd"}}],yAxis:[{gridIndex:0,name:"人数",nameTextStyle:{color:"#4c9bfd",fontSize:14},axisLabel:{color:"#4c9bfd"}}],series:[{name:"总人数",type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{name:"出馆人数",type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}},{name:"入馆人数",type:"line",smooth:!0,seriesLayoutBy:"row",emphasis:{focus:"series"}}]};const _r=r=>(ec("data-v-332e3747"),r=r(),tc(),r),wx={key:0,class:"Container",ref:"ContainerRef"},_x={class:"Container-panel line"},Cx=_r(()=>re("div",{class:"Container-panel-title"},[re("span",null,"馆内人数")],-1)),Ex=_r(()=>re("div",{class:"Container-panel-footer"},null,-1)),Ix={class:"Container-panel bar"},Rx=_r(()=>re("div",{class:"Container-panel-title"},[re("span",null,"出口")],-1)),kx={class:"Container-panel-video",ref:"chartBuildRef"},Sx=_r(()=>re("div",{class:"Container-panel-footer"},null,-1)),Dx={class:"Container-panel pie"},Ax=_r(()=>re("div",{class:"Container-panel-title"},[re("span",null,"入口")],-1)),Tx={class:"Container-panel-video",ref:"chartEnvironmentRef"},Nx=_r(()=>re("div",{class:"Container-panel-footer"},null,-1)),Fx=qr({__name:"videoInfro",setup(r){const t=fe(null),e=fe(null),n=fe(null),o=fe(null);let a=fe(null);const i=Un();let s=fe(!1),u=!1,c,l,h={},d=fe(!1);function p(){i.result===0?c=i.resultTitle.success.subTitle:i.result===1?c=i.resultTitle.warning.subTitle:c=i.resultTitle.error.subTitle}async function f(v,g){if(u)return;(!v.currentTime||v.paused||v.ended)&&setTimeout(()=>f(v,g));let x={inputSize:512,scoreThreshold:.5},w=new vh(x),b=await mx(v,w);const _=Yy(g,v,!0);Eh(b,_).forEach(k=>{const I=k.box;new Hy(I,{label:"Face",boxColor:"red",lineWidth:5}).draw(g)}),setTimeout(()=>f(v,g),180)}const m=_o("buildvisual");return Yo(async()=>{await wt.tinyFaceDetector.loadFromUri("/models"),p(),Ar.alert("点击建筑可以使用该功能","提示",{confirmButtonText:"确定"}),m.value=!1,Ro().getView().on("click",async function(x){s.value=!0,await td(),kt.toolbox.feature={myTool1:{show:!0,title:"限流评估",icon:"image://	https://cdn-icons-png.flaticon.com/512/998/998382.png",onclick:function(){d.value=!0,Ar.prompt(c,"当前人数173人",{confirmButtonText:"OK",cancelButtonText:"Cancel"}).then(({value:S})=>{Ar({title:"Message",message:ct(ui,{icon:"success",title:"成功设置人数",subTitle:"游客限流量比较合适"})})})}}},a.value&&(h=bo(a.value),Tr(h,kt));let w=e.value,y=t.value,b=n.value,_=o.value;f(w,y),f(_,b)}),l=setInterval(()=>{let x=new Date,w=new Date(x.getTime()),y=Pi(),b=Math.random()*20+160,_=Math.random()*50+10,S=Math.random()*50+10;kt.dataset.source[0].shift(),kt.dataset.source[0].push(y.formatTime(w)),kt.dataset.source[1].shift(),kt.dataset.source[1].push(b),kt.dataset.source[2].shift(),kt.dataset.source[2].push(_),kt.dataset.source[3].shift(),kt.dataset.source[3].push(S),Tr(h,kt),b>=178&&!d.value&&Ar({title:"Message",message:ct(ui,{icon:"warning",title:"当前人数超过限流人数",subTitle:"建议上调游客人数限制"})})},1e3)}),Fi(()=>{u=!0,clearInterval(l)}),(v,g)=>Ie(s)?(wn(),Jo("div",wx,[re("div",_x,[Cx,re("div",{class:"Container-panel-chart",ref_key:"chartVisitorRef",ref:a},null,512),Ex]),re("div",Ix,[Rx,re("div",kx,[re("video",{class:"video",src:jd,ref_key:"video",ref:e,autoplay:"",muted:"",loop:"",playsinline:""},null,512),re("canvas",{ref_key:"canvas",ref:t,class:"canvas"},null,512)],512),Sx]),re("div",Dx,[Ax,re("div",Tx,[re("video",{class:"video",src:$d,ref_key:"video1",ref:o,autoplay:"",muted:"",loop:"",playsinline:""},null,512),re("canvas",{ref_key:"canvas1",ref:n,class:"canvas"},null,512)],512),Nx])],512)):Co("",!0)}});const Px=Ni(Fx,[["__scopeId","data-v-332e3747"]]);let Mn=class extends ld{constructor(r){super(r),this.type="area-measurement",this.unit=null}set geometry(r){rt(r)?this._set("geometry",null):(r.rings.length>1&&Yu.getLogger(this.declaredClass).warn("Measuring polygons with multiple rings is not supported."),this._set("geometry",r.clone()))}get requiredPropertiesForEditing(){if(xe(this.geometry)&&this.geometry.rings.length===1){const r=this.geometry.rings[0];if(r.length<=2||!Nh(r[0],r[r.length-1]))return[null]}return[this.geometry]}clear(){this.geometry=null}};te([ae({type:["area-measurement"]})],Mn.prototype,"type",void 0),te([ae({value:null,type:Th})],Mn.prototype,"geometry",null),te([ae({type:wo,value:null})],Mn.prototype,"unit",void 0),te([ae({readOnly:!0})],Mn.prototype,"requiredPropertiesForEditing",null),Mn=te([yr("esri.analysis.AreaMeasurementAnalysis")],Mn);const Rh=Mn;class Mx{constructor(t,e=null){this.screenPoint=t,this.result=e}}class Ox{constructor(t,e){this.scenePoint=t,this.mapPoint=e}}class Bx{constructor(t){this.vertexManipulators=[],this._destroyed=!1,this._isManipulatorsOwner=!0,this._visible=!0,this._laserLine=null,this._cursorManipulator=null,this._listenerHandles=null,this._tempHandlePosition=Ls(),this._defaultStyle={laserLineGlowColor:wa.toUnitRGB(js()),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:wa.toUnitRGB(gd()),laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:wa.toUnitRGB(js()),handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25};const{analysisViewData:e,manipulators:n,toolState:o,view:a,visible:i}=t;this._analysisViewData=e,this._toolState=o,n!=null?(this._manipulators=n,this._isManipulatorsOwner=!1):this._manipulators=new nc,this._view=a;const s=this._style={...this._defaultStyle,...Fh(t.style)};this._intersector=Ph(a.state.viewingMode),this._intersector.options.store=Mh.MIN;const u=$s(a,s.handleColor,s.handleOpacity);u.available=!1,u.radius=s.handleRadius,u.interactive=!1,this._manipulators.add(u),this._cursorManipulator=u,this._laserLine=new yd({view:a,attached:!0,style:{glowColor:s.laserLineGlowColor,glowWidth:s.laserLineGlowWidth,glowFalloff:s.laserLineGlowFalloff,innerColor:s.laserLineInnerColor,innerWidth:s.laserLineInnerWidth,globalAlpha:s.laserLineGlobalAlpha}}),this._updateVisibility(i||!0)}destroy(){this._listenerHandles=bn(this._listenerHandles),this._isManipulatorsOwner?this._manipulators=bn(this._manipulators):this._manipulators=null,this._laserLine=bn(this._laserLine),this._destroyed=!0}get destroyed(){return this._destroyed}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData;return{laserLineRenderer:xe(t)?{heightManifoldEnabled:t.heightManifoldEnabled,heightManifoldTarget:t.heightManifoldTarget,pointDistanceEnabled:t.pointDistanceEnabled,pointDistanceOrigin:t.pointDistanceOrigin,pointDistanceTarget:t.pointDistanceTarget,lineVerticalPlaneEnabled:t.lineVerticalPlaneEnabled}:{heightManifoldEnabled:!1,heightManifoldTarget:null,pointDistanceEnabled:!1,pointDistanceOrigin:null,pointDistanceTarget:null,lineVerticalPlaneEnabled:!1}}}show(){this._setVisibility(!0)}hide(){this._setVisibility(!1)}_setVisibility(t){this._destroyed||this._visible===t||this._updateVisibility(t)}_updateVisibility(t){this._visible=t,this._laserLine.visible=t,t?(this._initializeListeners(),this._updateAll()):(this._destroyListeners(),this.vertexManipulators.forEach(e=>this._removeVertexManipulator(e)),this.vertexManipulators=[],this._view.cursor=null)}vertexHandleAt(t,e){const n=this._manipulators.intersect(t,e);return xe(n)?n.metadata:null}pick(t){const e=this._view.spatialReference,n=Oh(t.screenPoint);this._view.sceneIntersectionHelper.intersectToolIntersectorScreen(n,this._intersector);const o=this._intersector.results.min,a=Ls();if(!o.getIntersectionPoint(a))return null;const i=this._view.renderCoordsHelper.fromRenderCoords(a,e);return rt(i)?null:new Ox(a,i)}_updateAll(){this._visible&&(this._updateVertexManipulators(),this._updateLaserLine())}_createVertexManipulator(){const t=$s(this._view,this._style.handleColor,this._style.handleOpacity);return t.radius=this._style.handleRadius,this._manipulators.add(t),t}_removeVertexManipulator(t){this._manipulators.remove(t)}_updateVertexManipulators(){const{viewData:t}=this._analysisViewData,e=this._analysisViewData.path?this._analysisViewData.path.vertices:[],n=this.vertexManipulators;Lx(n,e.length,()=>this._createVertexManipulator(),o=>this._removeVertexManipulator(o)),n.forEach((o,a)=>{o.metadata=e[a],o.renderLocation=t.positionsRenderCoords[a],o.cursor=a===0&&this._toolState.polygonState==="drawing"?"crosshair":null}),this._toolState.polygonState==="drawing"&&xe(this._analysisViewData.cursorPoint)?(this._cursorManipulator.available=!0,this._cursorManipulator.location=this._analysisViewData.cursorPoint):this._cursorManipulator.available=!1}_getFocusPoint(){const{lastDraggedVertex:t}=this._analysisViewData;switch(this._toolState.polygonState){case"drawing":return xe(this._analysisViewData.cursorPoint)?this._analysisViewData.cursorPoint:xe(t)?this._analysisViewData.path.getVertexPositionAsPoint(t):ii(this._analysisViewData.path.lastPoint);case"editing":return xe(t)?this._analysisViewData.path.getVertexPositionAsPoint(t):null;default:return this._analysisViewData.cursorPoint}}_updateLaserLine(){const t=this._style.laserLineEnabled&&this._toolState.polygonState!=="measured"&&this._toolState.active,e=this._getFocusPoint();if(t&&xe(e)){const n=this._tempHandlePosition;this._view.renderCoordsHelper.toRenderCoords(e,n),this._laserLine.heightManifoldTarget=n}else this._laserLine.heightManifoldTarget=null}_initializeListeners(){this._listenerHandles=new Xo,this._listenerHandles.add([qt(()=>this._toolState.polygonState,()=>this._updateLaserLine()),qt(()=>this._analysisViewData.viewData,()=>this._updateAll(),Ju),qt(()=>({lastDraggedVertex:this._analysisViewData.lastDraggedVertex,cursorPoint:this._analysisViewData.cursorPoint}),()=>this._updateLaserLine()),qt(()=>this._toolState.active,()=>this._updateAll())])}_destroyListeners(){this._listenerHandles=bn(this._listenerHandles)}}function Lx(r,t,e,n){for(;r.length<t;)r.push(e());if(n)for(;r.length>t;)n(r.pop());else r.length=t}let ut=class extends bd{constructor(r){super(r),this._handles=new Xo,this._updatingHandles=new Bh,this.polygonState="initial",this.manipulators=new nc,this._getSnappingContext=dd(t=>new Ed({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new wd(new _d("point",Cd(!0,!1,this.view.spatialReference))),visualizer:new fd}))}initialize(){const{view:r,analysisViewData:t,manipulators:e,visible:n}=this;this.measurementView=new Bx({view:r,analysisViewData:t,toolState:this,manipulators:e,visible:n});const o=pd(r);this._snappingManagerResult=o,this._handles.add(o),this._snappingOperation=new Id({view:r}),this._updatingHandles.add(()=>this.stagedPoint,a=>{this.analysisViewData.cursorPoint=xe(a)?no(a,new Ws):null},Mr),kd(this,()=>{const a=Lh(this.view.inputManager.latestPointerType,"mouse"),i=this._getSnappingContext(a);this._updatingHandles.addPromise(si(this._snappingOperation.resnap(this._snappingManager,i)))}),this._setupManipulators(),this._handles.add(qt(()=>this.state,a=>{a==="measured"&&this.finishToolCreation()},Mr))}destroy(){this.measurementView.destroy(),this._set("measurementView",null),this._handles=bn(this._handles),this._updatingHandles=bn(this._updatingHandles)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){return this.analysisViewData.path.numVertices===0?"ready":this.analysisViewData.validMeasurement&&this.polygonState!=="editing"?"measured":"measuring"}get cursor(){return this.state==="ready"||this.polygonState==="drawing"?"crosshair":null}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}get stagedPoint(){return this._snappingOperation.stagedPoint}set stagedPoint(r){this._snappingOperation.stagedPoint=r}get snappingOptions(){return this._snappingManager.options}finishMeasurement(){const{path:r}=this.analysisViewData;r.numVertices<3?(r.clear(),this.polygonState="initial"):(r.close(),this.polygonState="measured"),this._resetSnappingState()}onShow(){this.measurementView.show()}onHide(){this.measurementView.hide()}onDeactivate(){this._resetSnappingState()}onInputEvent(r){switch(r.type){case"immediate-double-click":this._handleImmediateDoubleClick(r);break;case"immediate-click":this._handleImmediateClick(r);break;case"pointer-move":this._handlePointerMove(r);break;case"drag":this._handleDrag(r);break;case"key-down":this._handleKeyDown(r)}}_setupManipulators(){const r=e=>e.events.on("grab-changed",()=>{if(this.analysisViewData.validMeasurement){const n=this.manipulators.some(o=>o.manipulator.grabbing);this.polygonState=n?"editing":"measured"}}),t=e=>{this._handles.add([xd(e,(n,o,a,i)=>{const s=md(n),u=n.metadata,c=this._snappingManager,l=this._getSnappingContext(i),h=this._updatingHandles,{snappingStep:d,cancelSnapping:p}=Rd({snappingManager:c,snappingContext:l,updatingHandles:h});a=a.next(s).next(m=>(this.analysisViewData.lastDraggedVertex=null,this.analysisViewData.path.setVertexPosition(u,f),n.location=f,m)).next(p),o.next(s).next(vd(this.view)).next(...d).next(m=>{n.location=m.mapEnd,this.analysisViewData.lastDraggedVertex=m.action==="end"?null:u,this.analysisViewData.path.setVertexPosition(u,no(m.mapEnd))});const f=no(this.analysisViewData.path.getVertexPositionAsPoint(u))}),r(e)],e)};this.manipulators.forEach(({manipulator:e})=>{t(e)}),this._handles.add([this.manipulators.on("after-add",({item:{manipulator:e}})=>{t(e)}),this.manipulators.on("after-remove",({item:{manipulator:e}})=>this._handles.remove(e))])}_handleImmediateDoubleClick(r){qs(r)&&(this.polygonState==="drawing"&&this.finishMeasurement(),r.stopPropagation())}_handleDrag(r){this.polygonState==="editing"&&r.stopPropagation()}_handleImmediateClick(r){if(!qs(r))return;const t=Vs(r),{pointerType:e}=r;if(this.active)switch(this.polygonState){case"initial":if(this._addVertexAt(t,e))return this.stagedPoint=null,this.polygonState="drawing",void r.stopPropagation();break;case"drawing":{const n=this.measurementView.vertexHandleAt(t,e);if(rt(n)){if(this._addVertexAt(t,e))return this.stagedPoint=null,void r.stopPropagation()}else n.index===0&&(this.finishMeasurement(),r.stopPropagation());break}}r.pointerType==="mouse"&&this._hoverAt(t)}_handlePointerMove(r){if(r.pointerType==="mouse"){const t=Vs(r);this._hoverAt(t)}}_handleKeyDown(r){r.key==="Enter"&&this.polygonState==="drawing"&&(this.finishMeasurement(),r.stopPropagation())}_hoverAt(r){const{polygonState:t}=this;if(this.active&&(t==="initial"||t==="drawing")){const e=this._pick(r);if(xe(e)&&xe(e.mapPoint)){const n=this._getSnappingContext("mouse");this._updatingHandles.addPromise(si(this._snappingOperation.snap({point:e.mapPoint},this._snappingManager,n)))}}else this.stagedPoint=null}_addVertexAt(r,t){const e=this._pick(r);if(xe(e)&&xe(e.mapPoint)){const{mapPoint:n}=e,o=this._getSnappingContext(t),a=this._snappingOperation.update({point:n},this._snappingManager,o),i=no(a,new Ws);return this.analysisViewData.path.add(i),!0}return!1}_pick(r){const t=new Mx(r);return this.measurementView.pick(t)}_resetSnappingState(){this._snappingManager.doneSnapping(),this._snappingOperation.abort(),this._snappingOperation.stagedPoint=null}get test(){return{snappingManager:this._snappingManager}}};te([ae({readOnly:!0})],ut.prototype,"state",null),te([ae()],ut.prototype,"polygonState",void 0),te([ae({readOnly:!0})],ut.prototype,"cursor",null),te([ae()],ut.prototype,"measurementView",void 0),te([ae({constructOnly:!0})],ut.prototype,"view",void 0),te([ae({constructOnly:!0})],ut.prototype,"analysis",void 0),te([ae({constructOnly:!0})],ut.prototype,"analysisViewData",void 0),te([ae({readOnly:!0})],ut.prototype,"manipulators",void 0),te([ae()],ut.prototype,"updating",null),te([ae()],ut.prototype,"stagedPoint",null),te([ae()],ut.prototype,"snappingOptions",null),ut=te([yr("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DTool")],ut);const Wx=ut;let an=class extends Wh{constructor(t){super(t),this.tool=null,this._baseHandles=new Xo,this._loggedUnsupportedErrorOnce=!1,this.logger=Yu.getLogger(this.declaredClass),t&&t.visible!=null&&(this.visible=t.visible)}initialize(){this._baseHandles.add(qt(()=>({ready:xe(this.view)&&this.view.ready,supported:this.supported}),({ready:t,supported:e})=>{!t||e||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},Mr))}destroy(){this.removeTool(),this.view=null,this._baseHandles=bn(this._baseHandles)}get active(){return xe(this.tool)&&this.tool.active}get disabled(){return rt(this.view)||!this.view.ready||!this.supported}get supported(){return rt(this.view)||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(t){if(t===this.view)return;this.removeTool(),this._set("view",t);const e="tools";this._baseHandles.remove(e),rt(t)||this._baseHandles.add(t.tools.on("after-remove",n=>{n.item===this.tool&&this._set("tool",null)}),e)}set visible(t){this._set("visible",t),xe(this.tool)&&(this.tool.visible=t)}createTool(t={interactive:!1}){if(this.removeTool(),rt(this.view)||!this.view.ready||!this.supported)return;const e=this.constructTool();e.created?(this._set("tool",e),this.view.tools.add(e)):t.interactive?(this._set("tool",e),this.view.addAndActivateTool(e),Vh(()=>e.created,()=>{e.active&&xe(this.view)&&(this.view.activeTool=null)},{initial:!0,once:!0})):e.destroy()}removeTool(){const t=this.tool;if(rt(t))return;const e=Qu(this.view,n=>n.tools);xe(e)?e.remove(t):t.destroy(),this._set("tool",null)}logError(...t){this.logger.error(...t)}};te([ae({constructOnly:!0})],an.prototype,"tool",void 0),te([ae()],an.prototype,"active",null),te([ae()],an.prototype,"disabled",null),te([ae()],an.prototype,"supported",null),te([ae({value:null})],an.prototype,"view",null),te([ae({type:Boolean,value:!0})],an.prototype,"visible",null),an=te([yr("esri.widgets.support.InteractiveToolViewModel")],an);var pr;(function(r){r[r.PENDING=0]="PENDING",r[r.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",r[r.RUNNING=2]="RUNNING"})(pr||(pr={}));let Lt=class extends an{constructor(t={}){super(t),this.analysisView=null,this._reconnectViewTask=null,this._analysisBaseHandles=new Xo,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const e=t==null?void 0:t.analysis;xe(e)?this.analysis=e:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(t){const{analysis:e,...n}=t;return n}initialize(){this._analysisBaseHandles.add([qt(()=>Qu(this.analysis,({parent:t})=>t),t=>{this._parentChangeFromReconnect||t===this.view||this._set("isAnalysisOwner",!1);const e=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,e&&this._scheduleViewReconnect()},Ju),qt(()=>({view:this.view,ready:xe(this.view)&&this.view.ready,supported:this.supported}),({view:t},e)=>{const n=e==null?void 0:e.view;t!==n&&(this._startUserOperation=Jn(this._startUserOperation),this._disconnectFromView(n)),this._scheduleViewReconnect()},Mr),qt(()=>this.analysis.isEditable,(t,e)=>{rt(this.analysisView)||(t&&!e&&rt(this.tool)?this.createTool():!t&&e&&xe(this.tool)&&!this.tool.active&&this.removeTool())})])}destroy(){this._analysisBaseHandles=bn(this._analysisBaseHandles),this._reconnectViewTask=Jn(this._reconnectViewTask),this._startUserOperation=Jn(this._startUserOperation),xe(this.analysisView)&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),xe(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(t){t!==this._get("analysis")&&(this._startUserOperation=Jn(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(t),this._scheduleViewReconnect())}get ready(){return xe(this.analysisView)&&!this.connectingToView}get connectingToView(){return xe(this._reconnectViewTask)}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(t){this._set("visible",t),xe(this.analysisView)&&(this.analysisView.visible=t)}async start(){this.clear();const t={task:null,abort:null,state:pr.PENDING},e=zs(async n=>{t.state=pr.WAIT_FOR_VIEW_READY,await zh(()=>this.ready,n),t.state=pr.RUNNING,this.createTool({interactive:!0})});return t.task=e,t.abort=()=>e.abort(),this._startUserOperation=t,e.promise}clear(){this._startUserOperation=Jn(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(t){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=Jn(this._reconnectViewTask);const t=zs(async e=>{try{await this._reconnectView(e)}catch(n){if(Uh(e),!Zu(n))return void this.logger.warn("Failed to use analysis in view model",n);throw n}finally{t===this._reconnectViewTask&&(this._reconnectViewTask=null)}});this._reconnectViewTask=t}async _reconnectView(t){const{view:e}=this,n=xe(e)&&e.ready&&this.supported,o=this.analysis;if(this._startUserOperation=Xu(this._startUserOperation),this._disconnectFromView(e),n&&!rt(e)&&!rt(o)){if(this.isAnalysisOwner){if(xe(o.parent))return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,e.analyses.add(o)}this.analysisView=await e.whenAnalysisView(o),Hh(t)?this._startUserOperation=Xu(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(t){this.removeTool(),xe(t)&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,t.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(t){xe(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",t),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function Xu(r){return xe(r)&&r.state>=pr.RUNNING?(r.abort(),null):r}te([ae({nonNullable:!0})],Lt.prototype,"analysis",null),te([ae()],Lt.prototype,"analysisView",void 0),te([ae()],Lt.prototype,"ready",null),te([ae()],Lt.prototype,"connectingToView",null),te([ae({readOnly:!0})],Lt.prototype,"isAnalysisOwner",null),te([ae({type:Boolean,value:!0})],Lt.prototype,"visible",null),te([ae()],Lt.prototype,"_reconnectViewTask",void 0),Lt=te([yr("esri.widgets.support.InteractiveAnalysisViewModel")],Lt);let Wt=class extends Lt{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.",this._userUnitOptions=null,this._userUnit=null}initialize(){this.addHandles(qt(()=>({analysis:this.analysis,unit:this.unit}),({analysis:t,unit:e})=>{xe(t)&&(t.unit=e)},Mr))}get state(){return this.disabled||!this.ready?"disabled":rt(this.tool)?"ready":this.tool.state}get measurement(){if(rt(this.tool)||this.disabled||this.tool.destroyed)return null;const{analysisView:t}=this;if(rt(t))return null;const e=t.analysisVisualization,n=e.viewData,o=n.measurementData,a=t.validMeasurement,i=n.mode==="euclidean",s=(i?o.intersectingSegments:o.geodesicIntersectingSegments).size===0,u=s?a?"available":"unavailable":"invalid";return{mode:i?"euclidean":"geodesic",area:{text:s&&a?e.areaLabel:null,state:u},perimeterLength:{text:s&&a?e.perimeterLengthLabel:null,state:u}}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return xe(this._userUnit)?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new Rh}constructTool(){return new Wx({view:ii(this.view),analysis:this.analysis,analysisViewData:ii(this.analysisView),visible:this.visible})}_findSelectableUnit(t,e){const{unitOptions:n}=this;return n.includes(t)?t:xe(e)?this._findSelectableUnit(e):n[0]}_filteredOrAllUnits(t){if(rt(t))return wo.slice();const e=t.filter(n=>wo.includes(n));return e.length===0?wo.slice():e}};te([ae({type:Rh})],Wt.prototype,"analysis",void 0),te([ae({readOnly:!0})],Wt.prototype,"state",null),te([ae({readOnly:!0})],Wt.prototype,"measurement",null),te([ae()],Wt.prototype,"unitOptions",null),te([ae()],Wt.prototype,"unit",null),te([ae(hd)],Wt.prototype,"defaultUnit",void 0),te([ae()],Wt.prototype,"_userUnit",void 0),Wt=te([yr("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],Wt);const kh=Wt,zt="esri-area-measurement-3d",Dr=`${zt}__measurement`,xo=`${zt}__units`,ke={buttonDisabled:"esri-button--disabled",base:`${zt} esri-widget esri-widget--panel`,container:`${zt}__container`,hint:`${zt}__hint`,hintText:`${zt}__hint-text`,panelError:`${zt}__panel--error`,measurement:Dr,measurementItem:`${Dr}-item`,measurementItemDisabled:`${Dr}-item--disabled`,measurementItemTitle:`${Dr}-item-title`,measurementItemValue:`${Dr}-item-value`,settings:`${zt}__settings`,units:xo,unitsLabel:`${xo}-label`,unitsSelect:`${xo}-select esri-select`,unitsSelectWrapper:`${xo}-select-wrapper`,actionSection:`${zt}__actions`,newMeasurementButton:`${zt}__clear-button esri-button esri-button--primary`,widgetIcon:"esri-icon-measure-area"};let Je=class extends Gh{constructor(r,t){super(r,t),this.iconClass=ke.widgetIcon,this.viewModel=new kh}get view(){return this.viewModel.view}set view(r){this.viewModel.view=r}get visible(){return this.viewModel.visible}set visible(r){this.viewModel.visible=r}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(r){this.viewModel.analysis=r}get label(){var r;return((r=this.messages)==null?void 0:r.widgetLabel)??""}set label(r){this._overrideIfSome("label",r)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(r){this.viewModel.unitOptions=r}get unit(){return this.viewModel.unit}set unit(r){this.viewModel.unit=r}render(){const{messages:r,messagesUnits:t}=this,{supported:e,active:n,measurement:o,state:a,unit:i}=this.viewModel,s=a==="disabled",u=a==="measuring"||a==="measured",c=n&&a==="ready"?Ae("section",{key:"esri-area-measurement-3d__hint",class:ke.hint},Ae("p",{class:ke.hintText},r.hint),Ae("p",{class:ke.hintText},r.snappingDisablePromptAlternate)):null,l=e?null:Ae("section",{key:"esri-area-measurement-3d__unsupported",class:ke.panelError},Ae("p",null,r.unsupported)),h=(y,b,_)=>{switch(b.state){case"available":return Ae("div",{key:`${_}-enabled`,class:ke.measurementItem},Ae("span",{class:ke.measurementItemTitle},y),Ae("span",{"aria-live":"polite",class:ke.measurementItemValue},b.text));case"unavailable":return Ae("div",{key:`${_}-disabled`,class:this.classes(ke.measurementItem,ke.measurementItemDisabled)},Ae("span",{class:ke.measurementItemTitle},y));case"invalid":return Ae("div",{key:`${_}-enabled`,class:ke.measurementItem},Ae("span",{class:ke.measurementItemTitle},y),Ae("span",{class:ke.measurementItemValue},r.notApplicable))}},d=u&&o?Ae("section",{key:"esri-area-measurement-3d__measurement",class:ke.measurement},h(r.area,o.area,"area"),h(r.perimeterLength,o.perimeterLength,"perimeter-length")):null,p=`${this.id}__units`,f=Ae("label",{class:ke.unitsLabel,for:p},r.unit),m=Ae("div",{class:ke.unitsSelectWrapper},Ae("select",{class:ke.unitsSelect,id:p,onchange:this._changeUnit,bind:this,value:i},this.viewModel.unitOptions.map(y=>{var b;return Ae("option",{key:y,value:y},qh(y)?t.systems[y]:(b=t.units[y])==null?void 0:b.pluralCapitalized)}))),v=u?Ae("section",{key:"esri-area-measurement-3d__units",class:ke.units},f,m):null,g=u?Ae("div",{key:"settings",class:ke.settings},v):null,x=!e||n&&!u?null:Ae("div",{class:ke.actionSection},Ae("button",{bind:this,class:this.classes(ke.newMeasurementButton,s&&ke.buttonDisabled),disabled:s,onclick:this._newMeasurement,type:"button"},r.newMeasurement)),w=this.visible?Ae("div",{class:ke.container},l,c,g,d,x):null;return Ae("div",{"aria-label":r.widgetLabel,key:this,class:ke.base,role:"presentation"},w)}_newMeasurement(){si(this.viewModel.start())}_changeUnit(r){const t=r.target,e=t.options[t.selectedIndex];e&&(this.unit=e.value)}};te([ae()],Je.prototype,"view",null),te([ae()],Je.prototype,"visible",null),te([ae()],Je.prototype,"active",null),te([ae({constructOnly:!0,nonNullable:!0})],Je.prototype,"analysis",null),te([ae()],Je.prototype,"iconClass",void 0),te([ae()],Je.prototype,"label",null),te([ae(),Us("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")],Je.prototype,"messages",void 0),te([ae(),Us("esri/core/t9n/Units")],Je.prototype,"messagesUnits",void 0),te([ae()],Je.prototype,"uiStrings",void 0),te([ae({type:kh})],Je.prototype,"viewModel",void 0),te([ae()],Je.prototype,"unitOptions",null),te([ae()],Je.prototype,"unit",null),te([Hs()],Je.prototype,"_newMeasurement",null),te([Hs()],Je.prototype,"_changeUnit",null),Je=te([yr("esri.widgets.AreaMeasurement3D")],Je);const Vx=Je,zx=`@charset "UTF-8";.area-card{display:flex;flex-direction:column;position:fixed;left:35%;bottom:8%;width:30%;height:auto;border-radius:6px;background-image:linear-gradient(-90deg,#182940 0%,#115687 100%);pointer-events:auto;border:0px solid var(--el-card-border-color)}.area-card__header{display:flex;justify-content:space-between;align-items:center;color:#fff;font-size:1.6rem;font-weight:700;font-style:italic}.area-card__header__button{background-color:#182940}.area-card__header__button:hover{background-color:#fff}.el-table{--el-table-border-color: var(--el-border-color-lighter);--el-table-border: 1px solid var(--el-table-border-color);--el-table-text-color: #fff;--el-table-header-text-color: #fff;--el-table-row-hover-bg-color: #115687;--el-table-current-row-bg-color: var(--el-color-primary-light-9);--el-table-header-bg-color: #115687;--el-table-fixed-box-shadow: var(--el-box-shadow-light);--el-table-bg-color: #fff;--el-table-tr-bg-color: #ffffff00;--el-table-expanded-cell-bg-color: var(--el-fill-color-blank);--el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, .15);--el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, .15)}.el-table__body-wrapper tr td.el-table-fixed-column--right,.el-table__body-wrapper tr td.el-table-fixed-column--left{background-color:#115687}.el-rate__text{color:#fff}
`,Ux={class:"area-card__header"},Hx=re("span",null,"面积测量",-1),Gx={class:"area-card__content__tag",style:{display:"flex","align-items":"center","padding-top":"10px"}},qx=qr({__name:"areaInfro",setup(r){const t=fe(null);let e=null,n=!1;const o=fe(!0),a=()=>{let b=Ro().getView();n=!n,i(n,b)};function i(y,b){switch(y){case!0:e=new Vx({view:b}),e.viewModel.start().catch(_=>{if(!Zu(_))throw _}),o.value=!1;break;case!1:e&&(e.destroy(),e=null,o.value=!0);break}}const s=Un(),u=fe(s.result>1?1:s.result===1?s.result+1:3),c=fe(s.resultArr[s.result]),l=nd([{name:"开发区",switchValue:!1,area:"0m²",perimeter:"0m",areaindex:"0.0%"},{name:"未开发区",switchValue:!1,area:"0m²",perimeter:"0m",areaindex:"0.0%"}]),h=fe(0),d=fe(0),p=fe(0),f=fe(0);function m(y){let b=y.replace(/,/g,"");return/^[0-9]+(\.[0-9]+)?\s*[a-zA-Z²]+$/.test(b)&&(b=b.replace(/[a-zA-Z²]+$/,"")),parseFloat(b)}const v=y=>{e!=null&&e.viewModel.measurement.area.text&&(y.name==="开发区"?(h.value+=m(e==null?void 0:e.viewModel.measurement.area.text),y.area=h.value.toFixed(2)+"m²",d.value+=m(e==null?void 0:e.viewModel.measurement.perimeterLength.text),y.perimeter=d.value.toFixed(2)+"m"):(p.value+=m(e==null?void 0:e.viewModel.measurement.area.text),y.area=p.value.toFixed(2)+"m²",f.value+=m(e==null?void 0:e.viewModel.measurement.perimeterLength.text),y.perimeter=f.value.toFixed(2)+"m"))},g=y=>{u.value=s.result>1?1:s.result===1?s.result+1:3,c.value=s.resultArr[s.result],(y.name="开发区")?(h.value=0,y.area="0m²",d.value=0,y.perimeter="0m",y.areaindex="0.0%"):(p.value=0,y.area="0m²",f.value=0,y.perimeter="0m",y.areaindex="0.0%")},x=()=>{if(console.log(h.value,p.value),h.value===0||p.value===0)alert("请先记录面积");else{let y=h.value+p.value,b=h.value/y;if(l[0].areaindex=(b*100).toFixed(2)+"%",l[1].areaindex=((1-b)*100).toFixed(2)+"%",b<=.5){if(u.value===3)return;u.value++,c.value=s.resultArr[u.value===3?0:u.value===2?1:2]}else return}};Fi(()=>{e&&(e.destroy(),e=null)});const w=document.createElement("style");return w.setAttribute("lang","scss"),w.innerHTML=zx,document.head.appendChild(w),(y,b)=>(wn(),Eo(Ie(sd),{class:"area-card","body-style":{height:"80%"}},{header:Ve(()=>[re("div",Ux,[Hx,Se(Ie(sn),{onClick:a,id:"areaButton",class:"area-card__header__button"},{default:Ve(()=>[Se(Ie(rd),{src:"	https://cdn-icons-png.flaticon.com/512/3696/3696467.png",fit:"cover",style:{width:"30 px",height:"30px"}})]),_:1})])]),default:Ve(()=>[re("div",{class:"area-card__content",ref_key:"areaRef",ref:t},[Se(Ie(od),{data:l,border:!0,style:{width:"100%","background-image":"linear-gradient(-90deg, #182940 0%, #115687 100%)"}},{default:Ve(()=>[Se(Ie(Cr),{prop:"name",label:"参数",width:"120"}),Se(Ie(Cr),{prop:"area",label:"面积",width:"120"}),Se(Ie(Cr),{prop:"perimeter",label:"周长",width:"120"}),Se(Ie(Cr),{prop:"areaindex",label:"面积占比",width:"120"}),Se(Ie(Cr),{fixed:"right",label:"选择项",width:"100"},{default:Ve(({row:_})=>[Se(Ie(sn),{link:"",type:"primary",onClick:S=>v(_),disabled:o.value},{default:Ve(()=>[ro("记录")]),_:2},1032,["onClick","disabled"]),Se(Ie(sn),{link:"",type:"primary",onClick:S=>g(_),disabled:o.value},{default:Ve(()=>[ro("消除")]),_:2},1032,["onClick","disabled"])]),_:1})]),_:1},8,["data"]),re("div",Gx,[Se(Ie(ad),{class:"ml-2",type:Ie(c)},{default:Ve(()=>[ro("开发评估")]),_:1},8,["type"]),Se(Ie(id),{modelValue:u.value,"onUpdate:modelValue":b[0]||(b[0]=_=>u.value=_),max:3,texts:["差","良","优"],"show-text":"",style:{"margin-left":"8px"},disabled:!0},null,8,["modelValue"]),Se(Ie(sn),{type:"primary",size:"small",onClick:x,style:{position:"absolute",right:"5%"}},{default:Ve(()=>[ro("占比评估分析")]),_:1})])],512)]),_:1}))}}),jx=`.widget3d-drawbutton{position:absolute;top:50%;left:0;pointer-events:auto;height:auto;width:auto;background-image:linear-gradient(-90deg,#182940 0%,#184f75 100%);color:#e2f1fb}.widget3d-drawer{pointer-events:auto;background-image:linear-gradient(-90deg,#182940 0%,#184f75 100%);border-radius:5px}.widget3d-closebutton,.widget3d-visualization,.widget3d-monitor,.widget3d-area{height:auto;width:auto;background-image:linear-gradient(-90deg,#182940 0%,#184f75 100%);color:#e2f1fb}.el-drawer.ltr,.el-drawer.rtl{height:auto;top:42%;bottom:auto;right:auto;left:0%;pointer-events:auto}.el-drawer__body{display:flex;flex-direction:column;padding:0;overflow:hidden}.el-button+.el-button{margin-left:0}.el-message-box{height:auto;background-image:linear-gradient(-90deg,#182940 0%,#184f75 100%)}.el-message-box__title,.el-result__title p{color:#e2f1fb}.el-result__subtitle p{color:#1eb3ca}
`,$x=re("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[re("path",{fill:"currentColor",d:"M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"})],-1),Kx=re("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[re("path",{fill:"currentColor",d:"M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"})],-1),Xx=re("div",{style:{height:"30px"}},null,-1),Yx=re("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[re("path",{fill:"currentColor",d:"M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"})],-1),Jx=re("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[re("path",{fill:"currentColor",d:"M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"})],-1),Qx=re("svg",{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg","data-v-ea893728":""},[re("path",{fill:"currentColor",d:"M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"}),re("path",{fill:"currentColor",d:"M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"})],-1),Zx=qr({__name:"widget3d",setup(r){const t=Un(),e=_o("buildvisual"),n=_o("videovisual"),o=_o("areavisual"),a=fe(!1),i=fe(!0),s=()=>{a.value=!1},u=()=>{e.value=!e.value},c=()=>{n.value=!n.value},l=()=>{o.value=!o.value};Yo(()=>{t.setisDisabled(i)});const h=document.createElement("style");return h.setAttribute("lang","scss"),h.innerHTML=jx,document.head.appendChild(h),(d,p)=>(wn(),Jo(ud,null,[Se(Ie(sn),{class:"widget3d-drawbutton",onClick:p[0]||(p[0]=f=>a.value=!0)},{default:Ve(()=>[Se(Ie(Er),{size:20},{default:Ve(()=>[$x]),_:1})]),_:1}),Se(Ie(cd),{class:"widget3d-drawer",modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=f=>a.value=f),title:"I am the title","with-header":!1,modal:!1,direction:"ltr",size:"3.3%","z-index":2},{default:Ve(()=>[Se(Ie(sn),{onClick:s,class:"widget3d-closebutton"},{default:Ve(()=>[Se(Ie(Er),{size:20},{default:Ve(()=>[Kx]),_:1})]),_:1}),Xx,Se(Ie(sn),{class:"widget3d-visualization",onClick:u},{default:Ve(()=>[Se(Ie(Er),{size:25},{default:Ve(()=>[Yx]),_:1})]),_:1}),Se(Ie(sn),{class:"widget3d-monitor",onClick:c,disabled:i.value},{default:Ve(()=>[Se(Ie(Er),{size:25},{default:Ve(()=>[Jx]),_:1})]),_:1},8,["disabled"]),Se(Ie(sn),{class:"widget3d-area",onClick:l,disabled:i.value},{default:Ve(()=>[Se(Ie(Er),{size:25},{default:Ve(()=>[Qx]),_:1})]),_:1},8,["disabled"])]),_:1},8,["modelValue"])],64))}}),eb=qr({__name:"index",setup(r){const t=fe(null);jh(t);const e=fe(null),n=fe(!1),o=fe(!1),a=fe(!1);return $h.apiKey="AAPK38a95a31090f4db7af0665c5f4ad34996GXd4nU-HoOwfI68DHDryRWBagf1jRCFl-zOHFdrsipPV6sHAcJXfniZzD7HS8BB",Yo(()=>{setTimeout(()=>{let i=Ro();i.CreateSceneView();let s=i.getView();console.log(s.type),s.map=new Kh({basemap:"satellite",ground:"world-elevation"});let u=new Xh({symbolLayers:[{type:"water",waveDirection:260,color:"#25427c",waveStrength:"moderate",waterbodySize:"medium"}]}),c=new Yh({symbol:u}),l=new Gs({id:"building",url:"https://tiles.arcgis.com/tiles/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%BB%84%E6%B2%B3%E6%BC%82%E6%B5%81%E5%B9%BF%E5%9C%BA_%E5%86%9C%E5%AE%B6%E9%99%A2/SceneServer"}),h=new Gs({id:"model",url:"https://tiles.arcgis.com/tiles/R5nxHh77a68zEsEp/arcgis/rest/services/%E7%99%BD%E6%A8%A1/SceneServer"}),d=new Jh({url:"https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E9%BB%84%E6%B2%B3/FeatureServer/2",renderer:c,elevationInfo:{mode:"on-the-ground",offset:100}}),p=new Qh({title:"{name}",content:[{type:"fields",fieldInfos:[{fieldName:"area",label:"面积",format:{places:2,digitSeparator:!0}},{fieldName:"destory",label:"损坏程度"},{fieldName:"year",label:"建造年限"}]}]});s.when(async()=>{h.popupTemplate=p,s.map.add(l),s.map.add(d),s.map.add(h),await d.when(()=>{s.goTo(l.fullExtent),s.environment.lighting.directShadowsEnabled=!0}),new Zh({view:s,container:e.value,iconClass:"screen3d-icon-pan2"})})},1e3)}),Fi(()=>{Ro().isViewType()}),Ca("buildvisual",n),Ca("videovisual",o),Ca("areavisual",a),(i,s)=>(wn(),Jo("div",{ref_key:"screen3dRef",ref:t,class:"screen3d"},[re("div",{class:"screen3d-navigation",ref_key:"navigationRef",ref:e},null,512),Se(Zx),n.value?(wn(),Eo(qd,{key:0})):Co("",!0),o.value?(wn(),Eo(Px,{key:1})):Co("",!0),a.value?(wn(),Eo(qx,{key:2})):Co("",!0)],512))}});const sw=Ni(eb,[["__scopeId","data-v-6a147303"]]);export{sw as default};
