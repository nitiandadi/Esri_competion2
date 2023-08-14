import{k as C,r as q}from"./index-93a23f67.js";import{u as T}from"./mapviewstore-8a6f290e.js";import{u as D}from"./useTime-a8fa1ef7.js";import"./chartdata-dcab81db.js";import{a as p}from"./axios-760d4776.js";const L={西宁市:{小峡桥:{行政区划:"630100"},润泽桥:{行政区划:"630100"},塔尔桥:{行政区划:"630100"},扎马隆:{行政区划:"630100"}},海东市:{峡塘:{行政区划:"630200"},大河家:{行政区划:"630200"},甘冲口:{行政区划:"630200"},边墙村:{行政区划:"630200"}},海南藏族自治州:{什川桥:{行政区划:"620100"},唐乃亥:{行政区划:"632500"},龙羊峡库区出水口:{行政区划:"632500"}},海北藏族自治州:{金滩:{行政区划:"632200"},布哈河入青海湖口:{行政区划:"632200"}},玉树藏族自治州:{"才纳(帮布布)":{行政区划:"540100"},直门达:{行政区划:"632700"}},海西蒙古族藏族自治州:{高崖水文站:{行政区划:"620700"},总场水闸:{行政区划:"632800"},纳赤台:{行政区划:"632800"}},黄南藏族自治州:{扶和桥:{行政区划:"620100"},新城桥:{行政区划:"620100"},湟水桥:{行政区划:"620100"}},果洛藏族自治州:{扎马隆:{行政区划:"630100"},地沟桥:{行政区划:"623000"},玛曲:{行政区划:"623000"}}},w=[{name:"西宁市",coordinates:["101.77437699961685,36.623036000102104","101.8969569997836,36.563817999640335","101.56684799966033,36.48772199989526"]},{name:"黄南藏族自治州",coordinates:["101.79791999987066,36.615301000180935","101.73339699991065,36.62729700035309","102.69229300041636,35.816976999806705"]},{name:"海东市",coordinates:["101.79791999987066,36.615301000180935","101.73339699991065,36.62729700035309","102.69229300041636,35.816976999806705"]},{name:"海北藏族自治州",coordinates:["101.4561880001201,37.6949399997476","100.27042499977428,38.18258199965579","101.11447200026306,37.83852399998884"]},{name:"果洛藏族自治州",coordinates:["98.97059499993438,35.21901499965038","101.0428829996019,33.19772100011302","99.46288399990625,34.79721300016975"]},{name:"海南藏族自治州",coordinates:["99.6190320003699,36.73613099965164","100.95217900043656,36.140093000235666","100.13587999967349,36.860351999972174"]},{name:"玉树藏族自治州",coordinates:["98.97059499993438,35.21901499965038","101.0428829996019,33.19772100011302","99.46288399990625,34.79721300016975"]},{name:"海西蒙古族藏族自治州",coordinates:["101.79791999987066,36.615301000180935","101.73339699991065,36.62729700035309","102.69229300041636,35.816976999806705"]}],g=D();function S(){let t=[],r=new Date(g.year.value,g.month.value-1,g.day.value).getTime(),n=24*60*60*1e3;for(let o=0;o<5;o++){let l=new Date(r+(o-4)*n),u=l.getMonth()+1,s=l.getDate(),e=u+"-"+s;t.push(e)}return t}async function k(t,r){const n=S(),o={[n[0]]:[],[n[1]]:[],[n[2]]:[],[n[3]]:[],[n[4]]:[]},l=r[Math.floor(Math.random()*r.length)];let u=[],s=l;for(let e in s)(e==="pm2p5"||e==="pm10"||e==="so2"||e==="no2"||e==="co")&&s[e].forEach((y,a)=>{o[n[a]].push(y)});if(t){for(let e in o){const m={series:{data:[{value:o[e],name:e,itemStyle:{color:"#17e3f5"}}]}};u.push(m)}t.setOption({options:u})}}D();const I=C("data",()=>{const t={};async function r(n,o,l){if(l.value===!1)return;o.value=!0,n.value=0;let u=0;for(const s of w){t[s.name]={weaNear5d:[],airLast5d:[],water:[]};for(const e of s.coordinates){const m={location:e};await p.post("http://47.108.76.144:9000/quality/weaNear5d",m).then(i=>{t[s.name].weaNear5d.push(i.data)}),await p.post("http://47.108.76.144:9000/quality/airLast5d",m).then(i=>{t[s.name].airLast5d.push(i.data)});const y=s.name,a=L[y];let h="",c="";if(a){const i=Object.keys(a),d=Math.floor(Math.random()*i.length);c=i[d],h=a[c].行政区划}const f={areaCode:h,name:c};await p.post("http://47.108.76.144:9000/quality/water",f).then(i=>{t[s.name].water.push(i.data)}),u++,n.value=Math.floor(u/(w.length*3)*100),u===w.length*3&&setTimeout(()=>{o.value=!1},600),console.log(n.value)}console.log(t),l.value=!1}}return{getdata:r,data:t}});function M(t,r){r&&r.setOption({series:t})}const v=D();function B(){let t=[],r=new Date(v.year.value,v.month.value-1,v.day.value).getTime(),n=24*60*60*1e3;for(let o=0;o<5;o++){let l=new Date(r+(o-4)*n),u=l.getFullYear(),s=l.getMonth()+1,e=l.getDate(),m=u+"/"+s+"/"+e;m="",t.push(m)}return t}async function x(t,r,n,o,l){const u=I().data,s=t.features[0].attributes.city;let e=[];const m=u[s].weaNear5d;e=[];const y=m[Math.floor(Math.random()*m.length)];for(let c in y)if(c==="tempMax"||c==="tempMin"||c==="humidity"){const f={data:y[c]};e.push(f)}M(e,n);const a=B(),h={ph:[],dissolvedoxygen:[],permanganateindex:[],totalnitrogen:[]};for(let c=0;c<a.length;c++){const f=u[s].water,i=f[Math.floor(Math.random()*f.length)];for(let d in i)(d==="ph"||d==="dissolvedoxygen"||d==="permanganateindex"||d==="totalnitrogen")&&h[d].push(i[d])}e=[];for(let c in h){const f={data:h[c]};e.push(f)}M(e,l),k(o,u[s].airLast5d)}const R=C("onlayer",()=>{const t=q(0);let r=null,n=null,o=null,l=null;function u(a){n=a}function s(a){o=a}function e(a){l=a}async function m(){const a=T().getView(),h=a.map.findLayerById("points"),c=a.layerViews.find(i=>i.layer.id==="points");a.zoom=6;const f=h.createQuery();f.where="OBJECTID = 1",await h.queryFeatures(f).then(async function(i){r=c.highlight(i.features[0]),h.refresh(),a.goTo(i.features),await x(i,"tempMax",n,o,l)}),a.on("click",i=>{r&&r.remove(),a.hitTest(i).then(async function(d){console.log("一点击"),d.results.length===1&&(a.goTo(d.results[0].graphic),t.value=d.results[0].graphic.attributes.ObjectId,f.where=`OBJECTID = ${t.value}`,await h.queryFeatures(f).then(async function(O){await x(O,"tempMax",n,o,l)}))})})}function y(){const a=T().getView();r&&r.remove(),a.goTo({center:[97,36],zoom:6})}return{destroyOnlayer:y,createOnlayer:m,setChartLine:u,setChartRadar:s,setChartBar:e,IdRef:t}});export{I as a,w as c,L as q,R as u};