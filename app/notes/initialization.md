# vue-cli脚手架初始化项目
  vue create app

# 初始化配置
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

# 路由分析
  components: Header, Footer
  pages: Home, Search, Login, Register (共用Header和Footer中间的组件)
  Login, Register没有Footer


  