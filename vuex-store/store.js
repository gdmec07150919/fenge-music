import Vuex from 'vuex'
export const store = new Vuex.Store({
    state: {
        isPlay: false ,//是否正在播放音乐,
        playList: {},  //播放列表
        playingSong: {} //正在播放的歌曲
    },
    mutations: {
        modifyToPlay (state) {
            state.isPlay = true //修改为 正在播放 状态
        },
        modifyToPause (state) {
            state.isPlay = false
        },
        setPlayList (state, data) {  //设置播放歌曲的列表
            state.playList = data
        },
        setPlaySong (state, index) { // 表示当前哪一首歌曲被播放 index表示播放歌曲列表中的 某一项
            state.playingSong = state.playList[index]
        }
    }
})