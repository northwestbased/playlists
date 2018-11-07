import { connect } from 'react-redux'
import { openPlaylist, createPlaylist, deletePlaylist, playlistIsShown, playVideo } from '../actions/actions.js'
import PlaylistList from '../components/PlaylistList.js'
    

const mapStateToProps = state => ({
    playlists: state.playlists
})

const mapDispatchToProps = { openPlaylist, createPlaylist, deletePlaylist, playlistIsShown, playVideo };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistList)