<template>
    <div id="search">
            <search-header  v-on:songSearch="songSearch" :searchSuggest="searchSuggestToSon" :key="1"></search-header>
            <!-- 搜索建议 -->
            <div class="search-body" :key="2">
                <div class="search-suggest-wrapper" v-if="!showsong">
                    <h3>&nbsp&nbsp&nbsp热门搜索</h3>
                    <div class="search-suggest">
                        <el-button size="small" v-for="(item,$index) in searchSuggest" :key="item"  @click="fillSuggest($index)">{{item}}</el-button>
                    </div>
                </div>
                
                <songs v-if="showsong" :songs="songSearchData"></songs>
            </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data: function () {
            return {
               songSearchData: Object,
               searchSuggest:["鹿晗","薛之谦","张杰","逃","说散就散"],
               searchSuggestToSon: "六月的雨",
               showsong: false
            }
        },
        components: {
            searchHeader: require('./SearchHeader.vue'),
            songs: require('../songs/Song.vue')
        },
        methods: {
            songSearch: function (data) {
              console.log('songSearchApp')
              this.songSearchData = data
              this.showsong = true
            },
            fillSuggest: function (v) {
               this.searchSuggestToSon = this.searchSuggest[v]
            }
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`.
            console.log('离开Search')
            this.showsong = false
            this.songSearchData = null
            next()
          }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
@import '../../../node_modules/animate.css';
   .search-body {
        position: absolute;
        top: 50px;
        width: 100%;
        min-height: 500px;
        background: #fff;
        z-index: 55;
    }
    .search-suggest {
        margin: 5px 0 0 5px;
    }
</style>