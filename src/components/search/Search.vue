<template>
    <div id="search">
        <search-header  v-on:songSearch="songSearch"></search-header>
        <div class="search-body">
            <songs v-if="showsong" :songs="songSearchData"></songs>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data: function () {
            return {
               songSearchData: Object,
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
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
   .search-body {
        position: absolute;
        top: 50px;
        width: 100%;
        min-height: 640px;
        background: #fff;
    }
</style>