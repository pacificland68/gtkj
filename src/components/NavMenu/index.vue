<template>
  <div class="h">
    <div class="navBg" :style="{backgroundImage: 'url(' + img + ')'}">
      <div class="grad">
        <!-- navigation menu -->
        <div>
          <el-row>
            <el-col :span="6" class="col-menu">
              <!-- <div class="col-menu"> -->
              <font class="title">深圳市国土空间基础信息平台</font>
              <!-- </div> -->
            </el-col>
            <el-col :span="14">
              <div class="menuu">
                <el-menu style="margin-left: 50px" text-color="#D3D3D3" active-text-color="#FFFFFF" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-menu-item index="1" style="color:#D3D3D3; font-size:20px; padding-right:6%" class="menu_title">首页</el-menu-item>
                  <el-submenu index="2" style=" padding-right:3%;">
                    <!-- <el-submenu index="2" style="margin-left: 3%"> -->
                    <template slot="title" style="color:#D3D3D3;">数据资源中心</template>
                    <el-menu-item index="2-1" style="color: black"><a :href="url_data_resource" target="_blank">数据资源目录</a></el-menu-item>
                    <el-menu-item index="2-2" style="color: black"><a :href="data_resource" target="_blank">资源目录编目</a></el-menu-item>
                    <!-- <el-menu-item index="2-8" style="color: black"><a :href="url">数据资源共享数据</a></el-menu-item> -->
                  </el-submenu>
                  <el-submenu index="3" style=" padding-right:3%">
                    <!-- <el-submenu index="3" style="margin-left: 3%"> -->
                    <template slot="title">能力服务中心</template>
                    <el-menu-item index="3-1" style="color: black"><a :href="threeVisualizationService" target="_blank">三维可视化服务</a></el-menu-item>
                    <el-menu-item index="3-2" style="color: black"><a :href="menuUrls.integrated" target="_blank">二三维一体化服务</a></el-menu-item>
                    <el-menu-item index="3-3" style="color: black"><a :href="menuUrls.verificationService" target="_blank">空间业务核查服务</a></el-menu-item>
                    <el-menu-item index="3-4" style="color: black"><a :href="menuUrls.BusinessStatisticalService" target="_blank">业务专题统计服务</a></el-menu-item>
                    <el-menu-item index="3-5" style="color: black"><a :href="menuUrls.build" target="_blank">CAD高清制图服务</a></el-menu-item>
                    <el-menu-item index="3-6" style="color: black">地址匹配服务</el-menu-item>
                    <el-menu-item index="3-7" style="color: black"><a :href="menuUrls.modelCalculateService" target="_blank">模型计算服务</a></el-menu-item>
                  </el-submenu>
                  <el-submenu index="4" style=" padding-right:3%">
                    <!-- <el-submenu index="4" style="margin-left: 3%"> -->
                    <template slot="title">应用中心</template>
                    <el-menu-item index="4-1" style="color: black"><a :href="menuUrls.egov" target="_blank">电子政务平台</a></el-menu-item>
                    <el-menu-item index="4-2" style="color: black"><a :href="onemap" target="_blank">国土空间规划“一张图”实施监督信息系统</a></el-menu-item>
                    <el-menu-item index="4-3" style="color: black"><a :href="dghy" target="_blank">“多规合一”信息平台</a></el-menu-item>
                    <el-menu-item index="4-4" style="color: black">CIM</el-menu-item>
                  </el-submenu>
                  <el-submenu index="5" style="color:#D3D3D3; font-size:20px; padding-right:3%; ">
                    <!-- <el-submenu index="5" style="color:#D3D3D3; font-size:20px; margin-left: 3%"> -->
                    <template slot="title">开发中心</template>
                    <el-menu-item index="5-1" style="color: black"><a :href="menuUrls.threeVisualizationDev" target="_blank">三维应用开发</a></el-menu-item>
                    <el-menu-item index="5-2" style="color: black"><a :href="menuUrls.threeStatisticalAnalysis" target="_blank">三维统计分析API</a></el-menu-item>
                    <el-submenu index="5-3">
                      <template slot="title"><font style="color: black">二维图形开发API</font></template>
                      <el-menu-item index="5-3-1" style="color: black"><a :href="menuUrls.sdeUrl" target="_blank">图形二次开发手册（sde组件）</a></el-menu-item>
                      <el-menu-item index="5-3-2" style="color: black"><a :href="menuUrls.picAppUrl" target="_blank">业务嵌套图形应用</a></el-menu-item>
                      <el-menu-item index="5-3-3" style="color: black"><a :href="menuUrls.plomapUrl" target="_blank">图形二次开发手册（plomap）</a></el-menu-item>
                    </el-submenu>
                    <el-submenu index="5-4">
                      <template slot="title"><font style="color: black">通用集成文档</font></template>
                      <el-menu-item index="5-4-1" style="color: black"><a :href="menuUrls.login" target="_blank">统一登录</a></el-menu-item>
                      <el-menu-item index="5-4-1" style="color: black"><a :href="menuUrls.faceDocument" target="_blank">人脸识别</a></el-menu-item>
                      <el-menu-item index="5-4-2" style="color: black"><a :href="menuUrls.security" target="_blank">安全管理(CA认证)</a></el-menu-item>
                      <el-menu-item index="5-4-3" style="color: black"><a :href="menuUrls.rightMicroService" target="_blank">统一权限</a></el-menu-item>
                      <el-menu-item index="5-4-4" style="color: black"><a :href="menuUrls.workflow" target="_blank">工作流</a></el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="6" style="color:#D3D3D3; font-size: 20px; padding-left:0px">互动资讯</el-menu-item>
                </el-menu>
              </div>
            </el-col>
            <el-col :span="3" class="col-menu3">
              <!-- <div class="col-menu3"> -->
              <a href="#"><img :src="messageImg" style="width: 16px; height: 16px"></a>
              <a href="#"><img :src="profileImg" style="width: 16px; height: 16px; margin-left: 20px"></a>
              <a href=""><img :src="logoutImg" style="width: 16px; height: 16px; margin-left: 20px" @click="handleLogout"></a>
            </el-col>
            <!-- </div> -->
          </el-row>
        </div>
      </div>

      <!-- input -->
      <div style="text-align:center;">
        <div style="height:551px; position:relative;">
          <div style="position: absolute; margin-top:220px; left:35%; right:35%; z-index: auto">
            <el-input
              v-model="input"
              class="input-search"
              placeholder="输入关键字查询"
            />
          </div>
          <div style="position: absolute; padding-top:245px; left: 36%; color:#FFFFFF; font-size:130%; z-index: 2">
            <i class="el-icon-search" />
          </div>
          <div style="position: absolute; padding-top:224px; left: 56.8%; right:10%; z-index: 3; width: 10%">
            <el-button class="search-button">搜索</el-button>
          </div>

        </div>
      </div>

      <!-- messages -->
      <!-- <div class="mb">
        <font class="message-text">深圳市规划和自然资源局坪山管理局开展2020年地质灾害防治知识宣传活动 2020-08-20 <a href="#" style="padding-left:20px">了解更多</a></font>
      </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import bgImg from '@/assets/images/nav_background.png'
