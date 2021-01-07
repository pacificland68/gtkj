<template>
  <div class="dashboard-container">
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
      dashboardContainerUrls: config.dashboardContainerUrls
    }
  },
  computed: {
    ...mapGetters(['name'])
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

.data-center {
  img {
    height: 180px;
  }

  &:hover {
    transform: scale(1.03);
  }
}
</style>
