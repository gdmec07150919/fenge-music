<template>
<!--  <transition mode="out-in"
    enter-active-class="animated slideOutLeft"
    leave-active-class="animated slideInLeft"
    >-->
    <div id = "search">
      <s-header  v-on:songSearch="songSearch" :searchSuggest="searchSuggestToSon" :key="1" class="header"></s-header>
      <div class="hot"  v-if="!showsong">
        <!-- 搜索建议 -->
          <div class="search-suggest-wrapper">
            <h3>&nbsp&nbsp&nbsp热门搜索</h3>
            <div class="search-suggest">
              <el-button size="small" v-for="(item,$index) in searchSuggest" :key="item"  @click="fillSuggest($index)">{{item}}</el-button>
            </div>
          </div>
      </div>
      <s-song v-if="showsong" class="song"></s-song>
    </div>
<!--  </transition>-->
</template>

<script type="text/ecmascript-6">
import header from '@/components/search/SearchHeader.vue';
import song from '@/components/songs/Song.vue';
    export default {
        data: function () {
            return {
              songSearchData: Object,
              searchSuggest:["鹿晗","薛之谦","张杰","逃","说散就散"],
              searchSuggestToSon: "六月的雨",
              showsong: false,
              tansitionName: 'slide-right'
            }
        },
        components: {
            's-song': song,
            's-header': header
        }  ,
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
  @import '../../node_modules/animate.css';
  #search{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header{
    height: 50px;
  }
  .hot{
    margin: 10px;
  }
  h3 {
    margin-bottom: 3px;
  }
  .song{
    flex: 1;
  }
</style>
