<template>
    <div ref="songwrapper" class="song-wrapper">
      <ul>
        <div v-if="showLoading" class="loader-wrapper">
          <div class="loader">
            <div class="loader-inner ball-pulse-rise">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <!-- 歌曲列表 -->
        <li v-for="(song,index) in songs" class="song" @click="_mp3Player(index)"  :key="index">
          <img @load="_loaded" class="songimg" style="width:50px;height:50px" :src="song.picUrl">
          <span class="songname">{{song.name}}</span>
          <span @click.stop="_playControl(songs,song,index,$event)" class="playicon" :class="{'el-icon-loading' : song.isplaying , 'el-icon-caret-right': !song.isplaying}"> </span>
          <a :href="song.mp3Url" class="music-download hvr-icon-down icon-down-circled" :download="song.name + '.mp3'" title="download"> </a>
          <audio ref="refMp3s">
            <source type="audio/mp3">
          </audio>
        </li>
      </ul>
  </div>

</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll' //使用BScroll库实现滚动效果
  export default {
    props: ['songs'],
    methods: {
      _loaded: function () {
        this.showLoading = false
        this._initBScroll()
      },
      _initBScroll: function () {
        if (this.playlistBScroll != null) {
          this.playlistBScroll.refresh()
          return
        }
        this.playlistBScroll = new BScroll(this.$refs.songwrapper, {
          click: true,
          resizePolling: 2
        })
      },
      _mp3Player: function (e) {
        console.log(e)
      },
      /* 音乐播放的开关控制 */
      _playControl: function (songs,song,index,event) {
        if(!event._constructed){
          //防止 触发2次
          return
        }
        this.$store.commit('setPlayList',this.songs)
        this.$store.commit('setPlaySong',index)

        /* 如果点击这首歌曲时 正在播放， 设置为暂停状态 */
        if(this.maudio != null && song.isplaying){
          this.maudio.pause()
          song.isplaying = false
          this.maudio = null
          this.$store.commit('modifyToPause')
          return
        }
        /* 如果点击播放这首歌曲，其它歌曲正在播放，需要将其它歌曲的 icon 设置为暂停状态 */
        if(this.maudio != null) {
          this.maudio.pause()
          songs.forEach(function(e) {
            e.isplaying = false
          })
        }
        /* 播放歌曲 */
        this.maudio = this.$refs.refMp3s[index]
        this.maudio.src = song.mp3Url
        this.maudio.play()
        song.isplaying = true
        //改变 store
        this.$store.commit('setPlaySong',index)
        this.$store.commit('modifyToPlay')
      },
      _downloading: function(){
      }
    },
    data: function () {
      return {
        maudio: null,
        songwrapperScroll: null,
        songss: Object,
        showLoading: true,
        playlistBScroll: null
      }
    },
    mounted: function () {
      this.$nextTick(function () {
      })
    },
    watch: {
      musicListDatas: function () {
        let self =this
        setTimeout(function () {
          if(self.playlistBScroll != null)
            self.playlistBScroll.refresh()
        }, 0);
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../node_modules/hover.css/css/hover.css";
  @import "../../common/css/fontello.css";
  @import '../../../node_modules/loaders.css';
  a {
    background:black;
  }
  .song-wrapper{
    height: 100%;
    overflow: hidden;
  }
  .song-wrapper>ul>li {
    height: 100%;
    text-align: center;
  }
  .song {
    font-size:14px;
    height:60px;
    line-height:60px;
    padding:5px;
    text-align:left;
    border-bottom: 1px solid #ccc;
  }
  .songimg{
    display:inline-block;
    vertical-align:middle;
    padding:5px;
    line-height:60px;
  }
  .songname{
    display:inline-block;
    margin:0 10px;
    width:80px;
    line-height:60px;
    vertical-align:top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align:middle;
  }
  .playicon {
    display:inline-block;
    vertical-align:middle;
    line-height:60px;
  }
  .music-download {
    display:inline-block;
    background:transparent;
    color:#000;
    height:14px;
    line-height:60px;
    margin-top:3px;
    margin-left:15px;
  }
  .loader-wrapper{
    position: absolute;
    background:#fff;
    color:red;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }
  .loader{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
  }
  .loader-inner{
    position: relative;
    width: 50%;
    height:  50%;
    margin-left: 25%;
    vertical-align: middle;
  }
  .loader-inner div{
    background-color: orange;
  }
</style>
