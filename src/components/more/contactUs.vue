<template>
  <div class="">
        <div class="more-content-wrap">
          <div class="more-content-head">
            <div class="zh">联系我们</div>
            <div class="en">ABOUT US</div>
          </div>
        </div>
    <!--地图-->
 <!--   <baidu-map class="map">

    </baidu-map>-->
    <div id="allmap" class="map"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted () {
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(113.366209,23.132219);
      map.centerAndZoom(point, 14);
      var marker = new BMap.Marker(point);        // 创建标注
      map.addOverlay(marker);
//  设置地图样式
      var  mapStyle ={
//    features: ["road", "building","water","land"],//隐藏地图上的poi
        style : "midnight"  //设置地图风格为高端黑
      };
    }
  }
</script>
<style>
  .map {
    width: 100%;
    height: 300px;
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
</style>
