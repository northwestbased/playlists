import uuid from '@uuid/v4-components';

const defaultState = {
    currentlyOpened:undefined,
    playlistOrder:[],
    playlists:new Map()
}



function playlists(state=defaultState, action) {
    switch (action.type) {
        case CREATE_PLAYLIST:
            let id = UUID()
            let newPlaylist = {
                title:action.title,
                id,
                tracks: [],
                uuid: uuid()
            }
            state.playlistOrder.push(id)
            state.playlists.set(id, newPlaylist)
            state.currentlyOpened = id
            return state
        case DELETE_PLAYLIST:
            
    }
}