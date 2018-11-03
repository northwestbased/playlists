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
    FETCH_VIDEOS_SUCCESS,
    TOGGLE_PLAYLIST_VISIBILITY
} from '../actions/actions'

function playlists(state = [], action) {
    switch (action.type) {
        case ADD_VIDEO:
            let newState = state.map((item, index) => {
                if (index !== Number(action.playlistId)) {
                    return item
                }

                let i = { ...item }
                i.tracks = [...i.tracks, action.video]
                return i
            })
            return newState

        case REMOVE_VIDEO:
            let v = { ...state[action.playlistId] }
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
            return state
        case FETCH_VIDEOS_SUCCESS:
            let results = action.results.items.map(r => (
                {
                    id: r.id.videoId,
                    title: r.snippet.title,
                    description: r.snippet.description,
                    author: r.snippet.channelTitle,
                    thumbnailUrl: r.snippet.thumbnails.default.url
                }
            ))
            return { ...state, results }

        case FETCH_VIDEOS_FAILURE:
            return { ...state, error: action.error }
        default:
            return state
    }
}

function queue(state = [], action) {
    switch (action.type) {
        case PLAY_VIDEO:
            return action.videos
        default:
            return state
    }
}

function openedPlaylist(state = null, action) {

    switch (action.type) {
        case OPEN_PLAYLIST:
            return action.playlistId
        default:
            return state
    }
}

function playlistVisibility(state = false, action) {

    if (action.type === TOGGLE_PLAYLIST_VISIBILITY) {
        return action.value
    }
    return state
}

const playlistApp = combineReducers({
    playlists: playlists,
    queue: queue,
    openedPlaylist,
    results: fetchVideos,
    playlistVisibility: playlistVisibility
})

export default playlistApp