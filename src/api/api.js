/**
 * 整个项目api的统一管理
 */

import request from "./request";


// 请求首页左侧的表格数据
export default {
    getTableData() {
        return request({
            url: "home/getTable",  // 确保路径正确
            method: "get",  // 修正拼写
            mock: true,    // 如果有 mock 机制，确保在 request.js 中处理这个参数
        });
    },
}
