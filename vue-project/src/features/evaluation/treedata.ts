interface Tree {
  id: string;
  name: string;
  children?: Tree[];
}

const data: Tree[] = [
  {
    id: "1",
    name: "自然风光",
    children: [
      {
        id : "1-1",
        name: "羌塘组湖积地层",
      },
      {
        id: "1-2",
        name: "青海湖",
      },
    ],
  },
  {
    id: "2",
    name: "人文风情",
    children: [
      {
        id: "2-1",
        name: "谢家阶层型剖面",
      },
      {
        id: "2-2",
        name: "年保玉则",
      },
    ],
  },
  {
    id: "3",
    name: "湖泊湿地",
    children: [
      {
        id: "3-1",
        name: "鄂陵湖湿地",
      },
      {
        id: "3-2",
        name: "扎陵湖湿地",
      },
      {
        id: "3-3",
        name: "盘道",
      },
    ],
  },
];

export default data;