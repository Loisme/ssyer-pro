<template>
  <div>
    <div class="form-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入手机号码" ></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="ruleForm.name" placeholder="短信验证码" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>
