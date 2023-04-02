/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{w as e}from"./mat4.js";import{c as r}from"./mat4f64.js";import{n as o,s as a}from"./vec3.js";import{c as i}from"./vec3f64.js";import{OverlayIndex as l}from"../views/3d/terrain/interfaces.js";import{addLinearDepth as t,addNearFar as n,ForwardLinearDepth as s}from"../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js";import{ShaderOutput as d}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js";import{SliceDraw as c}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{Transform as v}from"../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js";import{NormalAttribute as m}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js";import{PositionAttribute as g}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js";import{TextureCoordinateAttribute as p}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{VertexTangent as h}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTangent.glsl.js";import{OutputDepth as w}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js";import{OutputHighlight as u}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{EvaluateAmbientOcclusion as b}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js";import{EvaluateSceneLighting as f,addAmbientBoostFactor as y,addLightingGlobalFactor as C}from"../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js";import{addMainLightDirection as x,addMainLightIntensity as L}from"../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js";import{NormalUtils as O}from"../views/3d/webgl-engine/core/shaderLibrary/shading/NormalUtils.glsl.js";import{PBRMode as S}from"../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{ReadShadowMapDraw as j}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{OverlayMode as z}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl.js";import{OverlayTerrainPassParameters as T,OverlayTerrain as _,TerrainTexture as F}from"../views/3d/webgl-engine/core/shaderLibrary/terrain/TerrainTexture.glsl.js";import{addProjViewLocalOrigin as P,addViewNormal as M,addCameraPosition as N}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{Float3PassUniform as D}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{glsl as $}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4DrawUniform as W}from"../views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js";import{ShaderBuilder as U}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as V}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";class A extends T{}function k(r){const i=new U,{vertex:T,fragment:A,varyings:k}=i;i.include(g),i.include(m,r),i.include(p,r);const G=()=>{i.include(O,r),T.code.add($`
      vec3 decodeNormalTerrain(vec2 e) {
        float z = 1.0 - abs(e.x) - abs(e.y);
        vec3 n = vec3(e + vec2(e.x >= 0.0 ? 1.0 : -1.0, e.y >= 0.0 ? 1.0 : -1.0) * min(z,0.0),z);
        return normalize(n);
      }

      vec3 getNormal() {
        return  ${r.shading?$`decodeNormalTerrain(normalCompressed)`:$`getLocalUp(position, localOrigin)`};
      }
  `)};P(T,r),i.include(v,r);const H=r.overlayMode!==z.Disabled;switch(r.output){case d.Color:{i.include(F,r),i.include(f,r),H&&i.include(_,{...r,pbrMode:r.pbrMode===S.Terrain?S.TerrainWithWater:S.Water});const t=r.overlayMode===z.EnabledWithWater;t&&i.include(h,r),k.add("vnormal","vec3"),k.add("vpos","vec3"),k.add("vup","vec3"),G(),(r.atmosphere||r.screenSizePerspective)&&M(T);const n=r.receiveShadows&&!r.renderOccluded;n&&i.include(s,r),r.atmosphere&&k.add("wnormal","vec3"),r.screenSizePerspective&&(k.add("screenSizeDistanceToCamera","float"),k.add("screenSizeCosAngle","float")),T.code.add($`
        void main(void) {
          //Position
          vpos = position;
          vec3 positionWorld = position + localOrigin;
          gl_Position = transformPosition(proj, view, vpos);

          //Normal
          vnormal = getNormal();

          //Up
          vup = getLocalUp(position, localOrigin);

          ${t?$`forwardVertexTangent(vnormal);`:$``}

          ${r.atmosphere?$`wnormal = normalize((viewNormal * vec4(normalize(positionWorld), 1.0)).xyz);`:""}

          //Texture UV
          vec2 uv = getUV0();
          forwardTextureCoordinatesWithTransform(uv);
          ${H?$`setOverlayVTC(uv);`:""}
          ${r.tileBorders?$`forwardTextureCoordinates();`:""}

          ${r.screenSizePerspective?$`
          vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;
          screenSizeDistanceToCamera = length(viewPos);
          vec3 viewSpaceNormal = (viewNormal * vec4(normalize(positionWorld), 1.0)).xyz;
          screenSizeCosAngle = abs(viewSpaceNormal.z);`:""}

          ${n?$`forwardLinearDepth();`:""}

        }
      `),i.extensions.add("GL_OES_standard_derivatives"),i.extensions.add("GL_EXT_shader_texture_lod"),i.include(c,r),i.include(f,r),i.include(b,r),i.include(j,r),N(A,r),y(A),C(A),A.uniforms.add([T.uniforms.get("localOrigin"),new D("viewDirection",((e,r)=>o(E,a(E,r.camera.viewMatrix[12],r.camera.viewMatrix[13],r.camera.viewMatrix[14]))))]),t&&A.uniforms.add([new V("ovWaterTex",((e,r)=>0===r.overlays.length?null:r.overlays[l.INNER].getNormalTexture(e.overlaySource))),new W("view",((r,o)=>e(B,o.camera.viewMatrix,r.origin)))]),A.code.add($`const float sliceOpacity = 0.2;
