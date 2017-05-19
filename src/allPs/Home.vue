<template>
    <div class="home">
      <h-header></h-header>
      <h-carousel class="h-carousel"></h-carousel>
      <h-menuBody class="h-menu"></h-menuBody>
  <!--    <div class="h-router-view" ref="scroll">-->
        <router-view ></router-view>
<!--      </div>-->
    </div>
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
          this.$router.push('/pure')
         /* let self = this
          setTimeout(function() {
            self.hScroll = new BScroll(self.$refs.scroll,{
              click:true
            })
          },2000)*/
        },
      methods: {
        toD: function () {
          this.hScroll.destroy()
        }
      },
      watch: {
        $route: function () {
          if(this.hScroll != null) {
            this.hScroll.destroy()
            let self = this
            setTimeout(function() {
              self.hScroll = new BScroll(self.$refs.scroll,{
              })
            },2000)
          }
        }
      },
      beforeMount:  function () {
        this.$store.state.loading.close()
      },
      beforeUpdate: function ()  {
      },
      mounted: function ()  {
        console.log('mounted')
        this.$nextTick(()=>{
          this.$store.state.loading.close()
        })
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../common/stylus/mixin.styl';
  .home{
    display: flex;
    flex-direction: column;
    border-right:1px #ccc;
    width:100%;
  }
  .h-carousel{
    height:130px;
  }
  .h-menu {
    height:60px;
  }
  .h-router-view{
    flex: 1;
    overflow: hidden;
  }

</style>
