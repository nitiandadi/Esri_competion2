/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
import{VertexAttribute as t}from"../lib/VertexAttribute.js";import{writeDefaultAttributes as e}from"./internal/bufferWriterUtils.js";class r{constructor(t){this.vertexBufferLayout=t}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(e){return e.indices.get(t.POSITION).length}write(t,r,i,u,f){e(i,this.vertexBufferLayout,t,r,u,f)}}export{r as DefaultBufferWriter};
