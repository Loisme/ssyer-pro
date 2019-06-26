<template>
  <div id="">
    <div class="container">
      <div class="footer-top">
        <div class="link">
          <span>友情链接：</span>
          <a href="" target="_blank">驿道科技</a>
        </div>
      </div>
      <div class="line"></div>
      <div class="footer-middle">
        <div class="footer-wrap">
          <div class="three-box">
            <img src="https://img.ssyer.com/new-ssyer/wxQRcode.png">
            <div>微信公众号</div>
          </div>
          <div class="three-box weibo">
            <a><img src="https://img.ssyer.com/new-ssyer/weiboQRcode.png">
              <div>微博</div></a>
          </div>
          <div class="footer-wrap-top">
            <span>沙沙野介绍</span>
            <i><i></i></i>
            <span>加入我们</span>
            <i><i></i></i>
            <span>联系我们</span>
            <i><i></i></i>
            <span>使用协议</span>
            <i><i></i></i>
            <span>意见反馈</span>
            <i><i></i></i>
            <span>帮助中心</span>
          </div>
          <div class="footer-wrap-middle">
            <p>© 2015-2018 ssyer.com 版权所有&nbsp;&nbsp;
              <a class="CC0Url">浙ICP备15022381号-1</a>&nbsp;&nbsp;杭州沙沙野科技有限公司
              <br>
              Ssyer是一个充满活力的创意社区，分享免费的图片和视频。分享图片和视频的您,请您参阅
              <a class="CC0Url">CREATIVE COMMONS CC0 1.0 通用(CC0 1.0)Public Domain Dedication 协议</a>
            </p>
          </div>
          <div class="footer-wrap-bottom">
            <div class="wrap-box">不良信息举报</div>
            <div class="wrap-box">网站备案</div>
            <div class="wrap-box">资格证书</div>
            <div class="wrap-box">诚信网站</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

<style scoped>
  .footer{
    background: #323232;
    width: 100%;
  }
  .footer .container{
    width: 1450px;
    margin: 0 auto;
  }
  .footer-top{
    height: 58px;
  }
  .footer .footer-top .link{
    height: 22px;
    padding-top: 17px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    color: #666;
    line-height: 22px;
  }
  .footer .footer-top .link a{
    font-size: 14px;
    font-family: PingFangSC-Regular;
    color: #999;
    line-height: 20px;
    padding: 0 5px;
  }
  .footer .line{
    height: 1px;
    background: #666;
  }
  .footer .footer-middle{
    padding: 35px 0 60px;
  }
  .footer .footer-middle .footer-wrap{
    width: 780px;
    margin: 0 auto;
    position: relative;
  }
  .footer .footer-middle .footer-wrap .footer-wrap-top{
    text-align: center;
    width: 660px;
    font-size: 16px;
    font-family: PingFangSC-Semibold;
    color: #999;
    margin: 0 auto 10px;
    padding-bottom: 46px;
    border-bottom: 1px solid #666;
  }
  .footer .footer-middle .footer-wrap .footer-wrap-top span{
    float: left;
    cursor: pointer;
    transition: all .2s ease;
  }
  .footer .footer-middle .footer-wrap .footer-wrap-top i{
    display: inline-block;
    width: 52px;
    height: 22px;
    float: left
  }
  .footer .footer-middle .footer-wrap .footer-wrap-top i i{
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #999;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
  }
  .footer .footer-middle .footer-wrap .three-box{
    width: 70px;
    font-size: 12px;
    line-height: 30px;
    color: #ccc;
    position: absolute;
    top: 10px;
  }
  .footer .footer-middle .footer-wrap .three-box img{
    width: 100%;
    display: block;
    opacity: .8;

  }
  .footer .footer-middle .footer-wrap .three-box:first-of-type{
    left: -100px;
  }

  .footer .footer-middle .footer-wrap .three-box:nth-of-type(2){
    right: -100px;
  }
  .footer .footer-middle .footer-wrap .footer-wrap-middle{
    padding-bottom: 25px;
  }
  .footer .footer-middle .footer-wrap .footer-wrap-middle p{
    font-size: 12px;
    line-height: 18px;
    color: #666;
    margin: 0;
  }
  .CC0Url{
    color: #666;

  }
  .footer-middle .footer-wrap .footer-wrap-bottom{
    position: relative;
    left: 50%;
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    overflow: hidden;
    float: left;
  }
  .footer-middle .footer-wrap .wrap-box{
    float: left;
    width: 86px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #aaa;
    background: #666;
    border-radius: 4px;
  }
  .footer-middle .footer-wrap .wrap-box:first-of-type{
    margin-right: 45px;
  }

  .footer-middle .footer-wrap .wrap-box:nth-of-type(2){
    margin-right: 45px;
  }

  .footer-middle .footer-wrap .wrap-box:nth-of-type(3){
    margin-right: 45px;
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
