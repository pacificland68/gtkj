<template>
    <div style="padding-bottom:120px; padding-top:40px">
        <div class="title-style">
            <el-row>
                <el-col :span="24">
                    <div v-if="isBlack">
                        <h1 style="color:#4A4A4A; font-size: 60px">{{ title }}</h1>
                    </div>
                    <div v-else>
                        <h1 style="color:#FFFFFF; font-size: 60px">{{ title }}</h1>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div style="padding-top: 35px">
            <el-row>
                <el-col :span="24" >
                    <div style="position: absolute;width:100%;z-index: 2">
                        <hr style="border:none; width:140px; border-radius:2px; border: 2.5px solid #4B5EC6; background-color: #4B5EC6;"/>
                    </div>
                    <div style="position: absolute;width:100%;z-index: 1">
                        <hr style=" border:none; width:876px; border-radius:2px; height:1px; background-color: #ADADAD; opacity: 0.5; margin-top: 10px;"/>
                    </div>
                    <!-- <div style="position: absolute;width:100%;">
                        <hr style="margin-left:52%; margin-right:28%; border:none; width:365px; border-radius:2px; height:1px; background-color: #ADADAD; opacity: 0.5"/>
                    </div> -->
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentHead',
    props:{
        title: String,
        isBlack: String
    },

}
</script>

<style scoped>
    .title-style{
        width: 100%;
        height: 100px;
        /* padding-left: 45%; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hr-style{
        width: 100%;
        padding-left: 30%;
        padding-right: 30%;
        background-color: #ADADAD;
    }
</style>
