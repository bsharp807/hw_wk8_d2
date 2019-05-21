const listReducer = (state= [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newState = [...state, action.item];
      return newState;
    case 'RESET':
      const resetState = [];
      return resetState
    default:
      return state;
  }
}

export default listReducer;
