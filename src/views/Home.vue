
<template>
  <el-row class="home" :gutter="10">
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img :src="getImageUrl('user')" class="user">
          <div class="user-info">
            <p class="user-info-admin">admin</p>
            <p class="user-info-p">超级管理员</p>
          </div>
        </div>

        <div class="login-info">
          <p>上次登陆时间: <span>2024-06-30</span></p>
          <p>上次登陆地点: <span>北京</span></p>
        </div>
      </el-card>

      <el-card shadow="hover" class="user-table">
       <el-table :data="tableData">
        <el-table-column
          v-for="(val,key) in tableLabel"
          :key="key"
          :prop="key"
          :label="val"
        >
        </el-table-column>
       </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref,getCurrentInstance,onMounted} from 'vue'

//解构的方式
const {proxy} = getCurrentInstance()
const getImageUrl = (user)=>{ 
  return new URL(`../assets/images/${user}.png`,import.meta.url).href
}

const tableData = ref([])
const countdata = ref([])
const tableLabel = ref({
  name: "课程",
  todayBuy: "今日购买",                            
  monthBuy: "本月购买",
  totalBuy: "总购买",
})   
                              
const getTableData = async () => {
  const data = await proxy.$api.getTableData()
  // console.log(data);
  tableData.value = data.tableData
}

const getCountData = async ()=> {
  const data = await proxy.$api.getCountData()
  console.log(data);
}

import axios from "axios";

// 创建请求函数
const testMockApi = async () => {
  try {
    const response = await axios.get("/api/test"); // 发送 GET 请求
    console.log(response.data); // 输出响应数据
  } catch (error) {
    console.error("请求错误:", error); // 输出请求错误
  }
};

onMounted(()=>{
  getTableData()
  getCountData()
  testMockApi();
})
</script>
<style scoped lang="less">
.home{
  height: 100%;
  overflow: hidden;
  .user{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .user-info{
      p{
        line-height: 40px;
      }
      .user-info-p{
        color: #999;
      }
      .user-info-admin{
        font-size: 35px;
      }
    }
  }
  .login-info{
    p{
      line-height: 30px;
      font-size: 14px;
      color: #999;
    }
    span{
      color: #666;
      margin-left: 60px;
    }
  }
}
.user-table{
  margin-top: 20px;
}
</style>
