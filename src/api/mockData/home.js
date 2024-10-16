export default {
  getTableData: ()=>{
    return {
      status:200,
      data:{
        tableData:[
          {
            "name": "课程 1",
            "todayBuy": 50,
            "monthBuy": 300,
            "totalBuy": 4000
          },
          {
            "name": "课程 2",
            "todayBuy": 80,
            "monthBuy": 120,
            "totalBuy": 3500
          },
          {
            "name": "课程 3",
            "todayBuy": 15,
            "monthBuy": 200,
            "totalBuy": 2500
          }
        ]
      }
    }
  }
}