<template>
  <div>
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
      ></el-autocomplete>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        restaurants: [],
        state4: '烟花易冷',
        timeout: null,
        url: '/search?keywords='
      }
    },
    methods: {
      loadAll: function () {
        this.aaa()
      },
      querySearchAsync: function (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            cb(results)
          }, 3000 * Math.random())
      },
      createStateFilter: function (queryString) {
        return (state) => {
          console.log('state ')
          console.log(state)
          console.log('query ')
          console.log(queryString)
          return (state.name.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect: function (item) {
        console.log(item)
      },
      aaa: function (queryString) {
        this.$http.get(this.url + this.state4).then((res, req) => {
          this.restaurants = res.body.result.songs
        console.log(this.restaurants)
      })
  }
  },
  mounted: function () {
    this.loadAll()
  }
  }
</script>
