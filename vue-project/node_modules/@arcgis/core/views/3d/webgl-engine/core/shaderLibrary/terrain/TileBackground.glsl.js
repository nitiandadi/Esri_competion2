/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{Z as o}from"../../../../../../chunks/vec3f64.js";import{LayerBlendMode as r}from"../output/BlendOptions.js";import{BackgroundGrid as e}from"./BackgroundGrid.glsl.js";import{BlendModes as t}from"../util/BlendModes.glsl.js";import{texelFetch as a}from"../util/WebGL2Utils.js";import{Float3PassUniform as s}from"../../shaderModules/Float3PassUniform.js";import{FloatPassUniform as i}from"../../shaderModules/FloatPassUniform.js";import{NoParameters as c,glsl as l}from"../../shaderModules/interfaces.js";import{createTexture2DPassSizeUniforms as n}from"../../shaderModules/Texture2DPassUniform.js";import{TextureSizeUniformType as u}from"../../shaderModules/TextureSizeUniformType.js";var d,p,m;!function(o){o[o.Composite=0]="Composite",o[o.ColorComposite=1]="ColorComposite",o[o.GridComposite=2]="GridComposite",o[o.GroupBackgroundComposite=3]="GroupBackgroundComposite",o[o.COUNT=4]="COUNT"}(d||(d={})),function(o){o[o.NotRequired=0]="NotRequired",o[o.Required=1]="Required",o[o.COUNT=2]="COUNT"}(p||(p={})),function(o){o[o.Off=0]="Off",o[o.On=1]="On",o[o.COUNT=2]="COUNT"}(m||(m={}));class f extends c{constructor(){super(...arguments),this.baseOpacity=1,this.backgroundColor=o,this.fboTexture=null}}function C(o,c){const f=c.output===d.GridComposite,C=c.output===d.ColorComposite,g=c.output===d.GroupBackgroundComposite,b=c.output===d.Composite;f&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.include(e)),C&&o.fragment.uniforms.add(new s("backgroundColor",(o=>o.backgroundColor)));const y=c.baseOpacityMode===p.Required;if(y&&o.fragment.uniforms.add(new i("baseOpacity",(o=>o.baseOpacity))),b){const r=c.hasWebGL2Context?u.None:u.InvSize;o.fragment.uniforms.add(n("fboColor",(o=>o.fboTexture),r))}const v=c.blendMode!==r.Normal,O=c.premultipliedSource===m.On;o.fragment.include(t,c),o.fragment.code.add(l`
    vec4 getBackground(vec2 uv) {
      return ${y?l`baseOpacity *`:""} ${g?l`vec4(0.0, 0.0, 0.0, 0.0)`:C?l`vec4(backgroundColor, 1.0)`:f?l`vec4(gridColor(uv), 1.0)`:l`${a(c,"fboColor","gl_FragCoord.xy")}`};
    }

    vec4 blendLayers(vec4 bgColor, vec4 colorLayer, float opacity) {
      ${v?l`
          vec3 cl = colorLayer.a == 0.0 ? colorLayer.rgb : colorLayer.rgb / colorLayer.a;
          vec3 cb = bgColor.a == 0.0 ? bgColor.rgb : bgColor.rgb / bgColor.a;
          return applyBlendMode(clamp(cl, vec3(0.0), vec3(1.0)), colorLayer.a * opacity, cb, bgColor.a);`:l`
          float composeAlpha = colorLayer.a * opacity;
          return ${!O&&(b&&!y||g)?l`colorLayer * opacity;`:l`bgColor * (1.0 - composeAlpha) + colorLayer * opacity;`}`}
    }`)}export{p as BaseOpacityMode,d as BlendLayersOutput,m as PremultipliedAlphaSource,C as TileBackground,f as TileBackgroundPassParameters};
