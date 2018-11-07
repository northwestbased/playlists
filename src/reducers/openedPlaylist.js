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


export default function openedPlaylist(state = null, action) {
    switch (action.type) {
        case OPEN_PLAYLIST:
            return action.playlistId
        default:
            return state
    }
}

