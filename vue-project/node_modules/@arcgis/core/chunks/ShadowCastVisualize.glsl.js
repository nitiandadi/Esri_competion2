/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{d as e,f as s}from"./vec4f64.js";import{ScreenSpacePass as a}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js";import{ReadLinearDepth as o}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{CameraSpace as r}from"../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js";import{RgbaFloatEncoding as i}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float4PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as l}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{NoParameters as n,glsl as d}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as c}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{a as h}from"./ShadowCastAccumulate.glsl.js";import{ShadowCastVisualization as p}from"../views/3d/webgl-engine/shaders/ShadowCastVisualizeTechniqueConfiguration.js";class u extends n{constructor(s){super(),this.shadowCastMap=s,this.sampleScale=0,this.opacityFromElevation=1,this.color=e(g),this.bandSize=.1,this.threshold=.5}}const g=s(.01,0,.25,1);function w(e){const s=new c,n=s.fragment;n.include(i),n.include(o),s.include(r),s.include(a);const{visualization:u,bandsEnabled:g}=e;n.constants.add("inverseSampleValue","float",h),n.uniforms.add([new m("shadowCastMap",(e=>e.shadowCastMap)),new l("sampleScale",(e=>e.sampleScale)),new l("opacityFromElevation",(e=>e.opacityFromElevation)),new t("uColor",(e=>e.color))]);const w=u===p.Gradient,f=u===p.Threshold;return w&&g?n.uniforms.add(new l("bandSize",(e=>e.bandSize))):f&&n.uniforms.add(new l("threshold",(e=>e.threshold))),n.code.add(d`
      void main(void) {
        vec4 record = texture2D(shadowCastMap, uv);
        float pixelSamples = record.r * inverseSampleValue;
        if (pixelSamples < 1.0) {
          discard;
        }

        float strength = pixelSamples * sampleScale;

        ${f?d`
            if (strength <= threshold) {
              discard;
            }`:""}

        ${w&&g?d`strength = ceil(strength / bandSize) * bandSize;`:""}

        gl_FragColor = vec4(uColor.xyz, uColor.a * opacityFromElevation ${w?d`* strength`:""});
      }
    `),s}const f=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastVisualizePassParameters:u,build:w},Symbol.toStringTag,{value:"Module"}));export{u as S,f as a,w as b};
