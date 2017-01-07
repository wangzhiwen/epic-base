<!--
  Created by ThinkPad-wzw on 2017/1/7.
  DESC:
-->
<template>
  <el-row>
    <el-col :span="24">
      <div class="footer">
        {{ msg }}
      </div>
    </el-col>
  </el-row>
</template>
<style>

</style>
<script>
export default{
  data () {
    return {
      msg: 'Copyright © 2013 HANHUA All Rights Reserved 瀚华集团 版权所有'
    }
  }
}
</script>
