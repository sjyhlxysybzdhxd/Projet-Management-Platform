const env = import.meta.env.MODE || "prod"

// console.log(env); // 打印当前的环境模式

//不同的环境配置
const EnvConfig = {
  development:{
    baseApi:"/api",
    mockApi:"https://apifoxmock.com/m1/4068509-0-default/api"
  },
  test:{
    baseApi:"/api",
    mockApi:"https://apifoxmock.com/m1/4068509-0-default/api"
  },
  prod:{
    baseApi:"/api",
    mockApi:"https://apifoxmock.com/m1/4068509-0-default/api"
  },
}

export default {
  env,
  ...EnvConfig[env],
  mock: true,
}