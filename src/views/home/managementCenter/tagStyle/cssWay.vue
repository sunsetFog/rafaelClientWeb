<template>
    <section class="cssWay">
        <LineTextLine>calc()函数，剩余空间计算，能使用100%才有效</LineTextLine>
        <div class="calc-unit">
            <p></p>
            <p></p>
        </div>
        <!--
            var(参数1, 参数2)
            参数1为定义，就选参数2
         -->
        <LineTextLine>var()函数，插入自定义属性的值</LineTextLine>
        <div class="grass">666</div>
        <!--
            hsla();
            参数1：色调  取值为：0 - 360
                0(或360)表示红色，120表示绿色，240表示蓝色
            参数2：饱和度  取值为：0.0% - 100.0%
            参数3: 亮度  取值为：0.0% - 100.0%
            参数4: 透明度  取值0~1之间。

            rgba(255,0,0,0.3);
            参数1：红色  取值0 到 255的整数
            参数2：绿色  取值0 到 255的整数
            参数3：蓝色  取值0 到 255的整数
            参数4: 透明度  取值 0~1 之间

            css颜色
            https://www.runoob.com/cssref/css-colors.html
         -->
        <LineTextLine>rgb()函数、rgba()函数、hsl()函数、hsla()函数</LineTextLine>
        <LineTextLine>fadeout()降低颜色透明度</LineTextLine>
        <div class="cakes"></div>
        <!--
            目前仅支持伪类的content属性
         -->
        <LineTextLine>attr()函数，获取属性值</LineTextLine>
        <div class="cabbage" data-height="80px" data-custom-color="red"></div>
    </section>
</template>

<style lang="less">
.cssWay {
    width: 100%;
    .calc-unit {
        width: 100%;
        height: 80px;
        padding: 0 30px;
        box-sizing: border-box;
        border-right: 1px solid yellowgreen;
        p:nth-of-type(1) {
            width: 120px;
            height: 100%;
            float: left;
            background: yellowgreen;
        }
        p:nth-of-type(2) {
            width: calc(100% - 120px + 20px);// 100%不含padding, 有格式要求，+ - * /前后要空格，要带px单位，运算顺序要括号()
            height: 100%;
            float: right;
            background: rebeccapurple;
            margin-right: -20px;// padding和margin的配合，不会挤下来的
        }
    }
    .grass {
        color: var(--text-color, yellow);
    }
    .cakes {
        width: 100%;
        height: 80px;
        background: fadeout(#004590, 50%);
    }
    .cabbage {
        width: 100%;
        height: attr(data-height);
        content: attr(data-height);
        // background-color: attr(data-custom-color);
        &::after{
            height: attr(data-height);
            content: attr(data-height);
            background-color: attr(data-custom-color);
        }
    }
}

</style>
