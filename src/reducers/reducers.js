import { combineReducers } from 'redux'
import playlists from './playlists.js'
import queue from './player.js'
import openedPlaylist from './openedPlaylist.js'
import results from './results.js'
import playlistVisibility from './playlistVisibility.js'

const playlistApp = combineReducers({
    playlists,
    queue,
    openedPlaylist,
    results,
    playlistVisibility
})

export default playlistApp