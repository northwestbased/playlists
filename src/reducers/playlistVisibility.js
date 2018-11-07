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


export default function playlistVisibility(state = false, action) {

    if (action.type === TOGGLE_PLAYLIST_VISIBILITY) {
        return action.value
    }
    return state
}
