<template>
  <div class="chatContent">
    <div class="tit clearfix"> 
      <span class="ranking fl"></span> 
      <span class="name fl">景点名称</span>
      <span class="company fl">景点地点</span>
      <span class="hot fl">用户评价</span>
    </div>
    <div class="over-wrap">
      <ul class="con">
        <li class="active" 
          v-for="(points, index) in pointsList" 
          :key="points.id" 
          :class="{ active: index === selectedIndex }"
          @click="handleItemClick(index)"
        >
          <div class="points-rank clearfix">
            <span class="ranking fl">{{ points.id }}</span>
            <span class="name fl">{{ points.name }}</span>
            <span class="company fl">{{ points.location }}</span>
            <span class="hot fl">{{ points.hot }}</span>
          </div>
          <div class="points-show clearfix" v-show="selectedIndex === index">
            <div class="img-box fl">
              <img src="" alt="">
            </div>
            <div class="content fl">
              <p>
                <span>景点类型：</span>
                <span class="authors">{{ points.type }}</span>
              </p>
              <p>
                <span>景点简介：</span>
                <span class="isbn">{{ points.content }}</span>                    
              </p>                 
            </div>
          </div>
        </li>       
      </ul>
    </div>
    <div class="footer">
      <el-button  color="#345f92" size="small" round style="margin-right: 5px;" @click="service">
          <el-icon :size="18">
              <SuccessFilled />
          </el-icon>
          开启地理服务
      </el-button>
    </div>  
  </div>
</template>

<script setup lang='ts'>
import { ElMessage, ElMessageBox } from 'element-plus';
import { onUnmounted, ref,onMounted, watch,inject } from 'vue'
const selectedIndex = ref(0); // 默认选中第一个 li 元素
// 点击 li 元素的事件处理方法
function handleItemClick(index: number) {
  selectedIndex.value = index;
}
// 接收父组件参数并设置默认值
interface CommentcardProps  {
    initList: [], // 初始化参数 ==> 必传
}
// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<CommentcardProps>(), {
});
const pointsList = ref<any[]>([]);
// 获取服务开关
const isService = inject('isService') as any;
// 获取服务操作
const createRenderer = inject('createRenderer') as any;
const resetRenderer = inject('resetRenderer') as any;
const ispointsList = inject('ispointsList') as any;
onMounted(() => {
  pointsList.value = props.initList;
});

const timer = setInterval(() => {
  selectedIndex.value = selectedIndex.value + 1;
  if(selectedIndex.value >= 4) {
    //获取li的高度，然后乘以当前的索引值，就是当前的高度
    const height = document.querySelector('.chatContent ul li')?.clientHeight;
    document.querySelector('.chatContent ul')!.scrollTop = height! * selectedIndex.value;
  }
  if (selectedIndex.value >= pointsList.value.length) {
    selectedIndex.value = 0;
    document.querySelector('.chatContent ul')!.scrollTop = 0;
  }
}, 2000);
onUnmounted(() => {
  clearInterval(timer);
});
// 获取列表数据
const getList = () => {
  pointsList.value = props.initList;
};
// 开启地理服务
const service = () => {
  ElMessageBox.confirm(
    '请确定您要开启/关闭地图服务?',
    'Warning',
    {
      confirmButtonText: '开启',
      cancelButtonText: '关闭',
      type: 'warning',
    }
  )
    .then(() => {
      isService.value = false;
      createRenderer();
      ispointsList.value = false;
      ElMessage({
        type: 'success',
        message: '开启成功',
      })
    })
    .catch(() => {
      isService.value = true;
      ispointsList.value = true;
      resetRenderer();
      ElMessage({
        type: 'info',
        message: '取消开启',
      })
    })
};
// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initList, getList, { deep: true });
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


.con > li .points-rank {
  width: 100%;
  // background-color: #f5f5f5;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.con > li .points-rank span{
  flex: 1;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.con > li .points-rank .ranking{
  color: #2edbff;
  font-size: 16px;
}

.con > li.active .points-rank {
  background: rgba(58, 128, 188, 0.5);
  border: 1px solid #345f92;
  color: #fff;
}

.con > li .points-show {
  display: flex;
  align-items: center;
  width: 100%;
}

.con > li .points-show .img-box {
  width: 250px;
  height: 160px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 20px;
}

.con > li .points-show .img-box img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.con > li .points-show .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.con > li .points-show .content p {
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  color: #bfc2c2;
}

.con > li .points-show .content p span:first-child {
  font-weight: bold;
  color: #fff;
  margin-right: 10px;
}
</style>