import message from '@/assets/images/message.png'
import profile from '@/assets/images/profile.png'
import logoutImg from '@/assets/images/logout.png'
import { removeToken, getToken } from '@/utils/auth'
import config from '../../../public/config'

export default {
  name: 'NavMenu',
  data() {
    return {
      img: bgImg,
      messageImg: message,
      profileImg: profile,
      logoutImg: logoutImg,
      input: '',

      activeIndex: '1',
      url: 'http://192.168.102.92:7080/szgtkj/#/data_source_meta?token=' + getToken(),
      url_data_resource: config.menuUrls.url_data_resource,
      dghy: "http://mpip.szpl.gov/transfer.go?method=toIndex&ssotoken=",
      onemap: "http://gtkj.pnr.sz/index.jsp?ssotoken=",
      threeVisualizationService: "http://68.68.12.64/suplicThree/?ssotoken=",
      data_resource: "http://szgtkjdata.pnr.sz:9101/szgtkjdata/redirect/sso?target=1http://datacatalog.pnr.sz:8101/datacatalog/#/transfer?pathName=data_source_meta_data&token=",

      menuUrls: config.menuUrls
    }
  },
  created(){
      this.url_data_resource += getToken()
      this.dghy += getToken()
      this.onemap += getToken()
      this.threeVisualizationService += getToken()
      this.data_resource += getToken()+ "1"
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },

    handleLogout() {
      axios.post(config.loginUrls.logoutUrl)
      removeToken()
    },

    jumpTo() {
      var token = getToken()
      this.$router.push({ path: 'http://192.168.102.92:7080/szgtkj/#/data_source_meta?token=' + token })
    },

    removeT() {
      axios.post('http://gtkjpb.msgate.pnr.sz/logout')
    }
  }
}
</script>

