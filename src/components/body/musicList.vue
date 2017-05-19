<template>
  <div class="populars-wrapper" ref="popularsWrapper" @click="this.console.log('music click')">
    <ul ref="ul">
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
      <li class="popular" v-for="playlist in musicListDatas" :key="playlist.id">
        <img v-on:load="_loaded" :src="playlist.coverImgUrl" style="width:100px;height:100px;"/>
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
      props: {
        musicListDatas: null
      },
      data: function () {
        return {
          popularData: Object,
          playlistBScroll: null,
          showLoading: true           //是否显示加载中动画
        }
      },
      methods: {
        _initBScroll: function () {
          if (this.playlistBScroll != null) {
            this.playlistBScroll.refresh()
            return
          }
          this.playlistBScroll = new BScroll(this.$refs.popularsWrapper, {
            click: true,
            resizePolling: 2
          })
        },
        _loaded: function () {
          this.showLoading = false
          this._initBScroll()
        }
      },
      created: function () {
        this.$nextTick(function () {
        })
      },
      watch: {
        musicListDatas: function () {
          console.log('musicListDatas')
          let self =this
          setTimeout(function () {
            if(self.playlistBScroll != null)
            self.playlistBScroll.refresh()
          }, 0);
        }
      },
      computed: {
        updated: function () {
          console.log('updated M ')
        },
        destoryed: function () {
          console.log('destoryed M ')
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../../common/stylus/mixin.styl';
  @import '../../../node_modules/loaders.css';
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
