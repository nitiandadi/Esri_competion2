/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{c as e}from"./vec4f64.js";import{ScreenSizeScaling as o}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl.js";import{ShaderOutput as r}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as a}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{multipassTerrainTest as l}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MultipassTerrainTest.glsl.js";import{symbolAlphaCutoff as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js";import{ColorConversion as n}from"../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js";import{addProjViewLocalOrigin as s,addViewNormal as t}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as c}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as g}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{glsl as m}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as v}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{TransparencyPassType as u}from"../views/3d/webgl-engine/lib/TransparencyPassType.js";import{VertexAttribute as p}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function f(e){const f=new v,b=e.hasMultipassTerrain&&(e.output===r.Color||e.output===r.Alpha);f.include(a,e),f.include(o,e),f.include(i,e);const{vertex:h,fragment:C}=f;return C.include(n),s(h,e),C.uniforms.add(new g("uColor",(e=>e.color))),f.attributes.add(p.POSITION,"vec3"),f.varyings.add("vWorldPosition","vec3"),b&&f.varyings.add("depth","float"),e.screenSizeEnabled&&f.attributes.add(p.OFFSET,"vec3"),e.shadingEnabled&&(t(h),f.attributes.add(p.NORMAL,"vec3"),f.varyings.add("vViewNormal","vec3")),h.code.add(m`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&h.code.add(m`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),h.code.add(m`
    ${b?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),b&&f.include(l,e),C.code.add(m`
    void main() {
      discardBySlice(vWorldPosition);
      ${b?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),e.shadingEnabled?(C.uniforms.add(new c("shadingDirection",(e=>e.shadingDirection))),C.uniforms.add(new g("shadedColor",(e=>w(e.shadingTint,e.color)))),C.code.add(m`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):C.code.add(m`vec4 finalColor = uColor;`),C.code.add(m`
      ${e.output===r.ObjectAndLayerIdColor?m`finalColor.a = 1.0;`:""}
      if (finalColor.a < ${m.float(d)}) {
        discard;
      }
      ${e.output===r.Alpha?m`gl_FragColor = vec4(finalColor.a);`:""}

      ${e.output===r.Color?m`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.transparencyPassType===u.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),f}function w(e,o){const r=1-e[3],i=e[3]+o[3]*r;return 0===i?(b[3]=i,b):(b[0]=(e[0]*e[3]+o[0]*o[3]*r)/i,b[1]=(e[1]*e[3]+o[1]*o[3]*r)/i,b[2]=(e[2]*e[3]+o[2]*o[3]*r)/i,b[3]=o[3],b)}const b=e(),h=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:"Module"}));export{h as S,f as b};
