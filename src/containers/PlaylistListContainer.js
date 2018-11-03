import { connect } from 'react-redux'
import { openPlaylist, createPlaylist, deletePlaylist, playlistIsShown } from '../actions/actions.js'
import PlaylistList from '../components/PlaylistList.js'


const mapStateToProps = state => ({
    playlists: state.playlists
})

const mapDispatchToProps = { openPlaylist, createPlaylist, deletePlaylist, playlistIsShown };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistList)