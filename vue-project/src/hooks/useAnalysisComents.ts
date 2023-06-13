import axios from "axios";
interface Comment {
  id: number;
  user: string;
  time: string;
  score: number;
  content: string;
}

export const analyzeComments = async (comments: Comment[]) => {
   
  const results:{[key:string]:any}= {};
  //把评论拼接成一个字符串
  const comment = comments.map((item) => item.content).join("/");
  // 计数器
  let count = 0;
  //调用百度的评论观点抽取接口
  const datas: { [key: string]: any } = {
    text: comment,
    type: 5, 
  };
  const response = await axios.post(
    "/api/v2/comment_tag",
    datas,
    {
      headers:{
        "Content-Type": "application/json",
      },
      params: {
        access_token:'24.bd5a9f3cc258c8868f35f41a8e2b6529.2592000.1689162993.282335-34731666',
        charset: "UTF-8",
      },
    }
  );
  const data = response.data.items;
  //遍历返回的数据
  for (const [index, item] of data.entries()) {
    count++;
    //把属性和情感词放到一个数组里
    results[index] = {
      content: comments[index].score>=4?(item.sentiment>1?comments[index]:comments[index+1]):(item.sentiment<=1?comments[index]:comments[index+1]),
      attribute: item.prop,
      adj: item.adj,
    };
    if( count === comments.length-1) {
      break;
    }
  };
  

  return results;
};
