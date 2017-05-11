<template>
  <div id="app">
  <!--  <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <transition 
    name="mheader-transition"
    enter-active-class="animated flip"
    leave-active-class="animated bounceOutRight"
    >
    <mheader v-show="showstart" v-on:songSearch="songSearch"></mheader>
    </transition>
   <song id="songwrapper" v-if="showsong" :songs="songSearchData"></song>
    <mcssdog v-if="showdog" id="cssdog" ref="cssdog">{{showdog}}</mcssdog>
    <mfooter></mfooter>-->
    <div id="app-header">
      <start-header></start-header>
    </div>
    <carousel class="app-carousel"></carousel>
    <div id="app-menu-body">
        <menu-body></menu-body>
    </div>
    <div id="app-scroll">
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </div>
    <mfooter></mfooter>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  components: {
    song: require('@/components/songs/Song.vue'),
    mcssdog: require('@/components/animate/cssdog.vue'),
    mfooter: require('@/components/footer/Footer.vue'),
    startHeader: require('@/components/header/startHeader.vue'),
    Carousel: require('@/components/songs/carousel.vue'),
    menuBody: require('@/components/body/MenuBody.vue')
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
      showdog:true
    }
  },
  created: function () {
    //激活路由 popular
    this.$router.push('/search')
    this.$nextTick(function () {
        var self = this
        //将启动动画 隐藏
        setTimeout(function(){
          self.showdog = false
          self.showstart = true
          document.body.style="background:#fff"
        },5000)
        //激活推荐歌单路由
        
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body,html {
    height:100%;
  }
  #app{
    position:flex;
    min-width:360px;
    height:100%;
    margin:0 auto;
    flex-direction: column;
  }
  #app-menu-body {
    height: 50px;
  }
  #app-scroll {
    flex: 1;
    overflow:hidden;
  }
  #cssdog{
    position:absolute;
    top:200px;
    left:50%;
    margin-left:-75px;
  }
  .app-carousel {
     top:50px;
  }
</style>
