<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #353535;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
  }
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
  .el-main{
    width: 1450px;
    margin: 0 auto;
    overflow: hidden;
  }
  .block{
    width: 1450px;
    margin: 0 auto;
  }
  .btn-search{
    border-radius: 0 4px 4px 0;
  }
  .el-autocomplete{
    float: left;
    z-index: 10;
  }
  .el-input__inner{
    border-radius: 4px 0 0 4px;
  }

  @media screen and (max-width:1470px) and (min-width:1220px){
    .el-main{
      width: 1200px;
    }
    .block{
      width: 1200px;
    }
    .container{
      width: 1200px;
    }
    .home-foot-banner{
      height: 99.3px;
    }
  }
  @media screen and (max-width:1220px){
    .el-main{
      width: 980px;
    }
    .block{
      width: 980px;
    }
    .container{
      width: 980px;
    }

    .home-foot-banner{
      max-height: 81px;
    }
  }
</style>
