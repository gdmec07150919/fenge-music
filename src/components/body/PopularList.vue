<template>
<!-- 网友精选碟 (歌单) == 流行 -->
    <music-list :musicListDatas="popularData"></music-list>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import MusicList from './musicList.vue'
export default {
    beforeCreate: function () {
        this.$http.get('/api/top/playlist?limit=30').then((val) => {
                   this.popularData = val.body.playlists
               },(error) => {
                   console.log(error)
        })
    },
    props: {
      songsListData: {}
    },
   data () {
     return {
         popularData: Object,
         playlistBScroll: null
     }
   },
   methods: {
       _initBScroll: function () {
           if ( this.playlistBScroll != null ){
               return
           }
          console.log('new BSCroll')
            this.playlistBScroll = new BScroll(this.$refs.popularsWrapper, {
              click: true
          })
       }
   },
   components: {
     musicList: MusicList
   },
  mounted:  function () {
    this.$nextTick(()=> {
      setTimeout(()=> {
        this.$store.state.loading.close()
      }, 1500)
    })
  }
}
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
</style>
