<template>
  <div id="">
       <el-row style="background-color: rgb(35, 35, 35)">
         <el-col :span="12">
           <el-menu :default-active="activeIndex"
                    :router="true"
                    class="header-color el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#232323" active-text-color="#fff" text-color="#666">
             <el-menu-item index="main"><img src="https://img.ssyer.com/new-ssyer/logoText.svg"></el-menu-item>
             <el-menu-item index="main">首页</el-menu-item>
             <el-menu-item index="photo">摄影专区</el-menu-item>
             <el-menu-item index="search">创意元素</el-menu-item>
             <el-submenu index="4">
               <template slot="title">{{selectText}}</template>
               <el-menu-item v-for="item in optionList" :index="item.index" :key="item.index">{{item.name}}
               </el-menu-item>
             </el-submenu>
            </el-menu>
         </el-col>
         <el-col :span="12">
           <div class="head-right">
             <div class="search-btn"><el-autocomplete
               class="inline-input"
               v-model="state1"
               :fetch-suggestions="querySearch"
               placeholder="请输入内容"
               @select="handleSelect"
             ></el-autocomplete>
               <el-button type="primary" icon="el-icon-search" class="gradient-btn btn-search">搜索</el-button></div>
             <el-button type="primary" class="gradient-btn" style="margin-left: 12px" @click="getLogin">登录
             </el-button>
             <el-button type="primary" class="gradient-btn" @click="getRegister">注册</el-button>
           </div>
         </el-col>
       </el-row>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        value: '',
        selectText: '更多',
        optionList: [{
          index: 'aboutUs',
          name: '关于我们'
        }, {
          index: 'joinUs',
          name: '加入我们'
        }, {
          index: 'contactUs',
          name: '联系我们'
        },
          {
            index: 'usage',
            name: '使用协议'
          }, {
            index: 'feedBack',
            name: '意见反馈'
          }, {
            index: 'helpCenter',
            name: '帮助中心'
          }],
        activeIndex: 'main',
        state1: '',
        state2: ''
      }
    },

    methods: {
      getLogin(){
        this.$router.push({
          path: `/login/`,
        });
      },
      getRegister(){
        this.$router.push({
          path: `/register/`,
        })
      },
      querySearch (queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter (queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll () {
        return [
          {'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号'},
          {'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号'},
          {'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113'},
          {'value': '泷千家(天山西路店)', 'address': '天山西路438号'},
          {'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'},
          {'value': '贡茶', 'address': '上海市长宁区金钟路633号'},
          {'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号'},
          {'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号'},
          {'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107'},
          {'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号'},
          {'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号'}
        ]
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
  a{
    text-decoration: none;
  }
  .el-header{
    padding: 0 !important;
    min-width: 980px;
  }
  .el-menu-item{
    transition: border-color 0s,background-color 0s,color 0s;
    font-size: 16px;
    font-weight: 700;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none !important;
    border-bottom-color: transparent !important;
  }
  .el-menu--horizontal > .el-menu-item.is-active{
    border-bottom: none;
    background-color: inherit;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    border-bottom: none !important;
  }
  .head-right{
    height: 60px;
    line-height: 60px;
    float: right;
    margin-right: 4%;
  }
  .search-btn{
    display: inline-block;
  }
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
  }
  @media screen and (max-width:1470px) and (min-width:1220px){
    .el-main{
      width: 1200px;
    }
    .block{
      width: 1200px;
    }
    .footer .container{
      width: 1200px;

    }
  }
  @media screen and (max-width:1220px){
    .el-main{
      width: 980px;
    }
    .block{
      width: 980px;
    }

    .footer .container{
      width: 980px;

    }
  }
</style>
