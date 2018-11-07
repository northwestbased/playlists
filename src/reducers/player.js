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

const OPEN_PLAYLSIT = PLAY_VIDEO
const PLAY = 'PLAY'
const PAUSE = 'PAUSE'
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'

export default function player(state = {queue: [], isPlaying:false, current:0}, action) {
    switch (action.type) {
        case OPEN_PLAYLSIT:
            return {queue: action.queue, isPlaying:false, current:0}
        case PLAY:
            state = {...state}
            state.isPlaying = true
            return state
        case PAUSE:
            state = {...state}
            state.isPlaying = false
            return state
        case NEXT:
            state = {...state}
            state.current++
            return state
        case PREVIOUS:
            state = {...state}
            state.current--
            return state
        default:
            return state
    }
}


