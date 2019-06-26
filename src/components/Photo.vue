<template>
  <div class="">
    <div class="container"><pic-show></pic-show></div>
    <div style="background-color: #fff" class="photography-content">
      <div class="photography-head">
          <el-row>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-submenu index="2">
                <template slot="title">全部推荐</template>
                <el-menu-item index="2-1">编辑精选</el-menu-item>
                <el-menu-item index="2-2">全部推荐</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">今日人气榜</template>
                <el-menu-item index="3-1">今日人气榜</el-menu-item>
                <el-menu-item index="3-2">7日人气榜</el-menu-item>
                <el-menu-item index="3-3">30日人气榜</el-menu-item>
              </el-submenu>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">最新消息</a></el-menu-item>
            </el-menu>
          </el-row>
      </div>
      <div class="photography-content">

        <div class="filtrate-wrap">
          <div class="container">

            <!-- 全部标签栏 -->
            <template v-for="item in productList">
              <div class="filtrate-content">
                <!-- 分类名 -->
                <div class="filtrate-title">{{item.title}}</div>
                <div class="filtrate-selects">

                  <!-- 单行标签栏 -->
                  <div v-for="(label,index) in item.list" @click="onLabelSeleted(index, item.list)">
                    <div :class="label.isSelected ? 'filtrate-select-box1' : 'filtrate-select-box'">
                      <img v-if="label.hot" src="https://img.ssyer.com/new-ssyer/new_filtrate_2_icon.svg" class="new_filtrate_icon"/>
                      <div class="filtrate-select-text">{{label.name}}</div>
                    </div>
                  </div>

                </div>
              </div>
            </template>

          </div>
        </div>
        <pic-card></pic-card>
      </div>
    </div>

  </div>
</template>

<script>
  import picShow from '../components/interface/picShow'
  import picCard from '../components/interface/picCard'
  export default {
    components: {
      picShow,
      picCard
    },
    data () {
      return {
        isPicClick: [],
        selectListIndex: [],
        nowIndex:0,
        cIndex:0,
        productList:{
          pc:{   //对象
            title:'分类',
            list:[
              {
                name: '壁纸',
                url: 'http://starcraft.com',
                isSelected: true
              },
              {
                name: '建筑空间',
                url: 'http://warcraft.com'
              },
              {
                name: '人物百态',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '自然风景',
                url: 'http://hearstone.com'
              },

              {
                name: '壁纸',
                url: 'http://starcraft.com'
              },
              {
                name: '建筑空间',
                url: 'http://warcraft.com'
              },
              {
                name: '人物百态',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '自然风景',
                url: 'http://hearstone.com'
              }
            ]
          },
          app:{
            title:'标签',
            last:true,
            list:[
              {
                name: '建筑',
                url: 'http://weixin.com',
                hot:true,
                isSelected: true
              },
              {
                name: '街道',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '城堡',
                url: 'http://maps.com'
              },
              {
                name: '楼梯',
                url: 'http://phone.com'
              }
            ]
          },
          copyright:{
            title:'板式',
            last:true,
            list:[
              {
                name: '全部',
                url: 'http://weixin.com',
                hot:true,
                isSelected: true
              },
              {
                name: '横版',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '竖版',
                url: 'http://maps.com'
              },
            ]
          },
        }
      }
    },
    methods:{
      onLabelSeleted(index, list){
        for (let i=0; i< list.length; i++) {
          list[i].isSelected = false;
          // list[i].isSelected = index === i;
        }
        list[index].isSelected = true;
        this.$forceUpdate();//这个方法可以使当前组件调用这个方法时，重新渲染组件
      }
    }
  }
</script>
<style scoped>
  .photography-content{
    overflow: hidden;
    background: #f9f9f9;
    padding-bottom: 20px;
    height: 100%;
    width: 1450px;
    margin: 0 auto;
  }
  .photography-head{
    width: 100%;
    height: 68px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
    margin-bottom: 20px;
    position: relative;
    z-index: 11;
  }
  .photography-head .container{
    position: relative;
    height: 68px;
  }
  .picContainer{
    width: 100% !important;
  }
  .container{
    width: 1450px;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal{
    text-align: center;
    display: table;
    left: 50%;
    transform: translate(-50%,0%);
  }
  .filtrate-wrap{
    padding-bottom: 20px;
  }
  .filtrate-wrap .filtrate-content{
    padding: 15px 40px 10px 30px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
  .filtrate-wrap .filtrate-content .filtrate-title{
    float: left;
    font-size: 16px;
    font-weight: 700;
    color: #999;
    line-height: 20px;
    padding: 9px 0;

  }
  .filtrate-selects{
    margin-left: 50px;
    padding-top: 4px;
  }
  .filtrate-select-box{
    position: relative;
    float: left;
    font-size: 16px;
    font-weight: 700;
    color: #666;
    line-height: 20px;
    border-radius: 4px;
    margin: 0 5px;
    cursor: pointer;
    transition: all .2s ease;
  }

  .filtrate-select-box1{
    position: relative;
    float: left;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    line-height: 20px;
    border-radius: 4px;
    margin: 0 5px;
    cursor: pointer;
    transition: all .2s ease;
    background: linear-gradient(135deg,#5720e4,#875fed);
  }
  .filtrate-select-bg{
    color: #fff !important;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    background: linear-gradient(135deg,#5720e4,#875fed);
    border-radius: 4px;
    transition: all .2s ease;
  }
  .filtrate-select-text{
    padding: 5px 10px;
    position: relative;
    z-index: 5;

  }
  .new_filtrate_icon{
    position: absolute;
    z-index: 10;
    right: -20px;
    top: -6px;
    animation: myfirst-data-v-23ed4002 1s infinite;
    -moz-animation: myfirst-data-v-23ed4002 1s infinite;
    -webkit-animation: myfirst-data-v-23ed4002 1s infinite;
    -o-animation: myfirst-data-v-23ed4002 1s infinite;
    animation-direction: alternate;
    -webkit-animation-direction: alternate;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    -webkit-animation-timing-function: linear;
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
