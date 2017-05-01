<template>
  <div id="app">
    <link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css">
    <transition 
    name="mheader-transition"
    enter-active-class="animated flip"
    leave-active-class="animated bounceOutRight"
    >
    <mheader v-show="showstart" v-on:songSearch="songSearch"></mheader>
    </transition>
    <song id="songwrapper" v-if="showsong" :songs="songSearchData"></song>
    <mcssdog v-if="showdog" id="cssdog" ref="cssdog">{{showdog}}</mcssdog>
    <mfooter></mfooter>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  components: {
    mheader: require('./components/header/header.vue'),
    song: require('./components/songs/Song.vue'),
    mcssdog: require('./components/animate/cssdog.vue'),
    mfooter: require('./components/footer/Footer.vue')
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
    this.$nextTick(function () {
        var self = this
        setTimeout(function(){
          self.showdog = false
          self.showstart = true
          document.body.style="background:#fff"
        },5000)
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app{
    position:relative;
  }
  #cssdog{
    position:absolute;
    top:200px;
    left:50%;
    margin-left:-75px;
  }
</style>
