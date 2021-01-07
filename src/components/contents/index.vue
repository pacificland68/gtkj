<!--
 * @Author: your name
 * @Date: 2020-12-22 16:40:41
 * @LastEditTime: 2020-12-22 18:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /gtinfo-platform/src/components/contents/index.vue
-->
<template>
  <div class="contents">
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class='imagebox'>
          <a href="http://mpip.szpl.test:7001/multiPlanSynergy/model/modelAction.go?method=getModelConfigMainlist"><img src="../../assets/content1.png" /></a>
        </div> -->
        <div class="imagebox">
          <a
            v-bind:href="contentUrls.threeVisualizationService"
            target="_blank"
          >
            <el-col class="innerleft" :span="12">
              <div class="title">三维可视化服务</div>
              <div class="intro">
                提供可视化构建分析模型的能力，通过算子的可视化编排组合，快速搭建计算流程。
              </div>
            </el-col>
            <el-col class="innerright" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content3.png"
              />
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class="imagebox">
          <a
            href="http://onemap.pnr.test/plomap/dgtx/txOutAction.file?method=getspatial&txIsSaveCoords=false&isHideUpload=true&type=newCheck&myLayerTree=config-dg-onemap.xml"
            ><img src="../../assets/content2.png"
          /></a>
        </div> -->
        <div class="imagebox">
          <a
            v-bind:href="contentUrls.twoDimenIntegration"
            target="_blank"
          >
            <el-col class="innerleft" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/23wei.png"
              />
            </el-col>
            <el-col class="innerright" :span="12">
              <div class="title">二三维一体化服务</div>
              <div class="intro">
                提供二三维地图切换以及联动查看的能力。
              </div>
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class='imagebox'>
          <a href="http://mpip.szpl.test:7001/multiPlanSynergy/model/modelAction.go?method=getModelConfigMainlist"><img src="../../assets/content1.png" /></a>
        </div> -->
        <div class="imagebox">
          <a
            v-bind:href="contentUrls.verificationService"
            target="_blank"
          >
            <el-col class="innerleft" :span="12">
              <div class="title">空间业务核查服务</div>
              <div class="intro">
                提供二维空间的叠加分析、缓冲区分析等空间分析能力。
              </div>
            </el-col>
            <el-col class="innerright" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content2.png"
              />
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class="imagebox">
          <a href="http://onemap.pnr.test/plomap/view/biStatView/index.html"
            ><img src="../../assets/content4.png"
          /></a>
        </div> -->
        <div class="imagebox">
          <a v-bind:href="contentUrls.statisticService"
            target="_blank">
            <el-col class="innerleft" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content4.png"
              />
            </el-col>
            <el-col class="innerright" :span="12">
              <div class="title">业务专题统计服务</div>
              <div class="intro">
                提供对选定空间范围中的数据进行统计分析，并生成统计图表的能力。
              </div>
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class="imagebox">
          <a
            href="http://onemap.pnr.test/plomap/view/publicityView/main.html?configArr=config-publicityView.json&layerType=fdtz&screenNum=1"
            ><img src="../../assets/content5.png"
          /></a>
        </div> -->
        <div class="imagebox">
          <a
            v-bind:href="contentUrls.drawingService"
            target="_blank"
          >
            <el-col class="innerleft" :span="12">
              <div class="title">
                                CAD高清制图服务
                            </div>
              <div class="intro">
                提供对相应专题数据进行模板化快速出图的能力。
              </div>
            </el-col>
            <el-col class="innerright" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content5.png"
              />
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class="imagebox">
          <a href=""><img src="../../assets/content8.png" /></a>
        </div> -->
        <div class="imagebox">
          <a v-bind:href="contentUrls.addressMatchingService"
            target="_blank">
            <el-col class="innerleft" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content8.png"
              />
            </el-col>
            <el-col class="innerright" :span="12">
              <div class="title">地址匹配服务</div>
              <div class="intro">通过地名地址进行空间坐标的查询。</div>
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <!-- <div class="imagebox">
          <a href=""><img src="../../assets/content7.png" /></a>
        </div> -->
        <div class="imagebox">
          <a
            v-bind:href="contentUrls.modelCalculationService"
            target="_blank"
          >
            <el-col class="innerleft" :span="12">
              <div class="title">模型计算服务</div>
              <div class="intro">
                提供可视化构建分析模型的能力，通过算子的可视化编排组合，快速搭建计算流程。
              </div>
            </el-col>
            <el-col class="innerright" :span="12">
              <img
                class="contentImg"
                src="../../assets/content_images/content1.png"
              />
            </el-col>
          </a>
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
    
  </div>
</template>

<script>
import config from '../../../public/config';
export default {
  name: "Contents",
  data() {
    return {
      contentUrls:config.contentUrls
    };
  },
};
</script>
<style lang="scss" scoped>
.contents {
  background: url("../../assets/contentbgd.png");
  width: 100%;
  .el-col {
    height: 551px;
    .imagebox {
      margin: 160px auto 110px auto;
      width: 1238.83px;
      //height: 551px;
      .innerleft {
        .contentImg {
          float: left;
        }
        .title {
          float: left;
          width: 327px;
          height: 56px;
          font-size: 40px;
          font-family: Arial;
          font-weight: bold;
          line-height: 45px;
          color: #4b5ec6;
          opacity: 1;
          margin-bottom: 20px;
        }
        .intro {
          float: left;
          width: 585px;
          height: 163px;
          font-size: 35px;
          font-family: Arial;
          font-weight: 400;
          line-height: 40px;
          color: #707070;
          opacity: 1;
        }
      }
      .innerright {
        padding-left: 60px;
        .contentImg {
          float: right;
        }
        .title {
          width: 320px;
          height: 56px;
          font-size: 40px;
          font-family: Arial;
          font-weight: bold;
          line-height: 45px;
          color: #4b5ec6;
          opacity: 1;
          margin-bottom: 20px;
        }
        .intro {
          width: 585px;
          height: 163px;
          font-size: 35px;
          font-family: Arial;
          font-weight: 400;
          line-height: 40px;
          color: #707070;
          opacity: 1;
        }
      }
    }
  }
}
</style>
