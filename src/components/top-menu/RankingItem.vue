<template>
    <!-- 排行榜的item -->
    <div id="Ranking-item">
        {{RankingListname}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            RankingListname: String,
            color: String
        },
        data: function () {
            return {
            }
        },
        created: function () {

        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    #Ranking-item {
        width:100%;
        height:50px;
        line-height:50px;
        text-align:center;
    }
</style>