float lum(vec3 c) {
return (min(min(c.r, c.g), c.b) + max(max(c.r, c.g), c.b)) * 0.5;
}`),x(A),L(A),A.code.add($`
        void main() {
          vec3 normal = normalize(vnormal);
          float vndl = dot(normal, mainLightDirection);

          float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
          float shadow = ${r.receiveShadows&&!r.renderOccluded?"readShadowMap(vpos, linearDepth)":r.spherical&&r.shading?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

          float ssao = evaluateAmbientOcclusionInverse();
          vec4 tileColor = getTileColor();

          ${H?$`
              vec4 overlayColorOpaque = getOverlayColor(ovColorTex, vtcOverlay);
              vec4 overlayColor = overlayOpacity * overlayColorOpaque;
              ${r.invisible?$`if (overlayColor.a == 0.0) { discard; }`:""}
              vec4 groundColor = tileColor;
              tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;`:""}

          // If combined alpha is 0 we can discard pixel. The performance impact by having a discard here
          // is neglectable because terrain typically renders first into the framebuffer.
          if(tileColor.a <= 0.0) {
            discard;
          }

          bool sliced = rejectBySlice(vpos);
          if (sliced) {
            tileColor *= sliceOpacity;
          }
          ${r.atmosphere?$`
              float ndotl = clamp(vndl, 0.0, 1.0);
              vec3 atm = vec3(clamp(1.0 - dot(-viewDirection, wnormal), 0.0, 1.0));
              atm *= clamp(1.0 - lum(tileColor.rgb) * 1.5, 0.0, 1.0); // avoid atmosphere on bright base maps
              atm *= clamp(ndotl * 2.0, 0.0, 1.0); // avoid atmosphere on dark side of the globe
              atm *= tileColor.a; // premultiply with tile alpha`:""}

          vec3 albedo = ${r.atmosphere?$`atm + tileColor.rgb;`:$`tileColor.rgb;`}

          // heuristic shading function used in the old terrain, now used to add ambient lighting

          vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

          ${r.pbrMode===S.Terrain||r.pbrMode===S.TerrainWithWater?$`gl_FragColor = vec4(evaluateTerrainLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight, normalize(vpos - cameraPosition), vup), tileColor.a);`:$`gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);`}
          ${t?$`
              vec4 overlayWaterMask = getOverlayColor(ovWaterTex, vtcOverlay);
              float waterNormalLength = length(overlayWaterMask);
              if (waterNormalLength > 0.95) {
                mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
                vec4 waterOverlayColor = vec4(overlayColor.w > 0.0 ? overlayColorOpaque.xyz/overlayColor.w : vec3(1.0), overlayColor.w);
                vec4 viewPosition = view*vec4(vpos, 1.0);
                vec4 waterColorLinear = getOverlayWaterColor(overlayWaterMask, waterOverlayColor, -normalize(vpos - cameraPosition), shadow, vnormal, tbnMatrix, viewPosition.xyz,  vpos + localOrigin);
                vec4 waterColorNonLinear = delinearizeGamma(vec4(waterColorLinear.xyz, 1.0));
                float opacity = sliced ? sliceOpacity : 1.0;
                // un-gamma the ground color to mix in linear space
                gl_FragColor = mix(groundColor, waterColorNonLinear, waterColorLinear.w) * opacity;
              }`:""}
          ${r.screenSizePerspective?$`
            float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, vec4(0.0, 0.0, 0.0, 0.0));
            if (perspectiveScale <= 0.25) {
              gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
            }
            else if (perspectiveScale <= 0.5) {
              gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
            }
            else if (perspectiveScale >= 0.99) {
              gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
            }
            else {
              gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
            }`:""}
          ${r.visualizeNormals?r.spherical?$`
                  vec3 localUp = normalize(vpos + localOrigin);
                  vec3 right = normalize(cross(vec3(0.0, 0.0, 1.0), localUp));
                  vec3 forward = normalize(cross(localUp, right));
                  mat3 tbn = mat3(right, forward, localUp);
                  vec3 tNormal = normalize(normal * tbn);
                  gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:$`
                  vec3 tNormal = normalize(normal);
                  gl_FragColor = vec4(vec3(0.5) + 0.5 * tNormal, 0.0);
              `:""}
          ${r.tileBorders?$`
              vec2 dVuv = fwidth(vuv0);
              vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv0, 1.0 - vuv0));
              float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);
              gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);`:""}
          gl_FragColor = highlightSlice(gl_FragColor, vpos);
        }
      `)}break;case d.Depth:H&&i.include(_,r),i.include(w,r),t(i),n(i),T.code.add($`
              void main(void) {
                ${H?$`setOverlayVTC(getUV0());`:""}
                gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
              }
          `),A.code.add($`
              void main() {
                ${H&&r.invisible?$`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
                outputDepth(linearDepth);
              }
          `);break;case d.Shadow:case d.ShadowHighlight:case d.ShadowExcludeHighlight:i.include(w,r),t(i),n(i),T.code.add($`void main(void) {
gl_Position = transformPositionWithDepth(proj, view, position, nearFar, linearDepth);
}`),A.code.add($`void main() {
outputDepth(linearDepth);
}`);break;case d.Normal:H&&i.include(_,r),k.add("vnormal","vec3"),M(T),G(),T.code.add($`
            void main(void) {
              ${H?$`setOverlayVTC(getUV0());`:""}
              gl_Position = transformPosition(proj, view, position);
              vnormal = normalize((viewNormal * vec4(getNormal(), 1.0)).xyz);
            }
        `),A.code.add($`
            void main() {
              ${H&&r.invisible?$`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
              vec3 normal = normalize(vnormal);
              if (gl_FrontFacing == false) {
                normal = -normal;
              }
              gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 0.0);
            }
        `);break;case d.Highlight:H&&i.include(_,r),T.code.add($`
          void main() {
            ${H?$`setOverlayVTC(getUV0());`:""}
            gl_Position = transformPosition(proj, view, position);
          }
        `),i.include(u,r),A.code.add($`
          void main() {
            ${H?$`if (getCombinedOverlayColor().a == 0.0) { discard; }`:""}
            outputHighlight();
          }
        `)}return r.output===d.ObjectAndLayerIdColor&&(i.include(_,{...r,pbrMode:S.Disabled}),T.code.add($`void main(void) {
gl_Position = transformPosition(proj, view, position);
setOverlayVTC(getUV0());
}`),A.code.add($`void main() {
gl_FragColor = getOverlayColorTexel(vtcOverlay);
}`)),i}const B=r(),E=i(),G=Object.freeze(Object.defineProperty({__proto__:null,TerrainPassParameters:A,build:k},Symbol.toStringTag,{value:"Module"}));export{A as T,G as a,k as b};
