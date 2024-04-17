<template>
    <section id="rootVariable">
        <LineTextLine>css变量</LineTextLine>
        <div class="papaya">香蕉</div>
        <!--
            虽然dom能修改样式，但是多处使用的话，css变量就是好的选择
         -->
        <LineTextLine>js变量转css变量</LineTextLine>
        <div class="cauliflower" id="rapeseed"></div>
    </section>
</template>
<!--
    CSS 变量教程
    https://blog.csdn.net/qq_32247819/article/details/123788346

    var()函数 参数2表示变量的默认值。如果该变量不存在，就会使用这个默认值
    没单位时，用calc()计算函数，字符串拼接单位
    作用域: :root是html标签内能访问css变量
 -->
<script>
export default {
    name: "rootVariable",
    data() {
        return {
            data_height: '180px',
            data_lineHeight: '250'
        }
    },
    mounted() {
        // 设置变量
        let rapeseed = document.getElementById('rapeseed');
        console.log("--rapeseed--", rapeseed);
        rapeseed.style.setProperty('--data_height', this.data_height);
        rapeseed.style.setProperty('--data_lineHeight', this.data_lineHeight);

        // 读取变量
        // rapeseed.style.getPropertyValue('--data_height').trim();

        // 删除变量
        // rapeseed.style.removeProperty('--data_height');
    }
}

</script>

<style scoped>
#rootVariable {
    width: 100%;
    .papaya {
        width: 100%;
        color: var(--color-success);
        background: #F0F3F5;
        font-family: Montserrat, Arial, Helvetica, sans-serif;
        /* @mixin fontBold; */
        /* @apply --fontCommon; */
    }
    .cauliflower {
        width: 100%;
        height: var(--data_height, '200px');
        line-height: calc(var(--data_lineHeight) * 1px);
        background: #faad14;
    }
}
</style>
