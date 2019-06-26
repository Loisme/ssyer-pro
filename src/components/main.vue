<template>
  <div class="main">
    <el-main>
      <template>
        <div class="block">
          <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
      <div class="part1">
        <div class="partText">
          <div class="zh">大家正在关注</div>
          <div class="en"><i class="el-icon-star-on"></i><span>PEOPLE ARE WATCHING</span><i class="el-icon-star-on"></i>
          </div>
        </div>
        <!-- part1 6个图 -->
        <div class="cardsWrap">
          <el-row :gutter="20">
            <el-col :span="4" v-for="card in cardList" :key="card">
              <div class="grid-content">
                <div class="attention">
                  <div
                    :style='"height: 100%;background-size: cover;background-position: center center;background-image: url(\""+card + "\")"'>
                    <!--<div style='height: 100%;background-size: cover;background-position: center center;background-image: url("")'>-->
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!--摄影标签-->
      <div class="part2" style="position: relative">
        <div class="partText">
          <div class="zh">摄影标签</div>
          <div class="en"><i class="el-icon-star-on">
          </i><span>PHOTOGREPHY LABEL</span><i class="el-icon-star-on"></i>
          </div>
        </div>
        <!-- 瀑布流 -->
        <div class="content">
          <vue-waterfall-easy :imgsArr="imgSrcList" :imgWidth="400" :maxCols="3" @scrollReachBottom="getData"></vue-waterfall-easy>
        </div>
        <div class="morebtn">查看更多</div>
        <div class="bgMask"></div>
        <!--图片-->
      </div>
      <!--图片展示-->
      <div class="container" style="padding: 40px 0 20px">
        <div class="home-foot-banner">
          <img src="https://img.ssyer.com//picture/new/XfChEU259.jpg">
        </div>
      </div>
    </el-main>
    <el-footer class="footer">
      <my-footer></my-footer>
    </el-footer>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import myFooter from './footer'
  export default {
    name: 'home',
    components: {
      vueWaterfallEasy,
      myFooter
    },
    props:{
      maxCols: {    //最大的列数
        type: Number,
        default: 3
      },
      imgWidth: {   //制定图片的同一宽度
        type: Number,
        default: 400
      },
    },
    data () {
      return {
        menuList: [],
        imgSrcList:[],
        imgSrc:'',
        obj:{},
        group: 0, // request param
        imgList: [
          'https://img.ssyer.com//picture/new/_quh6V76I.jpg',
          'https://img.ssyer.com//picture/new/U3GSnpSs3.jpg',
          'https://img.ssyer.com//picture/new/gG_z_NZg1.jpg',
          'https://img.ssyer.com//picture/new/Fa7y5ULhS.jpg',
          'https://img.ssyer.com//picture/new/zHq2seNVO.jpg'
        ],
        imgsArr: [],
        /*
        picList: [
          {'src': "https://img.ssyer.com/picture/full/Bk-NmE242z.jpg",
            'href': "https://www.ssyer.com/detailpage/5b98fd4ced0cbe41f4a995b1",
          },
          {'src': "https://img.ssyer.com/picture/full/SygK8H6VnG.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com/picture/new/zl/c6b73cd32f990a275051a9b6870afe0c.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com/picture/new/zl/01dee502f56b54ae749d6b7e41321b0a.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com//picture/new/PGItQ8_mI.jpg?x-oss-process=image/resize,m_lfit,w_900"},
          {'src': "https://img.ssyer.com/picture/full/Bk-NmE242z.jpg",
            'href': "https://www.ssyer.com/detailpage/5b98fd4ced0cbe41f4a995b1",
          },
          {'src': "https://img.ssyer.com/picture/full/SygK8H6VnG.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com/picture/new/zl/c6b73cd32f990a275051a9b6870afe0c.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com/picture/new/zl/01dee502f56b54ae749d6b7e41321b0a.jpg",
            'href': "https://www.baidu.com",
          },
          {'src': "https://img.ssyer.com//picture/new/PGItQ8_mI.jpg?x-oss-process=image/resize,m_lfit,w_900"},
          {'src': "https://img.ssyer.com//picture/new/PGItQ8_mI.jpg?x-oss-process=image/resize,m_lfit,w_500"},
          {'src': "https://img.ssyer.com//picture/new/rT7lJlcBf.jpg?x-oss-process=image/resize,m_lfit,w_500"},
        ],*/
        cardList: [
          'https://img.ssyer.com//picture/new/PGItQ8_mI.jpg?x-oss-process=image/resize,m_lfit,w_500',
          'https://img.ssyer.com//picture/new/DGegMGlmO.jpg?x-oss-process=image/resize,m_lfit,w_500',
          'https://img.ssyer.com//picture/new/2L-G7Uqzn.jpg?x-oss-process=image/resize,m_lfit,w_500',
          'https://img.ssyer.com//picture/new/tysrNx6gn.jpg?x-oss-process=image/resize,m_lfit,w_500',
          'https://img.ssyer.com//picture/new/rT7lJlcBf.jpg?x-oss-process=image/resize,m_lfit,w_500',
          'https://img.ssyer.com//picture/new/Jt2ZzHPJJ.jpg?x-oss-process=image/resize,m_lfit,w_500'
        ],
      }
    },
    methods: {
      getData () {
        this.imgsArr = this.imgsArr.concat(this.picList)
        this.group++
        /*      this.$http.get('./static/mock/data.json?group=' + this.group) // 真实环境中，后端会根据参数group返回新的图片数组，这里我用一个惊呆json文件模拟
                .then(res => {
                  console.log(res)
                  this.imgsArr = this.imgsArr.concat(res.data)
                  this.group++
                })*/
      },

      getHomeData(){
        let api = 'ssyer/api/nofree/work/list';
        let body = "PID=5b923c76b39e224504b1ca4b&featured=1&pageCount=10&sort=updatedAt";
        this.$http.post(api, body) // post请求数据
          .then((response) => {// 响应处理
            let menuList = response.data.data.list;
            console.log(menuList);
            menuList.forEach(item => {
              console.log(menuList);
              this.imgSrc = 'https://img.ssyer.com/' + item.cover;
              console.log(this.imgSrc);
              this.obj = {'src': this.imgSrc}
              this.imgSrcList.push(this.obj);
              console.log(this.imgSrcList);
            });
          });
      },
    },
    created () {
      this.getData();
      this.getHomeData();
    },
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .el-carousel__container {
    height: 380px !important;
  }

  @media screen and (max-width: 1470px) and (min-width: 1220px) {
    .el-carousel__container {
      height: 280px !important;
    }
  }

  .el-carousel__item > img {
    width: 100%;
    border-radius: 4px;
  }

  .partText {
    padding: 40px 0 30px;
    color: #666;
  }

  .partText .zh {
    font-weight: 700;
    color: #ccc;
    font-size: 18px;
    line-height: 25px;
    padding-bottom: 4px;
  }

  .partText .en {
    font-size: 10px;
  }

  .partText span {
    padding: 0 15px;
  }

  .cardsWrap {
    /*height: 124px;*/
  }

  .attention {
    height: 108px;
    overflow: hidden;
    border-radius: 4px;
    height: 144px;
    position: relative;
    background: #444;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  .content {
    width: 100%;
    height: 1200px;
    overflow: hidden;
  }
  .morebtn{
    width: 200px;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(135deg,#4d15e2,#6c36e3);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    font-family: PingFangSC-Semibold;
    margin: 10px auto 0;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease-in-out;

  }
  .bgMask{
    width: 100%;
    height: 608px;
    position: absolute;
    bottom: 40px;
    left: 0;
    z-index: 11;
    background: linear-gradient(180deg,rgba(53,53,53,0),#353535);
    cursor: pointer;
  }
  .vue-waterfall-easy-scroll{
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
  .container{
    width: 1450px;
    margin: 0 auto;
  }
  .home-foot-banner{
    cursor: pointer;
    overflow: hidden;
    background: #444;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 120px;
    border-radius: 4px;
  }

  .home-foot-banner img{
    width: 100%;
    display: block;
    border-radius: 4px;
  }
  @media screen and (max-width: 1220px){
    .home-foot-banner{
      max-height: 81px;
    }
    .el-carousel__container {
      height: 260px !important;
    }
  }
</style>
