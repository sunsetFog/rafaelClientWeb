<template>
    <!-- vue-cli脚手架
vue h5即是html5:
    1.<!DOCTYPE html>声明，这样浏览器才能获知文档类型
    2.<meta charset="utf-8">“utf-8”是一种字符编码，使浏览器做“翻译”工作



main.js
    1.vue的原型
    Vue.prototype.$axios = axios;
    Vue.prototype.$domain = 'vue原型变量';
    Vue.prototype.$teacher = function(){}//全局方法--不推荐


    5.加载js或css
    import '@/@energy/rafaelDesign/static/capital/flexible.js';

    7.pc端适配(不好用)  https://blog.csdn.net/weixin_41257563/article/details/97266234
    utils.js
        // const px2remLoader = {
        //   loader: 'px2rem-loader',
        //   options: {
        //     remUnit: 192
        //   }
        // }
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
    npm install lib-flexible --save
    npm install px2rem-loader --save-dev
    import '@/@energy/rafaelDesign/static/capital/flexible.js';//加载js，并540改document.body.clientWidth
    配置build/utils.js，加入px2rem-loader

router/index.js
    1.export default new Router({
        mode: 'history',//vue 路径去掉#
    2.//引入路由的两种引入方式
        //import Twelve from '@/components/miss/twelve';
        //const Twelve = resolve => require(['@/views/index/twelve'],resolve);
    3.  //重点:路由参数解决刷新丢失问题
        // 1.meta是路由参数,却不在path路径上,可以打印this或者打印this.$route看,用this.$route.meta获取
        // 2.路由传参,在路径上
    4.使用children: []
        路由跳转在这个children域内，包括$router.push跳转，要是children域内找不到就找parent域内
        parent用watch监听子域路由变化

请看build/utils.js配置
    //vue全局使用less样式文件
    // https://www.jianshu.com/p/2b1cd98c3062
    //安装npm install sass-resources-loader --save-dev
浏览器title的图标
    https://www.cnblogs.com/softwarefang/p/9405537.html
    favicon.ico在线制作
    http://www.faviconico.org/favicon -->
    <section id="lifeCycle">
        <div ref="tissue" @click="texture" class="cucumber">
            {{ title }}
            <span ref="exquisite" v-if="student.age">{{ student.age }}</span>
        </div>
        <h1>
            study: keep-alive组件缓存--{{ !$route.meta.keepAlive }}
        </h1>
        <el-input v-model="cabbage" placeholder="请输入内容"></el-input>
    </section>
</template>

<script>
export default {
    name: 'lifeCycle',//组件名  study: keep-alive组件缓存
    props: ['importance'],//数据-父传子的绑定值
    components: {},//子父组件
    data() {//数据
        return {
            title: '周期',
            student: {
                name: '',
                sex: '',
                age: ''
            },
            overnight: {
                charm: '魅力'
            },
            list: [
                { id: 1, name: '看来' }
            ],
            cabbage: "大白菜"
        }
    },
    // 创建前：实例刚被创建，data 和 methods 尚未初始化，无法访问。
    // 用于拦截跳转
    beforeCreate() {

    },
    // 创建后：data、methods 已可访问，适合发起异步请求或初始化数据，但 DOM 还未生成，不能DOM操作
    // 注意：加了keep-alive组件缓存缓存后，created不再触发，activated触发
    created() {
        console.log("--created--");
        /*
            vue3改版：已删除$set
            改值了，在控制台能打印出来，却没有更新到视图上时用$set解决:
            target：要更改的数据源(可以是对象或者数组)
            key：要更改的具体数据---数组是下标，对象是key值
            value ：重新赋的值
            Vue.set( target, key, value );不好用，不能触发视图更新
            this.$set( target, key, value );能触发视图更新
        */
        // this.$set( this, 'title', '生命周期' );
        // this.$set( this.list, 1, { id: 2, name: '锦锦' } );// created里添加才行
        // console.log('$set数组', this.list);
        // this.$set( this.overnight, 'charm', '气质' );// 修改
        // this.$set( this.overnight, 'Dijah', '迪迦' );// created里添加才行
        // console.log('$set对象', this.overnight);

        // 应用情景一
        this.$nextTick(function () {// 异步将回调延迟到下次 DOM 更新后执行
            console.log('created-DOM操作', this.$refs.tissue);
        });
    },
    // 挂载前：模板已编译为虚拟 DOM，但尚未替换真实 DOM。
    beforeMount() {

    },
    // 挂载后：组件已挂载，$el 可用，是操作 DOM 或启动第三方插件的常用时机
    mounted() {
        this.$forceUpdate();// 强制重新渲染当前组件
    },
    // 更新前：数据已变，但视图未更新，适合记录更新前的状态。
    beforeUpdate() {

    },
    // 更新后：视图已完成更新，可执行依赖新 DOM 的操作，但应避免在此修改状态以防死循环
    updated() {

    },
    // 销毁前：实例仍完全可用，推荐在此进行资源释放
    // vue3改名beforeUnmount了
    beforeDestroy() {

    },
    // 销毁后：实例已被销毁，所有绑定解除，仅保留 DOM 节点
    // this.$route找不到，data数据还有
    // 用于清除定时器，删事件监听
    destroyed() {

    },
    // study: keep-alive组件缓存
    activated() {//创建  keep-alive组件缓存，请看home.vue
        console.log('---activated---');
    },
    deactivated() {//销毁  keep-alive组件缓存
        console.log('---deactivated---');
    },
    computed: {//计算属性-用于vuex的getter

    },
    watch: {//监听数据变化，如输入框，路由变化

    },
    methods: {//方法
        texture() {
            // 应用情景二
            console.log('方法前DOM-1', this.$refs.exquisite);// undefined
            this.student.age = 19;
            this.$nextTick(function () {// 异步将回调延迟到下次 DOM 更新后执行
                console.log('异步DOM-2', this.$refs.exquisite);// 有
            });
            console.log('方法后');
        }
    }
}
</script>

<style lang="less" scoped>
#lifeCycle {
    color: #b00cb3;

    .cucumber {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        color: #b00cb3;
    }
}
</style>


