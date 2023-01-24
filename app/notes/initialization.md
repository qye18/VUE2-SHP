# 初始化设置
  ## vue-cli脚手架初始化项目
    vue create app

  ## 初始化配置
    vue.config.js:
      添加lintOnSave:false - 关闭语法校验
    
    package.json:
      "serve": "vue-cli-service serve --open"
      添加 --open，用于运行服务器后自动打开页面

    jsconfig.json:
      "paths": {
        "@/*": [
          "src/*"
        ]
      },
      如果没有，可以加上
      以后@就作为src的别名

  ## 路由分析
    components: Header, Footer
    pages: Home, Search, Login, Register (共用Header和Footer中间的组件)
    Login, Register没有Footer

  ## 提示
    1). package.json文件可以查看dependency，及安装的插件

# 插件
  nprogess: 进度条
    需要引入进度条的样式: nprogress/nprogress.css
    方法:
      .start 进度条开始
      .done 进度条结束
  axios：发送请求
  vuex：集中管理状态（数据） - 可能多个组件都要用到同一数据，集中管理就比较方便
  
  mockjs: 模拟假数据
  swiper@6: 轮播图，不用手写了
# 2022/12/29
  ## 获取category接口（三级联动）：
    http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
  ## 跨域请求问题
    本地端口号8080，向http://gmall-h5-api...发送请求，跨域了
    解决方案：
      【一般由后端CORS解决】
      前端-webpack代理跨域：
        vue.config.js文件中加：
          devServer: {
            proxy: {
              '/api': {
                target: '<向哪个服务器（路径）发送请求>',
              }
            }
          }

# 2022/12/30
  ## 三级联动路由跳转+query携带参数
    需要考虑携带的参数，区分每一级。添加自定义class，通过event.target.dataset判断当前点击的链接是哪一级
  ## 防抖&节流  
    防抖：多次触发 只执行最后一次
    节流：多次触发 变成少次 （规定一段时间内只能执行一次，这段时间后可以触发下一次）

  ## 性能优化
    把请求categoryList放到typeNav的mounted里不太好。Search和home组件都有tynaNav，每次跳转，都会销毁再调用mounted 重新发送请求。
    结果会重复发送很多次同样的请求。性能不好
    优化：
      把请求放到App.vue组件，因为这个组件只有每次打开网页时调用一次，
      在search和home组件来回跳转的时候不会被销毁再请求。

# 2022/12/31, 2023/01/01，2023/01/02
  home全动态数据，search静态组件。
  轮播图：swiper/element UI插件 
    - 有一些问题，安装插件有high vulnerable，
    fix产生更多vulnerables。没有完成，保留手写轮播图（很多需要改进）

# 2023/01/03 - 2023/01/05
    search动态数组，用getters获取searchList里的数据方便mapGetters。
    在请求前获取query参数（home点击某个分类后得到的），
    请求是在mounted发送的，获取参数需要在mounted前，所以用beforeMounted或beforeCreate？钩子。
      $route.query
    
    动态加载search页面数据:
      分类信息，
      商品信息
    
    实现点击分类，给出相对应的商品（点击苹果手机 => 获得仅为苹果的手机商品）
      bread面包屑: vif/vshow显示筛选内容，点叉，更新请求params，重新发送请求
      展示商品数据：更新请求params，发送请求
      
      全局事件总线（$bus），自定义事件（子传父,filter传给search）
        
# ~2023/01/08
  Detail 静态页面

# 2023/01/09
  静态页面后的三大步：
    router注册组件
    api创建请求接口获取数据
    创建store，发送请求捞数据放入仓库，从仓库获取数据并动态显示到页面

# 2023/01/12
  在detail添加到购物车的时候，需要同时把游客的id发送给服务器，服务器才能知道是谁 该添加到哪个游客的购物车里
  而接口中规定了detail发送请求只带两个参数：产品id和产品数量，没法自己再添加一个用户id
  ：解决办法为：通过请求头header，在请求拦截器里把游客id添加到请求头的config中带过去
  请求头添加字段(userTempId)：尚硅谷后端规定
  这里游客的id可以用uuid随机生成，但每个电脑的游客只有一个唯一的id，不是每次都变，可以通过localStorage来判断是否已经存在id

  会话存储 存储产品信息，用于addcartsuccess页面展示，用户离开页面就不用保存了的
  本地存储 存储uuid

# 2023/01/14
  购物车，实现修改数据，并更新到后端
    - 需要派发action，更新后端数据 和 获取新数据刷新页面

# 2023/01/15
  购物车 全选 / 删除选中商品 （Promise.all重点）
    - 需要发多次的delelte/updateCheck请求，
      把每个请求的结果添加到list中，因为delete和update都用到了async/await， 所以返回的一定是promise
      用Promise.all()来判断是否每一个发送的请求都成功了，
      用async/await得到结果后，如果成功则发送请求获取购物车新数据，
      如果失败则报出错误原因

      Promise.all([promiseList])返回成功的promise如果list里的每一个promise都成功，返回失败的promise如果list有任何一个promise失败

# 登录
  01/15
  token令牌 - 唯一标识符
  token存储在LocalStorage

  得到token后，派发请求获取对应的用户信息，并显示用户
# 退出登录
  01/15
  需要派发退出请求，
  清除state里的token及用户信息，
  清除本地存储的token

  action里不推荐操作state，控制台会监测不到，要提交到mutations里

# 导航守卫
  全局守卫：只要项目中发生路由变化，就会监听到
    - 全局前置守卫：跳转之前
      router.beforeEach((to,from,next) => {
        <!-- 
        to: 去的那个路由的信息
        from: 从哪个路由来的信息
        next：放行函数 next()放行，如果不执行next(),永远不会跳转
              next()
              next(path): 放行到指定路由
              next(false)：跳转不过去，留在当前
        -->
      })
    - 全局后置守卫：跳转之后
  路由独享守卫
  组件内守卫

# 登录的改进 

  ## 登陆后不能去login
  - 全局守卫中：
    - 判断token是否存在，(如果存在，那么一定登录了。因为退出登录后，会清除store和localStorage里的token。)
    如果存在，那就阻止去login
    不能用userInfo.name来判断，因为它没有被保存在本地，每一次路由跳转
    都是一次刷新，vuex(store)不是持久性保存，每次刷新数据也会刷新。
    - 要判断token失效的问题

  ## 登录了，但一刷新就没有用户名了
    - 原因：vuex（store）不是持久性储存信息，刷新后会消失。需要
    重新派发请求用户信息的操作获取数据，再展示。而目前只在home页面
    mounted中派发了请求
      - 方法1：
        在每个组件都派发请求
      - 方法2：
        全局守卫
          - 判断完token后，还要判断跳转的页面，如果跳转的不是login页面，再判断仓库是否有userInfo.name，如果没有就要发送请求（当前已经登录了，所以可以获取信息了）
          - 不能用userInfo来判断，因为userInfo是一个对象，不管他是不是空的，结果都为真。
  
# 图片懒加载
  2021/01/23 还用 1.3.3版本
  npmjs: vue-lazyload

  ## 原理：

    myPlugin.install = function(Vue, options) {
      Vue.directive(options.name, (element,params) => {
        element.innerHTML = params.sth
      })
    }
    Vue.use(myPlugin, {
    name:'upper'
    });
    - 这种写法可以把{}传给自定义插件plugin, options接收
    - 在组件中可以使用v-upper指令
    - directive让element原来的内容被替代

    同理，懒加载自定义的gif动图被真正的图片数据替代
