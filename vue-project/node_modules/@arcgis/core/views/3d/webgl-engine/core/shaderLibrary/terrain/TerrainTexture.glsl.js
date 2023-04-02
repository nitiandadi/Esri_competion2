/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{OverlayIndex as e}from"../../../../terrain/interfaces.js";import{BackgroundGrid as t}from"./BackgroundGrid.glsl.js";import{overlay as r}from"./Overlay.glsl.js";import{TileBlendInput as o}from"./TileBlendInput.js";import{FloatPassUniform as c}from"../../shaderModules/FloatPassUniform.js";import{NoParameters as s,glsl as n}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as a}from"../../shaderModules/Texture2DPassUniform.js";import{Uniform as d}from"../../shaderModules/Uniform.js";class i extends s{constructor(){super(...arguments),this.overlayOpacity=1}}function l(t,o){t.vertex.uniforms.add([new v("overlayTexOffset"),new v("overlayTexScale")]),t.fragment.uniforms.add([new c("overlayOpacity",(e=>e.overlayOpacity)),new a("ovColorTex",((t,r)=>0===r.overlays.length?null:r.overlays[e.INNER].getColorTexture(t.overlaySource)))]),r(t,o)}function u(e,r){const{vertex:c,fragment:s,varyings:a}=e;a.add("vtc","vec2"),c.uniforms.add(new v("texOffsetAndScale")),s.uniforms.add(new m("tex")),s.uniforms.add(new x("textureOpacities"));const d=r.textureFadingEnabled&&!r.renderOccluded;d&&(c.uniforms.add(new v("nextTexOffsetAndScale")),a.add("nvtc","vec2"),s.uniforms.add(new m("texNext")),s.uniforms.add(new x("nextTexOpacities")),s.uniforms.add(new f("fadeFactor")));const i=r.tileBlendInput===o.ColorComposite,l=r.tileBlendInput===o.GridComposite;l&&s.include(t),i&&s.uniforms.add(new x("backgroundColor")),c.code.add(n`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${d?n`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:n``}
  }`),s.code.add(n`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${l||i?n`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${i?n`backgroundColor`:n`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:n`return color;`}
    }`),d?s.code.add(n`vec4 getTileColor() {
vec4 color = getColor(texture2D(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture2D(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):s.code.add(n`vec4 getTileColor() {
return getColor(texture2D(tex, vtc), vtc, textureOpacities);
}`)}class f extends d{constructor(e){super(e,"float")}}class x extends d{constructor(e){super(e,"vec3")}}class v extends d{constructor(e){super(e,"vec4")}}class m extends d{constructor(e){super(e,"sampler2D")}}export{x as Float3Uniform,l as OverlayTerrain,i as OverlayTerrainPassParameters,u as TerrainTexture,m as Texture2DUniform};
