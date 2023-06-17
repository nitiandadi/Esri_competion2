/** 创建图表实例 */
import {ref} from 'vue';
// 初始化 charts参数
const ageData = ref([
	{
		value: 12,
		name: "好评",
		percentage: "60.0%"
	},
	{
		value: 4,
		name: "中性评价",
		percentage: "20.0%"
	},
	{
		value: 4,
		name: "差评",
		percentage: "20.0%"
	},
]);

export default ageData; 