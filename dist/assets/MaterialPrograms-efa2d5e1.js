import{a as o}from"./WGLContainer-81305545.js";import{n as f}from"./programUtils-f035fe8a.js";const i=e=>{let t="";t+=e[0].toUpperCase();for(let r=1;r<e.length;r++){const s=e[r];s===s.toUpperCase()?(t+="_",t+=s):t+=s.toUpperCase()}return t},u=e=>{const t={};for(const r in e)t[i(r)]=e[r];return f(t)},g=(e,t,r,s)=>{const a=e+e.substring(e.lastIndexOf("/")),p=t+t.substring(t.lastIndexOf("/")),n=u(s);return{attributes:r,shaders:{vertexShader:n+o(`${a}.vert`),fragmentShader:n+o(`${p}.frag`)}}};export{g as o};
