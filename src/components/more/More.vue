<template>
  <div class="">
    <div class="container">
      <pic-show></pic-show></div>
    <el-main>
      <div class="more-box">
        <div class="more-box-left">
          <div class="more-logo"></div>
          <ul class="more-selects">
            <router-link v-for="item in aboutList" :to="{ path:item.path}" tag="li" active-class="active">
              {{ item.name}}
            </router-link>
          </ul>
        </div>
        <div class="more-box-right">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </el-main>
    <el-footer class="footer">
      <my-footer></my-footer>
    </el-footer>
  </div>
</template>

<script>
  import picShow from '../interface/picShow'
  import aboutUs from '../more/aboutUs'
  import myFooter from '../../components/footer'
  export default {
    components: {
      picShow,
      aboutUs,
      myFooter
    },
    data () {
      return {
        aboutList: [
          {
            name: '关于我们',
            path: 'aboutUs',
            active: true
          },
          {
            name: '加入我们',
            path: 'joinUs',
            active: false
          },
          {
            name: '联系我们',
            path: 'contactUs',
            active: false
          },
          {
            name: '使用协议',
            path: 'usage',
            active: false
          },
          {
            name: '意见反馈',
            path: 'feedBack',
            active: false
          },
          {
            name: '帮助中心',
            path: 'helpCenter',
            active: false
          }
        ],
      }
    },
  }
</script>
<style>
.more-box{
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  min-height: 1200px;
}
  .more-box-left{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 345px;
    background: #f9f9f9;
  }
  .more-logo{
    height: 250px;
    background-image: url('https://img.ssyer.com/new-ssyer/more-logo.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .more-selects li {
    height: 60px;
    line-height: 60px;
    color: #999;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    border-left: 6px solid transparent;
  }
  .active{
    border-left-color: #5720e4 !important;
    background: #f1f1f1 !important;
    color: #5720e4 !important;

 }
  ul{
    padding: 0;
  }
  ul li{
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
.more-box .more-box-right{
  margin-left: 345px;
  padding-left: 80px;
  padding: 50px 80px 0;
  text-align: left;
}
.more-content-head{
  padding-bottom: 50px;
}
.more-content-head .en{
  font-size: 14px;
  font-family: ArialMT;
  color: #bbb;
  letter-spacing: 3px;
}
.more-content-head .zh{
  font-size: 24px;
  line-height: 30px;
  color: #333;
  font-weight: 700;
  padding-bottom: 5px;
}
  .more-content-text-box{
    font-size: 14px;
    line-height: 24px;
    color: #666;
    padding-bottom: 35px;

  }
  .more-content-text-box h5{
    margin: 0;
    font-size: 14px;
    color: #333;
  }
.container{
  width: 1450px;
  margin: 0 auto;
}
@media screen and (max-width:1470px) and (min-width:1220px){
  .container{
    width: 1200px;
  }
}
@media screen and (max-width:1220px){
  .container{
    width: 980px;
  }
}
</style>
