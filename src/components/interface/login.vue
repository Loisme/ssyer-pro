<template>
  <div>
    <div style="height: 68px"></div>
    <div class="userWrap">
      <img src="https://img.ssyer.com/new-ssyer/user-new-bg-now.jpg">
      <div class="userWrap-head container" @click="fistPage">
        |　通行证
      </div>
      <div class="popup">
        <div class="userHead"></div>
        <div class="userContent">
          <p>让作品遇见全世界</p>
          <p>登录XXX，遨游在视觉的天地里，一起分享快乐吧</p>
        </div>
        <div class="userPopup">
          <div class="form-wrap">
            <div class="form-head">
              <div class="enter-head" @click="toggleTab('passPage')">
                <span>密码登入
                <i></i></span>
              </div>
              <div class="enter-head" style="text-align: right" @click="toggleTab('notePage')">
                <span>短信登入
                <i></i></span>
              </div>
            </div>
            <keep-alive>
              <!-- is 特性动态绑定子组件, 让多个组件可以使用同一个挂载点，并动态切换 -->
              <div :is="currentTab"></div>
            </keep-alive>
          </div>
        </div>
        <div class="userFoot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import  passPage from './login/pass'
import notePage from './login/notePage'
export default {
 components:{
   passPage,
   notePage
 },
  data() {
    return {
      currentTab: 'passPage',
      ruleForm: {
        name: '',
        region: '',
        password:''
      },
      rules: {
        name: [
          { required: true, message: '请输入手机号码/邮箱', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
      }
    };
  },
  methods: {
    fistPage(){
      this.$router.push({
        path: '/main',
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toggleTab: function (tab) {
      this.currentTab = tab;  // tab 为当前触发标签页的组件名
    }
  }
}
</script>
<style scoped>
  .userWrap{
    background-image: url("https://img.ssyer.com/new-ssyer/user-new-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 1000px;
    position: fixed;
    z-index: 20;
    top: 0;
  }/*
  .userWrap > img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: none;
  }*/
  .popup{
    width: 800px;
    height: 480px;
    padding-left: 40px;
    background: linear-gradient(135deg, rgb(87, 32, 228), rgb(135, 95, 237));
    box-shadow: rgba(87, 32, 228, 0.3) 0px 2px 29px 0px;
    z-index: 100;
    border-radius: 4px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
  }
  .userHead{
    background-image: url('https://img.ssyer.com/new-ssyer/user-tree.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    width: 154px;
    height: 154px;
    margin: 10px 0 30px;
  }
  .userContent{
    text-align: left;
    font-size: 30px;
    color: #fff;
  }
  .userContent > p{
    font-size: 16px;
    line-height: 22px;
    font-family: PingFangSC-Regular;
    margin-top: 15px;
  }
  .userFoot{
    background-image: url('https://img.ssyer.com/new-ssyer/user-logo.svg');
    background-repeat: no-repeat;
    background-position: 50%;
    width: 340px;
    height: 105px;
    margin-top: 30px;
    cursor: pointer;
  }
  .userPopup{
    background: #fff;
    border-radius: 4px;
    width: 340px;
    height: 550px;
    position: absolute;
    top: -35px;
    right: 20px;
  }
  .form-wrap{
    padding: 58px 40px;
    box-sizing: border-box;
    height: 550px;
    position: relative;
  }
  .form-head{
    padding-bottom: 50px;
  }
  .enter-head{
    color: #ccc;
    font-weight: 700;
  }
  .enter-head span{
    display: inline-block;
    padding-bottom: 13px;
    position: relative;
    font-size: 20px;
    cursor: pointer;
    transition: all .2s ease;
  }
  .form-head > div{
    float: left;
    width: 50%;
    text-align: left;
  }
  .form-content .input-box{
    margin-bottom: 20px;
    height: 42px;
    background: #eee;
    padding: 12px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    position: relative;
  }

  .form-content .input-box > input{
    display: block;
    border: 0;
    outline: 0;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    height: 18px;
    background: transparent;
    color: #666;
  }
  .el-form-item__content {
    margin-left: 0px !important;
  }
  .userWrap-head{
    text-align: left;
    margin-top: 24px;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    line-height: 30px;
    padding-left: 85px;
    background-image: url('https://img.ssyer.com/new-ssyer/logoText.svg');
    background-repeat: no-repeat;
    background-position: 0;
    cursor: pointer;
    position: relative;
    z-index: 100;
    position: absolute;
    top: 10px;
  }
</style>
