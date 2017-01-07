<template>
  <el-row class="myproduct">
    <el-col :span="24">
      <el-tabs type="card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-date"></i> 学习VueJS</span>
            <helps></helps>
        </el-tab-pane>
        <el-tab-pane label="轮播组件">
          <carousel class="topsss"></carousel>
          <div class="carouselgap"></div>
          <carousel2></carousel2>
        </el-tab-pane>
        <el-tab-pane label="我的表单">
          <my-form></my-form>
        </el-tab-pane>
        <el-tab-pane label="客户列表">
          <customers></customers>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
  import Helps from '../help/Helps'
  import Carousel from '../carousel/Carousel'
  import Carousel2 from '../carousel/Carousel2'
  import MyForm from '../myform/MyForm'
  import Customers from '../customer/Customer'
  export default {
    name: 'app',
    components: {
      Helps, Carousel, Carousel2, MyForm, Customers
    }
  }
</script>

<style>
  .myproduct{
    margin:0 auto;
  }

  .myproduct .el-carousel{
    height:300px;
  }
  .myproduct .el-carousel__container{
    height:300px;
  }

  .carouselgap{
    height:10px;
  }

</style>
