<template>
  <div id="app">
  <mheader></mheader>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  components: {
    hello: require('./components/Hello.vue'),
    mheader: require('./components/header/header.vue')
  }
}
</script>

<style>

</style>
