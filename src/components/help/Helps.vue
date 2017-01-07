<template>
  <div class="hello">
    <img src="../../assets/logo.png" alt="vue">
    <h1>{{ msg }}</h1>
    <h2>下面是必不可少的帮助</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">核心文档</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">论坛</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter 闲聊</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">工程模板帮助</a></li>
    </ul>
    <h2>Vue 生态系统</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router（路由）</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex（状态机）</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader（解析器）</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue（大杂烩）</a></li>
      <li><a href="https://www.npmjs.com/">npmjs</a></li>
    </ul>
    <h2>Vue 第三方组件</h2>
    <ul>
      <li><a href="http://element.eleme.io/#/zh-CN" target="_blank">Element(饿了么前端团队打造)</a></li>
    </ul>
    <h2>相关技术</h2>
    <ul>
      <li><a href="http://es6.ruanyifeng.com/" target="_blank">ECMAScript 6 入门</a></li>
      <li><a href="http://sass.bootcss.com/" target="_blank">Sass</a></li>
      <li><a href="http://webpackdoc.com/">webpackdoc</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎使用 Vue.js 开发WebApp!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}

.hello{
  text-align: center;
}








</style>
