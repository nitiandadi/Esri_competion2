/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{neverReached as e}from"../../../../../../core/compilerUtils.js";import{DecodeNormal as r}from"../util/DecodeNormal.glsl.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{VertexAttribute as o}from"../../../lib/VertexAttribute.js";function i(i,d){switch(d.normalType){case a.CompressedAttribute:i.include(r),i.attributes.add(o.NORMALCOMPRESSED,"vec2"),i.vertex.code.add(t`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case a.Attribute:i.attributes.add(o.NORMAL,"vec3"),i.vertex.code.add(t`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:i.extensions.add("GL_OES_standard_derivatives"),i.fragment.code.add(t`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:e(d.normalType);case a.COUNT:case a.Ground:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(a||(a={}));export{i as NormalAttribute,a as NormalAttributeType};
