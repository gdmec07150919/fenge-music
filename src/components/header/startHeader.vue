<template>
    <div id="start-header">
      <transition
        enter-active-class="animated slideInLeft"
        leave-active-class="animated fadeOutLeftBig"
        >
        <menu-left v-if="showMenuLeft" class="menu-left"></menu-left>
      </transition>
        <div class="app-header-menu fa-reorder" @click.stop="_showMenuLeft"></div>
        <div class="font-wrapper">
            <router-link tag = "span" :to="{name: 'home'}" class="music-recommoned" >主页</router-link>
            <router-link tag = "span" :to="{name: 'ranking'}"  class="music-ranking-list">排行榜</router-link>
            <router-link tag = "span" :to="{name: 'personal'}"  class="music-personal">个人</router-link>
        </div>
        <div class="search-wrapper"><router-link tag="span" to="/search" class="fa-search"></router-link></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            clickRecommoned: function () {
                this.$router.push('/recommoned')
            },
            clickRanking: function () {
                this.$router.push('/ranking')
            },
            clinkPersonal: function () {
                this.$router.push('/personal')
            },
            _showMenuLeft: function () {
                console.log('showMenuLeft')
                this.$store.commit('showMenuLeft', true)
            }
        },
      computed: {
        showMenuLeft: function () {
          return this.$store.state.showMenuLeft
        }
      },
      components: {
        menuLeft: require('../menuLeft.vue')
      }
    }
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
@import url('../../common/stylus/mixin.styl');
#start-header{
    display:inline-block;
    width:100%;
    background:#20A0FF;
    color:#E5E9F2;
    font-size:36px;
    margin: 0;
  }
.app-header-menu {
    display:inline-block;
    color:#F9FAFC;
    margin-left:5px;
}
.font-wrapper{
    display:inline-block;
    margin-left:30px;
}
.music-recommoned.router-link-active, .music-ranking-list.router-link-active, .music-personal.router-link-active{
    color:#fff;
    font-size:23px;
    margin-top:5px;
}
.music-recommoned,.music-ranking-list,.music-personal{
    display:inline-block;
    font-size:21px;
    vertical-align:text-top;
    margin-top:8px;
}

.search-wrapper{
    float:right;
    height: 50px;
    margin-right: 5px;
}
.start-header > .search-wrapper > .el-icon-search {
    display:inline-block;
    color:#F9FAFC;
    line-height: 50px;
}


</style>
