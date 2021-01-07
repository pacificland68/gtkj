<template>
  <div class="login-page">
    <el-container>
      <el-header style="padding: 0; height: 120px">
        <div class="header-box">
          <img src="../../assets/login_images/logo.png" />
          <div class="header-title">深圳市国土空间基础信息平台</div>
        </div>
      </el-header>
      <el-main style="padding: 0; height: 765px">
        <div class="main-left">
          <div class="welcome">
            <img src="../../assets/login_images/welcome.png" />
          </div>
        </div>
        <div class="main-right">
          <div v-if="showQrcode === false">
            <!-- 普通用户登陆 -->
            <div class="login-container">
              <div class="title-container">用户登录</div>
              <div class="qr-change">
                <a href="#"
                  ><img
                    src="../../assets/login_images/qrcode_change.png"
                    style="padding-left: 45%; padding-top: 15px; height: 90%"
                    @click="changeicon"
                /></a>
              </div>
              <el-form
                ref="loginForm"
                :model="loginForm"
                class="login-box"
                :inline="true"
                auto-complete="on"
                label-position="left"
              >
                <el-form-item
                  class="login-son-box"
                  prop="username"
                  label="用户名："
                >
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="请输入用户名"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                  />
                </el-form-item>
                <el-form-item
                  class="login-son-box"
                  prop="password"
                  label="密 码："
                >
                  <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="请输入密码"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                  />
                </el-form-item>
                <el-row>
                  <el-col :span="16">
                    <el-form-item
                      class="login-son-box identifyCode"
                      prop="identifyCode"
                      label="验证码："
                    >
                      <el-input
                        ref="identifyCode"
                        v-model="loginForm.identifyCode"
                        placeholder="请输入验证码"
                        name="identifyCode"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <a href="#" v-on:click="changeCode">
                      <identifyCode
                        :identifyCode="identifyCode"
                        :contentWidth="90"
                        :contentHeight="40"
                      ></identifyCode>
                    </a>
                  </el-col>
                </el-row>
              </el-form>

              <div class="forgetpws">忘记密码</div>

              <el-button
                round
                :loading="loading"
                style="width: 325px; margin-bottom: 38px"
                @click.native.prevent="handleLogin"
                >登陆</el-button
              >
            </div>
          </div>
          <div v-else>
            <!-- 二维码登陆 -->
            <div class="login-container">
              <div class="title-container">二维码登录</div>
              <div class="qr-change">
                <a href="#"
                  ><img
                    src="../../assets/login_images/general_code.png"
                    style="padding-left: 45%; padding-top: 15px; height: 90%"
                    @click="changeGeneral"
                /></a>
              </div>
              <div style="text-align: center">
                <vue-qr :logo-src="imageUrl" :text="qrcode" :size="230" />
              </div>
              <span style="color: #4b5ec6; padding-left: 30%; padding-top: 10px"
                >请使用微信扫描二维码登录</span
              >
            </div>
          </div>
        </div>
      </el-main>
      <el-footer style="padding: 0; height: 195px">
        <el-row>
          <el-col :span="10">
            <div class="friend-link">
              <div class="link-title">友情链接：</div>
              <div class="link-names">
                <el-link
                  class="one-link"
                  href="http://www.szpl.gov/"
                  target="_blank"
                  :underline="false"
                  >深圳市规划和自然局电子政务平台</el-link
                >
                <!-- <div class="one-link">深圳市规划和自然局电子政务平台</div> -->
                <div class="separator" />
                <div class="two-link">广东省国土空间基础信息平台</div>
                <el-link
                  class="three-link"
                  href="http://10.253.102.69/"
                  target="_blank"
                  :underline="false"
                  >深圳市可视化城市空间数字平台</el-link
                >
                <!-- <div class="three-link">深圳市可视化城市空间数字平台</div> -->
                <div class="separator" />
                <div class="four-link">自然资源部国土空间基础信息平台</div>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="main-info">
              <div class="first-info">主办：深圳市规划和自然资源局</div>
              <div class="two-info">技术支持：深圳市规划国土房产信息中心</div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="about-us">
              <div class="title">联系我们</div>
              <div class="tel">热线电话：23965666</div>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
import axios from "axios";
import { setToken } from "@/utils/auth";
import cryptojs from "../../utils/cryptojs";
import { removeToken, getToken } from "@/utils/auth";
import config from "../../../public/config";
import vueQr from "vue-qr";
import { socketConnect } from "@/utils/websocket";
import identifyCode from "../../components/Login/identifyCode";

