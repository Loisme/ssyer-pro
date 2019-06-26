<template>
  <div class="">
    <div class="photo-card-box" @mouseenter="mouseenter()" @mouseleave="mouseleave()">
      <div style=""><img
        src="https://img.ssyer.com//picture/zl/15367554602026ct.jpg?x-oss-process=image/resize,m_lfit,w_1000"></div>
      <div class="pubicon-wrap">
        <div v-if="isMouseEnter" :class="isMouseEnter ? 'showicon' : 'hideIcon'">
          <!--收藏图-->
          <div class="hoticon" @mouseenter="mouseenter1()" @mouseleave="mouseleave1()">
            <div class="iconbg" v-show="ionicBg"></div>
            <div :class="!ionicBg ? 'initCoin' : 'changeCoin'"></div>
          </div>
          <!--下载图-->
          <div class="downicon" @mouseenter="mouseenter2()" @mouseleave="mouseleave2()">
            <div class="iconbg" v-show="ionicDown"></div>
            <div :class="!ionicDown ? 'initdownicon' : 'changedownicon'"></div>
          </div>
          <!--底部图-->
          <div class="card-foot">
            <div class="card-user">
              <div class="card-user-img"></div>
              <div class="card-user-text"><span>空空</span></div>
            </div>
            <div class="card-content">
              <div class="icon-box">
                <i class="hot" title="喜欢"></i>
                <span>0</span>
              </div>
              <div class="icon-box">
                <i class="see" title="喜欢"></i>
                <span>10</span>
              </div>
              <div class="icon-box">
                <i class="down" title="喜欢"></i>
                <span>9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        isMouseEnter: false,
        ionicBg:false,
        ionicDown:false,
      }
    },
    methods: {
      mouseenter () {
        this.isMouseEnter = true
        console.log('mouseenter')
        console.log(this.isMouseEnter)
      },
      mouseleave () {
        this.isMouseEnter = false
        console.log('mouseleave')
        console.log(this.isMouseEnter)
      },
      mouseenter1 () {
        console.log('mouseenter1')
        this.ionicBg = true
      },
      mouseleave1 () {
        this.ionicBg= false
        console.log('mouseleave1')
      },
      mouseenter2 () {
        console.log('mouseenter1')
        this.ionicDown = true
      },
      mouseleave2 () {
        this.ionicDown= false
        console.log('mouseleave1')
      }
    }
  }
</script>
<style scoped>
  .photography-content {
    overflow: hidden;
    background: #f9f9f9;
    padding-bottom: 20px;
    height: 400px;
  }

  .photography-head {
    height: 68px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .07);
    margin-bottom: 20px;
    position: relative;
    z-index: 11;
  }

  .photography-head .container {
    position: relative;
    height: 68px;
  }

  .photo-card-box {
    margin-left: 20px;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    width: 300px;
    height: 200px;
  }

  .photo-card-box img {
    width: 100%;
    height: 100%;
  }

  .pubicon-wrap {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 10;
  }
  .showicon {
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all .3s ease;
    background: linear-gradient(top, rgba(39, 41, 49, .21), rgba(39, 40, 50, 0) 40%, rgba(39, 40, 50, 0) 60%, rgba(39, 41, 49, .21));
    background: -webkit-linear-gradient(top, rgba(39, 41, 49, .21), rgba(39, 40, 50, 0) 40%, rgba(39, 40, 50, 0) 60%, rgba(39, 41, 49, .21));
  }

  .hideicon {
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all .3s ease;
    background: linear-gradient(top, rgba(39, 41, 49, .21), rgba(39, 40, 50, 0) 40%, rgba(39, 40, 50, 0) 60%, rgba(39, 41, 49, .21));
    background: -webkit-linear-gradient(top, rgba(39, 41, 49, .21), rgba(39, 40, 50, 0) 40%, rgba(39, 40, 50, 0) 60%, rgba(39, 41, 49, .21));
  }

  .hoticon {
    position: absolute;
    cursor: pointer;
    top: 14px;
    right: 64px;
    width: 32px;
    height: 32px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden
  }

  .iconbg {
    background: linear-gradient(135deg,#5720e4,#875fed);
    opacity: 1;
    filter: alpha(opacity=0);
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .3s ease;

  }

  .initCoin{
    position: relative;
    z-index: 10;
    height: 32px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-love.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .changeCoin{
    position: relative;
    z-index: 10;
    height: 32px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-small-love.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .downicon {
    position: absolute;
    cursor: pointer;
    top: 14px;
    right: 16px;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #fff, #fff);
    border-radius: 4px;
    overflow: hidden;
  }

  .initdownicon{
    position: relative;
    z-index: 10;
    height: 32px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-down.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .changedownicon{
    position: relative;
    z-index: 10;
    height: 32px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-small-down.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .card-foot {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 14px;
    height: 52px;
    box-sizing: border-box;
  }

  .card-foot .card-user {
    float: left;
    overflow: hidden;
  }

  .card-foot .card-user .card-user-img {
    background-image: url("https://img.ssyer.com/new-ssyer/all-headurl.svg");
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    float: left;
    margin-right: 10px;
    overflow: hidden;
    opacity: 1;
    filter: alpha(opacity=100);
    transition: all .3s ease;
    background-repeat: no-repeat;
    background-position: 50% center;
    background-size: cover;
  }

  .card-user-text {
    cursor: pointer;
    font-size: 12px;
    line-height: 24px;
    color: #fff;
    float: left;
    font-weight: 700;
    opacity: 1;
    text-align: left;
    filter: alpha(opacity=100);
    transition: all .3s ease;
    max-width: 108px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .card-foot .card-content{
    float: right;
    padding-top: 3px;
  }
  .card-foot .card-content .icon-box{
    float: left;
    height: 18px;
    padding-right: 10px;
  }
  .card-foot .card-content .icon-box i{
    float: left;
  }
  .card-foot .card-content .hot{
    display: block;
    height: 18px;
    width: 17px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-small-love.svg');
    background-repeat: no-repeat;
    background-position: 50% center;
  }
  .card-foot .card-content .icon-box span{
    font-size: 12px;
    line-height: 18px;
    color: rgb(255, 255, 255);
    padding-left: 5px;
  }
  .card-foot .card-content .see{
    display: block;
    height: 18px;
    width: 20px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-small-see.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .card-foot .card-content .down{
    display: block;
    height: 18px;
    width: 18px;
    background-image: url('https://img.ssyer.com/new-ssyer/photo-card-small-down.svg');
    background-repeat: no-repeat;
    background-position: 50%;
  }
  @media screen and(max-width: 1220px) {
    .card-foot .card-user .card-user-text {
      max-width: 90px;
    }
  }
</style>
