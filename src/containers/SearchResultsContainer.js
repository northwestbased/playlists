import { connect } from 'react-redux'
import { addVideo, playVideo } from '../actions/actions.js'
import SearchResults from '../components/SearchResults.js'


const mapStateToProps = state => ({
    results: state.results.results, playlists: state.playlists, keyword: state.results.keyword
})


const mapDispatchToProps = { addVideo, playVideo };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResults);