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


export default function fetchVideos(state = {}, action) {
    switch (action.type) {
        case FETCH_VIDEOS_REQUEST:
            return { ...state, keyword: action.keyword }
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
