<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="item in items">
      <!-- 注意这里给src插值的写法 -->
      <img :src="item.url" :alt="item.text">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  // 注意这里的图片路径要用require('相对路径')，否则编译之后找不到图片文件
  data () {
    return {
      items: [{
        text: 'a',
        url: require('../../assets/a.jpg')
      }, {
        text: 'b',
        url: require('../../assets/b.jpg')
      }, {
        text: 'c',
        url: require('../../assets/c.jpg')
      }, {
        text: 'd',
        url: require('../../assets/d.jpg')
      }, {
        text: 'e',
        url: require('../../assets/e.jpg')
      }, {
        text: 'f',
        url: require('../../assets/f.jpg')
      }]
    }
  }
}
</script>

<style>
  .el-carousel{
    height:710px;
  }
  .el-carousel__container{
    height:680px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
