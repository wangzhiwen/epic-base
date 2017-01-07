<template>
  <el-carousel :interval="5000" arrow="always">
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
        text: '1',
        url: require('../../assets/1.jpg')
      }, {
        text: '2',
        url: require('../../assets/2.jpg')
      }, {
        text: '3',
        url: require('../../assets/3.jpg')
      }, {
        text: '4',
        url: require('../../assets/4.jpg')
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
    height:710px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    --line-height: 300px;
    --height:100%;
    margin: 0;
    text-align:center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
