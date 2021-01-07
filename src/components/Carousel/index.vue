<template>
    <div class="f-style">
        <ContentHead title="应用中心" style="padding-top: 110px"/>
        <div style="padding-left:10%; padding-right:10%; padding-bottom:20%; padding-top: 30px">
        <el-carousel :interval="4000" type="card" height="337px" :autoplay="false" @change="carouselChange">
            <el-carousel-item >
                <!-- <div :style="{backgroundImage: 'url('+img1+')'}"></div> -->
                <!-- <a href="http://www.szpl.gov"><img src="../../assets/images/app_center1.png" class="img-style"/></a> -->
                <div class="p1">
                    <div class="p2" :style="{opacity:(index==0? '1':'.3')}">
                        <a href="http://www.szpl.gov" target="_blank"><img src="../../assets/images/ac1.png" class="img-style"/></a><br>
                        <div style="margin-top:40px; font-size:35px; font-family: Arial; font-weight:550; line-height: 40px">电子政务平台</div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item >
                <!-- <div :style="{backgroundImage: 'url('+img1+')'}"></div> -->
                <!-- <a href="http://gtkj.szpl.test:7010/transfer.go?method=toIndex"><img src="../../assets/images/app_center2.png" class="img-style"/></a> -->
                <div class="p1" >
                    <div class="p2" :style="{opacity:(index==1? '1':'.3')}">
                        <a :href="onemap" target="_blank"><img src="../../assets/images/ac2.png" class="img-style"/></a><br>
                    <div style="margin-top:40px; font-size:25px; font-family: Arial; font-weight:550; line-height: 40px">国土空间规划“一张图” <br>实施监督信息系统</div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item >
                <!-- <div :style="{backgroundImage: 'url('+img1+')'}"></div> -->
                <!-- <a href="http://mpip.szpl.gov/transfer.go?method=toIndex"><img src="../../assets/images/app_center3.png" class="img-style"/></a> -->
                <div class="p1">
                    <div class="p2" :style="{opacity:(index==2? '1':'.3')}">
                        <a :href='mpip' target="_blank"><img src="../../assets/images/ac3.png" class="img-style"/></a><br>
                    <div style="margin-top:40px; font-size:25px; font-family: Arial; font-weight:550; line-height: 40px">多规合一信息平台</div>
                    </div>
                </div>
            </el-carousel-item>
            <el-carousel-item >
                <!-- <div :style="{backgroundImage: 'url('+img1+')'}"></div> -->
                <!-- <img src="../../assets/images/app_center4.png" class="img-style"/> -->
                <div class="p1">
                    <div class="p2"  :style="{opacity:(index==3? '1':'.3')}">
                        <img src="../../assets/images/ac4.png" class="img-style"/><br>
                    <div style="margin-top:40px; font-size:25px; font-family: Arial; font-weight:550; line-height: 40px">CIM</div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        </div>
    </div>
</template>

<script>
import img1 from '@/assets/images/app_center1.png'
import img2 from '@/assets/images/app_center2.png'
import img3 from '@/assets/images/app_center3.png'
import img4 from '@/assets/images/app_center4.png'
import bgimg from '@/assets/images/acbg.png'
import { getToken } from '@/utils/auth'

export default {
    name:'Carousel',
    data(){
        return{
            bgimg: bgimg,
            index: 0,
            ssotoken: "",
            mpip: "http://mpip.szpl.gov/transfer.go?method=toIndex&ssotoken=",
            onemap: "http://gtkj.pnr.sz/index.jsp?ssotoken="
        }
    },
    methods:{
        carouselChange(val){
            this.index = val
        }
    },
    created(){
        this.ssotoken = getToken()
        this.mpip = this.mpip + getToken()
        this.onemap = this.onemap + getToken();
    }
}
</script>

<style scoped>
  .el-carousel__item .p1 {
    padding-right: 10%;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: transparent;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: transparent;
  }

  .el-carousel__item:nth-child(2n+1) >>> .p2{
      opacity: 1;
  }

  .el-carousel__item{
      display: table-cell;
      text-align: center;
  }
  .f-style >>> .el-carousel__mask{
      background-color: transparent;
      /* width: 50%; */
  }

  .f-style{
      /* border-style: solid;
      border-width: 5px; */
      height:950px; 
        background: linear-gradient(90deg, #4B5EC6 0%, #2A3569 100%);
        padding-bottom: 140px
  }

  .img-style{
      background-size: cover;
      width: 180px;
      height: 180px;
      padding-top: 25px;
      margin-right: 9%;
  }

  .f-style >>> .el-carousel__item--card .is-active{
      opacity: .3;
  }

   /* .f-style >>> .el-carousel__item--card{
       opacity: .3;
   } */

   .f-style >>> .el-carousel__item .is-active .el-carousel__item--card .is-in-stage{
       opacity: .3;
   }

    .f-style >>> .el-carousel__item .is-active .el-carousel__item--card .el-carousel__item{
        opacity: .3;
    }

    .p1{
        /* width: 50%;
        height: 95%;
        margin-left: 25%;
        box-shadow: black 0px 0px 10px;
        background-color:rgba(255, 255, 255, 0.3);
        border-radius: 15px;
        text-align: center; */
        width: 70%;
        height: 100%;
        margin-left: 20%;
    }

    .p2{
        box-shadow:rgba(255, 255, 255, 0.7) 0px 0px 10px;
        width: 95%;
        height: 95%;
        margin: 9px 9px 9px 9px;
        background: #FFFFFF;
        opacity: 0.3;
        border-radius: 15px;
    }

    .f-style >>>  .el-carousel__indicator .el-carousel__indicator--horizontal .is-active .el-carousel__button{
        width: 47px;
        height: 17px;
    }

    .f-style >>>  .el-carousel__indicator.is-active button{
        width: 47px;
        height: 17px;
        background: #6F83FC;
        opacity: 1;
        border-radius: 9px;
        margin-top: 100px
    }

    .f-style >>> .el-carousel__indicator button{
        width: 17px;
        height: 17px;
        background: #FFFFFF;
        opacity: 1;
        border-radius: 9px;
        margin-top: 100px
    }

</style>