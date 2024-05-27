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
        this.demo1();
    },
    methods: {
        demo1 () {
            /*
                ?? 只有null、undefined才取后面值
                ? 可选链操作符   如果 obj 为 null 或 undefined，则表达式将会返回 undefined
                && 只有1、true才取后面值，null、undefined、0、flase取前面值       类似if写法： flag && (bean = '香蕉');
                || 与 && 相反
                !转布尔值
                !!转了两次布尔值
                ! 是非空断言操作符, 值是 null 或 undefined不会检查
            */
            let arrBox = [0, false, 1, true, '', null, undefined, [], {}];
            // 定义多个变量写法
            let reallyArr = [], orArr = [], andArr = [], questionArr = [], numArr = [], sigh1 = [], sigh2 = [];
            for (let i = 0; i < arrBox.length; i++) {
                let item = arrBox[i];
                if (item) {
                    reallyArr.push([item, true]);
                } else {
                    reallyArr.push([item, false]);
                }

                let w1 = item || '默认值';
                orArr.push([item, w1]);

                let w2 = item && '默认值';
                andArr.push([item, w2]);

                let w3 = item ?? '默认值';
                questionArr.push([item, w3]);

                numArr.push([item, Number(item)]);

                sigh1.push([item, !item]);
                sigh2.push([item, !!item]);
            }
            console.log("真假数据", reallyArr);
            console.log("||数据", orArr);
            console.log("&&数据", andArr);
            console.log("??数据", questionArr);
            console.log("转数字", numArr);
            console.log("叹号1", sigh1);
            console.log("叹号2", sigh2);

            let obj1: any ={a:{b:()=>{return 666}}};
            console.log('?兼容处理', obj1?.a?.b(), '---', obj1?.at?.b());

            let cherry1: string | null = null;
            // 编译器会报错，因为 cherry2 可能为 null
            // let len2 = cherry1.length;

            let cherry2: string | null = "hello";
            const len = cherry2!.length;
            console.log('!兼容处理', len);
        },
    }
});

</script>
