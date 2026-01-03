<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'talk2',
    data(){
        return{

        }
    },
    created(){

    },
    methods: {
        demo1() {
            /*
                Component和PureComponent的区别
                React.PureComponent与 Component 几乎完全相同，但它内部实现了 shouldComponentUpdate() 生命周期方法，
                并使用 浅比较（shallow comparison） 来判断 props 和 state 是否发生变化 2。只有当浅比较结果为“不相等”时，才会触发重新渲染。
                一般用Component，PureComponent作为子组件用的
            */
        }
    }
}
</script>

<style lang="less" scoped>

</style>
