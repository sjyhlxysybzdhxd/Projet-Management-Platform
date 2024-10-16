import Mock from "mockjs";
import homeApi from './mockData/home';

// 拦截的路劲 方法 制造出的数据
Mock.mock("/api/home/getTableData", "get", homeApi.getTableData());
                