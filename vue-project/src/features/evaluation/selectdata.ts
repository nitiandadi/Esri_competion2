import { ref } from "vue";

// selectFilter 数据
const selectFilterData = ref([
	{
		title: "评论情感(单)",
		key: "userStatus",
		options: [
			{
				label: "全部",
				value: 0,
			},
			{
				label: "好评",
				value: 4,
				icon: "CircleCheck"
			},
			{
				label: "中性",
				value:  3,
				icon: "Bell"
			},
			{	
				label: "差评",
				value: 2,
				icon: "CircleClose"
			}
		]
	},
	{
		title: "评论主体(多)",
		key: "userRole",
		multiple: true,
		options: [
			{
				label: "全部",
				value: ""
			},
		]
	}
]);

export default selectFilterData;