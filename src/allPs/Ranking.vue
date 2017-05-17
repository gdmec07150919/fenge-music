<template>
  <div class="ranking">
    <r-header></r-header>
    <r-ranking></r-ranking>
  </div>

</template>

<script type="text/ecmascript-6">
import ranking from '@/components/top-menu/Ranking.vue';
import header from '@/components/header/startHeader.vue';
    export default {
        data: function () {
            return {

            }
        },
        components: {
            'r-ranking': ranking,
            'r-header': header
        },
        created: function () {
          this.$nextTick(()=> {
            this.$store.state.loading.close()
          })
        }
      }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
