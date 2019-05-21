import { connect } from 'react-redux';
import Reset from '../components/Reset';

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => {
      dispatch({
        type: 'RESET',
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Reset);
