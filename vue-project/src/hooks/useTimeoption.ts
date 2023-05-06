/**
 * 整理feature对象中的数据，填充echarts中有关时间轴的配置项
 * @param feature  feature 对象源数据。
 * @param timechart  有光时间轴的图表。
 * @returns void。
 */

export function useTimeoption(feature:{ [key: string]: any}, timechart: echarts.ECharts | null, name: string) {
    // 初始化时间数据
    const dataMap: { [key: string]: number[] }  = {
        '周一': [],
        '周二': [],
        '周三': [],
        '周四': [],
        '周五': [],
        '周六': [],
        '周日': []
    };
    // 时间
    const date = ['周一','周二','周三','周四','周五','周六','周日'];

    // 初始化series对象
    let options = [];
    // 初始化子对象
    let childfeature: {  [key: string]: number[]};
    // 获取到id值对应的feature对象中的子对象
    childfeature = feature[name];

    // 遍历数据集，将数据添加到时间数据中
    for (let key in childfeature) {
        // 获取到子对象中的数据
        let datas = childfeature[key];
        // 将数据添加到时间数据中
        datas.forEach((data: number, index: number) => {
            dataMap[date[index]].push(data);
        });
    };
    // 更改雷达图的配置项数据
    if (timechart) {
        for (let date in dataMap) {
            const newseries = {
                "series": {
                    'data' : [{ 
                        'value' : dataMap[date],
                        'name' : date,
                        'itemStyle': {
                            'color': '#17e3f5', // 系列折线颜色
                        }
                    }]
                }
            };
            options.push(newseries);
        };
        timechart.setOption({
            options: options
        });
    }
}