<template>
<!-- 网友精选碟 (歌单) == 流行 -->
<div class="populars-wrapper"  ref="popularsWrapper">
    <div class="popular-inner">
    <ul>
     <li class="popular" v-for="playlist in popularData" :key="playlist.id">
            <img :src="playlist.coverImgUrl" style="width:100px;height:100px;"/>
            <div class="text-wrapper">
                <h3>{{playlist.name}}</h3>
            </div>
     </li>
    </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
    beforeCreate: function () {
        console.log('beforecreate')
        this.$http.get('/api/top/playlist?limit=30').then((val) => {
                   this.popularData = val.body.playlists
               },(error) => {
                   console.log(error)
        })
      
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
   created: function() {
       this.$nextTick(function () {
          let self = this
          setTimeout(function () {
              self._initBScroll()
          },100)
       })

   }
}
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
    .populars-wrapper {
        width:360px;
        margin: 0 auto;
        overflow:hidden;
        max-height: 640px;
    }

    .popular-inner {
        width:100%;
    }
    .popular-inner > ul {
        width:100%;
        height:1630px;
        display:flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    .populars-wrapper  .popular {
        width: 28%;
        margin: 10px 5px 5px 5px;
    }
    .populars-wrapper   .text-wrapper {
        width:100px;
    }
    .populars-wrapper  h3 {
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
    }
</style>