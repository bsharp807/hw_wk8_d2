import { connect } from 'react-redux';
import Form from '../components/Form';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch({
        type: 'ADD_ITEM',
        item
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Form);
