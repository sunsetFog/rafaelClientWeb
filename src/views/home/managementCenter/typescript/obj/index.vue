<template>
    <section>obj</section>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    reactive,
} from "vue";
import { Book, params } from '../interface';
const book = reactive<Book>(params);
// 直接冒号
let noodles: {
    type?: number;
    money?: number;
    [key: string]: any;
} = { type: 6, money6: 2 };

// 使用类型别名定义对象类型
type Person = {
  name: string;
  age: number;
};

// 使用定义好的类型别名
let person: Person = {
  name: 'Alice',
  age: 30
};
console.log("---person---", person);


export default defineComponent({
    name: "objUnit",
    created() {
        console.log("---reactive使用接口---", book);
        console.log("---面条---", noodles);
    },
    methods: {
        demo1() {

        }
    }
});

</script>
