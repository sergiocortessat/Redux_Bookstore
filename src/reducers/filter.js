const bookFilter = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        books: state.books.filter((book) => book.category === action.payload.filter),
      };
    default:
      return state;
  }
};

export default bookFilter;