<style scoped>
    .body{
        font-family: Arial;
    }

    .navBg{
        /* position: absolute; */
        top: 0;
        left: 0;
        right:0;
        /* width: 100%; */
        height: 100%;
        /* z-index: -1; */
        background-size: cover;
        background-position: 0% 50%;
        /* opacity:0.9; */;
        text-align:center;
        /* background: linear-gradient(180deg, #4B5EC6 0%, rgba(38, 47, 99, 0) 100%) */
    }

    .grad{
        height: 75px;
        background: linear-gradient(180deg, #4B5EC6 0%, rgba(38, 47, 99, 0) 100%);
        opacity: 1;
    }

    .title{
        color: white;
        margin-top: 20px;
        font-size: 20px;
    }

    .el-menu.el-menu--horizontal {
        border-bottom: transparent;
        background-color: transparent;
    }

    .el-menu{
        background-color: transparent;
    }

    .col-menu{
        display:flex;
        padding-left: 5%;
        float: left;
        /* justify-content: center;
        align-content: center; */
    }

    
    @media screen and (max-width: 1300px) {
        .col-menu{
            display:flex;
            padding-left: 5%;
            float: left;
            zoom: 90%;
        }
    }
    @media screen and (max-width: 1300px) {
        .menuu{
            padding-left: 4%;
            zoom: 90%;
        }
    }

    @media screen and (max-width: 1100px) {
        .col-menu{
            display:flex;
            padding-left: 5%;
            float: left;
            zoom: 80%;
        }
    }

    @media screen and (max-width: 1100px) {
        .menuu{
            padding-left: 5%;
            zoom: 80%;
        }
    }

    @media screen and (max-width: 960px) {
        .col-menu{
            display:flex;
            padding-left: 5%;
            float: left;
            zoom: 70%;
        }
    }

    @media screen and (max-width: 960px) {
        .menuu{
            padding-left: 5%;
            zoom: 70%;
        }
    }

    .el-menu-item:hover{
        /* border-bottom:transparent solid 2px !important; */
        /* background-color: transparent !important; */
        color: #FFFFFF !important;
        transform: scale(1.03);
        font-weight: bold;
    }

    .col-menu3{
        /* display: flex; */
        /* float: left; */
        padding-top: 1%;
        /* margin-left: 6%;
        margin-right: 6% */
        /* width: 10%; */
        /* text-align: right */
    }

    .input-search{
        /* padding-left: 50%;
        padding-top:10% */
        /* padding-top:10%;
        padding-left: 35%; */
        /* padding-right: 35%; */
        /* width: 100%; */
        border-radius: 100px;
        border:1px solid white;
        font-size: 18px;
    }

    >>> .el-input__inner{
        padding-left: 50px;
    }

    .el-input >>> .el-input__inner{
        height: 72px;
        border-radius: 100px;
        background-color: rgba(0,0,0,0.5);
        color: #FFFFFF;
        border-color: white;
    }

    .search-button{
        height: 65px;
        width: 60%;
        border-radius: 100px;
        background-color: #4B5EC6;
        color: #FFFFFF;
        border:none;
        font-size: 100%
    }

    .message{
        height: 34px;
        background-color:rgba(0, 0, 0, 0.2);
        margin-left: 600px;
        /* align-content: center;
        text-align: center; */
        /* display: block */
        /* display: flex;
    align-items: center; */
    }

    .mb{
        width: 1920px;
        height: 34px;
        background-color:rgba(0, 0, 0, 0.2);
        display:table-cell; vertical-align:middle;
        /* margin-left:40% */
    }

    .message-text{
        font-size: 16px;
        font-family: Arial;
        font-weight: 400;
        line-height: 18px;
        color: #FFFFFF;
        opacity: 1;
        /* width:100%; height:auto; float:left; display:inline */
    }

    .el-menu-item.is-active{
        background-color: transparent;
        border-bottom: transparent;
        color: #000000;
    }

    .menuu >>> .el-menu-item:hover{
        color:#FFFFFF !important;
        transform: scale(1.03);
        font-weight: bold;
    }

    .menuu >>> .el-submenu__title{
        font-size: 20px;
        color: #000000;
        padding-left: 0px;
    }

    .el-menu-item:hover {
        background-color: transparent !important;
        color: #4B5EC6 !important;
        transform: scale(1.03);
        font-weight: bold;
    }

    .el-menu-item.is-active{
        color: #000000;
    }

    .el-menu.is-opened{
        background-color: transparent;
        border-bottom: transparent;
    }

    .el-menu-item.is-active {
        background-color: transparent !important;
    }

    .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom-color: transparent;
        border-bottom: none
    }

    .menuu >>> .el-menu--horizontal .el-submenu.is-active .el-submenu__title{
        border-bottom-color: transparent !important;
    }

    .menuu >>> .el-menu--horizontal>.el-submenu .el_submenu__title:hover{
        transform: scale(1.03) !important
    }

    .menuu >>> .el-menu--horizontal .el-menu-item.is-active{
        border-bottom-color: transparent !important;
    }

    .h{
        height: 660px;
        min-width: 100px;
        /* margin:0 auto;
        text-align:center; */
    }

    .menuu >>> .el-menu--popup{
        width: 172px;
    }

    .el-menu--horizontal .el-menu .el-menu-item{
        background-color: transparent !important;
        transform: scale(1.03) !important;
    }

    /* .menuu >>> .el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
        min-width: 120px !important;
    } */

    /* .menuu{
        float: left;
        margin-left: 3%;
        width: 60%;
    } */
</style>
