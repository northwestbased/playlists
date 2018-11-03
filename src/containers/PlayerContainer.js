import { connect } from 'react-redux'
import Player from '../components/Player.js'


const mapStateToProps = state => ({
    queue: state.queue
})

const mapDispatchToProps = {  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
