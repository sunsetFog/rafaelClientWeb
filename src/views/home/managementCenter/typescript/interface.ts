interface taskType {
    id?: string;
    label?: string;
    value?: string;
}

export interface Book {
    readonly title: string | number; // 只读属性，创建的值不能修改    可以字符串或数字类型
    year?: number; // 问号表示可选的属性, 既是可以缺少这个属性
    list: number[]; // 表示由此类型元素组成的一个数组    方式二：数组泛型 Array<number>
    grass(source: string, subString: string): boolean; // 函数类型   返回值是boolean类型
    phoneWay: (option: boolean) => void; // 函数类型
    pumpkin?: Function;
    taskList?: taskType[]; // 定义数组
    // [random: string]: any; // key随机字符串，value是任意类型
    [key: string]: any;
}

// 要传入的对象
export let params = {
    title: 'Vue 3 Guide',
    year: 2022,
    list: [6],
    grass: function (source: string, subString: string) {
        return true;
    },
    phoneWay: function (option: boolean) {
        return;
    },
    other: '别的呢',
};


