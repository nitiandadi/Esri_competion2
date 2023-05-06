/**
 * 将feature中的数据按要素ID给出对应图表系列所需对象。
 * @param feature  feature 对象源数据。
 * @param name 要素名称。
 * @returns series 数据集。
 */

export function useGetdata(feature:{ [key: string]: any}, name: string) {
    // 初始化series对象
    let series = [];
    // 初始化子对象
    let childfeature: {  [key: string]: number[]};
    // 获取到id值对应的feature对象中的数据集
    childfeature = feature[name];
    // 遍历childfeature对象，将数据整理为新对象{data：series[key]}，并赋值给series对象
    for (let key in  childfeature ) {
        const newData = {
            "data": childfeature[key]
        };
        series.push(newData);
    }

    // 返回series数据集
    return series;
}