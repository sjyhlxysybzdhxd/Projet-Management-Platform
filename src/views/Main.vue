<script setup>
import CommentAside from '../components/CommentAside.vue';
import CommentHeader from '../components/CommentHeader.vue';
</script>

<template>
  <div class="comment-layout">
    <el-container class="lay-container">
      <!-- 左侧自定义组件 -->
       <CommentAside />

       <el-container>
        <el-header class="el-header">
          <CommentHeader />
        </el-header>
        <el-main class="right-mian">
          <router-view></router-view>
        </el-main>
       </el-container>

    </el-container>
  </div>
</template>

<style scoped lang="less">
  .comment-layout,.lay-container{
    height: 100%;
  }

  .el-header{
    background-color: #333;
  }

</style>
