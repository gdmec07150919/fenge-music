<template>
    <div id = "Mfooter">
        <transition
         enter-active-class="animated tada"
         leave-active-class="animated bounceOutRight"
        >
         <div v-if="isPlay" class="portrait-wrapper">
            <!--歌曲封面 圆形图-->
             <img class="footer-circle-img" :src="_playingSong.picUrl">
         </div>
         </transition>
         <transition 
           enter-active-class="animated fadeIn"
           leave-active-class="animate fadeOut"
         >
         <span v-if="isPlay" class="footer-song-name">
             {{ _playingSong.name }}
         </span>
        </transition>
         <div class="play-wrapper">         
             <span @click="_play" class="fa-step-backward my-icon-play"></span>  <!-- 后退 -->
             <span v-if="isPlay" @click="_pause" class="fa-pause-circle my-icon-play"></span> <!-- 播放状态 -->
             <span v-if="!isPlay" @click="_play" class="fa-play-circle-o my-icon-play"></span>  <!-- 暂停状态 -->
             <span @click="_pause" class="fa-step-forward my-icon-play"></span> <!-- 前进 -->
         </div>
        <audio ref="refMp3s">
            <source type="audio/mp3">
        </audio>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data : function () {
            return {
                maudio: null
            }
        },
        methods: {
            _play: function () {
                this.$store.commit('modifyToPlay')
                        /* 播放歌曲 */
                 this.maudio = this.$refs.refMp3s
                 this.maudio.src = this._playingSong.mp3Url
                 this.maudio.play()
                 console.log(this._playingSong)
            },
            _pause: function () {
                console.log(this.$store.state.isPlay)
                this.$store.commit('modifyToPause')
                this.maudio.pause()
            }
        },
        computed: {
            isPlay : function () {
                return this.$store.state.isPlay
            },
            _playingSong: function () {
                return this.$store.state.playingSong
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/lyicon/css/lyicon.css';
@import '../../../node_modules/animate.css';
    #Mfooter {
      position: absolute;
      bottom:0px;
      left:0px;
      height:60px;
      line-height:60px;
      width:100%;
      background:#58B7FF;
      z-index: 100;
    }
    #Mfooter > .portrait-wrapper {
        float:left;
        margin-left: 40px;
        background:#ccc;
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    .footer-song-name {
        margin-left: 5px;
        color:#ff0;
    }
    #Mfooter > .play-wrapper {
      height: 60px;
      float: right;
      margin-right: 10px;
      line-height: 60px;
    }
    .play-wrapper > .fa-pause-circle,.play-wrapper > .fa-play-circle-o {
        line-height:60px;
    }
    .my-icon-play {
      font-size: 30px;
      color: #fff;
      margin-left: 5px;
    }
    .footer-circle-img {
        width:60px;
        height:60px;
        border-radius: 30px;
    }

</style>