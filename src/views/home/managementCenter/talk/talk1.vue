<template>
    <section>

    </section>
</template>

<script>
export default {
    name: 'talk1',
    data(){
        return{

        }
    },
    created(){
        this.demo20();
    },
    methods: {
        demo1(){
            /* 自我介绍
            考官好，很荣幸有机会向考官请教和学习。我叫***，读计算机网络应用专业，平时喜欢研究代码和上网浏览信息。
            出来后，从事前端行业，实践经历丰富，具有移动端和PC端经验。
            性格开朗随和，有上进心，希望日后积累更好，介绍完毕，谢谢！ */
        },
        demo2(){
            /*
            面试必考
            讲讲经验问题:
                一. 刷新vuex数据丢失问题，解决: 1.用浏览器缓存,在main.js的刷新判断用缓存 2.刷新判断再次调用http请求，重新存vuex数据
                二. 用浏览器缓存时: 参数2要是数组或对象，请转化成字符串,用时再字符串再转回数组或对象   看src\pages\managementCenter\knowledge\cache.vue
                三.对接后台不一定用请求头:
                    1. 下载文档：window.open("后台请求url?id="+传参数后台);
                    2. element图片上传: http应该在子组件里
                四. rem自动转换，转换不了内联样式(style里的样式),需要手动计算转换
                六.vue的拦截: 路由拦截(看src\main.js)，请求拦截(看src\api\http.js)
                七.router配置: 看src\router\index.js
                八.加载完页面后，多个button高亮---向后台保存要高亮的下标，那数据时，用该下标高亮

            为啥离职？
                面试时沟通的工作内容和实际情况完全不一样
                公司不发工资
                项目没了
                业务突然被喊停



            有什么问题？
                一.面试官技术确定：
                    用的是什么框架？
                    请问你贵公司做的事怎样的项目？
                    项目组有多少个前端和后端
                    职位空缺的原因？
                    公司如何保证人才不流失？
                    工作内容？
                二.HR公司福利情况:
                    12薪还是13薪
                    五险一金按照哪个地区标准？
                    年终奖：以工资为基数，算法与入职时间，绩效考核，公司运营情况相关
                    年假：工作满一年有多少天年假
                    婚假，产假，陪产假按法定规定来吗？
                    节日福利：传统节日有礼品，购物卡？
                    生日福利：生日派对，生日礼品？
                    日常福利： 不定期的聚餐，下午茶
                    工资：15号发放吗？有拖欠工资吗？
                    入职体检，机票，签证能报销吗？
                    自己携带电脑补贴多少
                    试用期时间？通过试用期的标准？
                三.注意要问事项
                    1.薪资结构，底薪多少
                    2.五险一金是按照最低标准吗
                    3.试用期待遇？多长转正
                    4.是否有加班费
             */
        },
        demo3(){
            /*
            面试必考
            页面的传参方式:
                一.兄弟vue传参方式，在组件树是同一层级的，无父子关系的组件
                    1.vuex
                    2.浏览器缓存(session,localStorage,cookies)
                    3.路由传参
                二.子父组件传参    看src/views/home/managementCenter/knowledge/parent/index.vue
             */
        },
        demo4(){
            /**
             * vue中mvvm原理及其实现
             mvvm是mvc的改进
             * 原理: M(Model，模型层),V(View，视图层),VM(ViewMode, 桥梁)。用桥梁监听模型层与视图层，实现数据的双向绑定
             * 实现: 用下面知识点，监听对象属性变化，
             */
            let obj = { key: '' }
            // vue2的defineProperty
            Object.defineProperty(obj, 'key', {
                get() {// get函数

                },
                set() {// set函数

                }
            })
            // vue3中 Proxy 响应式机制
        },
        demo6(){
            /*
                computed与watch的区别:
                computed是计算属性，随着值的变化重新计算，有缓存作用
                watch是监听数据变化，可以异步
            */
        },
        demo8(){
            /* es6: 看pages\managementCenter\javaScript\es6.vue */
        },
        demo9(){
            /* 数组去重:  看pages\managementCenter\javaScript\jsDemo.vue */
        },
        demo10(){
            /*
                从输入url到页面加载完成发生了什么？——前端角度
                确认是搜索关键词还是合法 URL。如果是 URL，则解析出协议、域名、端口、路径等信息。随后会逐级检查 DNS 缓存
                DNS解析URL对应的IP
                建立 TCP 连接（三次握手）
                发送 HTTP 请求
                服务器处理并返回响应
                浏览器接收与渲染页面
                关闭TCP连接（四次挥手）
             */
        },
        demo11(){
            /**
             * 封装过什么组件
             * 管理系统的分页组件,主要是组件通讯
             * 上传组件
             * 弹窗组件
             * 日期选择组件
             *
             * 封装组件时应注重高内聚（专注单一功能）、低耦合，提供清晰的 API 文档和示例，并进行单元测试以保障稳定性4。优先考虑复用场景，避免过度拆分导致组件泛滥
             */
        },
        demo12(){
            /**
             * 什么叫优雅降级和渐进增强？
             * 渐进增强: 保证低版本浏览器进行构建页面，再针对高版本浏览器进行效果、交互等改进和追加功能达到更好的用户体验
             * 优雅降级: 构建完整的功能后，再针对低版本浏览器进行兼容
             */
        },
        demo13(){
            /**
             * 说说prototype原型链  --- 看learn2.vue
             * 在JavaScript中，prototype是实现对象继承和共享属性/方法的核心机制，所有函数都拥有该属性1。
             * 回答: vue.prototype把暴露的对象设置位全局变量,例如http请求的封装，通过prototype设置全局的
             * 继承属性:B.prototype = new A() 此时B继承A的所有属性和方法
             * 有模块化功能
             */
        },
        demo15(){
            /**
             * get与post的区别:
             * 传递路径: get参数通过url传递,post放在request body中
             * 长度限制: get请求url中传递的参数是有长度限制，post没有
             * 安全: get比post更不安全，因为参数直接暴露在url并缓存浏览器中，所以不能用用来传递敏感信息
             * 编码方式: get请求只能进行url编码，而post支持多种编码方式
             * TCP链接不同
             */
        },
        demo16(){
            /*
            跨域问题 (控制台出现CORS报错)
                1.CORS跨域资源共享   后端需要设置Access--Control-Allow-Credentials:true
                2.jsonp实现跨域：动态创建script，利用src属性进行跨域
                3. nginx代理跨域
                4.nodejs中间件代理跨域
                5.WebSokect跨域
                6.ifram跨域
             */
        },
        demo17(){
            /*
            px,rem,em区别
            看pages\managementCenter\tagStyle\cssDemo.vue
             */
        },
        demo18(){
            /*
            导入样式，link和@import的区别
            页面被加载的时，link会同时被加载，而@import要页面被加载完再加载
            link可以加载css，还能定义RSS。而@import只能加载css
             */
        },
        demo19(){
            /*
                HTML语义化的理解？
                内容结构化，结构更清晰
                搜索引擎解析（SEO）
                增强代码可读性与维护性
             */
        },
        demo20(){
            console.log('null转数值为0,类型是对象', Number(null), typeof null); // 0 object
            console.log('undefined转数值为NaN,类型是undefined',Number(undefined), typeof undefined); // NaN undefined
            let apple;
            console.log('声明未赋值', apple);//undefined
            let star = null;
            if(!apple && !star){
                console.log('两者都是false,if时用！非')
            }
            /*
            null与undefined区别
            很相似，无的意思。
            null表示"不应该有值"
            undefined表示"缺少值"
             */
        },
        demo22(){
            /*
                HTTP状态码
                100 Continue 继续，表示确认，请传具体参数
                200 OK 正常返回信息
                201 Created 请求成功并且服务器创建了新的资源
                202 Accepted 服务器已接受请求，但尚未处理
                301 Moved Permanently 请求的网页已永久移动到新位置。
                302 Found 临时性重定向。
                303 See Other 临时性重定向，且总是使用 GET 请求新的 URI。
                304 Not Modified 自从上次请求后，请求的网页未修改过。
                400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
                401 Unauthorized 请求未授权。
                403 Forbidden 禁止访问。
                404 Not Found 找不到如何与 URI 相匹配的资源。
                500 Internal Server Error 最常见的服务器端错误。
                503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。
            */
        },
        demo23(){
            /*
            面试必考
            有哪些性能优化方法
                路由懒加载，一次性加载所有路由，导致首页白屏，用户体验不好
                图片懒加载，图片过多，加载速度慢，需要滚动到可视区域后再加载图片，使用vue-lazyload插件
                按需引入，全局配置引入第三方插件的所有组件，导致项目体积太大，加载速度慢
                监听事件销毁， 还有清除定时器，以免造成内存泄漏
                大图片加载慢，需要切成几张图，再压缩图片
                服务器开启Gzip压缩
                PWA技术可以离线访问和缓存作用
                在页面加载过程中，使用骨架屏占位符，提高用户体验
                减少http请求次数
            */
        },
        demo24(){
            /*
            哪些常见操作会造成内存泄漏？
            内存泄漏指不再需要的变量仍然存在
            利用Chrome DevTools等开发工具来检测和分析内存泄漏问题，从而定位并解决问题

            全局变量的滥用
            定时器未清除
            闭包导致的内存泄漏
            闭包中引用了外部函数的变量，并且这些变量在不再需要时未被释放，就会导致内存泄漏
            DOM元素的引用未释放
            缓存数据未合理管理：如果使用缓存（如Map、WeakMap等）来存储数据，而没有适当的清理机制，缓存会不断积累并占用越来越多的内存
            持续绑定的事件：函数中addEventListener绑定事件，函数多次执行，绑定便会产生多次，产生内存泄漏
            */
        },
        demo25(){
            /*
            css盒子垂直居中
            看pages\managementCenter\tagStyle\flex.vue
             */
        },
        demo26(){
            /*
            http 和 https 有何区别？如何灵活使用？
                HTTP 的主要缺点
                明文传输风险：所有数据以明文形式发送，可能被第三方监听。
                身份无法验证：不能确认通信对方是否为真实服务器，存在伪装风险。
                数据完整性缺失：传输过程中数据可能被篡改而无法察觉。

                HTTPS 的优势与不足
                优点：
                可认证服务器身份，确保数据发送到正确的接收方；
                加密传输，防窃听、防篡改；
                提升用户信任度和网站可信度；
                被主流搜索引擎加权，有利于网站排名。

                缺点：
                初始连接握手耗时较长，影响页面加载速度；
                SSL 证书需要成本，高级功能证书价格较高；
                证书管理复杂，且传统上绑定 IP，不利于多域名共用同一 IP；
                并不能防御 DDoS、服务器劫持等其他类型攻击。
             */
        },
        demo28(){
            /*
            跨域
            跨域是浏览器基于同源策略的安全限制，当请求的协议、域名或端口任一不同时即触发
            http://a.com → https://a.com （协议不同，跨域）
            http://a.com:8080 → http://a.com:8081 （端口不同，跨域）
            http://a.com → http://b.com （域名不同，跨域）

            解决方案
            CORS 通过在服务端设置响应头 Access-Control-Allow-Origin 来允许特定源访问资源 14。
            代理模式（Proxy） 在开发中非常实用，比如 Vue 项目中通过 vue.config.js 配置 devServer.proxy 将 /api 请求转发到真实后端地址 4。
            JSONP 利用 <script> 标签不受跨域限制的特性，动态创建 script 发起请求，但只能用于 GET 12。

            可以搜Vue和React跨域代理配置示例
             */
        },
        demo31(){
           /*
           说说vue的生命周期
           看pages\managementCenter\knowledge\lifeCycle.vue
            */
        },
        demo32(){
            /*
            xml和json的区别
            数组处理：JSON支持数组，而XML不支持数组。
            可读性：与XML相比，JSON的文件非常易于阅读。
            安全性：JSON的安全性较低，而XML比JSON更安全。
            注释支持：JSON不支持注释，而XML支持注释。
            编码差异：JSON仅支持UTF-8编码，而XML支持各种编码。
            数据体积：JSON相对于XML来说，数据的体积小，传递快。
            数据交互：JSON与JavaScript交互更加方便，更容易解析处理，有更好的数据交互。
            数据描述：JSON对数据的描述性比XML较差。
            传输速度：JSON的速度要远远快于xml。
             */
        },
        demo33(){
            /*
            浏览器内核的理解
            主要指渲染引擎，JS 引擎，负责将网页代码转换为用户可见的页面，不同内核导致网页在各浏览器中显示效果和性能存在差异
            渲染引擎：负责解析 HTML 和 CSS，构建 DOM 树、渲染树，并计算元素位置大小，最终绘制出可视页面
            JS引擎则：解析和执行 JavaScript 代码，实现页面动态交互功能，如动画、数据请求等

            浏览器兼容性就是浏览器内核引起的
            js语法错误，需要换适用的js

            css语法错误
                小高度元素撑开
             */
        },
        demo34(){
            /*
            html5有哪些新特性？
            HTML5 的主要新特性包括语义化标签、多媒体支持、图形绘制、本地存储、实时通信与设备访问等，显著提升了网页的交互性与功能性。
            语义化标签 header、nav、article、section、aside、footer
            多媒体<audio>, <video>
            图形绘制<canvas>
            矢量图形SVG
            本地存储localStorage, sessionStorage
            实时通信WebSocket
            地理位置Geolocation API

            css3新特性：
            选择器[attr], :nth-child(n), ::before
            圆角border-radius
            阴影box-shadow, text-shadow
            渐变linear-gradient(), radial-gradient()
            边框图片border-image
            变换transform: rotate(), scale()
            动画@keyframes + animation
            弹性布局display: flex
            网格布局display: grid
            多列布局column-count, column-gap

             */
        },
        demo35(){
            /*
                赋值，浅拷贝和深拷贝的区别
                看src\pages\managementCenter\javaScript\research.vue
             */
        },
        demo36(){
            /*
            网站重构的理解
            重构不是UI改版：在不改变用户可见功能和界面（UI）的前提下，对网站的代码结构、技术架构和内部设计进行优化升级的过程，其核心目标是提升性能、可维护性与用户体验
            浏览器兼容
            优化代码
            减少代码间的耦合度，提升模块独立性，提高扩展性与维护性，易于协作与复用（耦合度是指两个模块之间相互依赖的程度）
            响应式设计，多设备适配
            安全性升级，修复漏洞，更新依赖
            技术栈演进，升级框架，加TypeScript
            构建流程优化，模块化打包
            */
        },
        demo37(){
            /*
            面试必考
            一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。

            首屏大图采用WebP格式+CDN+预加载
            商品列表图使用懒加载+响应式适配
            图标用雪碧图或Base64

             一、图片体积优化

            格式选择
            优先使用 WebP 格式（比JPEG/PNG体积小50%），并通过 <picture> 标签兼容老旧浏览器。

            压缩
            对JPEG采用渐进式加载（先加载模糊预览，再渐进清晰）。
            使用工具（如TinyPNG、Squoosh）压缩图片，控制JPEG质量在60-80%

            响应式图片适配，响应式设计就是做适配
            根据设备分辨率动态加载适配尺寸的图片，避免大图小用。
            示例：<img src=""  srcset="" sizes="">

            二、加载策略优化

            懒加载（Lazy Load）
            仅当图片进入可视区域时加载，初始用占位图或Base64微缩图替代356。
            实现方式：
            <img data-src="image.jpg"  src="占位图.jpg"  class="lazyload">
                监听滚动，将 data-src 赋值给 src
                获取页面的垂直和水平滚动位置
                window.pageYOffset和window.pageXOffset
                获取特定元素的滚动位置，是这个
                element.scrollTop和element.scrollLeft

            预加载关键资源
            对首屏图片或核心Banner使用 <link rel="preload"> 提前加载

            三、网络传输优化

            网络传输优化
            CDN加速与域名收敛
            通过CDN将图片分发至边缘节点，减少物理距离延迟2413。
            HTTP/2环境下收敛域名（减少DNS查询），HTTP/3协议可进一步降低建连时间413。
            缓存策略
            设置强缓存（Cache-Control: max-age=31536000）和协商缓存（ETag）1222。
            云存储服务（如七牛）自动处理格式转换与缓存12。

             */
        },
        demo38(){
            /*
            属性src与href的区别？
            src指向外部资源的位置
            href指向网络资源所在位置
             */
        },
        demo39(){
            /*
            同步和异步编程
            看pages\managementCenter\javaScript\learn3.vue
             */
        },
        demo40(){
            /*
            Javascript的垃圾回收机制
                由于字符串，数组，对象动态分配内存，需要释放再次利用，不然造成系统崩溃
                减少全局变量的使用
                var ry = 77;   ry = null;---手动释放内存
                1，标记清除法
                    标记变量“进入环境”和“离开环境”
                    垃圾回收器并不是每时每刻都在工作，每隔一段时间工作一次；
                2，引用计数法
                    var a = "abcd";   引用次数1
                    a = "efgh";     ---赋值释放内存：原先引用次数减一，变0，释放内存
                    下次运行时，引用次数为0释放内存

            开发者如何避免内存泄漏？
            尽管有强大的GC机制，不当编码仍会导致内存泄漏：

            全局变量残留：未声明的变量会成为 window 的属性，生命周期与页面一致，难以回收。
            闭包过度持有：闭包会保留对外部函数变量的引用，若这些大对象不再需要却未解除引用，将无法被回收。
            未清理的定时器和事件监听器：setInterval 回调或 addEventListener 的处理器若未手动清除，会持续持有作用域引用 。
            DOM 引用未解除：移除 DOM 元素后，若 JavaScript 中仍有变量指向它，该元素及其绑定的数据仍不会被回收。

            避免意外创建全局变量（始终使用 let/const）。
            及时将不再需要的对象引用设为 null。
             */
        },
        demo41(){
            /*
            客户端渲染（CSR）
            vue服务器端渲染 (SSR)，在服务器上将 Vue 组件渲染为 HTML 字符串，然后发送给客户端的技术
            SSR 能够提升首屏加载速度、改善 SEO（搜索引擎优化），并提供更好的用户体验。

            使用 Vue SSR 的方式
            方式一：使用 Nuxt.js （推荐）

            方式二：手动搭建 Vue SSR（适用于学习或定制需求）
            Vue 3 + Vite 或 Vue 2 + Webpack
            Node.js 服务器（如 Express）
             */
        },
        demo42() {
            /*
                vue组件更新机制
                响应式系统：数据劫持与依赖追踪
                Vue 在初始化时会对 data 和 props 中的数据进行响应式处理：
                Vue 2 使用 Object.defineProperty()
                Vue 3 改用 Proxy，提升了监听能力

                虚拟DOM与Diff算法
                Vue 使用虚拟DOM（VNode）树来描述真实DOM结构。当数据变化后：
                生成新的 VNode 树
                通过 Diff 算法比对新旧 VNode
                找出差异并最小化更新真实DOM

                异步更新队列（Event Loop机制）
                Vue 的更新是异步的。当你修改多个数据时，它们会被合并为一次更新：
                数据变更 → 加入异步队列
                在下一个 tick（事件循环）中批量执行 2
                使用 nextTick 可在DOM更新后执行回调

                组件更新顺序：自上而下
                父组件先于子组件更新。当父组件重新渲染时，会递归触发子组件的更新检查：
                若子组件 props 无变化且无内部状态更新，则跳过渲染
                列表渲染中使用 key 可帮助 Vue 更准确识别节点，减少重建
             */
        },
        demo43() {
            /*
                面试必考
                vue2升级vue3有哪些变化
                    vue2图片资源要放在static和assets目录下，vue3图片资源可以放在业务模块里，类似react项目了
                    element-ui要换成element-plus，使用的UI组件都要element-plus里有，vue2很多插件都要换
                    Vue3加了很多底层方法，使用性更好了
                    this.$set，Vue.extend, this.nextTick，.$el 方法已被删除
                    vue3有三种组件，defineComponent组件，setup组件，类组件
                    slot-scope="scope"变v-slot="scope"
                    删了过滤器，改使用方法过滤
                    component: resolve => require(['@/views/defaultPath'], resolve)
                    变
                    component: () => import('@/views/404.vue')
                    :visible.sync
                    变
                    v-model
                    :deep(tag) {} 替换 /deep/
                    addRoutes 变 addRoute
                    />  替换  ></input>
                    path: '*',
                    变
                    path: '/:pathMatch(.*)*',
                    没有变量$eventBus
                    <keep-alive>
                    <router-view></router-view>
                    </keep-alive>
                    改为
                    <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
                    </router-view>

             */
        },
        demo44() {
            /*
                面试必考
                说说独立搭建项目
                    代码风格，语法校验
                    网络请求的封装，http拦截
                    动态路由的配置，或者模块化路由配置，路由拦截
                    vuex状态管理
                    黑夜白天模式
                    主要是用的ui组件库
                    移动端的rem适配
                    统一基础样式
                    公共方法
                    env配置环境变量
            */
        }
    }
}
</script>

<style lang="less" scoped>

</style>
