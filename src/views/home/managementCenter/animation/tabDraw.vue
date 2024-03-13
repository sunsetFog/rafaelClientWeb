<template>
    <section class="tabDraw">
        <div class="cabbage">
            <ul>
                <li v-for="(item, index) in tabArr" :key="index" @click="tabWay(index)" :class="tabActive == index ? 'tab-active' : ''">
                    {{ item.title }}
                </li>
                <div style="clear: both;"></div>
            </ul>
            <div class="butterfly" :style="{transform: `translate(${420 * tabActive}px, 0px)`}"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'tabDraw',
    data() {
        return {
            tabArr: [
                {
                    title: '首存豪礼'
                },
                {
                    title: '投注豪礼'
                }
            ],
            tabActive: 0
        }
    },
    methods: {
        tabWay(index) {
            this.tabActive = index;
        }
    }
}
</script>

<style lang="less" scoped>
.tabDraw {
    width: 100%;
    height: 100%;
    background: #fff;
    .cabbage {
        width: 100%;
        position: relative;

        ul {
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, .06);
            li {
                width: 50%;
                height: 80px;
                color: #31455A;
                float: left;
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .tab-active {
                color: #6AC4FF;
            }
        }
        .butterfly {
            width: 50%;
            height: 2px;
            background: #6AC4FF;
            transition: transform 0.3s;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
}
</style>
