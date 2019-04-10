<template>
    <div class="Box">
        <ul id="example">
            <li class="TH">
                <div class="k"></div>
                <div class="name">食品名称</div>
                <div class="jieshao">食品介绍</div>
                <div class="pingfen">评分</div>
                <div class="caozuo">操作</div>
            </li>
            <li class="TC" @click="showCont">
                <i class="iconfont icon-tubiao_jiyao-xiangyou padding-21 k k1"></i>
                <div class="name name1">披萨</div>
                <div class="jieshao jieshao1">现货</div>
                <div class="pingfen pingfen1">4.1</div>
                <div class="caozuo caozuo1">
                    <input class="BT1" type="button" value="编辑">
                    <input class="BT2" type="button" value="删除">
                    <div class="zzc"></div>
                </div>
            </li>
            <div class="detail" v-if="show">
                <div class="k2"></div>
                <ul class="ul99a9bf">
                    <li>食品名称</li>
                    <li>食品ID</li>
                    <li>库存</li>
                    <li>食品评分</li>
                    <li>月销量</li>
                </ul>
                <ul class="ul000000">
                    <li>披萨</li>
                    <li>10010</li>
                    <li>现货</li>
                    <li>4.6</li>
                    <li>1008</li>
                </ul>
                <ul class="ul99a9bf">
                    <li>餐馆名称</li>
                    <li>餐馆ID</li>
                    <li>餐馆地址</li>
                    <li>食品分类</li>
                </ul>
                <ul class="ul000000">
                    <li></li>
                    <li>4</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </ul>
    </div>
</template>

<script>
import '../assets/font/iconfont.css'
// import $ from 'jquery'
export default {
     data(){
         return{
             show : false
         }
        
    },
     methods : {
         showCont : function () { this.show= ! this.show }
    }
}

</script>

<style scoped>
/* 表头 */
.Box{
    /* min-width: 423px; */
}
.TH{
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    background: #EEF1F6;
    color: #1f2d3d;
    font-weight: bold;
    border: 1px solid #dfe6ec;
}
.TC{
    display: flex;
    border: 1px solid #dfe6ec;
    border-top: 0px;
    /* background: white; */
}
.TC:hover{
    background-color: #EEF1F6;
}
.k{
    width: 49px;
    /* width: 10%; */
    height: 39px;
}
.name{
    /* width: 314px; */
    width: 25%;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
}
.jieshao{
    /* width: 296px; */
    width: 25%;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
}
.pingfen{
    /* width: 296px; */
    width: 25%;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
}
.caozuo{
    /* width: 141px; */
    width: 25%;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
}

.k1{
    display: flex;
    justify-content: center;
    align-items: center;
}
.name1{
    line-height: 39px;
    font-size: 14px;
}
.jieshao1{
    line-height: 39px;
    font-size: 14px;
}
.pingfen1{
    line-height: 39px;
    font-size: 14px;
}
.caozuo1{
    line-height: 39px;
    font-size: 14px;
}
.iconfont{
    color: #706666;
    font-size: 15px;
}

/* 按钮 */
.BT1{
    background:white;
    width:46px;
    height:30px;
    border:1px solid #c4c4c4;
    border-radius: 4px;
    font-size: 12px;
    color: #1f2d3d;
    text-align: center;
    cursor: pointer;
    margin-right: 14px;
}
.BT1:hover{
    border:1px solid #20A0FF;
    color: #20A0FF;
}
.BT2{
    background:#FF4949;
    width:46px;
    height:30px;
    border:1px solid #FF4949;
    border-radius: 4px;
    font-size: 12px;
    color: white;
    text-align: center;
    cursor: pointer;
}
.BT2:hover{
    background: rgba(255, 73, 73, .7);
    border:1px solid rgba(255, 73, 73, .7);
}

/* 隐藏详情 */
.detail{
    width: 100%;
    height: 220px;
    background: #fbfdff;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.k2{
    width: 49px;
    height: 220px;
}
.ul99a9bf{
    width: 10%;
    height: 180px;
    font-size: 14px;
    color: #99a9bf;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.ul000000{
    width: 40%;
    height: 180px;
    font-size: 14px;
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>
