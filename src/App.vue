<template>
  <div id="app" @click="hiddeMenuLeft">
      <div style="height:50px;width:100%;position:absolute;background:#20A0FF;top:0px;"></div>
        <div style="position:relative;height:100%;height:100%;display:flex;overflow: hidden;" >
          <transition :name="transitionName">
            <router-view class="app-router-view"></router-view>
          </transition>
        </div>
      <mfooter class="app-footer"></mfooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

export default {
  name: 'app',
  components: {
    /*mcssdog: require('@/components/animate/cssdog.vue'),*/
    mfooter: require('@/components/footer/Footer.vue'),
    startHeader: require('@/components/header/startHeader.vue')
  },
  methods: {
    songSearch: function (data) {
      this.songSearchData = data
      if(!this.showsong){
        this.showsong = true
      }
    },
    hiddeMenuLeft: function () {
      this.$store.commit('showMenuLeft', false)
    }
  },
  data: function () {
    return {
      songSearchData: {},
      showsong: false,
      showstart: false,
      showMenuLeft: false,
      showdog:false,
      transitionName: 'slide-left'
    }
  },
  created: function () {
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
  },
  computed: {
    showHead: function () {
      return this.$store.state.showHeader
    }
  },
  watch: {
    '$route': function (to,from) {
      const toP = to.path.split('/')[1];
      const fromP = from.path.split('/')[1];
      if(toP === 'search' || fromP === 'search'){
        //与search 之间的跳转
        this.transitionName = toP === 'search'? 'slide-left' : fromP === 'search'? 'slide-right': 'slide-left'
      }else if(fromP === 'ranking'){
        //与排行榜之间的跳转
        if( toP === 'personal' ){
          this.transitionName = 'slide-left'
        }else{
          this.transitionName = 'slide-right'
        }
      }else if(fromP === 'personal'){
          this.transitionName = 'slide-right'
      }else if(toP==='personal'){
        this.transitionName = 'slide-left'
      }else{
        //剩下的就是 home 跳转到 排行
        this.transitionName = 'slide-left'
      }
    }
  },
  mounted: function () {
    this.$nextTick(()=>{
      //获取纯音乐 填充播放列表
      this.$http.get(this.$store.state.dataHttp + '/search?keywords=纯音乐').then((val) => {
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
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../node_modules/animate.css';
@import './common/stylus/mixin.styl';
  body,html {
    height:100%;
    border-left:1px #ccc solid;
    border-right:1px #ccc solid;
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
.slide-left-enter {
  opacity: 1;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave{
  opacity: 1;
}
.slide-left-enter-active {
  opacity: 1;
  transition: all .2s linear;
  position: absolute;
  top:0px;
}
.slide-left-leave-active {
transform: translate3d(-100%, 0, 0);
opacity: 1;
transition: all .2s linear;
position: absolute;
top:0px;
}

.slide-right-enter{
opacity: 1;
transform: translate3d(-100%, 0, 0);
top:0px;
}
.slide-right-leave{
  opacity: 1;
}
.slide-right-enter-active {
position: absolute;
top:0px;
opacity: 1;
transition: all .2s linear;
}
.slide-right-leave-active{
  position: absolute;
  transform: translate3d(100%, 0, 0);
  top:0px;
  opacity: 1;
  transition: all .2s linear;
}

</style>
