<template>
    <div id="carousel-wrapper">
         <el-carousel :interval="2000" type="card" height="100px">
             <el-carousel-item  v-for="(data,index) in datasArr" :key="index" class="carousel-imgitem">
                 <span id="carousel-imgwrapper"><img :src="data.sPicUrl"></img></span>
             </el-carousel-item>
         </el-carousel>
     </div>
    

</template>

<script type="text/ecmascript-6">
    export default {
       data: function () {
           return {
                datasArr: Object
           }
       },
       created () {
          this.$nextTick(function () {
             this.$http.get('/api//personalized/privatecontent').then( (val) => {
                 let result = val.body.result
                 console.log(result)
                 this.datasArr = result
                 
             })
          })
       }
}
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
    #carousel-wrapper {
        max-width:360px;
        margin:5px auto;
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
</style>