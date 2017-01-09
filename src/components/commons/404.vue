<template>
    <div class="none">
      <img src="../../assets/404.jpg" />
      <p>非常遗憾，您所访问的页面不存在，或者已经被删除。</p>
      <router-link to="/helps/helps">
        <el-button type="primary" to="/helps/helps">返回首页
        </el-button>
      </router-link>
      
    </div>
</template>
<script>
export default{
}
</script>
<style>
    .none{
       margin:0 auto;
       text-align: center;
    }
    .none a{
      text-decoration: none;
    }
    .none img{
      width:100%;
      height:100%;
    }
</style>
