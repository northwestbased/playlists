import uuid from 'js-uuid';

import {
    ADD_VIDEO,
    CREATE_PLAYLIST,
    DELETE_PLAYLIST,
    REMOVE_VIDEO,

    OPEN_PLAYLIST //?
} from '../actions/actions'

export default function playlists(state = [], action) {
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
