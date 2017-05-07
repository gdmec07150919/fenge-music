<template>
  <div id="header">
    <div class="search-back" >
       <router-link to="/recommoned" tag="span" class="el-icon-arrow-left"></router-link> <!-- 返回 -->
    </div> 
    <el-autocomplete
      v-model="keyWord"
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
        return this.url + this.keyWord
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header{
   display:inline-block;
   position: absolute;
   top:0px;
   width:100%;
   height:50px;
   background:#20A0FF;
   text-align:center;
   line-height:50px;
   z-index: 50;
  }
  #header > .search-back {
    display:inline-block;
    float:left;
  }
  #header > div.search-back > span.el-icon-arrow-left {
    font-size: 18px;
    color: #fff;
    margin-left: 10px;
  }
</style>
