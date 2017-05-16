<template>
    <div id="menu-body-wrapper">
         <div id="menu-body">
            <router-link tag = "span" to="/popular" class="music-popular">流行</router-link> <!-- Nodejs网易云api: 网友精选碟 (歌单) -->
            <router-link tag = "span" to="/pure" class="music-absolute">纯音乐</router-link>
            <router-link tag = "span" to="/classic" class="music-allusion">古典</router-link>
            <router-link tag = "span" to="radio" class="music-radio">电台</router-link>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        methods: {
            clickAbsolute: function () {
                this.$router.push('/recommoned')
            },
            clickPopular: function () {
                this.$router.push('/popular')
            },
            clickAllusion: function () {
                this.$router.push('/popular')
            },
            clickRadio: function () {
                this.$router.push('/popular')
            }

        }
    }
</script>

<style  lang="stylus"  rel="stylesheet/stylus" >
  #menu-body-wrapper{
    display: flex;
    flex-direction: column;
  }
#menu-body{
    display: flex;
    flex-direction: row;
    background: #28224e;
    color: #F7BA2A;
    font-size: 18px;
    height:50px;
    align-items: center;
}
#menu-body>.router-songlist{
    flex:1;
    width: 100%;
}
.music-absolute.router-link-active, .music-allusion.router-link-active, .music-popular.router-link-active, .music-radio.router-link-active{
       font-size:20px;
       color:#FF4949;
}
.music-absolute, .music-allusion, .music-popular, .music-radio{
    text-align: center;
}

#menu-body > .music-absolute{
    flex: 1;
}
#menu-body > .music-popular{
    flex: 1;
}
#menu-body > .music-allusion{
    flex: 1;
}
#menu-body > .music-radio{
    flex: 1;
}



</style>
