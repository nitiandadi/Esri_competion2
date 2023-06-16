/** 创建图表实例 */
import {ref} from 'vue';
// 初始化 charts参数
const ageData = ref<[
	{
		value: 200,
		name: "10岁以下",
		percentage: "16%"
	},
	{
		value: 110,
		name: "10 - 18岁",
		percentage: "8%"
	},
	{
		value: 150,
		name: "18 - 30岁",
		percentage: "12%"
	},
	{
		value: 310,
		name: "30 - 40岁",
		percentage: "24%"
	},
	{
		value: 250,
		name: "40 - 60岁",
		percentage: "20%"
	},
	{
		value: 260,
		name: "60岁以上",
		percentage: "20%"
	}
]>;

export default ageData; 