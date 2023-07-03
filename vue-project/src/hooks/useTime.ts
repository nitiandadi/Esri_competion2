import { ref } from "vue";

/**
 * @description 获取本地时间
 */
export const useTime = () => {
	const year = ref(0); // 年份
	const month = ref(0); // 月份
	const week = ref(""); // 星期几
	const day = ref(0); // 天数
	const hour = ref<number | string>(0); // 小时
	const minute = ref<number | string>(0); // 分钟
	const second = ref<number | string>(0); // 秒
	const nowTime = ref<string>(""); // 当前时间

	// 更新时间
	const updateTime = () => {
		const date = new Date();
		year.value = date.getFullYear();
		month.value = date.getMonth() + 1;
		week.value = "日一二三四五六".charAt(date.getDay());
		day.value = date.getDate();
		hour.value =
			(date.getHours() + "")?.padStart(2, "0") ||
			new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getHours());
		minute.value =
			(date.getMinutes() + "")?.padStart(2, "0") ||
			new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getMinutes());
		second.value =
			(date.getSeconds() + "")?.padStart(2, "0") ||
			new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getSeconds());
		nowTime.value = `${year.value}年${month.value}月${day.value}日`;
	};
	updateTime();
	function getTimeGap(date: Date) {
		let gapHour = date.getHours() - (hour.value as number);
		let gapMinute = date.getMinutes() - (minute.value as number);
		let gapSecond = date.getSeconds() - (second.value as number);
		if (gapSecond < 0) {
			gapSecond += 60;
			// gapMinute--;
		}
		if (gapMinute < 0) {
			gapMinute += 1;
		}
		return (gapHour + "")?.padStart(2, "0") + ':' + (gapMinute + "")?.padStart(2, "0") + ':' + (gapSecond + "")?.padStart(2, "0");
	}
	function formatTime(dateObj: Date) {
		let h: string | number = dateObj.getHours();
		let m: string | number = dateObj.getMinutes();
		let s: string | number = dateObj.getSeconds();

		// 如果小时、分钟或秒小于10，则在前面添加一个'0'
		h = h < 10 ? '0' + h : h;
		m = m < 10 ? '0' + m : m;
		s = s < 10 ? '0' + s : s;

		return h + ':' + m + ':' + s;
	}
	return { year, month, day, hour, minute, second, week, nowTime, getTimeGap, formatTime };
};
