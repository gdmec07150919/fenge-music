<template>
    <!-- 推荐歌单 -->
    <div class="recommoned-wrapper">
     <div class="recommoned" v-for="playlist in recommonedData" :key="playlist.id">
            <img :src="playlist.picUrl" style="width:100px"/>
            <div class="text-wrapper">
                <h3>{{playlist.name}}{{playlist.copywriter}}</h3>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
          return {
              recommonedData: Object
          }
        },
        created () {
            this.$nextTick(function () {
                this.$http.get('/api/personalized').then((val) => {
                    console.log('recommoned')
                    console.log(val.body.result)
                    this.recommonedData = val.body.result
                },(error) => {
                    console.log(error)
                })
            })
        } 
    }
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
    .recommoned-wrapper {
        width:360px; 
        display:flex;
        max-height: 640px;
        flex-flow: row wrap;
        margin: 0 auto;
        justify-content: space-around;

    }
    .recommoned-wrapper .recommoned {
        width: 28%;
        margin: 7px;
    }
    .recommoned-wrapper  .text-wrapper {
        width:100px;
    }
    .recommoned-wrapper h3 {
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2; 
    }
</style>