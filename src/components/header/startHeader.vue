<template>
    <div id="start-header">
        <div class="icon-align-justify"></div>
        <div class="font-wrapper">
            <router-link tag = "span" to="recommoned" class="music-recommoned" >推荐</router-link>
            <router-link tag = "span" to="ranking"  class="music-ranking-list">排行榜</router-link>
            <router-link tag = "span" to="personal"  class="music-personal">个人</router-link>
        </div>
        <div class="search-wrapper"><router-link tag="span" to="search" class="el-icon-search"></router-link></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            clickRecommoned: function () {
                this.$router.push('/recommoned')
            },
            clickRanking: function () {
                this.$router.push('/ranking')
            },
            clinkPersonal: function () {
                this.$router.push('/personal')
            }
        }
    }
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
#start-header{
    display:inline-block;
    width:100%;
    height:50px;
    background:#20A0FF;
    color:#E5E9F2;
    font-size:36px;
  }
.icon-align-justify {
    display:inline-block;
    color:#F9FAFC;
}
.font-wrapper{
    display:inline-block;
    margin-left:30px;
}
.music-recommoned.router-link-active, .music-ranking-list.router-link-active, .music-personal.router-link-active{
    color:#fff;
    font-size:23px;
    margin-top:5px;
}
.music-recommoned,.music-ranking-list,.music-personal{
    display:inline-block;
    font-size:21px;
    vertical-align:text-top;
    margin-top:8px;
}

.search-wrapper{
    float:right;
    height: 50px;
    margin-right: 5px;
}
.start-header > .search-wrapper > .el-icon-search {
    display:inline-block;
    color:#F9FAFC;
    line-height: 50px;   
}


</style>