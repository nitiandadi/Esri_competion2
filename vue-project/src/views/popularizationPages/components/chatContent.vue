<template>
  <div class="chatContent">
    <div class="tit clearfix"> 
      <span class="ranking fl"></span> 
      <span class="name fl">书名</span>
      <span class="company fl">出版公司</span>
      <span class="hot fl">热销指数</span>
    </div>
    <div class="over-wrap">
      <ul class="con">
        <li class="active" 
          v-for="(book, index) in bookList" 
          :key="book.id" 
          :class="{ active: index === selectedIndex }"
          @click="handleItemClick(index)"
        >
          <div class="book-rank clearfix">
            <span class="ranking fl">{{ book.id }}</span>
            <span class="name fl">{{ book.name }}</span>
            <span class="company fl">{{ book.company }}</span>
            <span class="hot fl">{{ book.hot }}</span>
          </div>
          <div class="book-show clearfix" v-show="selectedIndex === index">
            <div class="img-box fl">
              <img src="" alt="">
            </div>
            <div class="content fl">
              <p>
                <span>作者：</span>
                <span class="authors">{{ book.authors }}</span>
              </p>
              <p>
                <span>ISBN：</span>
                <span class="isbn">{{ book.isbn }}</span>                    
              </p>
              <p>
                <span>出版日期：</span>
                <span class="pub-date">{{ book.pubDate }}</span>                    
              </p>
              <p>
                <span>定价：</span>
                <span class="pricing">{{ book.pricing }}</span>                    
              </p>                        
            </div>
          </div>
        </li>       
      </ul>
    </div>
    <div class="footer">
      <el-button  color="#345f92" size="small" round style="margin-right: 5px;">
          <el-icon :size="18">
              <SuccessFilled />
          </el-icon>
          空间相关性分析
      </el-button>
    </div>  
  </div>
</template>

<script setup lang='ts'>
import { onUnmounted, ref } from 'vue'
const selectedIndex = ref(0); // 默认选中第一个 li 元素
// 点击 li 元素的事件处理方法
function handleItemClick(index: number) {
  selectedIndex.value = index;
}
const bookList = ref<any[]>([]);
bookList.value = [
  {
    id: 1,
    name: '党的十九19大报告辅导读本+中国共产党章程 全2册',
    company: '人民出版社',
    hot: 9.85,
    authors: '中共中央宣传部',
    isbn: '9787010184272',
    pubDate: '2017年10月',
    pricing: '￥37.00',
    imgUrl: ''
  },
  {
    id: 2,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  // 其他图书数据
  {
    id: 3,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 4,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 5,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 6,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 7,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 8,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 9,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
  {
    id: 10,
    name: 'JavaScript高级程序设计',
    company: '电子工业出版社',
    hot: 8.7,
    authors: 'Nicholas C. Zakas',
    isbn: '9787121298651',
    pubDate: '2013年1月',
    pricing: '￥99.00',
    imgUrl: ''
  },
]
const timer = setInterval(() => {
  selectedIndex.value = selectedIndex.value + 1;
  if(selectedIndex.value >= 4) {
    //获取li的高度，然后乘以当前的索引值，就是当前的高度
    const height = document.querySelector('.chatContent ul li')?.clientHeight;
    document.querySelector('.chatContent ul')!.scrollTop = height! * selectedIndex.value;
  }
  if (selectedIndex.value >= bookList.value.length) {
    selectedIndex.value = 0;
    document.querySelector('.chatContent ul')!.scrollTop = 0;
  }
}, 2000);
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<style lang='scss' scoped>
.chatContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  overflow: hidden;
}
.tit {
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;
  top: 8%;
  width: 100%;
  height: 6%;
  font-size: 16px;
  color: #2edbff;
}
.tit span{
  flex:1;
}
.over-wrap{
  position: relative;
  top:6%;
  width: 100%;
  height: 80%;
  font-size: 16px;
  flex:1;
}
.footer{
  position: absolute;
  top: 91%;
}
.con {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  overflow-y: auto; /* 显示垂直滚动条 */
  overflow-x: hidden;
  max-height: 465px; /* 设置最大高度 */
}
.con::-webkit-scrollbar {
  width: 6px; /* 设置滚动条宽度 */
  height: 6px; /* 设置滚动条高度 */
}

.con::-webkit-scrollbar-thumb {
  border-radius: 3px; /* 设置滚动条圆角 */
  background-image: linear-gradient(135deg, #14c0e3 0%, rgba(8, 196, 219, 0.5) 72%, rgba(0, 182, 234, 0.3) 100%);
}
.con > li {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  display: flex; 
  flex-direction: column; 
}


.con > li .book-rank {
  width: 100%;
  // background-color: #f5f5f5;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.con > li .book-rank span{
  flex: 1;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.con > li .book-rank .ranking{
  color: #2edbff;
  font-size: 16px;
}

.con > li.active .book-rank {
  background: rgba(58, 128, 188, 0.5);
  border: 1px solid #345f92;
  color: #fff;
}

.con > li .book-show {
  display: flex;
  align-items: center;
  width: 100%;
}

.con > li .book-show .img-box {
  width: 120px;
  height: 160px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 20px;
}

.con > li .book-show .img-box img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.con > li .book-show .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.con > li .book-show .content p {
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  color: #bfc2c2;
}

.con > li .book-show .content p span:first-child {
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
}
</style>
