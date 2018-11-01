import { connect } from 'react-redux'
import { removeFromQueue } from "../redux/actions.js";
import Player from '../components/Player.js'


const mapStateToProps = state => ({
    queue: state.queue
})

const mapDispatchToProps = { removeFromQueue };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
