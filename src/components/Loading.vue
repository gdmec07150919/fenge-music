<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    显示整页加载，3 秒后消失
  </el-button>
</template>

<script type="text/ecmascript-6">
    export default {
        data: function () {
            return {
                
            }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>