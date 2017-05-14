<template>
  <transition mode="out in"
              enter-active-class="animated slideInLeft"
              leave-active-class="animated slideOutLeft"
    >
    <div class="home">
      <h-header></h-header>
      <h-carousel class="h-carousel"></h-carousel>
      <h-menuBody class="h-menu"></h-menuBody>
      <div class="h-router-view" ref="scroll">
        <router-view ></router-view>
      </div>
    </div>
    </transition>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/startHeader.vue';
  import carousel from '@/components/songs/carousel.vue';
  import menuBody from '@/components/body/MenuBody.vue';
  import BScroll from 'better-scroll'
    export default {
        data: function () {
            return {
              hScroll: null
            }
        },
        components: {
            'h-carousel': carousel,
            'h-menuBody': menuBody,
            'h-header': header
        },
        created: function () {
          this.$router.push('/home/popular')
          let self = this
          setTimeout(function() {
            self.hScroll = new BScroll(self.$refs.scroll,{
              click:true
            })
            self.hScroll.on('destroy', (pos) => {
              console.log('destroy啦啦啦 ')
              console.log(self.hScroll)
            })
          },2000)
        },
      methods: {
        toD: function () {
          this.hScroll.destroy()
        }
      },
      watch: {
        $route: function () {
            console.log('路由变化')
          if(this.hScroll != null) {
            this.hScroll.destroy()
            let self = this
            setTimeout(function() {
              self.hScroll = new BScroll(self.$refs.scroll,{
              })
              self.hScroll.on('destroy', (pos) => {
                console.log('destroy啦啦啦 ')
                console.log(self.hScroll)
              })
            },2000)
          }
        }
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../common/stylus/mixin.styl';
  .home{
    display: flex;
    flex-direction: column;
  }
  .h-carousel{
    height:130px;
  }
  .h-menu {
    rem-height(50);
  }
  .h-router-view{
    flex: 1;
    overflow: hidden;
  }
</style>
