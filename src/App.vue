<!--
  Created by ThinkPad-wzw on 2017/1/7.
  DESC: 全局模块，文件中定义了整个应用的布局、导航、菜单
-->
<template>
  <div class="app">
    <!-- header -->
    <my-header></my-header>
    <!-- content -->
    <el-row class="content">
      <!-- 左侧导航手风琴 -->
      <sidebar></sidebar>
      <!-- 右侧内容 -->
      <el-col :span="17" class="right">
        <!-- 面包屑 -->
        <my-breadcrumb></my-breadcrumb>
        <!-- 真正的内容,这里使用站位 -->
        <router-view></router-view>
      </el-col>
    </el-row>
    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/layout/MyHeader'
import Sidebar from './components/layout/Sidebar'
import MyBreadcrumb from './components/layout/MyBreadcrumb'
import MyFooter from './components/layout/MyFooter'
export default {
  name: 'app',
  components: {
    MyHeader,
    Sidebar,
    MyBreadcrumb,
    MyFooter
  },
  methods: {
    handleSelect: function () {
      console.log('your invoked method is handleSelect!')
    },
    handleOpen: function () {
      console.log('your invoked method is handleOpen!')
    },
    handleClose: function () {
      console.log('your invoked method is handleClose!')
    }
  }
}
</script>

<style>
  .app{
    height:100%;
    width: 960px;
    margin: 0 auto;
  }
  .el-menu{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .leftlogo{
    float:left;
    margin-left: 10px;
  }
  .rightmenu{
    float:right;
  }
  .content{
    height:100%;
    min-height: 750px;
    border:1px solid #324057;
    border-top:none;
    position: relative;
  }
  .left{
    min-width: 240px;
    display:block;
    height:100%;
    background-color: #eff2f7;
    position: absolute;
    left: 0;
  }
  .right{
    height:750px;
    padding:0px 5px;
    position: absolute;
    right:0;
  }
  .footer{
    text-align: center;
    height:30px;
    line-height: 30px;
    font-size: 14px;
    color:#ccc;
    margin:50px 0;
  }
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .myseparator{
    padding:10px 0px;
  }
  .el-tabs{
    height:700px;
  }
</style>
