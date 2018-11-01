import { connect } from 'react-redux'
import { addVideo, addToQueue, nukeQueue } from '../redux/actions.js'
import SearchResults from '../components/SearchResults.js'


const mapStateToProps = state => ({
    results: state.results.results, playlists: state.playlists
})


const mapDispatchToProps = { addVideo, addToQueue, nukeQueue };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);