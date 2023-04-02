/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{f as e}from"../../../../../../chunks/vec3f32.js";import{VertexTextureCoordinates as s}from"../attributes/VertexTextureCoordinates.glsl.js";import{textureSize as r}from"../util/WebGL2Utils.js";import{Float3DrawUniform as o}from"../../shaderModules/Float3DrawUniform.js";import{Float3PassUniform as t}from"../../shaderModules/Float3PassUniform.js";import{glsl as a}from"../../shaderModules/interfaces.js";import{createTexture2DDrawSizeUniforms as i}from"../../shaderModules/Texture2DDrawUniform.js";import{createTexture2DPassSizeUniforms as c}from"../../shaderModules/Texture2DPassUniform.js";import{TextureSizeUniformType as n}from"../../shaderModules/TextureSizeUniformType.js";import{BindType as u}from"../../shaderTechnique/BindType.js";import{GLTextureMaterialBindParameters as l}from"../../../lib/GLTextureMaterial.js";const m=e(0,.6,.2);var d;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(d||(d={}));class p extends l{}function x(e,l){const m=e.fragment,p=l.hasMetallicRoughnessTexture||l.hasEmissionTexture||l.hasOcclusionTexture;if(l.pbrMode===d.Normal&&p&&e.include(s,l),l.pbrMode!==d.Schematic)if(l.pbrMode!==d.Disabled){if(l.pbrMode===d.Normal){m.code.add(a`vec3 mrr;
vec3 emission;
float occlusion;`);const e=l.supportsTextureAtlas?l.hasWebGL2Context?n.None:n.Size:n.None,s=l.pbrTextureBindType;l.hasMetallicRoughnessTexture&&(m.uniforms.add(s===u.Pass?c("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):i("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),m.code.add(a`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),l.hasEmissionTexture&&(m.uniforms.add(s===u.Pass?c("texEmission",(e=>e.textureEmissive),e):i("texEmission",(e=>e.textureEmissive),e)),m.code.add(a`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),l.hasOcclusionTexture?(m.uniforms.add(s===u.Pass?c("texOcclusion",(e=>e.textureOcclusion),e):i("texOcclusion",(e=>e.textureOcclusion),e)),m.code.add(a`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):m.code.add(a`float getBakedOcclusion() { return 1.0; }`),m.uniforms.add(s===u.Pass?[new t("emissionFactor",(e=>e.emissiveFactor)),new t("mrrFactors",(e=>e.mrrFactors))]:[new o("emissionFactor",(e=>e.emissiveFactor)),new o("mrrFactors",(e=>e.mrrFactors))]),m.code.add(a`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${p?a`vtc.uv = vuv0;`:""}
      ${l.hasMetallicRoughnessTextureTransform?a`vtc.uv = metallicRoughnessUV;`:""}
      ${l.hasMetallicRoughnessTexture?l.supportsTextureAtlas?a`
                vtc.size = ${r(l,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:a`applyMetallnessAndRoughness(vtc);`:""}
      ${l.hasEmissiveTextureTransform?a`vtc.uv = emissiveUV;`:""}
      ${l.hasEmissionTexture?l.supportsTextureAtlas?a`
                vtc.size = ${r(l,"texEmission")};
                applyEmission(vtc);`:a`applyEmission(vtc);`:""}
      ${l.hasOcclusionTextureTransform?a`vtc.uv = occlusionUV;`:""}
      ${l.hasOcclusionTexture?l.supportsTextureAtlas?a`
                vtc.size = ${r(l,"texOcclusion")};
                applyOcclusion(vtc);`:a`applyOcclusion(vtc);`:""}
    }
  `)}}else m.code.add(a`float getBakedOcclusion() { return 1.0; }`);else m.code.add(a`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}export{p as PBRBindParameters,d as PBRMode,m as PBRSchematicMRRValues,x as PhysicallyBasedRenderingParameters};
