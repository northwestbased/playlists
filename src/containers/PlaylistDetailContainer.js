import { connect } from 'react-redux'
import { addVideo, playVideo, removeVideo, addToQueue, nukeQueue } from "../redux/actions.js";
import PlaylistDetail from '../components/PlaylistDetail.js'


const mapStateToProps = state => ({
    playlists: state.playlists
})


const mapDispatchToProps = { addVideo, playVideo, removeVideo, addToQueue, nukeQueue };

export default connect(
    state => ({ playlist: state.playlists[state.openedPlaylist], openedPlaylist: state.openedPlaylist }),
    mapDispatchToProps
)(PlaylistDetail);

