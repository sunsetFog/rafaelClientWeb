<template>
    <section>
        事件频繁
    </section>
</template>
<!--
    面试必考
    短时间内频繁触发事件
    debounce函数防抖: 只执行最后一次，一直清除定时器，点停了才有个定时器执行
    使用场景：输入框实时搜索，按钮点击防止多次提交
    throttle函数节流：只执行一次，隔一段时间不会执行
    使用场景：，滚动监听，鼠标移动监听
 -->
<script>
// 使用工具库
// import { debounce, throttle } from 'lodash';

// js原生防抖
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const that = this;
        // 重新设置定时器
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            // 修改this指向，并调用回调函数
            func.apply(that, args);
        }, wait);
    };
}

// js原生节流
function throttle(func, delay) {
  let lastCall = 0;
  // args参数就是handleResize调用传的参数
  return function(...args) {
    // 检查自上次调用以来是否已经过了指定的延迟时间
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
        // 更新上次调用时间
        lastCall = now;
        // 修改this指向，并调用回调函数
        func.apply(this, args);
    }
  };
}

export default {
    name: 'frequently',
    data() {
        return {
            cabbage: '白菜'
        }
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    methods: {
        // throttle初始就调用一次，返回了新函数；throttle调用第二次在handleResize函数调用
        handleResize: throttle(function(value){
                console.log("--handleScroll2--", this.cabbage, value);
        }, 500),
        // handleResize: debounce(function(){
        //         console.log("--handleScroll2--", this.cabbage);
        // }, 500),
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    }
}
</script>

<style lang="less">
</style>
