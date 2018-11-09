import { connect } from 'react-redux'
import { addVideo, playVideo, removeVideo, deletePlaylist } from "../actions/actions.js";
import PlaylistDetail from '../components/PlaylistDetail.js'


const mapStateToProps = state => ({
    playlist: state.playlists[state.openedPlaylist], openedPlaylist: state.openedPlaylist
})


const mapDispatchToProps = { addVideo, removeVideo, playVideo, deletePlaylist };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistDetail);

