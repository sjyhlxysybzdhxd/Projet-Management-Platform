import axios from "axios";
import { ElMessage } from "element-plus";
import config from "../config"; // 确保配置文件正常引入

const service = axios.create({
  baseURL: config.baseApi, // 设置基础 URL
});

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (res) => {
    // console.log(`请求地址: ${res.config.baseURL}${res.config.url}`);
    // console.log('请求方法:', res.config.method);
    // console.log('响应数据:', res.data); // 打印响应数据
    
    const { code, data, msg } = res.data;
    if (code == 200) {
      return data; // 返回数据部分
    } else {
      const NETWORK_ERROR = '网络错误...';
      ElMessage.error(msg || NETWORK_ERROR);
      return Promise.reject(msg || NETWORK_ERROR);
    }
  }
);

function request(options) {
  options.method = options.method || "get";

  // 关于 GET 请求参数的调整
  if (options.method.toLowerCase() === "get") {
    options.params = options.data; // 将数据转为查询参数
  }

  // 对 mock 的开关做处理
  let isMock = config.mock;
  if (typeof options.mock !== "undefined") {
    isMock = options.mock;
  }

  
  // 针对环境做出处理
  if (config.env === 'prod') {
    // 不能使用 mock
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi;

  }

  return service(options); // 发起请求
}

export default request;
