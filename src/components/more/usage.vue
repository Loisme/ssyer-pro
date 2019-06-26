<template>
  <div class="">
        <div class="more-content-wrap">
          <div class="more-content-head">
            <div class="zh">使用协议</div>
            <div class="en">ABOUT US</div>
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="服务协议" name="first">
              <div class="text-box">
                <h5>特别提示</h5>
                <p>本协议由您与杭州沙沙野科技有限公司共同缔结，具有合同效力。本协议中杭州沙沙野科技有限公司在协议中称为"沙沙野"，协议签约的另一方称为原创会员或用户。</p>
                <p></p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="打赏协议" name="second">
              <div class="text-box">
                <h5>重要提示</h5>
                <p>本协议由您与杭州沙沙野科技有限公司共同缔结，具有合同效力。本协议中杭州沙沙野科技有限公司在协议中称为"沙沙野"，协议签约的另一方称为原创会员或用户。</p>
                <p></p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="CCO协议" name="third">
              <div class="text-box">
                <h5>目的声明</h5>
                <p>本协议由您与杭州沙沙野科技有限公司共同缔结，具有合同效力。本协议中杭州沙沙野科技有限公司在协议中称为"沙沙野"，协议签约的另一方称为原创会员或用户。</p>
                <p></p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style>
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
.el-tabs__nav{
  width: 100%;
}
.el-tabs__item{
  border-right: 1px solid #eee;
  width: 33%;
  text-align: center;
  font-size: 16px;
}
.el-tabs__item:nth-of-type(4){
  border-right: 1px solid transparent;
}
.el-tabs__nav-wrap::after{
  background-color: transparent !important;
}
.el-tabs__active-bar{
  background-color: transparent !important;
}
.el-tabs__item.is-active{
  font-weight: 700;
  color: #000;
}
.el-tabs__item:hover{
  color: #000 !important;
}
  .el-tab-pane{
    color: black;
  }
  p{
    text-indent: 2em;
  }
  .text-box{
    font-size: 14px;
    line-height: 24px;
    color: #666;
    padding-bottom: 35px;
  }
</style>
