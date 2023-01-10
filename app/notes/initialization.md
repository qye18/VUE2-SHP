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