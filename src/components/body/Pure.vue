<template>
<!-- 网友精选碟 (歌单) == 流行 -->
    <song-items :songs="popularData"></song-items>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import SongItems from './Song-items.vue'
export default {
    beforeCreate: function () {
        this.$http.get(this.$store.state.dataHttp + '/search?keywords=纯音乐?limit=30').then((val) => {
                var restaurants = []
                val.body.result.songs.forEach((v) => {
                  let objSong = {
                    'name': v.name, //歌曲名称
                    'picUrl': v.album.picUrl,//歌手图片
                    'popularity': v.popularity,
                    'mp3Url': v.mp3Url,
                    'isplaying': false
                  }
                  restaurants.push(objSong)
                })
                this.popularData=restaurants
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
     songItems: SongItems
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
