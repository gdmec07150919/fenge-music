<template>
    <div>
        <p-header></p-header>
        <el-row type="flex" justify="space-around">
          <el-col v-for="item in items1" :span="6" :key="item"><div class="grid-content bg-purple-dark">{{item}}</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col v-for="item in items2" :span="6" :key="item"><div class="grid-content bg-purple-dark">{{item}}</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col v-for="item in items3"  :span="20" :key="item"><div class="grid-content bg-purple-dark">{{item}}</div></el-col>
        </el-row>

        <el-row>
          <el-col v-for="item in items3"  :span="24"><img style="width:100%;border-radius:10px;" src="../../static/carousel1.jpg"/></el-col>
        </el-row>
    </div>
</template>


<script type="text/ecmascript-6">
  import header from '@/components/header/startHeader.vue';
  import BScroll from 'better-scroll'
export default {
    data: function () {
      return {
        hScroll: null,
        items1: ['音乐论坛','本地歌曲',"下载歌曲"],
        items2:["我喜欢","下载MV","最近播放"],
        items3 : ["听歌识别"]
        }
    },
    components: {
        'p-header': header
    },
    created: function () {
      this.$nextTick(()=> {
        this.$store.state.loading.close()
      })
    }
}
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../common/stylus/mixin.styl';
  .el-row {
    padding-top: 10px;
    margin-bottom: 20px;
  &:last-child {
     margin: 3px;
   }
  }
  .el-col {
    border-radius: 4px;
    margin-top: 5px;
  }
  .bg-purple-dark {
    background: #fff;
    border: 1px solid #20A0FF;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
