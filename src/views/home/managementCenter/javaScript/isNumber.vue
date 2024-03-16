<template>
    <section>
        <LineTextLine>数字转千分位的字符串</LineTextLine>
        {{ millennialsWay() }}
    </section>
</template>

<script>
export default {
    name: 'isNumber',
    data() {
        return {

        }
    },
    created() {
        this.demo1();
    },
    methods: {
        // 数字转千分位的字符串
        millennialsWay(num = 9999999) {
            return num.toLocaleString();
        },
        demo1(money = 75995094.5789) {
            // 保留两个小数点
            console.log('保留两个小数点', Number(money.toFixed(2))); // toFixed(num) 指定小数位数（四舍五入，返回的是字符串）
            console.log('保留两个小数点', parseInt(money * 100) / 100);
        },
    }
}
</script>

<style lang="less" scoped>

</style>
