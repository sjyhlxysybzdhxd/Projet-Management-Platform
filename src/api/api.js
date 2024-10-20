/**
 * 整个项目api的统一管理
 */

import request from "./request";

// 请求首页左侧的表格数据
export default {
    getTableData() {
        return request({
            url: "/home/getTableData",  // 确保路径正确
            method: "get",  // 修正拼写
            mock:false
        });
    },
    getCountData(){
        return request({
            url: "/home/getCountData", // 确保路径正确
            method: "get",
            mock:false
        });
    },
    getTest(){
        return request({
            url: "/test", // 确保路径正确
            method: "get",
            mock:false
        });
    }
}
