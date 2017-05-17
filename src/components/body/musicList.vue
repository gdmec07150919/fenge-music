<template>
  <div class="populars-wrapper" ref="popularsWrapper" @click="this.console.log('music click')">
    <ul>
      <li class="popular" v-for="playlist in musicListDatas" :key="playlist.id">
        <img :src="playlist.coverImgUrl" style="width:100px;height:100px;"/>
        <div class="text-wrapper">
          <h3>{{playlist.name}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
    export default {
        props:{
          musicListDatas: null
        },
        data: function () {
            return {
              popularData: Object,
              playlistBScroll: null
            }
        },
        methods: {
          _initBScroll: function () {
            if ( this.playlistBScroll != null ){
            this.playlistBScroll.refresh()
              console.log('torefresh')
            return
          }
            this.playlistBScroll = new BScroll(this.$refs.popularsWrapper, {
              click: true,
              resizePolling:2
            })
            this.playlistBScroll.on('refresh', (pos) => {
              console.log('refresh')
            })
            console.log(this.playlistBScroll)
            console.log('popularLists');
          }
        },
        created: function() {
          this.$nextTick(function () {
            let self = this
            for(var i = 1;i<6;i++)
            {
              setTimeout(function () {
                if(self.musicListDatas != null){
                  console.log('scroll'+self.playlistBScroll)
                  self._initBScroll()
                }
              },250 * i*i)
            }
          })
        },
        updated: function () {
          console.log('updated M ')
        },
        destoryed: function () {
          console.log('destoryed M ')
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl';
  .populars-wrapper {
    width:360px;
    margin: 0 auto;
    height: 100%;
    overflow:hidden;
  }
  ul {
    width:100%;
    display:flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .popular {
    width: 28%;
    margin: 10px 5px 5px 5px;
  }
   .text-wrapper {
    width:100px;
  }
    h3 {
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
</style>
