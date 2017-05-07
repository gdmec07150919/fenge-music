<template>
    <div id="ranking-header">
        <div class="icon-align-justify"></div>
        <div class="font-wrapper">
             <span class="music-recommoned" @click="clickRecommoned">推荐</span>
             <span class="music-ranking-list"  @click="clickRanking">排行榜</span>
              <span class="music-personal"  @click="clinkPersonal">个人</span>
        </div>
        <div class="search-wrapper"><span class="el-icon-search"></span></div>
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
/*#ranking-header{
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
.music-recommoned:hover, .music-ranking-list:hover, .music-personal:hover{
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
.el-icon-search {
    display:inline-block;
    color:#F9FAFC;
    line-height: 50px;   
}
*/

</style>