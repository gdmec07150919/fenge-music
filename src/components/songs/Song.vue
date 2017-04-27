<template>
    <div  ref="songswrapper" class="songs-wrapper">
    <div class="song-wrapper">
        <ul>
        <li v-for="(song,index) in songs" class="song" @click="_mp3Player(index)"  :key="index">
            <img class="songimg" style="width:50px;height:50px" :src="song.picUrl">
            <span class="songname">{{song.name}}</span>
            <span @click.stop="_playControl(songs,song,index)" class="playicon" :class="{'el-icon-loading' : song.isplaying , 'el-icon-caret-right': !song.isplaying}"></span>
            <audio ref="refMp3s">
                <source type="audio/mp3">
            </audio>
        </li>
        </ul>
    </div>
    </div>
       
</template>
<script type="text/ecmascript-6">
    import BScroll from 'better-scroll' //使用BScroll库实现滚动效果
   export default {
        props:{
            songs:{}
        },
        watch:{
            songs: function () {
              
            }
        },
        methods: {
            _initBScroll: function () {
                 let songwrapper = new BScroll(this.$refs.songswrapper,{
                     click: true,
                     probeType: 3
                 })
            },
            _mp3Player: function (e) {
                console.log(e)
             /*  console.log('play')
                if(this.maudio != null){ 
                    this.maudio.pause()
                    songs.forEach(function(e) {
                    e.isplaying = false
                })
                }
                this.maudio = this.$refs.refMp3s[index]
                this.maudio.src = song.mp3Url
                this.maudio.play()
                song.isplaying = true*/
            },
            /* 音乐播放的开关控制 */
            _playControl: function (songs,song,index) {
                /* 如果点击这首歌曲时 正在播放， 设置为暂停状态 */ 
                if(this.maudio != null && song.isplaying){
                     this.maudio.pause()
                     console.log('pause')
                     song.isplaying = false
                     this.maudio = null
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
                console.log('play')
                this.maudio.play()
                song.isplaying = true
                
                
                
          /*      
                if (song.isplaying) {
                    console.log('pause')
                    this.maudio.pause()
                    song.isplaying = false
                }else{
                     如果点击播放这首歌曲，其它歌曲正在播放，需要将其它歌曲的 icon 设置为暂停状态 
                    songs.forEach(function(e) {
                     e.isplaying = false
                    })
                    if(this.maudio != null){this.maudio.pause()}
                    this.maudio = this.$refs.refMp3s[index]
                    this.maudio.src = song.mp3Url
                    console.log('play')
                    this.maudio.play()
                    song.isplaying = true
                } */
            }
        },
        data: function () {
          return {
              maudio:null
          }  
        },
        created: function () {
          this.$nextTick(function () {
              console.log('bsc')
            this._initBScroll()
          })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .songs-wrapper{
     position:absolute;
     width:230px;
     height:400px;
     top:100px;
     left:50%;
     margin-left:-130px;
     overflow:hidden;
    }
    .song {
    font-size:14px;
    height:60px;
    padding:5px;
    text-align:left;
    }
    .songimg{
        display:inline-block;
        vertical-align:middle;
        padding:5px;
    }
    .songname{
        display:inline-block;
        margin:0 10px;
        width:80px;
        text-align:top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align:middle;
    }
    .playicon {
        vertical-align:middle;
    }

</style>