export default {
  name: "Login",
  components: {
    vueQr,
    identifyCode,
  },
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error("请输入正确的用户名"));
    //   } else {
    //     callback();
    //   }
    // };
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error("The password can not be less than 6 digits"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      // loginRules: {
      //   username: [
      //     { required: true, trigger: "blur", validator: validateUsername },
      //   ],
      //   password: [
      //     { required: true, trigger: "blur", validator: validatePassword },
      //   ],
      // },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      showQrcode: false,
      imageUrl: require("@/assets/content1.png"),
      qrcode: "",
      socketObj: {
        websocket: null,
        sid: null,
      },
      identifyCode: "8976",
    };
  },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect;
  //     },
  //     immediate: true
  //   }
  // },
  created() {
    removeToken();
    this.getQrcode();

    //获取验证码
    axios
      .get(config.loginUrls.getVerification, { withCredentials: true })
      .then((result) => {
        console.log(result.data.data.fourRandom);
        this.identifyCode = result.data.data.fourRandom;
      });
  },
  methods: {
    // showPwd() {
    //   if (this.passwordType === 'password') {
    //     this.passwordType = '';
    //   } else {
    //     this.passwordType = 'password';
    //   }
    //   this.$nextTick(() => {
    //     this.$refs.password.focus();
    //   });
    // },
    handleLogin() {
      const that = this;
      that.loading = true;
      const encryusername = cryptojs.encrypt(this.loginForm.username);
      const encrypwd = cryptojs.encrypt(this.loginForm.password);

      axios
        .post(
          config.loginUrls.loginAesEncryptUrl,
          {
            encAccount: encryusername,
            encPassword: encrypwd,
            code: this.loginForm.identifyCode,
          },
          { withCredentials: true }
        )
        .then(function (response) {
          const code = response.data.code;
          if (code === "200") {
            setToken(response.data.data.ssotoken);
            that.$router.push({ path: "/dashboard" });
            that.loading = false;
          } else if (code === "101") {
            that.$message({
              showClose: true,
              message: "账号、密码错误！",
              type: "error",
            });
          } else if (code === "-999") {
            that.$message({
              showClose: true,
              message: "登录出错，SSO服务返回信息有误！",
              type: "error",
            });
          } else if (code === "111") {
            that.$message({
              showClose: true,
              message: "请输入正确验证码！",
              type: "error",
            });

            //重新获取验证码
            axios
              .get(config.loginUrls.getVerification, { withCredentials: true })
              .then((result) => {
                console.log(result.data.data.fourRandom);
                that.identifyCode = result.data.data.fourRandom;
              });
          }
          that.loading = false;
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
        });
    },

    changeCode() {
      //重新获取验证码
      axios
        .get(config.loginUrls.getVerification, { withCredentials: true })
        .then((result) => {
          console.log(result.data.data.fourRandom);
          this.identifyCode = result.data.data.fourRandom;
        });
    },

    changeicon() {
      this.showQrcode = true;
    },

    changeGeneral() {
      this.showQrcode = false;
    },
    getQrcode() {
      axios.get(config.platformUrls.qrcode4Face).then((resp) => {
        const result = resp.data;
        if (result.success) {
          this.qrcode = result.data.qrcode;
          this.socketObj.sid = result.data.sid;
          socketConnect(this.socketObj, this.login4face);
        }
      });
    },
    login4face(sid, account) {
      const that = this;
      that.loading = true;
      axios
        .post(config.platformUrls.login4face, {
          sid: sid,
          account: account,
        })
        .then(function (response) {
          console.log(response);
          const code = response.data.code;
          if (code === "200") {
            setToken(response.data.data.ssotoken);
            that.$router.push({ path: "/dashboard" });
            that.loading = false;
          } else {
            that.$message({
              showClose: true,
              message: response.data.message,
              type: "error",
            });
          }
          that.loading = false;
        })
        .catch(function (error) {
          console.log(error);
          that.loading = false;
        });
    },

    getIdentifyCode() {},
  },
};
</script>

