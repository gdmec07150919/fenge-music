<template>
  <div id="app" @click="showMenuLeft = false">
      <transition
        enter-active-class="animated slideInLeft"
        leave-active-class="animated slideOutLeft"
        >
         <menu-left v-if="showMenuLeft" class="menu-left"></menu-left>
      </transition>

      <router-view class="app-router-view"></router-view>

      <mfooter class="app-footer"></mfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

export default {
  name: 'app',
  components: {
    mcssdog: require('@/components/animate/cssdog.vue'),
    mfooter: require('@/components/footer/Footer.vue'),
    startHeader: require('@/components/header/startHeader.vue'),
    menuLeft: require('./components/menuLeft.vue')
  },
  methods: {
    songSearch: function (data) {
      console.log('songSearchApp')
      this.songSearchData = data
      if(!this.showsong){
        this.showsong = true
      }
    }
  },
  data: function () {
    return {
      songSearchData: {},
      showsong: false,
      showstart: false,
      showMenuLeft: false,
      showdog:false,
      transitionName: 'fade-m'
    }
  },
  created: function () {
    this.$router.push('/home')
    this.$nextTick(function () {
        var self = this
        //将启动动画 隐藏
        setTimeout(function(){
          self.showdog = true
          self.showstart = true
          document.body.style="background:#fff"
        },0)
        //激活推荐歌单路由
    })
   //获取纯音乐 填充播放列表
          this.$http.get('/api/search?keywords=纯音乐').then((val) => {
                   console.log(val.body.result.songs)
                    var restaurants = []
                     val.body.result.songs.forEach((v) => {
                        let objSong = {
                          'name': v.name, //歌曲名称
                          'picUrl': v.album.picUrl,//歌手名
                          'popularity': v.popularity,
                          'mp3Url': v.mp3Url,
                          'isplaying': false
                        }
                        restaurants.push(objSong)
                      })
                   this.$store.commit('setPlayList',restaurants)
                   this.$store.commit('setPlaySong', 0)
               },(error) => {
                   console.log(error)
        })
  },
  computed: {
    showHead: function () {
      return this.$store.state.showHeader
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../node_modules/animate.css';
@import url('./common/stylus/mixin.styl');
  body,html {
    height:100%;
  }
  #app{
    position:relative;
    display: flex;
    height: 100%;
    margin:0 auto;
    flex-direction: column;
    overflow:hidden;
  }
  .menu-left{
    position: absolute;
    left: 0px;
    top: 0px;
  }
  #cssdog{
    position:absolute;
    top:200px;
    left:50%;
    margin-left:-75px;
  }
  .app-router-view{
    flex: 1;
    overflow: hidden;
  }
  .app-footer{
    height:  60px;
  }
  #app-header{
    height: 50px;
  }
.aaa {
   height: 50px;
  }
.bbb {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.aaaq{
  height:50px;
}
.bbbq{
  flex:1;
  overflow: hidden;
}
.ccc {
  height:50px;
}
</style>
