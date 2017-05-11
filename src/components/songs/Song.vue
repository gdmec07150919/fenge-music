<template>
    <div  ref="songswrapper" class="songs-wrapper">
    <div class="song-wrapper">
        <ul>
            <!-- 歌曲列表 -->
        <li v-for="(song,index) in songs" class="song" @click="_mp3Player(index)"  :key="index">
            <img class="songimg" style="width:50px;height:50px" :src="song.picUrl">
            <span class="songname">{{song.name}}</span>
            <span @click.stop="_playControl(songs,song,index,$event)" class="playicon" :class="{'el-icon-loading' : song.isplaying , 'el-icon-caret-right': !song.isplaying}"> </span>
            <a :href="song.mp3Url" class="music-download hvr-icon-down icon-down-circled" :download="song.name + '.mp3'" title="download"> </a>
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
        methods: {
             /* 下载  strRemoteURL:下载的链接地址  strLocalURL：下载之后的本地路径 */
            _downloadSong: function (strRemoteURL,strLocalURL) {
                let reg = /^http:\/\//
                strRemoteURL = strRemoteURL.replace(reg,"https://")
                var xmlHTTP = null
                try { 
                  xmlHTTP = new ActiveXObject("Msxml2.XMLHTTP"); 
                } catch (trymicrosoft) { 
                    try { 
                       xmlHTTP = new XMLHttpRequest(); 
                    } catch (othermicrosoft) { 
                        try { 
                            xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP"); 
                            } catch (failed) { 
                            xmlHTTP = false; 
                        } 
                    } 
                }
                
                    xmlHTTP.open("Get", strRemoteURL, false);
                    xmlHTTP.send();
                    var adodbStream = new ActiveXObject("ADODB.Stream");
                    adodbStream.Type = 1;//1=adTypeBinary 
                    adodbStream.Open();
                    adodbStream.write(xmlHTTP.responseBody);
                    adodbStream.SaveToFile(strLocalURL, 2);
                    adodbStream.Close();
                    adodbStream = null;
                    xmlHTTP = null;
            },
            _initBScroll: function () {
                if(this.songwrapperScroll == null){
                  this.songwrapperScroll = new BScroll(this.$refs.songswrapper,{
                     click: true
                 })
                }
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
            _playControl: function (songs,song,index,event) {
                if(!event._constructed){
                //防止 触发2次
                    return
                }
                /* 如果点击这首歌曲时 正在播放， 设置为暂停状态 */ 
                if(this.maudio != null && song.isplaying){
                     this.maudio.pause()
                     console.log('pause')
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
                console.log('play')
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
              songss: Object
          }  
        },
        created: function () {
          this.$nextTick(function () {
              console.log('bsc')
            this._initBScroll()
          })
        },
        watch: {
        '$route' (to, from) {
            console.log('to')
            console.log(to)
            console.log('from')
            console.log(from)
            this.songss = to
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../node_modules/hover.css/css/hover.css";
@import "../../common/css/fontello.css";
    a {
        background:black;
    }
    .songs-wrapper{
     position:absolute;
     width:250px;
     height:400px;
     left:50%;
     margin-left:-130px;
     overflow:hidden;
    }
    .song {
    font-size:14px;
    height:60px;
    line-height:60px;
    padding:5px;
    text-align:left;
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

</style>
