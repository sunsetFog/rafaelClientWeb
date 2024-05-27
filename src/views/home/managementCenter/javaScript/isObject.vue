<template>
    <section>
        对象
    </section>
</template>

<script>
export default {
    name: "isObject",
    data() {
        return {
            // 定义对象
            person: {
                name: "娜娜",
                age: 18,
                sex: "女",
                hobby: " 唱 歌 ",
                vegetable: { tomato: "西红柿" },
                grape: undefined,
                // grape: null,
                // grape: '',
                // grape: false,
                // grape: 0,
                drink: function () {
                    console.log("今晚的酒真好喝");
                }
            }
        }
    },
    created() {
        this.demo4();
    },
    methods: {
        demo1() {
            /*
                对象概念：一个对象可包含多个属性    键值对 { key键: value值 }
                获取或添加新属性语法：
                    obj.key
                    obj["key"]   因为key是字符串
                删除对象中的某个属性: delete obj["key"];
             */

            console.log('判断对象是否有该属性', this.person.hasOwnProperty('name')); // true有，false没有

            console.log('调用对象属性', this.person.hobby);
            // 调用对象成员方法
            this.person.drink();

            // 对象添加新属性
            this.person['character'] = "温柔贤淑";
            console.log('添加新属性', this.person);

            // 字符串key
            let onion = 'onion';
            let pizza = {[onion]: 666}
            console.log("--字符串key--", pizza);
        },
        demo2() {
            //枚举法:遍历对象      注意：枚举法中，只能使用obj["key"]的形式
            for (let key in this.person) {
                console.log(`key: ${key}, value: ${this.person[key]} `);
            }
        },
        // 遍历对象
        demo3() {
            // 变key数组
            let arrBox = Object.keys(this.person);// [string, string]
            console.log("[ 对象key ]", arrBox);
            let emptyObj = {};
            arrBox.forEach((keyItem, index) => {
                let valueRow = this.person[keyItem];
                // value是字符串，需要去两边空格
                emptyObj[keyItem] = typeof valueRow === 'string' ? valueRow.trim() : valueRow;
            });
            console.log("--emptyObj--", emptyObj);
        },
        // 解构赋值
        demo4() {
            const { name, vegetable: { tomato }, hobby: potato, grape = '葡萄', ...residue } = this.person;
            console.log("--解构赋值--", name);
            console.log("--多级解构赋值，冒号对象--", tomato);
            console.log("--解构赋值时的别名，冒号名字--", potato);
            console.log("--仅undefined的默认值--", grape);
            console.log("--剩余值的对象--", residue);
        },
        // 对象转二维数组
        demo5() {
            const obj = { a: 1, b: 2, c: 3 };
            const entries = Object.entries(obj);
            console.log("--entries--", entries);
            // 输出：[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
        }
    }
}
</script>

<style lang="less" scoped></style>

