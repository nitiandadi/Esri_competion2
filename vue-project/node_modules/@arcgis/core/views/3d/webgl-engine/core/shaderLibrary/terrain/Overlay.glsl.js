/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{c as e}from"../../../../../../chunks/vec4f64.js";import{area as o,width as r,height as t}from"../../../../../../geometry/support/aaBoundingRect.js";import{OverlayIndex as a,RenderTargetType as i}from"../../../../terrain/interfaces.js";import{OverlaySource as l}from"../../../../terrain/Overlay.js";import{RenderPassIdentifier as d}from"../../renderPasses/AllRenderPasses.js";import{ShaderOutput as s}from"../ShaderOutput.js";import{addMainLightDirection as n,addMainLightIntensity as c}from"../shading/MainLighting.glsl.js";import{PBRMode as v}from"../shading/PhysicallyBasedRenderingParameters.glsl.js";import{Water as x}from"../shading/Water.glsl.js";import{textureSize as u,texelFetch as p}from"../util/WebGL2Utils.js";import{Float4DrawUniform as f}from"../../shaderModules/Float4DrawUniform.js";import{glsl as m}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as y}from"../../shaderModules/Texture2DPassUniform.js";var C;function g(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add([new f("overlayTexOffset",((e,o)=>O(e,o))),new f("overlayTexScale",((e,o)=>T(e,o)))]),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new y("ovColorTex",((e,o)=>b(e,o)))),h(e,o)}function h(e,o){e.extensions.add("GL_OES_standard_derivatives"),o.pbrMode!==v.Water&&o.pbrMode!==v.WaterOnIntegratedMesh&&o.pbrMode!==v.TerrainWithWater||e.include(x,o);const{vertex:r,fragment:t}=e;e.varyings.add("vtcOverlay","vec4"),r.code.add(m`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),t.code.add(m`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture2D(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture2D(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),t.code.add(m`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),t.code.add(m`
    vec4 getOverlayColorTexel(vec4 texCoords) {
          vec2 texDim =  ${u(o,"ovColorTex")};

          vec4 color0 = ${p(o,"ovColorTex","vec2(texCoords.x * 0.5, texCoords.y)*texDim")};
          vec4 color1 = ${p(o,"ovColorTex","vec2(texCoords.z * 0.5 + 0.5, texCoords.w)*texDim")};

          bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
          bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));

          return mix(color1 * float(isValid1), color0, float(isValid0));
    }
  `),o.pbrMode!==v.Water&&o.pbrMode!==v.WaterOnIntegratedMesh&&o.pbrMode!==v.TerrainWithWater||(n(t),c(t),t.code.add(m`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function b(e,o){return 0===o.overlays.length?null:e.identifier===d.Material&&e.output===s.Color?o.overlays[a.INNER].getColorTextureNoRasterImage():e.identifier===d.Material&&e.output===s.ObjectAndLayerIdColor?o.overlays[a.INNER].getColorTexture(l.ObjectAndLayerIdColor):e.identifier===d.Highlight?o.overlays[a.INNER].getValidTexture(i.Highlight):null}function O(e,a){for(const i of a.overlays){const{index:a,extent:l}=i;o(l)>0&&(M[2*a]=e.toMapSpace[0]/r(l)-l[0]/r(l),M[2*a+1]=e.toMapSpace[1]/t(l)-l[1]/t(l))}return M}function T(e,a){for(const i of a.overlays){const{index:a,extent:l}=i;o(l)>0&&(M[2*a]=e.toMapSpace[2]/r(l),M[2*a+1]=e.toMapSpace[3]/t(l))}return M}!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(C||(C={}));const M=e();export{g as OverlayIM,C as OverlayMode,b as getColorTexture,h as overlay};
