<template>
  <div>
    <!--图片展示-->
    <div class="picContainer" style="padding: 40px 0 20px">
      <div class="home-foot-banner">
        <img src="https://img.ssyer.com//picture/new/XfChEU259.jpg">
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
<style>
  .picContainer{
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
  @media screen and (max-width:1470px) and (min-width:1220px){
   .picContainer{
     width: 1200px;
   }
  }
  @media screen and (max-width:1220px){
   .picContainer{
     width: 980px;
   }
  }
</style>
