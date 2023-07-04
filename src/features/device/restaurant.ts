import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const featureLayer = new FeatureLayer({
  url: "https://services7.arcgis.com/R5nxHh77a68zEsEp/arcgis/rest/services/%E4%BD%8F%E5%AE%BF/FeatureServer", // 替换为你的要素图层的 URL
});
let Hoteldata: any[] = [];
featureLayer
.queryFeatures()
.then((result) => {
  const features = result.features; // 获取查询结果中的要素数组

  // 遍历要素数组，提取酒店信息并存储在 Hoteldata 中
  features.forEach((feature) => {
    const hotel = {
      id: feature.attributes.OBJECTID, // 假设 OBJECTID 字段存储酒店的唯一标识符
      name: feature.attributes.name, // 假设 HotelName 字段存储酒店的名称
      price: feature.attributes.price, // 假设 Price 字段存储酒店的价格
      rating: feature.attributes.rating, // 假设 Rating 字段存储酒店的评级
      location:feature.attributes.位置,
      hygiene:feature.attributes.卫生,
      service:feature.attributes.服务,
      synthesis:feature.attributes.综合,
      region:feature.attributes.地区,
    };

    Hoteldata.push(hotel); // 将酒店信息存储在 Hoteldata 中
  });
})
export default Hoteldata;