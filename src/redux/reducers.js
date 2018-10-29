import { combineReducers } from 'redux'
import {
    ADD_VIDEO,
    PLAY_VIDEO,
    CREATE_PLAYLIST,
    OPEN_PLAYLIST,
    DELETE_PLAYLIST,
    REMOVE_VIDEO,
    FETCH_VIDEOS_REQUEST,
    FETCH_VIDEOS_FAILURE,
    FETCH_VIDEOS_SUCCESS
} from './actions'



function playlists(state = [], action) {
    switch (action.type) {
        case ADD_VIDEO:
            return state.map((item, index) => {
                if (index !== action.playlistId) {
                  return item
                }
    
                let i = {...item}
                i.tracks = [...i.tracks, action.videoId]
                return i
              })


        case REMOVE_VIDEO:
            let v = {...state[action.playlistId]}
            console.log(v, action.playlistId)

            v.tracks.splice(action.videoIndex, 1)

            return [
                ...state.slice(0, action.playlistId),
                v,
                state.slice(action.playlistId + 1)
            ]  
             
        case CREATE_PLAYLIST:
            return [
                {
                    title: action.title,
                    tracks: []
                },
                ...state
            ]
        case DELETE_PLAYLIST:
            let s = state.slice()
            s.splice(action.playlistId, 1)
            return s
        default:
            return state
    }
}

function fetchVideos(state = {}, action) {
    switch (action.type) {
        case FETCH_VIDEOS_REQUEST:
            console.log("request requested...")
            return state
        case FETCH_VIDEOS_SUCCESS:
            let results = action.results.items.map(r => ({id: r.id.videoId, title: r.snippet.title, description: r.snippet.description}))
            return {...state, results}

        case FETCH_VIDEOS_FAILURE:
            return {...state, error: action.error}
        default:
            return state
    }
}

function playingVideo(state = "", action) {
    switch (action.type) {
        case PLAY_VIDEO:
            return action.videoId
        default:
            return state
    }
}

function openPlaylist(state = null, action) {
    switch (action.type) {
        case OPEN_PLAYLIST:
            return action.playlistId
        default:
            return state
    }
}

const playlistApp = combineReducers({
    playlists,
    nowPlaying: playingVideo,
    openedPlaylist: openPlaylist,
    results: fetchVideos
})

export default playlistApp