import { Ref,ref } from "vue";
interface Tree {
  id: string;
  name: string;
  children?: Tree[];
}


const treedata: Ref<Tree[]> = ref([
  {
    id: "1",
    name: "游山玩水",
    children: [],
  },
  {
    id: "2",
    name: "文化古迹",
    children: [],
  },
  {
    id: "3",
    name: "探险奇趣",
    children: [],
  },
  {
    id:"4",
    name:"森林草原",
    children:[],
  },
  {
    id:"5",
    name:"地标观景",
    children:[],
  },

]);

export default treedata;