<style lang='scss' >
$bg: #f7f7f7;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-page {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .header-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    height: 60.41px;
    margin: 30px 1768px auto 111px;
  }

  .header-title {
    width: 300px;
    height: 28px;
    font-size: 20px;
    font-family: Arial;
    font-weight: bold;
    line-height: 20px;
    color: #a0a0a0;
    opacity: 1;
  }

  .el-main {
    background: url(../../assets/login_images/background.png) no-repeat;
    background-size: cover;
    .main-left {
      width: 784px;
      height: 100%;
      float: left;
      position: relative;
      .welcome {
        // top: 262px;
        top: 35%;
        left: 256px;
        position: absolute;
      }
    }
    .main-right {
      width: calc(100% - 784px);
      height: 100%;
      float: right;
      position: relative;
      .login-container {
        position: absolute;
        top: 164px;
        right: 262px;
        width: 405px;
        height: 400px;
        background: #ffffff;
        box-shadow: 0px 3px 30px rgba(255, 255, 255, 0.5);
        opacity: 0.95;
        border-radius: 10px;

        .title-container {
          margin-top: 38px;
          margin-left: 40px;
          width: 200px;
          height: 42px;
          font-size: 30px;
          font-family: PingFang SC;
          font-weight: 600;
          line-height: 21px;
          color: #4a4a4a;
          opacity: 1;
          float: left;
        }
        .login-box {
          margin-top: 20px;
          .login-son-box {
            width: 325px;
            margin-left: 40px;
            border-bottom: 2px solid #e9e9f0;
            .el-form-item__label {
              margin-top: 10px;
              height: 28px;
              width: 92px;
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 400;
              line-height: 21px;
              color: #4a4a4a;
              opacity: 1;
              text-align-last: justify;
            }
            .el-input__inner {
              border: none;
            }
          }
          .identifyCode {
            width: 220px;
            .el-input__inner {
              width: 120px;
            }
          }
        }
        .idetifyImg {
          width: 100px;
          height: 40px;
        }

        .forgetpws {
          float: right;
          margin-right: 43px;
          width: 64px;
          height: 22px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 22px;
          color: #4b5ec6;
          opacity: 1;
        }
        .el-button {
          margin-left: 40px;
          margin-top: 20px;
          width: 325px;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 600;
          color: #ffffff;
          background: #4b5ec6;
        }
      }
    }
  }

  .friend-link {
    height: 50px;
    width: 520px;
    margin-top: 92px;
    float: right;
    .link-title {
      float: left;
      width: 70px;
      height: 20px;
      font-size: 14px;
      font-family: Arial;
      font-weight: 400;
      line-height: 16px;
      color: #a0a0a0;
      opacity: 1;
    }
    .link-names {
      float: right;
      display: flex;
      flex-wrap: wrap;
      padding-left: 10px;
      width: 450px;

      .one-link {
        display: inline-block;
        width: 210px;
        height: 20px;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        line-height: 16px;
        color: #a0a0a0;
        opacity: 1;
        margin-bottom: 10px;
      }
      .two-link {
        display: inline-block;
        width: 182px;
        height: 20px;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        line-height: 16px;
        color: #a0a0a0;
        opacity: 1;
        margin-bottom: 10px;
      }
      .three-link {
        display: inline-block;
        width: 196px;
        height: 20px;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        line-height: 16px;
        color: #a0a0a0;
        opacity: 1;
      }
      .four-link {
        display: inline-block;
        width: 210px;
        height: 20px;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        line-height: 16px;
        color: #a0a0a0;
        opacity: 1;
      }
      .separator {
        margin-left: 16px;
        margin-right: 15px;
        width: 0px;
        height: 12px;
        border: 1px solid #a0a0a0;
        opacity: 1;
      }
    }
  }

  .main-info {
    height: 50px;
    width: 315px;
    margin: 92px auto auto auto;

    .first-info {
      width: 196px;
      height: 20px;
      font-size: 14px;
      font-family: Arial;
      font-weight: 400;
      line-height: 16px;
      color: #a0a0a0;
      opacity: 1;
      margin-bottom: 10px;
      display: inline-block;
    }
    .two-info {
      width: 315px;
      height: 20px;
      font-size: 14px;
      font-family: Arial;
      font-weight: 400;
      line-height: 16px;
      color: #a0a0a0;
      opacity: 1;
      display: inline-block;
    }
  }

  .about-us {
    height: 88px;
    width: 300px;
    margin-top: 85px;
    .title {
      width: 72px;
      height: 25px;
      font-size: 18px;
      font-family: Arial;
      font-weight: bold;
      line-height: 21px;
      color: #707070;
      opacity: 1;
      margin-bottom: 13px;
      display: inline-block;
    }
    .tel {
      width: 300px;
      height: 20px;
      font-size: 14px;
      font-family: Arial;
      font-weight: 400;
      line-height: 16px;
      color: #a0a0a0;
      opacity: 1;
      margin-bottom: 10px;
      display: inline-block;
    }
  }

  // .login-form {
  //   position: relative;
  //   width: 520px;
  //   max-width: 100%;
  //   padding: 160px 35px 0;
  //   margin: 0 auto;
  //   overflow: hidden;
  // }

  // .tips {
  //   font-size: 14px;
  //   color: #fff;
  //   margin-bottom: 10px;

  //   span {
  //     &:first-of-type {
  //       margin-right: 16px;
  //     }
  //   }
  // }

  // .svg-container {
  //   padding: 6px 5px 6px 15px;
  //   color: $dark_gray;
  //   vertical-align: middle;
  //   width: 30px;
  //   display: inline-block;
  // }

  // .title-container {
  //   position: relative;

  //   .title {
  //     font-size: 26px;
  //     color: $light_gray;
  //     margin: 0px auto 40px auto;
  //     text-align: center;
  //     font-weight: bold;
  //   }
  // }

  // .show-pwd {
  //   position: absolute;
  //   right: 10px;
  //   top: 7px;
  //   font-size: 16px;
  //   color: $dark_gray;
  //   cursor: pointer;
  //   user-select: none;
  // }

  .qr-change {
    height: 80px;
    width: 100px;
    padding-left: 340px;
  }
}
</style>
