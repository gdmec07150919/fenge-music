<template>
    <div class="carousel-wrapper">
         <el-carousel :interval="2000" type="card" height="100px">
             <el-carousel-item  v-for="(data,index) in datasArr" :key="index" class="carousel-imgitem">
                <img :src="data.pic">
             </el-carousel-item>
         </el-carousel>
     </div>


</template>

<script type="text/ecmascript-6">
    export default {
       data: function () {
           return {
                datasArr: [{pic: require('./carousel1.jpg')},{pic:require('./carousel2.jpg')},{pic:require('./carousel3.jpg')},{pic:require('./carousel4.jpg')},{pic:require('./carousel5.jpg')}]
           }
       },
       created () {
        console.log(this.datasArr)

       },
       mounted: function () {
         this.$nextTick(function () {
           this.$http.get('/api/banner').then( (val) => {
             let result = val.body.banners
             this.datasArr = result
           })
         })
       }
}
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
    @import '../../common/stylus/mixin.styl';
    .carousel-wrapper {
        width: 100%;
        margin:5px auto 0 auto;
        padding:0 10px 0 10px;
    }
    .el-carousel__item > span {
    font-size: 14px;
    opacity: 2;
    line-height: 200px;
    background:transparent;
    margin: 0;
    text-align:center;
  }
   .el-carousel__item > span > img {
        width:200px;

   }
   #carousel-imgwrapper {
       text-align:center;
   }
  .el-carousel__item > img {
        width:180px;
        height:100px

   }
</style>
