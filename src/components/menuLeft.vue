<template>
    <div class="menu-left">
        <div class="logo">
          <img src="../../static/carousel1.jpg" style="width:80px;height:80px;">
        </div>
        <div class="list-wrapper">
          <div v-for="item in menuItem" class="item-wrapper">
              {{item}}
          </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data: function () {
            return {
                menuItem: ['登录','设置','退出']
            }
        },
      components: {
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../common/stylus/mixin.styl";
    .menu-left{
      width: 150px;
      height: 100%;
      font-size: 30px;
      color: #fbfdff;
      background: #2eA0FF;
      z-index: 120;
    }
    .logo {
      margin-top: 20px;
      text-align: center;
    }
    img{
      border-radius: 40px;
    }
    .item-wrapper {
      rem-height(60);
      text-align: center;
    }
</style>
