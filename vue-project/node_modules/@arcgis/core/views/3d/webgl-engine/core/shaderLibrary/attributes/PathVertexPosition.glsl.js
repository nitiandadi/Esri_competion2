/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{f as e}from"../../../../../../chunks/vec2f64.js";import{PositionAttribute as o}from"./PositionAttribute.glsl.js";import{Float2PassUniform as i}from"../../shaderModules/Float2PassUniform.js";import{Float3PassUniform as r}from"../../shaderModules/Float3PassUniform.js";import{Float4sPassUniform as t}from"../../shaderModules/Float4sPassUniform.js";import{FloatsPassUniform as a}from"../../shaderModules/FloatsPassUniform.js";import{glsl as l}from"../../shaderModules/interfaces.js";import{VertexAttribute as v}from"../../../lib/VertexAttribute.js";import{vvColorNumber as s,VisualVariablePassParameters as c}from"../../../materials/VisualVariablePassParameters.js";const f=8;function n(e,c){const n=v.FEATUREVALUE;e.attributes.add(n,"vec4");const p=e.vertex;p.code.add(l`
  bool isCapVertex() {
    return ${n}.w == 1.0;
  }
  `),p.uniforms.add(new i("size",(e=>e.size))),c.vvSize?(p.uniforms.add(new r("vvSizeMinSize",(e=>e.vvSizeMinSize))),p.uniforms.add(new r("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),p.uniforms.add(new r("vvSizeOffset",(e=>e.vvSizeOffset))),p.uniforms.add(new r("vvSizeFactor",(e=>e.vvSizeFactor))),p.code.add(l`
    vec2 getSize() {
      return size * clamp(vvSizeOffset + ${n}.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
    }
    `)):p.code.add(l`vec2 getSize(){
return size;
}`),c.vvOpacity?(p.constants.add("vvOpacityNumber","int",f),p.uniforms.add([new a("vvOpacityValues",(e=>e.vvOpacityValues),f),new a("vvOpacityOpacities",(e=>e.vvOpacityOpacities),f)]),p.code.add(l`
    vec4 applyOpacity(vec4 color) {
      float value = ${n}.z;
      if (value <= vvOpacityValues[0]) {
        return vec4( color.xyz, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):p.code.add(l`vec4 applyOpacity(vec4 color){
return color;
}`),c.vvColor?(p.constants.add("vvColorNumber","int",s),p.uniforms.add([new a("vvColorValues",(e=>e.vvColorValues),s),new t("vvColorColors",(e=>e.vvColorColors),s)]),p.code.add(l`
    vec4 getColor() {
      float value = ${n}.y;
      if (value <= vvColorValues[0]) {
        return applyOpacity(vvColorColors[0]);
      }

      for (int i = 1; i < vvColorNumber; ++i) {
        if (vvColorValues[i] >= value) {
          float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
          return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
        }
      }

      return applyOpacity(vvColorColors[vvColorNumber - 1]);
    }
    `)):p.code.add(l`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),e.include(o),e.attributes.add(v.PROFILERIGHT,"vec4"),e.attributes.add(v.PROFILEUP,"vec4"),e.attributes.add(v.PROFILEVERTEXANDNORMAL,"vec4"),p.code.add(l`vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileVertex = profileVertexAndNormal.xy * size;
vec2 profileNormal = profileVertexAndNormal.zw;
float positionOffsetAlongProfilePlaneNormal = 0.0;
float normalOffsetAlongProfilePlaneNormal = 0.0;`),p.code.add(l`if(!isCapVertex()) {
vec2 rotationRight = vec2(profileRight.w, profileUp.w);
float maxDistance = length(rotationRight);`),p.code.add(l`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
}else{
positionOffsetAlongProfilePlaneNormal = profileRight.w * size[0];
normalOffsetAlongProfilePlaneNormal = profileUp.w;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}`),p.code.add(l`vec3 localNormal() {
vec3 right = profileRight.xyz;
vec3 up = profileUp.xyz;
vec3 forward = cross(up, right);
vec2 profileNormal = profileVertexAndNormal.zw;
vec3 normal = right * profileNormal.x + up * profileNormal.y;
if(isCapVertex()) {
normal += forward * profileUp.w;
}
return normal;
}`)}class p extends c{constructor(){super(...arguments),this.size=e(1,1)}}export{n as PathVertexPosition,p as PathVertexPositionPassParameters};
