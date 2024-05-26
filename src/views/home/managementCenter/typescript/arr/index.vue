<template>
    <section>arr</section>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    reactive,
} from "vue";


// 数字数组
let numbers1: number[] = [1, 2, 3, 4, 5];
let numbers2: any[] = [1, 2, 3, 4, 5];
// 使用泛型定义字符串数组
let names1: Array<string> = ['Alice', 'Bob', 'Charlie'];
let names2: Array<any> = ['Alice', 'Bob', 'Charlie'];
export interface coffee {
    cake?: Array<{
        label: string;
        value: number;
    }>;
}
// 使用元组（Tuple）类型定义具有固定长度和类型的数组
let person: [string, number] = ['Alice', 30];
// 使用联合类型定义多种可能的数组元素类型
let values: (string | number)[] = ['Alice', 30, 'Bob', 25];
// 使用接口定义对象数组类型
interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
];



export default defineComponent({
    name: "arrUnit",
    created() { },
    methods: {
        demo1() {

        }
    }
});
</script>
