import Vuex from 'vuex'
export const store = new Vuex.Store({
    state: {
        isPlay: false ,//是否正在播放音乐,
        playList: {},  //播放列表
        playingSong: {} ,//正在播放的歌曲
        index: 0,
        playListSecordNav: {},
        showMenuLeft: false,
        loading: {}, //加载中 等待
        dataHttp: 'http://fenge2-huangwufeng.c9users.io'
    },
    mutations: {
        modifyToPlay: function (state) {
            state.isPlay = true //修改为 正在播放 状态
        },
        modifyToPause: function (state) {
            state.isPlay = false
        },
        setPlayList: function (state, data) {  //设置播放歌曲的列表
            state.playList = data
        },
        setPlaySong: function (state, index) { // 表示当前哪一首歌曲被播放 index表示播放歌曲列表中的 某一项
            state.playingSong = state.playList[index]
            state.index = index
        },
        nextSong: function (state) { //下一曲
            console.log(state.playList)
            if(state.playList.length-1 > state.index)
            {
                state.index ++
            }
            state.playingSong = state.playList[state.index]
        },
        previousSong: function (state) { //下一曲
            if(state.index > 0 && state.playList.length > 0)
            {
                state.index --
            }
            state.playingSong = state.playList[state.index]
        },
        showMenuLeft: function (state, isShow) {
            state.showMenuLeft = isShow
        },
        LoadingClose: function (state, loadingInstance) {
            state.loading.close()
        }
    }
})
