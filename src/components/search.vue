<template>
  <div class="">
    <div class="container"><pic-show></pic-show>
      <el-row class="demo-autocomplete" style="width: 880px;margin: 0 auto;">
        <el-col :span="24">
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
          <el-button type="primary" icon="el-icon-search" class="gradient-btn btn-search" style="float: left">搜索</el-button>
        </el-col>
        <el-col :span="24">
          <div  class="hot-text">热门搜索：<span>美女</span><span>、</span><span>风景</span></div>
        </el-col>
      </el-row>
    </div>
    <div class="photography-content">
      <div class="search-tab"></div>
    </div>
  </div>
</template>

<script>
  import picShow from '../components/interface/picShow'
  export default {
    components: {
      picShow,
    },
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: '',
        hotList:{
          title:'热门搜索',
          last:true,
          list:[
            {
              name: '风景',
              last:false,

            },
            {
              name: '建筑',
              last:false,

            },
            {
              name: '电脑壁纸',
              last:false,
            },
            {
              name: '美女',
              last:true,
            }
          ]
        },
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
<style scoped>
.search-btn{
  float: left;
}
.el-autocomplete{
  width: 765px;
}/*
.gradient-btn {
  border-width: 0;
  background: linear-gradient(45deg,#5720e4,#875fed);
}
.el-button--primary:hover{
  background: linear-gradient(45deg,#6734ea,#8d69ea);
}

.el-button--primary:focus{
  background: linear-gradient(45deg,#6734ea,#8d69ea);
}
.el-button--primary{
  font-size: 16px;
  font-weight: 600;
}*/

.photography-content{
  overflow: hidden;
  background: #f9f9f9;
  padding-bottom: 20px;
  height: 100%;
  width: 1450px;
  margin: 0 auto;
}
.hot-text{
  text-align: left;
  color: #ddd;
  margin-top: 10px;
  font-size: 12px;
}
.search-tab{
  height: 65px;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;

}
.container{
  padding: 20px 0 60px;
}
@media screen and (max-width:1470px) and (min-width:1220px){
  .container{
    width: 1200px;
  }

  .photography-content{
    width: 1200px;
  }
}
@media screen and (max-width:1220px){
  .container{
    width: 980px;
  }

  .photography-content{
    width: 980px;
  }
}
</style>
