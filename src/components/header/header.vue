<template>
  <div id="header">
    <el-autocomplete
      v-model="keyWord"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      ></el-autocomplete>
    <el-button type="primary" icon="search" @click="search">搜索</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'header',
    data: function () {
      return {
        mSing: Object,
        keyWord: '烟花易冷',
        url: '/search?keywords=',
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
          console.log(this.SongArray)
        })
      },
      querySearchAsync: function (queryString, cb) {
        if (!queryString) {
          return
        }
        this.$http.get(this.searchUrl).then((res, req) => {
          this.SongArray = res.body.result.songs
          var restaurants = []
          this.SongArray.forEach((v) => {
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
        })
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
            console.log(r)
            this.SongResult = r.body.result
            console.log(this.SongResult)
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
    width: 300px;
    margin: 0 auto;
  }
</style>
