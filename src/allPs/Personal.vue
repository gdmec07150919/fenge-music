<template>
    <div>
        <p-header></p-header>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
    </div>
</template>


<script type="text/ecmascript-6">
  import header from '@/components/header/startHeader.vue';
  import BScroll from 'better-scroll'
    export default {
        data: function () {
            return {
              hScroll: null
            }
        },
        components: {
            'p-header': header
        },
        created: function () {
        },
      methods: {
      }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../common/stylus/mixin.styl';
  

</style>
