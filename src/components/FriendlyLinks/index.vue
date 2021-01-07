<template>
    <div>
        <div class="tail-head" :style="{backgroundImage: 'url('+img+')'}">
            <div style="margin-left:20%">
                <el-row :gutter="30" style="padding-top:53px">
                    <el-col :span="12">
                        <font style="color:#FFFFFF; font-size: 30px;">友情链接</font><hr style="width:5%; margin-left:0px; border:none; border-radius:2px; height:3px; background-color: #6F83FC"/>
                        <div class="link-text"><a href="http://www.szpl.gov/">深圳市规划和自然局电子政务平台</a></div>
                        <div class="link-text"><a href="http://10.253.102.69/">深圳市可视化城市空间数字平台</a></div>
                        <div class="link-text"><a href="#">广东省国土空间基础信息平台</a></div>
                        <div class="link-text"><a href="#">自然资源部国土空间基础信息平台</a></div>
                    </el-col>

                    <el-col :span="12">
                        <font style="color:#FFFFFF; font-size: 30px;">关于我们</font><hr style="width:5%; margin-left:0px; border:none; border-radius:2px; height:3px; background-color: #6F83FC"/>
                        <div class="link-text">主办：深圳市规划和自然资源局</div>
                        <div class="link-text">技术支持：深圳市规划国土房产信息中心</div>
                        <div class="link-text">热线电话：23965666</div>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
import bgImg from '@/assets/images/tail_background.png'
import friendlyLink from './index.js'

export default {
    name: 'FriendlyLink',
    mixins: [friendlyLink],
    data(){
        return{
            img:bgImg,
            links: {}
        }
    },
    created(){
        console.log(this.links)
    }
}
</script>

<style scoped>
 .tail-head{
     width: 100%;
     height: 312px;
     /* background-color: #4B5EC6; */
     background-size: cover;
     background-position: 0% 50%;
     background-size:90% 90%;
 }

 .link-text{
     color: #BEC8FF;
     margin-top: 20px;
 }
</style>
