"use strict";
exports.__esModule = true;
exports.useTime = void 0;
var vue_1 = require("vue");
/**
 * @description 获取本地时间
 */
exports.useTime = function () {
    var year = vue_1.ref(0); // 年份
    var month = vue_1.ref(0); // 月份
    var week = vue_1.ref(""); // 星期几
    var day = vue_1.ref(0); // 天数
    var hour = vue_1.ref(0); // 小时
    var minute = vue_1.ref(0); // 分钟
    var second = vue_1.ref(0); // 秒
    var nowTime = vue_1.ref(""); // 当前时间
    // 更新时间
    var updateTime = function () {
        var _a, _b, _c;
        var date = new Date();
        year.value = date.getFullYear();
        month.value = date.getMonth() + 1;
        week.value = "日一二三四五六".charAt(date.getDay());
        day.value = date.getDate();
        hour.value =
            ((_a = (date.getHours() + "")) === null || _a === void 0 ? void 0 : _a.padStart(2, "0")) ||
                new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getHours());
        minute.value =
            ((_b = (date.getMinutes() + "")) === null || _b === void 0 ? void 0 : _b.padStart(2, "0")) ||
                new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getMinutes());
        second.value =
            ((_c = (date.getSeconds() + "")) === null || _c === void 0 ? void 0 : _c.padStart(2, "0")) ||
                new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 }).format(date.getSeconds());
        nowTime.value = year.value + "\u5E74" + month.value + "\u6708" + day.value + "\u65E5";
    };
    updateTime();
    function getTimeGap(date) {
        var _a, _b, _c;
        var gapHour = date.getHours() - hour.value;
        var gapMinute = date.getMinutes() - minute.value;
        var gapSecond = date.getSeconds() - second.value;
        if (gapSecond < 0) {
            gapSecond += 60;
            // gapMinute--;
        }
        if (gapMinute < 0) {
            gapMinute += 1;
        }
        return ((_a = (gapHour + "")) === null || _a === void 0 ? void 0 : _a.padStart(2, "0")) + ':' + ((_b = (gapMinute + "")) === null || _b === void 0 ? void 0 : _b.padStart(2, "0")) + ':' + ((_c = (gapSecond + "")) === null || _c === void 0 ? void 0 : _c.padStart(2, "0"));
    }
    function formatTime(dateObj) {
        var h = dateObj.getHours();
        var m = dateObj.getMinutes();
        var s = dateObj.getSeconds();
        // 如果小时、分钟或秒小于10，则在前面添加一个'0'
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        return h + ':' + m + ':' + s;
    }
    return { year: year, month: month, day: day, hour: hour, minute: minute, second: second, week: week, nowTime: nowTime, getTimeGap: getTimeGap, formatTime: formatTime };
};
