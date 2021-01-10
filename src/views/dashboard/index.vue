<template>
  <div class="dashboard-container">
    <div>
      <transition
                  enter-active-class="animate__animated animate__fadeIn"
                  leave-active-class="animate__animated animate__fadeOut"
          >
        <div class="searchBox" v-show="showSearchBox">
          <transition
                  enter-active-class="animate__animated animate__fadeInUp"
                  leave-active-class="animate__animated animate__fadeOutDown"
          >
              <div class="fixedSearch" v-show="showFixedSearch">
                  <div style="position: absolute; width: 30%; z-index: auto">
                    <el-input
                    v-model="input"
                      class="input-search"
                      placeholder="输入关键字查询"
                      style="padding-left:20px; "
                    />
                  </div>
                  <div style="position: absolute; color:#000000; padding-top: 23px; margin-left: 30.8%; font-size:130%; z-index: 2">
                    <i class="el-icon-search" />
                  </div>
                  <div style="position: absolute; padding-top:0px; left: 53.9%; z-index: 3; width: 10%">
                    <el-button class="search-button">搜索</el-button>
                  </div>
              </div>
          </transition>
        </div>
      </transition>
    </div>

    <NavMenu />

    <br><br>
    <ContentHead is-black="true" title="数据资源中心" />
    <div>
      <el-row>
        <el-col :span="3">
          <div><br></div>
        </el-col>
        <el-col :span="5">
          <div class="data-center">
            <a :href="dashboardContainerUrls.curData">
              <img src="../../assets/images/data_first.png" alt="">
            </a>
            <h1 style="color: #4a4a4a; font-size: 40px">现状数据</h1>
            <div style="color: #a0a0a0; margin-right: 200px; font-size: 20px">
              基础地理、高分辨率遥感影像、土地利用现状、矿产资源现状等自然资源现状数据。
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="data-center">
            <a
              :href="dashboardContainerUrls.planData"
            ><img
              src="../../assets/images/data_second.png"
              alt=""
            ></a>
            <h1 style="color: #4a4a4a; font-size: 40px">规划数据</h1>
            <div style="color: #a0a0a0; margin-right: 200px; font-size: 20px">
              基本农田保护区、生态保护红线、城市开发边界等国土空间规划数据。
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="data-center">
            <a
              :href="dashboardContainerUrls.manaData"
            ><img
              src="../../assets/images/data_third.png"
              alt=""
            ></a>
            <h1 style="color: #4a4a4a; font-size: 40px">管理数据</h1>
            <div style="color: #a0a0a0; margin-right: 200px; font-size: 20px">
              不动产登记、土地审批、土地供应等自然资源管理自然资源审批和管理数据。
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="data-center">
            <a
              :href="dashboardContainerUrls.more"
            ><img
              src="../../assets/images/data_fourth.png"
              alt=""
            ></a>
            <h1 style="color: #4a4a4a; font-size: 40px; margin-left: 30px">
              更多
            </h1>
            <span
              style="color: #a0a0a0; font-size: 20px"
            >更多数据资源服务。</span>
          </div>
        </el-col>
        <el-col :span="1">
          <div><br></div>
        </el-col>
      </el-row>
    </div>

    <br><br>
    <ContentHead is-black="true" title="能力服务中心" style="margin-top: 120px" />
    <Contents />
    <Carousel />
    <DevCenter />
    <FriendlyLink />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '../../../public/config'

export default {
  name: 'Dashboard',
  data() {
    return {
      dashboardContainerUrls: config.dashboardContainerUrls,
      showFixedSearch: false,
      showSearchBox: false,
      input: '',
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
      // 监听页面滚动事件
      window.addEventListener("scroll", this.showSearch)
  },
  methods:{
     showSearch() {
          // 获取当前滚动条向下滚动的距离
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          // 当页面滚动到高度300px处时，显示搜索框
          if (scrollTop > 235) {
              this.showFixedSearch = true;
              this.showSearchBox = true;
          } else if(scrollTop) {
              this.showFixedSearch = false;
          } 
          
          if(scrollTop <= 235){
              this.showSearchBox = false
          }
      },
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px, 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

.fixedSearch {
    position: fixed;
    width: 100%;
    z-index: 999;
    // background: #f6f6f6;
    height: 120px;
    overflow: hidden;
}

.searchBox{
  position: fixed;
    width: 100%;
    z-index: 999;
  background: #ffffff;
  height: 120px;
    overflow: hidden;
    box-shadow: 0px 1px 40px 20px rgb(107, 107, 107);
}

// .input-search{
//     border-radius: 100px;
//     border:1px solid rgb(0, 0, 0);
//     font-size: 18px;
//     margin-left: 25%;
//     margin-right: 50%;

//     >>> .el-input__inner{
//         height: 72px;
//         border-radius: 100px;
//         background-color: rgba(0,0,0,0.5);
//         color: #000000;
//         border-color: transport;
//     }
// }

.data-center {
  img {
    height: 180px;
  }

  &:hover {
    transform: scale(1.03);
  }
}
</style>

<style scoped>
.input-search{
    border-radius: 100px;
    border:1px solid rgb(0, 0, 0);
    font-size: 18px;
    margin-left: 100%;
    margin-right: 50%;
}

/deep/ .el-input__inner{
        height: 65px;
        border-radius: 100px;
        /* background-color: rgba(0,0,0,0.5); */
        border: none;
        color: #000000;
        border-color: transport;
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
</style>
