<template>
    <div class="ranking" ref="rankingRef">
        <div>
           <ranking-item v-for="(item,index) in rankingList" :index="index" :RankingListname="item" :key="index" ref="rangkingItem" ></ranking-item>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
var BScroll = require('better-scroll')
var {colors} = require('./colors.config.js')
var {rankingList} = require('./ranking.config.js')
console.log(rankingList)
    export default {
        data: function () {
            return {
               rankingList: rankingList // 表示排行榜 有多少个 类
            }
        },
        components: {
            rankingItem: require('./RankingItem.vue'),
            rankingHeader: require('./RankingHeader.vue')
        },
        created: function () {
            this.$nextTick(function () {
                
                let self = this
                //设置排行榜item背景颜色
                colors.forEach(function(value,index){
                    console.log(self.$refs.rangkingItem[index])
                    self.$refs.rangkingItem[index].$el.style ="background:" + value
                })
                
                //设置滚动效果 better-scroll
                new BScroll(this.$refs.rankingRef)
                
            })
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    .ranking{
        position: absolute;
        left: 0px;
        top: 50px;
        width:100%;
        height: 640px;
        background:rgba(33,33,33,0.1);
        overflow:hidden;
        z-index:54;
    }
    .ranking > div {
        height:1100px;
    }
    
</style>