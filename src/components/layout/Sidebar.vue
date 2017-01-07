<!--
  Created by ThinkPad-wzw on 2017/1/7.
  DESC: 左侧导航文件
-->
<template>
  <el-col :span="8" class="left">
    <el-menu default-active="2" class="el-menu-vertical-demo" :router="true" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">轮播组件</template>
          <el-menu-item index="/carousel/carousel">轮播一</el-menu-item>
          <el-menu-item index="/carousel/carousel2">轮播二</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="/myform/myform">我的表单</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">帮助文档</template>
          <el-menu-item index="/helps/helps">帮助中心</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default{
  methods: {
    handleOpen: function () {
      console.log('your invoked method is handleOpen!')
    },
    handleClose: function () {
      console.log('your invoked method is handleClose!')
    }
  }
}
</script>
