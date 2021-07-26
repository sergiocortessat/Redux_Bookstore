// Create reducers for the state of the books
const defaultState = {
  isFetching: 'false',
};
const Books = (state = defaultState, action) => {
  switch (action.type) {
    case 'BOOK_ACTION':
      return {
        ...state,
        isFetching: action.payload.prop,
      };
    default:
      return state;
  }
};

export default Books;
