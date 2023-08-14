import pointsTags from "./pointsTags";
import axios from "axios";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

interface points {
    name: string,
    poiID: number,
    location: string,
    intro: string,
    tags: string[],
    features: any,
    typeName: string,
    img: string,
    hot: number,
}
const pointsdata: points[] = [];
  //获得景点数据
async function getpointsdata(){
  await axios.get("http://47.108.76.144:9000/attraction/all").then(async (res)=>{ 
    const pointslayer = new FeatureLayer({
      url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/attraction2/FeatureServer",
      id: "points",
    });
    const query = pointslayer.createQuery();
    query.where = "1=1";
    await pointslayer.queryFeatures(query).then(({features}) => {
      res.data.forEach((item: any) => {
        features.forEach(async (feature) => {
          if(feature.attributes.name==item.name){
            pointsdata.push({
              name: item.name,
              poiID: item.poiID,
              location: item.city+"经度"+item.latitude+"纬度"+item.longitude,
              intro: item.description,
              //@ts-ignore
              tags: pointsTags[feature.attributes.name]["tag"],
              //@ts-ignore
              features: pointsTags[feature.attributes.name]["features"],
              typeName: feature.attributes.typeName,
              img: item.image,
              hot: feature.attributes.userScore,
            })
          }
        });
      })
    })
  })
  return pointsdata;
}
export default getpointsdata;