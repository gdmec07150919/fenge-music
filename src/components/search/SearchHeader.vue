<template>
  <div class="header">
   <div class="search-back" @click="showHeader">
       <router-link to="/home/popular" tag="span" class="el-icon-arrow-left"></router-link>
    </div>
    <el-autocomplete
      v-model="searchSuggest"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      ></el-autocomplete>
    <el-button type="primary" icon="search" @click="search">搜索</el-button>

    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'header',
    props: ['searchSuggest'], //搜索建议
    data: function () {
      return {
        mSing: Object,
        keyWord: '六月的雨',
        url: '/api/search?keywords=',
        state4: '',
        SongArray: [],
        searchMoHu: Array,
        timeout: null
      }
    },
    methods: {
      search: function () {
        console.log('cccc')
        this.$http.get(this.searchUrl).then((res, req) => {
          this.SongArray = res.body.result.songs
          console.log('songArray')
          console.log(res)
          var restaurants = []
          this.SongArray.forEach((v) => {
            let objSong = {
              'name': v.name, //歌曲名称
              'picUrl': v.album.picUrl,//歌手名
              'popularity': v.popularity,
              'mp3Url': v.mp3Url,
              'isplaying': false
            }
            restaurants.push(objSong)
          })
          this.$emit('songSearch',restaurants)//调用父组件监听的方法
      //    this.$router.push({name:'songs', params: { songArray: restaurants }})
          this.$store.commit('setPlayList',restaurants) //改变状态管理
          restaurants = null
        })
      },
      resolveReapt: function () {
          var result = [], hash = {};
          for (var i = 0, elem; (elem = arr[i]) != null; i++) {
              if (!hash[elem]) {
                  result.push(elem);
                  hash[elem] = true;
              }
          }
          return result;
      },
      //搜索网易云服务端的相关歌曲，自动提示歌曲名称
      querySearchAsync: function (queryString, cb) {
     /*   if (!queryString) {
          return
        }
        this.$http.get(this.searchUrl).then((res, req) => {
          this.SongArray = res.body.result.songs
          console.log('songArray')
          console.log(this.SongArray)
          var restaurants = []
          this.SongArray.forEach((v) => {
            console.log(v.name)
            let objSong = {
              'value': v.name
            }
            restaurants.push(objSong)
          })
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
          clearTimeout(this.timeout)
          this.timeout = setTimeout(() => {
            cb(results)
          }, 3000 * Math.random())
        })*/
      },
      handleSelect: function (item) {
        console.log(item)
      },
      createStateFilter: function (queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      showHeader: function () {
          this.$store.commit('setShowHeader',true)
      }
    },
    created: function () {
      this.$nextTick(
        function () {
          this.$http.get().then((r) => {

          })
        }
      )
    },
    computed: {
      searchUrl: function () {
        return this.url + this.searchSuggest
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin.styl";
  .header{
   display:flex;
   flex-direction: row;
   justify-content: space-between;
   rem-height(50);
   width: 100%;
   background:#20A0FF;
   line-height:50px;
   z-index: 50;
  }
  .header > .search-back {
    display:inline-block;

  }
  .header > div.search-back > span.el-icon-arrow-left {
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
  }
</style>
