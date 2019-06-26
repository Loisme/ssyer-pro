<template>
  <div class="">
    <div class="more-content-wrap">
      <div class="more-content-head">
        <div class="zh">意见反馈</div>
        <div class="en">ABOUT US</div>
      </div>
      <div class="more-content-text-wrap">
        <div class="more-content-text-box">
          <p>您可以通过访问「帮助中心」来查找您遇到的问题，您也可通过留言的形式反馈您的问题及网站优化的建议，我们会在第一时间回复您！</p>
        </div>
        <el-input
          type="textarea"
          :rows="2"
          :autofocus="false"
          @focus="handleSe()"
          placeholder="请输入您在使用中遇到的问题及建议..."
          v-model="textarea">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textarea: '',

      }
    },
    methods: {
       handleSe() {
         this.$router.push({
           path: `/login/`,
         })
       }
    }
  }
</script>
<style>
  .more-content-head {
    padding-bottom: 50px;
  }

  .more-content-head .en {
    font-size: 14px;
    font-family: ArialMT;
    color: #bbb;
    letter-spacing: 3px;
  }

  .more-content-head .zh {
    font-size: 24px;
    line-height: 30px;
    color: #333;
    font-weight: 700;
    padding-bottom: 5px;
  }

  .more-content-text-box {
    font-size: 14px;
    line-height: 24px;
    color: #666;
    padding-bottom: 35px;

  }

  .more-content-text-box h5 {
    margin: 0;
    font-size: 14px;
    color: #333;
  }

  .el-textarea__inner {
    min-height: 200px !important;
  }
</style>
