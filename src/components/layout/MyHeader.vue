<!--
  Created by ThinkPad-wzw on 2017/1/7.
  DESC:
-->
<template>
  <el-row>
    <el-col :span="24">
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" :router="true" @select="handleSelect">
        <div class="leftlogo">
          <!-- 
            注意这里的写法，~assets/logo1.png 相当于require('../../assets/logo1.png'),
            网上说直接写src="../../assets/logo1.png"有时不好用，暂时没发现。
           -->
          <img src="~assets/logo1.png" alt="logo">
        </div>
        <div class="rightmenu">
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="/product/product">产品中心</el-menu-item>
            <el-menu-item index="/customer/customer">客户中心</el-menu-item>
          </el-submenu>
          <el-menu-item index="/helps/helps">帮助中心</el-menu-item>
          <el-menu-item index="3">关于我们</el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default{
  methods: {
    handleSelect: function () {
      console.log('your invoked method is handleSelect!')
    }
  }
}
</script>
