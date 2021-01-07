<template>
    <div style="height:1080px; text-align:center;">
        <ContentHead title="开发中心" isBlack="true" style="padding-top:80px"/>
        <div style="margin-left:14%; margin-right:14%;">
            <el-row>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <a :href="menuUrls.threeVisualizationDev">
                        <div class="border-style">
                            <div style="padding-left:50px; padding-right:50px">
                                <h1 style="color:#4B5EC6; font-size:40px; padding-top: 15px; margin-bottom: 15px">三维应用开发</h1>
                                <font style="color:#A0A0A0; font-size:30px; line-height: 45px;">提供给开发人员基于三维地图开发框架进行业务应用开发的API</font>
                            </div>
                        </div>
                    </a>
                </el-col>
                <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <a :href="menuUrls.threeStatisticalAnalysis">
                        <div class="border-style" style="margin-left: 10%; margin-right:20%">
                            <div style="padding-left:50px; padding-right:50px">
                                <h1 style="color:#4B5EC6; font-size:40px; padding-top: 15px; margin-bottom: 15px">三维统计分析</h1>
                                <font style="color:#A0A0A0; font-size:30px; line-height: 45px">提供给开发人员基于三维地图开发框架进行统计分析功能开发的API</font>
                            </div>
                        </div>
                    </a>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12" style="padding-top: 90px">
                    <a href="#">
                        <div class="border-style" style="margin-right: 5%">
                            <div style="padding-left:50px; padding-right:50px">
                                <h1 style="color:#4B5EC6; font-size:40px; padding-top: 15px; margin-bottom: 15px">
                                    图形二次开发
                                </h1>
                                <font style="color:#A0A0A0; font-size:30px; line-height: 45px">提供给开发人员基于二维地图开发框架进行业务应用功能开发的API</font>
                            </div>
                        </div>
                    </a>
                </el-col>
                <el-col :span="12" style="padding-top: 90px">
                    <a href="#">
                        <div class="border-style" style="margin-left: 10%">
                            <div style="padding-left:50px; padding-right:50px">
                                <h1 style="color:#4B5EC6; font-size:40px; padding-top: 15px; margin-bottom: 15px">平台相关技术文档</h1>
                                <font style="color:#A0A0A0; font-size:30px; line-height: 45px">提供给开发人员支撑业务应用系统中基础功能，如登陆、文档整合、安全、权限、工作流等功能开发的API </font>
                            </div>
                        </div>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import config from '../../../public/config'

export default {
    name: 'DevCenter',

    data(){
        return{
            menuUrls: config.menuUrls
        }
    }
}
</script>

<style scoped>
.img-style{
    background-size: cover;
      width: 100%;
      height: 100%;
}

.border-style:hover{
    transform: scale(1.03);
}

.border-style{
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #D9DCEF;
    box-shadow: 0px 5px 20px #D9DCEF;
    opacity: 1;
    border-radius: 15px;
    width: 90%;
    height: 260px;
}

@media screen and (max-width: 1200px) {
    .border-style{
        text-align: center;
        background: #FFFFFF;
        border: 1px solid #D9DCEF;
        box-shadow: 0px 5px 20px #D9DCEF;
        opacity: 1;
        border-radius: 15px;
        width: 90%;
        height: 260px;
        zoom: 50%;
    }
}

</style>
