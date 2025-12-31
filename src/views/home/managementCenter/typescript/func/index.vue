<template>
    <section>
        <button @click="handleSubmit">提交调用接口</button>
    </section>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    reactive,
} from "vue";

import { saveOrUpdateDemo } from "./services"

import { useRoute } from 'vue-router';
import { Book, params } from '../interface';

// basketRef1?.current?.value时，value属性未知？？所以需要ref<HTMLInputElement>指定标签
const basketRef1 = ref<HTMLInputElement>(null);
const basketRef2 = ref('basket') as any;
// 使用接口定义方法类型
interface Bread {
  (x: number, y: number): number;
}

let multiply: Bread = function(x, y) {
  return x * y;
};
// 使用类型别名定义方法类型
type Pineapple = (x: number, y: number) => number;

let add1: Pineapple = function(x, y) {
  return x + y;
};
// 直接冒号
let add2: (x: number, y: number) => number = function(x, y) {
  return x + y;
};




export default defineComponent({
    name: "funcUnit",
    setup() {
        const use_route = useRoute();
        console.log("--路由参数--", use_route.params, "---", use_route.query);
        return {
            cucumber: {} as Book // 默认值 as 指定类型
        }
    },
    created() {
        this.peppers();
        this.beanWay(params);

        this.dragonfly({ tile: '看看' });

        console.log("--环境变量--", process.env);
        // 函数类型
        let water: Function = () => {

        }
    },
    methods: {
        beanWay(value: Book) {// 指定形参对象类型
            console.log("参数：", value);
            // 指定变量类型
            let Peach1: number = 180;
            let Peach2 = <number> 200;// 方式2
            console.log("桃子", Peach1, "---", Peach2);
        },
        // 指定对象类型和默认值是空对象
        dragonfly(value: Object = {}) {
            console.log("=dragonfly=", value);
        },
        // 可以用return,但是不能return + 返回值
        butterfly01(): void {
            return;
        },
        // 必须return + 指定类型的返回值
        butterfly02(): String {
            return "么么哒";
        },
        // 泛型函数   作用：传入参数的类型 == 返回值的类型    而any是任何类型，两者不相等
        identity<T>(arg: T): T {
            return arg;
        },
        // 泛型类
        cauliflower() {
            class Leeks<T> {
                private carrots: T;
                constructor(value: T) {
                    this.carrots = value;
                }
                getCarrots(): T {
                    return this.carrots;
                }
            }
            let box1 = new Leeks<string>("hello");
                console.log("胡萝卜", box1.getCarrots());
            let box2 = new Leeks<number>(36);
                console.log("胡萝卜", box2.getCarrots());
        },
        // 泛型接口
        mushrooms() {
            interface Pair<T, U> {
                first: T;
                second: U;
            }
            let onions: Pair<string, number> = {
                first: 'hello',
                second: 48
            }
        },
        // 泛型约束，约束参数属性
        peppers() {
            interface Avocados {
                length: number;
            }
            function zucchini<T extends Avocados>(arg: T): T {
                return arg;
            }
            zucchini("hello");
            // zucchini(42); // 数字没有length属性
        },
        //表单提交事件---调用接口
        async handleSubmit(v) {
            try {
                let params = {
                    name: '',
                    pageNum: 1,
                    pageSize: 10
                };
                await saveOrUpdateDemo(params);
            } finally {

            }
        }
    }
})
</script>

